// ===========================
// AI 툴 상세 페이지 JavaScript
// ===========================

// 전역 변수: 모든 활용 사례 저장
let allUseCases = [];

// 툴 상세 데이터
const toolDetails = {
    'chatgpt': {
        name: 'ChatGPT',
        icon: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
        category: '문서 작성/요약 AI',
        gradient: 'linear-gradient(135deg, #10a37f, #1a7f64)',
        price: 'freemium',
        korean: true,
        url: 'https://chat.openai.com',
        description: 'OpenAI가 개발한 대화형 AI로, 자연어 처리를 통해 글쓰기, 코딩, 번역, 분석 등 다양한 작업을 지원합니다. GPT-4 모델을 기반으로 하며, 복잡한 질문에도 논리적이고 창의적인 답변을 제공합니다.',
        useCases: [
            'https://www.youtube.com/embed/jRAAaDll34Q',
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
            'https://images.unsplash.com/photo-1686191128892-34d4e9cd4d9e?w=800',
            'https://images.unsplash.com/photo-1684487747385-3b2c58d9cd88?w=800',
            'https://images.unsplash.com/photo-1675557009830-0bf5bde64c84?w=800',
            'https://images.unsplash.com/photo-1696446702188-908f3b59eb8b?w=800'
        ],
        targetAudience: [
            { icon: '💼', text: '마케터 & 콘텐츠 크리에이터' },
            { icon: '👨‍💻', text: '개발자 & 데이터 분석가' },
            { icon: '🎓', text: '학생 & 연구원' },
            { icon: '📝', text: '작가 & 블로거' }
        ],
        pricing: [
            {
                name: '무료',
                price: '₩0',
                period: '영구 무료',
                description: '기본 기능을 무료로 사용할 수 있습니다',
                features: [
                    'GPT-3.5 모델 사용',
                    '기본 기능 이용',
                    '제한된 응답 속도',
                    '웹 검색 불가'
                ],
                featured: false
            },
            {
                name: 'Plus',
                price: '$20',
                period: '월 구독',
                description: '프리미엄 기능과 우선 접속을 제공합니다',
                features: [
                    'GPT-4 모델 사용',
                    '우선 접속권',
                    '빠른 응답 속도',
                    'DALL-E 3 이미지 생성',
                    '고급 데이터 분석'
                ],
                featured: true
            },
            {
                name: 'Enterprise',
                price: '문의',
                period: '맞춤 계약',
                description: '기업 맞춤형 솔루션을 제공합니다',
                features: [
                    '기업용 솔루션',
                    '무제한 사용',
                    '전담 지원',
                    '보안 강화',
                    'API 접근'
                ],
                featured: false
            }
        ],
        similar: ['claude', 'notion-ai', 'gemini']
    },
    
    'midjourney': {
        name: 'Midjourney',
        icon: '🎨',
        category: '이미지 생성 AI',
        gradient: 'linear-gradient(135deg, #425CFF, #5a6fff)',
        price: 'paid',
        korean: false,
        url: 'https://www.midjourney.com',
        description: '텍스트 프롬프트를 입력하면 고품질의 예술적인 이미지를 생성하는 AI 툴입니다. 현재 가장 인기 있는 이미지 생성 AI 중 하나로, 사실적이고 창의적인 결과물을 만들어냅니다.',
        useCases: [
            'https://images.unsplash.com/photo-1686191129144-ee08d7656e8d?w=800',
            'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=800',
            'https://www.youtube.com/embed/vU0xFOnJrns',
            'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=800'
        ],
        targetAudience: [
            { icon: '🎨', text: '디자이너 & 아티스트' },
            { icon: '📹', text: '영상 크리에이터' },
            { icon: '🎮', text: '게임 개발자' },
            { icon: '💼', text: '마케터 & 브랜드 매니저' }
        ],
        pricing: [
            {
                name: 'Basic',
                price: '$10',
                period: '월 구독',
                features: [
                    '월 200장 생성',
                    '일반 GPU 시간',
                    '개인 용도만 가능',
                    '커뮤니티 갤러리'
                ],
                featured: false
            },
            {
                name: 'Standard',
                price: '$30',
                period: '월 구독',
                features: [
                    '월 15시간 Fast GPU',
                    '무제한 Relax 생성',
                    '상업적 이용 가능',
                    '스텔스 모드',
                    '우선 지원'
                ],
                featured: true
            },
            {
                name: 'Pro',
                price: '$60',
                period: '월 구독',
                features: [
                    '월 30시간 Fast GPU',
                    '무제한 Relax 생성',
                    '최대 12개 동시 작업',
                    '상업적 이용 가능',
                    '스텔스 모드'
                ],
                featured: false
            }
        ],
        similar: ['dall-e', 'stable-diffusion', 'leonardo-ai']
    },
    
    'claude': {
        name: 'Claude',
        icon: '🤖',
        category: '문서 작성/요약 AI',
        gradient: 'linear-gradient(135deg, #D97D54, #E8B195)',
        price: 'freemium',
        korean: true,
        url: 'https://claude.ai',
        description: 'Anthropic이 개발한 대화형 AI로, 긴 문서 분석과 안전한 답변 생성에 강점을 보입니다. 최대 20만 토큰까지 처리 가능하며, 한국어도 자연스럽게 지원합니다.',
        useCases: [
            'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800',
            'https://www.youtube.com/embed/J8TgKxomS2g',
            'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800',
            'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800'
        ],
        targetAudience: [
            { icon: '📚', text: '연구원 & 학생' },
            { icon: '📝', text: '작가 & 에디터' },
            { icon: '⚖️', text: '법률/금융 전문가' },
            { icon: '💼', text: '기업 실무자' }
        ],
        pricing: [
            {
                name: '무료',
                price: '₩0',
                period: '영구 무료',
                features: [
                    'Claude 3 Sonnet 모델',
                    '기본 기능 이용',
                    '일일 메시지 제한',
                    '표준 속도'
                ],
                featured: false
            },
            {
                name: 'Pro',
                price: '$20',
                period: '월 구독',
                features: [
                    'Claude 3 Opus 모델',
                    '5배 더 많은 사용량',
                    '우선 접속권',
                    '빠른 응답 속도',
                    '조기 기능 접근'
                ],
                featured: true
            },
            {
                name: 'Team',
                price: '$30',
                period: '인당/월',
                features: [
                    'Pro 모든 기능',
                    '팀 협업 도구',
                    '중앙 관리 콘솔',
                    '사용량 분석',
                    '우선 지원'
                ],
                featured: false
            }
        ],
        similar: ['chatgpt', 'gemini', 'perplexity']
    },
    
    'dall-e': {
        name: 'DALL-E 3',
        icon: '🖼️',
        category: '이미지 생성 AI',
        gradient: 'linear-gradient(135deg, #10a37f, #1a7f64)',
        price: 'paid',
        korean: true,
        url: 'https://openai.com/dall-e-3',
        description: 'OpenAI의 최신 이미지 생성 AI로, 자연어 프롬프트를 정확하게 이해하고 고품질 이미지를 생성합니다. ChatGPT Plus에 통합되어 있으며, 텍스트 렌더링에 강점이 있습니다.',
        useCases: [
            'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=800',
            'https://images.unsplash.com/photo-1707344088603-65e1e2e9e5fc?w=800',
            'https://images.unsplash.com/photo-1695654392664-256049b0c506?w=800',
            'https://images.unsplash.com/photo-1696446702183-cbd50c2b8d93?w=800'
        ],
        targetAudience: [
            { icon: '🎨', text: '그래픽 디자이너' },
            { icon: '📱', text: 'SNS 마케터' },
            { icon: '✍️', text: '콘텐츠 크리에이터' },
            { icon: '🏢', text: '스타트업 & 소상공인' }
        ],
        pricing: [
            {
                name: 'ChatGPT Plus',
                price: '$20',
                period: '월 구독',
                features: [
                    'DALL-E 3 무제한 사용',
                    'GPT-4 모델 포함',
                    '고해상도 다운로드',
                    '상업적 이용 가능'
                ],
                featured: true
            },
            {
                name: 'API',
                price: '종량제',
                period: '이미지당 과금',
                features: [
                    '표준: $0.040/이미지',
                    'HD: $0.080/이미지',
                    'API 통합',
                    '자동화 가능'
                ],
                featured: false
            }
        ],
        similar: ['midjourney', 'stable-diffusion', 'ideogram']
    },
    
    'notion-ai': {
        name: 'Notion AI',
        icon: '📝',
        category: '문서 작성/요약 AI',
        gradient: 'linear-gradient(135deg, #000000, #434343)',
        price: 'paid',
        korean: true,
        url: 'https://www.notion.so/product/ai',
        description: 'Notion에 통합된 AI 어시스턴트로, 문서 작성, 요약, 번역, 브레인스토밍을 돕습니다. 기존 Notion 워크스페이스와 완벽하게 연동되어 생산성을 높입니다.',
        useCases: [
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
            'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800'
        ],
        targetAudience: [
            { icon: '👥', text: '팀 리더 & PM' },
            { icon: '📝', text: '문서 작업이 많은 직장인' },
            { icon: '🎓', text: '학생 & 연구원' },
            { icon: '🚀', text: '스타트업 팀' }
        ],
        pricing: [
            {
                name: 'AI Add-on',
                price: '$10',
                period: '인당/월',
                features: [
                    '무제한 AI 요청',
                    'Notion 내 직접 사용',
                    '모든 워크스페이스',
                    '번역, 요약, 작성',
                    '브레인스토밍'
                ],
                featured: true
            }
        ],
        similar: ['chatgpt', 'claude', 'mem-ai']
    },
    
    'gemini': {
        name: 'Gemini',
        icon: '✨',
        category: '문서 작성/요약 AI',
        gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
        price: 'freemium',
        korean: true,
        url: 'https://gemini.google.com',
        description: 'Google의 최신 AI 모델로, 텍스트, 이미지, 코드를 함께 이해하고 생성할 수 있습니다. Google 생태계와 완벽하게 통합되어 있습니다.',
        useCases: [
            'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800',
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'
        ],
        targetAudience: [
            { icon: '💼', text: 'Google Workspace 사용자' },
            { icon: '🔬', text: '연구원 & 학생' },
            { icon: '📱', text: '멀티미디어 작업자' },
            { icon: '🌐', text: '웹 리서처' }
        ],
        pricing: [
            {
                name: '무료',
                price: '₩0',
                period: '영구 무료',
                features: [
                    'Gemini Pro 모델',
                    '기본 기능 이용',
                    'Google 앱 통합',
                    '일일 제한 있음'
                ],
                featured: false
            },
            {
                name: 'Advanced',
                price: '$20',
                period: '월 구독',
                features: [
                    'Gemini Ultra 1.0',
                    'Gmail, Docs 고급 기능',
                    '우선 접속권',
                    '더 많은 사용량',
                    '2TB Google One 포함'
                ],
                featured: true
            }
        ],
        similar: ['chatgpt', 'claude', 'perplexity']
    }
};

