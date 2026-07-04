"use client";

import React from "react";

interface SpecRow {
  feature: string;
  iphone17: string;
  iphone17Pro: string;
  iphone17ProMax: string;
}

export default function Specs() {
  const specRows: SpecRow[] = [
    {
      feature: "Màn hình",
      iphone17: '6.1" OLED Super Retina XDR, 60Hz',
      iphone17Pro: '6.3" ProMotion OLED 120Hz, Always-On',
      iphone17ProMax: '6.9" ProMotion OLED 120Hz, Always-On'
    },
    {
      feature: "Bộ vi xử lý",
      iphone17: "A19 Chip (tiến trình 3nm)",
      iphone17Pro: "A19 Pro Chip với Neural Engine mới",
      iphone17ProMax: "A19 Pro Chip với Neural Engine mới"
    },
    {
      feature: "Hệ thống Camera",
      iphone17: "Camera kép: 48MP Chính & 12MP Siêu rộng",
      iphone17Pro: "3 Camera: 48MP Chính, 48MP Zoom 5x, 48MP Siêu rộng",
      iphone17ProMax: "3 Camera: 48MP Chính khẩu độ biến thiên, 48MP Zoom 5x, 48MP Siêu rộng"
    },
    {
      feature: "Chất liệu vỏ",
      iphone17: "Nhôm tái chế 100% & Mặt lưng kính",
      iphone17Pro: "Khung Titan cấp độ 5 đánh bóng & Mặt lưng kính mờ",
      iphone17ProMax: "Khung Titan cấp độ 5 đánh bóng & Mặt lưng kính mờ"
    },
    {
      feature: "Dung lượng pin",
      iphone17: "Lên đến 22 giờ xem video",
      iphone17Pro: "Lên đến 26 giờ xem video",
      iphone17ProMax: "Lên đến 33 giờ xem video"
    },
    {
      feature: "Cổng kết nối",
      iphone17: "USB-C (hỗ trợ USB 2)",
      iphone17Pro: "USB-C (hỗ trợ USB 3 tốc độ 10Gb/s)",
      iphone17ProMax: "USB-C (hỗ trợ USB 3 tốc độ 10Gb/s)"
    },
    {
      feature: "Kết nối AI",
      iphone17: "Apple Intelligence (Hỗ trợ cơ bản)",
      iphone17Pro: "Apple Intelligence (Hỗ trợ toàn diện)",
      iphone17ProMax: "Apple Intelligence (Hỗ trợ toàn diện)"
    }
  ];

  return (
    <section id="specs" className="py-24 px-6 bg-zinc-100/30 dark:bg-zinc-900/20 relative overflow-hidden">

      {/* Decorative light reflection */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
            BẢNG SO SÁNH CẤU HÌNH
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mt-3 uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-pink-500 dark:from-cyan-400 dark:via-teal-300 dark:to-pink-500 bg-clip-text text-transparent">
              Thông số kỹ thuật chi tiết
            </span>

          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Responsive Table / Grid */}
        <div className="w-full overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-900 bg-white/70 dark:bg-zinc-950/45 backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-900 bg-zinc-100/80 dark:bg-zinc-950/80">
                <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider w-1/4">Tính năng</th>
                <th className="p-6 text-sm font-extrabold text-zinc-900 dark:text-white w-1/4">iPhone 17</th>
                <th className="p-6 text-sm font-extrabold text-cyan-600 dark:text-cyan-400 w-1/4">iPhone 17 Pro</th>
                <th className="p-6 text-sm font-extrabold text-pink-600 dark:text-pink-500 w-1/4">iPhone 17 Pro Max</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/65 dark:divide-zinc-900/60">
              {specRows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-100/50 dark:hover:bg-zinc-900/20 transition-colors duration-200"
                >
                  <td className="p-6 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{row.feature}</td>
                  <td className="p-6 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 font-light">{row.iphone17}</td>
                  <td className="p-6 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 font-medium">{row.iphone17Pro}</td>
                  <td className="p-6 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 font-medium">{row.iphone17ProMax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note info below table */}
        <div className="mt-8 text-center text-xs text-zinc-500 font-light leading-relaxed">
          * Thông số kỹ thuật dựa trên các công bố thử nghiệm phòng thí nghiệm của Apple. Thời lượng pin thực tế có thể thay đổi tùy thuộc vào thói quen sử dụng.
        </div>

      </div>
    </section>
  );
}
