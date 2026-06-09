"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Eye, Shield, Clock, ArrowRight } from "lucide-react";

export function FreePreview() {
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
      "Hi Nikhil, I'd like to request a free homepage preview for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="preview"
      className="relative py-24 lg:py-32 bg-[#fafaf9] overflow-hidden pb-28 md:pb-24"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Try Before You Commit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Want to See How Your Business Could Look Online?
            </h2>

            <p className="text-lg text-stone-600 leading-relaxed">
              I'll create a free homepage preview for your business. If you like it, 
              we can discuss the full website. No pressure, no payment for the preview.
            </p>

            {/* Trust indicators */}
            <div className="space-y-4">
              {[
                { icon: Shield, text: "No payment required for preview" },
                { icon: Clock, text: "Quick turnaround on preview" },
                { icon: Eye, text: "See exactly what you get" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-stone-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                onClick={openWhatsApp}
                className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Free Preview on WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="mt-4 text-sm text-stone-500">
                No pressure. No payment for the preview. You only move forward if you like the direction.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main preview card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
                {/* Preview header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">Free Preview</div>
                      <div className="text-sm text-stone-500">Homepage Design</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Free
                  </div>
                </div>

                {/* Preview content mockup */}
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-stone-100 to-stone-50 rounded-xl flex items-center justify-center">
                    <span className="text-stone-400 text-sm">Your Business Preview</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-stone-100 rounded" />
                    <div className="h-4 w-1/2 bg-stone-100 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-10 w-24 bg-blue-100 rounded-lg" />
                    <div className="h-10 w-24 bg-stone-100 rounded-lg" />
                  </div>
                </div>

                {/* Checklist */}
                <div className="mt-6 pt-6 border-t border-stone-100 space-y-3">
                  {[
                    "Custom design for your business",
                    "Mobile-responsive layout",
                    "WhatsApp integration preview",
                    "Your branding & colors",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-stone-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-stone-900">WhatsApp Ready</div>
                    <div className="text-[10px] text-stone-500">Direct leads</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-stone-900">Mobile First</div>
                    <div className="text-[10px] text-stone-500">Responsive design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
