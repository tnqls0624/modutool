# 📋 Changelog

All notable changes to the AI연구소 project will be documented in this file.

---

## [3.2.0] - 2025-01-22 🎉 SETTINGS MANAGEMENT UPDATE

### 🎛️ Added - Settings Management
- **관리자 설정 페이지**
  - Admin 페이지에 "설정" 탭 추가
  - Firebase 인증 설정 UI
  - 소셜 로그인 API 키 관리 UI
  
- **Firebase 설정 관리**
  - API Key, Auth Domain, Project ID 등 모든 Firebase 설정 입력
  - localStorage에 안전하게 저장
  - 설정 저장/불러오기 기능
  - Firebase 연결 테스트 기능
  - 실시간 상태 피드백
  
- **소셜 로그인 API 키 관리**
  - 네이버 Client ID 입력
  - 카카오 JavaScript Key 입력
  - 개별 저장 및 불러오기
  
- **동적 설정 로드**
  - `js/firebase-config.js`: localStorage 우선 설정 로드
  - `js/auth.js`: 소셜 API 키 동적 로드
  - 설정 없을 시 경고 메시지 표시

- **새로운 파일**
  - `js/settings.js`: 설정 관리 로직
  - `FIREBASE_TROUBLESHOOTING.md`: Firebase 문제 해결 가이드

### 🎨 UI/UX Improvements
- 설정 탭 아이콘 및 스타일
- 입력 필드별 설명 및 예시
- 상태 메시지 (성공/오류/정보)
- 설정 가이드 링크

### 🔄 Changed
- `admin.html`: 설정 탭 및 UI 추가
- `js/firebase-config.js`: 동적 설정 로드
- `js/auth.js`: 소셜 API 키 동적 로드
- Google 로그인 에러 메시지 개선

### 💡 Benefits
- ✅ 코드 수정 없이 설정 가능
- ✅ 관리자 페이지에서 간편하게 설정
- ✅ 설정 유효성 검증
- ✅ Firebase Console 링크 제공
- ✅ 페이지 새로고침으로 즉시 적용

---

## [3.1.0] - 2025-01-22 🎉 MYPAGE & BOOKMARK UPDATE

### 🎉 Added - Mypage & Bookmark System
- **마이페이지 (`mypage.html`)**
  - 사용자 프로필 카드 (프로필 사진, 이름, 이메일)
  - 북마크 통계 표시
  - 북마크한 AI 툴 그리드
  - 빈 상태 메시지
  - 로그인 필수 페이지 보호

- **북마크 기능**
  - `bookmarks` 데이터베이스 테이블 생성
  - `js/bookmark-manager.js`: 북마크 관리 유틸리티
    - 북마크 추가/제거
    - 북마크 토글
    - 북마크 상태 확인
    - 사용자별 북마크 목록
  - 메인 페이지 툴 카드에 북마크 아이콘 버튼
  - 툴 상세 페이지에 북마크 버튼
  - 실시간 북마크 상태 동기화

- **새로운 파일**
  - `mypage.html`: 마이페이지
  - `js/mypage.js`: 마이페이지 로직
  - `js/bookmark-manager.js`: 북마크 관리

### 🎨 UI/UX Improvements
- 네비게이션 사용자 드롭다운에 "마이페이지" 링크 추가
- 북마크 아이콘 버튼 스타일 (`.bookmark-icon-btn`)
- 프로필 카드 그라데이션 디자인
- 북마크 통계 표시

### 🔄 Changed
- `js/nav-auth.js`: 마이페이지 링크 추가
- `index.html`: bookmark-manager.js 스크립트 추가
- `tool-detail.html`: 북마크 버튼 UI 추가
- `js/tools.js`: 툴 카드에 북마크 아이콘 추가
- `js/tool-detail.js`: 북마크 기능 통합
- `css/style.css`: 북마크 버튼 스타일 추가

---

## [3.0.0] - 2025-01-22 🎉 MAJOR UPDATE

