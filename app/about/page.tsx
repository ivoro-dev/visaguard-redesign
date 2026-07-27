"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AboutHero,
  FounderStory,
  AboutMission,
  AboutVision,
  AboutPrinciples,
  AboutCta,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFDF3] text-[#072366] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AboutHero />

      {/* Founder Story */}
      <FounderStory />

      {/* Dedicated Mission Section */}
      <AboutMission />

      {/* Strategic Vision - 9 Points Blueprint */}
      <AboutVision />

      {/* Four Operating Principles */}
      <AboutPrinciples />

      {/* High-Converting CTA Banner */}
      <AboutCta />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
