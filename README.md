// generateReadme.ts
import fs from 'fs';

const projectStructure = `
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┣ 📜Details.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂intro
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┗ 📜RotationContent.tsx
 ┃ ┣ 📂_providers
 ┃ ┃ ┗ 📜Provider.tsx
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂champion
 ┃ ┃ ┣ 📂details
 ┃ ┃ ┃ ┣ 📜ChampionInfo.tsx
 ┃ ┃ ┃ ┣ 📜ChampionSkills.tsx
 ┃ ┃ ┃ ┗ 📜ChampionSkins.tsx
 ┃ ┃ ┣ 📜ChampionCard.tsx
 ┃ ┃ ┗ 📜ChampionList.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜ContentCard.tsx
 ┃ ┃ ┗ 📜ContentCardList.tsx
 ┃ ┣ 📂intro
 ┃ ┃ ┣ 📜FifthContent.tsx
 ┃ ┃ ┣ 📜FirstContent.tsx
 ┃ ┃ ┣ 📜FourthContent.tsx
 ┃ ┃ ┣ 📜SecondContent.tsx
 ┃ ┃ ┗ 📜ThirdContent.tsx
 ┃ ┣ 📂item
 ┃ ┃ ┗ 📜ItemCard.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜RotationSEO.tsx
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜CinematicBackground.tsx
 ┃ ┃ ┣ 📜DarkMode.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┣ 📂constants
 ┃ ┗ 📜apiUrls.ts
 ┣ 📂data
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┣ 📂types
 ┃ ┣ 📜champions.ts
 ┃ ┣ 📜items.ts
 ┃ ┗ 📜rotation.ts
 ┗ 📂utils
 ┃ ┣ 📜cleanText.ts
 ┃ ┣ 📜rotateApi.ts
 ┃ ┣ 📜serverApi.ts
 ┃ ┗ 📜sortChampionByName.ts
`;

const readmeContent = `# Riot Project

## 프로젝트 파일 구조

\`\`\`
${projectStructure}
\`\`\`

## 주요 폴더 설명

### 📂 app
Next.js의 라우트 및 페이지 설정. 각 디렉터리는 라우트를 나타냅니다.

- \`api/rotation\`: 로테이션 관련 API 엔드포인트.
- \`champions\`: 챔피언 상세 페이지와 라우팅 처리.
- \`items\`: 아이템 페이지 구성.
- \`rotation\`: 주간 로테이션 페이지 구성.
- \`_providers\`: React Context Provider 설정.

### 📂 components
프로젝트에서 재사용 가능한 UI 컴포넌트 모음.

- \`champion\`: 챔피언과 관련된 컴포넌트.
- \`home\`: 홈 화면에서 사용하는 카드 컴포넌트.
- \`intro\`: 게임 소개 페이지를 구성하는 콘텐츠 컴포넌트.
- \`item\`: 아이템과 관련된 컴포넌트.
- \`rotation\`: 로테이션 관련 UI 컴포넌트.
- \`ui\`: 헤더, 푸터, 다크모드 스위치 등 공통 UI.

### 📂 constants
API URL과 같은 상수를 정의.

### 📂 data
정적 데이터나 더미 데이터를 저장.

### 📂 styles
Tailwind 기반 글로벌 스타일 정의.

### 📂 types
TypeScript로 정의된 타입 파일.

### 📂 utils
프로젝트에서 활용하는 유틸리티 함수.

## 설치 및 실행 방법

1. 프로젝트 클론:
\`\`\`bash
git clone https://github.com/your-repo/riot-project.git
\`\`\`

2. 의존성 설치:
\`\`\`bash
npm install
\`\`\`

3. 개발 서버 실행:
\`\`\`bash
npm run dev
\`\`\`

4. 프로덕션 빌드:
\`\`\`bash
npm run build
\`\`\`

5. 프로덕션 서버 실행:
\`\`\`bash
npm start
\`\`\`

---

## 기여 방법

1. 이 프로젝트를 포크합니다.
2. 새로운 브랜치를 생성합니다: \`git checkout -b feature/your-feature-name\`
3. 변경 사항을 커밋합니다: \`git commit -m "Add your feature"\`
4. 브랜치에 푸시합니다: \`git push origin feature/your-feature-name\`
5. 풀 리퀘스트를 생성합니다.

---

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자유롭게 수정하고 배포할 수 있습니다.
`;

// README 파일 생성
fs.writeFileSync('./README.md', readmeContent, 'utf8');
console.log('README.md 파일이 생성되었습니다!');
