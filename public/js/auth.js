// ========================================
// AI연구소 인증 로직
// ========================================
// 로그인/회원가입 기능을 처리합니다.
// - 이메일/비밀번호 로그인
// - Google 소셜 로그인
// - 네이버 소셜 로그인 (Custom OAuth)
// - 카카오 소셜 로그인 (Custom OAuth)
// ========================================

// ========================================
// 설정 값
// ========================================

// ========================================
// 소셜 로그인 API 키 로드 (localStorage 우선)
// ========================================
function loadSocialApiKeys() {
    const savedKeys = localStorage.getItem('socialApiKeys');
    
    if (savedKeys) {
        try {
            const keys = JSON.parse(savedKeys);
            console.log('✅ localStorage에서 소셜 API 키 로드');
            return keys;
        } catch (error) {
            console.error('❌ 소셜 API 키 파싱 실패:', error);
        }
    }
    
    // 기본값 (수동으로 입력한 경우)
    return {
        kakaoJsKey: 'YOUR_KAKAO_JS_KEY',
        naverClientId: 'YOUR_NAVER_CLIENT_ID'
    };
}

const socialKeys = loadSocialApiKeys();

// 카카오 JavaScript 키
const KAKAO_JS_KEY = socialKeys.kakaoJsKey || 'YOUR_KAKAO_JS_KEY';

// 네이버 Client ID
const NAVER_CLIENT_ID = socialKeys.naverClientId || 'YOUR_NAVER_CLIENT_ID';

// 네이버 로그인 Callback URL
const NAVER_CALLBACK_URL = window.location.origin + '/auth.html';

// 카카오 SDK 초기화
if (KAKAO_JS_KEY && KAKAO_JS_KEY !== 'YOUR_KAKAO_JS_KEY') {
    try {
        Kakao.init(KAKAO_JS_KEY);
        console.log('✅ Kakao SDK 초기화 성공');
    } catch (error) {
        console.error('❌ Kakao SDK 초기화 실패:', error);
    }
} else {
    console.warn('⚠️ 카카오 로그인을 사용하려면 관리자 페이지의 "설정" 탭에서 카카오 JavaScript 키를 입력하세요.');
}

// ========================================
// DOM 요소
// ========================================

const loginTab = document.querySelector('[data-tab="login"]');
const signupTab = document.querySelector('[data-tab="signup"]');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// ========================================
// 탭 전환
// ========================================

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    clearMessages();
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    clearMessages();
});

// ========================================
// 비밀번호 표시/숨김 토글
// ========================================

function setupPasswordToggles() {
    const toggles = [
        { toggle: 'toggleLoginPassword', input: 'loginPassword' },
        { toggle: 'toggleSignupPassword', input: 'signupPassword' },
        { toggle: 'toggleSignupPasswordConfirm', input: 'signupPasswordConfirm' }
    ];
    
    toggles.forEach(({ toggle, input }) => {
        const toggleBtn = document.getElementById(toggle);
        const inputField = document.getElementById(input);
        
        if (toggleBtn && inputField) {
            toggleBtn.addEventListener('click', () => {
                const type = inputField.type === 'password' ? 'text' : 'password';
                inputField.type = type;
                toggleBtn.classList.toggle('fa-eye');
                toggleBtn.classList.toggle('fa-eye-slash');
            });
        }
    });
}

setupPasswordToggles();

// ========================================
// 메시지 표시 유틸리티
// ========================================

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    successMessage.classList.remove('show');
    
    // 5초 후 자동 숨김
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.classList.add('show');
    errorMessage.classList.remove('show');
    
    // 3초 후 자동 숨김
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

function clearMessages() {
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');
}

// ========================================
// 로그인 후 리다이렉트
// ========================================

function redirectAfterLogin() {
    // URL에서 redirect 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    
    if (redirect) {
        window.location.href = redirect;
    } else {
        window.location.href = 'index.html';
    }
}

// ========================================
// 이메일/비밀번호 로그인
// ========================================

document.getElementById('loginEmailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessages();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // 버튼 비활성화
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '로그인 중...';
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('✅ 로그인 성공:', userCredential.user.email);
        
        showSuccess('로그인 성공! 페이지를 이동합니다...');
        
        // 1초 후 리다이렉트
        setTimeout(() => {
            redirectAfterLogin();
        }, 1000);
        
    } catch (error) {
        console.error('❌ 로그인 실패:', error);
        
        let errorMsg = '로그인에 실패했습니다.';
        
        switch (error.code) {
            case 'auth/user-not-found':
                errorMsg = '등록되지 않은 이메일입니다.';
                break;
            case 'auth/wrong-password':
                errorMsg = '비밀번호가 올바르지 않습니다.';
                break;
            case 'auth/invalid-email':
                errorMsg = '이메일 형식이 올바르지 않습니다.';
                break;
            case 'auth/user-disabled':
                errorMsg = '비활성화된 계정입니다.';
                break;
            case 'auth/too-many-requests':
                errorMsg = '너무 많은 로그인 시도입니다. 잠시 후 다시 시도해주세요.';
                break;
        }
        
        showError(errorMsg);
        
        // 버튼 재활성화
        submitBtn.disabled = false;
        submitBtn.textContent = '로그인';
    }
});

