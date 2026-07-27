"use client";

import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

export default function HowItWorksCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A318B] via-[#0A192F] to-[#072366] text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-emerald-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Zero Financial Risk for African Travelers</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Protect Your Travel Application Capital Today
        </h2>

        <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
          Stop risking lump-sum cash with unverified travel agents. Lock your funds safely in bank escrow vaults and disburse only when verified milestones are achieved.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#waitlist"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-blue-50 text-[#0A318B] font-bold text-sm shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Reserve Your Verified Escrow Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Read Safety Charter</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

