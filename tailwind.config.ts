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
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")], // 플러그인 유지
};

export default config;