### 🔥 Added - Authentication System
- **Firebase Authentication 통합**
  - 이메일/비밀번호 회원가입 및 로그인
  - Google 소셜 로그인 (Firebase 기본 제공)
  - 네이버 소셜 로그인 (Custom OAuth 2.0)
  - 카카오 소셜 로그인 (Kakao SDK)

- **새로운 페이지: `auth.html`**
  - 로그인/회원가입 탭 전환
  - 비밀번호 표시/숨김 토글
  - 실시간 에러/성공 메시지
  - 소셜 로그인 버튼 (Google, 네이버, 카카오)

- **새로운 파일**
  - `js/firebase-config.js`: Firebase 초기화 및 설정
  - `js/auth.js`: 인증 로직 (4가지 로그인 방식)
  - `js/nav-auth.js`: 네비게이션 인증 UI
  - `FIREBASE_SETUP_GUIDE.md`: Firebase 설정 가이드
  - `AUTH_GUIDE.md`: 인증 시스템 완전 가이드

### 🎨 UI/UX Improvements
- **네비게이션 바 인증 UI**
  - 로그아웃 상태: "로그인" + "회원가입" 버튼
  - 로그인 상태: 사용자 프로필 (이름 + 사진) + 드롭다운
  - 드롭다운 메뉴: "관리자", "로그아웃"
  - 모든 페이지에 자동 적용

- **로그인 페이지 디자인**
  - 그라데이션 배경
  - 깔끔한 카드 디자인
  - 소셜 로그인 버튼 (브랜드 컬러)
  - 반응형 디자인 (모바일 최적화)

### 🔐 Security Features
- Firebase Authentication 보안 (bcrypt 암호화)
- 세션 토큰 자동 관리
- 도메인 화이트리스트
- HTTPS 권장
- 로그인 필수 페이지 보호 (`requireAuth()`)

### 📚 Documentation
- Firebase 설정 가이드 작성
- 인증 시스템 완전 가이드 작성
- 소셜 로그인 설정 방법 (네이버, 카카오)
- 보안 고려사항 및 문제 해결 가이드

### 🔄 Changed
- 모든 페이지에 Firebase SDK 추가
- README.md 업데이트 (v3.0.0)
- 페이지 구조에 `auth.html` 추가

---

## [2.4.0] - 2025-11-22

### ✨ Added
- **활용 사례 더보기 오버레이** ⭐
  - 4개 초과 시 4번째 썸네일에 dim 효과
  - "+N 더보기" 텍스트 표시
  - 남은 개수 표시 (예: +2 더보기)

### 🔄 Changed
- 카드 호버 효과 제거 (정적 디자인)
- Tool Detail 페이지 컨텐츠 너비 통일 (960px → 1280px)
- 섹션 순서 변경: "이런 분들에게 추천해요"를 "활용 사례"보다 위로 배치

### 🎨 UI/UX Improvements
- 활용 사례 최대 4개만 표시
- 4번째 아이템에 반투명 오버레이 (rgba(12, 15, 20, 0.75))
- 흰색 텍스트로 "+N 더보기" 명확하게 표시

---

## [2.3.0] - 2025-11-22

### ✨ Added
- **활용 사례 타입 선택 시스템** ⭐
  - 라디오 버튼으로 영상/이미지 타입 선택
  - 영상: YouTube URL 입력
  - 이미지: 파일 업로드 (Base64 변환)
  - 이미지 미리보기 기능
  - 타입별 아이콘 표시 (🎬 영상, 🖼️ 이미지)

### 🔄 Changed
- 활용 사례 입력 방식 개선: 단순 URL → 타입별 구분 입력
- renderUseCases 함수 추가 (타입별 렌더링)
- 파일 크기 제한: 2MB
- 지원 형식: PNG, JPG, GIF, WebP

---

## [2.2.0] - 2025-11-22

