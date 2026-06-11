"use client";

import React from "react";

interface CinematicFrameProps {
  theme?: "darkroom" | "green" | "copper";
  scrollProgress?: number;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CinematicFrame({
  theme = "darkroom", // Themes can now dictate subtle light wall accents
  scrollProgress = 0,
  children,
  id,
  className = "",
  style,
}: CinematicFrameProps) {
  
  // Choose interior accent color based on theme
  let accentGradient = "";
  if (theme === "darkroom") {
    accentGradient = "radial-gradient(ellipse at top, rgba(200, 169, 106, 0.08) 0%, transparent 70%)"; // Soft Gold accent
  } else if (theme === "green") {
    accentGradient = "radial-gradient(ellipse at top, rgba(124, 128, 104, 0.1) 0%, transparent 70%)"; // Muted Olive accent
  } else if (theme === "copper") {
    accentGradient = "radial-gradient(ellipse at top, rgba(180, 106, 76, 0.08) 0%, transparent 70%)"; // Muted Clay accent
  }

  return (
    <section id={id} className={`relative overflow-hidden bg-[#F7F3EA] text-[#111111] border-t border-[#E8DED1] ${className}`} style={style}>
      
      {/* Premium Studio Interior Architectural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Base Warm Ivory Wall Color */}
        <div className="absolute inset-0 bg-[#F7F3EA]" />
        
        {/* Soft Ambient Ceiling & Floor Lighting */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-[#ffffff] to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#ffffff] to-transparent opacity-50" />

        {/* Subtle Architectural Grid / Wall Panel Seams (Warm Taupe) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(154,129,114,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(154,129,114,0.04)_1px,transparent_1px)] bg-[size:10vw_10vh] opacity-100" />
        
        {/* Glass Partition Reflections / Depth */}
        <div className="absolute left-[15%] top-[-10%] bottom-[-10%] w-[1px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.6)] to-transparent shadow-[10px_0_30px_rgba(74,48,35,0.02)] transform rotate-2" />
        <div className="absolute right-[15%] top-[-10%] bottom-[-10%] w-[1px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.6)] to-transparent shadow-[-10px_0_30px_rgba(74,48,35,0.02)] transform -rotate-2" />
        
        {/* Subtle Room Depth Shadows (Walnut Brown tint) */}
        <div className="absolute left-0 top-0 bottom-0 w-[5vw] bg-gradient-to-r from-[rgba(74,48,35,0.02)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[5vw] bg-gradient-to-l from-[rgba(74,48,35,0.02)] to-transparent" />

        {/* Floor Plane Illusion */}
        <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-[rgba(74,48,35,0.02)] to-transparent border-t border-[rgba(74,48,35,0.03)]" />

        {/* Theme-based Studio Spotlight (Subtle Tint) */}
        <div 
          className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none mix-blend-multiply opacity-70"
          style={{ backgroundImage: accentGradient }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col">
        {children}
      </div>
    </section>
  );
}
