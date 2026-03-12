import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Nexus | 记录AI学习与思考",
  description: "播客笔记 · 行业资讯 · 竞品观察",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="font-sans antialiased bg-white text-[#1D1D1F] min-h-screen">
        {children}
      </body>
    </html>
  );
}
