"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Scissors,
  Dumbbell,
  Coffee,
  GraduationCap,
  Camera,
  Briefcase,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Salon & Spa Websites",
    description:
      "Elegant websites with services, packages, gallery, reviews, and WhatsApp booking.",
    benefit: "More booking enquiries through WhatsApp",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness Websites",
    description:
      "Bold websites with programs, membership plans, transformation sections, and trial booking.",
    benefit: "More membership enquiries and trial signups",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Coffee,
    title: "Cafe & Restaurant Websites",
    description:
      "Warm websites with menu, gallery, table reservation, opening hours, and location.",
    benefit: "More table reservations and takeaway orders",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Clinic Websites",
    description:
      "Clear websites with services, appointments, credibility sections, and enquiry forms.",
    benefit: "More appointment bookings and enquiries",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Camera,
    title: "Portfolio Websites",
    description:
      "Premium personal or professional websites for creators, photographers, consultants, and experts.",
    benefit: "Stronger professional presence and client enquiries",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Briefcase,
    title: "Local Service Business Websites",
    description:
      "Lead-focused websites for interior designers, electricians, repair services, and consultants.",
    benefit: "More local leads and service enquiries",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

export function WhatWeBuild() {
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

  const openWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi Nikhil, I'm interested in a ${serviceName} for my business. Can we discuss?`
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 bg-[#0a0a0a] pb-28 md:pb-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#18181b] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Build
          </h2>
          <p className="text-lg text-stone-400">
            Purpose-built websites designed to convert visitors into leads for your specific type of business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#18181b] to-[#27272a] rounded-2xl p-8 border border-white/5 overflow-hidden card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-stone-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Benefit */}
              <div className="flex items-start gap-2 mb-6">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2`} />
                <span className="text-sm text-stone-300">{service.benefit}</span>
              </div>

              {/* CTA */}
              <Button
                onClick={() => openWhatsApp(service.title)}
                variant="outline"
                className="w-full btn-secondary border-white/10 text-white hover:bg-white/5 hover:border-white/20 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask for this
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
