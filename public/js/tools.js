// ===========================
// AI 툴 리스트 페이지 JavaScript
// ===========================

// AI 툴 데이터 (기본 샘플 데이터)
let aiTools = [
    // 이미지 생성 AI
    {
        id: 'midjourney',
        name: 'Midjourney',
        icon: '🎨',
        category: 'image',
        description: '텍스트로 고품질 이미지를 생성하는 최고의 AI 이미지 생성 툴',
        price: 'paid',
        korean: false,
        gradient: 'linear-gradient(135deg, #425CFF, #5a6fff)',
        url: 'https://www.midjourney.com'
    },
    {
        id: 'dalle',
        name: 'DALL-E 3',
        icon: '🖼️',
        category: 'image',
        description: 'OpenAI의 이미지 생성 AI, ChatGPT Plus에 통합',
        price: 'paid',
        korean: true,
        gradient: 'linear-gradient(135deg, #10a37f, #1a7f64)',
        url: 'https://openai.com/dall-e-3'
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        icon: '🎭',
        category: 'image',
        description: '오픈소스 이미지 생성 AI, 무료로 사용 가능',
        price: 'free',
        korean: false,
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        url: 'https://stability.ai'
    },
    
    // 영상 생성 AI
    {
        id: 'runway',
        name: 'Runway',
        icon: '🎬',
        category: 'video',
        description: 'AI 기반 비디오 편집 및 생성 도구',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #7c3aed, #9d4edd)',
        url: 'https://runwayml.com'
    },
    {
        id: 'pika',
        name: 'Pika',
        icon: '🎞️',
        category: 'video',
        description: '텍스트로 비디오를 생성하는 AI 툴',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
        url: 'https://pika.art'
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        icon: '🎥',
        category: 'video',
        description: 'AI 아바타로 비디오를 자동 생성',
        price: 'paid',
        korean: true,
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        url: 'https://www.synthesia.io'
    },
    
    // 음성/더빙 AI
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        icon: '🎤',
        category: 'voice',
        description: '초현실적인 AI 음성 생성 및 음성 복제',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
        url: 'https://elevenlabs.io'
    },
    {
        id: 'murf',
        name: 'Murf AI',
        icon: '🔊',
        category: 'voice',
        description: '전문가 수준의 AI 보이스오버 생성',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
        url: 'https://murf.ai'
    },
    
    // 문서 작성/요약 AI
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        icon: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
        category: 'writing',
        description: '대화형 AI로 글쓰기, 코딩, 분석 등 다양한 작업 지원',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #10a37f, #1a7f64)',
        url: 'https://chat.openai.com'
    },
    {
        id: 'claude',
        name: 'Claude',
        icon: '🤖',
        category: 'writing',
        description: 'Anthropic의 AI 어시스턴트, 긴 문맥 이해에 강점',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #48FFD9, #3DE6C5)',
        url: 'https://claude.ai'
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        icon: '📝',
        category: 'writing',
        description: 'Notion에 통합된 AI로 문서 작성 및 요약 자동화',
        price: 'paid',
        korean: true,
        gradient: 'linear-gradient(135deg, #000000, #2d3436)',
        url: 'https://www.notion.so/product/ai'
    },
    {
        id: 'jasper',
        name: 'Jasper',
        icon: '✍️',
        category: 'writing',
        description: '마케팅 콘텐츠 생성에 특화된 AI 작성 도구',
        price: 'paid',
        korean: false,
        gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
        url: 'https://www.jasper.ai'
    },
    
    // 업무 자동화 AI
    {
        id: 'zapier',
        name: 'Zapier',
        icon: '⚡',
        category: 'automation',
        description: '5000+ 앱을 연결하여 워크플로우 자동화',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #FF4A00, #FF6B35)',
        url: 'https://zapier.com'
    },
    {
        id: 'make',
        name: 'Make',
        icon: '🔄',
        category: 'automation',
        description: '시각적 인터페이스로 복잡한 자동화 구축',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #6441A5, #2a0845)',
        url: 'https://www.make.com'
    },
    
    // 개발/코딩 AI
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        icon: '💻',
        category: 'coding',
        description: 'AI 페어 프로그래머로 코드 작성 속도 향상',
        price: 'paid',
        korean: false,
        gradient: 'linear-gradient(135deg, #238636, #2ea043)',
        url: 'https://github.com/features/copilot'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        icon: '🖱️',
        category: 'coding',
        description: 'AI 기반 코드 에디터, 자연어로 코딩',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        url: 'https://cursor.sh'
    },
    {
        id: 'replit',
        name: 'Replit AI',
        icon: '👨‍💻',
        category: 'coding',
        description: '클라우드 IDE에 통합된 AI 코딩 어시스턴트',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #F26B00, #FF8533)',
        url: 'https://replit.com'
    },
    
    // 마케팅/SEO AI
    {
        id: 'surfer-seo',
        name: 'Surfer SEO',
        icon: '📊',
        category: 'marketing',
        description: 'AI 기반 SEO 최적화 및 콘텐츠 분석',
        price: 'paid',
        korean: false,
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        url: 'https://surferseo.com'
    },
    {
        id: 'semrush',
        name: 'Semrush AI',
        icon: '📈',
        category: 'marketing',
        description: 'AI 기반 마케팅 인사이트 및 경쟁 분석',
        price: 'paid',
        korean: false,
        gradient: 'linear-gradient(135deg, #FF642E, #FFA940)',
        url: 'https://www.semrush.com'
    },
    
    // 디자인 보조 AI
    {
        id: 'figma-ai',
        name: 'Figma AI',
        icon: '✨',
        category: 'design',
        description: 'Figma에 통합된 AI 디자인 어시스턴트',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #F24E1E, #FF7262)',
        url: 'https://www.figma.com'
    },
    {
        id: 'uizard',
        name: 'Uizard',
        icon: '🎨',
        category: 'design',
        description: 'AI로 스케치를 디자인으로 자동 변환',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
        url: 'https://uizard.io'
    },
    {
        id: 'canva-ai',
        name: 'Canva AI',
        icon: '🖌️',
        category: 'design',
        description: 'AI 기반 디자인 툴, 템플릿 자동 생성',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #00C4CC, #7C4DFF)',
        url: 'https://www.canva.com'
    },
    
    // 번역/언어 AI
    {
        id: 'deepl',
        name: 'DeepL',
        icon: '🌐',
        category: 'translation',
        description: '가장 정확한 AI 번역 서비스',
        price: 'freemium',
        korean: true,
        gradient: 'linear-gradient(135deg, #0F2027, #203A43)',
        url: 'https://www.deepl.com'
    },
    {
        id: 'papago',
        name: 'Papago',
        icon: '🗣️',
        category: 'translation',
        description: '네이버의 AI 번역 서비스, 한국어에 특화',
        price: 'free',
        korean: true,
        gradient: 'linear-gradient(135deg, #1EC800, #00D9A8)',
        url: 'https://papago.naver.com'
    },
    {
        id: 'grammarly',
        name: 'Grammarly',
        icon: '✅',
        category: 'translation',
        description: 'AI 기반 영문 문법 및 스타일 검사',
        price: 'freemium',
        korean: false,
        gradient: 'linear-gradient(135deg, #15C39A, #00B87C)',
        url: 'https://www.grammarly.com'
    }
];

