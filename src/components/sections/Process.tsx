"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { OpenBookIllustration } from "../decorations/OpenBookIllustration";
import { StationerySet } from "../decorations/StationerySet";
import { StudioDeskSurface } from "../decorations/StudioDeskSurface";
import { StudioLampGlow } from "../decorations/StudioLampGlow";
import { FlowerPot } from "../decorations/FlowerPot";

const steps = [
  {
    number: "01",
    title: "Business Audit",
    description: "I check your current online presence, competitors, and what your customers need to see.",
  },
  {
    number: "02",
    title: "Free Homepage Preview",
    description: "I create a homepage preview so you can see how your business could look online.",
  },
  {
    number: "03",
    title: "Content Collection",
    description: "You share logo, photos, services, prices, location, and contact details.",
  },
  {
    number: "04",
    title: "Website Build",
    description: "I build the full mobile-first website with WhatsApp, call, Google Maps, and lead-focused sections.",
  },
  {
    number: "05",
    title: "Launch and Support",
    description: "The website goes live, and I help with updates or maintenance if needed.",
  },
];

export function Process() {
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

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'm ready to start. Can we begin with the business audit?"
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 lg:py-40 bg-[#F7F3EA] text-[#111111] overflow-hidden"
    >
      {/* Decorative Elements */}
      <StudioDeskSurface variant="bottom" className="opacity-90" />
      <StudioLampGlow position="top-right" color="rgba(200, 169, 106, 0.25)" />
      
      {/* Designer's Planning Desk Props */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] transform rotate-12 hidden lg:block pointer-events-none drop-shadow-2xl opacity-90 z-0">
        <OpenBookIllustration />
      </div>
      <div className="absolute bottom-[5%] left-[5%] w-[300px] h-[300px] transform -rotate-12 hidden lg:block pointer-events-none drop-shadow-2xl opacity-90 z-0">
        <StationerySet />
      </div>
      <div className="absolute top-[20%] left-[2%] w-[120px] h-[150px] transform -rotate-6 hidden lg:block pointer-events-none drop-shadow-xl opacity-85 z-0">
        <FlowerPot variant="lavender" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`max-w-4xl mb-32 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-[10px] sm:text-xs font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-12">
            The Process
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-thin tracking-tight leading-[1.0] text-[#111111] mb-12">
            Simple.<br />
            <span className="text-[#9A8172]">Streamlined.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#7C8068] font-light leading-relaxed max-w-2xl">
            A transparent process to get your business online and generating leads without the headache.
          </p>
        </div>

        {/* Process Steps (Workflow Wall) */}
        <div className="relative border-l border-[#d8cdbf] ml-4 lg:ml-12 pl-8 lg:pl-24 space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 lg:gap-16 items-start transition-all duration-1000 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Timeline Node & Connection */}
              <div className="absolute -left-[32.5px] lg:-left-[96.5px] top-2 flex items-center justify-center w-4 h-4 bg-[#F7F3EA] border-2 border-[#4A3023] rounded-full transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute -left-[32.5px] lg:-left-[96.5px] top-6 bottom-[-96px] w-[1px] bg-gradient-to-b from-[#4A3023] to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-20" />

              <div className="w-24 shrink-0">
                <div className="text-[10px] font-medium text-[#9A8172] uppercase tracking-widest mb-2">Step</div>
                <div className="text-4xl lg:text-5xl font-thin text-[#111111]">
                  {step.number}
                </div>
              </div>
              
              <div className="flex-1 bg-[#E8DED1] p-8 lg:p-12 border border-[#d8cdbf] shadow-[0_10px_20px_rgba(74,48,35,0.03)] transition-shadow duration-500 group-hover:shadow-[0_20px_40px_rgba(74,48,35,0.06)]">
                <h3 className="text-2xl lg:text-3xl font-light text-[#111111] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-[#7C8068] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-32 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Button
            onClick={openWhatsApp}
            variant="default"
            className="px-10 py-6 text-sm tracking-[0.2em] uppercase"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
