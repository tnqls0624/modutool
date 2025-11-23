# 🔧 Firebase 로그인 문제 해결 가이드

Google 로그인이 실패하는 경우 이 가이드를 따라 문제를 해결하세요.

---

## 🔍 1단계: 브라우저 콘솔 확인

### 콘솔 열기
- **Chrome/Edge**: `F12` 또는 `Ctrl+Shift+J` (Mac: `Cmd+Option+J`)
- **Firefox**: `F12` 또는 `Ctrl+Shift+K`
- **Safari**: `Cmd+Option+C`

### 에러 메시지 확인
콘솔에 다음과 같은 메시지가 있는지 확인:
```
❌ Google 로그인 실패: 
에러 코드: auth/...
에러 메시지: ...
```

---

## 🚨 주요 에러 코드 및 해결 방법

### 1. `auth/invalid-api-key`
**원인**: Firebase API 키가 설정되지 않았거나 잘못됨

**해결 방법**:
1. `js/firebase-config.js` 파일 열기
2. Firebase Console에서 설정 복사
   - [Firebase Console](https://console.firebase.google.com/) 접속
   - 프로젝트 선택
   - ⚙️ > 프로젝트 설정 > SDK 설정 및 구성
   - **구성** 탭에서 `firebaseConfig` 복사
3. `js/firebase-config.js`의 `YOUR_API_KEY` 등을 실제 값으로 교체

```javascript
// ❌ 잘못된 예
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",  // 이렇게 되어 있으면 안 됨!
    ...
};

// ✅ 올바른 예
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  // 실제 값
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdefghijklmnop"
};
```

---

### 2. `auth/operation-not-allowed`
**원인**: Firebase Console에서 Google 로그인이 활성화되지 않음

**해결 방법**:
1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택
3. **Authentication** 클릭
4. **Sign-in method** 탭 클릭
5. **Google** 클릭
6. **사용 설정** 토글 ON
7. 프로젝트 지원 이메일 선택
8. **저장** 클릭

---

### 3. `auth/unauthorized-domain`
**원인**: 현재 도메인이 Firebase에서 승인되지 않음

**해결 방법**:
1. Firebase Console > Authentication > Settings
2. **승인된 도메인** 섹션 확인
3. 현재 도메인 추가:
   - 로컬 테스트: `localhost` (자동 추가됨)
   - 배포 후: `your-domain.com` 추가

**추가 방법**:
1. "도메인 추가" 버튼 클릭
2. 도메인 입력 (예: `mysite.com`)
3. "추가" 클릭

---

### 4. `auth/popup-blocked`
**원인**: 브라우저에서 팝업 차단

**해결 방법**:
1. 브라우저 주소창 오른쪽 팝업 차단 아이콘 클릭
2. "항상 허용" 선택
3. 페이지 새로고침

또는:
- **Chrome**: 설정 > 개인정보 및 보안 > 사이트 설정 > 팝업 및 리디렉션
- **Firefox**: 설정 > 개인정보 및 보안 > 권한 > 팝업 차단

---

### 5. `auth/network-request-failed`
**원인**: 네트워크 연결 문제 또는 방화벽

**해결 방법**:
1. 인터넷 연결 확인
2. 방화벽/VPN 설정 확인
3. Firebase 서버 상태 확인: [Firebase Status](https://status.firebase.google.com/)

---

## ✅ 2단계: Firebase 설정 완료 체크리스트

### 필수 설정
- [ ] Firebase 프로젝트 생성됨
- [ ] 웹 앱 추가됨
- [ ] `js/firebase-config.js`에 실제 설정 값 입력됨
- [ ] Authentication 활성화됨
- [ ] Google 제공업체 활성화됨
- [ ] 프로젝트 지원 이메일 선택됨
- [ ] 승인된 도메인에 `localhost` 포함됨

### 선택 설정 (실제 서비스 배포 시)
- [ ] 실제 도메인이 승인된 도메인에 추가됨
- [ ] HTTPS 설정 완료
- [ ] Firebase Hosting 설정 (선택사항)

---

## 🧪 3단계: 테스트

### 설정 확인 테스트
```javascript
// 브라우저 콘솔에서 실행
console.log('Firebase Config:', firebase.app().options);
```

**결과**:
- ✅ 정상: 실제 값이 표시됨
- ❌ 문제: "YOUR_API_KEY" 등이 표시됨

### Google 로그인 테스트
1. `auth.html` 페이지 접속
2. "Google로 로그인" 버튼 클릭
3. Google 계정 선택
4. 로그인 성공 확인

---

## 📋 4단계: 단계별 디버깅

### 1. Firebase 초기화 확인
```javascript
// 브라우저 콘솔에서 실행
console.log('Firebase initialized:', !!firebase.app());
console.log('Auth object:', !!firebase.auth());
```

**예상 결과**: 둘 다 `true`

### 2. API 키 확인
```javascript
// 브라우저 콘솔에서 실행
const config = firebase.app().options;
console.log('API Key starts with:', config.apiKey.substring(0, 10));
```

**예상 결과**: `"AIzaSy..."` 형태 (실제 키)

### 3. 수동 로그인 테스트
```javascript
// 브라우저 콘솔에서 실행
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
  .then(result => console.log('✅ 성공:', result.user.email))
  .catch(error => console.error('❌ 실패:', error.code, error.message));
```

---

## 🆘 여전히 문제가 해결되지 않는 경우

### 추가 확인 사항

#### 1. Firebase 프로젝트 설정 재확인
- 프로젝트 ID가 맞는지 확인
- 웹 앱이 올바르게 등록되었는지 확인

#### 2. 브라우저 캐시 삭제
- `Ctrl+Shift+Delete` (Mac: `Cmd+Shift+Delete`)
- "캐시된 이미지 및 파일" 선택
- "데이터 삭제" 클릭
- 페이지 새로고침

#### 3. 시크릿 모드에서 테스트
- Chrome: `Ctrl+Shift+N`
- Firefox: `Ctrl+Shift+P`
- Safari: `Cmd+Shift+N`

#### 4. 다른 브라우저에서 테스트
- Chrome, Firefox, Safari, Edge 중 다른 브라우저 사용

---

## 🔍 일반적인 실수

### 1. Firebase 프로젝트 미생성
❌ Firebase 프로젝트를 아예 만들지 않음  
✅ Firebase Console에서 프로젝트 생성 필수

### 2. 설정 파일 수정 안 함
❌ `js/firebase-config.js` 그대로 둠  
✅ `YOUR_API_KEY` 등을 실제 값으로 교체

### 3. Google 제공업체 미활성화
❌ Authentication만 활성화하고 Google은 활성화 안 함  
✅ Google 제공업체도 반드시 활성화

### 4. 도메인 미승인
❌ `localhost` 외 도메인에서 테스트 시 미승인  
✅ 모든 테스트 도메인을 승인된 도메인에 추가

---

## 📞 추가 지원

### 공식 문서
- [Firebase Authentication 문서](https://firebase.google.com/docs/auth)
- [Firebase 문제 해결](https://firebase.google.com/docs/auth/web/troubleshooting)

### 커뮤니티
- [Stack Overflow - Firebase](https://stackoverflow.com/questions/tagged/firebase)
- [Firebase 지원 포럼](https://firebase.google.com/support)

---

## 📝 체크리스트 요약

Google 로그인 설정 완료 체크리스트:

```
✅ 1. Firebase 프로젝트 생성
✅ 2. 웹 앱 추가
✅ 3. firebaseConfig 복사하여 js/firebase-config.js에 붙여넣기
✅ 4. Authentication 활성화
✅ 5. Google 제공업체 활성화
✅ 6. 프로젝트 지원 이메일 선택
✅ 7. 승인된 도메인 확인 (localhost 포함)
✅ 8. 브라우저에서 팝업 허용
✅ 9. auth.html에서 Google 로그인 테스트
```

---

**마지막 업데이트**: 2025-01-22  
**버전**: 1.0.0
