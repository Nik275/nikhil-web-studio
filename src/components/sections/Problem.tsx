"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle, ImageIcon, Phone, XCircle, CheckCircle2, MessageCircle } from "lucide-react";

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

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'm interested in getting a free homepage preview for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  const painPoints = [
    {
      icon: XCircle,
      title: "Customers cannot quickly see services and prices",
      description:
        "Potential customers visit your profile but leave because they cannot find clear information about what you offer and how much it costs.",
    },
    {
      icon: ImageIcon,
      title: "Instagram alone does not build enough trust",
      description:
        "Social media is great for discovery, but serious customers expect a professional website that shows you are a legitimate business.",
    },
    {
      icon: Phone,
      title: "No clear WhatsApp/call flow means lost enquiries",
      description:
        "Without a clear way to contact you, interested customers get frustrated and move on to competitors who make it easier.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 lg:py-32 bg-[#fafaf9] pb-28 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Your Business May Be Good.
            <br />
            <span className="text-stone-600">But Does It Look Good Online?</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Most small businesses lose trust because their online presence looks outdated, 
            incomplete, or only depends on Instagram. A proper website helps customers 
            quickly see services, prices, location, reviews, and contact options.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 border border-stone-200 shadow-sm card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                {point.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Box */}
        <div
          className={`relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-medium">The Solution</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                A clean website makes your business look trustworthy and makes it 
                easier for customers to contact you.
              </h3>
              <p className="text-stone-400 text-lg">
                No complicated features. No bloated pages. Just a professional website 
                that turns visitors into leads.
              </p>
            </div>
            <Button
              onClick={openWhatsApp}
              className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-xl whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Homepage Preview
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
