"use client";

import { useEffect, useRef, useState } from "react";

export function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const painPoints = [
    {
      title: "Lack of Information",
      description:
        "Potential customers visit your profile but leave because they cannot find clear information about what you offer and how much it costs.",
    },
    {
      title: "Trust Deficit",
      description:
        "Social media is great for discovery, but serious customers expect a professional website that shows you are a legitimate business.",
    },
    {
      title: "Lost Leads",
      description:
        "Without a clear way to contact you, interested customers get frustrated and move on to competitors who make it easier.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 lg:py-40 bg-white text-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`max-w-5xl mb-32 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-[10px] sm:text-xs font-medium text-[#9a9a9a] tracking-[0.2em] uppercase mb-12">
            The Problem
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-thin tracking-tight leading-[1.0] text-black mb-12">
            Your business is good.<br/>
            <span className="text-[#a0a0a0]">But does it look good online?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#6d6d6d] font-light leading-relaxed max-w-3xl">
            Most small businesses lose trust because their online presence looks outdated, 
            incomplete, or relies solely on Instagram. A proper website helps customers 
            quickly find what they need and contact you immediately.
          </p>
        </div>

        {/* Editorial Columns */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-[#e0e0e0]">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`p-10 lg:p-16 border-r border-b border-[#e0e0e0] bg-white transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="text-[10px] text-[#a0a0a0] uppercase tracking-[0.2em] mb-12">
                Issue 0{index + 1}
              </div>
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight">
                {point.title}
              </h3>
              <p className="text-[#6d6d6d] font-light leading-relaxed text-sm lg:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
