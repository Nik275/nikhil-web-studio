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

const features = [
  {
    icon: MessageCircle,
    title: "Built for WhatsApp leads",
    description:
      "Every website is designed to drive enquiries directly to your WhatsApp, making it easy for customers to reach you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first design",
    description:
      "Your customers are on mobile. Your website is built for them first, with responsive design that works on all devices.",
  },
  {
    icon: Palette,
    title: "Clean premium visuals",
    description:
      "No cluttered templates. Every design is custom-crafted to look professional and build trust with your visitors.",
  },
  {
    icon: Zap,
    title: "Fast loading",
    description:
      "Speed matters. Your website loads quickly to keep visitors engaged and improve search rankings.",
  },
  {
    icon: Search,
    title: "Local SEO basics",
    description:
      "Built-in SEO structure helps your business show up when local customers search for your services.",
  },
  {
    icon: RefreshCw,
    title: "Easy to update",
    description:
      "Simple content management means you can make small changes yourself without technical knowledge.",
  },
  {
    icon: PenTool,
    title: "Business-focused copywriting",
    description:
      "Clear, conversion-focused content that speaks to your customers and drives them to take action.",
  },
  {
    icon: Eye,
    title: "Free homepage preview option",
    description:
      "See exactly how your business will look online before committing to the full project.",
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
            Built for Business Results,
            <br />
            <span className="text-gradient">Not Just Looks</span>.
          </h2>
          <p className="text-lg text-stone-400">
            Every element is designed with one goal: turning visitors into leads for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#18181b] to-[#27272a] rounded-2xl p-6 border border-white/5 card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            "Trusted by local businesses",
            "Fast turnaround times",
            "Dedicated support",
            "Results-focused approach",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-stone-500">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
