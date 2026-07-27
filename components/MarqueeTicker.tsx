"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, Sparkles, Building2, UserCheck } from "lucide-react";

export default function MarqueeTicker() {
  const items = [
    { text: "TRUST", icon: ShieldCheck, accent: "bg-blue-900/40 text-blue-200" },
    { text: "PROTECT", icon: Lock, accent: "bg-emerald-950/60 text-emerald-300" },
    { text: "SAFETY", icon: CheckCircle2, accent: "bg-blue-900/40 text-blue-200" },
    { text: "VERIFY BEFORE YOU PAY", icon: Sparkles, accent: "bg-white/10 text-white" },
    { text: "BANK-GRADE ESCROW", icon: Lock, accent: "bg-blue-900/40 text-blue-200" },
    { text: "100% MILESTONE GUARANTEE", icon: CheckCircle2, accent: "bg-emerald-950/60 text-emerald-300" },
    { text: "CAC REGISTERED ENTITY", icon: Building2, accent: "bg-white/10 text-white" },
    { text: "9-STEP AGENT VETTING", icon: UserCheck, accent: "bg-blue-900/40 text-blue-200" },
    { text: "NDPR DATA PRIVACY", icon: ShieldCheck, accent: "bg-blue-900/40 text-blue-200" },
    { text: "ZERO UPFRONT FRAUD", icon: Lock, accent: "bg-emerald-950/60 text-emerald-300" },
  ];

  // Quadruple items for a seamless, continuous scroll loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full my-12 sm:my-16 bg-[#0A318B] border-y border-[#072366] py-6 sm:py-7 overflow-hidden shadow-xl relative z-20 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 90, // Ultra-slow speed (90s) for effortless, elegant reading
          ease: "linear",
        }}
        className="flex items-center gap-12 whitespace-nowrap w-max transform-gpu will-change-transform"
      >
        {marqueeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-5">
              <div className={`px-4.5 py-2.5 rounded-full border border-white/20 flex items-center gap-3 font-extrabold text-xs sm:text-sm tracking-wider text-white ${item.accent}`}>
                <Icon className="w-4 h-4 shrink-0 text-white" />
                <span>{item.text}</span>
              </div>
              <span className="text-blue-300/40 text-sm font-bold">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
