"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Sản phẩm</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#products" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">iPhone 17 Pro Max</a></li>
              <li><a href="#products" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">iPhone 17 Pro</a></li>
              <li><a href="#products" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">iPhone 17 Standard</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Phụ kiện MagSafe</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Apple Watch Ultra 4</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Cửa hàng</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Apple Store Trực tuyến</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Apple Store Hà Nội</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Apple Store TP. HCM</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Hệ thống đại lý ủy quyền</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Đối tác phân phối</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#partners" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Viettel Store</a></li>
              <li><a href="#partners" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">FPT Shop</a></li>
              <li><a href="#partners" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Thế Giới Di Động</a></li>
              <li><a href="#partners" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">CellphoneS</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Hỗ trợ & Pháp lý</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Trung tâm bảo hành Apple Care</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright notice bar at the bottom */}
        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 dark:text-zinc-600 gap-4">
          <div>
            COPYRIGHT © 2026 APPLE INC. BẢN QUYỀN ĐÃ ĐƯỢC BẢO HỘ.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-400">Quy định pháp lý</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-400">Sơ đồ trang</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-400">Chính sách Cookie</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
