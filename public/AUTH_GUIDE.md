# 🔐 AI연구소 인증 시스템 가이드

이 문서는 AI연구소의 회원가입/로그인 시스템을 설명합니다.

## 📋 목차

1. [시스템 개요](#시스템-개요)
2. [지원하는 로그인 방식](#지원하는-로그인-방식)
3. [Firebase 설정](#firebase-설정)
4. [파일 구조](#파일-구조)
5. [사용자 흐름](#사용자-흐름)
6. [개발자 가이드](#개발자-가이드)
7. [보안 고려사항](#보안-고려사항)
8. [문제 해결](#문제-해결)

---

## 시스템 개요

### 기술 스택
- **Firebase Authentication**: 사용자 인증 및 세션 관리
- **Kakao SDK**: 카카오 소셜 로그인
- **Naver OAuth 2.0**: 네이버 소셜 로그인
- **정적 웹사이트**: 서버리스 아키텍처

### 주요 기능
✅ 이메일/비밀번호 회원가입 및 로그인  
✅ Google 소셜 로그인 (Firebase 기본 지원)  
✅ 네이버 소셜 로그인 (Custom OAuth)  
✅ 카카오 소셜 로그인 (Custom OAuth)  
✅ 실시간 로그인 상태 감지  
✅ 사용자 프로필 표시 (이름, 프로필 사진)  
✅ 로그아웃 기능  
✅ 보호된 페이지 접근 제어  

---

## 지원하는 로그인 방식

### 1. 이메일/비밀번호 로그인

**회원가입 필드**:
- 이름 (displayName)
- 이메일 (email)
- 비밀번호 (8자 이상)
- 비밀번호 확인

**로그인 필드**:
- 이메일
- 비밀번호

**특징**:
- Firebase가 비밀번호 암호화 처리
- 이메일 중복 체크 자동
- 비밀번호 강도 검증

---

### 2. Google 소셜 로그인

**제공 정보**:
- 이름 (displayName)
- 이메일 (email)
- 프로필 사진 (photoURL)

**특징**:
- Firebase 기본 제공
- 팝업 방식 로그인
- 계정 선택 가능

**설정 방법**:
1. Firebase Console > Authentication > Sign-in method
2. Google 제공업체 활성화
3. 프로젝트 지원 이메일 선택

---

### 3. 네이버 소셜 로그인

**제공 정보**:
- 이름 (name)
- 이메일 (email)
- 프로필 사진 (profile_image)

**특징**:
- Custom OAuth 2.0 구현
- Implicit Grant 방식 (Client Secret 불필요)
- 네이버 로그인 페이지로 리다이렉트

**설정 방법**:
1. [네이버 개발자 센터](https://developers.naver.com/) 접속
2. 애플리케이션 등록
3. 네이버 로그인 API 선택
4. Client ID 발급
5. Callback URL 등록

**Callback URL**:
```
http://localhost:8000/auth.html
https://your-domain.com/auth.html
```

---

### 4. 카카오 소셜 로그인

**제공 정보**:
- 닉네임 (nickname)
- 이메일 (email)
- 프로필 사진 (profile_image_url)

**특징**:
- Kakao JavaScript SDK 사용
- 카카오 로그인 팝업
- 동의항목 커스터마이징 가능

**설정 방법**:
1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 애플리케이션 추가
3. JavaScript 키 발급
4. 플랫폼 등록 (Web)
5. Redirect URI 등록
6. 동의항목 설정 (이메일, 닉네임 필수)

**Redirect URI**:
```
http://localhost:8000/auth.html
https://your-domain.com/auth.html
```

---

## Firebase 설정

### 1단계: Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 (예: `ai-research-lab`)
4. 웹 앱 추가 (`</>` 아이콘)

### 2단계: Firebase SDK 설정

Firebase Console에서 제공하는 설정 정보를 `js/firebase-config.js`에 입력:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 3단계: Authentication 활성화

1. Firebase Console > Authentication
2. "시작하기" 클릭
3. Sign-in method 탭에서 **Google** 활성화

### 4단계: 도메인 승인

1. Firebase Console > Authentication > Settings
2. "승인된 도메인"에 추가:
   - `localhost`
   - `your-domain.com` (배포 도메인)

---

## 파일 구조

```
ai-research-lab/
├── auth.html                      # 로그인/회원가입 페이지
├── js/
│   ├── firebase-config.js         # Firebase 초기화
│   ├── auth.js                    # 로그인 로직
│   └── nav-auth.js                # 네비게이션 인증 UI
├── FIREBASE_SETUP_GUIDE.md        # Firebase 설정 가이드
└── AUTH_GUIDE.md                  # 이 문서
```

### 파일 설명

#### `auth.html`
- 로그인/회원가입 UI
- 탭 전환 (로그인 ↔ 회원가입)
- 4가지 로그인 방식 버튼
- 에러/성공 메시지 표시

#### `js/firebase-config.js`
- Firebase 앱 초기화
- Authentication 설정
- 인증 상태 관찰자 (`onAuthStateChanged`)
- 유틸리티 함수:
  - `getCurrentUser()`: 현재 사용자 정보
  - `isUserLoggedIn()`: 로그인 여부 확인
  - `signOutUser()`: 로그아웃
  - `requireAuth()`: 페이지 보호

#### `js/auth.js`
- 이메일/비밀번호 로그인/회원가입
- Google 소셜 로그인
- 네이버 소셜 로그인 (OAuth 2.0)
- 카카오 소셜 로그인 (SDK)
- 비밀번호 표시/숨김 토글
- 에러 처리 및 메시지 표시

#### `js/nav-auth.js`
- 네비게이션 바 로그인 상태 표시
- 사용자 프로필 (이름, 사진) 드롭다운
- 로그아웃 버튼
- 모든 페이지에서 자동 적용

---

## 사용자 흐름

### 회원가입 흐름

```
1. auth.html 접속
2. "회원가입" 탭 클릭
3. 방법 선택:
   
   [이메일/비밀번호]
   - 이름, 이메일, 비밀번호 입력
   - "회원가입" 버튼 클릭
   - Firebase가 계정 생성
   
   [Google/네이버/카카오]
   - 소셜 로그인 버튼 클릭
   - 해당 플랫폼에서 인증
   - 자동으로 계정 생성 또는 로그인

4. 성공 시 홈페이지로 리다이렉트
```

### 로그인 흐름

```
1. auth.html 접속
2. "로그인" 탭 (기본)
3. 방법 선택:
   
   [이메일/비밀번호]
   - 이메일, 비밀번호 입력
   - "로그인" 버튼 클릭
   
   [Google/네이버/카카오]
   - 소셜 로그인 버튼 클릭
   - 해당 플랫폼에서 인증

4. 성공 시 리다이렉트:
   - ?redirect 파라미터 있으면 해당 페이지로
   - 없으면 index.html로
```

### 로그아웃 흐름

```
1. 네비게이션 바 사용자 프로필 클릭
2. "로그아웃" 메뉴 클릭
3. 확인 팝업 표시
4. "확인" 클릭
5. Firebase 세션 종료
6. index.html로 리다이렉트
```

---

## 개발자 가이드

### 로그인 상태 확인

```javascript
// 현재 사용자 정보 가져오기
const user = window.firebaseAuth.getCurrentUser();

if (user) {
    console.log('로그인됨:', user.email);
    console.log('이름:', user.displayName);
    console.log('프로필 사진:', user.photoURL);
} else {
    console.log('로그아웃 상태');
}
```

### 페이지 보호 (로그인 필수)

특정 페이지를 로그인한 사용자만 접근하게 하려면:

```javascript
// 페이지 상단에 추가
window.firebaseAuth.requireAuth();
```

로그인하지 않은 사용자는 `auth.html`로 자동 리다이렉트됩니다.

### 로그인 상태에 따른 UI 변경

```javascript
function updateAuthUI(user) {
    const loginBtn = document.getElementById('loginBtn');
    const userProfile = document.getElementById('userProfile');
    
    if (user) {
        // 로그인된 상태
        loginBtn.style.display = 'none';
        userProfile.style.display = 'block';
        userProfile.textContent = user.displayName;
    } else {
        // 로그아웃된 상태
        loginBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }
}

// Firebase 인증 상태 변화 감지
window.firebaseAuth.auth.onAuthStateChanged(updateAuthUI);
```

### 프로그래밍 방식으로 로그아웃

```javascript
// 로그아웃 버튼 클릭 이벤트
document.getElementById('logoutBtn').addEventListener('click', async () => {
    const result = await window.firebaseAuth.signOutUser();
    
    if (result.success) {
        alert('로그아웃되었습니다.');
        window.location.href = 'index.html';
    } else {
        alert('로그아웃 실패: ' + result.error);
    }
});
```

---

## 보안 고려사항

### ✅ 구현된 보안 기능

1. **Firebase Authentication**
   - 비밀번호 암호화 (bcrypt)
   - 세션 토큰 자동 관리
   - CSRF 보호

2. **HTTPS 필수**
   - 배포 시 반드시 HTTPS 사용
   - Firebase Hosting이 자동으로 HTTPS 제공

3. **도메인 화이트리스트**
   - Firebase: 승인된 도메인만 로그인 허용
   - 카카오/네이버: 등록된 도메인만 Callback 허용

### ⚠️ 주의사항

#### 1. API 키 노출
- **Firebase API Key**는 클라이언트에 노출되어도 안전합니다.
- Firebase는 보안 규칙(Security Rules)으로 실제 접근을 제어합니다.

#### 2. 네이버 Client Secret
- **절대로 클라이언트 코드에 포함하지 마세요!**
- 현재 구현은 **Implicit Grant** 방식 사용 (Secret 불필요)
- Refresh Token이 필요하면 서버리스 함수 사용

#### 3. 카카오/네이버 Custom Auth
- 현재 구현은 **데모 목적**입니다.
- 실제 서비스에서는 다음이 필요합니다:
  1. **서버리스 함수** (Firebase Functions, Netlify Functions)
  2. 소셜 로그인 정보로 **Firebase Custom Token** 생성
  3. Custom Token으로 Firebase 로그인

### 🚀 프로덕션 권장 구조

```
[클라이언트]
    ↓ 카카오/네이버 인증
[Firebase Functions / Netlify Functions]
    ↓ 사용자 정보 검증
    ↓ Firebase Admin SDK로 Custom Token 생성
[Firebase Auth]
    ↓ Custom Token으로 로그인
[클라이언트]
    ✅ 로그인 완료
```

---

## 문제 해결

### Google 로그인 오류

**문제**: "unauthorized_domain" 오류
**해결**:
1. Firebase Console > Authentication > Settings
2. "승인된 도메인"에 현재 도메인 추가
3. 팝업 차단 해제 확인

---

### 카카오 로그인 오류

**문제**: "invalid_request" 또는 Redirect URI 불일치
**해결**:
1. Kakao Developers > 플랫폼 > Web 플랫폼 등록
2. Redirect URI가 **정확히 일치**하는지 확인
3. JavaScript 키가 맞는지 확인

**문제**: "insufficient_scope" (동의항목 오류)
**해결**:
1. Kakao Developers > 동의항목
2. 이메일, 닉네임을 **필수** 동의로 변경

---

### 네이버 로그인 오류

**문제**: "invalid_client" 오류
**해결**:
1. 네이버 Developers > API 설정
2. Client ID가 맞는지 확인
3. 서비스 URL과 Callback URL 등록 확인

**문제**: 사용자 정보를 가져오지 못함
**해결**:
1. 네이버 Developers > 제공 정보
2. 이메일, 이름을 **필수 제공**으로 선택

---

### Firebase 초기화 실패

**문제**: "Firebase: No Firebase App '[DEFAULT]'" 오류
**해결**:
1. `js/firebase-config.js`에서 설정 값 확인
2. Firebase SDK 스크립트 로드 순서 확인:
   ```html
   <script src="firebase-app-compat.js"></script>
   <script src="firebase-auth-compat.js"></script>
   <script src="js/firebase-config.js"></script>
   ```

---

### 로그인 후 리다이렉트 안 됨

**문제**: 로그인 성공했지만 페이지 이동이 안 됨
**해결**:
1. 브라우저 콘솔에서 에러 확인
2. `auth.js`의 `redirectAfterLogin()` 함수 확인
3. `onAuthStateChanged` 이벤트가 중복 호출되는지 확인

---

## 📚 참고 자료

- [Firebase Authentication 문서](https://firebase.google.com/docs/auth)
- [Kakao 로그인 API 문서](https://developers.kakao.com/docs/latest/ko/kakaologin/common)
- [네이버 로그인 API 문서](https://developers.naver.com/docs/login/api/)
- [OAuth 2.0 RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)

---

## 🆘 지원

문제가 발생하면:
1. 브라우저 콘솔 확인
2. Firebase Console > Authentication > Users 확인
3. `FIREBASE_SETUP_GUIDE.md` 재확인
4. 이슈 등록 또는 문의

---

**작성일**: 2025-01-22  
**버전**: 1.0.0  
**작성자**: AI연구소 개발팀
