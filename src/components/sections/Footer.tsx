"use client";

import { MessageCircle, Mail, MapPin, ArrowUp, Camera } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Salon Websites", href: "#services" },
  { label: "Gym Websites", href: "#services" },
  { label: "Cafe Websites", href: "#services" },
  { label: "Clinic Websites", href: "#services" },
  { label: "Portfolio Sites", href: "#services" },
  { label: "Local Business", href: "#services" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Nikhil Web Studio
            </div>
            <p className="text-stone-400 max-w-md mb-6 leading-relaxed">
              Premium websites for local businesses that want more leads. 
              Built with focus on conversion, mobile experience, and WhatsApp integration.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-stone-400">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>+91 93506 47437</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:nikhilogia@gmail.com" className="hover:text-white transition-colors">
                  nikhilogia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Camera className="w-4 h-4 text-pink-500" />
                <a 
                  href="https://instagram.com/nikhilogia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @nikhilogia
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Rohtak, Haryana</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919350647437"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>
              <a
                href="mailto:nikhilogia@gmail.com"
                className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href="https://instagram.com/nikhilogia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
              >
                <Camera className="w-5 h-5 text-pink-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <MapPin className="w-4 h-4" />
            <span>Rohtak, Haryana</span>
          </div>
          
          <p className="text-sm text-stone-500 text-center">
            © {new Date().getFullYear()} Nikhil Web Studio. All rights reserved.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-stone-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
