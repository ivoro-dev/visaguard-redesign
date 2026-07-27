import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import EscrowSimulator from "@/components/EscrowSimulator";
import TrustPillars from "@/components/TrustPillars";
import SecuredProtectedSection from "@/components/SecuredProtectedSection";
import FounderQuote from "@/components/FounderQuote";
import AgentVerificationShowcase from "@/components/AgentVerificationShowcase";
import DirectoryTeaser from "@/components/DirectoryTeaser";
import FaqAccordion from "@/components/FaqAccordion";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFDF3] text-[#072366] flex flex-col">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Moving Marquee Banner (Trust • Protect • Safety) */}
      <MarqueeTicker />

      {/* Interactive Escrow Simulator (Framer Motion Step-by-Step) */}
      <EscrowSimulator />

      {/* 8 Pillars of Trust Grid */}
      <TrustPillars />

      {/* Secured & Protected Escrow App Showcase Section */}
      <SecuredProtectedSection />

      {/* Founder Spotlight & Emotional Quote Banner */}
      <FounderQuote />

      {/* 9-Step Agent Verification Standard */}
      <AgentVerificationShowcase />

      {/* Directories & Anti-Scam Resource Hub */}
      <DirectoryTeaser />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* High-Converting Waitlist Form */}
      <WaitlistSection />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
