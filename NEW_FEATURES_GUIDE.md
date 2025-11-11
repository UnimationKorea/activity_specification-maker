# 신규 기능 가이드 (New Features Guide)

## 📅 업데이트 날짜: 2025년 11월 10일

버전 1.2에서 추가된 주요 기능들을 소개합니다.

---

## 🎯 주요 신규 기능 (Major Features)

### 1. 📋 Project ID 필드
- **위치**: Standards 섹션 최상단
- **형식**: `company_seriesgroup_series_book`
- **예시**: `01_01_01_01`, `02_03_04_05`
- **용도**: 프로젝트 고유 식별자로 저장/불러오기 시 사용

### 2. 🎨 Figma 링크 & 미리보기
- **Standards 섹션**: 전체 프로젝트 디자인 참조
- **Activity 카드**: 각 액티비티별 디자인 참조
- **기능**: Figma URL 입력 시 자동 iframe 미리보기

### 3. 🖼️ 이미지 업로드 & 미리보기
- **Standards 섹션**: 프로젝트 전체 디자인 이미지
- **Activity 카드**: 각 액티비티별 디자인 이미지
- **지원 형식**: PNG, JPG, JPEG, WebP
- **저장 방식**: Base64 인코딩으로 프로젝트와 함께 저장

### 4. 📝 액티비티 설명 (Description)
- **위치**: 각 액티비티 카드 하단
- **형식**: 여러 줄 텍스트 입력 (3줄 기본)
- **용도**: 액티비티에 대한 상세 설명 작성

### 5. 💾 프로젝트 저장/불러오기
- **저장**: 모든 입력값, 이미지, 설정을 localStorage에 저장
- **자동 명명**: `projectID_MMDD(nn)` 형식
- **백업**: JSON 파일 자동 다운로드
- **불러오기**: 저장된 프로젝트 목록에서 선택

---

## 📖 상세 사용법

### 1️⃣ Project ID 설정

#### 형식 규칙
```
company_seriesgroup_series_book
01_01_01_01
```

각 부분의 의미:
- **company**: 회사 코드 (01, 02, ...)
- **seriesgroup**: 시리즈 그룹 (01, 02, ...)
- **series**: 시리즈 번호 (01, 02, ...)
- **book**: 책 번호 (01, 02, ...)

#### 사용 방법
1. Standards 섹션 상단의 "Project ID" 필드 찾기
2. 형식에 맞춰 ID 입력 (예: `01_02_03_04`)
3. 이 ID는 프로젝트 저장 시 파일명으로 사용됨

---

### 2️⃣ Figma 링크 사용

#### Standards 섹션 Figma 링크
프로젝트 전체 디자인 시스템이나 스타일 가이드 링크:

1. "Figma Link (Optional)" 필드 찾기
2. Figma 파일 URL 복사하여 붙여넣기
   ```
   https://www.figma.com/file/ABC123/Project-Design
   ```
3. 필드에서 포커스를 벗어나면 (blur) 자동으로 미리보기 생성
4. 미리보기에서 Figma 파일 내용 확인 가능

#### Activity 카드 Figma 링크
각 액티비티별 디자인 상세 링크:

1. 액티비티 카드 하단의 "Figma Link (Optional)" 필드
2. 해당 액티비티의 Figma 디자인 URL 입력
3. 자동 미리보기 생성 (높이: 200px)

**💡 팁**: Figma의 특정 프레임이나 페이지 링크도 사용 가능합니다.

---

### 3️⃣ 이미지 업로드

#### Standards 섹션 이미지
전체 프로젝트 대표 이미지:

1. "Design Image (Optional)" 필드 찾기
2. "파일 선택" 버튼 클릭
3. PNG, JPG, JPEG, WebP 파일 선택
4. 자동으로 미리보기 표시 (최대 높이: 300px)
5. 이미지는 Base64로 인코딩되어 프로젝트에 저장됨

#### Activity 카드 이미지
각 액티비티별 디자인 이미지:

1. 액티비티 카드 하단의 "Design Image (Optional)" 찾기
2. 파일 선택 및 업로드
3. 미리보기 표시 (최대 높이: 200px)

**⚠️ 주의**: 
- 큰 이미지는 파일 크기가 증가할 수 있습니다
- 권장 해상도: 1920x1080 이하
- 권장 파일 크기: 500KB 이하

---

### 4️⃣ 액티비티 설명 작성

#### 사용 방법
1. 액티비티 카드에서 "Activity Description (설명)" 필드 찾기
2. 여러 줄로 상세한 설명 작성
3. 예시:
   ```
   이 액티비티는 학생들이 동물 이름을 영어로 학습하도록 돕습니다.
   4개의 선택지 중 정답을 고르는 형식이며,
   시각적 이미지와 오디오를 함께 제공합니다.
   ```

#### 활용 용도
- 액티비티의 학습 목표 설명
- 사용된 교육 방법론 기록
- 특별한 주의사항이나 팁
- 개발자/디자이너를 위한 노트

