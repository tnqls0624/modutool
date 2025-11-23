// ========================================
// 북마크 관리 유틸리티
// ========================================
// 모든 페이지에서 사용할 수 있는 북마크 기능
// ========================================

// ========================================
// 북마크 추가
// ========================================
async function addBookmark(toolData) {
    // 로그인 확인
    const user = window.firebaseAuth.getCurrentUser();
    if (!user) {
        alert('로그인이 필요합니다.');
        window.location.href = 'auth.html?redirect=' + encodeURIComponent(window.location.pathname);
        return { success: false, error: '로그인 필요' };
    }
    
    try {
        // 북마크 데이터 준비
        const bookmarkData = {
            userId: user.uid,
            toolId: toolData.id,
            toolName: toolData.name,
            toolIcon: toolData.icon || '🤖',
            toolDescription: toolData.description || '',
            toolCategories: toolData.categories || [],
            toolPriceTypes: toolData.priceTypes || [],
            createdAt: Date.now()
        };
        
        console.log('📌 북마크 추가 시도:', bookmarkData);
        
        // API로 북마크 추가
        const response = await fetch('tables/bookmarks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookmarkData)
        });
        
        if (!response.ok) {
            throw new Error('북마크 추가에 실패했습니다.');
        }
        
        const result = await response.json();
        console.log('✅ 북마크 추가 성공:', result);
        
        return { success: true, data: result };
        
    } catch (error) {
        console.error('❌ 북마크 추가 실패:', error);
        return { success: false, error: error.message };
    }
}

// ========================================
// 북마크 제거
// ========================================
async function removeBookmarkByToolId(toolId) {
    // 로그인 확인
    const user = window.firebaseAuth.getCurrentUser();
    if (!user) {
        return { success: false, error: '로그인 필요' };
    }
    
    try {
        // 먼저 해당 툴의 북마크 ID 찾기
        const bookmark = await getBookmarkByToolId(toolId);
        
        if (!bookmark) {
            return { success: false, error: '북마크를 찾을 수 없습니다.' };
        }
        
        // 북마크 삭제
        const response = await fetch(`tables/bookmarks/${bookmark.id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('북마크 삭제에 실패했습니다.');
        }
        
        console.log('✅ 북마크 삭제 성공:', toolId);
        
        return { success: true };
        
    } catch (error) {
        console.error('❌ 북마크 삭제 실패:', error);
        return { success: false, error: error.message };
    }
}

// ========================================
// 북마크 토글 (추가/제거)
// ========================================
async function toggleBookmark(toolData) {
    const isBookmarked = await isToolBookmarked(toolData.id);
    
    if (isBookmarked) {
        const result = await removeBookmarkByToolId(toolData.id);
        if (result.success) {
            return { success: true, action: 'removed' };
        }
        return result;
    } else {
        const result = await addBookmark(toolData);
        if (result.success) {
            return { success: true, action: 'added' };
        }
        return result;
    }
}

// ========================================
// 툴이 북마크되어 있는지 확인
// ========================================
async function isToolBookmarked(toolId) {
    const bookmark = await getBookmarkByToolId(toolId);
    return bookmark !== null;
}

// ========================================
// 툴 ID로 북마크 찾기
// ========================================
async function getBookmarkByToolId(toolId) {
    // 로그인 확인
    const user = window.firebaseAuth.getCurrentUser();
    if (!user) {
        return null;
    }
    
    try {
        // API에서 북마크 검색
        const response = await fetch(`tables/bookmarks?search=${toolId}&limit=100`);
        
        if (!response.ok) {
            return null;
        }
        
        const result = await response.json();
        const bookmarks = result.data || [];
        
        // 현재 사용자의 북마크 중 해당 툴 찾기
        const bookmark = bookmarks.find(b => 
            b.userId === user.uid && b.toolId === toolId
        );
        
        return bookmark || null;
        
    } catch (error) {
        console.error('❌ 북마크 검색 실패:', error);
        return null;
    }
}

// ========================================
// 사용자의 모든 북마크 가져오기
// ========================================
async function getUserBookmarks() {
    // 로그인 확인
    const user = window.firebaseAuth.getCurrentUser();
    if (!user) {
        return [];
    }
    
    try {
        const response = await fetch(`tables/bookmarks?search=${user.uid}&limit=100`);
        
        if (!response.ok) {
            return [];
        }
        
        const result = await response.json();
        const bookmarks = result.data || [];
        
        // 현재 사용자의 북마크만 필터링
        return bookmarks.filter(b => b.userId === user.uid);
        
    } catch (error) {
        console.error('❌ 북마크 목록 로드 실패:', error);
        return [];
    }
}

// ========================================
// 북마크 버튼 UI 업데이트
// ========================================
async function updateBookmarkButton(toolId, buttonElement) {
    if (!buttonElement) return;
    
    const isBookmarked = await isToolBookmarked(toolId);
    
    if (isBookmarked) {
        buttonElement.classList.add('active');
        buttonElement.classList.remove('inactive');
        buttonElement.innerHTML = '<i class="fas fa-bookmark"></i>';
        buttonElement.title = '북마크 제거';
    } else {
        buttonElement.classList.remove('active');
        buttonElement.classList.add('inactive');
        buttonElement.innerHTML = '<i class="far fa-bookmark"></i>';
        buttonElement.title = '북마크 추가';
    }
}

// ========================================
// Export (전역 사용)
// ========================================
window.BookmarkManager = {
    addBookmark,
    removeBookmarkByToolId,
    toggleBookmark,
    isToolBookmarked,
    getBookmarkByToolId,
    getUserBookmarks,
    updateBookmarkButton
};

console.log('✅ 북마크 관리자 초기화 완료');
