# 🚀 Firebase 배포 가이드

AI연구소 프로젝트를 Firebase Hosting에 배포하는 방법입니다.

---

## 📋 목차

1. [사전 준비](#사전-준비)
2. [Firebase CLI 설치](#firebase-cli-설치)
3. [Firebase 프로젝트 설정](#firebase-프로젝트-설정)
4. [배포하기](#배포하기)
5. [배포 후 설정](#배포-후-설정)
6. [문제 해결](#문제-해결)

---

## 사전 준비

### 필요한 것
- ✅ Firebase 프로젝트 (이미 생성됨)
- ✅ Node.js 설치 (v16 이상)
- ✅ Firebase CLI 설치

### 확인 방법
```bash
# Node.js 버전 확인
node --version
# v16.0.0 이상이어야 함

# npm 버전 확인
npm --version
```

---

## Firebase CLI 설치

### 1. Firebase CLI 설치 (아직 안 했다면)
```bash
npm install -g firebase-tools
```

### 2. 설치 확인
```bash
firebase --version
# 13.0.0 이상
```

### 3. Firebase 로그인
```bash
firebase login
```
- 브라우저가 열리면 Google 계정으로 로그인
- 권한 허용
- 터미널에 "✔ Success!" 메시지 확인

---

## Firebase 프로젝트 설정

### 1. 프로젝트 디렉토리로 이동
```bash
cd ai-research-lab
```

### 2. Firebase 초기화 상태 확인

이미 `firebase.json`과 `functions/` 폴더가 있다면 초기화 완료된 상태입니다.

**현재 프로젝트 구조:**
```
ai-research-lab/
├── index.html
├── auth.html
├── mypage.html
├── admin.html
├── css/
├── js/
├── firebase.json          ← Firebase 설정
├── .firebaserc            ← 프로젝트 연결
└── functions/             ← Functions 폴더
```

### 3. 프로젝트 연결 확인
```bash
firebase projects:list
```
현재 프로젝트가 표시되는지 확인

---

## 배포하기

### 1. 배포 전 테스트 (선택사항)
```bash
# 로컬에서 Firebase Hosting 미리보기
firebase serve
```
- `http://localhost:5000`에서 확인
- `Ctrl+C`로 중지

### 2. Hosting만 배포
```bash
firebase deploy --only hosting
```

**예상 출력:**
```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/your-project/overview
Hosting URL: https://your-project.web.app
```

### 3. Functions도 함께 배포 (필요한 경우)
```bash
firebase deploy
```
- Hosting과 Functions 모두 배포

### 4. 배포 확인
브라우저에서 Hosting URL 접속:
```
https://your-project-id.web.app
```

---

## 배포 후 설정

### 1. Firebase Console에서 도메인 승인

배포 후 새로운 도메인이 자동으로 승인되지 않을 수 있습니다.

**확인 및 추가:**
1. [Firebase Console](https://console.firebase.google.com/) 접속
2. Authentication > Settings
3. Authorized domains 확인
4. 다음 도메인들이 있는지 확인:
   ```
   ✅ localhost
   ✅ your-project-id.web.app
   ✅ your-project-id.firebaseapp.com
   ```
5. 없으면 "Add domain" 클릭하여 추가

### 2. 커스텀 도메인 연결 (선택사항)

자신의 도메인을 사용하려면:

1. Firebase Console > Hosting
2. "Add custom domain" 클릭
3. 도메인 입력 (예: `mysite.com`)
4. DNS 설정 안내에 따라 설정
5. 도메인이 Authorized domains에도 추가되었는지 확인

---

## 배포 명령어 정리

### 기본 배포
```bash
# Hosting만 배포
firebase deploy --only hosting

# Functions만 배포
firebase deploy --only functions

# 모두 배포
firebase deploy
```

### 미리보기
```bash
# 로컬에서 테스트
firebase serve

# 포트 지정
firebase serve --port 8080
```

### 배포 취소 (롤백)
```bash
# 이전 버전으로 되돌리기
firebase hosting:rollback
```

---

## 환경별 배포

### Production (프로덕션)
```bash
firebase use production
firebase deploy --only hosting
```

### Staging (스테이징)
```bash
firebase use staging
firebase deploy --only hosting
```

---

## 배포 최적화

### 1. 불필요한 파일 제외

`firebase.json`의 `ignore` 섹션 확인:
```json
{
  "hosting": {
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "functions/**",
      "*.md"
    ]
  }
}
```

### 2. 캐싱 설정

정적 파일 캐싱이 `firebase.json`에 이미 설정되어 있습니다:
- 이미지: 1년 캐싱
- JS/CSS: 1일 캐싱

---

## 문제 해결

### 오류: "No project active"
```bash
# 프로젝트 선택
firebase use your-project-id

# 프로젝트 목록 확인
firebase projects:list
```

### 오류: "Permission denied"
```bash
# 다시 로그인
firebase logout
firebase login
```

### 오류: "Hosting: file not found"
`firebase.json`의 `public` 설정 확인:
```json
{
  "hosting": {
    "public": "."
  }
}
```

### 배포 후 이전 버전이 보이는 경우
```bash
# 브라우저 캐시 삭제
# Ctrl+Shift+Delete (Mac: Cmd+Shift+Delete)

# 또는 시크릿 모드에서 접속
```

### Firebase Functions 오류
```bash
# Functions 디렉토리로 이동
cd functions

# 의존성 재설치
npm install

# 다시 배포
cd ..
firebase deploy --only functions
```

---

## 지속적 배포 (CI/CD)

### GitHub Actions 설정

`.github/workflows/firebase-hosting.yml` 생성:
```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

---

## 배포 체크리스트

배포 전 확인사항:

```
□ Firebase CLI 설치 및 로그인
□ 프로젝트 연결 확인
□ firebase.json 설정 확인
□ 로컬에서 테스트 (firebase serve)
□ 불필요한 파일 제외 설정
□ Firebase 설정 완료 (admin.html > 설정 탭)
□ 배포 실행
□ Hosting URL 확인
□ Authorized domains에 배포 URL 추가
□ 실제 사이트에서 테스트
□ Google 로그인 테스트
□ 북마크 기능 테스트
```

---

## 유용한 명령어

```bash
# 현재 프로젝트 정보
firebase projects:list

# 배포 히스토리
firebase hosting:history

# 특정 버전 삭제
firebase hosting:delete <versionId>

# Functions 로그 확인
firebase functions:log

# Firebase 콘솔 열기
firebase open hosting
```

---

## 📚 추가 리소스

- [Firebase Hosting 문서](https://firebase.google.com/docs/hosting)
- [Firebase CLI 문서](https://firebase.google.com/docs/cli)
- [Firebase Functions 문서](https://firebase.google.com/docs/functions)

---

## 🎉 배포 완료!

배포가 완료되면:
1. ✅ `https://your-project-id.web.app`에서 사이트 확인
2. ✅ HTTPS 자동 적용
3. ✅ 전 세계 CDN을 통한 빠른 로딩
4. ✅ 자동 SSL 인증서

**축하합니다! 🚀**

---

**마지막 업데이트**: 2025-01-22  
**버전**: 1.0.0  
**작성자**: AI연구소 개발팀
