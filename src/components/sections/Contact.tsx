"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CinematicFrame } from "@/components/ui/CinematicFrame";
import { StudioLampGlow } from "../decorations/StudioLampGlow";
import { StudioDeskSurface } from "../decorations/StudioDeskSurface";
import { StationerySet } from "../decorations/StationerySet";
import { StudioPlant } from "../decorations/StudioPlant";
import { FlowerPot } from "../decorations/FlowerPot";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    phone: "",
    message: "",
  });
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Hi Nikhil, I'm interested in a website for my business.

Name: ${formData.name}
Business: ${formData.businessName}
Type: ${formData.businessType}
Phone: ${formData.phone}

Message: ${formData.message}`
    );
    
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Nikhil, I'm interested in getting a website for my business."
    );
    window.open(`https://wa.me/919350647437?text=${message}`, "_blank");
  };

  return (
    <div ref={sectionRef}>
      <CinematicFrame
        id="contact"
        theme="darkroom"
        className="py-24 lg:py-32 overflow-hidden"
      >
        {/* Decorative Elements */}
        <StudioDeskSurface variant="bottom" className="opacity-100" />
        <StudioLampGlow position="top-right" color="rgba(200, 169, 106, 0.25)" />
        <div className="absolute bottom-[2%] right-[5%] w-[250px] h-[250px] transform rotate-6 hidden lg:block pointer-events-none drop-shadow-2xl opacity-90 z-0">
          <StationerySet />
        </div>
        <div className="absolute top-[10%] left-[5%] w-[200px] h-[400px] transform rotate-2 hidden lg:block pointer-events-none drop-shadow-2xl opacity-80 z-0">
          <StudioPlant />
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          {/* Section Header */}
          <div
            className={`max-w-4xl mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-[10px] sm:text-xs font-medium text-[#9A8172] tracking-[0.2em] uppercase mb-8">
              Reception
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#111111] mb-8">
              Ready to upgrade?
            </h2>
            <p className="text-xl text-[#7C8068] font-light leading-relaxed max-w-2xl">
              Get in touch and let's discuss how a professional website can bring more leads to your business.
            </p>
          </div>

          {/* Premium Dark Reception Panel */}
          <div className="bg-[#4A3023] text-[#F7F3EA] rounded-md p-8 lg:p-16 shadow-[0_40px_80px_rgba(74,48,35,0.3)] border border-[#3a261c]">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 relative">
              
              {/* Subtle divider */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-[40%] w-[1px] bg-gradient-to-b from-transparent via-[#C8A96A]/20 to-transparent" />

              {/* Contact Info */}
              <div
                className={`space-y-16 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                <div className="space-y-12">
                  <div className="space-y-8">
                    <div className="border-b border-[#C8A96A]/20 pb-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] mb-2">Studio</div>
                      <div className="text-lg font-light text-[#F7F3EA]">Nikhil Web Studio</div>
                    </div>

                    <div className="border-b border-[#C8A96A]/20 pb-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] mb-2">WhatsApp</div>
                      <a 
                        href="https://wa.me/919350647437"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-light text-[#F7F3EA] hover:text-[#C8A96A] transition-colors"
                      >
                        +91 93506 47437
                      </a>
                    </div>

                    <div className="border-b border-[#C8A96A]/20 pb-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] mb-2">Email</div>
                      <a
                        href="mailto:nikhilogia@gmail.com"
                        className="text-lg font-light text-[#F7F3EA] hover:text-[#C8A96A] transition-colors"
                      >
                        nikhilogia@gmail.com
                      </a>
                    </div>

                    <div className="border-b border-[#C8A96A]/20 pb-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] mb-2">Instagram</div>
                      <a
                        href="https://instagram.com/nikhilogia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-light text-[#F7F3EA] hover:text-[#C8A96A] transition-colors"
                      >
                        @nikhilogia
                      </a>
                    </div>

                    <div className="border-b border-[#C8A96A]/20 pb-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] mb-2">Location</div>
                      <div className="text-lg font-light text-[#F7F3EA] max-w-xs leading-relaxed">Arya Nagar, Rohtak - 124001, Haryana, India</div>
                    </div>
                  </div>

                  <Button
                    onClick={openWhatsApp}
                    variant="outline-white"
                    className="w-full sm:w-auto uppercase tracking-widest text-xs"
                  >
                    Message on WhatsApp
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-light text-[#F7F3EA] mb-12">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-[#C8A96A]/30 pb-4 text-[#F7F3EA] font-light placeholder-[#9A8172] focus:outline-none focus:border-[#F7F3EA] transition-colors text-lg"
                        placeholder="Your Name *"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-[#C8A96A]/30 pb-4 text-[#F7F3EA] font-light placeholder-[#9A8172] focus:outline-none focus:border-[#F7F3EA] transition-colors text-lg"
                        placeholder="Business Name *"
                      />
                    </div>

                    <div className="relative">
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className={`w-full bg-transparent border-b border-[#C8A96A]/30 pb-4 font-light focus:outline-none focus:border-[#F7F3EA] transition-colors appearance-none cursor-pointer text-lg ${formData.businessType ? "text-[#F7F3EA]" : "text-[#9A8172]"}`}
                      >
                        <option value="" disabled className="bg-[#4A3023] text-[#9A8172]">Business Type *</option>
                        <option value="Salon/Spa" className="bg-[#4A3023] text-[#F7F3EA]">Salon/Spa</option>
                        <option value="Gym/Fitness" className="bg-[#4A3023] text-[#F7F3EA]">Gym/Fitness</option>
                        <option value="Cafe/Restaurant" className="bg-[#4A3023] text-[#F7F3EA]">Cafe/Restaurant</option>
                        <option value="Clinic" className="bg-[#4A3023] text-[#F7F3EA]">Clinic</option>
                        <option value="Coaching Center" className="bg-[#4A3023] text-[#F7F3EA]">Coaching Center</option>
                        <option value="PG/Hostel" className="bg-[#4A3023] text-[#F7F3EA]">PG/Hostel</option>
                        <option value="Photography" className="bg-[#4A3023] text-[#F7F3EA]">Photography</option>
                        <option value="Local Service" className="bg-[#4A3023] text-[#F7F3EA]">Local Service</option>
                        <option value="Other" className="bg-[#4A3023] text-[#F7F3EA]">Other</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A8172] pointer-events-none" />
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-[#C8A96A]/30 pb-4 text-[#F7F3EA] font-light placeholder-[#9A8172] focus:outline-none focus:border-[#F7F3EA] transition-colors text-lg"
                        placeholder="Phone Number *"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={1}
                        className="w-full bg-transparent border-b border-[#C8A96A]/30 pb-4 text-[#F7F3EA] font-light placeholder-[#9A8172] focus:outline-none focus:border-[#F7F3EA] transition-colors resize-none text-lg overflow-hidden"
                        placeholder="Message (Optional)"
                      />
                    </div>

                    <div className="pt-8 pb-16 sm:pb-0">
                      <Button
                        type="submit"
                        variant="white"
                        className="w-full uppercase tracking-widest text-xs min-h-[50px]"
                      >
                        Send Message on WhatsApp
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CinematicFrame>
    </div>
  );
}

// ChevronDown component for the select dropdown
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
