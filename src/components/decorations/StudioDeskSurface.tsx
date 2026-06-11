import React from "react";

interface StudioDeskSurfaceProps {
  className?: string;
  variant?: "top" | "bottom" | "left" | "right";
  color?: string; // base color for desk
}

export function StudioDeskSurface({
  className = "",
  variant = "bottom",
  color = "#E8DED1", // Warm beige desk surface by default
}: StudioDeskSurfaceProps) {
  const positioning = {
    top: "top-0 left-0 right-0 h-48",
    bottom: "bottom-0 left-0 right-0 h-48",
    left: "top-0 bottom-0 left-0 w-48",
    right: "top-0 bottom-0 right-0 w-48",
  };

  const gradientDirection = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
  };

  return (
    <div className={`absolute pointer-events-none z-0 ${positioning[variant]} ${className}`} aria-hidden="true">
      {/* Desk Surface Main Block */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${gradientDirection[variant]}, ${color} 0%, transparent 100%)`,
          opacity: 0.95
        }}
      />
      
      {/* Strong Desk Edge Line */}
      <div 
        className={`absolute bg-[#4A3023] ${
          variant === "bottom" ? "bottom-32 left-0 right-0 h-[2px]" :
          variant === "top" ? "top-32 left-0 right-0 h-[2px]" :
          variant === "left" ? "left-32 top-0 bottom-0 w-[2px]" :
          "right-32 top-0 bottom-0 w-[2px]"
        }`}
        style={{ boxShadow: "0 4px 20px rgba(74,48,35,0.4)" }}
      />
      
      {/* Soft shadow dropping off the edge */}
      <div 
        className={`absolute bg-gradient-to-t from-[rgba(74,48,35,0.15)] to-transparent ${
          variant === "bottom" ? "bottom-[128px] left-0 right-0 h-16" :
          variant === "top" ? "top-[128px] left-0 right-0 h-16 transform rotate-180" :
          variant === "left" ? "left-[128px] top-0 bottom-0 w-16 transform rotate-90" :
          "right-[128px] top-0 bottom-0 w-16 transform -rotate-90"
        }`}
      />
    </div>
  );
}
