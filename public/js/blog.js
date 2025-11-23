// ===========================
// 블로그 페이지 JavaScript
// ===========================

// 블로그 포스트 데이터
const blogPosts = [
    {
        id: 1,
        category: 'guide',
        title: '2024년 필수 AI 툴 TOP 10',
        description: '생산성을 극대화하는 최고의 AI 툴들을 비교 분석했습니다.',
        emoji: '🚀',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        date: '2024.01.15',
        readTime: '10분',
        views: '12,450',
        tags: ['AI 툴', '생산성', '비교']
    },
    {
        id: 2,
        category: 'tutorial',
        title: 'ChatGPT 프롬프트 작성법 완벽 가이드',
        description: '효과적인 프롬프트 작성을 위한 5가지 핵심 원칙을 소개합니다.',
        emoji: '✍️',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        date: '2024.01.12',
        readTime: '8분',
        views: '9,820',
        tags: ['ChatGPT', '프롬프트', '튜토리얼']
    },
    {
        id: 3,
        category: 'guide',
        title: 'Midjourney 완벽 가이드: 초보자를 위한',
        description: '초보자도 쉽게 따라할 수 있는 이미지 생성 가이드입니다.',
        emoji: '🎨',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        date: '2024.01.10',
        readTime: '12분',
        views: '15,230',
        tags: ['Midjourney', '이미지', '가이드']
    },
    {
        id: 4,
        category: 'news',
        title: 'Claude 3, GPT-4를 넘어서다',
        description: 'Anthropic의 최신 AI 모델 Claude 3의 놀라운 성능을 분석합니다.',
        emoji: '🤖',
        gradient: 'linear-gradient(135deg, #48FFD9 0%, #3DE6C5 100%)',
        date: '2024.01.08',
        readTime: '6분',
        views: '8,540',
        tags: ['Claude', '뉴스', 'AI 모델']
    },
    {
        id: 5,
        category: 'tutorial',
        title: 'AI로 유튜브 숏츠 자동 제작하기',
        description: 'Runway와 ElevenLabs를 활용한 숏폼 콘텐츠 자동화 방법.',
        emoji: '🎬',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        date: '2024.01.05',
        readTime: '15분',
        views: '11,680',
        tags: ['영상', '자동화', 'YouTube']
    },
    {
        id: 6,
        category: 'review',
        title: 'GitHub Copilot vs Cursor: 코딩 AI 비교',
        description: '개발자를 위한 AI 코딩 도구, 어떤 것이 더 나을까?',
        emoji: '💻',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        date: '2024.01.03',
        readTime: '9분',
        views: '7,920',
        tags: ['코딩', '비교', '리뷰']
    },
    {
        id: 7,
        category: 'guide',
        title: 'AI 음성 클로닝 완벽 가이드',
        description: 'ElevenLabs로 나만의 AI 음성을 만드는 방법.',
        emoji: '🎤',
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
        date: '2024.01.01',
        readTime: '11분',
        views: '10,340',
        tags: ['음성', 'ElevenLabs', '클로닝']
    },
    {
        id: 8,
        category: 'tutorial',
        title: 'Notion AI로 업무 자동화하기',
        description: '문서 작성부터 데이터 분석까지, Notion AI 활용법.',
        emoji: '📝',
        gradient: 'linear-gradient(135deg, #000000 0%, #434343 100%)',
        date: '2023.12.28',
        readTime: '7분',
        views: '6,780',
        tags: ['Notion', '업무', '자동화']
    },
    {
        id: 9,
        category: 'news',
        title: 'Sora 출시 임박: OpenAI의 비디오 AI',
        description: 'ChatGPT 개발사의 차세대 비디오 생성 AI에 대한 모든 것.',
        emoji: '🎥',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        date: '2023.12.25',
        readTime: '5분',
        views: '13,560',
        tags: ['Sora', 'OpenAI', '비디오']
    },
    {
        id: 10,
        category: 'review',
        title: '무료 AI 툴 추천 BEST 7',
        description: '비용 부담 없이 사용할 수 있는 최고의 무료 AI 도구들.',
        emoji: '🎁',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        date: '2023.12.22',
        readTime: '8분',
        views: '18,920',
        tags: ['무료', '추천', '초보자']
    },
    {
        id: 11,
        category: 'guide',
        title: 'AI로 마케팅 콘텐츠 만들기',
        description: '블로그, SNS, 이메일 마케팅을 AI로 자동화하는 방법.',
        emoji: '📊',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        date: '2023.12.20',
        readTime: '10분',
        views: '9,450',
        tags: ['마케팅', 'SNS', '콘텐츠']
    },
    {
        id: 12,
        category: 'tutorial',
        title: 'Stable Diffusion 로컬 설치 가이드',
        description: '무료 이미지 생성 AI를 내 컴퓨터에 설치하는 방법.',
        emoji: '🖥️',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        date: '2023.12.18',
        readTime: '14분',
        views: '7,230',
        tags: ['Stable Diffusion', '설치', '로컬']
    },
    {
        id: 13,
        category: 'guide',
        title: 'AI 번역 툴 비교: DeepL vs Papago',
        description: '한국어 번역에 최적화된 AI 번역기는 무엇일까?',
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        date: '2023.12.15',
        readTime: '6분',
        views: '8,670',
        tags: ['번역', 'DeepL', 'Papago']
    },
    {
        id: 14,
        category: 'news',
        title: 'Google Gemini, 멀티모달 AI의 미래',
        description: 'Google의 차세대 AI 모델 Gemini의 모든 것.',
        emoji: '✨',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        date: '2023.12.12',
        readTime: '7분',
        views: '11,280',
        tags: ['Google', 'Gemini', 'AI 모델']
    },
    {
        id: 15,
        category: 'review',
        title: 'AI 디자인 툴 추천 TOP 5',
        description: '디자이너를 위한 최고의 AI 보조 도구들을 소개합니다.',
        emoji: '✨',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        date: '2023.12.10',
        readTime: '9분',
        views: '10,540',
        tags: ['디자인', 'Figma', 'Canva']
    }
];

