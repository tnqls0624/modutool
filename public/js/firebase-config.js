// ========================================
// Firebase 설정 파일
// ========================================
// 이 파일은 Firebase 프로젝트 설정 정보를 포함합니다.
// Firebase Console에서 프로젝트를 생성한 후 설정 정보를 여기에 입력하세요.
// 
// 설정 방법:
// 1. Firebase Console (https://console.firebase.google.com/) 접속
// 2. 프로젝트 설정 > 내 앱 > SDK 설정 및 구성
// 3. 아래 firebaseConfig 객체에 복사하여 붙여넣기
// ========================================

// ========================================
// Firebase 설정 로드 (localStorage 우선)
// ========================================
function loadFirebaseConfigFromStorage() {
    // localStorage에서 설정 확인
    const savedConfig = localStorage.getItem('firebaseConfig');
    
    if (savedConfig) {
        try {
            const config = JSON.parse(savedConfig);
            console.log('✅ localStorage에서 Firebase 설정 로드');
            return config;
        } catch (error) {
            console.error('❌ localStorage Firebase 설정 파싱 실패:', error);
        }
    }
    
    // 기본 설정 (수동으로 입력한 경우)
    return {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
}

// Firebase 설정 로드
const firebaseConfig = loadFirebaseConfigFromStorage();

// Firebase 초기화
let app, auth;

try {
    // 설정 유효성 검사
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "YOUR_API_KEY") {
        console.warn('⚠️ Firebase 설정이 필요합니다. 관리자 페이지의 "설정" 탭에서 Firebase 설정을 입력하세요.');
        throw new Error('Firebase 설정이 완료되지 않았습니다.');
    }
    
    // Firebase 앱 초기화
    app = firebase.initializeApp(firebaseConfig);
    
    // Firebase Authentication 초기화
    auth = firebase.auth();
    
    // 한국어로 설정
    auth.languageCode = 'ko';
    
    console.log('✅ Firebase 초기화 성공');
    console.log('📌 Project ID:', firebaseConfig.projectId);
} catch (error) {
    console.error('❌ Firebase 초기화 실패:', error);
    console.error('💡 해결 방법: admin.html의 "설정" 탭에서 Firebase 설정을 입력하세요.');
}

// ========================================
// 인증 상태 관찰자
// ========================================
// 사용자 로그인/로그아웃 상태 변화를 실시간으로 감지합니다.

auth.onAuthStateChanged((user) => {
    if (user) {
        // 사용자가 로그인한 상태
        console.log('👤 로그인 사용자:', user.email || user.displayName);
        
        // 로그인 정보를 localStorage에 저장 (선택사항)
        localStorage.setItem('user', JSON.stringify({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        }));
        
        // 로그인 상태 UI 업데이트 (각 페이지에서 구현)
        if (typeof updateAuthUI === 'function') {
            updateAuthUI(user);
        }
        
    } else {
        // 사용자가 로그아웃한 상태
        console.log('🚪 로그아웃 상태');
        
        // localStorage에서 사용자 정보 제거
        localStorage.removeItem('user');
        
        // 로그아웃 상태 UI 업데이트 (각 페이지에서 구현)
        if (typeof updateAuthUI === 'function') {
            updateAuthUI(null);
        }
    }
});

// ========================================
// 유틸리티 함수
// ========================================

/**
 * 현재 로그인된 사용자 정보 가져오기
 * @returns {Object|null} 사용자 정보 또는 null
 */
function getCurrentUser() {
    return auth.currentUser;
}

/**
 * 사용자가 로그인했는지 확인
 * @returns {boolean} 로그인 여부
 */
function isUserLoggedIn() {
    return auth.currentUser !== null;
}

/**
 * 로그아웃 처리
 * @returns {Promise} 로그아웃 결과
 */
async function signOutUser() {
    try {
        await auth.signOut();
        console.log('✅ 로그아웃 성공');
        
        // 로그인 페이지로 리다이렉트 (선택사항)
        // window.location.href = 'auth.html';
        
        return { success: true };
    } catch (error) {
        console.error('❌ 로그아웃 실패:', error);
        return { success: false, error: error.message };
    }
}

/**
 * 페이지 보호 (로그인 필요한 페이지)
 * 로그인하지 않은 사용자는 auth.html로 리다이렉트
 */
function requireAuth() {
    auth.onAuthStateChanged((user) => {
        if (!user) {
            // 로그인되지 않은 경우 로그인 페이지로 이동
            const currentPage = window.location.pathname;
            window.location.href = `auth.html?redirect=${encodeURIComponent(currentPage)}`;
        }
    });
}

// ========================================
// Export (다른 파일에서 사용 가능)
// ========================================
window.firebaseAuth = {
    app,
    auth,
    getCurrentUser,
    isUserLoggedIn,
    signOutUser,
    requireAuth
};
