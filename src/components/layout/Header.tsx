"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const heroHeight = window.innerHeight * 3;
      const docHeight = document.body.scrollHeight;
      
      // We consider the top part (Hero) as the dark section
      // Adjust the threshold to be slightly before the white section starts
      if (window.scrollY < heroHeight - 100) {
        setIsDarkSection(true); 
      } else {
        setIsDarkSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on section
  const headerBg = isDarkSection ? "bg-transparent" : "bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]";
  const textColor = isDarkSection ? "text-white" : "text-black";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase transition-colors ${textColor} hover:opacity-70`}
        >
          Nikhil Web Studio
        </Link>

        <nav className="hidden md:flex gap-8 text-[10px] font-medium tracking-[0.2em] uppercase">
          <a href="#portfolio" className={`transition-colors ${textColor} hover:opacity-70`}>Work</a>
          <a href="#pricing" className={`transition-colors ${textColor} hover:opacity-70`}>Pricing</a>
          <a href="#process" className={`transition-colors ${textColor} hover:opacity-70`}>Process</a>
          <a href="#contact" className={`transition-colors ${textColor} hover:opacity-70`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
