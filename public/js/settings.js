// ========================================
// AI연구소 설정 관리
// ========================================
// Firebase 및 소셜 로그인 API 키 설정
// ========================================

// ========================================
// Firebase 설정 저장
// ========================================
function saveFirebaseConfig() {
    const config = {
        apiKey: document.getElementById('firebaseApiKey').value.trim(),
        authDomain: document.getElementById('firebaseAuthDomain').value.trim(),
        projectId: document.getElementById('firebaseProjectId').value.trim(),
        storageBucket: document.getElementById('firebaseStorageBucket').value.trim(),
        messagingSenderId: document.getElementById('firebaseMessagingSenderId').value.trim(),
        appId: document.getElementById('firebaseAppId').value.trim()
    };
    
    // 유효성 검사
    if (!config.apiKey || !config.authDomain || !config.projectId) {
        showFirebaseStatus('error', '❌ 필수 항목을 모두 입력해주세요. (API Key, Auth Domain, Project ID)');
        return;
    }
    
    // API Key 형식 검증
    if (!config.apiKey.startsWith('AIza')) {
        showFirebaseStatus('error', '❌ API Key 형식이 올바르지 않습니다. "AIza"로 시작해야 합니다.');
        return;
    }
    
    // localStorage에 저장
    try {
        localStorage.setItem('firebaseConfig', JSON.stringify(config));
        showFirebaseStatus('success', '✅ Firebase 설정이 저장되었습니다! 페이지를 새로고침하면 적용됩니다.');
        
        console.log('✅ Firebase 설정 저장 완료:', {
            apiKey: config.apiKey.substring(0, 10) + '...',
            authDomain: config.authDomain,
            projectId: config.projectId
        });
        
        // 3초 후 새로고침 제안
        setTimeout(() => {
            if (confirm('설정이 저장되었습니다. 지금 페이지를 새로고침하시겠습니까?')) {
                location.reload();
            }
        }, 1000);
        
    } catch (error) {
        console.error('❌ Firebase 설정 저장 실패:', error);
        showFirebaseStatus('error', '❌ 설정 저장에 실패했습니다: ' + error.message);
    }
}

// ========================================
// Firebase 설정 불러오기
// ========================================
function loadFirebaseConfig() {
    try {
        const savedConfig = localStorage.getItem('firebaseConfig');
        
        if (!savedConfig) {
            showFirebaseStatus('info', 'ℹ️ 저장된 Firebase 설정이 없습니다.');
            return;
        }
        
        const config = JSON.parse(savedConfig);
        
        // 폼에 값 채우기
        document.getElementById('firebaseApiKey').value = config.apiKey || '';
        document.getElementById('firebaseAuthDomain').value = config.authDomain || '';
        document.getElementById('firebaseProjectId').value = config.projectId || '';
        document.getElementById('firebaseStorageBucket').value = config.storageBucket || '';
        document.getElementById('firebaseMessagingSenderId').value = config.messagingSenderId || '';
        document.getElementById('firebaseAppId').value = config.appId || '';
        
        showFirebaseStatus('success', '✅ 저장된 Firebase 설정을 불러왔습니다.');
        
        console.log('✅ Firebase 설정 불러오기 완료');
        
    } catch (error) {
        console.error('❌ Firebase 설정 불러오기 실패:', error);
        showFirebaseStatus('error', '❌ 설정을 불러오는데 실패했습니다: ' + error.message);
    }
}

// ========================================
// Firebase 연결 테스트
// ========================================
async function testFirebaseConnection() {
    const apiKey = document.getElementById('firebaseApiKey').value.trim();
    const authDomain = document.getElementById('firebaseAuthDomain').value.trim();
    const projectId = document.getElementById('firebaseProjectId').value.trim();
    
    if (!apiKey || !authDomain || !projectId) {
        showFirebaseStatus('error', '❌ API Key, Auth Domain, Project ID를 입력해주세요.');
        return;
    }
    
    showFirebaseStatus('info', '🔄 Firebase 연결을 테스트하는 중...');
    
    try {
        // Firebase SDK가 로드되었는지 확인
        if (typeof firebase === 'undefined') {
            throw new Error('Firebase SDK가 로드되지 않았습니다.');
        }
        
        // 임시 Firebase 앱 생성하여 테스트
        const testConfig = {
            apiKey: apiKey,
            authDomain: authDomain,
            projectId: projectId
        };
        
        // 기존 테스트 앱이 있으면 삭제
        const existingApp = firebase.apps.find(app => app.name === 'test-app');
        if (existingApp) {
            await existingApp.delete();
        }
        
        // 테스트 앱 생성
        const testApp = firebase.initializeApp(testConfig, 'test-app');
        
        // Auth 서비스 접근 테스트
        const testAuth = testApp.auth();
        
        showFirebaseStatus('success', '✅ Firebase 연결에 성공했습니다! 설정이 올바릅니다.');
        
        // 테스트 앱 정리
        await testApp.delete();
        
    } catch (error) {
        console.error('❌ Firebase 연결 테스트 실패:', error);
        
        let errorMsg = '❌ Firebase 연결에 실패했습니다.';
        
        if (error.code === 'auth/invalid-api-key') {
            errorMsg = '❌ API Key가 올바르지 않습니다.';
        } else if (error.code === 'auth/project-not-found') {
            errorMsg = '❌ 프로젝트를 찾을 수 없습니다. Project ID를 확인해주세요.';
        } else if (error.message) {
            errorMsg += ' ' + error.message;
        }
        
        showFirebaseStatus('error', errorMsg);
    }
}

