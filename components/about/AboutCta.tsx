"use client";

import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A318B] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold">
          <Zap className="w-4 h-4 text-emerald-300" />
          <span>Join Africa&apos;s Travel Revolution</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Ready To Travel Without Financial Risk?
        </h2>

        <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Reserve your early access spot today and gain first access to our verified agent directory and escrow vault protection.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0A318B] hover:bg-blue-50 font-bold text-sm shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5 fill-current text-[#0A318B]" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
            </svg>
            <span>Download on Google Play</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
