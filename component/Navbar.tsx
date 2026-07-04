"use client";

import React, { useState, useEffect } from "react";

interface SectionOffset {
  id: string;
  top: number;
  bottom: number;
  center: number;
}

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const productDetailsList = [
    {
      id: "iphone-17-pink",
      name: "Titan Hồng",
      subName: "iPhone 17 Pro",
      price: "Từ 28.990.000đ",
      image: "/iphone/iphonePinkNoBg.png",
      colorCode: "#db2777"
    },
    {
      id: "iphone-17-space",
      name: "Titan Vũ Trụ",
      subName: "iPhone 17 Pro Max",
      price: "Từ 34.990.000đ",
      image: "/iphone/camvutruNoBg.png",
      colorCode: "#1e1b4b"
    },
    {
      id: "iphone-17-silver",
      name: "Titan Bạc",
      subName: "iPhone 17 Pro",
      price: "Từ 28.990.000đ",
      image: "/iphone/silverNoBgNew.png",
      colorCode: "#94a3b8"
    }
  ];

  const favoritedProducts = productDetailsList.filter((item) => favorites.includes(item.id));

  const updateCart = () => {
    const stored = localStorage.getItem("cart");
    setCart(stored ? JSON.parse(stored) : []);
  };

  const updateFavorites = () => {
    const stored = localStorage.getItem("favorites");
    setFavorites(stored ? JSON.parse(stored) : []);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    updateCart();
    updateFavorites();

    window.addEventListener("cart-updated", updateCart);
    window.addEventListener("favorites-updated", updateFavorites);

    return () => {
      window.removeEventListener("cart-updated", updateCart);
      window.removeEventListener("favorites-updated", updateFavorites);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const addToCart = (product: any) => {
    const stored = localStorage.getItem("cart");
    let currentCart = stored ? JSON.parse(stored) : [];
    
    const existing = currentCart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      currentCart.push({
        id: product.id,
        name: product.name,
        subName: product.subName,
        price: product.price,
        image: product.image,
        colorCode: product.colorCode,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const updateQuantity = (id: string, delta: number) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const nextQty = item.quantity + delta;
        return nextQty > 0 ? { ...item, quantity: nextQty } : null;
      }
      return item;
    }).filter(Boolean);

    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const removeFromCart = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const toggleFavorite = (id: string) => {
    let nextFav = [...favorites];
    if (favorites.includes(id)) {
      nextFav = nextFav.filter((favId) => favId !== id);
    } else {
      nextFav.push(id);
    }
    setFavorites(nextFav);
    localStorage.setItem("favorites", JSON.stringify(nextFav));
    window.dispatchEvent(new Event("favorites-updated"));
  };

  const parsePrice = (priceStr: any) => {
    if (!priceStr || typeof priceStr !== "string") return 0;
    return parseInt(priceStr.replace(/\D/g, "")) || 0;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);
  const total = Math.max(0, subtotal - appliedDiscount);

  const applyPromo = () => {
    if (discountCode.trim().toUpperCase() === "IPHONE17") {
      setAppliedDiscount(2000000); // 2,000,000đ discount
      alert("Áp dụng mã giảm giá thành công! Giảm ngay 2.000.000đ.");
    } else {
      alert("Mã giảm giá không hợp lệ. Hãy nhập mã: IPHONE17 để thử!");
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/85 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-900 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 font-bold tracking-widest text-lg text-zinc-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            <span className="text-xl"></span>
            <span>iPhone 17 Pro</span>
          </a>
          
          {/* Navigation Links - Hidden on very small screens, responsive layout */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Trang chủ</a>
            <a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Phiên bản</a>
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Tính năng</a>
            <a href="#specs" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Thông số</a>
            <a href="#partners" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Đối tác</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Liên hệ</a>
          </div>
  
          {/* CTA & Theme Toggle & Cart & Favorites */}
          <div className="flex items-center space-x-2.5">
            {/* Favorites Icon Badge */}
            <div className="relative">
              <button 
                onClick={() => setIsFavoritesOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-900 transition-all duration-300 cursor-pointer relative"
                aria-label="Favorites"
                title="Sản phẩm yêu thích"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={favorites.length > 0 ? "#f43f5e" : "none"} viewBox="0 0 24 24" stroke={favorites.length > 0 ? "#f43f5e" : "currentColor"}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white dark:border-zinc-950">
                    {favorites.length}
                  </span>
                )}
              </button>
            </div>

            {/* Shopping Cart Icon Badge */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-200 dark:hover:border-cyan-900 transition-all duration-300 relative cursor-pointer"
              aria-label="Shopping Cart"
              title="Giỏ hàng mua sắm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cart.reduce((acc, item) => acc + item.quantity, 0) > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-black text-[8px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white dark:border-zinc-950">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>

            <button
              onClick={toggleTheme}
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden ${
                isDarkMode 
                  ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700" 
                  : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
              }`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-amber-500 transition-transform duration-500 rotate-180 scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
  
            <a 
              href="#contact" 
              className="bg-zinc-900 !text-white dark:bg-white dark:!text-black text-xs md:text-sm px-5 py-2 rounded-full font-semibold hover:bg-cyan-500 hover:!text-black dark:hover:bg-cyan-400 dark:hover:!text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Đăng ký đặt trước
            </a>
          </div>
        </div>
      </nav>

      {/* Sliding Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in pointer-events-auto" onClick={() => setIsCartOpen(false)}>
          <div 
            className="w-full max-w-md h-full bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-2xl relative animate-slide-in pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button & Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-zinc-900">
                <h2 className="text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase font-serif">Giỏ hàng của bạn</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items List */}
              <div className="overflow-y-auto max-h-[50vh] mt-4 space-y-4 pr-1 scrollbar-thin">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-zinc-400 dark:text-zinc-600 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Giỏ hàng của bạn còn trống.
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/40 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-900/60">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-xl flex items-center justify-center shrink-0">
                          <img src={item.image} alt={item.name} className="object-contain max-w-full max-h-full" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">{item.subName}</h4>
                          <span className="text-[10px] text-zinc-400 font-medium block mt-0.5" style={{ color: item.colorCode }}>{item.name}</span>
                          <span className="text-xs font-black text-zinc-900 dark:text-zinc-300 mt-1 block">{item.price}</span>
                        </div>
                      </div>
                      
                      {/* Quantity Selectors */}
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 text-xs text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-bold"
                          >-</button>
                          <span className="px-2 text-xs text-zinc-900 dark:text-white font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 text-xs text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-bold"
                          >+</button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-rose-500 p-1 cursor-pointer"
                          title="Xóa"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Total / Promo Checkout section */}
            <div className="border-t border-zinc-100 dark:border-zinc-900 pt-6 space-y-4">
              
              {/* Promo input */}
              {cart.length > 0 && (
                <div className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="Mã ưu đãi (Thử: IPHONE17)"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500 text-zinc-950 dark:text-white"
                  />
                  <button 
                    onClick={applyPromo}
                    className="bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-black dark:hover:text-black text-xs font-semibold px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    Áp dụng
                  </button>
                </div>
              )}

              {/* Invoice lines */}
              <div className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span className="text-zinc-900 dark:text-white font-bold">{subtotal.toLocaleString("vi-VN")}đ</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-500 font-bold">
                    <span>Ưu đãi (Giảm giá)</span>
                    <span>-{appliedDiscount.toLocaleString("vi-VN")}đ</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-zinc-900 dark:text-white font-black pt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <span>Tổng tiền</span>
                  <span className="text-cyan-500">{total.toLocaleString("vi-VN")}đ</span>
                </div>
              </div>

              {/* CTA Checkout button */}
              <a 
                href="#contact"
                onClick={() => setIsCartOpen(false)}
                className={`w-full py-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider block transition-all duration-300 ${
                  cart.length === 0 
                    ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 pointer-events-none" 
                    : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/10"
                }`}
              >
                Tiến hành đăng ký mua ngay
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sliding Favorites Drawer Overlay */}
      {isFavoritesOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in pointer-events-auto" onClick={() => setIsFavoritesOpen(false)}>
          <div 
            className="w-full max-w-md h-full bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-2xl relative animate-slide-in pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button & Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-zinc-900">
                <h2 className="text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase font-serif">Sản phẩm yêu thích</h2>
                <button 
                  onClick={() => setIsFavoritesOpen(false)}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items List */}
              <div className="overflow-y-auto max-h-[70vh] mt-4 space-y-4 pr-1 scrollbar-thin">
                {favoritedProducts.length === 0 ? (
                  <div className="text-center py-12 text-zinc-400 dark:text-zinc-600 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Bạn chưa lưu sản phẩm yêu thích nào.
                  </div>
                ) : (
                  favoritedProducts.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/40 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-900/60">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-xl flex items-center justify-center shrink-0">
                          <img src={item.image} alt={item.name} className="object-contain max-w-full max-h-full" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">{item.subName}</h4>
                          <span className="text-[10px] text-zinc-400 font-medium block mt-0.5" style={{ color: item.colorCode }}>{item.name}</span>
                          <span className="text-xs font-black text-zinc-900 dark:text-zinc-300 mt-1 block">{item.price}</span>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex items-center gap-2">
                        {/* Add to Cart from Favorites */}
                        <button
                          onClick={() => {
                            addToCart(item);
                            setIsFavoritesOpen(false);
                            setIsCartOpen(true);
                          }}
                          className="p-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg transition-colors cursor-pointer"
                          title="Thêm vào giỏ hàng"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </button>
                        
                        {/* Remove Favorite */}
                        <button 
                          onClick={() => toggleFavorite(item.id)}
                          className="text-zinc-400 hover:text-rose-500 p-2 cursor-pointer"
                          title="Xóa khỏi yêu thích"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <button 
              onClick={() => setIsFavoritesOpen(false)}
              className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-xl text-center text-xs font-bold uppercase tracking-wider block transition-all duration-300 cursor-pointer"
            >
              Tiếp tục khám phá
            </button>
          </div>
        </div>
      )}
    </>
  );
}
