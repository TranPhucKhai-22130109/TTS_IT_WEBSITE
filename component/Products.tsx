"use client";

import React from "react";
import Image from "next/image";

interface ProductItem {
  id: string;
  name: string;
  subName: string;
  price: string;
  image: string;
  colorCode: string;
  glowColor: string;
}

export default function Products() {
  const [favorites, setFavorites] = React.useState<string[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const isFavorite = (id: string) => favorites.includes(id);

  const toggleFavorite = (id: string) => {
    let nextFav = [...favorites];
    if (isFavorite(id)) {
      nextFav = nextFav.filter((favId) => favId !== id);
    } else {
      nextFav.push(id);
    }
    setFavorites(nextFav);
    localStorage.setItem("favorites", JSON.stringify(nextFav));
    window.dispatchEvent(new Event("favorites-updated"));
  };

  const addToCart = (product: ProductItem) => {
    const stored = localStorage.getItem("cart");
    let cart = stored ? JSON.parse(stored) : [];
    
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        subName: product.subName,
        price: product.price,
        image: product.image,
        colorCode: product.colorCode,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const items: ProductItem[] = [
    {
      id: "iphone-17-pink",
      name: "Titan Hồng",
      subName: "iPhone 17 Pro",
      price: "Từ 28.990.000đ",
      image: "/iphone/iphonePinkNoBg.png",
      colorCode: "#db2777",
      glowColor: "rgba(219,39,119,0.15)"
    },
    {
      id: "iphone-17-space",
      name: "Titan Vũ Trụ",
      subName: "iPhone 17 Pro Max",
      price: "Từ 34.990.000đ",
      image: "/iphone/camvutruNoBg.png",
      colorCode: "#1e1b4b",
      glowColor: "rgba(99,102,241,0.15)"
    },
    {
      id: "iphone-17-silver",
      name: "Titan Bạc",
      subName: "iPhone 17 Pro",
      price: "Từ 28.990.000đ",
      image: "/iphone/silverNoBgNew.png",
      colorCode: "#94a3b8",
      glowColor: "rgba(148,163,184,0.12)"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 relative max-w-7xl mx-auto overflow-hidden">

      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Header section matching the G502 Products header style */}
      <div className="text-center mb-20 relative z-10">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-500 bg-clip-text text-transparent">
          CHỌN PHIÊN BẢN CỦA BẠN
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-500 bg-clip-text text-transparent">
            Sắc màu cá tính đậm chất Titan
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* 3 Column Grid layout for products with high-end iOS 26 Glass Effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative h-[560px] md:h-[620px] bg-zinc-800/[0.04] dark:bg-white/[0.02] backdrop-blur-[32px] rounded-[36px] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.18] dark:hover:border-white/[0.18] p-6 flex flex-col justify-between hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] shadow-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3 overflow-hidden"
          >

            {/* iOS 26 style Inner specular reflection highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/[0.01] dark:via-white/[0.02] to-black/[0.03] dark:to-white/[0.05] pointer-events-none" />

            {/* Ambient internal light source inside glass mapping to phone color */}
            <div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full blur-[80px] opacity-15 dark:opacity-30 group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: item.colorCode }}
            />

            {/* Top specs details (Subtle) */}
            <div className="flex justify-between items-start z-10 relative">
              <div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-bold block">{item.subName}</span>
                <span className="text-lg font-black text-zinc-900 dark:text-white mt-0.5 block">{item.name}</span>
              </div>

              {/* iOS style minimalistic colored dot badge & Favorite Heart icon */}
              <div className="flex items-center space-x-1.5">
                <div className="flex items-center space-x-1.5 bg-zinc-200/60 dark:bg-zinc-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block border border-black/10 dark:border-white/10" style={{ backgroundColor: item.colorCode }} />
                  <span className="text-[9px] text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-wider">Titanium</span>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  className="w-9 h-9 rounded-full bg-zinc-200/60 dark:bg-zinc-950/40 hover:bg-rose-500/10 dark:hover:bg-rose-500/15 border border-black/5 dark:border-white/5 flex items-center justify-center transition-all duration-300 cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-rose-500"
                  aria-label="Toggle Favorite"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill={isFavorite(item.id) ? "#ef4444" : "none"} viewBox="0 0 24 24" stroke={isFavorite(item.id) ? "#ef4444" : "currentColor"}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Core product showcase area taking up the vast majority of space */}
            <div className="flex-1 w-full flex items-center justify-center relative select-none z-10 overflow-hidden my-4">
              <Image
                src={item.image}
                alt={item.name}
                width={360}
                height={460}
                className="object-contain h-[75%] md:h-[82%] w-auto transform group-hover:scale-110 group-hover:rotate-[-2deg] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter drop-shadow-[0_30px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_30px_35px_rgba(0,0,0,0.6)]"
                style={{ width: "auto" }}
              />
            </div>

            {/* Floating Glass controller overlay at the bottom for Actions & Price */}
            <div className="z-10 relative bg-zinc-100/90 dark:bg-zinc-950/50 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-white/[0.05] p-4 flex items-center justify-between group-hover:bg-zinc-200/90 dark:group-hover:bg-zinc-950/80 group-hover:border-zinc-300 dark:group-hover:border-white/[0.1] transition-all duration-500 gap-2">
              <div>
                <div className="text-[9px] text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-bold">Giá mở bán</div>
                <div className="text-base font-extrabold text-zinc-900 dark:text-white">{item.price}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="p-3 bg-zinc-200/60 dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-black dark:hover:text-black rounded-xl transition-all duration-300 border border-black/5 dark:border-white/5 flex items-center justify-center cursor-pointer"
                  title="Thêm vào giỏ hàng"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>

                <a
                  href="#contact"
                  className="bg-zinc-900 !text-white dark:bg-white dark:!text-black hover:bg-cyan-500 hover:!text-black dark:hover:bg-cyan-400 dark:hover:!text-black font-bold text-xs px-4 py-3 rounded-xl transition-all duration-300 shadow-md flex items-center gap-1.5 shrink-0"
                >
                  <span>ĐẶT NGAY</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