// 필터된 포스트
let filteredPosts = [...blogPosts];
let currentCategory = 'all';

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    
    // 탭 이벤트 리스너
    const tabs = document.querySelectorAll('.blog-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            // 현재 탭 활성화
            this.classList.add('active');
            
            // 카테고리 필터 적용
            currentCategory = this.dataset.category;
            filterPosts();
        });
    });
});

// 포스트 필터링
function filterPosts() {
    if (currentCategory === 'all') {
        filteredPosts = [...blogPosts];
    } else {
        filteredPosts = blogPosts.filter(p => p.category === currentCategory);
    }
    renderBlogPosts();
}

// 블로그 포스트 렌더링
function renderBlogPosts() {
    const grid = document.getElementById('blogGrid');
    
    if (filteredPosts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
                <div style="font-size: 80px; margin-bottom: 24px;">📚</div>
                <h3 style="margin-bottom: 12px; color: #0C0F14;">게시물이 없습니다</h3>
                <p style="color: #5F6369;">다른 카테고리를 선택해보세요</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredPosts.map(post => `
        <div class="card">
            <div style="height: 200px; background: ${post.gradient}; display: flex; align-items: center; justify-content: center; font-size: 80px;">
                ${post.emoji}
            </div>
            <div class="card-body">
                <span class="tag ${getCategoryTagClass(post.category)}" style="margin-bottom: 12px; display: inline-block;">
                    ${getCategoryLabel(post.category)}
                </span>
                <h4 style="margin-bottom: 12px; font-size: 1.1rem; line-height: 1.4;">
                    ${post.title}
                </h4>
                <p style="font-size: 0.9rem; color: #5F6369; margin-bottom: 16px; line-height: 1.6;">
                    ${post.description}
                </p>
                <div style="display: flex; gap: 12px; margin-bottom: 16px; font-size: 0.85rem; color: #9199A1; flex-wrap: wrap;">
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                    <span><i class="fas fa-eye"></i> ${post.views}</span>
                </div>
                <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
                    ${post.tags.map(tag => `<span class="tag" style="font-size: 0.8rem;">${tag}</span>`).join('')}
                </div>
                <a href="#" class="btn btn-secondary btn-sm" style="width: 100%;" onclick="alert('준비 중입니다'); return false;">
                    <i class="fas fa-arrow-right"></i> 읽어보기
                </a>
            </div>
        </div>
    `).join('');
}

// 카테고리 태그 클래스
function getCategoryTagClass(category) {
    const classes = {
        'guide': 'tag-blue',
        'tutorial': 'tag-neon',
        'news': 'tag-pro',
        'review': 'tag-free'
    };
    return classes[category] || 'tag';
}

// 카테고리 라벨
function getCategoryLabel(category) {
    const labels = {
        'guide': '가이드',
        'tutorial': '튜토리얼',
        'news': '뉴스',
        'review': '리뷰'
    };
    return labels[category] || category;
}