// ========================================
// Firebase 상태 메시지 표시
// ========================================
function showFirebaseStatus(type, message) {
    const statusDiv = document.getElementById('firebaseStatus');
    statusDiv.style.display = 'block';
    
    // 타입별 스타일
    const styles = {
        success: {
            background: '#ECFDF5',
            border: '1px solid #10B981',
            color: '#065F46'
        },
        error: {
            background: '#FEF2F2',
            border: '1px solid #EF4444',
            color: '#991B1B'
        },
        info: {
            background: '#F0F9FF',
            border: '1px solid #3B82F6',
            color: '#1E40AF'
        }
    };
    
    const style = styles[type] || styles.info;
    
    statusDiv.style.background = style.background;
    statusDiv.style.border = style.border;
    statusDiv.style.color = style.color;
    statusDiv.textContent = message;
    
    // 성공 메시지는 5초 후 자동 숨김
    if (type === 'success') {
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// 소셜 로그인 API 키 저장
// ========================================
function saveSocialApiKeys() {
    const keys = {
        naverClientId: document.getElementById('naverClientId').value.trim(),
        kakaoJsKey: document.getElementById('kakaoJsKey').value.trim()
    };
    
    // localStorage에 저장
    try {
        localStorage.setItem('socialApiKeys', JSON.stringify(keys));
        showSocialApiStatus('success', '✅ API 키가 저장되었습니다! 페이지를 새로고침하면 적용됩니다.');
        
        console.log('✅ 소셜 로그인 API 키 저장 완료');
        
        // 3초 후 새로고침 제안
        setTimeout(() => {
            if (confirm('설정이 저장되었습니다. 지금 페이지를 새로고침하시겠습니까?')) {
                location.reload();
            }
        }, 1000);
        
    } catch (error) {
        console.error('❌ API 키 저장 실패:', error);
        showSocialApiStatus('error', '❌ 저장에 실패했습니다: ' + error.message);
    }
}

// ========================================
// 소셜 로그인 API 키 불러오기
// ========================================
function loadSocialApiKeys() {
    try {
        const savedKeys = localStorage.getItem('socialApiKeys');
        
        if (!savedKeys) {
            showSocialApiStatus('info', 'ℹ️ 저장된 API 키가 없습니다.');
            return;
        }
        
        const keys = JSON.parse(savedKeys);
        
        // 폼에 값 채우기
        document.getElementById('naverClientId').value = keys.naverClientId || '';
        document.getElementById('kakaoJsKey').value = keys.kakaoJsKey || '';
        
        showSocialApiStatus('success', '✅ 저장된 API 키를 불러왔습니다.');
        
        console.log('✅ 소셜 로그인 API 키 불러오기 완료');
        
    } catch (error) {
        console.error('❌ API 키 불러오기 실패:', error);
        showSocialApiStatus('error', '❌ 불러오기에 실패했습니다: ' + error.message);
    }
}

// ========================================
// 소셜 API 상태 메시지 표시
// ========================================
function showSocialApiStatus(type, message) {
    const statusDiv = document.getElementById('socialApiStatus');
    statusDiv.style.display = 'block';
    
    // 타입별 스타일
    const styles = {
        success: {
            background: '#ECFDF5',
            border: '1px solid #10B981',
            color: '#065F46'
        },
        error: {
            background: '#FEF2F2',
            border: '1px solid #EF4444',
            color: '#991B1B'
        },
        info: {
            background: '#F0F9FF',
            border: '1px solid #3B82F6',
            color: '#1E40AF'
        }
    };
    
    const style = styles[type] || styles.info;
    
    statusDiv.style.background = style.background;
    statusDiv.style.border = style.border;
    statusDiv.style.color = style.color;
    statusDiv.textContent = message;
    
    // 성공 메시지는 5초 후 자동 숨김
    if (type === 'success') {
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// 페이지 로드 시 설정 불러오기
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // 설정 탭이 있는 경우에만 실행
    const settingsSection = document.getElementById('settings');
    if (settingsSection) {
        // 저장된 설정이 있으면 자동으로 불러오기
        const savedFirebaseConfig = localStorage.getItem('firebaseConfig');
        const savedSocialKeys = localStorage.getItem('socialApiKeys');
        
        if (savedFirebaseConfig) {
            loadFirebaseConfig();
        }
        
        if (savedSocialKeys) {
            loadSocialApiKeys();
        }
    }
});

console.log('✅ 설정 관리 모듈 초기화 완료');
