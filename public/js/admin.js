// ===========================
// 관리자 페이지 JavaScript
// ===========================

// 배열 데이터 저장
let formArrays = {
    features: [],
    useCases: [],
    targetAudience: [],
    similarTools: []
};

// 아이콘 데이터 저장
let currentIcon = null;

// 가격 플랜 데이터 저장
let pricingPlans = [];
let currentPlanFeatures = [];

// 선택된 카테고리와 가격 타입
let selectedCategories = [];
let selectedPriceTypes = [];

// 탭 전환
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const section = this.dataset.section;
            
            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
            
            // 현재 탭 활성화
            this.classList.add('active');
            document.getElementById(section).classList.add('active');
            
            // 리스트 탭이면 데이터 로드
            if (section === 'list') {
                loadTools();
            }
        });
    });
    
    // 초기 툴 로드
    loadTools();
    
    // 배열 필드 초기 렌더링
    renderArrayItems('useCases');
    renderArrayItems('targetAudience');
    renderArrayItems('similarTools');
    renderArrayItems('features');
    
    // 활용 사례 타입 전환 리스너
    const useCaseTypeRadios = document.querySelectorAll('input[name="useCaseType"]');
    useCaseTypeRadios.forEach(radio => {
        radio.addEventListener('change', toggleUseCaseInput);
    });
});

// 배열 아이템 추가
function addArrayItem(arrayName, inputId) {
    console.log('addArrayItem called:', arrayName, inputId);
    
    const input = document.getElementById(inputId);
    if (!input) {
        console.error('Input element not found:', inputId);
        alert('입력 필드를 찾을 수 없습니다: ' + inputId);
        return;
    }
    
    const value = input.value.trim();
    
    if (!value) {
        alert('내용을 입력해주세요');
        return;
    }
    
    if (!formArrays[arrayName]) {
        console.error('Array name not found in formArrays:', arrayName);
        formArrays[arrayName] = [];
    }
    
    formArrays[arrayName].push(value);
    console.log('Added to', arrayName, ':', value);
    console.log('Current array:', formArrays[arrayName]);
    
    renderArrayItems(arrayName);
    input.value = '';
}

// 배열 아이템 제거
function removeArrayItem(arrayName, index) {
    formArrays[arrayName].splice(index, 1);
    
    // useCases는 별도 렌더링 함수 사용
    if (arrayName === 'useCases') {
        renderUseCases();
    } else {
        renderArrayItems(arrayName);
    }
}

// ===========================
// 활용 사례 관리 (영상/이미지 구분)
// ===========================

// 활용 사례 타입 전환
function toggleUseCaseInput() {
    const selectedType = document.querySelector('input[name="useCaseType"]:checked').value;
    const videoInput = document.getElementById('videoUrlInput');
    const imageInput = document.getElementById('imageFileInput');
    
    if (selectedType === 'video') {
        videoInput.style.display = 'block';
        imageInput.style.display = 'none';
    } else {
        videoInput.style.display = 'none';
        imageInput.style.display = 'block';
    }
}

// 영상 URL 추가
function addUseCaseVideo() {
    const input = document.getElementById('useCaseVideoUrl');
    const url = input.value.trim();
    
    if (!url) {
        alert('YouTube URL을 입력해주세요');
        return;
    }
    
    // YouTube URL 검증
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
        alert('올바른 YouTube URL을 입력해주세요');
        return;
    }
    
    formArrays.useCases.push(url);
    renderUseCases();
    input.value = '';
}

// 이미지 파일 추가
async function addUseCaseImage() {
    const fileInput = document.getElementById('useCaseImageFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('이미지 파일을 선택해주세요');
        return;
    }
    
    // 파일 크기 검증 (2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('이미지 파일은 2MB 이하만 가능합니다');
        return;
    }
    
    // 파일 타입 검증
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
        alert('PNG, JPG, GIF, WebP 파일만 가능합니다');
        return;
    }
    
    try {
        // Base64로 변환
        const base64 = await fileToBase64(file);
        formArrays.useCases.push(base64);
        renderUseCases();
        
        // 입력 초기화
        fileInput.value = '';
        document.getElementById('useCaseImagePreview').style.display = 'none';
        
    } catch (error) {
        console.error('Image conversion error:', error);
        alert('이미지 변환 중 오류가 발생했습니다');
    }
}

