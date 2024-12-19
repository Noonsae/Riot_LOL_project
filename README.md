# 📑 프로젝트 소개
리그 오브 레전드 데이터를 기반으로 챔피언, 아이템, 로테이션 정보를 제공하는 웹 애플리케이션입니다.
Next.js와 TypeScript를 사용하여 개발되었으며, 스타일은 Tailwind CSS를 활용하였습니다.

---

## 1. 프로젝트 기능
#### - 챔피언 목록 페이지 (/champions) : SSR 방식으로 구현
#### - 챔피언 디테일 페이지 (/champions/[id]) : CSR 방식으로 구현
#### - 아이템 목록 페이지 (/items) : SSR 방식으로 구현
#### - 게임 소개 페이지 (/intro) : SSR 방식으로 구현
#### - 챔피언 로테이션 페이지 (/rotation) : CSR 방식으로 구현

---

## 2. 폴더 구조
```
📦src
 ┣ 📂app                    # Next.js 라우트 및 페이지 설정
 ┃ ┣ 📂api/rotation         # 로테이션 관련 API 엔드포인트
 ┃ ┣ 📂champions            # 챔피언 상세 페이지
 ┃ ┣ 📂intro                # 게임 소개 페이지
 ┃ ┣ 📂items                # 아이템 페이지
 ┃ ┣ 📂rotation             # 로테이션 페이지
 ┃ ┣ 📂_providers           # tanstackQuery Provider
 ┃ ┣ 📜error.tsx            # 에러 상태 페이지
 ┃ ┣ 📜layout.tsx           # 전역 레이아웃
 ┃ ┣ 📜loading.tsx          # 로딩 상태 스크린
 ┃ ┗ 📜page.tsx             # 홈 페이지
 ┣ 📂components             # 컴포넌트 모음
 ┃ ┣ 📂champion             # 챔피언 관련 컴포넌트
 ┃ ┣ 📂home                 # 홈 화면 컴포넌트
 ┃ ┣ 📂intro                # 게임 소개 컴포넌트
 ┃ ┣ 📂item                 # 아이템 관련 컴포넌트
 ┃ ┣ 📂rotation             # 로테이션 관련 컴포넌트
 ┃ ┗ 📂ui                   # 공통 UI 컴포넌트
 ┣ 📂constants              # 상수 파일
 ┣ 📂styles                 # 글로벌 스타일(CSS)
 ┣ 📂types                  # 타입 정의(TypeScript)
 ┣ 📂utils                  # 유틸리티 함수
 ┗ 📜README.md              # 프로젝트 설명 파일

```
---

## 3. 로딩 및 에러 핸들링 
#### - Skeleton UI : 페이지 로딩 중 사용자 경험을 향상시키기 위해 각 페이지에 구현
#### - error.tsx를 통해 각 경로에서 발생하는 에러를 처리

---

## 4. 동적 테마
#### - next-themes 라이브러리를 활용하여 동적인 테마 ( 라이트 테마 / 다크 테마 )를 구현

---

## ⚙ 기술 스택
#### 프로젝트에 사용한 프레임워크 및 라이브러리
#### - React
#### - Next.js 14
#### - TypeScript
#### - Tailwind CSS
#### - Tanstack Query
#### - next-themes
#### - lucide-react
#### - tailwindcss-textshadow

---

## 💻 화면 구성
#### 1. Home
![image](https://github.com/user-attachments/assets/e7ad3b23-6657-4834-b014-dcbebce64fc7)
#### 2. Intro
![image](https://github.com/user-attachments/assets/c29ba28b-9701-415b-a4fb-b2efc9932998)
![image](https://github.com/user-attachments/assets/52997bb4-3b09-46e2-b477-d2fe8b4ffb78)
#### 3. Champion
![image](https://github.com/user-attachments/assets/b51b0d9b-2ae7-4095-91a9-a2151c29451c)
#### 4. Champion/details
![image](https://github.com/user-attachments/assets/22d9a095-17f3-4314-8861-7477d9ebedce)
#### 5. Item
![image](https://github.com/user-attachments/assets/389602cd-e9b6-4ccb-ba8b-69e6be4cbf66)
#### 6. Rotation
![image](https://github.com/user-attachments/assets/4cd9ffeb-6ac5-4825-bea4-93708b12a2f0)
#### 7. 동적 테마 ( 화이트 모드 )
![image](https://github.com/user-attachments/assets/806ec253-68c1-4b9f-87c8-4bb8de2cfccf)
#### 8 . 로딩 상태 페이지
![image](https://github.com/user-attachments/assets/22c49d90-4165-428c-8622-e63ce32d3aee)

---

## 🛠 설치 및 실행
#### 로컬에서 실행

 1. 프로젝트 클론
```bash
git clone https://github.com/Noonsae/Riot_LOL_project.git
cd next-lol
```
 2. 패키지 설치
```bash
npm install
```
 3. 개발 서버 실행 : http://localhost:3000에 접속하여 확인
```bash
npm run dev
```
 4. 빌드 및 프로덕션 실행
```bash
npm run build
npm start
```







