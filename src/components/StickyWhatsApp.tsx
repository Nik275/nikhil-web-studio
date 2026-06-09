"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Tooltip - hidden on mobile */}
      <div
        className={`absolute bottom-full right-0 mb-2 sm:mb-3 transition-all duration-300 hidden sm:block ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="bg-stone-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap shadow-lg">
          Chat on WhatsApp
          <div className="absolute top-full right-4 sm:right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-stone-900" />
        </div>
      </div>

      {/* Button - smaller on mobile */}
      <button
        onClick={openWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#22c35e] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        
        {/* Icon - smaller on mobile */}
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
      </button>
    </div>
  );
}
