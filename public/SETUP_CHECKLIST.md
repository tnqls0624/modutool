# ✅ AI연구소 인증 시스템 설정 체크리스트

이 체크리스트를 따라 Firebase 인증 시스템을 설정하세요.

---

## 🔥 Firebase 설정 (필수)

### 1. Firebase 프로젝트 생성
- [ ] [Firebase Console](https://console.firebase.google.com/) 접속
- [ ] "프로젝트 추가" 클릭
- [ ] 프로젝트 이름 입력 (예: `ai-research-lab`)
- [ ] 웹 앱 추가 (`</>` 아이콘)

### 2. Firebase SDK 설정
- [ ] Firebase Console > 프로젝트 설정 > SDK 설정 및 구성
- [ ] `firebaseConfig` 객체 복사
- [ ] `js/firebase-config.js` 파일 열기
- [ ] `YOUR_API_KEY` 등을 실제 값으로 교체:
  ```javascript
  const firebaseConfig = {
      apiKey: "실제_API_키",
      authDomain: "프로젝트ID.firebaseapp.com",
      projectId: "프로젝트ID",
      storageBucket: "프로젝트ID.appspot.com",
      messagingSenderId: "메시징_센더_ID",
      appId: "앱_ID"
  };
  ```

### 3. Authentication 활성화
- [ ] Firebase Console > Authentication > "시작하기"
- [ ] Sign-in method 탭 > **Google** 활성화
- [ ] 프로젝트 지원 이메일 선택
- [ ] **저장** 클릭

### 4. 이메일/비밀번호 로그인 활성화
- [ ] Sign-in method 탭 > **이메일/비밀번호** 활성화
- [ ] "이메일 링크(비밀번호 없는 로그인)"는 비활성화 유지
- [ ] **저장** 클릭

### 5. 도메인 승인
- [ ] Firebase Console > Authentication > Settings
- [ ] "승인된 도메인" 섹션 확인
- [ ] `localhost` 자동 추가됨 (확인)
- [ ] 배포 후 실제 도메인 추가 (예: `your-domain.com`)

---

## 🟢 Google 로그인 (기본 지원 - 이미 완료!)

✅ Firebase에서 Google 활성화만으로 사용 가능  
✅ 추가 설정 불필요

---

## 💚 네이버 로그인 (선택사항)

### 1. 네이버 애플리케이션 등록
- [ ] [네이버 개발자 센터](https://developers.naver.com/) 접속
- [ ] "Application" > "애플리케이션 등록" 클릭
- [ ] 애플리케이션 이름: `AI연구소`
- [ ] 사용 API: **네이버 로그인** 선택

### 2. 서비스 환경 설정
- [ ] 서비스 환경: **PC 웹** 선택
- [ ] 서비스 URL 입력:
  - `http://localhost:8000`
  - `https://your-domain.com` (배포 도메인)
- [ ] 네이버 로그인 Callback URL 입력:
  - `http://localhost:8000/auth.html`
  - `https://your-domain.com/auth.html`

### 3. 제공 정보 설정
- [ ] **필수 제공 정보** 선택:
  - ✅ 회원 이름
  - ✅ 이메일 주소
  - ✅ 프로필 사진

### 4. Client ID 복사
- [ ] 애플리케이션 정보 페이지에서 **Client ID** 복사
- [ ] `js/auth.js` 파일 열기
- [ ] `NAVER_CLIENT_ID` 값 교체:
  ```javascript
  const NAVER_CLIENT_ID = '실제_클라이언트_ID';
  ```

---

## 💛 카카오 로그인 (선택사항)

### 1. 카카오 애플리케이션 생성
- [ ] [Kakao Developers](https://developers.kakao.com/) 접속
- [ ] "내 애플리케이션" 클릭
- [ ] "애플리케이션 추가하기" 클릭
- [ ] 앱 이름: `AI연구소`

### 2. 플랫폼 등록
- [ ] 생성한 앱 클릭 > "플랫폼" 메뉴
- [ ] **Web 플랫폼 등록** 클릭
- [ ] 사이트 도메인 입력:
  - `http://localhost:8000`
  - `https://your-domain.com` (배포 도메인)

### 3. Redirect URI 설정
- [ ] "카카오 로그인" 메뉴 클릭
- [ ] **활성화 설정** ON
- [ ] **Redirect URI 등록** 클릭
- [ ] Redirect URI 입력:
  - `http://localhost:8000/auth.html`
  - `https://your-domain.com/auth.html`

### 4. 동의항목 설정
- [ ] "동의항목" 메뉴 클릭
- [ ] **필수 동의**로 변경:
  - ✅ 닉네임 (선택 → 필수)
  - ✅ 프로필 사진 (선택 → 필수)
  - ✅ 카카오계정(이메일) (선택 → 필수)

### 5. JavaScript 키 복사
- [ ] "앱 설정" > "앱 키" 메뉴
- [ ] **JavaScript 키** 복사
- [ ] `js/auth.js` 파일 열기
- [ ] `KAKAO_JS_KEY` 값 교체:
  ```javascript
  const KAKAO_JS_KEY = '실제_자바스크립트_키';
  ```

---

## 🧪 테스트

### 로컬 테스트
- [ ] 로컬 서버 실행 (예: `python -m http.server 8000`)
- [ ] 브라우저에서 `http://localhost:8000/auth.html` 접속

### 이메일/비밀번호 테스트
- [ ] "회원가입" 탭 클릭
- [ ] 이름, 이메일, 비밀번호 입력
- [ ] "회원가입" 버튼 클릭
- [ ] 성공 메시지 확인
- [ ] 홈페이지로 리다이렉트 확인
- [ ] 네비게이션에 사용자 이름 표시 확인

### Google 로그인 테스트
- [ ] "Google로 로그인" 버튼 클릭
- [ ] Google 계정 선택
- [ ] 성공 메시지 확인
- [ ] 홈페이지로 리다이렉트 확인
- [ ] 네비게이션에 프로필 사진 표시 확인

### 네이버 로그인 테스트 (설정한 경우)
- [ ] "네이버로 로그인" 버튼 클릭
- [ ] 네이버 로그인 페이지로 이동
- [ ] 로그인 및 동의
- [ ] 콜백 처리 확인
- [ ] 콘솔에 사용자 정보 출력 확인

### 카카오 로그인 테스트 (설정한 경우)
- [ ] "카카오로 로그인" 버튼 클릭
- [ ] 카카오 로그인 팝업
- [ ] 로그인 및 동의
- [ ] 콜백 처리 확인
- [ ] 콘솔에 사용자 정보 출력 확인

### 로그아웃 테스트
- [ ] 네비게이션 바 사용자 프로필 클릭
- [ ] 드롭다운 메뉴 표시 확인
- [ ] "로그아웃" 클릭
- [ ] 확인 팝업 표시
- [ ] "확인" 클릭
- [ ] 로그아웃 성공 메시지
- [ ] 네비게이션에 "로그인" 버튼 다시 표시

---

## 🚀 배포 전 체크리스트

### Firebase 설정
- [ ] Firebase Console > Authentication > Settings
- [ ] "승인된 도메인"에 실제 배포 도메인 추가
- [ ] Firebase Hosting 설정 (선택사항)

### 네이버 설정 (설정한 경우)
- [ ] 네이버 Developers > 애플리케이션 설정
- [ ] 서비스 URL에 실제 도메인 추가
- [ ] Callback URL에 실제 도메인 추가

### 카카오 설정 (설정한 경우)
- [ ] Kakao Developers > 플랫폼
- [ ] Web 플랫폼에 실제 도메인 추가
- [ ] Redirect URI에 실제 도메인 추가

### HTTPS 확인
- [ ] 배포 사이트가 HTTPS로 서비스되는지 확인
- [ ] SSL 인증서 유효성 확인

---

## 📚 참고 문서

설정 중 문제가 발생하면 다음 문서를 참고하세요:

- **FIREBASE_SETUP_GUIDE.md**: Firebase 상세 설정 가이드
- **AUTH_GUIDE.md**: 인증 시스템 완전 가이드
- **README.md**: 프로젝트 전체 문서

---

## 🎉 완료!

모든 체크리스트를 완료했다면:

1. ✅ Firebase 인증 시스템이 작동합니다
2. ✅ 사용자가 회원가입/로그인할 수 있습니다
3. ✅ 소셜 로그인이 작동합니다 (설정한 경우)
4. ✅ 배포 준비가 완료되었습니다

**축하합니다! 🎊**

---

**마지막 업데이트**: 2025-01-22  
**버전**: 1.0.0
