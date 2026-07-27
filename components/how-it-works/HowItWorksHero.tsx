"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, ArrowDown } from "lucide-react";

export default function HowItWorksHero() {
  const scrollToTimeline = () => {
    const el = document.getElementById("timeline-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBFDF3] via-[#F5F9FE] to-[#F5F9FE] border-b border-[#E2ECF9] overflow-hidden">
      {/* Background Micro Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 vga-bg-grid opacity-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0A318B]/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* Verification Architecture Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-semibold shadow-xs"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Bank-Grade Escrow & AI Verification Architecture</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A318B] tracking-tight leading-[1.12]"
        >
          How Visa Guard <br /> <span className="gradient-text-blue text-3xl sm:text-4xl lg:text-5xl  font-serif-heading italic font- pr-3">Protects Your Money</span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#3B5284] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Your application funds stay locked in a tier-1 bank escrow vault. Payment releases to CAC-verified travel agents occur strictly after AI-checked embassy appointments and document authenticity milestones.
        </motion.p>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={scrollToTimeline}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/15 flex items-center justify-center gap-2 transition-all cursor-pointer group"
          >
            <span>Explore 5-Step Protocol</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#escrow-calculator"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0A318B] font-bold text-xs sm:text-sm border border-[#E2ECF9] shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Vault Protection Calculator</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