### ✨ Added
- **어필리에이트 링크 추적 시스템** ⭐
  - `affiliateUrl` 필드 추가 (DB 스키마)
  - Admin 페이지에 어필리에이트 URL 입력 필드
  - Tool Detail 페이지에서 자동 우선 사용
  - AFFILIATE_GUIDE.md 문서 작성

### 🔄 Changed
- CTA 버튼이 affiliateUrl 우선 사용 (입력 시)
- 미입력 시 일반 url 자동 폴백

---

## [2.1.0] - 2025-11-22

### ✨ Added
- **간편 가격 플랜 입력**: 한 번의 입력으로 월/연 구독 플랜 자동 생성
  - 월 구독 가격 필드
  - 연 구독 가격 필드
  - 무료/기타 가격 필드
  - 입력된 가격에 따라 자동으로 플랜 생성

### 🔄 Changed
- 가격 플랜 입력 방식 개선: 결제 주기 선택 → 월/연 가격 직접 입력
- 추천 플랜 배지는 월 구독 플랜에만 자동 적용
- 팝업 알림 제거 (항목 추가 시)

### 🗑️ Removed
- 결제 주기 드롭다운 제거
- 커스텀 주기 입력 필드 제거
- toggleCustomPeriod 함수 제거

---

## [2.0.0] - 2025-11-22

### ✨ Added
- **가격 플랜 시스템**: 월 구독/연 구독 개별 설정 기능 추가
  - 플랜명, 가격, 결제 주기 개별 입력
  - 플랜 설명 필드 추가
  - 플랜 기능 리스트 (다중 추가)
  - 추천 플랜 강조 표시 (Featured Badge)
- **Admin 페이지 고도화**
  - 가격 플랜 추가/수정/삭제 UI
  - 실시간 플랜 미리보기 카드
  - 플랜 기능 추가 기능
  - 추천 플랜 체크박스
- **Tool Detail 페이지 개선**
  - DB 기반 동적 툴 로딩
  - pricingPlans 필드 지원
  - Featured 플랜 그라데이션 배경
  - 플랜 설명 표시
- **문서화**
  - README.md 가격 플랜 시스템 문서 추가
  - ADMIN_GUIDE.md 가격 플랜 등록 가이드 추가
  - 데이터베이스 구조 문서화
  - 사용 예시 및 모범 사례 추가

### 🔄 Changed
- 가격 타입 필드 → 가격 플랜 시스템으로 업그레이드
- renderPricingSummary 함수 개선 (DB 데이터 구조 지원)
- 플랜 카드 디자인 개선 (설명, Featured Badge)

### 🗑️ Removed
- 장점/단점 필드 제거 (플랜 기능으로 통합)

### 🐛 Fixed
- DB에서 로드한 툴 데이터 렌더링 오류 수정
- 가격 플랜 빈 배열 처리 개선
- Featured 플랜 스타일 누락 수정

---

## [1.0.0] - 2025-11-21

### ✨ Added
- 메인 페이지 (AI 툴 리스트)
- AI 툴 상세 페이지
- 프롬프트 모음 페이지
- 블로그 & 가이드 페이지
- Admin 페이지 (기본 CRUD)
- 멀티 카테고리 & 가격 타입 선택
- 아이콘 파일 업로드 (Base64)
- 활용 사례, 추천 타겟, 유사 툴 관리
- RESTful API 연동 (tables/ai_tools)

### 🎨 Design
- Notion + Runway + Figma 스타일 디자인
- 반응형 레이아웃 (Mobile/Tablet/Desktop)
- Main Blue (#425CFF) 브랜드 컬러
- Pretendard & Inter 폰트

---

## 버전 규칙

이 프로젝트는 [Semantic Versioning](https://semver.org/)을 따릅니다.

- **MAJOR**: 호환되지 않는 API 변경
- **MINOR**: 하위 호환성을 유지하는 새로운 기능
- **PATCH**: 하위 호환성을 유지하는 버그 수정