// 유사 툴 전체 데이터
const allTools = {
    'claude': { name: 'Claude', icon: '🤖', description: '안전하고 정확한 AI 대화', price: 'freemium' },
    'notion-ai': { name: 'Notion AI', icon: '📝', description: 'Notion 통합 AI 어시스턴트', price: 'paid' },
    'gemini': { name: 'Gemini', icon: '✨', description: 'Google의 멀티모달 AI', price: 'freemium' },
    'dall-e': { name: 'DALL-E 3', icon: '🖼️', description: 'OpenAI 이미지 생성 AI', price: 'paid' },
    'stable-diffusion': { name: 'Stable Diffusion', icon: '🎨', description: '오픈소스 이미지 생성', price: 'free' },
    'leonardo-ai': { name: 'Leonardo AI', icon: '🖌️', description: '게임 에셋 특화 이미지 AI', price: 'freemium' },
    'ideogram': { name: 'Ideogram', icon: '✏️', description: '텍스트 렌더링 특화', price: 'freemium' },
    'perplexity': { name: 'Perplexity', icon: '🔎', description: 'AI 검색 엔진', price: 'freemium' },
    'jasper': { name: 'Jasper', icon: '✍️', description: '마케팅 콘텐츠 AI', price: 'paid' },
    'mem-ai': { name: 'Mem', icon: '🧠', description: 'AI 메모 & 지식관리', price: 'paid' }
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // URL에서 툴 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const toolId = urlParams.get('id') || 'chatgpt';
    
    // 툴 데이터 로드
    loadToolDetail(toolId);
});

