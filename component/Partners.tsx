"use client";

import React from "react";

interface PartnerItem {
  name: string;
  type: string;
  logoText: string;
  accentColor: string;
}

export default function Partners() {
  const partners: PartnerItem[] = [
    {
      name: "Apple Store Online",
      type: "Trực tiếp từ Apple",
      logoText: " Apple Store",
      accentColor: "from-white to-zinc-400"
    },
    {
      name: "Viettel Store",
      type: "Nhà mạng Ủy quyền",
      logoText: "Viettel Store",
      accentColor: "from-red-500 to-red-400"
    },
    {
      name: "FPT Shop",
      type: "Đại lý Ủy quyền Cấp cao",
      logoText: "FPT Shop",
      accentColor: "from-blue-500 to-cyan-400"
    },
    {
      name: "Thế Giới Di Động",
      type: "Đại lý Bán lẻ Ủy quyền",
      logoText: "TGDD",
      accentColor: "from-yellow-500 to-amber-400"
    }
  ];

  return (
    <section id="partners" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* Header corresponding to MEMBERS */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
          HỆ THỐNG PHÂN PHỐI
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mt-3 uppercase tracking-tight">
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-pink-500 dark:from-cyan-400 dark:via-teal-300 dark:to-pink-500 bg-clip-text text-transparent">
            Đối tác ủy quyền chính hãng
          </span>
        </h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-2 max-w-md mx-auto">
          Đặt trước iPhone 17 Pro tại các đại lý và nhà mạng uy tín nhất Việt Nam để nhận nhiều ưu đãi đặc quyền.
        </p>
      </div>

      {/* Grid of Partners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group bg-zinc-100/50 dark:bg-zinc-900/30 backdrop-blur rounded-2xl border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 p-6 flex flex-col items-center justify-center text-center h-32 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Logo text stylized */}
            <span className={`text-lg font-black bg-gradient-to-r ${partner.accentColor} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
              {partner.logoText}
            </span>

            {/* Partner details */}
            <span className="text-zinc-700 dark:text-zinc-400 text-xs font-bold mt-2">
              {partner.name}
            </span>
            <span className="text-zinc-500 dark:text-zinc-600 text-[10px] uppercase tracking-wider mt-0.5">
              {partner.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
