"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">

            {/* Decorative background glow matching the techgear template style */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />



            {/* Hero Content Left */}
            <div className="flex-1 text-center lg:text-left space-y-6 z-10 max-w-xl">
                <span className="inline-block text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase bg-cyan-100/50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/30 px-3 py-1 rounded-full">
                    THẾ HỆ MỚI NHẤT
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-zinc-900 dark:text-white">
                    iPhone 17 <br />
                    <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-pink-500 dark:from-cyan-400 dark:via-teal-300 dark:to-pink-500 bg-clip-text text-transparent">
                        Pro Max
                    </span>
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                    Trí tuệ nhân tạo Apple Intelligence tích hợp sâu vào kiến trúc phần cứng 3nm mới. Thiết kế khung Titan siêu mỏng nhẹ cùng cụm camera khẩu độ biến thiên đột phá.
                </p>

                {/* Buttons matching techgear style */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                    <a
                        href="#contact"
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)] text-sm uppercase tracking-wider"
                    >
                        Đăng ký đặt trước
                    </a>
                    <a
                        href="#products"
                        className="border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 bg-zinc-100/50 dark:bg-zinc-900/30 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/60 !text-zinc-800 dark:!text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
                    >
                        Xem phiên bản
                    </a>
                </div>

                {/* Short specs row */}
                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-200 dark:border-zinc-900 max-w-md mx-auto lg:mx-0">
                    <div>
                        <div className="text-2xl font-bold text-zinc-900 dark:text-white">A19 Pro</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Chip 3nm thế hệ 2</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">48 MP</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Tất cả camera</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-pink-600 dark:text-pink-500">Ultra Thin</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Titanium sấy</div>
                    </div>
                </div>
            </div>

            {/* Hero Image Right with Big Vertical Text */}
            <div className="flex-1 mt-16 lg:mt-0 w-full flex justify-center items-center relative select-none min-h-[500px] md:min-h-[650px] lg:min-h-[750px]">

                {/* Big transparent outline text behind the product - Cải tiến để xoay dọc chuẩn CSS */}
                <div
                    className="absolute right-0 lg:right-[-20px] text-[130px] md:text-[200px] lg:text-[260px] font-black tracking-tighter text-pink-500/5 dark:text-pink-500/10 leading-none select-none pointer-events-none font-sans z-0 uppercase"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)' // Xoay ngược lại nếu bạn muốn chữ đọc từ trên xuống dưới
                    }}
                >
                    17 PRO
                </div>

                {/* Floating Product Image - Đã phóng to và căn tỉ lệ căng chuẩn */}
                <div className="relative z-10 animate-float w-full max-w-[380px] md:max-w-[480px] lg:max-w-[560px] flex justify-center">
                    <Image
                        src="/iphone/iphonePinkNoBg.png"
                        alt="iPhone 17 Pro Titan Hồng"
                        width={900}  // Tăng độ phân giải gốc để khi bung ra màn hình lớn không bị mờ
                        height={1100}
                        priority
                        className="w-full h-auto object-contain drop-shadow-[0_35px_45px_rgba(219,39,119,0.3)] select-none hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Accent light reflecting on phone - Mở rộng tản sáng để khớp với ảnh to */}
                <div className="absolute w-72 h-72 rounded-full bg-pink-500/10 blur-[90px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            </div>

            {/* Custom Styles for float animation */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .write-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
        </section>
    );
}