// 툴 상세 정보 로드
async function loadToolDetail(toolId) {
    // 먼저 DB에서 툴 정보 가져오기 시도
    let tool = await fetchToolFromDB(toolId);
    
    // DB에 없으면 샘플 데이터 사용
    if (!tool) {
        tool = toolDetails[toolId];
    }
    
    if (!tool) {
        console.error('Tool not found:', toolId);
        document.getElementById('toolName').textContent = '툴을 찾을 수 없습니다';
        return;
    }
    
    // 무료 플랜 여부 배지
    const freePlanBadge = document.getElementById('freePlanBadge');
    if (tool.price === 'free' || tool.price === 'freemium') {
        freePlanBadge.innerHTML = '<i class="fas fa-check-circle"></i><span>무료 플랜 제공</span>';
        freePlanBadge.classList.remove('paid');
    } else {
        freePlanBadge.innerHTML = '<i class="fas fa-credit-card"></i><span>유료 전용</span>';
        freePlanBadge.classList.add('paid');
    }
    
    // 툴명
    document.getElementById('toolName').textContent = tool.name;
    document.getElementById('toolNameCTA').textContent = tool.name;
    document.getElementById('pageTitle').textContent = `${tool.name} - AI연구소`;
    
    // 툴 소개
    document.getElementById('toolDescription').textContent = tool.description;
    
    // 툴 로고
    const logoElement = document.getElementById('toolLogo');
    if (tool.icon && (tool.icon.startsWith('data:image/') || tool.icon.startsWith('http://') || tool.icon.startsWith('https://'))) {
        // 이미지 URL 또는 Base64인 경우
        logoElement.innerHTML = `<img src="${tool.icon}" alt="${tool.name} logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 20px;" onerror="this.style.display='none'; this.parentElement.textContent='🤖';">`;
        logoElement.style.background = 'white';
    } else {
        // 이모지인 경우
        logoElement.textContent = tool.icon || '🤖';
        logoElement.style.background = tool.gradient;
    }
    
    // CTA 버튼 (어필리에이트 링크 우선 사용)
    const targetUrl = tool.affiliateUrl || tool.url;
    const ctaButtons = document.querySelectorAll('#toolCTA, #toolCTA2');
    ctaButtons.forEach(btn => {
        btn.href = targetUrl;
    });
    
    // 활용 사례
    renderUseCases(tool.useCases);
    
    // 추천 타겟
    renderTargetAudience(tool.targetAudience);
    
    // 가격 요약 (DB 데이터는 pricingPlans, 샘플 데이터는 pricing)
    const pricingData = tool.pricingPlans || tool.pricing || [];
    renderPricingSummary(pricingData);
    
    // 유사 툴 (DB 데이터는 similarTools, 샘플 데이터는 similar)
    const similarData = tool.similarTools || tool.similar || [];
    renderSimilarTools(similarData);
    
    // 북마크 버튼 업데이트
    updateBookmarkButtonState(toolId, tool);
}