// ========================================
// 이메일/비밀번호 회원가입
// ========================================

document.getElementById('signupEmailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessages();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
    
    // 비밀번호 일치 확인
    if (password !== passwordConfirm) {
        showError('비밀번호가 일치하지 않습니다.');
        return;
    }
    
    // 비밀번호 길이 확인
    if (password.length < 8) {
        showError('비밀번호는 8자 이상이어야 합니다.');
        return;
    }
    
    // 버튼 비활성화
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '회원가입 중...';
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        console.log('✅ 회원가입 성공:', userCredential.user.email);
        
        // 사용자 프로필 업데이트 (이름)
        await userCredential.user.updateProfile({
            displayName: name
        });
        
        showSuccess('회원가입 성공! 페이지를 이동합니다...');
        
        // 1초 후 리다이렉트
        setTimeout(() => {
            redirectAfterLogin();
        }, 1000);
        
    } catch (error) {
        console.error('❌ 회원가입 실패:', error);
        
        let errorMsg = '회원가입에 실패했습니다.';
        
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMsg = '이미 사용 중인 이메일입니다.';
                break;
            case 'auth/invalid-email':
                errorMsg = '이메일 형식이 올바르지 않습니다.';
                break;
            case 'auth/weak-password':
                errorMsg = '비밀번호가 너무 약합니다. 더 강력한 비밀번호를 사용해주세요.';
                break;
        }
        
        showError(errorMsg);
        
        // 버튼 재활성화
        submitBtn.disabled = false;
        submitBtn.textContent = '회원가입';
    }
});

// ========================================
// Google 소셜 로그인
// ========================================

async function signInWithGoogle() {
    clearMessages();
    
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
    });
    
    try {
        const result = await auth.signInWithPopup(provider);
        console.log('✅ Google 로그인 성공:', result.user.email);
        
        showSuccess('Google 로그인 성공! 페이지를 이동합니다...');
        
        // 1초 후 리다이렉트
        setTimeout(() => {
            redirectAfterLogin();
        }, 1000);
        
    } catch (error) {
        console.error('❌ Google 로그인 실패:', error);
        console.error('에러 코드:', error.code);
        console.error('에러 메시지:', error.message);
        
        let errorMsg = 'Google 로그인에 실패했습니다.';
        
        switch (error.code) {
            case 'auth/popup-closed-by-user':
                errorMsg = '로그인 팝업이 닫혔습니다.';
                break;
            case 'auth/popup-blocked':
                errorMsg = '팝업이 차단되었습니다. 브라우저 설정에서 팝업을 허용해주세요.';
                break;
            case 'auth/cancelled-popup-request':
                errorMsg = '로그인 요청이 취소되었습니다.';
                break;
            case 'auth/invalid-api-key':
                errorMsg = 'Firebase API 키가 올바르지 않습니다. Firebase 설정을 확인해주세요.';
                break;
            case 'auth/operation-not-allowed':
                errorMsg = 'Google 로그인이 활성화되지 않았습니다. Firebase Console에서 활성화해주세요.';
                break;
            case 'auth/unauthorized-domain':
                errorMsg = '현재 도메인이 승인되지 않았습니다. Firebase Console에서 도메인을 승인해주세요.';
                break;
            case 'auth/network-request-failed':
                errorMsg = '네트워크 연결을 확인해주세요.';
                break;
            default:
                errorMsg = `Google 로그인에 실패했습니다. (${error.code || '알 수 없는 오류'})`;
        }
        
        showError(errorMsg);
    }
}

// Google 로그인 버튼
document.getElementById('googleLoginBtn').addEventListener('click', signInWithGoogle);
document.getElementById('googleSignupBtn').addEventListener('click', signInWithGoogle);

// ========================================
// 카카오 소셜 로그인
// ========================================

