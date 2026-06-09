"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Smartphone,
  MessageCircle,
  Zap,
  MapPin,
  Scissors,
  Dumbbell,
  Coffee,
  Building2,
} from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'm interested in getting a free homepage preview for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#18181b] to-[#0a0a0a]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-5 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide uppercase">
                Premium Websites for Local Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
              Premium Websites for Local Businesses That Want{" "}
              <span className="text-gradient">More Leads</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-400 leading-relaxed max-w-xl">
              I build clean, mobile-first websites for salons, gyms, cafes, clinics, 
              coaching centers, and local businesses that want more WhatsApp enquiries, 
              bookings, calls, and trust.
            </p>

            {/* Founder line */}
            <p className="text-sm sm:text-base text-stone-500 border-l-2 border-blue-500 pl-4">
              Built by <span className="text-stone-300 font-medium">Nikhil Ogia</span> — for local 
              businesses that want to look premium online without wasting money on bloated agency websites.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                onClick={openWhatsApp}
                className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-xl"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Free Homepage Preview
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="btn-secondary border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-xl"
              >
                View Demo Sites
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
              {[
                { icon: Smartphone, text: "Mobile-first design" },
                { icon: MessageCircle, text: "WhatsApp lead focused" },
                { icon: Zap, text: "Fast delivery" },
                { icon: MapPin, text: "Local business friendly" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-stone-500"
                >
                  <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Panel */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main dashboard container */}
              <div className="relative bg-gradient-to-br from-[#18181b] to-[#27272a] rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-stone-500">Nikhil Web Studio</div>
                </div>

                {/* Dashboard content */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { label: "Leads", value: "127", change: "+23%" },
                      { label: "Views", value: "2.4K", change: "+45%" },
                      { label: "Bookings", value: "34", change: "+12%" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-2 sm:p-3 border border-white/5"
                      >
                        <div className="text-xs text-stone-500 mb-1">{stat.label}</div>
                        <div className="flex items-end justify-between">
                          <span className="text-base sm:text-xl font-bold text-white">{stat.value}</span>
                          <span className="text-xs text-green-400">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Website preview card */}
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                        <div>
                          <div className="h-2 sm:h-3 w-20 sm:w-24 bg-stone-200 rounded" />
                          <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-stone-100 rounded mt-1" />
                        </div>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="h-1.5 sm:h-2 w-full bg-stone-100 rounded" />
                        <div className="h-1.5 sm:h-2 w-3/4 bg-stone-100 rounded" />
                      </div>
                      <div className="flex gap-2 mt-2 sm:mt-3">
                        <div className="h-5 sm:h-6 w-12 sm:w-16 bg-blue-100 rounded-full" />
                        <div className="h-5 sm:h-6 w-12 sm:w-16 bg-stone-100 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Business categories */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      { icon: Scissors, label: "Salon" },
                      { icon: Dumbbell, label: "Gym" },
                      { icon: Coffee, label: "Cafe" },
                      { icon: Building2, label: "Clinic" },
                    ].map((cat, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full border border-white/10"
                      >
                        <cat.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                        <span className="text-xs text-stone-300">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating WhatsApp notification */}
                <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 bg-[#25D366] text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl animate-float">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <div>
                      <div className="text-xs font-medium">New Lead</div>
                      <div className="text-[8px] sm:text-[10px] opacity-90">Just now</div>
                    </div>
                  </div>
                </div>

                {/* Mobile mockup */}
                <div className="absolute -left-4 sm:-left-8 -top-2 sm:-top-4 w-16 sm:w-24 h-32 sm:h-44 bg-[#18181b] rounded-xl sm:rounded-2xl border-2 sm:border-4 border-stone-700 shadow-xl overflow-hidden animate-float" style={{ animationDelay: '1s' }}>
                  <div className="h-full bg-gradient-to-b from-[#27272a] to-[#18181b] p-1.5 sm:p-2">
                    <div className="w-full h-0.5 sm:h-1 bg-stone-600 rounded-full mb-1.5 sm:mb-2" />
                    <div className="space-y-1 sm:space-y-1.5">
                      <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded" />
                      <div className="h-1 sm:h-1.5 w-2/3 bg-white/10 rounded" />
                      <div className="h-5 sm:h-8 w-full bg-blue-500/20 rounded mt-1.5 sm:mt-2" />
                      <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded mt-1.5 sm:mt-2" />
                      <div className="h-1 sm:h-1.5 w-3/4 bg-white/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
