"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CinematicFrame } from "@/components/ui/CinematicFrame";
import { StudioPlant } from "../decorations/StudioPlant";
import { FlowerPot } from "../decorations/FlowerPot";

// Demo links - easy to replace
const DEMO_LINKS = {
  auraLuxe: "https://aura-luxe-salon-seven.vercel.app/",
  ironForge: "https://ironforge-fitness-bay.vercel.app/",
  bloomBrew: "https://bloom-brew-cafe.vercel.app/",
};

const demos = [
  {
    id: "aura-luxe",
    category: "Salon & Spa",
    title: "Aura Luxe",
    description: "Premium beauty website focused on service menus, packages, and direct WhatsApp bookings.",
  },
  {
    id: "iron-forge",
    category: "Gym & Fitness",
    title: "IronForge",
    description: "Bold fitness website designed for program showcases and free trial lead generation.",
  },
  {
    id: "bloom-brew",
    category: "Cafe & Restaurant",
    title: "Bloom & Brew",
    description: "Warm hospitality website with digital menus, table reservations, and ambiance galleries.",
  },
];

export function DemoPortfolio() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = (demoTitle: string) => {
    const message = encodeURIComponent(
      `Hi Nikhil, I saw the ${demoTitle} demo and want a similar website for my business.`
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  const getDemoLink = (id: string) => {
    switch (id) {
      case "aura-luxe":
        return DEMO_LINKS.auraLuxe;
      case "iron-forge":
        return DEMO_LINKS.ironForge;
      case "bloom-brew":
        return DEMO_LINKS.bloomBrew;
      default:
        return "#";
    }
  };

  return (
    <div ref={sectionRef}>
      <CinematicFrame
        id="portfolio"
        theme="darkroom"
        className="py-24 lg:py-32"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div
            className={`max-w-4xl mb-32 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-[10px] sm:text-xs font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-8">
              Demo Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] text-[#111111] mb-8">
              Demo websites showing how local businesses could look online.
            </h2>
          </div>

          {/* Demo Cards / Full-width Gallery Rows */}
          <div className="space-y-0 border-t border-[#E8DED1]">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                className={`group relative border-b border-[#E8DED1] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="grid lg:grid-cols-[1fr_2fr] items-stretch min-h-[500px]">
                  
                  {/* Meta Side (Left) */}
                  <div className="p-8 lg:p-12 lg:pr-24 border-b lg:border-b-0 lg:border-r border-[#E8DED1] flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-[#9A8172] uppercase tracking-[0.2em] mb-8">
                        {demo.category}
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-light text-[#111111] mb-6 tracking-tight">
                        {demo.title}
                      </h3>
                      <p className="text-[#7C8068] font-light leading-relaxed max-w-sm">
                        {demo.description}
                      </p>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => window.open(getDemoLink(demo.id), "_blank")}
                        variant="default"
                        className="text-xs w-full sm:w-auto uppercase tracking-widest"
                      >
                        View Live Demo
                      </Button>
                      <Button
                        onClick={() => openWhatsApp(demo.title)}
                        variant="outline"
                        className="text-xs w-full sm:w-auto uppercase tracking-widest"
                      >
                        Request Similar
                      </Button>
                    </div>
                  </div>

                  {/* Preview Side (Right - Display Screen Mount) */}
                  <div className="relative p-8 lg:p-16 flex items-center justify-center">
                    
                    {/* Plant Decorations (Outside Screen) */}
                    {demo.id === "aura-luxe" && (
                      <div className="absolute bottom-0 left-0 lg:left-4 w-[120px] h-[250px] lg:w-[180px] lg:h-[350px] z-30 opacity-85 pointer-events-none hidden sm:block drop-shadow-xl transform -rotate-2">
                        <StudioPlant potColor="#B46A4C" />
                      </div>
                    )}
                    {demo.id === "bloom-brew" && (
                      <div className="absolute bottom-4 right-0 lg:right-4 w-[80px] h-[100px] lg:w-[120px] lg:h-[150px] z-30 opacity-90 pointer-events-none hidden sm:block drop-shadow-xl transform rotate-3">
                        <FlowerPot variant="yellow" />
                      </div>
                    )}

                    {/* Subtle Wall Panel / Screen Mount Depth */}
                    <div className="absolute inset-y-8 inset-x-4 lg:inset-x-8 bg-[#F7F3EA] border border-[#E8DED1] shadow-[0_20px_40px_rgba(74,48,35,0.02)] rounded-sm pointer-events-none" />
                    
                    {/* Sharp dark physical display screen */}
                    <div className="relative w-full max-w-[800px] aspect-[16/9] border-[6px] border-[#111111] bg-black overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(17,17,17,0.15)] rounded-md z-10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_40px_80px_rgba(74,48,35,0.1)]">
                      
                      {/* Screen Glare / Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none z-20" />
                      
                      {/* Browser UI Header (Dark Chrome) */}
                      <div className="h-8 border-b border-white/5 bg-[#111] flex items-center px-4 gap-2 shrink-0 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                      </div>
                      
                      {/* The "Screen" Content Area */}
                      <div className="flex-1 w-full relative overflow-hidden bg-black z-0">
                        
                        {demo.id === "aura-luxe" && (
                          <div className="absolute inset-0 bg-[#F7F3EA] flex flex-col items-center">
                            {/* Aura Luxe Abstract Layout */}
                            <div className="w-full h-[40%] bg-[#E8DED1] flex items-center justify-center">
                              <div className="w-[30%] h-[20%] border border-[#9A8172] opacity-30" />
                            </div>
                            <div className="w-full flex-1 flex p-4 gap-4">
                              <div className="w-1/2 h-full bg-[#ffffff]/50 rounded-t-full" />
                              <div className="w-1/2 h-full flex flex-col justify-center gap-2 px-4">
                                <div className="w-[60%] h-2 bg-[#9A8172] opacity-60" />
                                <div className="w-[40%] h-2 bg-[#9A8172] opacity-60" />
                                <div className="w-[80%] h-1 bg-[#E8DED1] mt-2" />
                                <div className="w-[70%] h-1 bg-[#E8DED1]" />
                              </div>
                            </div>
                          </div>
                        )}

                        {demo.id === "iron-forge" && (
                          <div className="absolute inset-0 bg-[#111111] flex flex-col">
                            {/* IronForge Abstract Layout */}
                            <div className="w-full h-[60%] bg-[#1a1a1a] relative overflow-hidden flex items-end">
                              <div className="absolute -right-[10%] top-[10%] w-[50%] h-[150%] bg-[#B46A4C] opacity-20 transform rotate-12 blur-[2px]" />
                              <div className="p-4 w-full">
                                <div className="w-[70%] h-4 bg-[#F7F3EA] opacity-90 mb-2 transform -skew-x-12" />
                                <div className="w-[50%] h-4 bg-[#B46A4C] opacity-90 transform -skew-x-12" />
                              </div>
                            </div>
                            <div className="flex-1 w-full p-4 flex gap-2">
                              <div className="flex-1 bg-[#222]" />
                              <div className="flex-1 bg-[#222]" />
                              <div className="flex-1 bg-[#B46A4C]/20" />
                            </div>
                          </div>
                        )}

                        {demo.id === "bloom-brew" && (
                          <div className="absolute inset-0 bg-[#2a1f1a] flex flex-col">
                            {/* Bloom & Brew Abstract Layout */}
                            <div className="w-full h-[15%] border-b border-[#4A3023] flex items-center justify-between px-4">
                              <div className="w-[20%] h-2 bg-[#C8A96A] opacity-60 rounded-full" />
                              <div className="w-[30%] h-1 bg-[#4A3023] rounded-full" />
                            </div>
                            <div className="flex-1 flex">
                              <div className="w-[40%] h-full p-4 flex flex-col justify-center gap-3">
                                <div className="w-[80%] h-3 bg-[#C8A96A] opacity-80" />
                                <div className="w-[60%] h-2 bg-[#4A3023]" />
                                <div className="w-[90%] h-1 bg-[#3a2822] mt-4" />
                                <div className="w-[85%] h-1 bg-[#3a2822]" />
                              </div>
                              <div className="w-[60%] h-full p-4">
                                <div className="w-full h-full bg-[#4A3023] rounded-tl-[40px] opacity-80" />
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CinematicFrame>
    </div>
  );
}
