"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBFDF3] via-[#F5F9FE] to-[#FBFDF3] border-b border-[#E2ECF9]/80 overflow-hidden">
      {/* Background Dot Pattern & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#0a318b_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0A318B]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[280px] h-[280px] bg-emerald-500/8 rounded-full blur-[100px]" />
        
        {/* Soft Escrow Vault / Lock Motif Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0A318B]/[0.035] select-none flex items-center justify-center">
          <Lock className="w-[320px] h-[320px] stroke-[1]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#E2ECF9] text-[#0A318B] text-xs font-semibold shadow-xs"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Milestone Escrow Direct Support</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight leading-[1.15]"
        >
          Get In Touch With <span className="text-[#0A318B] relative inline-block">Visa Guard<span className="absolute bottom-1 left-0 right-0 h-1 bg-emerald-500/30 rounded-full"></span></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#3B5284] text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed"
        >
          Direct support for traveler escrow protection, agent verification, and platform inquiries.
        </motion.p>
      </div>
    </section>
  );
}
