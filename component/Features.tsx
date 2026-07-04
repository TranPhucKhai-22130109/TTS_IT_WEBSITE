"use client";

import React from "react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
  badgeColor: string;
}

export default function Features() {
  const feats: FeatureItem[] = [
    {
      title: "Siêu Chip Apple A19 Pro",
      desc: "Xây dựng trên tiến trình 3nm tối tân. Tăng 40% hiệu năng xử lý đồ họa Ray Tracing và tích hợp bộ tăng tốc AI thần kinh chuyên sâu.",
      icon: "⚡",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/30"
    },
    {
      title: "Màn hình OLED ProMotion 120Hz",
      desc: "Độ sáng đỉnh cao lên tới 3000 nits. Trải nghiệm vuốt chạm siêu mượt cùng tính năng Always-On Display thế hệ mới tiết kiệm pin.",
      icon: "📱",
      badgeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/30"
    },
    {
      title: "Hệ thống Camera Biến Thiên",
      desc: "Cảm biến chính 48MP với cơ chế đóng mở khẩu độ vật lý đầu tiên trên iPhone. Zoom quang học 5x sắc nét đến từng milimet.",
      icon: "📸",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
    },
    {
      title: "Apple Intelligence Toàn Diện",
      desc: "Hệ thống AI xử lý tác vụ ngay trên thiết bị bảo mật tuyệt đối. Tạo văn bản, chỉnh sửa ảnh thông minh và Siri tự nhiên hơn.",
      icon: "🤖",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/30"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-zinc-100/50 dark:bg-zinc-950/40 border-y border-zinc-200 dark:border-zinc-900 relative overflow-hidden">

      {/* Decorative background glow matching the template */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title corresponding to SERVICES header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-pink-500 uppercase">
            ĐỘT PHÁ CÔNG NGHỆ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-pink-500 dark:from-cyan-400 dark:via-teal-300 dark:to-pink-500 bg-clip-text text-transparent">
              Nâng cấp xứng tầm kỳ vọng.
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-light mt-3 max-w-md mx-auto">
            iPhone 17 Pro định hình tương lai di động với những trang bị mang tính cách mạng của Apple.
          </p>
        </div>

        {/* 2 Column Layout: Product image left, Features list right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Column: Product colors image with custom glow */}
          <div className="flex-1 w-full flex justify-center items-center relative select-none">
            <div className="absolute w-[80%] h-[80%] rounded-full bg-cyan-500/5 blur-[80px]" />
            <div className="bg-zinc-800/[0.04] dark:bg-zinc-900/20 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-900/60 max-w-md lg:max-w-full">
              <Image
                src="/iphone/fullColorNoBg.png"
                alt="Các phiên bản màu sắc iPhone 17"
                width={500}
                height={500}
                loading="lazy"
                className="object-contain hover:scale-105 transition-transform duration-700 select-none filter drop-shadow-[0_20px_35px_rgba(6,182,212,0.15)]"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Feature cards */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {feats.map((f, i) => (
              <div
                key={i}
                className="bg-zinc-800/[0.04] dark:bg-zinc-900/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-900/80 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon with light glow */}
                  <div className={`text-2xl w-12 h-12 flex items-center justify-center rounded-xl border mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner ${f.badgeColor}`}>
                    {f.icon}
                  </div>

                  {/* Feature details */}
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {f.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                {/* Visual Accent Arrow */}
                <div className="text-right mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-500 dark:text-cyan-400 text-xs font-semibold">
                  Tìm hiểu thêm &rarr;
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}