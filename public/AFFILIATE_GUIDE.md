# 💰 어필리에이트 링크 추적 가이드

> AI연구소에서 제휴 프로그램 링크를 추적하고 수익을 얻는 방법

---

## 📋 목차

- [어필리에이트란?](#어필리에이트란)
- [시스템 작동 방식](#시스템-작동-방식)
- [설정 방법](#설정-방법)
- [주요 AI 툴 제휴 프로그램](#주요-ai-툴-제휴-프로그램)
- [수익 추적 방법](#수익-추적-방법)
- [FAQ](#faq)

---

## 🎯 어필리에이트란?

**어필리에이트 마케팅**은 다른 회사의 제품/서비스를 추천하고, 사용자가 구매할 때 커미션을 받는 방식입니다.

### 작동 원리:
```
1. 제휴 프로그램 가입
   ↓
2. 고유 추적 링크 발급받기
   ↓
3. 내 사이트에 링크 게시
   ↓
4. 사용자 클릭 → 제품 구매
   ↓
5. 커미션 수령 (5-30%)
```

---

## 🔧 시스템 작동 방식

### AI연구소의 어필리에이트 시스템

```javascript
// Admin에서 설정
{
  "name": "ChatGPT",
  "url": "https://chat.openai.com",           // 일반 URL
  "affiliateUrl": "https://chat.openai.com?ref=ailab123"  // 추적 링크
}

// 자동 처리
- affiliateUrl이 있으면 → 우선 사용
- affiliateUrl이 없으면 → 일반 URL 사용
```

### 사용자 경험

```
사용자가 툴 카드 클릭
  ↓
상세 페이지 이동
  ↓
"사이트 가기" 버튼 클릭
  ↓
어필리에이트 링크로 리다이렉트
  ↓
제휴사가 쿠키 저장 (30-90일)
  ↓
사용자가 구매
  ↓
커미션 발생! 💰
```

---

## 📝 설정 방법

### Step 1: 제휴 프로그램 가입

#### A. 직접 제휴 (권장)
```
1. 툴 공식 사이트 접속
2. Footer 또는 About 페이지에서 "Affiliate", "Partners" 찾기
3. 신청서 작성
4. 승인 대기 (보통 1-3일)
5. 고유 링크 발급받기
```

#### B. 제휴 네트워크 이용
```
Impact.com (https://impact.com)
ShareASale (https://shareasale.com)
CJ Affiliate (https://cj.com)

→ 한 번 가입으로 수백 개 브랜드 접근
```

---

### Step 2: 어필리에이트 링크 입력

#### Admin 페이지에서 입력:

```
1. admin.html 접속
2. 툴 추가/수정 폼에서
3. "💰 어필리에이트 링크" 필드 찾기
4. 발급받은 추적 링크 붙여넣기
5. 저장

예시:
- 일반 URL: https://www.notion.so
- 어필리에이트 URL: https://affiliate.notion.so/ailab123
```

---

### Step 3: 테스트

```
1. 툴 상세 페이지 접속
2. "사이트 가기" 버튼 클릭
3. 브라우저 주소창 확인
4. 어필리에이트 파라미터 포함 여부 확인
   예: ?ref=ailab123, ?aff=yourID
```

---

## 🔗 주요 AI 툴 제휴 프로그램

### 1️⃣ **Notion** ⭐ 추천
```
프로그램: Notion Affiliate Program
URL: https://affiliate.notion.so
수익:
  - 유료 전환: $5-20
  - 구독 지속: 매월 10%
정산: PayPal, 월 1회
최소 정산액: $50

가입 방법:
1. https://affiliate.notion.so 접속
2. "Join Program" 클릭
3. 사이트 정보 입력
4. 승인 대기 (1-3일)

링크 예시:
https://affiliate.notion.so/yourID
```

---

### 2️⃣ **Jasper AI**
```
프로그램: Jasper Affiliate Program
URL: https://www.jasper.ai/affiliates
수익:
  - 첫 달: 판매가의 30% ($29-$59)
  - 반복: 매월 30% (구독 유지 시)
정산: Stripe, 월 1회
최소 정산액: $100

링크 예시:
https://www.jasper.ai?fpr=yourID
```

---

### 3️⃣ **Canva**
```
프로그램: Canva Affiliate Program
URL: https://www.canva.com/affiliates
수익:
  - Canva Pro: $36 (연간 구독 시)
  - Canva Teams: $72+
정산: Impact.com 통해
쿠키 지속: 30일

링크 예시:
https://partner.canva.com/yourID
```

---

### 4️⃣ **Grammarly**
```
프로그램: Impact.com 통해
수익:
  - 유료 전환: $0.20-$20
  - 프리미엄 구독: 20%
정산: Impact.com
쿠키 지속: 90일

링크 예시:
https://grammarly.go2cloud.org/aff_c?offer_id=XXX&aff_id=yourID
```

---

### 5️⃣ **Midjourney**
```
프로그램: 공식 프로그램 없음
대안:
  1. Discord 초대 링크 사용
  2. 스폰서 협상 ($500-2000/월)
  3. 일반 링크 + 쿠폰 코드

링크 예시:
https://discord.gg/midjourney (추천 코드 없음)
```

---

## 📊 수익 추적 방법

### 방법 1: 제휴사 대시보드 (기본)

```
모든 제휴 프로그램은 대시보드 제공:

- 클릭 수
- 전환율
- 발생 커미션
- 정산 내역

예시:
Notion 대시보드 → https://affiliate.notion.so/dashboard
Impact.com → https://app.impact.com
```

---

### 방법 2: Google Analytics (선택)

```javascript
// UTM 파라미터 추가
function generateTrackingUrl(baseUrl, toolId) {
  const params = new URLSearchParams({
    utm_source: 'ai-lab',
    utm_medium: 'referral',
    utm_campaign: 'tool-directory',
    utm_content: toolId
  });
  
  return `${baseUrl}?${params.toString()}`;
}

// 사용 예시
const trackingUrl = generateTrackingUrl(
  'https://affiliate.notion.so/ailab',
  'notion'
);
// 결과: https://affiliate.notion.so/ailab?utm_source=ai-lab&utm_medium=referral...
```

**Google Analytics에서 확인:**
1. GA 대시보드 접속
2. Acquisition → Campaigns
3. utm_content로 툴별 클릭 확인

---

### 방법 3: 자체 추적 (고급)

서버가 있다면 자체 추적 시스템 구축 가능:

```javascript
// 백엔드 (Node.js 예시)
app.get('/track/:toolId', async (req, res) => {
  const { toolId } = req.params;
  
  // 클릭 기록
  await db.clicks.create({
    toolId,
    timestamp: Date.now(),
    ip: req.ip,
    userAgent: req.headers['user-agent']
  });
  
  // 어필리에이트 URL로 리다이렉트
  const tool = await db.tools.findOne({ id: toolId });
  res.redirect(tool.affiliateUrl);
});
```

---

## 💡 수익 극대화 팁

### 1️⃣ **여러 제휴 프로그램 동시 운영**
```
✅ Notion (문서 툴)
✅ Jasper (글쓰기 AI)
✅ Canva (디자인)
✅ Grammarly (교정)
✅ 10-20개 툴 동시 운영

→ 수익 다변화, 리스크 분산
```

---

### 2️⃣ **쿠키 지속 기간 확인**
```
- 30일: Canva, Notion
- 60일: 대부분 SaaS
- 90일: Grammarly (최고!)

→ 긴 쿠키 기간 = 높은 전환율
```

---

### 3️⃣ **고가 제품 우선**
```
저가:
- Grammarly: $12/월 → $2.40 커미션

고가:
- Jasper: $59/월 → $17.70 커미션
- Canva Teams: $120/년 → $72 커미션

→ 같은 클릭, 더 높은 수익
```

---

### 4️⃣ **뉴스레터 활용**
```
1. 이메일 리스트 구축
2. 주간 AI 툴 추천 발송
3. 어필리에이트 링크 포함

전환율: 이메일(5-10%) > 웹사이트(1-2%)
```

---

### 5️⃣ **시즌 프로모션 활용**
```
할인 시즌:
- 블랙 프라이데이 (11월)
- 사이버 먼데이
- 연말 세일 (12월)
- 신년 프로모션 (1월)

→ 평소보다 2-3배 높은 전환율
```

---

## ❓ FAQ

### Q1. 제휴 프로그램 가입이 거부되었어요
**A:** 다음을 확인하세요:
- 사이트가 실제로 배포되었는지
- 트래픽이 있는지 (일부는 최소 1,000방문/월 요구)
- 콘텐츠 품질
- 대안: 제휴 네트워크(Impact.com) 이용

---

### Q2. 링크를 넣었는데 추적이 안 돼요
**A:** 체크리스트:
1. ✅ affiliateUrl 필드에 올바르게 입력했는지
2. ✅ 링크에 추적 파라미터가 포함되어 있는지
3. ✅ 제휴사 대시보드에서 클릭 확인
4. ✅ 브라우저 쿠키 차단 설정 확인
5. ✅ 24-48시간 후 대시보드 재확인

---

### Q3. 수익이 언제 들어오나요?
**A:** 제휴사마다 다름:
- **Notion**: 매월 1일 정산 (PayPal)
- **Jasper**: 매월 15일 정산 (Stripe)
- **Impact.com**: 매월 말 정산
- 대부분 60-90일 후 (환불 기간 고려)

---

### Q4. 최소 정산 금액이 있나요?
**A:**
- Notion: $50
- Jasper: $100
- Impact.com: $10
- 도달 전까지 누적됨

---

### Q5. 세금은 어떻게 되나요?
**A:**
- 소득으로 간주됨
- 연간 수익 신고 필요
- 프리랜서/사업자 등록 권장
- 세무사 상담 추천

---

### Q6. 클릭은 많은데 구매가 없어요
**A:** 전환율 향상 방법:
1. 정확한 타겟 대상 설정
2. 가치있는 콘텐츠 제공 (리뷰, 튜토리얼)
3. CTA 버튼 개선
4. 로딩 속도 최적화
5. 신뢰도 구축 (후기, 사용 예시)

---

## 📈 예상 수익 계산기

### 예시 1: 소규모 사이트
```
월 방문자: 10,000명
클릭률: 5% = 500 클릭
전환율: 2% = 10명 구매
평균 커미션: $30

월 수익: $300
연 수익: $3,600
```

---

### 예시 2: 중규모 사이트
```
월 방문자: 100,000명
클릭률: 5% = 5,000 클릭
전환율: 2% = 100명 구매
평균 커미션: $30

월 수익: $3,000
연 수익: $36,000
```

---

### 예시 3: 대규모 사이트
```
월 방문자: 1,000,000명
클릭률: 5% = 50,000 클릭
전환율: 2% = 1,000명 구매
평균 커미션: $30

월 수익: $30,000
연 수익: $360,000
```

---

## 🚀 시작하기

### 오늘 바로 할 수 있는 것:

1. ✅ **Notion 제휴 프로그램 가입**
   - URL: https://affiliate.notion.so
   - 승인: 1-3일
   - 가장 쉽고 인기 많음

2. ✅ **Admin에서 링크 입력**
   - admin.html 접속
   - Notion 툴 수정
   - 어필리에이트 링크 입력

3. ✅ **테스트**
   - 상세 페이지 접속
   - "사이트 가기" 클릭
   - 링크 확인

4. ✅ **대시보드 확인**
   - 24시간 후 클릭 확인
   - 30일 후 수익 확인

---

## 📞 지원

문제가 있으시면:
1. 제휴사 지원팀에 문의
2. README.md 참고
3. ADMIN_GUIDE.md 참고

---

## 🎯 다음 단계

### Phase 1 (완료) ✅
- [x] affiliateUrl 필드 추가
- [x] Admin 입력 필드
- [x] 자동 링크 교체

### Phase 2 (선택)
- [ ] Google Analytics 연동
- [ ] UTM 파라미터 자동 생성
- [ ] 클릭 통계 대시보드

### Phase 3 (고급)
- [ ] 자체 추적 시스템
- [ ] A/B 테스팅
- [ ] 전환율 최적화

---

**수익 창출을 시작하세요! 💰**

*Made with 🤖 by AI연구소*
