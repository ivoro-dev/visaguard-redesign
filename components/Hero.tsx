"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import HeroBackground from "./hero/HeroBackground";
import HeroSocialProof from "./hero/HeroSocialProof";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-15 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FBFDF3] via-[#FBFDF3] to-[#F5F9FE]">
      {/* Background SVG Grid & Blue Glow */}
      <HeroBackground />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
        {/* Top Centered Launch Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0A318B] text-white text-[11px] sm:text-xs font-semibold shadow-md shadow-blue-900/10 border border-[#072366]"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-200 shrink-0" />
          <span>Milestone Escrow Safeguard Against Visa Scams</span>
        </motion.div>

        {/* CENTERED HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A318B] leading-[1.15] sm:leading-[1.12] max-w-4xl mx-auto"
        >
          Stop Fake Visa Agents From Stealing Your Money. <br className="" />
          <span className="gradient-text-blue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-heading italic font-normal">
            Join the Waitlist for Milestone Escrow.
          </span>
        </motion.h1>

        {/* CENTERED SUPPORTING TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-black text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed px-2 sm:px-0"
        >
          Visa Guard holds your application fees in bank-grade escrow vaults,
          releasing payments to 9-step vetted travel agents ONLY when verified
          milestones (appointment booking, document submission, visa outcome)
          are achieved.
        </motion.p>

        {/* CENTERED CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
        >
          <a
            href="#waitlist"
            className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-900/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Lock Your Escrow Protection</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#escrow-demo"
            className="w-full sm:w-auto px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-[#F5F9FE] text-[#0A318B] font-semibold text-sm sm:text-base border border-[#E2ECF9] shadow-sm flex items-center justify-center gap-2 transition-all"
          >
            <Lock className="w-4 h-4 text-[#0A318B]" />
            <span>Try Milestone Escrow Simulator</span>
          </a>
        </motion.div>

        {/* REAL AGENT AVATARS & SOCIAL PROOF */}
        <HeroSocialProof />
      </div>
    </section>
  );
}
