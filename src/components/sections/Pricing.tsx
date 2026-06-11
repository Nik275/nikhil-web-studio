"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "₹4,999 – ₹7,999",
    description: "Simple one-page websites",
    features: [
      "1-page website",
      "Mobile responsive design",
      "WhatsApp button",
      "Call button",
      "Google Maps section",
      "Basic SEO",
      "Delivery in 3–5 days",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    id: "business",
    name: "Business",
    price: "₹9,999 – ₹14,999",
    description: "Serious local businesses",
    features: [
      "4–5 pages",
      "Home, About, Services, Gallery, Contact",
      "WhatsApp lead flow",
      "Contact form",
      "Google Maps",
      "Basic local SEO",
      "Premium design",
      "Delivery in 5–7 days",
    ],
    cta: "Get Business Website",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹19,999 – ₹29,999",
    description: "Stronger brand presence",
    features: [
      "5–7 pages",
      "Premium custom design",
      "Advanced sections",
      "Better visuals",
      "Conversion-focused layout",
      "Local SEO structure",
      "Analytics setup",
      "Delivery in 7–14 days",
    ],
    cta: "Discuss Premium Site",
    popular: false,
  },
];

const maintenanceFeatures = [
  "Small content updates",
  "Image changes",
  "Offer/banner updates",
  "Basic support",
  "Performance checks",
  "Minor edits",
];

export function Pricing() {
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

  const openWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(
      `Hi Nikhil, I'm interested in the ${packageName}. Can we discuss?`
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-24 lg:py-40 bg-[#F7F3EA] text-[#111111]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`max-w-4xl mb-32 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-[10px] sm:text-xs font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-12">
            Pricing
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-thin tracking-tight leading-[1.0] text-[#111111] mb-12">
            Transparent.<br />
            <span className="text-[#9A8172]">No surprises.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#7C8068] font-light leading-relaxed max-w-2xl">
            Choose the package that fits your business needs. No hidden fees.
          </p>
        </div>

        {/* Editorial Pricing Columns (Wall Panels) */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-0 mb-32 relative">
          
          {/* Subtle wall rail behind panels */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#d8cdbf] hidden lg:block -z-10" />

          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative p-10 lg:p-16 border border-[#d8cdbf] transition-all duration-1000 flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${pkg.popular ? "bg-[#4A3023] text-[#F7F3EA] lg:-mt-6 lg:-mb-6 z-10 shadow-[0_40px_80px_rgba(74,48,35,0.2)] rounded-md border-[#4A3023]" : "bg-[#E8DED1] text-[#111111] lg:border-l-0 lg:first:border-l"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-8 bg-[#F7F3EA] text-[#4A3023] text-[10px] uppercase tracking-widest px-4 py-2 font-medium shadow-sm">
                  Most Chosen
                </div>
              )}

              <div>
                <div className={`text-[10px] uppercase tracking-[0.2em] mb-8 ${pkg.popular ? "text-[#C8A96A]" : "text-[#9A8172]"}`}>
                  Package 0{index + 1}
                </div>
                <h3 className={`text-3xl font-light mb-4 tracking-tight ${pkg.popular ? "text-[#F7F3EA]" : "text-[#111111]"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-light leading-relaxed mb-12 min-h-[48px] ${pkg.popular ? "text-[#E8DED1]" : "text-[#7C8068]"}`}>
                  {pkg.description}
                </p>

                <div className={`text-4xl font-thin mb-16 tracking-tight ${pkg.popular ? "text-[#F7F3EA]" : "text-[#111111]"}`}>
                  {pkg.price}
                </div>

                <div className={`text-[10px] uppercase tracking-[0.2em] mb-8 border-b pb-4 ${pkg.popular ? "text-[#C8A96A] border-[#9A8172]/30" : "text-[#9A8172] border-[#d8cdbf]"}`}>
                  Includes
                </div>

                <ul className="space-y-4 mb-16">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`font-light text-sm lg:text-base ${pkg.popular ? "text-[#F7F3EA]" : "text-[#7C8068]"}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => openWhatsApp(pkg.name)}
                variant={pkg.popular ? "white" : "default"}
                className="w-full text-xs tracking-[0.2em] uppercase py-6"
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Maintenance Add-on */}
        <div
          className={`bg-[#E8DED1] border border-[#d8cdbf] p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 transition-all duration-1000 delay-500 shadow-[0_15px_35px_rgba(74,48,35,0.02)] rounded-sm ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex-1">
            <div className="text-[10px] font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-8 border-l border-[#C8A96A] pl-3">
              Optional Add-on
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 mb-10">
              <h3 className="text-4xl lg:text-5xl font-thin text-[#111111] tracking-tight leading-[1.1]">
                Monthly Maintenance
              </h3>
              <p className="text-2xl font-light text-[#9A8172] lg:pb-1">
                ₹999 – ₹2,999/mo
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {maintenanceFeatures.map((feature, index) => (
                <div key={index} className="text-[#7C8068] font-light text-sm lg:text-base">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={() => openWhatsApp("Maintenance Plan")}
            variant="default"
            className="whitespace-nowrap shrink-0 px-8 py-6 text-xs tracking-[0.2em] uppercase"
          >
            Add Maintenance
          </Button>
        </div>
      </div>
    </section>
  );
}
