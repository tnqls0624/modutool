import { Hono } from 'hono'
import { cors } from 'hono/cors'
import type { Bindings, AITool, AIToolRow, APIResponse } from './types'

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS
app.use('*', cors())

// Helper: DB Row를 AITool 객체로 변환
function rowToTool(row: AIToolRow): AITool {
  return {
    id: row.id,
    name: row.name,
    icon: row.icon || undefined,
    description: row.description,
    url: row.url || undefined,
    gradient: row.gradient || undefined,
    categories: JSON.parse(row.categories || '[]'),
    priceTypes: JSON.parse(row.priceTypes || '[]'),
    korean: row.korean === 1,
    features: row.features ? JSON.parse(row.features) : undefined,
    useCases: row.useCases ? JSON.parse(row.useCases) : undefined,
    targetAudience: row.targetAudience ? JSON.parse(row.targetAudience) : undefined,
    similarTools: row.similarTools ? JSON.parse(row.similarTools) : undefined,
    pricingPlans: row.pricingPlans ? JSON.parse(row.pricingPlans) : undefined,
    status: row.status as 'active' | 'inactive' | 'draft',
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  }
}

// Helper: AITool 객체를 DB 삽입용 객체로 변환
function toolToRow(tool: Partial<AITool>) {
  return {
    id: tool.id,
    name: tool.name,
    icon: tool.icon || null,
    description: tool.description,
    url: tool.url || null,
    gradient: tool.gradient || null,
    categories: JSON.stringify(tool.categories || []),
    priceTypes: JSON.stringify(tool.priceTypes || []),
    korean: tool.korean ? 1 : 0,
    features: JSON.stringify(tool.features || []),
    useCases: JSON.stringify(tool.useCases || []),
    targetAudience: JSON.stringify(tool.targetAudience || []),
    similarTools: JSON.stringify(tool.similarTools || []),
    pricingPlans: JSON.stringify(tool.pricingPlans || []),
    status: tool.status || 'active'
  }
}

// Health check
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', message: 'MODUTOOL API is running' })
})

// ===========================
// AI Tools CRUD API
// ===========================

// GET /tables/ai_tools - 모든 AI 툴 조회
app.get('/tables/ai_tools', async (c) => {
  try {
    const { DB } = c.env
    const { limit = '100', offset = '0', status = 'active' } = c.req.query()
    
    const stmt = DB.prepare(`
      SELECT * FROM ai_tools 
      WHERE status = ? 
      ORDER BY createdAt DESC 
      LIMIT ? OFFSET ?
    `).bind(status, parseInt(limit), parseInt(offset))
    
    const result = await stmt.all<AIToolRow>()
    const tools = result.results.map(rowToTool)
    
    return c.json<APIResponse<AITool[]>>({
      success: true,
      data: tools
    })
  } catch (error: any) {
    console.error('Error fetching tools:', error)
    return c.json<APIResponse<null>>({
      success: false,
      error: error.message
    }, 500)
  }
})

// GET /tables/ai_tools/:id - 특정 AI 툴 조회
app.get('/tables/ai_tools/:id', async (c) => {
  try {
    const { DB } = c.env
    const id = c.req.param('id')
    
    const stmt = DB.prepare('SELECT * FROM ai_tools WHERE id = ?').bind(id)
    const row = await stmt.first<AIToolRow>()
    
    if (!row) {
      return c.json<APIResponse<null>>({
        success: false,
        error: 'Tool not found'
      }, 404)
    }
    
    const tool = rowToTool(row)
    return c.json<APIResponse<AITool>>({
      success: true,
      data: tool
    })
  } catch (error: any) {
    console.error('Error fetching tool:', error)
    return c.json<APIResponse<null>>({
      success: false,
      error: error.message
    }, 500)
  }
})

