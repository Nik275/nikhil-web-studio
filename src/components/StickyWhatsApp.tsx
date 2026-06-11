"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(lastKnownScrollPosition > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'm interested in a website for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hidden sm:block ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black text-[#9a9a9a] text-[10px] tracking-widest uppercase px-4 py-2 border border-[#333] whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>

      {/* Button */}
      <button
        onClick={openWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-14 h-14 bg-black border border-[#333] hover:border-[#6d6d6d] rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white group-hover:text-[#9a9a9a] transition-colors duration-500" />
      </button>
    </div>
  );
}
