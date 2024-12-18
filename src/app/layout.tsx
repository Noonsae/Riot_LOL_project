import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import MyProvider from "./providers/Provider";
import Footer from "@/components/ui/Footer";

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
          <body className="dark:bg-[#1a1a1a]">
            <Header />
            <div className="inner mt-[80px]">
              <main className="min-h-[calc(100vh-200px)] pt-[80px]">
                {children}
              </main>
            </div>
            <Footer />
          </body>
        </ThemeProvider>
      </MyProvider>
    </html>
  );
}
