import React from "react";

interface StudioLampGlowProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  color?: string; // e.g., "rgba(200, 169, 106, 0.4)" for Soft Gold
}

export function StudioLampGlow({
  className = "",
  position = "top-left",
  color = "rgba(200, 169, 106, 0.35)", // Stronger default glow
}: StudioLampGlowProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0 transform rotate-180",
    "bottom-right": "bottom-0 right-0 transform -scale-x-100 rotate-180",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`absolute pointer-events-none z-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] ${positionClasses[position]} ${className}`} aria-hidden="true">
      {/* Intense light center */}
      <div
        className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 50%)`,
          mixBlendMode: "screen",
        }}
      />
      
      {/* Light cone/ray */}
      <div 
        className="absolute top-[20px] left-[20px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] origin-top-left transform rotate-12"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, transparent 60%)`,
          mixBlendMode: "screen",
          clipPath: "polygon(0 0, 100% 40%, 60% 100%)",
        }}
      />

      {/* Minimalistic Lamp Fixture Silhouette */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-10px] left-[-10px] opacity-60 drop-shadow-md"
      >
        {/* Wall mount base */}
        <path d="M0 20 L20 20 L20 40 L0 40 Z" fill="#4A3023" />
        {/* Arm extending out */}
        <path d="M20 30 L60 30" stroke="#4A3023" strokeWidth="4" />
        {/* Lamp head angled down */}
        <path d="M55 25 L85 45 L75 60 L45 40 Z" fill="#4A3023" />
        <path d="M85 45 C90 48, 85 55, 75 60 L45 40 Z" fill="#F7F3EA" opacity="0.8" />
      </svg>
    </div>
  );
}