// 필터된 툴 목록
let filteredTools = [...aiTools];

// 데이터베이스에서 툴 로드
async function loadToolsFromDB() {
    try {
        const response = await fetch('/tables/ai_tools?limit=100');
        
        if (response.ok) {
            const result = await response.json();
            const dbTools = result.data || [];
            
            // active 상태인 툴만 필터링
            const activeTools = dbTools.filter(tool => tool.status === 'active');
            
            if (activeTools.length > 0) {
                // DB 데이터로 교체
                aiTools = activeTools;
                console.log(`✅ ${activeTools.length}개의 툴을 데이터베이스에서 로드했습니다.`);
            }
        }
    } catch (error) {
        console.warn('⚠️ 데이터베이스 로드 실패, 기본 데이터 사용:', error);
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', async function() {
    // 먼저 DB에서 데이터 로드 시도
    await loadToolsFromDB();
    // URL 파라미터 확인
    const categoryParam = getUrlParameter('category');
    if (categoryParam && categoryParam !== 'all') {
        // 드롭다운이 있으면 설정
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = categoryParam;
        }
        // 사이드바 카테고리 활성화
        activateSidebarCategory(categoryParam);
    }
    
    // 툴 렌더링
    renderTools();
    updateCategoryCounts();
    
    // 필터 이벤트 리스너
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    // 라디오 버튼 가격 필터
    const priceRadios = document.querySelectorAll('input[name="priceFilter"]');
    priceRadios.forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });
    
    document.getElementById('koreanFilter').addEventListener('change', applyFilters);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    
    // 사이드바 카테고리 클릭 이벤트
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // 모든 카테고리 비활성화
            categoryItems.forEach(i => i.classList.remove('active'));
            // 현재 카테고리 활성화
            this.classList.add('active');
            
            // currentCategory 업데이트
            currentCategory = category;
            
            // 필터 적용
            filteredTools = aiTools.filter(tool => {
                const searchTerm = document.getElementById('searchInput').value.toLowerCase();
                
                // 라디오 버튼에서 선택된 가격 가져오기
                const priceRadio = document.querySelector('input[name="priceFilter"]:checked');
                const price = priceRadio ? priceRadio.value : 'all';
                
                const koreanOnly = document.getElementById('koreanFilter').checked;
                
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                                    tool.description.toLowerCase().includes(searchTerm);
                const matchesCategory = category === 'all' || tool.category === category;
                const matchesPrice = price === 'all' || tool.price === price;
                const matchesKorean = !koreanOnly || tool.korean;
                
                return matchesSearch && matchesCategory && matchesPrice && matchesKorean;
            });
            
            renderTools();
        });
    });
});

