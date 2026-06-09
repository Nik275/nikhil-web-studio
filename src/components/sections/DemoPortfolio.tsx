"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ExternalLink, MessageCircle, Scissors, Dumbbell, Coffee, Check } from "lucide-react";

// Demo links - easy to replace
const DEMO_LINKS = {
  auraLuxe: "#", // Replace with: "https://your-demo-link.com/aura-luxe"
  ironForge: "#", // Replace with: "https://your-demo-link.com/iron-forge"
  bloomBrew: "#", // Replace with: "https://your-demo-link.com/bloom-brew"
};

const demos = [
  {
    id: "aura-luxe",
    icon: Scissors,
    category: "Premium Salon Website",
    title: "Aura Luxe Salon & Spa",
    description:
      "Elegant beauty website with services, packages, gallery, WhatsApp booking, and local SEO.",
    features: [
      "Service menu with pricing",
      "Package highlights",
      "Before/after gallery",
      "WhatsApp booking integration",
      "Customer testimonials",
      "Local SEO optimization",
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    previewGradient: "from-pink-100 via-rose-50 to-white",
  },
  {
    id: "iron-forge",
    icon: Dumbbell,
    category: "Premium Gym Website",
    title: "IronForge Fitness",
    description:
      "Bold fitness website with programs, transformation plans, membership pricing, and trial booking.",
    features: [
      "Training programs showcase",
      "Membership plans & pricing",
      "Transformation gallery",
      "Free trial booking",
      "Trainer profiles",
      "Class schedule",
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    previewGradient: "from-orange-100 via-red-50 to-white",
  },
  {
    id: "bloom-brew",
    icon: Coffee,
    category: "Modern Cafe Website",
    title: "Bloom & Brew Cafe",
    description:
      "Warm cafe website with menu, signature items, gallery, reservation CTA, and contact form.",
    features: [
      "Digital menu with photos",
      "Signature items highlight",
      "Ambiance gallery",
      "Table reservation",
      "Opening hours & location",
      "Online ordering link",
    ],
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    previewGradient: "from-amber-100 via-yellow-50 to-white",
  },
];

export function DemoPortfolio() {
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

  const openWhatsApp = (demoTitle: string) => {
    const message = encodeURIComponent(
      `Hi Nikhil, I saw the ${demoTitle} demo and want a similar website for my business.`
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  const getDemoLink = (id: string) => {
    switch (id) {
      case "aura-luxe":
        return DEMO_LINKS.auraLuxe;
      case "iron-forge":
        return DEMO_LINKS.ironForge;
      case "bloom-brew":
        return DEMO_LINKS.bloomBrew;
      default:
        return "#";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
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
            Demo Portfolio
          </h2>
          <p className="text-lg text-stone-600">
            See how your business could look online. These are real examples of websites 
            built for local businesses.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="space-y-12">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm card-hover transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Preview Side */}
                <div className={`relative p-8 lg:p-12 bg-gradient-to-br ${demo.previewGradient} ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* Preview mockup */}
                  <div className="relative mx-auto max-w-md">
                    {/* Browser frame */}
                    <div className="bg-stone-900 rounded-xl overflow-hidden shadow-2xl">
                      {/* Browser header */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-stone-800">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="flex-1 ml-4">
                          <div className="h-5 bg-stone-700 rounded-md max-w-xs mx-auto" />
                        </div>
                      </div>
                      {/* Browser content */}
                      <div className={`h-64 bg-gradient-to-br ${demo.previewGradient} p-4`}>
                        {/* Mock content */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${demo.color}`} />
                            <div className="flex-1">
                              <div className="h-3 w-24 bg-stone-300 rounded" />
                              <div className="h-2 w-16 bg-stone-200 rounded mt-1" />
                            </div>
                          </div>
                          <div className="h-24 bg-white/60 rounded-lg" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 bg-white/40 rounded" />
                            <div className="h-16 bg-white/40 rounded" />
                            <div className="h-16 bg-white/40 rounded" />
                          </div>
                          <div className="h-10 bg-gradient-to-r from-stone-400 to-stone-300 rounded-lg w-1/2 mx-auto" />
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -right-4 top-1/4 bg-white rounded-xl p-3 shadow-lg animate-float">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center`}>
                        <demo.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Category badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${demo.bgColor} w-fit mb-6`}>
                    <demo.icon className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${demo.color}`} style={{ color: 'inherit' }} />
                    <span className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${demo.color}`} style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, WebkitBackgroundClip: 'text' }}>
                      {demo.category}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">
                    {demo.title}
                  </h3>

                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => window.open(getDemoLink(demo.id), "_blank")}
                      className={`btn-primary bg-gradient-to-r ${demo.color} text-white px-6 py-5 rounded-xl font-semibold`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button
                      onClick={() => openWhatsApp(demo.title)}
                      variant="outline"
                      className="btn-secondary border-stone-300 text-stone-700 hover:bg-stone-50 px-6 py-5 rounded-xl font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Build Similar Site
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after demos */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={() => openWhatsApp("custom")}
            className="btn-primary bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base font-semibold rounded-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
