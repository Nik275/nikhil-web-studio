"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Search,
  Eye,
  FileText,
  Code,
  Rocket,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Business Audit",
    description:
      "I check your current online presence, competitors, and what your customers need to see.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Free Homepage Preview",
    description:
      "I create a homepage preview so you can see how your business could look online.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Content Collection",
    description:
      "You share logo, photos, services, prices, location, and contact details.",
  },
  {
    icon: Code,
    number: "04",
    title: "Website Build",
    description:
      "I build the full mobile-first website with WhatsApp, call, Google Maps, and lead-focused sections.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch and Support",
    description:
      "The website goes live, and I help with updates or maintenance if needed.",
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
      className="relative py-24 lg:py-32 bg-[#0a0a0a] pb-28 md:pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#18181b] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-stone-400">
            A simple, streamlined process to get your business online and generating leads.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-6 lg:gap-12 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon & Number */}
                  <div
                    className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#18181b] to-[#27272a] border border-white/10 flex items-center justify-center z-10 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <step.icon className="w-7 h-7 text-blue-400" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 1 ? "md:text-right md:order-1" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-400 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={openWhatsApp}
            className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
