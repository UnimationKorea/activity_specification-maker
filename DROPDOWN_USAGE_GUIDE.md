# Smart Dropdown 사용 가이드

## 📖 개요

Standards 섹션의 모든 입력 필드가 스마트 드롭다운 방식으로 업그레이드되었습니다. 미리 정의된 옵션에서 선택하거나, 필요시 직접 입력할 수 있습니다.

## 🎯 주요 특징

### 1. 빠른 선택
- 드롭다운에서 일반적인 값을 바로 선택
- 입력 오류 방지
- 표준화된 값 사용

### 2. 유연한 커스텀 입력
- "✏️ 직접 입력..." 옵션 선택
- 원하는 값을 자유롭게 입력
- 특수한 설정값 지원

## 📝 사용 방법

### 방법 1: 미리 정의된 옵션 선택

```
1. 드롭다운 클릭
   ↓
2. 원하는 옵션 선택
   ↓
3. 자동으로 값이 설정됨
```

**예시: Project 필드**
- 자체 프로젝트 (EduCore) ✓
- LMS 프로젝트
- 외부 프로젝트
- 파트너 프로젝트
- ✏️ 직접 입력...

### 방법 2: 직접 입력

```
1. 드롭다운 클릭
   ↓
2. "✏️ 직접 입력..." 선택
   ↓
3. 텍스트 입력 박스 나타남
   ↓
4. 원하는 값 입력
   ↓
5. 입력 완료
```

**예시: 커스텀 프로젝트 이름**
```
✏️ 직접 입력... (선택)
  ↓
[ My Special Project 2025 ] (입력)
```

## 🗂️ 필드별 옵션 목록

### 프로젝트 정보

#### Project (stdProject)
- 자체 프로젝트 (EduCore)
- LMS 프로젝트
- 외부 프로젝트
- 파트너 프로젝트

#### Activity Family (stdFamily)
- Core-Interactive
- Core-Assessment
- Core-Reading
- Core-Math
- Advanced-Lab

#### Spec Version (stdVersion)
- 1.0
- 1.1
- 1.2
- 2.0

#### Author (stdAuthor)
- Content Engineering
- Product Team
- Design Team
- External Partner

### 디바이스 & 브라우저

#### Target Devices (stdDevices)
- Desktop/Tablet/Mobile
- Desktop only
- Mobile only
- Tablet/Mobile

#### Browser Support (stdBrowsers)
- Chrome 120+, Edge 120+, Safari 17+
- Chrome 100+, Edge 100+, Safari 15+
- Modern browsers only

#### Min Resolution (stdRes)
- 1280x720 (desktop), 1024x600 (tablet), 360x640 (mobile)
- 1920x1080 (desktop), 1024x768 (tablet)
- 1024x768 minimum

#### Orientation (stdOrient)
- Auto; lock when critical
- Portrait only
- Landscape only
- Auto (no lock)

### 디자인 시스템

#### Design System (stdDesign)
- Tailwind + shadcn/ui tokens
- Material Design
- Bootstrap
- Custom Design System

#### Primary Font (stdFont)
- Noto Sans KR
- Roboto
- Open Sans
- Pretendard
- Spoqa Han Sans Neo

#### Fallback Fonts (stdFallback)
- Arial, Helvetica, sans-serif
- system-ui, sans-serif
- Georgia, serif

#### Base Unit (stdBase)
- 4 (px)
- 8 (px)
- 16 (px)

#### Color Tokens (stdColors)
- primary, secondary, success, warn, error
- primary, secondary, tertiary
- brand, neutral, semantic

### 미디어 포맷

#### Audio Format (stdAudio)
- mp3 (192kbps) + ogg fallback
- mp3 (128kbps)
- aac (256kbps)
- m4a preferred

#### Image Format (stdImage)
- webp preferred, png for alpha
- png only
- jpg for photos, png for graphics
- svg preferred

#### Lottie Version (stdLottie)
- 5.7+
- 5.0+
- 4.0+
- Not used

#### Video Format (stdVideo)
- mp4 (H.264), webm fallback
- mp4 only
- webm only
- hls streaming

#### Frame Rate (stdFPS)
- 60
- 30
- 24
- 120

### 성능 & 설정

#### Max Package Size (stdMaxSize)
- 10 MB
- 5 MB
- 20 MB
- 50 MB
- 100 MB

#### Performance Budget (stdPerf)
- TTI < 2.5s on 3G Fast; 60fps anim
- TTI < 1.5s; 60fps
- TTI < 3s; 30fps
- No specific budget

#### Offline Support (stdOffline)
- Service Worker optional
- Service Worker required
- Full offline support
- Online only

#### Network Retry Policy (stdRetry)
- 3 retries, exp backoff
- 5 retries, linear
- No retry
- 3 retries, fixed delay

#### Security Notes (stdSec)
- No PII in logs; signed URLs for assets
- Full encryption
- OAuth 2.0 required
- Public access

