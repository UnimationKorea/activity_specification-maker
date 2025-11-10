# Activity Import 기능 가이드

## 📥 개요

Activity Specification Pack Generator에 **Activity Import** 기능이 추가되었습니다!  
이제 기존에 개발된 액티비티 데이터를 파일이나 URL에서 불러와서 자동으로 스펙 필드를 채울 수 있습니다.

---

## 🎯 주요 기능

### 1. 다양한 Import 방식 지원
- ✅ **JSON 파일** - 단일 또는 다중 액티비티
- ✅ **XLSX 파일** - 기존 스펙 문서
- ✅ **URL/API** - 원격 액티비티 데이터

### 2. 자동 액티비티 타입 감지
- 데이터 구조를 분석하여 자동으로 타입 결정
- 4Choice, DragDrop, LineMatch, Speech 지원

### 3. 완전한 필드 매핑
- 모든 액티비티 타입의 필드 자동 매핑
- 공통 필드 및 타입별 특화 필드 지원

### 4. 미리보기 및 확인
- Import 전 데이터 미리보기
- 확인 후 Import로 안전한 작업

---

## 🚀 사용 방법

### 방법 1: JSON 파일에서 Import

#### 1단계: Import 버튼 클릭
애플리케이션에서 **"📥 Import Activity"** 버튼을 클릭합니다.

#### 2단계: 파일 선택
모달 창에서 **"📁 파일에서 가져오기"** 버튼을 클릭하고 JSON 파일을 선택합니다.

#### 3단계: 미리보기 확인
Import될 데이터가 표시됩니다. 내용을 확인하세요.

#### 4단계: Import 확정
**"✅ Import 확정"** 버튼을 클릭하면 자동으로 액티비티 카드가 생성됩니다!

---

### 방법 2: XLSX 파일에서 Import

#### 1단계: Import 버튼 클릭
**"📥 Import Activity"** 버튼 클릭

#### 2단계: XLSX 파일 선택
**"📁 파일에서 가져오기"** → XLSX 파일 선택

시스템이 자동으로:
- `Activity-4Choice` 시트
- `Activity-DragDrop` 시트
- `Activity-LineMatch` 시트
- `Activity-Speech` 시트

위 시트들을 읽어서 모든 액티비티를 Import합니다.

#### 3단계: 미리보기 및 확정
데이터 확인 후 **"✅ Import 확정"**

---

### 방법 3: URL/API에서 Import

#### 1단계: Import 버튼 클릭
**"📥 Import Activity"** 버튼 클릭

#### 2단계: URL 입력 모드
**"🌐 URL에서 가져오기"** 버튼 클릭

#### 3단계: URL 입력
Activity JSON을 반환하는 URL 입력:
```
https://api.example.com/activities/MC4-0001
```

또는 JSON 파일 URL:
```
https://example.com/activities.json
```

#### 4단계: 데이터 가져오기
**"🔄 URL에서 불러오기"** 클릭

#### 5단계: 미리보기 및 확정
데이터 확인 후 **"✅ Import 확정"**

---

## 📋 JSON 형식 가이드

### 단일 액티비티 (4Choice 예시)

```json
{
  "Activity_ID": "MC4-0099",
  "Title": "Choose the Correct Animal",
  "Activity_Type": "4Choice",
  "Grade_Level": "G2~G4",
  "Language": "EN",
  "Duration_s": 45,
  "Act_Code": "1051",
  "Level": "BR-400",
  "Difficulty": "Easy",
  "Question_Text": "Which animal says 'moo'?",
  "Has_Timer": true,
  "Time_Limit_s": 30,
  "Option_A_Text": "Cow",
  "Option_A_Image": "img/cow.png",
  "Option_A_Audio": "audio/cow.mp3",
  "Option_A_isCorrect": true,
  "Option_B_Text": "Dog",
  "Option_B_Image": "img/dog.png",
  "Option_B_Audio": "audio/dog.mp3",
  "Option_B_isCorrect": false,
  "Option_C_Text": "Cat",
  "Option_C_Image": "img/cat.png",
  "Option_C_Audio": "audio/cat.mp3",
  "Option_C_isCorrect": false,
  "Option_D_Text": "Pig",
  "Option_D_Image": "img/pig.png",
  "Option_D_Audio": "audio/pig.mp3",
  "Option_D_isCorrect": false,
  "Feedback_Correct": "Excellent! A cow says 'moo'!",
  "Feedback_Incorrect": "Try again. Listen to the sound."
}
```

### 다중 액티비티 (배열 형식)

```json
[
  {
    "Activity_ID": "MC4-0101",
    "Title": "Animal Sounds",
    "Activity_Type": "4Choice",
    ...
  },
  {
    "Activity_ID": "DD-0202",
    "Title": "Match Fruits",
    "Activity_Type": "DragDrop",
    ...
  },
  {
    "Activity_ID": "STT-0401",
    "Title": "Say Hello",
    "Activity_Type": "Speech",
    ...
  }
]
```

---

## 🔍 자동 타입 감지 규칙

시스템이 다음 필드를 기준으로 자동으로 액티비티 타입을 감지합니다:

| 타입 | 감지 기준 필드 |
|------|--------------|
| **4Choice** | `Question_Text`, `Option_A_Text` |
| **DragDrop** | `Drag_Mode`, `Item_ID` |
| **LineMatch** | `Line_Style`, `Left_Node_ID` |
| **Speech** | `Target_Pronunciation`, `STT_Engine` |