// ========================================
// 북마크 버튼 상태 업데이트
// ========================================
async function updateBookmarkButtonState(toolId, tool) {
    // 로그인 확인
    const user = window.firebaseAuth?.getCurrentUser();
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    if (!bookmarkBtn) return;
    
    if (!user) {
        // 로그인하지 않은 경우
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> 북마크';
        bookmarkBtn.onclick = () => {
            alert('로그인이 필요합니다.');
            window.location.href = 'auth.html?redirect=' + encodeURIComponent(window.location.pathname + window.location.search);
        };
        return;
    }
    
    // 북마크 여부 확인
    const isBookmarked = await window.BookmarkManager.isToolBookmarked(toolId);
    
    if (isBookmarked) {
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i> 북마크됨';
        bookmarkBtn.classList.add('active');
    } else {
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> 북마크';
        bookmarkBtn.classList.remove('active');
    }
    
    // 클릭 이벤트
    bookmarkBtn.onclick = async () => {
        await handleBookmarkClick(toolId, tool);
    };
}

// ========================================
// 북마크 버튼 클릭 핸들러
// ========================================
async function handleBookmarkClick(toolId, tool) {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    // 버튼 비활성화
    bookmarkBtn.disabled = true;
    
    // 툴 데이터 준비
    const toolData = {
        id: toolId || tool?.id,
        name: tool?.name,
        icon: tool?.icon,
        description: tool?.description,
        categories: tool?.categories,
        priceTypes: tool?.priceTypes || [tool?.price]
    };
    
    // 북마크 토글
    const result = await window.BookmarkManager.toggleBookmark(toolData);
    
    if (result.success) {
        if (result.action === 'added') {
            bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i> 북마크됨';
            bookmarkBtn.classList.add('active');
        } else {
            bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> 북마크';
            bookmarkBtn.classList.remove('active');
        }
    } else {
        alert(result.error || '북마크 처리에 실패했습니다.');
    }
    
    // 버튼 재활성화
    bookmarkBtn.disabled = false;
}