#### Versioning Rule (stdSemver)
- Semantic: major.minor.patch
- Date-based: YYYY.MM.DD
- Sequential: v1, v2, v3

## 💡 사용 팁

### 1. 일반적인 프로젝트
대부분의 경우 드롭다운에서 선택하면 충분합니다.
```
Project: 자체 프로젝트 (EduCore)
Activity Family: Core-Interactive
Spec Version: 1.1
Author: Content Engineering
```

### 2. 특수한 프로젝트
커스텀 값이 필요한 경우 직접 입력을 사용합니다.
```
Project: [✏️ 직접 입력] → "Partnership with ABC Corp 2025"
Activity Family: [✏️ 직접 입력] → "Custom-Enterprise"
```

### 3. 혼합 사용
일부 필드는 표준 값, 일부는 커스텀 값을 사용할 수 있습니다.
```
Project: 자체 프로젝트 (EduCore) (드롭다운)
Author: [✏️ 직접 입력] → "Special Team Alpha" (커스텀)
```

## 🔄 값 변경하기

### 드롭다운 옵션 → 다른 옵션
1. 드롭다운 다시 클릭
2. 새로운 옵션 선택
3. 값 자동 업데이트

### 드롭다운 옵션 → 커스텀 입력
1. 드롭다운 클릭
2. "✏️ 직접 입력..." 선택
3. 입력 박스에서 값 입력

### 커스텀 입력 → 드롭다운 옵션
1. 드롭다운 클릭
2. 원하는 옵션 선택
3. 커스텀 입력 박스 사라지고 선택한 값으로 변경

## 📊 데이터 내보내기

스마트 드롭다운은 기존 XLSX 내보내기와 완벽하게 호환됩니다:
- ✅ 드롭다운 선택 값 → XLSX 저장
- ✅ 커스텀 입력 값 → XLSX 저장
- ✅ 기존 내보내기 기능 그대로 사용

"Generate XLSX Pack" 버튼을 클릭하면 모든 값이 자동으로 포함됩니다.

## ⚙️ 기술 정보

### 값 저장 방식
- 드롭다운 선택: 선택한 옵션 값이 숨겨진 input에 자동 저장
- 커스텀 입력: 입력한 텍스트가 직접 input에 저장
- 두 경우 모두 동일한 방식으로 데이터 추출

### 브라우저 호환성
- Chrome 120+ ✓
- Edge 120+ ✓
- Safari 17+ ✓
- Firefox 최신 버전 ✓

## ❓ 자주 묻는 질문

### Q: 커스텀 입력한 값은 저장되나요?
**A**: 네, XLSX 파일에 그대로 저장됩니다. 드롭다운 선택값과 동일하게 취급됩니다.

### Q: 드롭다운에 원하는 옵션이 없으면?
**A**: "✏️ 직접 입력..." 옵션을 선택하여 원하는 값을 자유롭게 입력하세요.

### Q: 커스텀 입력 후 다시 드롭다운으로 돌아갈 수 있나요?
**A**: 네, 언제든지 드롭다운에서 다른 옵션을 선택하면 됩니다.

### Q: 이전 버전 XLSX 파일은 호환되나요?
**A**: 네, 완벽하게 호환됩니다. 이전 파일을 불러와도 문제없이 작동합니다.

### Q: 날짜 필드도 드롭다운인가요?
**A**: 아니요, 날짜 필드는 표준 date picker를 사용합니다.

## 🎓 예제 시나리오

### 시나리오 1: 표준 프로젝트 설정
```
1. Project: "자체 프로젝트 (EduCore)" 선택
2. Activity Family: "Core-Interactive" 선택
3. Spec Version: "1.1" 선택
4. Author: "Content Engineering" 선택
→ 모두 드롭다운에서 빠르게 선택 완료
```

### 시나리오 2: 커스텀 프로젝트 설정
```
1. Project: "✏️ 직접 입력" → "Client XYZ Special Project"
2. Activity Family: "Core-Interactive" 선택 (표준값 사용)
3. Spec Version: "✏️ 직접 입력" → "2.5-beta"
4. Author: "✏️ 직접 입력" → "External Team - ABC"
→ 필요한 부분만 커스텀 입력 사용
```

### 시나리오 3: 실험적 설정
```
1. Design System: "✏️ 직접 입력" → "Experimental Design v3"
2. Primary Font: "✏️ 직접 입력" → "Custom Font Family"
3. Performance Budget: "No specific budget" 선택
→ 실험적 프로젝트를 위한 유연한 설정
```

## 📞 지원

문제가 발생하거나 새로운 드롭다운 옵션 추가가 필요한 경우:
1. GitHub Issues에 요청
2. 개발팀에 문의
3. Pull Request 제출

---

**작성일**: 2025년 11월 10일  
**버전**: 1.0  
**언어**: 한국어
