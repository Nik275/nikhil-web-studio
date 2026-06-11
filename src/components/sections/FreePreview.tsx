"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CinematicFrame } from "@/components/ui/CinematicFrame";

export function FreePreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'd like to request a free homepage preview for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };
  return (
    <div ref={sectionRef}>
      <CinematicFrame
        id="preview"
        theme="copper"
        className="py-24 lg:py-32 flex items-center justify-center min-h-[80vh]"
      >
        <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
          <div
            className={`space-y-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a]">
              Try Before You Commit
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tight leading-[1.1] text-black">
              See your business online. <br/>
              <span className="text-[#a0a0a0] font-light">For free.</span>
            </h2>

            <p className="text-xl text-[#9a9a9a] font-light leading-relaxed max-w-2xl mx-auto">
              I'll create a free homepage preview for your business. If you like it, 
              we can discuss the full website. No pressure, no payment for the preview.
            </p>

            <div className="pt-12">
              <Button
                onClick={openWhatsApp}
                variant="white"
                className="px-10 py-7 text-sm tracking-[0.2em] uppercase"
              >
                Request Free Preview
              </Button>
            </div>
          </div>
        </div>
      </CinematicFrame>
    </div>
  );
}
