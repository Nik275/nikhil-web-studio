import React from "react";

interface OpenBookIllustrationProps {
  className?: string;
  color?: string;
}

export function OpenBookIllustration({
  className = "",
  color = "#4A3023", // Walnut Brown by default for stronger visibility
}: OpenBookIllustrationProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 140 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
        className="drop-shadow-xl"
      >
        {/* Soft Shadow */}
        <path
          d="M10 55 C40 60, 70 50, 70 35 C70 50, 100 60, 130 55 L130 15 C100 20, 70 10, 70 25 C70 10, 40 20, 10 15 Z"
          fill="rgba(74,48,35,0.15)"
          transform="translate(2, 6)"
          filter="blur(4px)"
        />

        {/* Back Cover / Pages Thickness */}
        <path
          d="M8 52 C38 52, 68 42, 68 27 L72 27 C72 42, 102 52, 132 52 L132 12 C102 12, 72 2, 70 15 C68 2, 38 12, 8 12 Z"
          fill="#E8DED1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Left Page Base Fill */}
        <path
          d="M10 50 C40 50, 70 40, 70 25 L70 10 C40 25, 10 15, 10 15 Z"
          fill="#F7F3EA"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Right Page Base Fill */}
        <path
          d="M130 50 C100 50, 70 40, 70 25 L70 10 C100 25, 130 15, 130 15 Z"
          fill="#F7F3EA"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Spine/Center Line */}
        <line x1="70" y1="10" x2="70" y2="45" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Page Line details (Left) */}
        <path d="M25 35 C45 38, 55 35, 60 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M25 28 C45 31, 55 28, 60 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M25 21 C45 24, 55 21, 60 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        
        {/* Page Line details (Right) */}
        <path d="M115 35 C95 38, 85 35, 80 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M115 28 C95 31, 85 28, 80 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M115 21 C95 24, 85 21, 80 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

        {/* Page thickness lines at the bottom edge */}
        <path d="M10 51 C40 51, 70 41, 70 26" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path d="M130 51 C100 51, 70 41, 70 26" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}
