import React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Chatbot from "../component/Chatbot";
import NotificationToast from "../component/NotificationToast";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "iPhone 17 Pro - Thiết kế tương lai | Apple",
  description: "Khám phá thế hệ iPhone 17 Pro hoàn toàn mới với chip xử lý A19 Pro mạnh mẽ, camera đột phá và tích hợp trí tuệ nhân tạo Apple Intelligence.",
  keywords: ["iPhone 17", "iPhone 17 Pro", "Apple Intelligence", "A19 Pro", "Apple Vietnam", "Titanium"],
  authors: [{ name: "Apple" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "iPhone 17 Pro - Thiết kế từ tương lai",
    description: "Trải nghiệm kỷ nguyên công nghệ mới cùng Apple.",
    url: "https://helicorp.vn",
    siteName: "Apple Vietnam",
    images: [
      {
        url: "/iphone/promax.png", // Dùng ảnh đúng đường dẫn trong public/iphone/
        width: 1200,
        height: 630,
        alt: "iPhone 17 Pro Showcase",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone 17 Pro - Thiết kế từ tương lai",
    description: "Trải nghiệm kỷ nguyên công nghệ mới cùng Apple.",
    images: ["/iphone/promax.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`scroll-smooth dark ${inter.variable} ${playfair.variable}`}>
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white min-h-screen font-sans antialiased selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-300">
        {children}
        <Chatbot />
        <NotificationToast />
      </body>
    </html>
  );
}