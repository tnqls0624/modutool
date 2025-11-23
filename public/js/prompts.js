// ===========================
// 프롬프트 페이지 JavaScript
// ===========================

// 프롬프트 데이터
const prompts = [
    // Midjourney
    {
        id: 1,
        category: 'midjourney',
        title: '현실적인 인물 초상화',
        description: '자연스러운 조명과 부드러운 그림자를 가진 사실적인 인물 사진',
        prompt: 'professional portrait photo of a [person description], natural lighting, soft shadows, bokeh background, shot on Canon EOS R5, 85mm f/1.4, photorealistic, high detail --v 6 --ar 3:4',
        tags: ['인물', '사진', '초상화']
    },
    {
        id: 2,
        category: 'midjourney',
        title: '판타지 풍경',
        description: '마법 같은 분위기의 판타지 풍경 이미지',
        prompt: 'ethereal fantasy landscape, floating islands, magical waterfalls, glowing crystals, mystical atmosphere, cinematic lighting, ultra detailed, concept art style --v 6 --ar 16:9',
        tags: ['판타지', '풍경', '컨셉 아트']
    },
    {
        id: 3,
        category: 'midjourney',
        title: '미니멀 로고 디자인',
        description: '심플하고 현대적인 로고 디자인',
        prompt: 'minimalist logo design, [company/brand name], clean lines, geometric shapes, modern, professional, vector style, white background --v 6',
        tags: ['로고', '미니멀', '디자인']
    },
    {
        id: 4,
        category: 'midjourney',
        title: '제품 목업',
        description: '제품 홍보를 위한 전문적인 목업 이미지',
        prompt: '[product] mockup, studio lighting, clean white background, professional photography, high resolution, product design, commercial photo --v 6 --ar 1:1',
        tags: ['제품', '목업', '상업']
    },
    
    // ChatGPT
    {
        id: 5,
        category: 'chatgpt',
        title: '마케팅 카피 작성',
        description: '매력적인 마케팅 문구 생성',
        prompt: '[제품명]을 위한 매력적인 마케팅 카피를 5가지 작성해주세요. 각 카피는 30자 이내로 작성하고, 감성적이면서도 행동을 유도하는 문구를 포함해주세요. 타겟 고객은 [타겟 설명]입니다.',
        tags: ['마케팅', '카피라이팅', '광고']
    },
    {
        id: 6,
        category: 'chatgpt',
        title: '블로그 포스트 아이디어',
        description: 'SEO 최적화된 블로그 주제 생성',
        prompt: '[주제]에 관한 블로그 포스트 아이디어 10개를 제안해주세요. 각 아이디어는 SEO 친화적이고 검색량이 높은 키워드를 포함해야 하며, 독자의 관심을 끌 수 있는 제목 형식으로 작성해주세요.',
        tags: ['블로그', 'SEO', '콘텐츠']
    },
    {
        id: 7,
        category: 'chatgpt',
        title: '이메일 템플릿',
        description: '전문적인 비즈니스 이메일 작성',
        prompt: '[목적]을 위한 전문적인 이메일 템플릿을 작성해주세요. 수신자는 [수신자 설명]이며, 격식있으면서도 친근한 톤을 유지해주세요. 주요 내용: [핵심 내용]. CTA(행동 유도)도 포함해주세요.',
        tags: ['이메일', '비즈니스', '템플릿']
    },
    {
        id: 8,
        category: 'chatgpt',
        title: '소셜미디어 캡션',
        description: '인스타그램, 페이스북용 매력적인 캡션',
        prompt: '[주제/제품]에 대한 소셜미디어 게시물 캡션을 5개 작성해주세요. 각 캡션은 이모지를 포함하고, 해시태그 5-10개를 추천해주세요. 톤은 [친근함/전문적/유머러스] 스타일로 작성해주세요.',
        tags: ['소셜미디어', 'SNS', '캡션']
    },
    
    // Claude
    {
        id: 9,
        category: 'claude',
        title: '문서 요약 및 분석',
        description: '긴 문서의 핵심 내용 추출',
        prompt: '다음 문서를 읽고: 1) 핵심 내용을 3-5가지로 요약하고, 2) 주요 통계나 데이터를 추출하며, 3) 실행 가능한 액션 아이템을 제시해주세요. 4) 문서의 주요 결론이나 시사점도 분석해주세요.\n\n[문서 내용 붙여넣기]',
        tags: ['문서', '요약', '분석']
    },
    {
        id: 10,
        category: 'claude',
        title: '코드 리뷰 및 개선',
        description: '코드 품질 향상을 위한 피드백',
        prompt: '다음 코드를 리뷰해주세요: 1) 잠재적인 버그나 보안 취약점, 2) 성능 개선 방안, 3) 코드 가독성 향상 제안, 4) 베스트 프랙티스 적용 여부를 확인해주세요. 개선된 코드도 함께 제공해주세요.\n\n[코드 붙여넣기]',
        tags: ['코딩', '리뷰', '개선']
    },
    {
        id: 11,
        category: 'claude',
        title: '프로젝트 기획서 작성',
        description: '체계적인 프로젝트 문서 생성',
        prompt: '[프로젝트명]을 위한 상세한 기획서를 작성해주세요. 다음 섹션을 포함해주세요: 1) 프로젝트 개요 및 목적, 2) 주요 기능 및 스펙, 3) 타임라인 및 마일스톤, 4) 필요한 리소스, 5) 예상 위험 요소 및 대응 방안.',
        tags: ['기획', '프로젝트', '문서']
    },
    {
        id: 12,
        category: 'claude',
        title: '비교 분석 표 생성',
        description: '경쟁사나 옵션 비교 테이블',
        prompt: '[비교 대상들]을 다음 기준으로 비교 분석한 표를 만들어주세요: [비교 기준 1, 2, 3...]. 각 항목에 대한 설명과 함께 장단점을 명확히 제시하고, 최종 추천 의견도 포함해주세요.',
        tags: ['비교', '분석', '의사결정']
    },
    
    // Runway
    {
        id: 13,
        category: 'runway',
        title: '제품 소개 영상',
        description: '제품 특징을 강조하는 영상',
        prompt: 'Product showcase video, [product] rotating 360 degrees, clean white studio background, soft professional lighting, slow motion, highlight key features, modern minimalist style',
        tags: ['제품', '영상', '프로모션']
    },
    {
        id: 14,
        category: 'runway',
        title: '자연 풍경 타임랩스',
        description: '아름다운 자연 장면의 시간 변화',
        prompt: 'Time-lapse of [location/scene], golden hour lighting, clouds moving across sky, changing seasons, cinematic color grading, 4K quality, smooth camera movement',
        tags: ['타임랩스', '자연', '풍경']
    },
    {
        id: 15,
        category: 'runway',
        title: '추상 애니메이션',
        description: '창의적인 모션 그래픽',
        prompt: 'Abstract motion graphics, geometric shapes morphing, vibrant gradient colors, smooth transitions, loop animation, modern minimalist design, satisfying movement',
        tags: ['추상', '애니메이션', '모션']
    },
    
    // Pika
    {
        id: 16,
        category: 'pika',
        title: '캐릭터 애니메이션',
        description: '캐릭터의 자연스러운 움직임',
        prompt: '[Character description] walking through [environment], natural movement, personality in motion, cinematic lighting, detailed animation, smooth transitions',
        tags: ['캐릭터', '애니메이션', '움직임']
    },
    {
        id: 17,
        category: 'pika',
        title: '로고 애니메이션',
        description: '브랜드 로고의 역동적인 등장',
        prompt: '[Company logo] reveal animation, elegant entrance, professional motion design, modern and sleek, 3-5 seconds duration, corporate style',
        tags: ['로고', '브랜드', '모션']
    },
    {
        id: 18,
        category: 'pika',
        title: '분위기 영상',
        description: '감성적인 무드 영상',
        prompt: 'Atmospheric mood video of [scene/setting], dreamy and ethereal, soft focus, warm color palette, gentle camera movements, peaceful ambiance, cinematic feel',
        tags: ['분위기', '무드', '감성']
    }
];

