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
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 shrink-0" />
          <span>Now Available on Google Play Store • Africa&apos;s Travel Safeguard</span>
        </motion.div>

        {/* CENTERED HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A318B] leading-[1.15] sm:leading-[1.12] max-w-4xl mx-auto"
        >
          Protect Your Money. Verify Your Agent. <br className="hidden sm:inline" />
          <span className="gradient-text-blue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-heading italic font-normal">
            Travel with Confidence.
          </span>
        </motion.h1>

        {/* ONE-SENTENCE VALUE PROPOSITION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4 py-3.5 rounded-2xl bg-white border border-[#E2ECF9] shadow-lg shadow-blue-900/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0A318B]" />
          <p className="text-[#072366] text-base sm:text-lg font-bold leading-relaxed">
            Visa Guard helps African travelers verify travel agents, secure payments through escrow, and avoid visa scams.
          </p>
        </motion.div>

        {/* SUPPORTING BENEFIT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl mx-auto px-2 sm:px-0 text-center"
        >
          <p className="text-[#3B5284] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            Visa Guard holds application fees safely in bank escrow, releasing payments to 9-step vetted travel agents only when real proof—like embassy appointments and verified visa outcomes—is confirmed.
          </p>
        </motion.div>

        {/* SCANNABLE BENEFIT PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#072366] pt-1"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2ECF9] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            9-Step Vetted Agents
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2ECF9] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Milestone Escrow Protection
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2ECF9] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Scam-Free Guarantee
          </span>
        </motion.div>

        {/* CENTERED CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
        >
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-900/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 group"
          >
            <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
            </svg>
            <span>Download on Google Play</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#escrow-demo"
            className="w-full sm:w-auto px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-[#F5F9FE] text-[#0A318B] font-semibold text-sm sm:text-base border border-[#E2ECF9] shadow-sm flex items-center justify-center gap-2 transition-all"
          >
            <Lock className="w-4 h-4 text-[#0A318B]" />
            <span>Try Escrow Simulator</span>
          </a>
        </motion.div>

        {/* REAL AGENT AVATARS & SOCIAL PROOF */}
        <HeroSocialProof />
      </div>
    </section>
  );
}
