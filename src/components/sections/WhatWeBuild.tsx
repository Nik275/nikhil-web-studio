"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CinematicFrame } from "@/components/ui/CinematicFrame";
import { StudioLampGlow } from "../decorations/StudioLampGlow";
import { StationerySet } from "../decorations/StationerySet";

const services = [
  {
    title: "Salon & Spa Websites",
    description: "Elegant websites with services, packages, gallery, reviews, and WhatsApp booking.",
    benefit: "More booking enquiries through WhatsApp",
  },
  {
    title: "Gym & Fitness Websites",
    description: "Bold websites with programs, membership plans, transformation sections, and trial booking.",
    benefit: "More membership enquiries and trial signups",
  },
  {
    title: "Cafe & Restaurant Websites",
    description: "Warm websites with menu, gallery, table reservation, opening hours, and location.",
    benefit: "More table reservations and takeaway orders",
  },
  {
    title: "Coaching & Clinic Websites",
    description: "Clear websites with services, appointments, credibility sections, and enquiry forms.",
    benefit: "More appointment bookings and enquiries",
  },
  {
    title: "Portfolio Websites",
    description: "Premium personal or professional websites for creators, photographers, consultants, and experts.",
    benefit: "Stronger professional presence and client enquiries",
  },
  {
    title: "Local Service Business Websites",
    description: "Lead-focused websites for interior designers, electricians, repair services, and consultants.",
    benefit: "More local leads and service enquiries",
  },
];

export function WhatWeBuild() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const openWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi Nikhil, I'm interested in a ${serviceName} for my business. Can we discuss?`
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <div ref={sectionRef}>
      <CinematicFrame
        id="services"
        theme="green"
        className="py-24 lg:py-32 overflow-hidden"
      >
        {/* Decorative Elements */}
        <StudioLampGlow position="top-left" color="rgba(200, 169, 106, 0.25)" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] transform rotate-12 hidden lg:block pointer-events-none drop-shadow-xl opacity-80 z-0">
          <StationerySet />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          {/* Section Header */}
          <div
            className={`max-w-4xl mb-24 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-[10px] sm:text-xs font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-8">
              What We Build
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#111111] mb-8">
              Purpose-built websites.
            </h2>
            <p className="text-xl text-[#9A8172] font-light leading-relaxed max-w-2xl">
              Designed to convert visitors into leads for your specific type of business. No bloated templates.
            </p>
          </div>

          {/* Services Grid (Wall-mounted panels) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative p-8 lg:p-12 bg-[#E8DED1] border border-[#d8cdbf] shadow-[0_15px_35px_rgba(74,48,35,0.05)] transition-all duration-1000 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(74,48,35,0.08)] hover:-translate-y-1 ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Walnut Brown Top Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#4A3023]" />

                {/* Subtle panel reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/30 via-transparent to-[rgba(74,48,35,0.02)] pointer-events-none" />

                <div className="relative z-10 mt-2">
                  <h3 className="text-2xl font-light text-[#111111] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#7C8068] font-light leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="text-[10px] text-[#9A8172] uppercase tracking-widest mb-6 border-l border-[#C8A96A] pl-3">
                    {service.benefit}
                  </div>
                  
                  <Button
                    onClick={() => openWhatsApp(service.title)}
                    variant="default"
                    className="w-full text-xs uppercase tracking-widest"
                  >
                    Ask for this
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CinematicFrame>
    </div>
  );
}