**📊 XLSX 출력**: Description 열에 포함되어 출력됩니다.

---

### 5️⃣ 프로젝트 저장하기

#### 저장 방법
1. 헤더의 **💾 Save Project** 버튼 클릭
2. 자동으로 다음 형식으로 저장됨:
   ```
   projectID_MMDD
   또는
   projectID_MMDD(01), projectID_MMDD(02), ...
   ```

#### 저장되는 항목
- ✅ 모든 Standards 필드 값
- ✅ 모든 Activity 카드 데이터
- ✅ 업로드한 이미지 (Base64)
- ✅ Localization 데이터
- ✅ 저장 일시 메타데이터

#### 저장 예시
```
Project ID: 01_02_03_04
저장 날짜: 11월 10일

첫 저장: 01_02_03_04_1110
두 번째 저장: 01_02_03_04_1110(01)
세 번째 저장: 01_02_03_04_1110(02)
```

#### 백업 파일
저장 시 자동으로 JSON 파일도 다운로드됩니다:
- 파일명: `01_02_03_04_1110.json`
- 용도: 브라우저 데이터 손실 시 복구

---

### 6️⃣ 프로젝트 불러오기

#### 불러오기 방법
1. 헤더의 **📂 Load Project** 버튼 클릭
2. 저장된 프로젝트 목록 팝업 표시
   ```
   불러올 프로젝트를 선택하세요:

   1. 01_02_03_04_1110
   2. 01_02_03_04_1110(01)
   3. 02_01_01_01_1109

   숫자를 입력하세요 (취소하려면 Cancel):
   ```
3. 원하는 프로젝트 번호 입력
4. 모든 데이터가 자동으로 복원됨

#### 복원되는 항목
- ✅ Standards 필드 (이미지 포함)
- ✅ 모든 Activity 카드 재생성
- ✅ 이미지 미리보기 복원
- ✅ Figma 링크 (미리보기는 수동 로드)
- ✅ Localization 데이터

**⚠️ 주의**: 
- 기존 데이터는 모두 덮어씌워집니다
- 저장하지 않은 변경사항은 손실됩니다
- 불러오기 전 현재 작업을 저장하세요

---

## 💼 실전 사용 시나리오

### 시나리오 1: 새 프로젝트 시작

```
1. Project ID 설정: 01_03_02_05
2. Standards 정보 입력
3. Figma 디자인 링크 추가
4. Activity 카드 생성 및 작성
5. 각 Activity에 설명 추가
6. 디자인 이미지 업로드
7. 💾 Save Project 클릭
   → 저장명: 01_03_02_05_1110
8. XLSX 생성으로 문서 출력
```

### 시나리오 2: 기존 프로젝트 수정

```
1. 📂 Load Project 클릭
2. 프로젝트 선택 (예: 01_03_02_05_1110)
3. 필요한 부분 수정
4. Activity 추가/삭제
5. 💾 Save Project 클릭
   → 저장명: 01_03_02_05_1110(01)
6. XLSX 재생성
```

### 시나리오 3: 디자인 리뷰 준비

```
1. 프로젝트 불러오기
2. 모든 Activity의 Figma 링크 추가
3. 각 Activity 설명에 리뷰 포인트 작성
4. 대표 이미지 캡처해서 업로드
5. 저장 및 XLSX 생성
6. 팀과 공유
```

---

## 📊 XLSX 출력 변경사항

### Standards 시트 새 열
| 열 이름 | 설명 | 예시 |
|---------|------|------|
| Project_ID | 프로젝트 고유 ID | 01_02_03_04 |
| Figma_Link | Figma 디자인 URL | https://figma.com/... |
| Design_Image | 이미지 첨부 여부 | Attached / None |

### Activity 시트 새 열
| 열 이름 | 설명 | 예시 |
|---------|------|------|
| Description | 액티비티 상세 설명 | 학생들이 동물 이름을... |
| Figma_Link | 액티비티 디자인 URL | https://figma.com/... |
| Design_Image | 이미지 첨부 여부 | Attached / None |

**📝 참고**: 이미지는 Base64 데이터로 저장되지만, XLSX에는 "Attached" 또는 "None"으로만 표시됩니다. 실제 이미지는 프로젝트 저장 데이터(JSON)에 포함됩니다.

---

## 🔧 기술 세부사항

### 이미지 저장 방식
```javascript
// 이미지를 Base64로 인코딩하여 저장
FileReader.readAsDataURL(file)
→ data:image/png;base64,iVBORw0KG...

// 저장 위치
- localStorage: 프로젝트 데이터 내 포함
- JSON 백업: 다운로드된 파일에 포함
- XLSX: "Attached" 텍스트로만 표시
```

