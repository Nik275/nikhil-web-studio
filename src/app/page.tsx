import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { DemoPortfolio } from "@/components/sections/DemoPortfolio";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { FreePreview } from "@/components/sections/FreePreview";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <Problem />
        <WhatWeBuild />
        <DemoPortfolio />
        <WhyChooseUs />
        <Pricing />
        <Process />
        <FreePreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
