"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

import useDarkMode from "@/utils/useDarkMode";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <html lang="ko" className={theme}>
      <body className={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />

        {/* 페이지 콘텐츠 */}
        <main className="container mx-auto mt-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
