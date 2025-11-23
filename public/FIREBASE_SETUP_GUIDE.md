# 🔥 Firebase 인증 설정 가이드

이 가이드는 AI연구소 웹사이트에 Firebase Authentication을 설정하는 방법을 안내합니다.

## 📋 목차
1. [Firebase 프로젝트 생성](#1-firebase-프로젝트-생성)
2. [Firebase Authentication 활성화](#2-firebase-authentication-활성화)
3. [Google 로그인 설정](#3-google-로그인-설정)
4. [카카오 로그인 설정](#4-카카오-로그인-설정)
5. [네이버 로그인 설정](#5-네이버-로그인-설정)
6. [Firebase 설정 정보 복사](#6-firebase-설정-정보-복사)

---

## 1. Firebase 프로젝트 생성

### 1-1. Firebase Console 접속
1. **[Firebase Console](https://console.firebase.google.com/)** 접속
2. Google 계정으로 로그인
3. **"프로젝트 추가"** 클릭

### 1-2. 프로젝트 생성
1. **프로젝트 이름**: `ai-research-lab` (또는 원하는 이름)
2. **Google 애널리틱스**: 선택 사항 (나중에 추가 가능)
3. **프로젝트 만들기** 클릭

### 1-3. 웹 앱 추가
1. 프로젝트 생성 후 **"웹 앱에 Firebase 추가"** (</>아이콘) 클릭
2. **앱 닉네임**: `AI연구소 웹사이트`
3. **Firebase Hosting 설정**: 체크 안 함
4. **앱 등록** 클릭
5. **Firebase SDK 설정 코드**를 복사해두세요 (나중에 사용)

---

## 2. Firebase Authentication 활성화

### 2-1. Authentication 메뉴 이동
1. 왼쪽 메뉴에서 **"빌드" > "Authentication"** 클릭
2. **"시작하기"** 버튼 클릭

### 2-2. 로그인 방법 활성화
이제 각 로그인 방법을 활성화하겠습니다.

---

## 3. Google 로그인 설정

### 3-1. Google 제공업체 활성화
1. **"Sign-in method"** 탭 클릭
2. **"Google"** 클릭
3. **"사용 설정"** 토글 ON
4. **프로젝트 지원 이메일** 선택 (본인 Gmail)
5. **저장** 클릭

✅ **Google 로그인 설정 완료!**

---

## 4. 카카오 로그인 설정

카카오 로그인은 Firebase Custom Authentication을 사용합니다.

### 4-1. 카카오 Developers 앱 생성
1. **[Kakao Developers](https://developers.kakao.com/)** 접속
2. **"내 애플리케이션"** 클릭
3. **"애플리케이션 추가하기"** 클릭
4. **앱 이름**: `AI연구소`
5. **회사 이름**: 개인/회사명 입력

### 4-2. 플랫폼 등록
1. 생성한 앱 클릭 > **"플랫폼"** 메뉴
2. **"Web 플랫폼 등록"** 클릭
3. **사이트 도메인** 입력:
   ```
   http://localhost:8000
   https://your-domain.com (실제 배포 도메인)
   ```

### 4-3. Redirect URI 설정
1. **"카카오 로그인"** 메뉴 클릭
2. **"활성화 설정"** ON
3. **"Redirect URI 등록"** 클릭
4. **Redirect URI** 입력:
   ```
   http://localhost:8000/auth.html
   https://your-domain.com/auth.html
   ```

### 4-4. 동의항목 설정
1. **"동의항목"** 메뉴 클릭
2. **필수 동의**:
   - 닉네임 (선택 → 필수)
   - 프로필 사진 (선택 → 필수)
   - 카카오계정(이메일) (선택 → 필수)

### 4-5. 앱 키 복사
1. **"앱 설정" > "앱 키"** 메뉴
2. **JavaScript 키** 복사 (나중에 사용)
   - 예: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

✅ **카카오 로그인 설정 완료!**

---

## 5. 네이버 로그인 설정

네이버 로그인도 Firebase Custom Authentication을 사용합니다.

### 5-1. 네이버 Developers 앱 생성
1. **[네이버 개발자 센터](https://developers.naver.com/main/)** 접속
2. **"Application" > "애플리케이션 등록"** 클릭
3. **애플리케이션 이름**: `AI연구소`
4. **사용 API**: "네이버 로그인" 선택

### 5-2. 로그인 오픈 API 서비스 환경 설정
1. **서비스 환경**: "PC 웹" 선택
2. **서비스 URL**:
   ```
   http://localhost:8000
   https://your-domain.com
   ```
3. **네이버 로그인 Callback URL**:
   ```
   http://localhost:8000/auth.html
   https://your-domain.com/auth.html
   ```

### 5-3. 제공 정보 설정
**필수 제공 정보** 선택:
- 회원 이름
- 이메일 주소
- 프로필 사진

### 5-4. Client ID/Secret 복사
1. 애플리케이션 등록 완료 후
2. **Client ID** 복사 (나중에 사용)
   - 예: `AB1CD2EF3GH4IJ5KL6MN`
3. **Client Secret** 복사 (나중에 사용)
   - 예: `XYZ123abc`

✅ **네이버 로그인 설정 완료!**

---

## 6. Firebase 설정 정보 복사

### 6-1. Firebase 설정 객체 확인
1. Firebase Console > **"프로젝트 설정"** (⚙️ 아이콘)
2. **"내 앱"** 섹션에서 웹 앱 선택
3. **"SDK 설정 및 구성"** > **"구성"** 선택
4. 다음과 같은 설정 정보 복사:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "ai-research-lab.firebaseapp.com",
  projectId: "ai-research-lab",
  storageBucket: "ai-research-lab.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnop"
};
```

### 6-2. 설정 정보 입력 위치
위 설정 정보를 `js/firebase-config.js` 파일에 입력합니다.

---

## 📝 설정 완료 체크리스트

복사해야 할 정보:

- [ ] Firebase Config 객체 (apiKey, authDomain 등)
- [ ] 카카오 JavaScript 키
- [ ] 네이버 Client ID
- [ ] 네이버 Client Secret

---

## 🚀 다음 단계

설정을 완료했다면:

1. `js/firebase-config.js` 파일에 Firebase 설정 입력
2. `js/auth.js` 파일에 카카오/네이버 키 입력
3. `auth.html` 페이지에서 로그인 테스트

---

## ⚠️ 중요 보안 사항

### API 키 보안
- **Firebase API Key**는 클라이언트에 노출되어도 안전합니다 (Firebase 보안 규칙으로 보호됨)
- **네이버 Client Secret**는 노출되면 안 됩니다!
  - 정적 사이트에서는 Client Secret를 사용하지 않는 **Implicit Grant** 방식 사용
  - 또는 서버리스 함수(Firebase Functions, Netlify Functions)에서 처리

### 도메인 화이트리스트
배포 후 반드시:
1. Firebase Console > Authentication > Settings > **승인된 도메인** 추가
2. 카카오 Developers > 플랫폼 > **실제 도메인** 추가
3. 네이버 Developers > API 설정 > **실제 도메인** 추가

---

## 🆘 문제 해결

### Google 로그인 오류
- 승인된 도메인 확인
- 팝업 차단 해제 확인

### 카카오 로그인 오류
- Redirect URI 정확히 일치하는지 확인
- JavaScript 키가 맞는지 확인
- 동의항목 필수 설정 확인

### 네이버 로그인 오류
- Callback URL 정확히 일치하는지 확인
- Client ID가 맞는지 확인
- 서비스 URL 등록 확인

---

## 📚 참고 자료

- [Firebase Authentication 문서](https://firebase.google.com/docs/auth)
- [카카오 로그인 가이드](https://developers.kakao.com/docs/latest/ko/kakaologin/common)
- [네이버 로그인 가이드](https://developers.naver.com/docs/login/api/)

---

**작성일**: 2025-01-22  
**버전**: 1.0.0  
**작성자**: AI연구소 개발팀
