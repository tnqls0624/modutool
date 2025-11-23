-- 샘플 AI 툴 데이터 삽입
-- 기존 tools.js의 데이터를 D1 형식으로 변환

-- 이미지 생성 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('midjourney', 'Midjourney', '🎨', '텍스트로 고품질 이미지를 생성하는 최고의 AI 이미지 생성 툴', 'https://www.midjourney.com', 'linear-gradient(135deg, #425CFF, #5a6fff)', '["image"]', '["paid"]', 0, 'active'),
('dalle', 'DALL-E 3', '🖼️', 'OpenAI의 이미지 생성 AI, ChatGPT Plus에 통합', 'https://openai.com/dall-e-3', 'linear-gradient(135deg, #10a37f, #1a7f64)', '["image"]', '["paid"]', 1, 'active'),
('stable-diffusion', 'Stable Diffusion', '🎭', '오픈소스 이미지 생성 AI, 무료로 사용 가능', 'https://stability.ai', 'linear-gradient(135deg, #667eea, #764ba2)', '["image"]', '["free"]', 0, 'active');

-- 영상 생성 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('runway', 'Runway', '🎬', 'AI 기반 비디오 편집 및 생성 도구', 'https://runwayml.com', 'linear-gradient(135deg, #7c3aed, #9d4edd)', '["video"]', '["freemium"]', 0, 'active'),
('pika', 'Pika', '🎞️', '텍스트로 비디오를 생성하는 AI 툴', 'https://pika.art', 'linear-gradient(135deg, #f093fb, #f5576c)', '["video"]', '["freemium"]', 0, 'active'),
('synthesia', 'Synthesia', '🎥', 'AI 아바타로 비디오를 자동 생성', 'https://www.synthesia.io', 'linear-gradient(135deg, #4facfe, #00f2fe)', '["video"]', '["paid"]', 1, 'active');

-- 음성/더빙 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('elevenlabs', 'ElevenLabs', '🎤', '초현실적인 AI 음성 생성 및 음성 복제', 'https://elevenlabs.io', 'linear-gradient(135deg, #ff6b6b, #ee5a6f)', '["voice"]', '["freemium"]', 1, 'active'),
('murf', 'Murf AI', '🔊', '전문가 수준의 AI 보이스오버 생성', 'https://murf.ai', 'linear-gradient(135deg, #fa709a, #fee140)', '["voice"]', '["freemium"]', 1, 'active');

-- 문서 작성/요약 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('chatgpt', 'ChatGPT', 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png', '대화형 AI로 글쓰기, 코딩, 분석 등 다양한 작업 지원', 'https://chat.openai.com', 'linear-gradient(135deg, #10a37f, #1a7f64)', '["writing"]', '["freemium"]', 1, 'active'),
('claude', 'Claude', '🤖', 'Anthropic의 AI 어시스턴트, 긴 문맥 이해에 강점', 'https://claude.ai', 'linear-gradient(135deg, #48FFD9, #3DE6C5)', '["writing"]', '["freemium"]', 1, 'active'),
('notion-ai', 'Notion AI', '📝', 'Notion에 통합된 AI로 문서 작성 및 요약 자동화', 'https://www.notion.so/product/ai', 'linear-gradient(135deg, #000000, #2d3436)', '["writing"]', '["paid"]', 1, 'active'),
('jasper', 'Jasper', '✍️', '마케팅 콘텐츠 생성에 특화된 AI 작성 도구', 'https://www.jasper.ai', 'linear-gradient(135deg, #a8edea, #fed6e3)', '["writing"]', '["paid"]', 0, 'active');

-- 업무 자동화 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('zapier', 'Zapier', '⚡', '5000+ 앱을 연결하여 워크플로우 자동화', 'https://zapier.com', 'linear-gradient(135deg, #FF4A00, #FF6B35)', '["automation"]', '["freemium"]', 0, 'active'),
('make', 'Make', '🔄', '시각적 인터페이스로 복잡한 자동화 구축', 'https://www.make.com', 'linear-gradient(135deg, #6441A5, #2a0845)', '["automation"]', '["freemium"]', 0, 'active');

-- 개발/코딩 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('github-copilot', 'GitHub Copilot', '💻', 'AI 페어 프로그래머로 코드 작성 속도 향상', 'https://github.com/features/copilot', 'linear-gradient(135deg, #238636, #2ea043)', '["coding"]', '["paid"]', 0, 'active'),
('cursor', 'Cursor', '🖱️', 'AI 기반 코드 에디터, 자연어로 코딩', 'https://cursor.sh', 'linear-gradient(135deg, #667eea, #764ba2)', '["coding"]', '["freemium"]', 0, 'active'),
('replit', 'Replit AI', '👨‍💻', '클라우드 IDE에 통합된 AI 코딩 어시스턴트', 'https://replit.com', 'linear-gradient(135deg, #F26B00, #FF8533)', '["coding"]', '["freemium"]', 0, 'active');

-- 마케팅/SEO AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('surfer-seo', 'Surfer SEO', '📊', 'AI 기반 SEO 최적화 및 콘텐츠 분석', 'https://surferseo.com', 'linear-gradient(135deg, #4facfe, #00f2fe)', '["marketing"]', '["paid"]', 0, 'active'),
('semrush', 'Semrush AI', '📈', 'AI 기반 마케팅 인사이트 및 경쟁 분석', 'https://www.semrush.com', 'linear-gradient(135deg, #FF642E, #FFA940)', '["marketing"]', '["paid"]', 0, 'active');

-- 디자인 보조 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('figma-ai', 'Figma AI', '✨', 'Figma에 통합된 AI 디자인 어시스턴트', 'https://www.figma.com', 'linear-gradient(135deg, #F24E1E, #FF7262)', '["design"]', '["freemium"]', 1, 'active'),
('uizard', 'Uizard', '🎨', 'AI로 스케치를 디자인으로 자동 변환', 'https://uizard.io', 'linear-gradient(135deg, #a8edea, #fed6e3)', '["design"]', '["freemium"]', 0, 'active'),
('canva-ai', 'Canva AI', '🖌️', 'AI 기반 디자인 툴, 템플릿 자동 생성', 'https://www.canva.com', 'linear-gradient(135deg, #00C4CC, #7C4DFF)', '["design"]', '["freemium"]', 1, 'active');

-- 번역/언어 AI
INSERT OR REPLACE INTO ai_tools (id, name, icon, description, url, gradient, categories, priceTypes, korean, status) VALUES
('deepl', 'DeepL', '🌐', '가장 정확한 AI 번역 서비스', 'https://www.deepl.com', 'linear-gradient(135deg, #0F2027, #203A43)', '["translation"]', '["freemium"]', 1, 'active'),
('papago', 'Papago', '🗣️', '네이버의 AI 번역 서비스, 한국어에 특화', 'https://papago.naver.com', 'linear-gradient(135deg, #1EC800, #00D9A8)', '["translation"]', '["free"]', 1, 'active'),
('grammarly', 'Grammarly', '✅', 'AI 기반 영문 문법 및 스타일 검사', 'https://www.grammarly.com', 'linear-gradient(135deg, #15C39A, #00B87C)', '["translation"]', '["freemium"]', 0, 'active');
