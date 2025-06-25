import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ① Navbar import
import Navbar from "../../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REALIVA AI",
  description: "REALIVA AI 공식 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ② 네비게이션 삽입 */}
        <Navbar />

        {/* ③ 네비바 높이(4rem)만큼 패딩 주기 */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}