# Activity Specification Pack Generator

HTML5 기반의 교육용 액티비티 스펙 생성기입니다.

## 기능

### 주요 기능
1. **📥 Activity Import (NEW!)**
   - JSON 파일에서 액티비티 Import
   - XLSX 파일에서 액티비티 Import
   - URL/API에서 액티비티 Import
   - 자동 타입 감지 및 필드 매핑
   - 단일 또는 다중 액티비티 배치 Import
   - 📖 **자세한 사용법**: [IMPORT_GUIDE.md](IMPORT_GUIDE.md) 참조

2. **4가지 액티비티 타입 지원**
   - 4지선다 (Multiple Choice)
   - 드래그앤드랍 (Drag & Drop)
   - 선긋기 (Line Match)
   - 음성인식 (Speech Recognition)

3. **XLSX 스펙 문서 생성**
   - 표준 필드 입력
   - 액티비티별 상세 스펙
   - 자동 자산(Asset) 목록 생성

4. **다국어 지원 (Localization)**
   - CSV/JSON Import/Export
   - 다국어 텍스트 및 오디오 매핑

5. **자동 테스트**
   - 빌트인 테스트 스위트

## 사용 방법

### 1. 서버 실행
```bash
python3 -m http.server 8000
```

### 2. 브라우저 접속
브라우저에서 다음 URL로 접속:
- 로컬: `http://localhost:8000/Activity_Specification_Pack_v1_Seoul_2025-11-10.html`
- 또는: `http://localhost:8000/index.html` (단일 파일 이름 변경 후)

### 3. 액티비티 추가

#### 방법 A: 수동 추가
- "Activities" 섹션에서 원하는 타입의 버튼 클릭
- 각 카드의 필드를 채움

#### 방법 B: Import로 추가 (권장! ⭐)
- **"📥 Import Activity"** 버튼 클릭
- JSON, XLSX 파일 또는 URL에서 액티비티 불러오기
- 미리보기 확인 후 Import 확정
- 📖 **상세 가이드**: [IMPORT_GUIDE.md](IMPORT_GUIDE.md)

#### 테스트용 샘플 파일
- `sample_activity.json` - 단일 액티비티
- `sample_activities_array.json` - 3개 액티비티

### 4. XLSX 생성
- "XLSX 생성 + 자산 CSV 동시 출력" 버튼 클릭
- 3개의 파일 자동 다운로드:
  - Activity_Specification_Pack.xlsx (메인 스펙 문서)
  - Activity_Specification_Pack_assets.csv (자산 목록)
  - Activity_Specification_Pack_loc.csv/json (다국어 데이터)

## 기술 스택

- HTML5
- Tailwind CSS (CDN)
- SheetJS (XLSX) (CDN)
- Vanilla JavaScript

## 파일 구조

```
webapp/
├── index.html                                    # 메인 애플리케이션 (개선된 버전)
├── Activity_Specification_Pack_v1_Seoul_2025-11-10.html  # 원본 파일
├── README.md                                     # 이 파일
├── IMPORT_GUIDE.md                               # Import 기능 상세 가이드 ⭐
├── TEST_RESULTS.md                               # 테스트 결과 문서
├── SUMMARY.md                                    # 프로젝트 전체 요약
├── sample_activity.json                          # 샘플 단일 액티비티 ⭐
├── sample_activities_array.json                  # 샘플 다중 액티비티 ⭐
├── test_functionality.js                         # 기본 구조 테스트
├── test_browser.js                               # 통합 테스트
├── test_import_feature.js                        # Import 기능 테스트 ⭐
├── validate_code.js                              # 에러 핸들링 검증
└── final_test.js                                 # 전체 기능 테스트
```

## 개발

### 로컬 개발 환경
Python 3가 설치되어 있으면 즉시 사용 가능합니다.

### 테스트
애플리케이션 내 "Run Tests" 버튼을 클릭하여 기본 기능 테스트를 실행할 수 있습니다.

또는 Node.js로 테스트 실행:
```bash
node test_functionality.js    # 기본 구조 테스트
node test_browser.js           # 통합 테스트
node test_import_feature.js    # Import 기능 테스트
node final_test.js             # 전체 기능 테스트
```

## 주의사항

- Tailwind CSS CDN은 프로덕션 환경에서는 권장되지 않습니다. 프로덕션 배포 시 PostCSS 플러그인이나 Tailwind CLI를 사용하세요.
- 모든 예시 데이터는 초기값으로 자동 채워집니다.

## 라이선스

내부 프로젝트용