// 툴 렌더링
function renderTools() {
    const grid = document.getElementById('toolsGrid');
    const noResults = document.getElementById('noResults');
    
    if (filteredTools.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = filteredTools.map(tool => `
        <div class="card">
            <div class="card-body">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <div style="width: 56px; height: 56px; background: ${tool.gradient}; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; overflow: hidden;">
                        ${renderIcon(tool.icon)}
                    </div>
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 4px 0; font-size: 1.15rem;">${tool.name}</h4>
                        <span class="tag ${getPriceTagClass(tool.price)}">${getPriceLabel(tool.price)}</span>
                    </div>
                </div>
                <p style="font-size: 0.9rem; color: #5F6369; margin-bottom: 16px; min-height: 48px;">
                    ${tool.description}
                </p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
                    ${renderCategories(tool)}
                    ${renderPriceTypes(tool)}
                    ${tool.korean ? '<span class="tag tag-neon">한국어</span>' : ''}
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <a href="tool-detail.html?tool=${tool.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
                        자세히 보기
                    </a>
                    <button class="bookmark-icon-btn" data-tool-id="${tool.id}" onclick="handleToolCardBookmark(event, '${tool.id}')" title="북마크">
                        <i class="far fa-bookmark"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateFilterResult();
}

// 아이콘 렌더링 (이미지 URL, Base64 또는 이모지)
function renderIcon(icon) {
    // Base64 이미지 또는 URL 체크
    if (icon && (icon.startsWith('data:image/') || icon.startsWith('http://') || icon.startsWith('https://'))) {
        return `<img src="${icon}" alt="Icon" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;" onerror="this.style.display='none'; this.parentElement.textContent='🤖';">`;
    }
    // 이모지 또는 텍스트
    return icon || '🤖';
}

// 카테고리 렌더링 (단일 또는 다중)
function renderCategories(tool) {
    if (Array.isArray(tool.categories)) {
        return tool.categories.map(cat => 
            `<span class="tag">${getCategoryLabel(cat)}</span>`
        ).join('');
    } else if (tool.category) {
        return `<span class="tag">${getCategoryLabel(tool.category)}</span>`;
    }
    return '';
}

// 가격 타입 렌더링 (단일 또는 다중)
function renderPriceTypes(tool) {
    if (Array.isArray(tool.priceTypes)) {
        return tool.priceTypes.map(price => 
            `<span class="tag ${getPriceTagClass(price)}">${getPriceLabel(price)}</span>`
        ).join('');
    } else if (tool.price) {
        return `<span class="tag ${getPriceTagClass(tool.price)}">${getPriceLabel(tool.price)}</span>`;
    }
    return '';
}

// 툴 카드 북마크 핸들러
async function handleToolCardBookmark(event, toolId) {
    event.preventDefault();
    event.stopPropagation();
    
    const button = event.currentTarget;
    const tool = allTools.find(t => t.id === toolId);
    
    if (!tool) {
        console.error('Tool not found:', toolId);
        return;
    }
    
    // 로그인 확인
    const user = window.firebaseAuth?.getCurrentUser();
    if (!user) {
        alert('로그인이 필요합니다.');
        window.location.href = 'auth.html?redirect=' + encodeURIComponent(window.location.pathname);
        return;
    }
    
    // 버튼 비활성화
    button.disabled = true;
    
    // 툴 데이터 준비
    const toolData = {
        id: tool.id,
        name: tool.name,
        icon: tool.icon,
        description: tool.description,
        categories: tool.categories,
        priceTypes: tool.priceTypes || [tool.price]
    };
    
    // 북마크 토글
    const result = await window.BookmarkManager.toggleBookmark(toolData);
    
    if (result.success) {
        if (result.action === 'added') {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-bookmark"></i>';
            button.title = '북마크 제거';
        } else {
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-bookmark"></i>';
            button.title = '북마크 추가';
        }
    } else {
        alert(result.error || '북마크 처리에 실패했습니다.');
    }
    
    // 버튼 재활성화
    button.disabled = false;
}

// 전역 함수로 등록
window.handleToolCardBookmark = handleToolCardBookmark;

// 북마크 상태 업데이트 (페이지 로드 시)
async function updateBookmarkStates() {
    const user = window.firebaseAuth?.getCurrentUser();
    if (!user) return;
    
    const bookmarks = await window.BookmarkManager.getUserBookmarks();
    const bookmarkedToolIds = bookmarks.map(b => b.toolId);
    
    document.querySelectorAll('.bookmark-icon-btn').forEach(btn => {
        const toolId = btn.dataset.toolId;
        if (bookmarkedToolIds.includes(toolId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-bookmark"></i>';
            btn.title = '북마크 제거';
        }
    });
}

// 툴 렌더링 후 북마크 상태 업데이트
const originalRenderTools = renderTools;
renderTools = function() {
    originalRenderTools();
    setTimeout(updateBookmarkStates, 500);
};

// 필터 적용
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // 카테고리 필터 (드롭다운이 있으면 사용, 없으면 currentCategory 사용)
    const categoryFilter = document.getElementById('categoryFilter');
    const category = categoryFilter ? categoryFilter.value : currentCategory;
    
    // 라디오 버튼에서 선택된 가격 가져오기
    const priceRadio = document.querySelector('input[name="priceFilter"]:checked');
    const price = priceRadio ? priceRadio.value : 'all';
    
    const koreanOnly = document.getElementById('koreanFilter').checked;
    
    filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm);
        
        // 카테고리 매칭 (단일 또는 배열 지원)
        let matchesCategory = category === 'all';
        if (!matchesCategory) {
            if (Array.isArray(tool.categories)) {
                matchesCategory = tool.categories.includes(category);
            } else if (tool.category) {
                matchesCategory = tool.category === category;
            }
        }
        
        // 가격 매칭 (단일 또는 배열 지원)
        let matchesPrice = price === 'all';
        if (!matchesPrice) {
            if (Array.isArray(tool.priceTypes)) {
                matchesPrice = tool.priceTypes.includes(price);
            } else if (tool.price) {
                matchesPrice = tool.price === price;
            }
        }
        
        const matchesKorean = !koreanOnly || tool.korean;
        
        return matchesSearch && matchesCategory && matchesPrice && matchesKorean;
    });
    
    renderTools();
}