// 파일을 Base64로 변환
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// 이미지 파일 미리보기
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('useCaseImageFile');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('useCaseImagePreview');
                    const img = document.getElementById('useCasePreviewImg');
                    img.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// 활용 사례 렌더링 (영상/이미지 구분)
function renderUseCases() {
    const container = document.getElementById('useCases');
    
    if (!formArrays.useCases || formArrays.useCases.length === 0) {
        container.innerHTML = '<p style="color: #9199A1; font-size: 0.9rem;">추가된 활용 사례가 없습니다</p>';
        return;
    }
    
    container.innerHTML = formArrays.useCases.map((item, index) => {
        const isVideo = item.includes('youtube.com') || item.includes('youtu.be');
        const isImage = item.startsWith('data:image/') || item.startsWith('http');
        
        let icon = '📄';
        let label = 'URL';
        
        if (isVideo) {
            icon = '🎬';
            label = '영상';
        } else if (isImage) {
            icon = '🖼️';
            label = '이미지';
        }
        
        // 긴 URL은 축약
        let displayText = item;
        if (item.length > 60) {
            displayText = item.substring(0, 57) + '...';
        }
        
        return `
            <div class="array-item">
                <span>${icon} <strong>${label}</strong>: ${displayText}</span>
                <button type="button" class="btn-remove" onclick="removeArrayItem('useCases', ${index})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }).join('');
}

// 배열 아이템 렌더링
function renderArrayItems(arrayName) {
    // useCases는 별도 함수 사용
    if (arrayName === 'useCases') {
        renderUseCases();
        return;
    }
    
    const container = document.getElementById(arrayName);
    
    if (!container) {
        console.error('Container not found:', arrayName);
        return;
    }
    
    if (!formArrays[arrayName]) {
        console.warn('Array not initialized:', arrayName);
        formArrays[arrayName] = [];
    }
    
    if (formArrays[arrayName].length === 0) {
        container.innerHTML = '<p style="color: #9199A1; font-size: 0.9rem;">추가된 항목이 없습니다</p>';
        return;
    }
    
    container.innerHTML = formArrays[arrayName].map((item, index) => `
        <div class="array-item">
            <span>${item}</span>
            <button type="button" class="btn-remove" onclick="removeArrayItem('${arrayName}', ${index})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    console.log('Rendered', arrayName, ':', formArrays[arrayName].length, 'items');
}

// 배열 아이템 초기화
function clearArrayItems() {
    formArrays = {
        features: [],
        useCases: [],
        targetAudience: [],
        similarTools: []
    };
    renderArrayItems('features');
    renderArrayItems('useCases');
    renderArrayItems('targetAudience');
    renderArrayItems('similarTools');
    
    // 가격 플랜 초기화
    pricingPlans = [];
    currentPlanFeatures = [];
    renderPricingPlans();
    renderPlanFeatures();
    
    // 카테고리 & 가격 타입 초기화
    selectedCategories = [];
    selectedPriceTypes = [];
    document.querySelectorAll('input[name="categories"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="priceTypes"]').forEach(cb => cb.checked = false);
    document.getElementById('selectedCategories').value = '';
    document.getElementById('selectedPriceTypes').value = '';
    document.getElementById('categoriesPreview').style.display = 'none';
    document.getElementById('priceTypesPreview').style.display = 'none';
    
    // 아이콘 초기화
    clearIcon();
}

// 툴 추가 핸들러
async function handleAddTool(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const iconValue = document.getElementById('iconValue').value;
    
    const data = {
        id: formData.get('id'),
        name: formData.get('name'),
        icon: iconValue,
        categories: selectedCategories,
        description: formData.get('description'),
        priceTypes: selectedPriceTypes,
        korean: formData.get('korean') === 'on',
        gradient: formData.get('gradient'),
        url: formData.get('url'),
        affiliateUrl: formData.get('affiliateUrl') || '',
        features: formArrays.features,
        useCases: formArrays.useCases,
        targetAudience: formArrays.targetAudience,
        pricingPlans: pricingPlans,
        similarTools: formArrays.similarTools,
        status: formData.get('status') || 'active'
    };
    
    // 검증
    if (!data.id || !data.name || selectedCategories.length === 0 || selectedPriceTypes.length === 0 || !iconValue) {
        alert('필수 항목을 모두 입력해주세요\n(카테고리와 가격 타입을 최소 1개 이상 선택하세요)');
        return;
    }
    
    try {
        const response = await fetch('tables/ai_tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('저장 실패');
        }
        
        const result = await response.json();
        
        alert('✅ AI 툴이 성공적으로 추가되었습니다!');
        
        // 폼 초기화
        event.target.reset();
        clearArrayItems();
        
        // 리스트 탭으로 이동
        document.querySelector('.admin-tab[data-section="list"]').click();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ 저장 중 오류가 발생했습니다: ' + error.message);
    }
}

// 툴 목록 로드
async function loadTools() {
    const container = document.getElementById('toolsList');
    
    container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="width: 48px; height: 48px; border: 4px solid #E4E6EB; border-top-color: #425CFF; border-radius: 50%; margin: 0 auto 16px; animation: spin 1s linear infinite;"></div>
            <p style="color: #5F6369;">로딩 중...</p>
        </div>
    `;
    
    try {
        // Cloudflare D1 + Hono API 연동
        const response = await fetch('/tables/ai_tools?limit=100');
        
        if (!response.ok) {
            throw new Error('데이터 로드 실패');
        }
        
        const result = await response.json();
        const tools = result.data || [];
        
        if (tools.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <h3 style="margin-bottom: 8px; color: #0C0F14;">등록된 툴이 없습니다</h3>
                    <p>새 AI 툴을 추가해보세요</p>
                    <button class="btn btn-primary" onclick="document.querySelector('.admin-tab[data-section=\\'add\\']').click()">
                        <i class="fas fa-plus"></i> 툴 추가하기
                    </button>
                </div>
            `;
            return;
        }
        
        container.innerHTML = `
            <table class="tools-table">
                <thead>
                    <tr>
                        <th>아이콘</th>
                        <th>이름</th>
                        <th>카테고리</th>
                        <th>가격</th>
                        <th>상태</th>
                        <th>작업</th>
                    </tr>
                </thead>
                <tbody>
                    ${tools.map(tool => {
                        let iconHtml = '🤖';
                        if (tool.icon) {
                            if (tool.icon.startsWith('data:image/') || tool.icon.startsWith('http://') || tool.icon.startsWith('https://')) {
                                iconHtml = `<img src="${tool.icon}" style="width: 48px; height: 48px; object-fit: contain; border-radius: 8px;">`;
                            } else {
                                iconHtml = tool.icon;
                            }
                        }
                        
                        return `
                        <tr>
                            <td style="font-size: 2rem;">${iconHtml}</td>
                            <td>
                                <strong>${tool.name}</strong><br>
                                <small style="color: #9199A1;">${tool.id}</small>
                            </td>
                            <td>${renderToolCategories(tool)}</td>
                            <td>${renderToolPriceTypes(tool)}</td>
                            <td>
                                <span class="status-badge status-${tool.status || 'active'}">
                                    ${getStatusLabel(tool.status)}
                                </span>
                            </td>
                            <td>
                                <button class="btn-edit" onclick="editTool('${tool.id}')">
                                    <i class="fas fa-edit"></i> 수정
                                </button>
                                <button class="btn-delete" onclick="deleteTool('${tool.id}')">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
        
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color: #EF4444;"></i>
                <h3 style="margin-bottom: 8px; color: #EF4444;">오류 발생</h3>
                <p>${error.message}</p>
                <button class="btn btn-primary" onclick="loadTools()">
                    <i class="fas fa-sync-alt"></i> 다시 시도
                </button>
            </div>
        `;
    }
}

// 툴 수정
async function editTool(toolId) {
    try {
        const response = await fetch(`tables/ai_tools/${toolId}`);
        
        if (!response.ok) {
            throw new Error('데이터 로드 실패');
        }
        
        const tool = await response.json();
        
        // 폼에 데이터 채우기
        const form = document.getElementById('addToolForm');
        form.elements['id'].value = tool.id;
        form.elements['id'].readOnly = true; // ID는 수정 불가
        form.elements['name'].value = tool.name;
        form.elements['icon'].value = tool.icon;
        form.elements['category'].value = tool.category;
        form.elements['description'].value = tool.description;
        form.elements['price'].value = tool.price;
        form.elements['korean'].checked = tool.korean;
        form.elements['gradient'].value = tool.gradient;
        form.elements['url'].value = tool.url;
        form.elements['status'].value = tool.status || 'active';
        
        // 배열 데이터 채우기
        formArrays.features = tool.features || [];
        
        renderArrayItems('features');
        
        // 추가 탭으로 이동
        document.querySelector('.admin-tab[data-section="add"]').click();
        
        // 폼 제출 시 업데이트 모드로 변경
        form.onsubmit = async function(event) {
            event.preventDefault();
            await handleUpdateTool(event, tool.id);
        };
        
        // 저장 버튼 텍스트 변경
        form.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-save"></i> 수정 저장';
        
        alert('수정 모드로 전환되었습니다. 수정 후 저장하세요.');
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ 데이터 로드 실패: ' + error.message);
    }
}

// 툴 업데이트
async function handleUpdateTool(event, recordId) {
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        icon: formData.get('icon'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: formData.get('price'),
        korean: formData.get('korean') === 'on',
        gradient: formData.get('gradient'),
        url: formData.get('url'),
        features: formArrays.features,
        status: formData.get('status') || 'active'
    };
    
    try {
        const response = await fetch(`tables/ai_tools/${recordId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('수정 실패');
        }
        
        alert('✅ 수정이 완료되었습니다!');
        
        // 폼 초기화
        event.target.reset();
        clearArrayItems();
        event.target.elements['id'].readOnly = false;
        event.target.onsubmit = handleAddTool;
        event.target.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-save"></i> 저장하기';
        
        // 리스트 탭으로 이동
        document.querySelector('.admin-tab[data-section="list"]').click();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ 수정 중 오류가 발생했습니다: ' + error.message);
    }
}

