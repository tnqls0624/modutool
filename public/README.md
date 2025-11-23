# 🤖 AI연구소 - 최고의 AI 툴을 한눈에

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](https://github.com)
[![Feature](https://img.shields.io/badge/NEW-월/연%20구독%20플랜-425CFF.svg)](admin.html)
[![Status](https://img.shields.io/badge/status-Active-10B981.svg)](https://github.com)

> 다양한 AI 툴을 카테고리별로 비교하고 추천받는 웹사이트  
> Notion + Runway + Figma 스타일의 미니멀한 기술 브랜드 디자인

## 🆕 최신 업데이트 (v3.2.0)
- 🎛️ **설정 관리 시스템**: 코드 수정 없이 관리자 페이지에서 설정 ⭐ NEW!
- 🎛️ **Firebase 설정 UI**: API 키 등 모든 Firebase 설정을 UI에서 입력
- 🎛️ **소셜 로그인 키 관리**: 네이버, 카카오 API 키 입력 및 저장
- 🎉 **마이페이지**: 개인화된 사용자 페이지
- 🎉 **북마크 기능**: AI 툴 저장 및 관리
- 🔥 **Firebase 인증 시스템**: 회원가입/로그인 기능
- 🔥 **소셜 로그인 지원**: Google, 네이버, 카카오 로그인
- ✅ **어필리에이트 링크 추적**: 제휴 프로그램 수익 창출 시스템

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [페이지 구조](#-페이지-구조)
- [디자인 시스템](#-디자인-시스템)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [설치 및 실행](#-설치-및-실행)
- [향후 개발 계획](#-향후-개발-계획)
- [라이선스](#-라이선스)

---

## 🎯 프로젝트 소개

**AI연구소**는 다양한 AI 툴을 한눈에 비교하고, 카테고리별로 쉽게 탐색할 수 있는 웹사이트입니다.

### 프로젝트 목적

- 이미지 생성, 영상 제작, 문서 작성 등 다양한 AI 툴 소개
- 카테고리별 필터링으로 최적의 AI 툴 추천
- 검증된 프롬프트 모음 제공
- AI 활용 가이드 및 튜토리얼 제공
- 향후 AI 자동화 서비스로 확장 가능한 구조

### 타겟 사용자

- AI 툴을 찾고 있는 일반 사용자
- 생산성을 높이고 싶은 직장인
- 크리에이터 및 디자이너
- 개발자 및 마케터
- AI 초보자부터 전문가까지

---

## ✨ 주요 기능

### 🔍 AI 툴 탐색
- **9개 카테고리**: 이미지, 영상, 음성, 문서, 자동화, 코딩, 마케팅, 디자인, 번역
- **다중 필터**: 무료/유료, 난이도, 한국어 지원 여부
- **실시간 검색**: 툴 이름 및 설명 기반 검색
- **25+ AI 툴**: 주요 AI 툴 정보 제공

### 📝 AI 툴 상세 정보
- 툴 소개 및 주요 기능
- **어필리에이트 링크 추적** ⭐ NEW!
  - 제휴 프로그램 링크 등록
  - 자동 수익 추적 지원
- **가격 플랜 관리**: 월 구독/연 구독 각각 설정 가능
  - 플랜명, 가격, 결제 주기 개별 입력
  - 플랜 설명 및 기능 리스트
  - 추천 플랜 강조 표시
- 활용 사례 (이미지/영상)
- 추천 타겟 대상
- 유사 AI 툴 추천

### ✨ 프롬프트 모음
- **5개 카테고리**: Midjourney, ChatGPT, Claude, Runway, Pika
- 검증된 프롬프트 18개 제공
- 원클릭 복사 기능
- 카테고리별 탭 필터링

### 📚 가이드 & 블로그
- AI 툴 활용 가이드
- 튜토리얼 및 사용법
- 최신 AI 뉴스
- 툴 비교 리뷰
- 15개 블로그 포스트

### 💌 뉴스레터
- 주간 AI 뉴스레터 구독
- 최신 AI 툴 및 활용 팁 제공
- 무료 프롬프트 모음집 제공

### 🔐 회원 시스템 ⭐ NEW!
- **Firebase Authentication 기반 인증**
- **4가지 로그인 방식**:
  - 이메일/비밀번호 로그인
  - Google 소셜 로그인
  - 네이버 소셜 로그인 (Custom OAuth)
  - 카카오 소셜 로그인 (Custom OAuth)
- **마이페이지** 🎉 NEW!
  - 사용자 프로필 (프로필 사진, 이름, 이메일)
  - 북마크한 AI 툴 목록
  - 북마크 통계 표시
- **북마크 기능** 🎉 NEW!
  - 메인 페이지에서 툴 북마크
  - 상세 페이지에서 북마크 추가/제거
  - 나만의 툴 컬렉션 관리
- 로그인 상태 실시간 표시
- 보호된 페이지 접근 제어

### ⚡ AI 자동화 서비스 (예정)
- 맞춤형 AI 자동화 솔루션
- 문서/데이터/고객 응대 자동화
- 워크플로우 통합

---

## 📄 페이지 구조

### 👤 마이페이지 (`mypage.html`) - **NEW!** 🎉
- **사용자 프로필**
  - 프로필 사진 (Google 계정 연동)
  - 이름 및 이메일 표시
  - 북마크 통계
- **북마크한 AI 툴**
  - 저장한 툴 목록 그리드 표시
  - 툴 카드 클릭으로 상세 페이지 이동
  - 북마크 제거 기능
  - 빈 상태 안내 메시지
- **로그인 필수**: 로그인하지 않은 사용자는 자동 리다이렉트

### 🔐 로그인/회원가입 페이지 (`auth.html`)
- **Firebase Authentication 기반**
- **이메일/비밀번호 로그인**
  - 회원가입 (이름, 이메일, 비밀번호)
  - 로그인 (이메일, 비밀번호)
  - 비밀번호 표시/숨김 토글
- **소셜 로그인**
  - Google 로그인 (Firebase 기본 제공)
  - 네이버 로그인 (Custom OAuth)
  - 카카오 로그인 (Custom OAuth)
- **탭 전환**: 로그인 ↔ 회원가입
- **에러 처리**: 친절한 한국어 에러 메시지
- **자동 리다이렉트**: 로그인 후 이전 페이지로 이동

### 🔐 관리자 페이지 (`admin.html`) - **완전 개선!**
- **AI 툴 등록**: 폼을 통한 체계적 등록
- **멀티 선택**: 카테고리, 가격 타입 다중 선택 지원
- **아이콘 관리**: 파일 업로드 (Base64), URL, 이모지 지원
- **💰 어필리에이트 링크**: ⭐ NEW!
  - 제휴 프로그램 추적 링크 등록
  - 자동 우선 사용 (수익 추적)
- **가격 플랜 시스템**: 
  - ✅ **월 구독/연 구독 개별 설정**
  - 플랜명, 가격, 결제 주기 (월/연/일회성/커스텀)
  - 플랜 설명 및 기능 리스트 (다중 추가)
  - 추천 플랜 강조 (⭐ Featured Badge)
- **활용 사례**: 이미지/YouTube URL 등록
- **추천 타겟**: 대상 사용자 등록
- **유사 툴**: 다른 툴 ID 참조
- **실시간 데이터베이스**: RESTful API 연동
- **상태 관리**: 활성/임시저장/보관

### 1️⃣ 메인 페이지 (`index.html`) = AI 툴 리스트
- **Hero 섹션**: "최고의 AI 툴을 한눈에"
- **검색 & 필터바**: 실시간 검색, 카테고리, 가격, 한국어 지원
- **AI 툴 그리드**: 25개 툴 카드 (3열)
- **뉴스레터**: 구독 CTA
- **Footer**: 메뉴, 링크, 연락처

### 2️⃣ AI 툴 리스트 (`tools.html`) - 메인과 동일
- **필터바**: 검색, 카테고리, 가격, 한국어 지원
- **툴 카드 그리드**: 3열 그리드 레이아웃
- **카드 정보**: 아이콘, 이름, 설명, 태그, 가격
- **필터 결과**: 실시간 필터링 결과 표시

### 3️⃣ AI 툴 상세 페이지 (`tool-detail.html`) - **NEW 구조!**
- **무료 플랜 여부**: 상단 배지로 무료/유료 구분
- **툴명**: 대형 타이틀
- **툴 소개**: 간결한 설명
- **툴 로고**: 200x200px 그라데이션 카드
- **활용 사례**: 이미지/영상 URL 그리드 (관리자 등록)
- **CTA 버튼**: 사이트 가기 (파란 버튼)
- **추천 타겟**: 이모지 + 텍스트 배지
- **가격 요약**: 3단 플랜 카드 (Featured 강조)
- **유사 툴 비교**: 3개 비교 카드
- **최종 CTA**: 그라데이션 배경

### 4️⃣ 프롬프트 모음 (`prompts.html`)
- **탭 메뉴**: 5개 AI 툴 카테고리
- **프롬프트 카드**: 제목, 설명, 프롬프트, 태그
- **복사 버튼**: 원클릭 복사 기능
- **CTA**: 프리미엄 프롬프트 제공

### 5️⃣ 블로그 & 가이드 (`blog.html`)
- **Featured Post**: 메인 추천 게시물
- **탭 필터**: 가이드, 튜토리얼, 뉴스, 리뷰
- **블로그 카드**: 썸네일, 제목, 설명, 메타
- **더 보기**: 페이지네이션

---

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--main-blue: #425CFF        /* 메인 브랜드 컬러 */
--dark-navy: #0C0F14        /* 다크 배경 */
--light-gray: #F7F8FA       /* 밝은 배경 */
--neon-cyan: #48FFD9        /* 포인트 네온 */
--text-primary: #0C0F14     /* 본문 텍스트 */
--text-secondary: #5F6369   /* 보조 텍스트 */
```

### 타이포그래피
- **한국어**: Pretendard (Variable Font)
- **영문**: Inter (Variable Font)
- **코드**: Courier New, Monospace

### Border Radius
- **Small**: 8px
- **Medium**: 12px (기본)
- **Large**: 16px
- **Extra Large**: 20px

### 그림자
- **sm**: 0 1px 2px rgba(12, 15, 20, 0.04)
- **md**: 0 4px 12px rgba(12, 15, 20, 0.08)
- **lg**: 0 12px 24px rgba(12, 15, 20, 0.12)
- **xl**: 0 20px 40px rgba(12, 15, 20, 0.16)

### 반응형 브레이크포인트
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

---

## 🛠 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables
- **JavaScript (ES6+)**: Vanilla JS
- **Font Awesome 6**: 아이콘
- **Google Fonts**: Pretendard, Inter

### 라이브러리 (CDN)
```html
<!-- Font Awesome -->
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

<!-- Pretendard Font -->
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">

<!-- Inter Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap">
```

### 브라우저 지원
- Chrome (최신 2버전)
- Firefox (최신 2버전)
- Safari (최신 2버전)
- Edge (최신 2버전)

---

## 📁 프로젝트 구조

```
ai-research-lab/
├── index.html              # 메인 랜딩 페이지
├── tools.html              # AI 툴 리스트
├── tool-detail.html        # AI 툴 상세 페이지
├── prompts.html            # 프롬프트 모음
├── blog.html               # 블로그 & 가이드
├── css/
│   └── style.css          # 메인 스타일시트
├── js/
│   ├── main.js            # 공통 JavaScript
│   ├── tools.js           # 툴 리스트 기능
│   ├── tool-detail.js     # 툴 상세 기능
│   ├── prompts.js         # 프롬프트 기능
│   └── blog.js            # 블로그 기능
└── README.md              # 프로젝트 문서
```

---

## 🚀 설치 및 실행

### 1. 프로젝트 다운로드
```bash
# Git Clone (저장소가 있는 경우)
git clone https://github.com/your-username/ai-research-lab.git
cd ai-research-lab
```

### 2. 로컬 서버 실행

#### Live Server (VS Code)
1. VS Code에서 프로젝트 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

#### Python 간단 서버
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js http-server
```bash
npx http-server -p 8000
```

### 3. 브라우저에서 접속
```
http://localhost:8000
```

### 4. 관리자 페이지 접속
```
http://localhost:8000/admin.html
```

---

## 📖 사용 가이드

### 관리자 페이지에서 AI 툴 등록하기

#### 1️⃣ 기본 정보 입력
- **툴 ID**: 영문 소문자, 하이픈 사용 (예: `chatgpt`, `midjourney`)
- **툴 이름**: 표시될 툴 이름 (예: `ChatGPT`)
- **웹사이트 URL**: 툴의 공식 웹사이트 (필수)
- **짧은 설명**: 툴을 한 줄로 설명 (필수)

#### 2️⃣ 아이콘 등록
세 가지 방법 중 선택:
- **파일 업로드**: PNG, JPG, SVG 등 (최대 2MB, 권장 512x512px)
- **URL 입력**: 외부 이미지 URL
- **이모지**: 직접 이모지 입력 (🤖, 🎨 등)

#### 3️⃣ 카테고리 & 가격 타입 (다중 선택)
- **카테고리**: 이미지 생성, 영상 생성, 문서 작성 등 (체크박스로 다중 선택)
- **가격 타입**: 무료, 무료체험, 유료 (체크박스로 다중 선택)

#### 4️⃣ 가격 플랜 추가 ⭐ **NEW!**
각 플랜마다 다음 정보를 입력:

1. **플랜명**: Basic, Pro, Enterprise 등
2. **가격 입력** (최소 1개 이상 필수):
   - 💳 **월 구독 가격**: 예) $20, ₩10,000
   - 📅 **연 구독 가격**: 예) $200, ₩100,000
   - 🎁 **무료/기타 가격**: 예) 무료, 평생 $299, 문의
3. **플랜 설명**: 이 플랜의 특징 (선택)
4. **플랜 기능**: 여러 개 추가 가능
   - 예: "GPT-4 모델 사용"
   - 예: "월 100장 이미지 생성"
5. **추천 플랜**: 체크 시 월 구독 플랜이 파란 그라데이션으로 강조 표시

💡 **Tip**: 한 번의 입력으로 월 구독과 연 구독 플랜이 자동으로 생성됩니다!

**예시: ChatGPT 가격 플랜**
```
플랜 입력:
- 플랜명: Plus
- 월 구독 가격: $20
- 연 구독 가격: $200
- 플랜 설명: 연간 구독 시 $40 절약
- 플랜 기능: GPT-4 사용, 우선 접속권, DALL-E 3 생성
- 추천 플랜: ✅

→ 자동 생성되는 플랜:
  1. Plus (월 구독) - $20 ⭐ 추천
  2. Plus (연 구독) - $200
```

**예시: 무료 플랜**
```
플랜 입력:
- 플랜명: Free
- 무료/기타 가격: 무료
- 플랜 기능: GPT-3.5 사용, 제한된 응답

→ 자동 생성되는 플랜:
  1. Free (영구 무료) - 무료
```

#### 5️⃣ 활용 사례 등록
- 이미지 URL 또는 YouTube URL 입력
- 여러 개 추가 가능 (최대 4개 권장)

#### 6️⃣ 추천 타겟
- 이 툴을 사용하기 좋은 대상 입력
- 예: "마케터 & 콘텐츠 크리에이터", "개발자", "디자이너"

#### 7️⃣ 유사 툴 ID
- 비교할 다른 툴의 ID 입력
- 예: `claude`, `gemini`, `notion-ai`

#### 8️⃣ 저장
- **저장하기** 버튼 클릭
- 자동으로 데이터베이스에 저장됨
- 메인 페이지에서 즉시 확인 가능!

---

## 🎯 현재 완성된 기능

✅ **메인 페이지 (index.html = AI 툴 리스트)**
- Hero, 검색 & 필터바 (Sticky)
- 카테고리 선택, 가격 필터, 한국어 필터
- 전체 AI 툴 리스트 (25개)
- 뉴스레터, Footer

✅ **AI 툴 리스트**
- 25개 AI 툴 데이터
- 실시간 검색 및 필터링
- 카테고리, 가격, 한국어 지원 필터

✅ **AI 툴 상세 페이지**
- DB 연동 동적 로딩 지원
- 무료/유료 플랜 배지
- **가격 플랜 표시**: 월/연 구독 개별 플랜 카드
- 활용 사례 (이미지/YouTube 영상)
- 추천 타겟 배지
- Featured 플랜 강조 (그라데이션)
- 유사 툴 추천

✅ **프롬프트 모음**
- 18개 검증된 프롬프트
- 5개 카테고리 탭 필터
- 복사 기능

✅ **블로그 & 가이드**
- 15개 블로그 포스트
- 카테고리별 필터링
- Featured Post 섹션

✅ **관리자 페이지 (Admin)**
- **가격 플랜 시스템**: 월 구독/연 구독 개별 등록
- 멀티 카테고리 & 가격 타입 선택
- 아이콘 파일 업로드 (Base64)
- 활용 사례, 타겟, 유사 툴 관리
- RESTful API 연동 (CRUD)

✅ **공통 기능**
- 반응형 디자인 (Mobile/Tablet/Desktop)
- 네비게이션 메뉴 (모바일 햄버거)
- 뉴스레터 구독 폼
- 부드러운 스크롤 및 애니메이션

---

## 💾 데이터베이스 구조

### ai_tools 테이블
AI 툴 정보를 저장하는 메인 테이블입니다.

| 필드 | 타입 | 설명 | 예시 |
|------|------|------|------|
| `id` | text | 툴 고유 ID (시스템 자동 생성) | "chatgpt" |
| `name` | text | 툴 이름 | "ChatGPT" |
| `icon` | text | 아이콘 (URL, Base64, 이모지) | "🤖" 또는 "data:image/png;base64,..." |
| `categories` | array | 카테고리 (다중 선택) | ["writing", "coding"] |
| `description` | text | 툴 설명 | "OpenAI의 대화형 AI..." |
| `priceTypes` | array | 가격 타입 (다중 선택) | ["free", "freemium"] |
| `korean` | bool | 한국어 지원 여부 | true |
| `gradient` | text | 그라데이션 CSS | "linear-gradient(135deg, #425CFF, #5a6fff)" |
| `url` | text | 웹사이트 URL | "https://chat.openai.com" |
| **`affiliateUrl`** | text | **어필리에이트 추적 링크** ⭐ | "https://chat.openai.com?ref=ailab" |
| `features` | array | 주요 기능 리스트 | ["GPT-4 사용", "이미지 생성"] |
| `useCases` | array | 활용 사례 (이미지/영상 URL) | ["https://example.com/image.jpg", "https://youtube.com/..."] |
| `targetAudience` | array | 추천 타겟 | ["마케터", "개발자"] |
| **`pricingPlans`** | array | **가격 플랜 배열** | 아래 구조 참조 ⬇️ |
| `similarTools` | array | 유사 툴 ID | ["claude", "gemini"] |
| `status` | text | 상태 | "active" 또는 "draft" |

### 가격 플랜 구조 (`pricingPlans`)
```json
[
  {
    "name": "Free",
    "price": "₩0",
    "period": "영구 무료",
    "description": "기본 기능을 무료로 사용",
    "features": [
      "GPT-3.5 모델 사용",
      "제한된 응답 속도"
    ],
    "featured": false
  },
  {
    "name": "Plus",
    "price": "$20",
    "period": "월 구독",
    "description": "프리미엄 기능 제공",
    "features": [
      "GPT-4 모델 사용",
      "우선 접속권",
      "빠른 응답 속도"
    ],
    "featured": true
  },
  {
    "name": "Pro",
    "price": "$200",
    "period": "연 구독",
    "description": "1년 구독 시 20% 할인",
    "features": [
      "모든 Plus 기능",
      "연간 $40 절약",
      "무제한 API 액세스"
    ],
    "featured": false
  }
]
```

### 주요 특징
- ✅ **월 구독/연 구독 개별 설정**: 각 플랜마다 독립적으로 가격과 주기 설정
- ✅ **추천 플랜 강조**: `featured: true` 플랜은 파란 그라데이션 배경
- ✅ **유연한 가격 표시**: "$20", "₩10,000", "무료", "문의" 등 자유 입력
- ✅ **커스텀 주기**: "월 구독", "연 구독", "일회성", "평생", "6개월" 등

---

## 🔮 향후 개발 계획

### Phase 1: 콘텐츠 확장
- [ ] AI 툴 데이터 100개 이상 확장
- [ ] 프롬프트 모음 50개 이상 추가
- [ ] 블로그 포스트 실제 콘텐츠 작성
- [ ] 각 툴 상세 페이지 완성

### Phase 2: 기능 고도화
- [x] **RESTful API 연동** ✅ (tables/ai_tools)
- [x] **데이터베이스 구축** ✅ (ai_tools 테이블)
- [x] **관리자 페이지** ✅ (CRUD 완성)
- [ ] 사용자 회원가입/로그인
- [ ] 북마크 및 즐겨찾기 기능
- [ ] 툴 평점 및 리뷰 시스템
- [ ] 검색 엔진 최적화 (SEO)

### Phase 3: AI 자동화 서비스
- [ ] AI 자동화 서비스 상담 시스템
- [ ] 프로젝트 의뢰 및 견적 기능
- [ ] 포트폴리오 섹션 추가
- [x] **가격 플랜 시스템 구축** ✅ (월/연 구독 개별 설정)
- [ ] 실제 결제 API 통합 (Stripe, Toss Payments)

### Phase 4: 커뮤니티
- [ ] 사용자 프롬프트 공유 플랫폼
- [ ] AI 툴 사용 후기 게시판
- [ ] Q&A 커뮤니티
- [ ] AI 활용 사례 공모전

### Phase 5: 수익화
- [ ] 제휴 마케팅 (Affiliate Links)
- [ ] 프리미엄 프롬프트 판매
- [ ] AI 컨설팅 서비스
- [ ] 광고 배너 시스템

---

## 📊 데이터 모델

### AI 툴 데이터 구조 (업데이트됨)
```javascript
{
  id: 'chatgpt',
  name: 'ChatGPT',
  icon: '💬', // 이모지 또는 이미지 URL (https://...) 또는 Base64
  categories: ['writing', 'coding'], // 다중 선택 가능
  description: '툴 설명',
  priceTypes: ['free', 'freemium'], // 다중 선택 가능
  korean: true,
  gradient: 'linear-gradient(...)', // 이모지 배경용 (이미지는 흰색 배경)
  url: 'https://...',
  useCases: ['이미지URL', 'YouTube URL'], // NEW
  targetAudience: ['디자이너', '개발자'], // NEW
  pricingPlans: [ // NEW - 상세 구조
    {
      name: 'Basic',
      price: '$10',
      period: '월 구독',
      description: '플랜 설명',
      features: ['기능1', '기능2'],
      featured: false
    }
  ],
  similarTools: ['claude', 'gemini'], // NEW
  features: ['기능1', '기능2'],
  pros: ['장점1', '장점2'],
  cons: ['단점1', '단점2'],
  status: 'active' // 'active' | 'draft'
}
```

### 프롬프트 데이터 구조
```javascript
{
  id: 1,
  category: 'midjourney',
  title: '프롬프트 제목',
  description: '프롬프트 설명',
  prompt: '실제 프롬프트 내용',
  tags: ['태그1', '태그2']
}
```

### 블로그 포스트 구조
```javascript
{
  id: 1,
  category: 'guide',
  title: '포스트 제목',
  description: '포스트 설명',
  emoji: '🚀',
  gradient: 'linear-gradient(...)',
  date: '2024.01.15',
  readTime: '10분',
  views: '12,450',
  tags: ['태그1', '태그2']
}
```

---

## 🎓 학습 리소스

### 참고한 디자인
- [Notion](https://notion.so) - 미니멀한 UI/UX
- [Runway](https://runwayml.com) - 기술적 브랜드 느낌
- [Figma](https://figma.com) - 클린한 인터페이스

### 유용한 링크
- [Pretendard Font](https://github.com/orioncactus/pretendard)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## 📞 연락처

- **이메일**: contact@airesearch.io
- **광고/제휴**: ads@airesearch.io
- **뉴스레터**: [구독하기](index.html#newsletter)

---

## 📝 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.

```
MIT License

Copyright (c) 2024 AI연구소

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 감사의 말

이 프로젝트는 AI 툴의 대중화와 효율적인 활용을 목표로 만들어졌습니다.  
여러분의 피드백과 기여를 환영합니다!

**Made with 🤖 by AI연구소**

---

*Last updated: 2024.01.15*