// 전역 함수로 등록 (HTML에서 사용)
window.handleBookmarkClick = handleBookmarkClick;

// DB에서 툴 정보 가져오기
async function fetchToolFromDB(toolId) {
    try {
        const response = await fetch(`tables/ai_tools?search=${toolId}&limit=100`);
        if (!response.ok) {
            console.log('DB fetch failed, using sample data');
            return null;
        }
        
        const result = await response.json();
        
        // ID가 정확히 일치하는 툴 찾기
        const tool = result.data.find(t => t.id === toolId);
        
        if (tool) {
            console.log('Tool loaded from DB:', tool);
            
            // DB 데이터 구조를 화면에 맞게 변환
            return {
                name: tool.name,
                icon: tool.icon,
                category: Array.isArray(tool.categories) ? tool.categories.join(', ') : tool.categories,
                gradient: tool.gradient || 'linear-gradient(135deg, #425CFF, #5a6fff)',
                price: Array.isArray(tool.priceTypes) ? tool.priceTypes[0] : tool.priceTypes,
                korean: tool.korean,
                url: tool.url,
                affiliateUrl: tool.affiliateUrl || '',
                description: tool.description,
                useCases: tool.useCases || [],
                targetAudience: (tool.targetAudience || []).map(text => ({
                    icon: '👤',
                    text: text
                })),
                pricingPlans: tool.pricingPlans || [],
                similarTools: tool.similarTools || []
            };
        }
        
        return null;
    } catch (error) {
        console.error('Error fetching tool from DB:', error);
        return null;
    }
}

// 활용 사례 렌더링
function renderUseCases(useCases) {
    const container = document.getElementById('useCases');
    
    if (!useCases || useCases.length === 0) {
        container.innerHTML = '<p style="color: #9199A1; text-align: center; padding: 40px;">등록된 활용 사례가 없습니다.</p>';
        return;
    }
    
    // 전역 변수에 저장 (모달에서 사용)
    allUseCases = useCases;
    
    // 최대 4개만 표시
    const displayItems = useCases.slice(0, 4);
    const hasMore = useCases.length > 4;
    const remainingCount = useCases.length - 4;
    
    container.innerHTML = displayItems.map((url, index) => {
        // 4번째 아이템이고 더 많은 항목이 있을 때
        const isLastWithMore = index === 3 && hasMore;
        
        // YouTube URL 체크
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            // YouTube URL을 임베드 URL로 변환
            let videoId = '';
            if (url.includes('youtube.com/watch?v=')) {
                videoId = url.split('v=')[1].split('&')[0];
            } else if (url.includes('youtu.be/')) {
                videoId = url.split('youtu.be/')[1].split('?')[0];
            } else if (url.includes('youtube.com/embed/')) {
                videoId = url.split('embed/')[1].split('?')[0];
            }
            
            return `
                <div class="use-case-item" style="position: relative;">
                    <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                    ${isLastWithMore ? `
                        <div onclick="openUseCaseModal()" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(12, 15, 20, 0.75); display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; cursor: pointer; transition: background 0.2s ease;">
                            <div style="font-size: 2rem; font-weight: 700; color: white; margin-bottom: 8px;">+${remainingCount}</div>
                            <div style="font-size: 1rem; color: white; font-weight: 600;">더보기</div>
                        </div>
                    ` : ''}
                </div>
            `;
        } else {
            // 이미지 URL
            return `
                <div class="use-case-item" style="position: relative;">
                    <img src="${url}" alt="활용 사례" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 280%22%3E%3Crect fill=%22%23E4E6EB%22 width=%22400%22 height=%22280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239199A1%22 font-size=%2224%22%3E이미지를 불러올 수 없습니다%3C/text%3E%3C/svg%3E'">
                    ${isLastWithMore ? `
                        <div onclick="openUseCaseModal()" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(12, 15, 20, 0.75); display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; cursor: pointer; transition: background 0.2s ease;">
                            <div style="font-size: 2rem; font-weight: 700; color: white; margin-bottom: 8px;">+${remainingCount}</div>
                            <div style="font-size: 1rem; color: white; font-weight: 600;">더보기</div>
                        </div>
                    ` : ''}
                </div>
            `;
        }
    }).join('');
}

// 추천 타겟 렌더링
function renderTargetAudience(targets) {
    const container = document.getElementById('targetAudience');
    container.innerHTML = targets.map(target => `
        <div class="target-badge">
            <span style="font-size: 1.3rem;">${target.icon}</span>
            <span>${target.text}</span>
        </div>
    `).join('');
}