또는 `Activity_Type` 필드가 명시되어 있으면 해당 타입을 사용합니다.

---

## 📊 필드 매핑 상세

### 공통 필드 (모든 타입)
- `Activity_ID` → Activity ID
- `Title` → Title
- `Grade_Level` → Grade Level
- `Language` → Language
- `Duration_s` → Duration (s)
- `Act_Code` → actCode
- `Level` → Level
- `Difficulty` → Difficulty

### 4Choice 전용 필드
- `Question_Text` → Question Text
- `Has_Timer`, `Time_Limit_s` → Timer
- `Option_A_Text`, `Option_A_Image`, `Option_A_Audio`, `Option_A_isCorrect` → Option A
- (B, C, D도 동일)
- `Feedback_Correct` → Feedback (correct)
- `Feedback_Incorrect` → Feedback (incorrect)

### DragDrop 전용 필드
- `Drag_Mode` → Drag Mode
- `Drop_Strategy`, `Snap_Tolerance_px` → Drop Strategy / Snap
- `Feedback_Correct`, `Feedback_Incorrect` → Feedback

### LineMatch 전용 필드
- `Line_Style`, `Line_Width_px`, `Line_Color_Token` → Line Style / Width / Color
- `Feedback_Correct`, `Feedback_Incorrect` → Feedback

### Speech 전용 필드
- `Prompt_Text` → Prompt Text
- `Acceptable_WER`, `Acceptable_Pron_Score`, `Max_Recording_s` → STT Params
- `Feedback_Correct` → Feedback (correct)
- `Feedback_NeedsWork` → Feedback (needs work)

---

## 🧪 테스트용 샘플 파일

프로젝트에 2개의 샘플 파일이 포함되어 있습니다:

### 1. `sample_activity.json`
- 단일 4Choice 액티비티
- "Which animal says 'moo'?" 예제

### 2. `sample_activities_array.json`
- 3개의 액티비티 포함
  - Animal Sounds (4Choice)
  - Match Fruits (DragDrop)
  - Say Hello (Speech)

### 테스트 방법
1. 애플리케이션에서 **"📥 Import Activity"** 클릭
2. **"📁 파일에서 가져오기"** 클릭
3. `sample_activity.json` 또는 `sample_activities_array.json` 선택
4. 미리보기 확인 후 Import!

---

## ⚠️ 주의사항

### 필드 누락
- 필수 필드가 없어도 Import는 가능합니다
- 누락된 필드는 빈 값으로 표시됩니다
- Import 후 수동으로 채워주세요

### 타입 감지 실패
- 자동 감지가 실패하면 기본값(4Choice)으로 설정됩니다
- `Activity_Type` 필드를 명시하면 정확합니다

### XLSX Import
- `Activity-*` 형식의 시트 이름을 찾습니다
- 해당 시트가 없으면 에러가 발생합니다
- 본 앱에서 생성한 XLSX 파일을 사용하는 것이 가장 안전합니다

### URL Import
- CORS 정책에 따라 일부 URL은 접근이 제한될 수 있습니다
- JSON 형식의 응답만 지원됩니다
- 인증이 필요한 API는 현재 지원하지 않습니다

---

## 🎯 활용 사례

### 사례 1: 기존 스펙 재사용
이전에 작성한 XLSX 스펙 문서를 Import하여 새 버전 작성의 시작점으로 사용

### 사례 2: API 연동
백엔드 시스템에서 액티비티 데이터를 가져와 즉시 스펙 생성

### 사례 3: 배치 작업
여러 액티비티를 JSON 배열로 준비한 후 한 번에 Import

### 사례 4: 팀 협업
팀원이 작성한 액티비티 JSON을 공유받아 Import

---

## 🔧 문제 해결

### Q: Import 버튼이 보이지 않아요
**A:** 브라우저를 새로고침(F5)하세요. 캐시를 지우고 다시 로드해보세요.

### Q: JSON 파일을 선택했는데 아무 일도 일어나지 않아요
**A:** 브라우저 콘솔(F12)을 열어서 에러 메시지를 확인하세요. JSON 형식이 올바른지 검증하세요.

### Q: XLSX Import 시 "Activity 시트를 찾을 수 없습니다" 에러
**A:** XLSX 파일에 `Activity-4Choice`, `Activity-DragDrop` 등의 시트가 있는지 확인하세요.

### Q: URL Import가 실패합니다
**A:** 
- URL이 올바른지 확인
- CORS 정책 확인
- JSON 응답 형식 확인
- 네트워크 연결 확인

### Q: Import 후 일부 필드가 비어있어요
**A:** 원본 데이터에 해당 필드가 없었던 것입니다. 수동으로 입력해주세요.

---

## 📚 추가 자료

- **README.md** - 전체 애플리케이션 사용법
- **TEST_RESULTS.md** - 테스트 결과 및 검증 내역
- **SUMMARY.md** - 프로젝트 전체 요약

---

## 🎉 결론

Activity Import 기능으로 더 빠르고 효율적인 스펙 작성이 가능합니다!

- ⏱️ **시간 절약**: 수동 입력 대신 Import
- 🔄 **재사용성**: 기존 데이터 활용
- 📊 **배치 작업**: 한 번에 여러 액티비티
- 🤝 **협업**: 팀원과 데이터 공유

**Happy Importing! 🚀**
