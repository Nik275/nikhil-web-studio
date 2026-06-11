import React from "react";

interface StationerySetProps {
  className?: string;
  color?: string;
}

export function StationerySet({
  className = "",
  color = "#4A3023", // Walnut Brown by default
}: StationerySetProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
        className="drop-shadow-lg"
      >
        {/* Soft shadow for the entire set */}
        <g filter="blur(4px)" transform="translate(3, 5)" fill="rgba(74,48,35,0.15)">
          <rect transform="rotate(-15, 75, 75)" x="30" y="30" width="70" height="90" rx="2" />
          <rect transform="rotate(25, 75, 75)" x="90" y="20" width="20" height="110" rx="1" />
          <rect transform="rotate(10, 75, 75)" x="50" y="50" width="40" height="40" />
        </g>

        {/* Notebook outline angled */}
        <g transform="rotate(-15, 75, 75)">
          {/* Cover fill */}
          <rect x="30" y="30" width="70" height="90" rx="2" fill="#E8DED1" stroke="currentColor" strokeWidth="1.5" />
          {/* Cover fold/spine */}
          <line x1="38" y1="30" x2="38" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          {/* Wire binding hints */}
          {[40, 50, 60, 70, 80, 90, 100, 110].map((y) => (
            <line key={y} x1="28" y1={y} x2="34" y2={y} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          ))}
        </g>

        {/* Sticky Note */}
        <g transform="rotate(10, 75, 75)">
          <rect x="50" y="50" width="40" height="40" fill="#F7F3EA" stroke="currentColor" strokeWidth="1" />
          {/* Subtle lines on sticky note */}
          <line x1="55" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          <line x1="55" y1="68" x2="85" y2="68" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          <line x1="55" y1="76" x2="75" y2="76" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        </g>

        {/* Ruler angled crossing */}
        <g transform="rotate(25, 75, 75)">
          <rect x="90" y="20" width="20" height="110" rx="1" fill="#Fdfaf5" stroke="currentColor" strokeWidth="1.5" />
          {/* Ruler markings */}
          {[30, 40, 50, 60, 70, 80, 90, 100, 110, 120].map((y, i) => (
            <line key={y} x1="90" y1={y} x2={i % 2 === 0 ? 98 : 95} y2={y} stroke="currentColor" strokeWidth="1" />
          ))}
        </g>

        {/* Pencil laying horizontally */}
        <g transform="rotate(-40, 75, 75) translate(-10, 30)">
          {/* Pencil body */}
          <path d="M40 90 L110 90 L110 96 L40 96 Z" fill="#E8DED1" stroke="currentColor" strokeWidth="1.5" />
          {/* Detail line on pencil */}
          <line x1="40" y1="93" x2="110" y2="93" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          {/* Pencil Tip */}
          <path d="M40 90 L28 93 L40 96 Z" fill="#F7F3EA" stroke="currentColor" strokeWidth="1.5" />
          {/* Graphite tip */}
          <path d="M33 91.5 L28 93 L33 94.5 Z" fill="currentColor" />
          {/* Pencil Eraser end */}
          <rect x="110" y="89" width="10" height="8" rx="1" fill="#C8A96A" stroke="currentColor" strokeWidth="1.5" />
          <line x1="113" y1="89" x2="113" y2="97" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
