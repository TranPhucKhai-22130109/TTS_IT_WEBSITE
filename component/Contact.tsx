"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    version: "iphone-17-promax",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", version: "iphone-17-promax", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden relative">

      {/* Decorative background glow */}
      <div className="absolute right-1/4 bottom-12 w-72 h-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Header corresponding to CONTACTS */}
      <div className="text-center mb-20">
        <span className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
          LIÊN HỆ ĐĂNG KÝ
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mt-3 uppercase tracking-tight">
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-pink-500 dark:from-cyan-400 dark:via-teal-300 dark:to-pink-500 bg-clip-text text-transparent">
            Đăng ký sở hữu sớm nhất
          </span>
        </h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
          Nhận ngay voucher trị giá 2.000.000đ và gói bảo hành rơi vỡ Apple Care+ miễn phí khi đăng ký đặt hàng trước hôm nay.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

        {/* Left Side: Contact Channels */}
        <div className="flex-1 bg-zinc-100/50 dark:bg-zinc-900/20 backdrop-blur border border-zinc-200 dark:border-zinc-900/80 rounded-3xl p-6 md:p-10 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <a href="#" className="flex items-center space-x-2 font-bold tracking-widest text-2xl text-zinc-900 dark:text-white">
                <span>iPhone 17</span>
              </a>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm mt-3 font-light leading-relaxed max-w-xs">
                Tìm hiểu thêm các thông tin về sản phẩm, đại lý ủy quyền và chính sách bảo hành chính hãng toàn cầu.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg">
                  📞
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Hotline đặt trước</div>
                  <a href="tel:18001199" className="text-sm font-bold text-zinc-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    1800 1199 (Miễn phí)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg">
                  ✉️
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Email tư vấn</div>
                  <a href="mailto:support@apple.com.vn" className="text-sm font-bold text-zinc-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    support@apple.com.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons matching techgear style */}
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 mt-8">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-4">Theo dõi Apple Việt Nam</div>
            <div className="flex flex-wrap gap-2.5">
              {["Facebook", "Instagram", "YouTube", "Twitter"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-cyan-500 dark:hover:bg-cyan-500 border border-zinc-200 dark:border-zinc-800/80 rounded-lg text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-white dark:hover:text-black transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-[1.5] bg-zinc-100/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-900/80 rounded-3xl p-6 md:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-cyan-950 border border-cyan-800 text-cyan-400 rounded-full flex items-center justify-center text-3xl animate-bounce">
                ✓
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Đăng ký thành công!</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">
                Cảm ơn bạn đã đăng ký thông tin. Nhân viên tư vấn của Apple Store sẽ liên hệ lại qua email/số điện thoại trong vòng 15 phút.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 outline-none rounded-xl px-4 py-3 text-sm transition-all duration-300"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Địa chỉ Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 outline-none rounded-xl px-4 py-3 text-sm transition-all duration-300"
                    placeholder="username@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="version" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Phiên bản quan tâm</label>
                <select
                  id="version"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-zinc-900 dark:text-white outline-none rounded-xl px-4 py-3 text-sm transition-all duration-300"
                >
                  <option value="iphone-17-promax" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">iPhone 17 Pro Max (Titan Vũ Trụ)</option>
                  <option value="iphone-17-pink" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">iPhone 17 Pro (Titan Hồng)</option>
                  <option value="iphone-17-silver" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">iPhone 17 Pro (Titan Bạc)</option>
                  <option value="iphone-17-standard" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">iPhone 17 Tiêu chuẩn</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Lời nhắn hoặc yêu cầu (Tùy chọn)</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-650 outline-none rounded-xl px-4 py-3 text-sm transition-all duration-300 resize-none"
                  placeholder="Ví dụ: Tôi muốn nhận tư vấn chương trình thu cũ đổi mới..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-[0_0_20px_rgba(6,182,212,0.2)] text-sm cursor-pointer"
              >
                Gửi Đăng Ký Đặt Trước
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