// 필터된 프롬프트
let filteredPrompts = [...prompts];
let currentCategory = 'all';

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    renderPrompts();
    
    // 탭 이벤트 리스너
    const tabs = document.querySelectorAll('.prompt-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            // 현재 탭 활성화
            this.classList.add('active');
            
            // 카테고리 필터 적용
            currentCategory = this.dataset.category;
            filterPrompts();
        });
    });
});

// 프롬프트 필터링
function filterPrompts() {
    if (currentCategory === 'all') {
        filteredPrompts = [...prompts];
    } else {
        filteredPrompts = prompts.filter(p => p.category === currentCategory);
    }
    renderPrompts();
}

// 프롬프트 렌더링
function renderPrompts() {
    const grid = document.getElementById('promptsGrid');
    
    if (filteredPrompts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
                <div style="font-size: 80px; margin-bottom: 24px;">🔍</div>
                <h3 style="margin-bottom: 12px; color: #0C0F14;">프롬프트가 없습니다</h3>
                <p style="color: #5F6369;">다른 카테고리를 선택해보세요</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredPrompts.map(prompt => `
        <div class="card">
            <div class="card-body">
                <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
                    <div>
                        <span class="tag tag-blue" style="margin-bottom: 8px; display: inline-block;">
                            ${getCategoryIcon(prompt.category)} ${getCategoryName(prompt.category)}
                        </span>
                        <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">${prompt.title}</h4>
                    </div>
                </div>
                
                <p style="font-size: 0.9rem; color: #5F6369; margin-bottom: 16px;">
                    ${prompt.description}
                </p>
                
                <div style="background: #F7F8FA; padding: 16px; border-radius: 8px; margin-bottom: 16px; position: relative;">
                    <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word; font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.6; color: #0C0F14;">${prompt.prompt}</pre>
                </div>
                
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
                    ${prompt.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="copyPrompt('${escapeHtml(prompt.prompt)}', this)">
                    <i class="fas fa-copy"></i> 프롬프트 복사
                </button>
            </div>
        </div>
    `).join('');
}

// 프롬프트 복사
function copyPrompt(text, button) {
    copyToClipboard(text, button);
}

// HTML 이스케이프
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/'/g, '&#39;');
}

// 카테고리 아이콘
function getCategoryIcon(category) {
    const icons = {
        'midjourney': '🎨',
        'chatgpt': '💬',
        'claude': '🤖',
        'runway': '🎬',
        'pika': '🎞️'
    };
    return icons[category] || '✨';
}

// 카테고리 이름
function getCategoryName(category) {
    const names = {
        'midjourney': 'Midjourney',
        'chatgpt': 'ChatGPT',
        'claude': 'Claude',
        'runway': 'Runway',
        'pika': 'Pika'
    };
    return names[category] || category;
}