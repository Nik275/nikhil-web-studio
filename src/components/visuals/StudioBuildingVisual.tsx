"use client";

import React from "react";
import { StudioLampGlow } from "../decorations/StudioLampGlow";
import { OpenBookIllustration } from "../decorations/OpenBookIllustration";
import { StudioDeskSurface } from "../decorations/StudioDeskSurface";
import { StudioPlant } from "../decorations/StudioPlant";

interface StudioBuildingVisualProps {
  scrollProgress: number;
}

export function StudioBuildingVisual({ scrollProgress }: StudioBuildingVisualProps) {
  // --- Animation Mapping ---
  // 0.0 -> 0.25: Camera static, full exterior view
  // 0.25 -> 1.0: Camera moves closer exponentially
  // 0.45 -> 0.65: Doors slide open
  // 0.65 -> 0.85: Interior glow floods screen
  
  // Camera Zoom (Starts at 0.25)
  const zoomProgress = Math.max(0, scrollProgress - 0.25) / 0.75;
  const buildingScale = 1 + Math.pow(zoomProgress, 3) * 60; // Huge scale to push past the doors
  const buildingTranslateZ = zoomProgress * 150; 

  // Door Opening (0.45 to 0.65)
  let doorOpenProgress = 0;
  if (scrollProgress > 0.45) {
    doorOpenProgress = Math.min((scrollProgress - 0.45) / 0.2, 1);
  }
  const leftDoorTranslate = -100 * doorOpenProgress; // % translation
  const rightDoorTranslate = 100 * doorOpenProgress; // % translation

  // Interior Glow (0.65 to 0.85)
  let glowProgress = 0;
  if (scrollProgress > 0.4) {
    glowProgress = Math.min((scrollProgress - 0.4) / 0.45, 1);
  }

  // Fade out exterior details (signage, panels) as we get super close
  const exteriorOpacity = Math.max(1 - zoomProgress * 1.5, 0);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center perspective-[1500px]">
      
      {/* Background Environment Base */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] to-[#0a0a0a]" />

      {/* Building Container (Scales & Translates towards camera) */}
      <div 
        className="relative w-full h-[120vh] flex flex-col items-center justify-end transform-gpu will-change-transform origin-[50%_75%]"
        style={{ transform: `scale(${buildingScale}) translateZ(${buildingTranslateZ}px)` }}
      >
        
        {/* --- EXTERIOR FACADE --- */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-75 flex flex-col items-center justify-end pb-[20vh]"
          style={{ opacity: exteriorOpacity }}
        >
          {/* Main Glass Facade Panels */}
          <div className="absolute top-0 bottom-[20vh] left-0 right-0 overflow-hidden">
            {/* Panel Grid */}
            <div className="absolute inset-0 bg-[#030303] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10vw_15vh] opacity-60" />
            
            {/* Dark Glass Reflections */}
            <div className="absolute top-[-10%] left-[-20%] w-[150%] h-[60%] bg-gradient-to-b from-white/[0.04] to-transparent transform -skew-y-6" />
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[100%] bg-gradient-to-l from-white/[0.02] to-transparent blur-[50px]" />
            
            {/* Thick Structural Mullions/Beams */}
            <div className="absolute top-0 bottom-0 left-[20%] w-[8px] bg-gradient-to-r from-[#111] via-[#222] to-[#0a0a0a] shadow-[10px_0_20px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-0 bottom-0 right-[20%] w-[8px] bg-gradient-to-l from-[#111] via-[#222] to-[#0a0a0a] shadow-[-10px_0_20px_rgba(0,0,0,0.8)]" />
            
            {/* Horizontal Canopy/Overhang above entrance */}
            <div className="absolute bottom-[20vw] sm:bottom-[15vw] left-0 right-0 h-[10px] bg-gradient-to-b from-[#2a2a2a] to-[#000] shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-20" />
          </div>

          {/* Premium Signage */}
          <div className="absolute bottom-[22vw] sm:bottom-[17vw] flex justify-center z-30">
            <h2 
              className="text-[8px] sm:text-[10px] md:text-[14px] tracking-[0.6em] text-white/90 uppercase font-light text-center"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.8)' }}
            >
              Nikhil Web Studio
            </h2>
          </div>
        </div>

        {/* --- ENTRANCE STRUCTURE --- */}
        {/* Placed at the bottom resting on the floor */}
        <div className="relative w-[30vw] h-[40vw] max-w-[280px] max-h-[380px] border-[4px] border-[#1a1a1a] bg-black shadow-[0_0_100px_rgba(0,0,0,0.95)] flex flex-col items-center justify-end z-10 mb-[20vh]">
          
          {/* Inner Entrance Frame */}
          <div className="absolute inset-0 border border-[#333]" />

          {/* Warm Interior Base Light (Behind Doors) */}
          <div className="absolute inset-0 bg-[#faf6f0] opacity-10" />
          
          {/* Deep interior volume illusion */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-0" />

          {/* --- SLIDING GLASS DOORS --- */}
          <div className="absolute inset-0 flex z-10 overflow-hidden">
            
            {/* Left Door */}
            <div 
              className="relative w-1/2 h-full border-r border-[#222] bg-black/60 backdrop-blur-sm transition-transform duration-75 origin-left transform-gpu will-change-transform"
              style={{ transform: `translateX(${leftDoorTranslate}%)` }}
            >
              {/* Door Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
              {/* Vertical Glowing Handle */}
              <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[3px] h-[30%] bg-gradient-to-b from-[#444] via-[#888] to-[#444] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </div>

            {/* Right Door */}
            <div 
              className="relative w-1/2 h-full border-l border-[#222] bg-black/60 backdrop-blur-sm transition-transform duration-75 origin-right transform-gpu will-change-transform"
              style={{ transform: `translateX(${rightDoorTranslate}%)` }}
            >
              {/* Door Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.05] to-transparent" />
              {/* Vertical Glowing Handle */}
              <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[3px] h-[30%] bg-gradient-to-b from-[#444] via-[#888] to-[#444] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </div>

          </div>

          {/* Seam Light (Bright warm light bleeding through the door crack before opening) */}
          <div 
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#fff0d4] z-20 mix-blend-screen shadow-[0_0_20px_#ffecd2] transition-opacity duration-75"
            style={{ opacity: doorOpenProgress > 0 && doorOpenProgress < 1 ? 1 : 0 }}
          />

          {/* Intense Interior Glow that overtakes the camera as doors open */}
          <div 
            className="absolute inset-[20%] bg-[#ffffff] mix-blend-screen transition-opacity duration-75 blur-[30px] z-30 pointer-events-none"
            style={{ opacity: glowProgress, transform: `scale(${1 + glowProgress * 5})` }}
          />
        </div>

        {/* --- FLOOR & REFLECTIONS --- */}
        <div 
          className="absolute bottom-0 w-[200vw] h-[20vh] bg-black transform perspective-[1000px] rotateX(70deg) origin-top border-t border-[#1a1a1a]"
          style={{ opacity: exteriorOpacity }}
        >
          {/* Concrete/Tile Floor texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_2px,transparent_2px),linear-gradient(to_bottom,#0a0a0a_2px,transparent_2px)] bg-[size:100px_100px]" />
          
          {/* Floor Light Spill from the entrance */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] h-[60vh] bg-[radial-gradient(ellipse_at_top,#fff0d4_0%,transparent_60%)] mix-blend-screen opacity-10 blur-[20px]"
            style={{ opacity: 0.1 + glowProgress * 0.4 }}
          />
        </div>

      </div>

      {/* --- FINAL WARM-OUT TRANSITION COVER --- */}
      {/* Transitions the dark exterior into the warm premium studio interior */}
      <div 
        className="absolute inset-0 bg-[#F7F3EA] pointer-events-none transition-opacity duration-75 z-50 flex items-center justify-center overflow-hidden"
        style={{ opacity: Math.max(0, (scrollProgress - 0.75) * 4) }} 
      >
        <StudioLampGlow position="top-right" color="rgba(200, 169, 106, 0.4)" />
        <StudioDeskSurface variant="bottom" className="opacity-100" />
        
        {/* Entrance Plant */}
        <div className="absolute bottom-[5%] right-[10vw] w-[150px] h-[300px] md:w-[200px] md:h-[400px] transform rotate-3 hidden md:block drop-shadow-2xl opacity-85 z-10">
          <StudioPlant />
        </div>

        <div className="absolute bottom-[5%] left-[10vw] w-[400px] h-[250px] transform -rotate-12 hidden md:block drop-shadow-2xl opacity-90">
          <OpenBookIllustration />
        </div>

        <div 
          className="text-[#4A3023] uppercase font-light relative z-10 will-change-transform"
          style={{ 
            opacity: scrollProgress > 0.75 && scrollProgress <= 0.80 
              ? (scrollProgress - 0.75) / 0.05 
              : scrollProgress > 0.80 && scrollProgress <= 0.92 
                ? 1 
                : scrollProgress > 0.92 && scrollProgress <= 0.98 
                  ? 1 - ((scrollProgress - 0.92) / 0.06) 
                  : 0,
            fontSize: "clamp(28px, 5vw, 72px)",
            letterSpacing: "0.22em",
            transform: `scale(${1 + Math.max(0, scrollProgress - 0.75) * 0.5}) translateY(${Math.max(0, scrollProgress - 0.75) * -50}px)`,
            filter: `blur(${scrollProgress > 0.94 ? (scrollProgress - 0.94) * 100 : 0}px)`
          }}
        >
          Entering Studio
        </div>
      </div>

    </div>
  );
}
