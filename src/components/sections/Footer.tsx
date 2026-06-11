"use client";

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
    <footer className="relative bg-black text-white border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-light text-white tracking-tight mb-8">
              Nikhil Web Studio
            </div>
            <p className="text-[#9a9a9a] font-light max-w-sm mb-12 leading-relaxed">
              Premium websites for local businesses that want more leads. 
              Built with focus on conversion, mobile experience, and WhatsApp integration.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#6d6d6d]">WhatsApp</span>
                <a href="https://wa.me/919350647437" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9a9a9a] transition-colors font-light">
                  +91 93506 47437
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#6d6d6d]">Email</span>
                <a href="mailto:nikhilogia@gmail.com" className="text-white hover:text-[#9a9a9a] transition-colors font-light">
                  nikhilogia@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#6d6d6d]">Instagram</span>
                <a href="https://instagram.com/nikhilogia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9a9a9a] transition-colors font-light">
                  @nikhilogia
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-medium text-[#6d6d6d] uppercase tracking-[0.2em] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#9a9a9a] hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-medium text-[#6d6d6d] uppercase tracking-[0.2em] mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-[#9a9a9a] hover:text-white transition-colors font-light"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[10px] uppercase tracking-widest text-[#6d6d6d]">
            Rohtak, Haryana, India
          </div>
          
          <p className="text-[10px] uppercase tracking-widest text-[#6d6d6d] text-center">
            © {new Date().getFullYear()} Nikhil Web Studio. All rights reserved.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="text-[10px] uppercase tracking-widest text-[#6d6d6d] hover:text-white transition-colors"
          >
            Scroll to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
