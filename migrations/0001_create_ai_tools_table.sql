-- AI Tools Table
CREATE TABLE IF NOT EXISTS ai_tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT NOT NULL,
  url TEXT,
  gradient TEXT,
  
  -- 카테고리 (JSON 배열로 저장, 다중 카테고리 지원)
  categories TEXT NOT NULL DEFAULT '[]',
  
  -- 가격 타입 (JSON 배열로 저장, 다중 가격 지원)
  priceTypes TEXT NOT NULL DEFAULT '[]',
  
  -- 한국어 지원
  korean INTEGER NOT NULL DEFAULT 0,
  
  -- 상세 정보
  features TEXT DEFAULT '[]',
  useCases TEXT DEFAULT '[]',
  targetAudience TEXT DEFAULT '[]',
  similarTools TEXT DEFAULT '[]',
  
  -- 가격 플랜 (JSON 배열)
  pricingPlans TEXT DEFAULT '[]',
  
  -- 상태 (active, inactive, draft)
  status TEXT NOT NULL DEFAULT 'active',
  
  -- 메타데이터
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 카테고리별 검색을 위한 인덱스
CREATE INDEX IF NOT EXISTS idx_ai_tools_categories ON ai_tools(categories);

-- 가격 타입별 검색을 위한 인덱스
CREATE INDEX IF NOT EXISTS idx_ai_tools_priceTypes ON ai_tools(priceTypes);

-- 상태별 검색을 위한 인덱스
CREATE INDEX IF NOT EXISTS idx_ai_tools_status ON ai_tools(status);

-- 한국어 지원 필터를 위한 인덱스
CREATE INDEX IF NOT EXISTS idx_ai_tools_korean ON ai_tools(korean);

-- 생성일 기준 정렬을 위한 인덱스
CREATE INDEX IF NOT EXISTS idx_ai_tools_createdAt ON ai_tools(createdAt DESC);
