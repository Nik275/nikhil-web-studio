import React from "react";

interface StudioPlantProps {
  className?: string;
  potColor?: string;
  leafColor?: string;
}

export function StudioPlant({
  className = "",
  potColor = "#A45C40", // Muted terracotta
  leafColor = "#6B705C", // Muted olive
}: StudioPlantProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Soft shadow on floor */}
        <ellipse cx="100" cy="380" rx="40" ry="10" fill="rgba(74,48,35,0.15)" filter="blur(4px)" />

        {/* --- Snake Plant Leaves --- */}
        {/* Back Leaves */}
        <path d="M100 320 C80 200, 30 150, 40 50 C50 120, 80 250, 100 320 Z" fill={leafColor} opacity="0.8" />
        <path d="M100 320 C120 200, 160 180, 180 80 C150 140, 120 250, 100 320 Z" fill={leafColor} opacity="0.85" />
        <path d="M100 320 C90 180, 70 120, 80 20 C90 100, 100 250, 100 320 Z" fill={leafColor} opacity="0.9" />
        
        {/* Mid Leaves */}
        <path d="M100 320 C70 240, 45 180, 50 100 C65 170, 90 260, 100 320 Z" fill={leafColor} />
        <path d="M100 320 C130 250, 145 200, 150 110 C135 180, 110 270, 100 320 Z" fill={leafColor} />
        
        {/* Front Leaves */}
        <path d="M100 320 C85 270, 60 210, 70 140 C80 210, 95 280, 100 320 Z" fill="#7C8068" />
        <path d="M100 320 C115 280, 130 230, 120 150 C110 220, 105 280, 100 320 Z" fill="#7C8068" />
        <path d="M100 320 C95 250, 90 190, 100 100 C105 190, 105 270, 100 320 Z" fill="#888c74" />

        {/* --- Terracotta Pot --- */}
        {/* Pot Base */}
        <path d="M70 380 L130 380 L145 300 L55 300 Z" fill={potColor} />
        {/* Pot Rim */}
        <rect x="50" y="290" width="100" height="15" rx="3" fill="#8B4A36" />
        {/* Inner soil (hidden by leaves but adds depth) */}
        <ellipse cx="100" cy="305" rx="45" ry="5" fill="#4A3023" />
        
        {/* Pot shadow/highlight for cylindrical volume */}
        <path d="M55 300 L70 380 L80 380 L65 300 Z" fill="rgba(0,0,0,0.15)" />
        <path d="M145 300 L130 380 L120 380 L135 300 Z" fill="rgba(255,255,255,0.1)" />
      </svg>
    </div>
  );
}
