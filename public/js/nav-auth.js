// ========================================
// 네비게이션 인증 상태 관리
// ========================================
// 모든 페이지의 네비게이션에 로그인 상태를 표시합니다.
// ========================================

/**
 * 네비게이션 UI를 사용자 로그인 상태에 따라 업데이트
 * @param {Object} user - Firebase 사용자 객체 (null이면 로그아웃 상태)
 */
function updateAuthUI(user) {
    const navCta = document.querySelector('.nav-cta');
    
    if (!navCta) {
        console.warn('⚠️ .nav-cta 요소를 찾을 수 없습니다.');
        return;
    }
    
    if (user) {
        // 로그인된 상태
        const displayName = user.displayName || user.email?.split('@')[0] || '사용자';
        const photoURL = user.photoURL;
        
        navCta.innerHTML = `
            <div class="user-menu">
                ${photoURL ? 
                    `<img src="${photoURL}" alt="${displayName}" class="user-avatar">` :
                    `<div class="user-avatar">${displayName.charAt(0).toUpperCase()}</div>`
                }
                <span class="user-name">${displayName}</span>
                <div class="user-dropdown">
                    <a href="mypage.html" class="dropdown-item">
                        <i class="fas fa-user"></i> 마이페이지
                    </a>
                    <a href="admin.html" class="dropdown-item">
                        <i class="fas fa-tools"></i> 관리자
                    </a>
                    <a href="#" class="dropdown-item" id="logoutBtn">
                        <i class="fas fa-sign-out-alt"></i> 로그아웃
                    </a>
                </div>
            </div>
        `;
        
        // 로그아웃 버튼 이벤트
        document.getElementById('logoutBtn')?.addEventListener('click', async (e) => {
            e.preventDefault();
            
            if (confirm('로그아웃하시겠습니까?')) {
                try {
                    await window.firebaseAuth.signOutUser();
                    alert('로그아웃되었습니다.');
                    window.location.href = 'index.html';
                } catch (error) {
                    console.error('로그아웃 실패:', error);
                    alert('로그아웃에 실패했습니다.');
                }
            }
        });
        
    } else {
        // 로그아웃된 상태
        navCta.innerHTML = `
            <a href="auth.html" class="btn btn-secondary btn-sm" style="margin-right: 8px;">
                <i class="fas fa-sign-in-alt"></i> 로그인
            </a>
            <a href="auth.html?tab=signup" class="btn btn-primary btn-sm">회원가입</a>
        `;
    }
}

// 페이지 로드 시 인증 상태 확인
if (typeof firebase !== 'undefined' && window.firebaseAuth) {
    window.firebaseAuth.auth.onAuthStateChanged((user) => {
        updateAuthUI(user);
    });
}

// CSS 스타일 추가
const style = document.createElement('style');
style.textContent = `
    /* 사용자 메뉴 스타일 */
    .user-menu {
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    
    .user-menu:hover {
        background: rgba(66, 92, 255, 0.1);
    }
    
    .user-menu:hover .user-dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
        background: linear-gradient(135deg, #425CFF, #5a6fff);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .user-name {
        font-weight: 600;
        color: #0C0F14;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .user-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 12px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        min-width: 200px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        z-index: 1000;
        overflow: hidden;
    }
    
    .dropdown-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 20px;
        color: #0C0F14;
        text-decoration: none;
        transition: all 0.2s ease;
        border-bottom: 1px solid #F0F2F5;
    }
    
    .dropdown-item:last-child {
        border-bottom: none;
    }
    
    .dropdown-item:hover {
        background: #F8F9FF;
        color: #425CFF;
    }
    
    .dropdown-item i {
        width: 20px;
        text-align: center;
        color: #5F6369;
    }
    
    .dropdown-item:hover i {
        color: #425CFF;
    }
    
    @media (max-width: 768px) {
        .user-name {
            display: none;
        }
        
        .user-menu {
            padding: 8px;
        }
    }
`;
document.head.appendChild(style);

console.log('🔐 네비게이션 인증 UI 초기화 완료');