async function signInWithKakao() {
    clearMessages();
    
    if (KAKAO_JS_KEY === 'YOUR_KAKAO_JS_KEY') {
        showError('카카오 로그인이 설정되지 않았습니다. KAKAO_JS_KEY를 입력해주세요.');
        return;
    }
    
    try {
        // 카카오 로그인
        Kakao.Auth.login({
            success: async (authObj) => {
                console.log('✅ Kakao 인증 성공:', authObj);
                
                // 카카오 사용자 정보 가져오기
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: async (response) => {
                        console.log('✅ Kakao 사용자 정보:', response);
                        
                        const kakaoEmail = response.kakao_account?.email;
                        const kakaoName = response.kakao_account?.profile?.nickname;
                        const kakaoPhoto = response.kakao_account?.profile?.profile_image_url;
                        
                        // Firebase Custom Token 생성이 필요합니다
                        // 현재는 간단히 Anonymous Auth + 카카오 정보 저장
                        showSuccess('카카오 로그인 성공! (Custom Auth 서버 설정 필요)');
                        
                        // TODO: 서버리스 함수로 Custom Token 생성 후 Firebase 로그인
                        // 현재는 데모 목적으로 정보만 표시
                        console.log('카카오 이메일:', kakaoEmail);
                        console.log('카카오 닉네임:', kakaoName);
                    },
                    fail: (error) => {
                        console.error('❌ Kakao 사용자 정보 가져오기 실패:', error);
                        showError('카카오 사용자 정보를 가져오지 못했습니다.');
                    }
                });
            },
            fail: (error) => {
                console.error('❌ Kakao 로그인 실패:', error);
                showError('카카오 로그인에 실패했습니다.');
            }
        });
        
    } catch (error) {
        console.error('❌ Kakao 로그인 오류:', error);
        showError('카카오 로그인 중 오류가 발생했습니다.');
    }
}

// 카카오 로그인 버튼
document.getElementById('kakaoLoginBtn').addEventListener('click', signInWithKakao);
document.getElementById('kakaoSignupBtn').addEventListener('click', signInWithKakao);

// ========================================
// 네이버 소셜 로그인
// ========================================

function signInWithNaver() {
    clearMessages();
    
    if (NAVER_CLIENT_ID === 'YOUR_NAVER_CLIENT_ID') {
        showError('네이버 로그인이 설정되지 않았습니다. NAVER_CLIENT_ID를 입력해주세요.');
        return;
    }
    
    // 네이버 로그인 URL 생성
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem('naver_state', state);
    
    const naverAuthUrl = 
        `https://nid.naver.com/oauth2.0/authorize?` +
        `response_type=token&` +
        `client_id=${NAVER_CLIENT_ID}&` +
        `redirect_uri=${encodeURIComponent(NAVER_CALLBACK_URL)}&` +
        `state=${state}`;
    
    // 네이버 로그인 페이지로 이동
    window.location.href = naverAuthUrl;
}

// 네이버 로그인 버튼
document.getElementById('naverLoginBtn').addEventListener('click', signInWithNaver);
document.getElementById('naverSignupBtn').addEventListener('click', signInWithNaver);

// 네이버 로그인 콜백 처리
function handleNaverCallback() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    
    const accessToken = params.get('access_token');
    const state = params.get('state');
    const savedState = localStorage.getItem('naver_state');
    
    if (accessToken && state === savedState) {
        console.log('✅ 네이버 Access Token:', accessToken);
        
        // 네이버 사용자 정보 가져오기
        fetch('https://openapi.naver.com/v1/nid/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('✅ 네이버 사용자 정보:', data);
            
            const naverEmail = data.response?.email;
            const naverName = data.response?.name;
            const naverPhoto = data.response?.profile_image;
            
            showSuccess('네이버 로그인 성공! (Custom Auth 서버 설정 필요)');
            
            // TODO: 서버리스 함수로 Custom Token 생성 후 Firebase 로그인
            // 현재는 데모 목적으로 정보만 표시
            console.log('네이버 이메일:', naverEmail);
            console.log('네이버 이름:', naverName);
            
            // State 제거
            localStorage.removeItem('naver_state');
            
            // URL 해시 제거
            window.history.replaceState(null, null, window.location.pathname);
        })
        .catch(error => {
            console.error('❌ 네이버 사용자 정보 가져오기 실패:', error);
            showError('네이버 사용자 정보를 가져오지 못했습니다.');
        });
    }
}

// 페이지 로드 시 네이버 콜백 확인
if (window.location.hash.includes('access_token')) {
    handleNaverCallback();
}

// ========================================
// 초기화
// ========================================

console.log('🔐 인증 페이지 로드 완료');

// 이미 로그인된 사용자는 홈으로 리다이렉트
auth.onAuthStateChanged((user) => {
    if (user && !window.location.hash.includes('access_token')) {
        console.log('👤 이미 로그인된 사용자:', user.email);
        redirectAfterLogin();
    }
});