// 툴 삭제
async function deleteTool(toolId) {
    if (!confirm(`정말로 이 툴을 삭제하시겠습니까?\n\n툴 ID: ${toolId}`)) {
        return;
    }
    
    try {
        const response = await fetch(`tables/ai_tools/${toolId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('삭제 실패');
        }
        
        alert('✅ 삭제되었습니다');
        loadTools();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ 삭제 중 오류가 발생했습니다: ' + error.message);
    }
}

// 유틸리티 함수
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

function getPriceLabel(price) {
    const labels = {
        'free': '무료',
        'freemium': '무료 체험',
        'paid': '유료'
    };
    return labels[price] || price;
}

function getStatusLabel(status) {
    const labels = {
        'active': '활성',
        'draft': '임시저장',
        'archived': '보관됨'
    };
    return labels[status] || '활성';
}

// 툴 카테고리 렌더링 (다중 지원)
function renderToolCategories(tool) {
    if (Array.isArray(tool.categories)) {
        return tool.categories.map(cat => getCategoryLabel(cat)).join(', ');
    } else if (tool.category) {
        return getCategoryLabel(tool.category);
    }
    return '-';
}

// 툴 가격 타입 렌더링 (다중 지원)
function renderToolPriceTypes(tool) {
    if (Array.isArray(tool.priceTypes)) {
        return tool.priceTypes.map(price => getPriceLabel(price)).join(', ');
    } else if (tool.price) {
        return getPriceLabel(tool.price);
    }
    return '-';
}

// ===========================
// 아이콘 업로드 기능
// ===========================

// 파일 업로드 핸들러
function handleIconUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    
    // 파일 타입 체크
    if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        event.target.value = '';
        return;
    }
    
    // 파일 크기 체크 (2MB 제한)
    if (file.size > 2 * 1024 * 1024) {
        alert('파일 크기는 2MB 이하여야 합니다.\n현재: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB');
        event.target.value = '';
        return;
    }
    
    // 파일을 Base64로 변환
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const base64Data = e.target.result;
        currentIcon = base64Data;
        
        // 숨겨진 input에 저장
        document.getElementById('iconValue').value = base64Data;
        
        // 미리보기 표시
        showIconPreview(base64Data, file.name, file.size);
    };
    
    reader.onerror = function() {
        alert('파일을 읽는 중 오류가 발생했습니다.');
        event.target.value = '';
    };
    
    reader.readAsDataURL(file);
}

// URL 입력 토글
function toggleIconInput() {
    const urlInput = document.getElementById('iconUrlInput');
    const fileInput = document.getElementById('iconFile');
    
    if (urlInput.style.display === 'none') {
        urlInput.style.display = 'block';
        fileInput.value = '';
    } else {
        urlInput.style.display = 'none';
    }
}

// URL 사용
function useIconUrl() {
    const urlInput = document.getElementById('iconUrl');
    const url = urlInput.value.trim();
    
    if (!url) {
        alert('URL 또는 이모지를 입력해주세요.');
        return;
    }
    
    currentIcon = url;
    document.getElementById('iconValue').value = url;
    
    // 미리보기 표시
    showIconPreview(url, 'URL/이모지', 0);
    
    // URL 입력창 숨기기
    document.getElementById('iconUrlInput').style.display = 'none';
    document.getElementById('iconFile').value = '';
}

// 아이콘 미리보기 표시
function showIconPreview(iconData, fileName, fileSize) {
    const preview = document.getElementById('iconPreview');
    const previewImage = document.getElementById('iconPreviewImage');
    const previewText = document.getElementById('iconPreviewText');
    
    // 이미지인지 이모지/URL인지 판단
    if (iconData.startsWith('data:image/')) {
        // Base64 이미지
        previewImage.innerHTML = `<img src="${iconData}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;">`;
        previewImage.style.background = 'white';
        previewText.textContent = `${fileName} (${(fileSize / 1024).toFixed(1)} KB)`;
    } else if (iconData.startsWith('http://') || iconData.startsWith('https://')) {
        // URL
        previewImage.innerHTML = `<img src="${iconData}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;" onerror="this.style.display='none'; this.parentElement.textContent='🤖';">`;
        previewImage.style.background = 'white';
        previewText.textContent = 'URL 이미지';
    } else {
        // 이모지
        previewImage.textContent = iconData;
        previewImage.style.background = 'linear-gradient(135deg, #425CFF, #5a6fff)';
        previewText.textContent = '이모지';
    }
    
    preview.style.display = 'flex';
}

// 아이콘 제거
function clearIcon() {
    currentIcon = null;
    document.getElementById('iconValue').value = '';
    document.getElementById('iconFile').value = '';
    document.getElementById('iconUrl').value = '';
    document.getElementById('iconPreview').style.display = 'none';
    document.getElementById('iconUrlInput').style.display = 'none';
}

// ===========================
// 가격 플랜 관리 기능
// ===========================

// 플랜 기능 추가
function addPlanFeature() {
    const input = document.getElementById('planFeatureInput');
    const value = input.value.trim();
    
    if (!value) {
        alert('기능을 입력해주세요');
        return;
    }
    
    currentPlanFeatures.push(value);
    renderPlanFeatures();
    input.value = '';
}

// 플랜 기능 제거
function removePlanFeature(index) {
    currentPlanFeatures.splice(index, 1);
    renderPlanFeatures();
}

// 플랜 기능 렌더링
function renderPlanFeatures() {
    const container = document.getElementById('planFeatures');
    
    if (currentPlanFeatures.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = currentPlanFeatures.map((feature, index) => `
        <div class="array-item">
            <span>✓ ${feature}</span>
            <button type="button" class="btn-remove" onclick="removePlanFeature(${index})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// 가격 플랜 추가
function addPricingPlan() {
    const name = document.getElementById('planName').value.trim();
    const monthlyPrice = document.getElementById('planMonthlyPrice').value.trim();
    const yearlyPrice = document.getElementById('planYearlyPrice').value.trim();
    const otherPrice = document.getElementById('planOtherPrice').value.trim();
    const description = document.getElementById('planDescription').value.trim();
    const featured = document.getElementById('planFeatured').checked;
    
    // 검증
    if (!name) {
        alert('플랜명을 입력해주세요');
        return;
    }
    
    // 최소 하나의 가격은 입력되어야 함
    if (!monthlyPrice && !yearlyPrice && !otherPrice) {
        alert('월 구독, 연 구독, 또는 기타 가격 중 하나 이상 입력해주세요');
        return;
    }
    
    // 월 구독 플랜 추가
    if (monthlyPrice) {
        const monthlyPlan = {
            name: name,
            price: monthlyPrice,
            period: '월 구독',
            description: description,
            features: [...currentPlanFeatures],
            featured: featured
        };
        pricingPlans.push(monthlyPlan);
    }
    
    // 연 구독 플랜 추가
    if (yearlyPrice) {
        const yearlyPlan = {
            name: name,
            price: yearlyPrice,
            period: '연 구독',
            description: description,
            features: [...currentPlanFeatures],
            featured: false // 연 구독은 자동으로 featured 해제
        };
        pricingPlans.push(yearlyPlan);
    }
    
    // 기타 가격 플랜 추가
    if (otherPrice) {
        const otherPlan = {
            name: name,
            price: otherPrice,
            period: otherPrice.includes('무료') ? '영구 무료' : '일회성',
            description: description,
            features: [...currentPlanFeatures],
            featured: false
        };
        pricingPlans.push(otherPlan);
    }
    
    renderPricingPlans();
    
    // 폼 초기화
    document.getElementById('planName').value = '';
    document.getElementById('planMonthlyPrice').value = '';
    document.getElementById('planYearlyPrice').value = '';
    document.getElementById('planOtherPrice').value = '';
    document.getElementById('planDescription').value = '';
    document.getElementById('planFeatured').checked = false;
    currentPlanFeatures = [];
    renderPlanFeatures();
}

// 가격 플랜 제거
function removePricingPlan(index) {
    if (confirm('이 플랜을 삭제하시겠습니까?')) {
        pricingPlans.splice(index, 1);
        renderPricingPlans();
    }
}

// 가격 플랜 렌더링
function renderPricingPlans() {
    const container = document.getElementById('pricingPlans');
    
    if (pricingPlans.length === 0) {
        container.innerHTML = '<p style="color: #9199A1; font-size: 0.9rem; text-align: center; padding: 20px;">추가된 가격 플랜이 없습니다</p>';
        return;
    }
    
    container.innerHTML = pricingPlans.map((plan, index) => `
        <div class="pricing-plan-card ${plan.featured ? 'featured' : ''}">
            ${plan.featured ? '<div class="featured-badge">⭐ 추천</div>' : ''}
            
            <div class="pricing-plan-header">
                <div style="flex: 1;">
                    <div class="pricing-plan-name">${plan.name}</div>
                    <div class="pricing-plan-price">${plan.price}</div>
                    <div class="pricing-plan-period">${plan.period}</div>
                </div>
                
                <div class="plan-actions">
                    <button type="button" class="btn-edit" onclick="editPricingPlan(${index})" title="수정">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn-remove" onclick="removePricingPlan(${index})" title="삭제">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            
            ${plan.description ? `<div class="pricing-plan-desc">${plan.description}</div>` : ''}
            
            ${plan.features && plan.features.length > 0 ? `
                <ul class="pricing-plan-features">
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
}

// ===========================
// 카테고리 & 가격 타입 다중선택
// ===========================

// 카테고리 업데이트
function updateSelectedCategories() {
    const checkboxes = document.querySelectorAll('input[name="categories"]:checked');
    selectedCategories = Array.from(checkboxes).map(cb => cb.value);
    
    // hidden input 업데이트
    document.getElementById('selectedCategories').value = selectedCategories.join(',');
    
    // 미리보기 렌더링
    renderCategoriesPreview();
}

// 카테고리 미리보기 렌더링
function renderCategoriesPreview() {
    const preview = document.getElementById('categoriesPreview');
    const list = document.getElementById('categoriesPreviewList');
    
    if (selectedCategories.length === 0) {
        preview.style.display = 'none';
        return;
    }
    
    const categoryLabels = {
        'image': '🎨 이미지 생성',
        'video': '🎬 영상 생성',
        'voice': '🎤 음성/더빙',
        'writing': '✍️ 문서 작성',
        'automation': '⚡ 업무 자동화',
        'coding': '💻 개발/코딩',
        'marketing': '📈 마케팅/SEO',
        'design': '🎨 디자인',
        'translation': '🌐 번역/언어'
    };
    
    list.innerHTML = selectedCategories.map(cat => 
        `<span class="selected-tag">${categoryLabels[cat]}</span>`
    ).join('');
    
    preview.style.display = 'block';
}

// 가격 타입 업데이트
function updateSelectedPriceTypes() {
    const checkboxes = document.querySelectorAll('input[name="priceTypes"]:checked');
    selectedPriceTypes = Array.from(checkboxes).map(cb => cb.value);
    
    // hidden input 업데이트
    document.getElementById('selectedPriceTypes').value = selectedPriceTypes.join(',');
    
    // 미리보기 렌더링
    renderPriceTypesPreview();
}

// 가격 타입 미리보기 렌더링
function renderPriceTypesPreview() {
    const preview = document.getElementById('priceTypesPreview');
    const list = document.getElementById('priceTypesPreviewList');
    
    if (selectedPriceTypes.length === 0) {
        preview.style.display = 'none';
        return;
    }
    
    const priceLabels = {
        'free': '🎁 무료',
        'freemium': '🔥 무료 체험',
        'paid': '💳 유료'
    };
    
    list.innerHTML = selectedPriceTypes.map(price => 
        `<span class="selected-tag">${priceLabels[price]}</span>`
    ).join('');
    
    preview.style.display = 'block';
}

// 가격 플랜 수정
function editPricingPlan(index) {
    const plan = pricingPlans[index];
    
    // 폼에 데이터 채우기
    document.getElementById('planName').value = plan.name;
    document.getElementById('planPrice').value = plan.price;
    document.getElementById('planDescription').value = plan.description || '';
    document.getElementById('planFeatured').checked = plan.featured;
    
    // 기간 설정
    if (plan.period === '월 구독') {
        document.getElementById('planPeriodType').value = 'monthly';
    } else if (plan.period === '연 구독') {
        document.getElementById('planPeriodType').value = 'yearly';
    } else if (plan.period === '일회성') {
        document.getElementById('planPeriodType').value = 'onetime';
    } else {
        document.getElementById('planPeriodType').value = 'custom';
        document.getElementById('planPeriodCustom').value = plan.period;
        document.getElementById('customPeriodDiv').style.display = 'block';
    }
    
    // 기능 목록 복사
    currentPlanFeatures = [...plan.features];
    renderPlanFeatures();
    
    // 기존 플랜 제거
    pricingPlans.splice(index, 1);
    renderPricingPlans();
    
    // 스크롤
    document.getElementById('planName').scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    alert('수정 모드로 전환되었습니다. 수정 후 다시 추가해주세요.');
}