// 필터 초기화
function resetFilters() {
    document.getElementById('searchInput').value = '';
    
    // 카테고리 필터 초기화 (있으면)
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = 'all';
    }
    
    // 라디오 버튼 초기화
    const priceAll = document.getElementById('price-all');
    if (priceAll) {
        priceAll.checked = true;
    }
    
    document.getElementById('koreanFilter').checked = false;
    
    // 사이드바 카테고리도 초기화
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === 'all') {
            item.classList.add('active');
        }
    });
    
    currentCategory = 'all';
    filteredTools = [...aiTools];
    renderTools();
}

// 필터 결과 업데이트
function updateFilterResult() {
    const result = document.getElementById('filterResult');
    result.textContent = `총 ${filteredTools.length}개의 AI 툴`;
}

// 가격 태그 클래스
function getPriceTagClass(price) {
    switch(price) {
        case 'free': return 'tag-free';
        case 'freemium': return 'tag-blue';
        case 'paid': return 'tag-pro';
        default: return '';
    }
}

// 가격 라벨
function getPriceLabel(price) {
    switch(price) {
        case 'free': return '무료';
        case 'freemium': return '무료 체험';
        case 'paid': return '유료';
        default: return '';
    }
}

// 카테고리 라벨
function getCategoryLabel(category) {
    const labels = {
        'image': '이미지 생성',
        'video': '영상 생성',
        'voice': '음성/더빙',
        'writing': '문서 작성',
        'automation': '업무 자동화',
        'coding': '개발/코딩',
        'marketing': '마케팅/SEO',
        'design': '디자인',
        'translation': '번역/언어'
    };
    return labels[category] || category;
}

// 카테고리별 카운트 업데이트
function updateCategoryCounts() {
    const categories = ['all', 'image', 'video', 'voice', 'writing', 'automation', 'coding', 'marketing', 'design', 'translation'];
    
    categories.forEach(cat => {
        const countEl = document.getElementById(`count-${cat}`);
        if (countEl) {
            if (cat === 'all') {
                countEl.textContent = aiTools.length;
            } else {
                const count = aiTools.filter(tool => tool.category === cat).length;
                countEl.textContent = count;
            }
        }
    });
}

// 사이드바 카테고리 활성화
function activateSidebarCategory(category) {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });
}

// 전역으로 aiTools 공유 (admin.js에서 사용)
window.aiTools = aiTools;