// POST /tables/ai_tools - 새 AI 툴 추가
app.post('/tables/ai_tools', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json<Partial<AITool>>()
    
    // 필수 필드 검증
    if (!body.id || !body.name || !body.description) {
      return c.json<APIResponse<null>>({
        success: false,
        error: 'Missing required fields: id, name, description'
      }, 400)
    }
    
    const rowData = toolToRow(body)
    
    const stmt = DB.prepare(`
      INSERT INTO ai_tools (
        id, name, icon, description, url, gradient,
        categories, priceTypes, korean, features, useCases,
        targetAudience, similarTools, pricingPlans, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      rowData.id,
      rowData.name,
      rowData.icon,
      rowData.description,
      rowData.url,
      rowData.gradient,
      rowData.categories,
      rowData.priceTypes,
      rowData.korean,
      rowData.features,
      rowData.useCases,
      rowData.targetAudience,
      rowData.similarTools,
      rowData.pricingPlans,
      rowData.status
    )
    
    await stmt.run()
    
    return c.json<APIResponse<AITool>>({
      success: true,
      data: body as AITool,
      message: 'Tool created successfully'
    }, 201)
  } catch (error: any) {
    console.error('Error creating tool:', error)
    return c.json<APIResponse<null>>({
      success: false,
      error: error.message
    }, 500)
  }
})

// PUT /tables/ai_tools/:id - AI 툴 수정
app.put('/tables/ai_tools/:id', async (c) => {
  try {
    const { DB } = c.env
    const id = c.req.param('id')
    const body = await c.req.json<Partial<AITool>>()
    
    // 기존 툴 확인
    const existingStmt = DB.prepare('SELECT * FROM ai_tools WHERE id = ?').bind(id)
    const existing = await existingStmt.first()
    
    if (!existing) {
      return c.json<APIResponse<null>>({
        success: false,
        error: 'Tool not found'
      }, 404)
    }
    
    const rowData = toolToRow({ ...body, id })
    
    const stmt = DB.prepare(`
      UPDATE ai_tools SET
        name = ?,
        icon = ?,
        description = ?,
        url = ?,
        gradient = ?,
        categories = ?,
        priceTypes = ?,
        korean = ?,
        features = ?,
        useCases = ?,
        targetAudience = ?,
        similarTools = ?,
        pricingPlans = ?,
        status = ?,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      rowData.name,
      rowData.icon,
      rowData.description,
      rowData.url,
      rowData.gradient,
      rowData.categories,
      rowData.priceTypes,
      rowData.korean,
      rowData.features,
      rowData.useCases,
      rowData.targetAudience,
      rowData.similarTools,
      rowData.pricingPlans,
      rowData.status,
      id
    )
    
    await stmt.run()
    
    return c.json<APIResponse<AITool>>({
      success: true,
      data: { ...body, id } as AITool,
      message: 'Tool updated successfully'
    })
  } catch (error: any) {
    console.error('Error updating tool:', error)
    return c.json<APIResponse<null>>({
      success: false,
      error: error.message
    }, 500)
  }
})

// DELETE /tables/ai_tools/:id - AI 툴 삭제
app.delete('/tables/ai_tools/:id', async (c) => {
  try {
    const { DB } = c.env
    const id = c.req.param('id')
    
    // 기존 툴 확인
    const existingStmt = DB.prepare('SELECT * FROM ai_tools WHERE id = ?').bind(id)
    const existing = await existingStmt.first()
    
    if (!existing) {
      return c.json<APIResponse<null>>({
        success: false,
        error: 'Tool not found'
      }, 404)
    }
    
    const stmt = DB.prepare('DELETE FROM ai_tools WHERE id = ?').bind(id)
    await stmt.run()
    
    return c.json<APIResponse<null>>({
      success: true,
      message: 'Tool deleted successfully'
    })
  } catch (error: any) {
    console.error('Error deleting tool:', error)
    return c.json<APIResponse<null>>({
      success: false,
      error: error.message
    }, 500)
  }
})

export default app
