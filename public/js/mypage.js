// ========================================
// AI연구소 마이페이지 로직
// ========================================
// 사용자 프로필 및 북마크 관리
// ========================================

// DOM 요소
const profileAvatar = document.getElementById('profileAvatar');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const bookmarkCount = document.getElementById('bookmarkCount');
const loadingState = document.getElementById('loadingState');
const bookmarksGrid = document.getElementById('bookmarksGrid');
const emptyState = document.getElementById('emptyState');

// 현재 사용자
let currentUser = null;

// ========================================
// 페이지 보호 - 로그인 필수
// ========================================
window.firebaseAuth.requireAuth();

// ========================================
// 사용자 프로필 표시
// ========================================
function displayUserProfile(user) {
    currentUser = user;
    
    // 프로필 사진
    if (user.photoURL) {
        profileAvatar.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    } else {
        const initial = (user.displayName || user.email?.charAt(0) || '?').charAt(0).toUpperCase();
        profileAvatar.textContent = initial;
    }
    
    // 이름
    profileName.textContent = user.displayName || user.email?.split('@')[0] || '사용자';
    
    // 이메일
    profileEmail.textContent = user.email || '-';
    
    console.log('✅ 사용자 프로필 표시:', user.email);
}

// ========================================
// 북마크 목록 불러오기
// ========================================
async function loadBookmarks() {
    if (!currentUser) {
        console.error('❌ 로그인된 사용자 없음');
        return;
    }
    
    try {
        loadingState.style.display = 'block';
        bookmarksGrid.style.display = 'none';
        emptyState.style.display = 'none';
        
        // API에서 북마크 목록 가져오기
        const response = await fetch(`tables/bookmarks?search=${currentUser.uid}&limit=100`);
        
        if (!response.ok) {
            throw new Error('북마크 목록을 불러오는데 실패했습니다.');
        }
        
        const result = await response.json();
        const bookmarks = result.data || [];
        
        console.log(`✅ 북마크 ${bookmarks.length}개 로드`);
        
        // 현재 사용자의 북마크만 필터링
        const userBookmarks = bookmarks.filter(b => b.userId === currentUser.uid);
        
        // 북마크 개수 표시
        bookmarkCount.textContent = userBookmarks.length;
        
        // 북마크가 있으면 표시, 없으면 빈 상태 표시
        if (userBookmarks.length > 0) {
            displayBookmarks(userBookmarks);
        } else {
            showEmptyState();
        }
        
    } catch (error) {
        console.error('❌ 북마크 로드 실패:', error);
        showEmptyState();
    } finally {
        loadingState.style.display = 'none';
    }
}

// ========================================
// 북마크 카드 표시
// ========================================
function displayBookmarks(bookmarks) {
    bookmarksGrid.innerHTML = '';
    bookmarksGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    bookmarks.forEach(bookmark => {
        const card = createBookmarkCard(bookmark);
        bookmarksGrid.appendChild(card);
    });
}

// ========================================
// 북마크 카드 생성
// ========================================
function createBookmarkCard(bookmark) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    // 아이콘 HTML 생성
    let iconHTML;
    if (bookmark.toolIcon) {
        if (bookmark.toolIcon.startsWith('http')) {
            // 이미지 URL
            iconHTML = `<img src="${bookmark.toolIcon}" alt="${bookmark.toolName}">`;
        } else if (bookmark.toolIcon.startsWith('linear-gradient')) {
            // 그라데이션 + 이모지 (기본 툴)
            iconHTML = `<div style="background: ${bookmark.toolIcon}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 2rem; border-radius: 12px;">🤖</div>`;
        } else {
            // 이모지
            iconHTML = bookmark.toolIcon;
        }
    } else {
        iconHTML = '🤖';
    }
    
    // 카테고리 표시
    const categories = Array.isArray(bookmark.toolCategories) ? bookmark.toolCategories : [];
    const categoryText = categories.length > 0 ? categories[0] : 'AI 툴';
    
    // 가격 타입 배지
    const priceTypes = Array.isArray(bookmark.toolPriceTypes) ? bookmark.toolPriceTypes : [];
    const priceType = priceTypes.length > 0 ? priceTypes[0] : 'free';
    
    let priceBadgeHTML = '';
    if (priceType === 'free') {
        priceBadgeHTML = '<span class="price-badge free">무료</span>';
    } else if (priceType === 'freemium') {
        priceBadgeHTML = '<span class="price-badge freemium">Freemium</span>';
    } else if (priceType === 'paid') {
        priceBadgeHTML = '<span class="price-badge paid">유료</span>';
    }
    
    card.innerHTML = `
        <div class="tool-card-header">
            <div class="tool-icon-box" style="background: ${bookmark.toolIcon?.startsWith('linear-gradient') ? bookmark.toolIcon : 'linear-gradient(135deg, #425CFF, #5a6fff)'}">
                ${iconHTML}
            </div>
            <div class="tool-info">
                <h3 class="tool-name">${bookmark.toolName || '이름 없음'}</h3>
                <p class="tool-category">${categoryText}</p>
            </div>
        </div>
        
        <p class="tool-description">${bookmark.toolDescription || '설명이 없습니다.'}</p>
        
        <div class="tool-footer">
            <div class="tool-price">
                ${priceBadgeHTML}
            </div>
            <button class="bookmark-btn active" onclick="removeBookmark('${bookmark.id}')" title="북마크 제거">
                <i class="fas fa-bookmark"></i>
            </button>
        </div>
    `;
    
    // 카드 클릭 시 상세 페이지로 이동
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
        // 북마크 버튼 클릭은 제외
        if (e.target.closest('.bookmark-btn')) {
            return;
        }
        window.location.href = `tool-detail.html?id=${bookmark.toolId}`;
    });
    
    return card;
}

// ========================================
// 빈 상태 표시
// ========================================
function showEmptyState() {
    loadingState.style.display = 'none';
    bookmarksGrid.style.display = 'none';
    emptyState.style.display = 'block';
}

// ========================================
// 북마크 제거
// ========================================
async function removeBookmark(bookmarkId) {
    if (!confirm('이 북마크를 삭제하시겠습니까?')) {
        return;
    }
    
    try {
        const response = await fetch(`tables/bookmarks/${bookmarkId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('북마크 삭제에 실패했습니다.');
        }
        
        console.log('✅ 북마크 삭제 성공:', bookmarkId);
        
        // 북마크 목록 새로고침
        await loadBookmarks();
        
    } catch (error) {
        console.error('❌ 북마크 삭제 실패:', error);
        alert('북마크 삭제에 실패했습니다.');
    }
}

// 전역 함수로 등록 (HTML onclick에서 사용)
window.removeBookmark = removeBookmark;

// ========================================
// 초기화
// ========================================
auth.onAuthStateChanged((user) => {
    if (user) {
        displayUserProfile(user);
        loadBookmarks();
    }
});

console.log('✅ 마이페이지 초기화 완료');
