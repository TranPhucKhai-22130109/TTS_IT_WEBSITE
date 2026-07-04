"use client";

import React, { useEffect, useState, useRef } from "react";

interface ToastMessage {
  id: string;
  text: string;
  type: "behavior" | "booking";
}

export default function NotificationToast() {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const triggeredSections = useRef<Set<string>>(new Set());

  // Simulated names, cities, and models for social proof bookings
  const names = ["Anh Tuấn", "Chị Thảo", "Anh Minh", "Chị Vy", "Anh Hoàng", "Chị Linh", "Anh Đức", "Chị Mai"];
  const cities = ["Hà Nội", "TP. HCM", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Bình Dương", "Đồng Nai"];
  const models = [
    "iPhone 17 Pro Max Titan Sa Mạc (Desert Gold)",
    "iPhone 17 Pro Titan Tự Nhiên",
    "iPhone 17 Pro Max Titan Đen",
    "iPhone 17 Standard Titan Trắng"
  ];

  const showToast = (text: string, type: "behavior" | "booking") => {
    const id = Math.random().toString();
    setToast({ id, text, type });

    // Auto hide toast after 5.5 seconds
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 5500);
  };

  useEffect(() => {
    // 1. Behavior tracking (scroll triggers)
    const handleScroll = () => {
      const ids = ["products", "features", "specs", "partners", "contact"];
      const messages: Record<string, string> = {
        products: "Bạn đang khám phá 3 phiên bản iPhone 17 đột phá công nghệ mới.",
        features: "Hệ thống: Khám phá các đột phá công nghệ Camera 48MP và Chip 2nm.",
        specs: "Hệ thống: Đang xem bảng cấu hình hiệu năng chi tiết Chip A20 Bionic.",
        partners: "Bạn đang xem Hệ thống Đại lý phân phối Ủy quyền Chính hãng của Apple.",
        contact: "Nhận voucher trị giá 2.000.000đ khi hoàn tất thông tin đăng ký đặt trước."
      };

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && !triggeredSections.current.has(id)) {
          const rect = el.getBoundingClientRect();
          // Trigger when the section top crosses into the upper half of the viewport
          if (rect.top < window.innerHeight * 0.4 && rect.bottom > 0) {
            triggeredSections.current.add(id);
            showToast(messages[id], "behavior");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Simulated booking notifications (runs every 20 seconds)
    const triggerBooking = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomModel = models[Math.floor(Math.random() * models.length)];
      const time = ["vừa", "3 phút trước", "5 phút trước"][Math.floor(Math.random() * 3)];
      
      const message = `${randomName} (${randomCity}) ${time} đăng ký thành công đặt trước ${randomModel}! 🎉`;
      showToast(message, "booking");
    };

    // First trigger after 8 seconds
    const firstTimeout = setTimeout(triggerBooking, 8000);
    // Interval for every 20 seconds
    const interval = setInterval(triggerBooking, 20000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-auto max-w-sm w-full animate-bounce-in">
      <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-start gap-3 transition-all duration-300">
        
        {/* Icon status */}
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
          toast.type === "booking" 
            ? "bg-emerald-500/10 text-emerald-500" 
            : "bg-cyan-500/10 text-cyan-500"
        }`}>
          {toast.type === "booking" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            {toast.type === "booking" ? "Đăng ký trực tiếp" : "Theo dõi hành vi"}
          </span>
          <p className="text-zinc-800 dark:text-zinc-200 text-xs mt-0.5 leading-relaxed font-semibold">
            {toast.text}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setToast(null)}
          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 shrink-0 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  );
}
