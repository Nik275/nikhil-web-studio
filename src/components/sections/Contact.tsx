"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  MessageCircle,
  Mail,
  MapPin,
  User,
  Building2,
  Briefcase,
  Phone,
  Send,
  Camera,
} from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    phone: "",
    message: "",
  });
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
    <section
      ref={sectionRef}
      id="contact"
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
            Ready to Upgrade Your Business Online?
          </h2>
          <p className="text-lg text-stone-600">
            Get in touch and let's discuss how a professional website can bring more leads to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* WhatsApp CTA Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chat on WhatsApp</h3>
                  <p className="text-green-100">Fastest way to reach me</p>
                </div>
              </div>
              <p className="text-green-100 mb-6">
                Have questions? Send me a message on WhatsApp and I'll get back to you quickly.
              </p>
              <Button
                onClick={openWhatsApp}
                className="w-full bg-white text-green-600 hover:bg-green-50 py-5 rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-stone-900">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Name</div>
                    <div className="font-medium text-stone-900">Nikhil Ogia</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Studio</div>
                    <div className="font-medium text-stone-900">Nikhil Web Studio</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">WhatsApp</div>
                    <a 
                      href="https://wa.me/919350647437"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-stone-900 hover:text-blue-600 transition-colors"
                    >
                      +91 93506 47437
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Email</div>
                    <a
                      href="mailto:nikhilogia@gmail.com"
                      className="font-medium text-stone-900 hover:text-blue-600 transition-colors"
                    >
                      nikhilogia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Instagram</div>
                    <a
                      href="https://instagram.com/nikhilogia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-stone-900 hover:text-blue-600 transition-colors"
                    >
                      @nikhilogia
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Location</div>
                    <div className="font-medium text-stone-900">Arya Nagar, Rohtak - 124001, Haryana, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-stone-700 mb-2">
                    Business Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your business name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-stone-700 mb-2">
                    Business Type *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select your business type</option>
                      <option value="Salon/Spa">Salon/Spa</option>
                      <option value="Gym/Fitness">Gym/Fitness</option>
                      <option value="Cafe/Restaurant">Cafe/Restaurant</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Coaching Center">Coaching Center</option>
                      <option value="PG/Hostel">PG/Hostel</option>
                      <option value="Photography">Photography</option>
                      <option value="Local Service">Local Service</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-xl font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message on WhatsApp
                </Button>

                <p className="text-xs text-stone-500 text-center">
                  By submitting, your message will be sent via WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
