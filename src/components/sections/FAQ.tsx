"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Do I need to pay for the homepage preview?",
    answer: "No. The homepage preview is completely free. You only pay if you like the direction and decide to build the full website. This is my way of showing you exactly what you can expect before any commitment.",
  },
  {
    question: "How long does a website take?",
    answer: "A simple one-page website usually takes 3–5 days. A business website with multiple pages typically takes 5–7 days. Premium websites with custom features can take 7–14 days depending on the complexity and how quickly you provide the content.",
  },
  {
    question: "Do I need to provide photos?",
    answer: "Yes, real photos make the website much stronger and more trustworthy. If you don't have professional photos, even good quality phone photos work well. If you don't have any photos yet, I can create a clean demo layout first and we can replace the visuals later when you have them.",
  },
  {
    question: "Can you make a website for my salon, gym, cafe, clinic, coaching center, or PG?",
    answer: "Yes, absolutely. I specialize in building websites for local businesses where trust, services, location, and WhatsApp enquiries matter. Whether you're a salon owner, gym trainer, cafe manager, clinic owner, coach, or run a PG/hostel, I can create a website that brings you more leads.",
  },
  {
    question: "Will the website work on mobile?",
    answer: "Yes, every website is designed mobile-first because most customers visit from phones. Your website will look great and work perfectly on mobile phones, tablets, and desktop computers. I test on multiple devices to ensure a smooth experience everywhere.",
  },
  {
    question: "Do you help with domain and hosting?",
    answer: "Yes, I can guide you through the entire process. I'll help you choose and purchase a domain name, set up hosting, and deploy your website. If you're not tech-savvy, I can handle the technical setup for you so you don't have to worry about it.",
  },
  {
    question: "What happens after the website is launched?",
    answer: "Once your website is live, you own it completely. You can manage small updates yourself if you're comfortable, or you can choose a monthly maintenance plan where I handle updates, changes, and support for you. Many clients prefer the maintenance plan so they can focus on their business while I keep their website running smoothly.",
  },
];

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 lg:py-32 bg-white text-black"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-[10px] sm:text-xs font-medium text-[#6d6d6d] tracking-[0.2em] uppercase mb-8">
            Got Questions?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-black mb-8">
            Frequently asked.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 border-t border-[#333]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-[#333] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <span className="text-xl lg:text-2xl font-light text-black group-hover:text-[#9a9a9a] transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-[#6d6d6d] transition-transform duration-500 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  openIndex === index ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#9a9a9a] font-light leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className={`mt-24 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-[10px] text-[#6d6d6d] uppercase tracking-widest mb-6">
            Still have questions?
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-black hover:text-[#9a9a9a] text-lg font-light transition-colors group"
          >
            Chat with me on WhatsApp
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
