import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // 추가된 내용
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F5F5F5",
          dark: "#1a202c",
        },
        darkTrack: "#1e1e1e", // 다크 모드 트랙 색상
        darkThumb: "#3a3a3a", // 다크 모드 핸들 색상
        lightTrack: "#e2e8f0", // 라이트 모드 트랙 색상
        lightThumb: "#a0aec0", // 라이트 모드 핸들 색상
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")], // 플러그인 유지
};

export default config;
