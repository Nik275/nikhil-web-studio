"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Smartphone,
  Palette,
  Zap,
  Search,
  RefreshCw,
  PenTool,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { StudioLampGlow } from "../decorations/StudioLampGlow";

const features = [
  {
    title: "Built for WhatsApp leads",
    description: "Every website is designed to drive enquiries directly to your WhatsApp, making it easy for customers to reach you.",
  },
  {
    title: "Mobile-first design",
    description: "Your customers are on mobile. Your website is built for them first, with responsive design that works on all devices.",
  },
  {
    title: "Clean premium visuals",
    description: "No cluttered templates. Every design is custom-crafted to look professional and build trust with your visitors.",
  },
  {
    title: "Fast loading",
    description: "Speed matters. Your website loads quickly to keep visitors engaged and improve search rankings.",
  },
  {
    title: "Local SEO basics",
    description: "Built-in SEO structure helps your business show up when local customers search for your services.",
  },
  {
    title: "Easy to update",
    description: "Simple content management means you can make small changes yourself without technical knowledge.",
  },
  {
    title: "Business-focused copywriting",
    description: "Clear, conversion-focused content that speaks to your customers and drives them to take action.",
  },
  {
    title: "Free preview option",
    description: "See exactly how your business will look online before committing to the full project.",
  },
];

export function WhyChooseUs() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-24 lg:py-32 bg-[#F7F3EA] text-[#111111] overflow-hidden"
    >
      {/* Decorative Elements */}
      <StudioLampGlow position="bottom-right" color="rgba(200, 169, 106, 0.08)" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`max-w-4xl mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-[10px] sm:text-xs font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-8">
            Why Us
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#111111] mb-8">
            Built for results.
            <br />
            <span className="text-[#9A8172]">Not just looks.</span>
          </h2>
          <p className="text-xl text-[#9A8172] font-light leading-relaxed max-w-2xl">
            Every element is designed with one goal: turning visitors into leads for your business.
          </p>
        </div>

        {/* Features Grid (Strategy Board) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
          {/* Subtle connecting lines behind panels */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#9A8172] opacity-30 hidden lg:block -z-10" />
          
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 bg-[#E8DED1] border border-[#d8cdbf] shadow-[0_10px_20px_rgba(74,48,35,0.03)] transition-all duration-1000 flex flex-col justify-between group hover:shadow-[0_15px_30px_rgba(74,48,35,0.06)] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <div className="text-[#9A8172] font-light text-[10px] uppercase tracking-widest mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-light text-[#111111] mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#7C8068] font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-24 flex flex-wrap justify-start lg:justify-center gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            "Trusted by local businesses",
            "Fast turnaround times",
            "Dedicated support",
            "Results-focused approach",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-[#9A8172] bg-[#F7F3EA] px-5 py-2.5 border border-[#C8A96A]/50 shadow-sm rounded-full">
              <div className="w-1.5 h-1.5 bg-[#B46A4C] rounded-full" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
