import React from "react";

interface FlowerPotProps {
  className?: string;
  variant?: "pink" | "yellow" | "lavender";
}

export function FlowerPot({
  className = "",
  variant = "pink",
}: FlowerPotProps) {
  const flowerColors = {
    pink: { main: "#D49A89", light: "#E5B5A8" }, // Dusty Pink/Coral
    yellow: { main: "#DFCC8E", light: "#EAE0B7" }, // Soft Yellow
    lavender: { main: "#A89FBE", light: "#C1B9D1" }, // Muted Lavender
  };

  const colors = flowerColors[variant];

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 150 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        {/* Soft shadow on desk */}
        <ellipse cx="75" cy="185" rx="25" ry="6" fill="rgba(74,48,35,0.15)" filter="blur(3px)" />

        {/* --- Plant Stems & Leaves --- */}
        {/* Stems */}
        <path d="M75 140 Q60 100 45 70" stroke="#8E9B7B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M75 140 Q75 100 75 50" stroke="#8E9B7B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M75 140 Q95 110 115 80" stroke="#8E9B7B" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Leaves */}
        <path d="M60 110 Q40 105 45 125 Q65 130 60 110 Z" fill="#7C8068" />
        <path d="M90 120 Q110 110 105 130 Q85 140 90 120 Z" fill="#7C8068" />
        <path d="M75 90 Q60 80 65 100 Q80 110 75 90 Z" fill="#A5A58D" />
        <path d="M85 85 Q100 75 95 95 Q80 105 85 85 Z" fill="#A5A58D" />

        {/* --- Flowers --- */}
        {/* Left Flower */}
        <circle cx="45" cy="70" r="12" fill={colors.light} />
        <circle cx="45" cy="70" r="6" fill={colors.main} />
        <circle cx="41" cy="66" r="4" fill="#F7F3EA" opacity="0.8" />
        <circle cx="49" cy="66" r="4" fill="#F7F3EA" opacity="0.8" />
        <circle cx="45" cy="74" r="4" fill="#F7F3EA" opacity="0.8" />

        {/* Center Flower */}
        <circle cx="75" cy="50" r="14" fill={colors.light} />
        <circle cx="75" cy="50" r="7" fill={colors.main} />
        <circle cx="71" cy="46" r="5" fill="#F7F3EA" opacity="0.8" />
        <circle cx="79" cy="46" r="5" fill="#F7F3EA" opacity="0.8" />
        <circle cx="75" cy="55" r="5" fill="#F7F3EA" opacity="0.8" />

        {/* Right Flower */}
        <circle cx="115" cy="80" r="10" fill={colors.light} />
        <circle cx="115" cy="80" r="5" fill={colors.main} />
        <circle cx="112" cy="77" r="3" fill="#F7F3EA" opacity="0.8" />
        <circle cx="118" cy="77" r="3" fill="#F7F3EA" opacity="0.8" />
        <circle cx="115" cy="83" r="3" fill="#F7F3EA" opacity="0.8" />

        {/* --- Ceramic Pot --- */}
        {/* Pot Body */}
        <path d="M55 140 C55 180, 60 185, 75 185 C90 185, 95 180, 95 140 Z" fill="#E8DED1" />
        {/* Pot Neck/Rim */}
        <ellipse cx="75" cy="140" rx="20" ry="4" fill="#F7F3EA" />
        <ellipse cx="75" cy="140" rx="16" ry="2" fill="#D8CDBF" />
        {/* Pot Volume Shadow */}
        <path d="M55 140 C55 180, 60 185, 65 185 C60 185, 55 180, 55 140 Z" fill="rgba(74,48,35,0.1)" />
      </svg>
    </div>
  );
}
