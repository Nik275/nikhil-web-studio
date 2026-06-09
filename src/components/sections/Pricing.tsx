"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Check,
  MessageCircle,
  Star,
  Zap,
  Crown,
  RefreshCw,
} from "lucide-react";

const packages = [
  {
    id: "starter",
    icon: Zap,
    name: "Starter Website",
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
    icon: Star,
    name: "Business Website",
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
    icon: Crown,
    name: "Premium Website",
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
      className="relative py-24 lg:py-32 bg-[#fafaf9] pb-32 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-stone-600">
            Choose the package that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-700 card-hover ${
                pkg.popular
                  ? "border-blue-500 shadow-xl shadow-blue-500/10"
                  : "border-stone-200 shadow-sm hover:border-stone-300"
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  pkg.popular ? "bg-blue-100" : "bg-stone-100"
                }`}
              >
                <pkg.icon
                  className={`w-7 h-7 ${
                    pkg.popular ? "text-blue-600" : "text-stone-700"
                  }`}
                />
              </div>

              {/* Package name */}
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm text-stone-500 mb-4">{pkg.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-stone-900">
                  {pkg.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.popular
                          ? "bg-blue-100 text-blue-600"
                          : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => openWhatsApp(pkg.name)}
                className={`w-full py-5 rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  pkg.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-stone-900 hover:bg-stone-800 text-white shadow-lg shadow-stone-500/20"
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Maintenance Add-on */}
        <div
          className={`relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Monthly Maintenance
                  </h3>
                  <p className="text-2xl font-bold text-amber-400">
                    ₹999 – ₹2,999/month
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                {maintenanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-stone-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={() => openWhatsApp("Maintenance Plan")}
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-8 py-5 rounded-xl font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Add Maintenance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
