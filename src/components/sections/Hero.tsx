"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { StudioBuildingVisual } from "@/components/visuals/StudioBuildingVisual";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let latestScrollY = window.scrollY;

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateScrollProgress);
      }
    };

    const updateScrollProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Scroll distance over the 300vh container
      const elementTop = rect.top + latestScrollY;
      const elementHeight = rect.height - window.innerHeight;
      
      let progress = (latestScrollY - elementTop) / elementHeight;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
      
      animationFrameId = 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'm interested in getting a free homepage preview for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intro UI fades out quickly as we move closer (0 to 0.3)
  const uiOpacity = Math.max(1 - scrollProgress * 3.3, 0);

  return (
    <section ref={containerRef} id="hero" className="relative h-[300vh] bg-black text-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
        
        {/* The Premium Studio Building & Entrance Zoom Transition */}
        <StudioBuildingVisual scrollProgress={scrollProgress} />

        {/* Foreground Content Layers (Only visible while outside the building) */}
        <div 
          className="absolute inset-0 z-20 w-full max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-75"
          style={{ opacity: uiOpacity, pointerEvents: uiOpacity > 0.5 ? 'auto' : 'none' }}
        >
          <div className="flex flex-col items-center text-center -translate-y-[10vh] sm:-translate-y-[15vh]">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 tracking-tight drop-shadow-2xl">
              Premium websites <br/> 
              <span className="text-[#a0a0a0]">for local businesses.</span>
            </h1>
            
            {/* Supporting Line */}
            <p className="text-[#a0a0a0] text-sm sm:text-base tracking-[0.05em] max-w-xl mb-10 font-light">
              Built to generate more WhatsApp enquiries, bookings, calls, and trust.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0">
              <Button
                onClick={openWhatsApp}
                variant="default"
                className="bg-white text-black hover:bg-[#e0e0e0] rounded-full w-full sm:w-auto px-10 py-5 sm:py-7 min-h-[56px] text-xs tracking-[0.2em] uppercase font-medium shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                Get Free Preview
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="border-[#444] text-white hover:bg-white hover:text-black rounded-full w-full sm:w-auto px-10 py-5 sm:py-7 min-h-[56px] text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-md bg-black/20"
              >
                View Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 flex flex-col items-center justify-center z-20 transition-opacity duration-75"
          style={{ opacity: uiOpacity }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#a0a0a0] mb-6 animate-pulse">
            Scroll to enter studio
          </div>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#a0a0a0] to-transparent" />
        </div>

      </div>
    </section>
  );
}
