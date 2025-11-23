# 🚀 배포 가이드

AI연구소 프로젝트를 배포하는 방법을 안내합니다.

---

## 📋 배포 방법 선택

### 1. Firebase Hosting (추천) ⭐
- **장점**: 무료, HTTPS 자동, CDN, 간편한 배포
- **단점**: Firebase 프로젝트 필요
- **가이드**: [FIREBASE_DEPLOY_GUIDE.md](FIREBASE_DEPLOY_GUIDE.md)

### 2. Netlify
- **장점**: Git 연동 자동 배포, 무료
- **단점**: Firebase Functions 미지원
- **배포 방법**: [Netlify 가이드](#netlify-배포)

### 3. Vercel
- **장점**: Next.js 최적화, 빠른 배포
- **단점**: 정적 사이트 제한
- **배포 방법**: [Vercel 가이드](#vercel-배포)

### 4. GitHub Pages
- **장점**: 완전 무료, GitHub 연동
- **단점**: 정적 사이트만 지원, HTTPS 제한
- **배포 방법**: [GitHub Pages 가이드](#github-pages-배포)

---

## 🔥 Firebase Hosting 배포 (추천)

### 빠른 시작

```bash
# 1. Firebase CLI 설치
npm install -g firebase-tools

# 2. 로그인
firebase login

# 3. 배포
firebase deploy --only hosting
```

### 상세 가이드
👉 **[FIREBASE_DEPLOY_GUIDE.md](FIREBASE_DEPLOY_GUIDE.md)** 참고

---

## 🌐 Netlify 배포

### 방법 1: Netlify CLI

```bash
# 1. Netlify CLI 설치
npm install -g netlify-cli

# 2. 로그인
netlify login

# 3. 배포
netlify deploy --prod
```

### 방법 2: 웹 UI

1. [Netlify](https://netlify.com) 접속
2. "Add new site" > "Import an existing project"
3. GitHub 저장소 연결
4. Build settings:
   - Build command: (비워둠)
   - Publish directory: `.`
5. "Deploy site" 클릭

### 환경 변수 설정
Netlify Dashboard > Site settings > Environment variables
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
```

---

## ▲ Vercel 배포

### 방법 1: Vercel CLI

```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. 로그인
vercel login

# 3. 배포
vercel --prod
```

### 방법 2: 웹 UI

1. [Vercel](https://vercel.com) 접속
2. "New Project"
3. GitHub 저장소 연결
4. Framework: "Other"
5. "Deploy" 클릭

---

## 📄 GitHub Pages 배포

### 방법 1: GitHub Actions

`.github/workflows/deploy.yml` 생성:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

### 방법 2: 수동 배포

1. GitHub 저장소 > Settings > Pages
2. Source: "Deploy from a branch"
3. Branch: `main` 또는 `gh-pages`
4. Folder: `/` (root)
5. "Save" 클릭

**접속 URL**: `https://username.github.io/repository-name`

---

## 🔧 배포 전 체크리스트

### 필수 설정
```
□ Firebase 설정 완료 (admin.html > 설정 탭)
□ API 키 입력 완료
□ 로컬에서 정상 작동 확인
□ Google 로그인 테스트 완료
□ 북마크 기능 테스트 완료
```

### Firebase 설정 확인
```
□ Authentication 활성화
□ Google 로그인 활성화
□ Authorized domains에 배포 URL 추가
```

### 파일 확인
```
□ index.html 존재
□ css/ 폴더 존재
□ js/ 폴더 존재
□ 모든 이미지 링크 확인
```

---

## 🌍 배포 후 설정

### 1. Firebase Authorized Domains 추가

배포 후 반드시 추가:

**Firebase Hosting:**
```
your-project-id.web.app
your-project-id.firebaseapp.com
```

**Netlify:**
```
your-site.netlify.app
your-custom-domain.com
```

**Vercel:**
```
your-site.vercel.app
your-custom-domain.com
```

**GitHub Pages:**
```
username.github.io
```

### 2. 커스텀 도메인 연결

#### Firebase Hosting
1. Firebase Console > Hosting
2. "Add custom domain"
3. DNS 설정 안내 따라 설정

#### Netlify
1. Site settings > Domain management
2. "Add custom domain"
3. DNS 설정

#### Vercel
1. Project settings > Domains
2. "Add" 클릭
3. DNS 설정

---

## 📊 성능 최적화

### 1. 이미지 최적화
- WebP 형식 사용
- 적절한 크기로 리사이징
- Lazy loading 적용

### 2. JavaScript 최적화
- 불필요한 코드 제거
- 파일 압축 (minify)

### 3. CSS 최적화
- 사용하지 않는 CSS 제거
- Critical CSS 인라인

### 4. 캐싱 설정
Firebase Hosting은 `firebase.json`에 이미 설정됨:
```json
{
  "headers": [
    {
      "source": "**/*.@(jpg|jpeg|gif|png)",
      "headers": [{"key": "Cache-Control", "value": "max-age=31536000"}]
    }
  ]
}
```

---

## 🔒 보안 설정

### 1. HTTPS 강제
모든 플랫폼에서 자동으로 HTTPS 적용

### 2. 환경 변수
민감한 정보는 환경 변수로 관리:
- Firebase: Firebase Console
- Netlify: Site settings > Environment variables
- Vercel: Project settings > Environment Variables

### 3. CORS 설정
필요한 경우 `firebase.json`에 추가:
```json
{
  "headers": [
    {
      "source": "/api/**",
      "headers": [
        {"key": "Access-Control-Allow-Origin", "value": "*"}
      ]
    }
  ]
}
```

---

## 📈 모니터링

### Firebase Analytics
```javascript
// analytics 추가 (선택사항)
import { getAnalytics } from "firebase/analytics";
const analytics = getAnalytics(app);
```

### Google Analytics
`index.html`에 추가:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 🆘 문제 해결

### 배포 후 404 오류
- `firebase.json`의 `public` 설정 확인
- `index.html`이 루트에 있는지 확인

### Firebase 로그인 실패
- Authorized domains에 배포 URL 추가 확인
- Firebase 설정 (API Key 등) 확인

### 이미지가 안 보이는 경우
- 상대 경로 확인
- 이미지 파일이 배포되었는지 확인
- 브라우저 콘솔에서 404 오류 확인

### 캐시 문제
```bash
# 브라우저 캐시 삭제
Ctrl+Shift+Delete

# 또는 강력 새로고침
Ctrl+Shift+R (Mac: Cmd+Shift+R)
```

---

## 📚 추가 리소스

- [Firebase Hosting 문서](https://firebase.google.com/docs/hosting)
- [Netlify 문서](https://docs.netlify.com/)
- [Vercel 문서](https://vercel.com/docs)
- [GitHub Pages 문서](https://docs.github.com/pages)

---

## 🎉 배포 완료!

배포가 성공적으로 완료되면:
- ✅ HTTPS 자동 적용
- ✅ 전 세계 어디서나 빠른 접속
- ✅ 자동 SSL 인증서
- ✅ CDN을 통한 콘텐츠 전송

**축하합니다! 🚀**

---

**마지막 업데이트**: 2025-01-22  
**버전**: 1.0.0
