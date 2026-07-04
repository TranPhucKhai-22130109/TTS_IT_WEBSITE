"use client";

import React, { useState, useEffect, useRef } from "react";

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Xin chào! Tôi là Trợ lý Ảo hỗ trợ thông tin iPhone 17 Pro. Tôi có thể giúp gì cho bạn hôm nay?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Giá iPhone 17 Pro?",
    "Các phiên bản màu sắc?",
    "Quy trình đặt trước?",
    "Thời gian giao máy?"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulated typing indicator and response delay
    setTimeout(() => {
      let botResponse = "";
      const query = text.toLowerCase();

      if (query.includes("giá") || query.includes("bao nhiêu") || query.includes("tiền")) {
        botResponse = "Dòng iPhone 17 có mức giá dự kiến cực tốt:\n• iPhone 17 Standard: từ 22.990.000đ\n• iPhone 17 Pro: từ 29.990.000đ\n• iPhone 17 Pro Max: từ 34.990.000đ\nKhách hàng đăng ký đặt trước hôm nay được giảm ngay 2.000.000đ!";
      } else if (query.includes("màu") || query.includes("color")) {
        botResponse = "iPhone 17 Pro và Pro Max sở hữu 4 màu sắc Titan đẳng cấp:\n• Titan Sa Mạc (Desert Titanium - Màu đặc trưng năm nay)\n• Titan Tự Nhiên (Natural Titanium)\n• Titan Trắng (White Titanium)\n• Titan Đen (Black Titanium)";
      } else if (query.includes("đặt") || query.includes("mua") || query.includes("đăng ký") || query.includes("order")) {
        botResponse = "Để đăng ký sở hữu sớm nhất, bạn hãy kéo xuống mục 'LIÊN HỆ ĐĂNG KÝ' ở cuối trang, nhập thông tin liên lạc và chọn phiên bản màu mong muốn, rồi bấm nút gửi là hoàn tất đặt chỗ nhận ưu đãi!";
      } else if (query.includes("giao") || query.includes("nhận") || query.includes("khi nào")) {
        botResponse = "Dự kiến máy sẽ bắt đầu cập cảng và bàn giao cho khách hàng đăng ký sớm nhất từ ngày 25/09/2026. Bạn sẽ được nhân viên hỗ trợ gọi điện xác nhận trước ngày giao 2 ngày.";
      } else if (query.includes("cấu hình") || query.includes("specs") || query.includes("chip") || query.includes("ram") || query.includes("camera")) {
        botResponse = "iPhone 17 Pro sở hữu cấu hình mạnh mẽ:\n• Chip A20 Bionic sản xuất trên tiến trình 2nm siêu mạnh\n• Camera zoom quang học 5x sắc nét\n• RAM 12GB hỗ trợ Apple Intelligence cực mượt\n• Màn hình tần số quét 120Hz ProMotion.";
      } else {
        botResponse = "Cảm ơn câu hỏi của bạn. Tôi là Trợ lý Ảo hỗ trợ thông tin sản phẩm Apple. Bạn có thể đặt câu hỏi ngắn về Giá cả, Màu sắc, Cấu hình máy hoặc Quy trình đặt trước nhé!";
      }

      const botMsg: Message = {
        sender: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-400 dark:from-cyan-400 dark:to-teal-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer relative"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {/* Pulsing indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-pink-500"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[480px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden transition-all duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 bg-zinc-700 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-cyan-400">
                  
                </div>
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute bottom-0 right-0 border-2 border-zinc-900" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-wider">APPLE ASSISTANT</h3>
                <span className="text-[10px] text-zinc-400">Trực tuyến hỗ trợ 24/7</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-800">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs whitespace-pre-line leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-black font-semibold rounded-tr-none"
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-tl-none border border-zinc-200/50 dark:border-zinc-800"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-zinc-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl rounded-tl-none px-4 py-3 border border-zinc-200/50 dark:border-zinc-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-1.5 bg-zinc-50/50 dark:bg-zinc-900/10">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[10px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 dark:hover:border-cyan-400 text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 border-t border-zinc-100 dark:border-zinc-900 flex gap-2 bg-white dark:bg-zinc-950"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 bg-zinc-100 dark:bg-zinc-900 border-none text-xs rounded-xl px-3 py-2.5 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:bg-white dark:focus:bg-zinc-900"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-3.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center"
            >
              Gửi
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
