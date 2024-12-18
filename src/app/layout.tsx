import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";

import MyProvider from "./providers/Provider";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LoLa",
  description: "Riot API를 활용한 리그 오브 레전드 정보 앱 만들기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/icons/bee.png" sizes="any" />
      <MyProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <body className="dark:bg-[#0a1428]">
            <Header />            
              <main className="inner mt-[80px] pt-[80px] min-h-[calc(100vh-200px)]">
                {children}
              </main>
            
            <Footer />
          </body>
        </ThemeProvider>
      </MyProvider>
    </html>
  );
}
