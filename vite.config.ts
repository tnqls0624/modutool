import { defineConfig } from 'vite'
import pages from '@hono/vite-cloudflare-pages'
import { copyFileSync, cpSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    pages(),
    {
      name: 'copy-public-files',
      closeBundle() {
        const publicDir = resolve(__dirname, 'public')
        const distDir = resolve(__dirname, 'dist')
        
        if (existsSync(publicDir)) {
          cpSync(publicDir, distDir, { recursive: true })
          console.log('✓ Copied public files to dist/')
        }
      }
    }
  ],
  build: {
    outDir: 'dist'
  }
})