// 가격 요약 렌더링
function renderPricingSummary(pricing) {
    const container = document.getElementById('pricingSummary');
    
    if (!pricing || pricing.length === 0) {
        container.innerHTML = '<p style="color: #9199A1; text-align: center; padding: 40px; grid-column: 1 / -1;">등록된 가격 플랜이 없습니다.</p>';
        return;
    }
    
    container.innerHTML = pricing.map(plan => {
        const features = plan.features || [];
        const isFeatured = plan.featured === true;
        
        return `
            <div class="pricing-card ${isFeatured ? 'featured' : ''}">
                ${isFeatured ? '<div class="featured-badge">⭐ 추천</div>' : ''}
                <div class="pricing-plan-name" ${isFeatured ? 'style="color: white;"' : ''}>
                    ${plan.name}
                </div>
                <div class="pricing-plan-price" ${isFeatured ? 'style="color: white;"' : ''}>
                    ${plan.price}
                </div>
                <div class="pricing-plan-period" ${isFeatured ? 'style="color: rgba(255,255,255,0.8);"' : ''}>
                    ${plan.period}
                </div>
                ${plan.description ? `
                    <p style="font-size: 0.9rem; color: ${isFeatured ? 'rgba(255,255,255,0.8)' : '#5F6369'}; margin: 12px 0; line-height: 1.5;">
                        ${plan.description}
                    </p>
                ` : ''}
                ${features.length > 0 ? `
                    <ul class="pricing-plan-features">
                        ${features.map(feature => `
                            <li ${isFeatured ? 'style="color: rgba(255,255,255,0.95);"' : ''}>
                                <i class="fas fa-check" style="color: ${isFeatured ? '#48FFD9' : '#10B981'};"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }).join('');
}

// 유사 툴 렌더링
function renderSimilarTools(similarIds) {
    const container = document.getElementById('similarTools');
    container.innerHTML = similarIds.map(id => {
        const tool = allTools[id];
        if (!tool) return '';
        
        const priceLabel = tool.price === 'free' ? '무료' : 
                          tool.price === 'freemium' ? '무료체험' : '유료';
        
        // 아이콘 렌더링 (이미지, Base64 또는 이모지)
        const iconHtml = (tool.icon && (tool.icon.startsWith('data:image/') || tool.icon.startsWith('http://') || tool.icon.startsWith('https://'))) 
            ? `<img src="${tool.icon}" alt="${tool.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 16px;" onerror="this.style.display='none'; this.parentElement.textContent='🤖';">`
            : tool.icon || '🤖';
        
        return `
            <div class="comparison-card" onclick="location.href='tool-detail.html?id=${id}'">
                <div class="comparison-icon" style="overflow: hidden;">
                    ${iconHtml}
                </div>
                <div class="comparison-name">${tool.name}</div>
                <div class="comparison-desc">${tool.description}</div>
                <div class="comparison-price">${priceLabel}</div>
            </div>
        `;
    }).join('');
}

// ===========================
// 활용 사례 모달
// ===========================

// 모달 열기
function openUseCaseModal() {
    const modal = document.getElementById('useCaseModal');
    const modalContainer = document.getElementById('modalUseCases');
    
    // 모달에 모든 활용 사례 렌더링
    modalContainer.innerHTML = allUseCases.map(url => {
        // YouTube URL 체크
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            let videoId = '';
            if (url.includes('youtube.com/watch?v=')) {
                videoId = url.split('v=')[1].split('&')[0];
            } else if (url.includes('youtu.be/')) {
                videoId = url.split('youtu.be/')[1].split('?')[0];
            } else if (url.includes('youtube.com/embed/')) {
                videoId = url.split('embed/')[1].split('?')[0];
            }
            
            return `
                <div class="use-case-item">
                    <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                </div>
            `;
        } else {
            return `
                <div class="use-case-item">
                    <img src="${url}" alt="활용 사례" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 280%22%3E%3Crect fill=%22%23E4E6EB%22 width=%22400%22 height=%22280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239199A1%22 font-size=%2224%22%3E이미지를 불러올 수 없습니다%3C/text%3E%3C/svg%3E'">
                </div>
            `;
        }
    }).join('');
    
    // 모달 표시
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // 스크롤 방지
}

// 모달 닫기
function closeUseCaseModal() {
    const modal = document.getElementById('useCaseModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // 스크롤 복원
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeUseCaseModal();
    }
});