### 프로젝트 데이터 구조
```json
{
  "version": "1.2",
  "savedAt": "2025-11-10T12:34:56.789Z",
  "standards": {
    "stdProjectID": "01_02_03_04",
    "stdProject": "자체 프로젝트 (EduCore)",
    "stdFigmaLink": "https://figma.com/...",
    "stdImageUpload": "data:image/png;base64,...",
    ...
  },
  "activities": [
    {
      "type": "4Choice",
      "title": "Find the Animal",
      "description": "학생들이 동물 이름을...",
      "figmaLink": "https://figma.com/...",
      "designImage": "data:image/png;base64,...",
      ...
    }
  ],
  "localizationData": [...]
}
```

### 파일명 생성 로직
```javascript
// generateProjectFileName() 함수
const projectID = "01_02_03_04"
const mmdd = "1110" // 11월 10일

// 기존 저장 파일 확인
existingKeys = ["project_01_02_03_04_1110"]

// 중복 시 번호 추가
fileName = "01_02_03_04_1110(01)"

// localStorage key
storageKey = "project_01_02_03_04_1110(01)"
```

---

## 🎓 자주 묻는 질문 (FAQ)

### Q1: 저장된 프로젝트는 어디에 저장되나요?
**A**: 브라우저의 localStorage에 저장됩니다. 동일한 브라우저에서만 접근 가능하며, 브라우저 데이터를 삭제하면 함께 삭제됩니다. 백업을 위해 자동으로 JSON 파일도 다운로드됩니다.

### Q2: 이미지가 너무 크면 어떻게 되나요?
**A**: Base64 인코딩으로 인해 원본보다 약 33% 더 커집니다. localStorage 용량 제한(보통 5~10MB)을 초과하면 저장이 실패할 수 있으므로, 이미지는 최적화해서 사용하세요.

### Q3: Figma 미리보기가 안 보여요.
**A**: 
- Figma URL이 올바른지 확인
- Figma 파일이 공개(Public) 또는 공유 링크로 설정되어 있는지 확인
- 브라우저에서 iframe 로딩을 차단하지 않는지 확인

### Q4: 프로젝트를 다른 컴퓨터로 옮기려면?
**A**: 
1. Save Project 시 자동 다운로드되는 JSON 파일 보관
2. 다른 컴퓨터에서는 수동으로 JSON 파일 내용을 복사하여 사용
3. 또는 XLSX로 내보낸 후 Import 기능 사용

### Q5: 하루에 여러 번 저장하면?
**A**: 자동으로 번호가 증가합니다:
- 첫 저장: `projectID_1110`
- 두 번째: `projectID_1110(01)`
- 세 번째: `projectID_1110(02)`
- ...

### Q6: Project ID를 나중에 변경하면?
**A**: 새로 저장할 때 새로운 Project ID로 별도 프로젝트가 생성됩니다. 기존 프로젝트는 그대로 유지됩니다.

---

## 🚀 팁 & 트릭

### 💡 팁 1: 템플릿 프로젝트 만들기
자주 사용하는 설정을 템플릿으로 저장:
```
1. Project ID: 00_00_00_00 (템플릿 표시)
2. 공통 Standards 설정
3. 기본 Activity 카드 구성
4. 저장: 00_00_00_00_template
5. 새 프로젝트 시작할 때 불러와서 수정
```

### 💡 팁 2: 백업 루틴
```
주간 백업:
1. 모든 프로젝트 저장 (JSON 자동 다운로드)
2. JSON 파일들을 클라우드 저장소에 업로드
3. localStorage 정리 (오래된 프로젝트 삭제)
```

### 💡 팁 3: 디자인 협업
```
1. Figma 링크를 모든 Activity에 추가
2. 각 Activity 설명에 디자인 요구사항 작성
3. 이미지 업로드로 레퍼런스 공유
4. XLSX 생성하여 디자이너와 공유
```

### 💡 팁 4: 버전 관리
```
Project ID에 버전 포함:
- 01_01_01_01: v1.0
- 01_01_01_02: v1.1
- 01_01_02_01: v2.0

또는 Description에 버전 정보 명시
```

---

## 📞 지원 및 문의

### 문제 발생 시
1. 브라우저 콘솔(F12) 확인
2. 오류 메시지 복사
3. GitHub Issues에 등록

### 기능 요청
- GitHub Issues에 제안사항 작성
- 제목: [Feature Request] ...

### 문서 개선
- 이 가이드에 대한 피드백 환영
- 오타나 개선사항 제보 가능

---

## 📚 관련 문서

- [README.md](README.md) - 프로젝트 전체 개요
- [IMPORT_GUIDE.md](IMPORT_GUIDE.md) - Activity Import 기능
- [DEPLOYMENT.md](DEPLOYMENT.md) - GitHub Pages 배포
- [SMART_DROPDOWN_IMPLEMENTATION.md](SMART_DROPDOWN_IMPLEMENTATION.md) - 스마트 드롭다운 기술 문서
- [DROPDOWN_USAGE_GUIDE.md](DROPDOWN_USAGE_GUIDE.md) - 드롭다운 사용 가이드

---

**마지막 업데이트**: 2025년 11월 10일  
**버전**: 1.2  
**작성자**: Claude (Anthropic)
