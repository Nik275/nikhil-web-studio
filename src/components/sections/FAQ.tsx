"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need to pay for the homepage preview?",
    answer:
      "No. The homepage preview is completely free. You only pay if you like the direction and decide to build the full website. This is my way of showing you exactly what you can expect before any commitment.",
  },
  {
    question: "How long does a website take?",
    answer:
      "A simple one-page website usually takes 3–5 days. A business website with multiple pages typically takes 5–7 days. Premium websites with custom features can take 7–14 days depending on the complexity and how quickly you provide the content.",
  },
  {
    question: "Do I need to provide photos?",
    answer:
      "Yes, real photos make the website much stronger and more trustworthy. If you don't have professional photos, even good quality phone photos work well. If you don't have any photos yet, I can create a clean demo layout first and we can replace the visuals later when you have them.",
  },
  {
    question: "Can you make a website for my salon, gym, cafe, clinic, coaching center, or PG?",
    answer:
      "Yes, absolutely. I specialize in building websites for local businesses where trust, services, location, and WhatsApp enquiries matter. Whether you're a salon owner, gym trainer, cafe manager, clinic owner, coach, or run a PG/hostel, I can create a website that brings you more leads.",
  },
  {
    question: "Will the website work on mobile?",
    answer:
      "Yes, every website is designed mobile-first because most customers visit from phones. Your website will look great and work perfectly on mobile phones, tablets, and desktop computers. I test on multiple devices to ensure a smooth experience everywhere.",
  },
  {
    question: "Do you help with domain and hosting?",
    answer:
      "Yes, I can guide you through the entire process. I'll help you choose and purchase a domain name, set up hosting, and deploy your website. If you're not tech-savvy, I can handle the technical setup for you so you don't have to worry about it.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "Once your website is live, you own it completely. You can manage small updates yourself if you're comfortable, or you can choose a monthly maintenance plan where I handle updates, changes, and support for you. Many clients prefer the maintenance plan so they can focus on their business while I keep their website running smoothly.",
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
      className="relative py-24 lg:py-32 bg-[#0a0a0a] pb-28 md:pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#18181b] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-stone-300">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-stone-400">
            Everything you need to know about working with Nikhil Web Studio.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#18181b] to-[#27272a] rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-stone-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-stone-400 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Chat with me on WhatsApp
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
