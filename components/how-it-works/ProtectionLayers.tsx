"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldAlert, Scale, RefreshCw, Sparkles, ChevronRight, Info, CheckCircle2 } from "lucide-react";

interface SafeguardItem {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  realWorldExample: string;
  highlightTag: string;
}

const SAFEGUARDS: SafeguardItem[] = [
  {
    id: "vault",
    icon: Lock,
    title: "Bank-Grade Escrow Vault",
    shortDesc:
      "Funds stay in a regulated partner bank escrow account until explicitly authorized by the traveler upon verified milestone completion.",
    realWorldExample:
      "Locks ₦2,500,000 in regulated escrow; travel agent cannot demand lump-sum cash upfront or vanish with your money.",
    highlightTag: "Tier-1 Partner Bank Vault",
  },
  {
    id: "ai-audit",
    icon: ShieldAlert,
    title: "AI Tamper Prevention",
    shortDesc:
      "Automated AI checks verify flight reservations, hotel bookings, and embassy appointment references against official database registries.",
    realWorldExample:
      "Catches doctored embassy appointment slips by cross-checking confirmation numbers directly with official embassy portals.",
    highlightTag: "Real-Time Reference Check",
  },
  {
    id: "arbitration",
    icon: Scale,
    title: "Arbitration & Legal Guarantee",
    shortDesc:
      "Our dedicated legal dispute team steps in within 24 hours to review timestamped digital audit logs if any milestone discrepancy arises.",
    realWorldExample:
      "If an agent fails to book your agreed embassy slot within 14 days, payout is frozen and investigated by legal panel.",
    highlightTag: "24-Hour Dispute Panel",
  },
  {
    id: "refund",
    icon: RefreshCw,
    title: "Automated Refund Execution",
    shortDesc:
      "If an agent breaches contract terms or fails milestone verification, your funds are returned directly to your linked bank account.",
    realWorldExample:
      "Auto-triggers 100% refund of unreleased milestone capital to your linked Nigerian bank account in 24 to 48 hours.",
    highlightTag: "Automated 24-48h Refund",
  },
];

export default function ProtectionLayers() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2ECF9]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A318B] bg-[#F5F9FE] px-3.5 py-1.5 rounded-full border border-[#E2ECF9]">
            Interactive Security Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B]">
            Four Layers Of Traveler Protection
          </h2>
          <p className="text-sm sm:text-base text-[#3B5284] font-normal">
            Hover (or tap on mobile) any card below to reveal real-world fraud prevention mechanisms.
          </p>
        </div>

        {/* 4 Card Grid with Fixed Height & Background Color Inversion (Zero Layout Shift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFEGUARDS.map((sg) => {
            const Icon = sg.icon;
            const isActive = activeCard === sg.id;

            return (
              <div
                key={sg.id}
                onMouseEnter={() => setActiveCard(sg.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => toggleCard(sg.id)}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden h-[310px] select-none ${
                  isActive
                    ? "bg-[#0A318B] text-white border-[#0A318B] shadow-xl shadow-blue-900/20"
                    : "bg-[#F5F9FE] text-[#0A318B] border-[#E2ECF9] hover:border-[#0A318B]/40"
                }`}
              >
                {/* Top Bar: Icon & Tag */}
                <div className="flex items-center justify-between relative z-10">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-white/10 text-emerald-400 border border-white/20"
                        : "bg-white text-[#0A318B] border border-[#E2ECF9] shadow-xs"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors duration-300 ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {sg.highlightTag}
                  </span>
                </div>

                {/* Middle Content Area (Fades content inside fixed boundary, zero layout shift) */}
                <div className="my-auto relative z-10">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="scenario"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                          <Info className="w-3.5 h-3.5 shrink-0" />
                          <span>Real-World Scenario</span>
                        </div>
                        <h4 className="text-sm font-bold text-white line-clamp-1">
                          {sg.title}
                        </h4>
                        <p className="text-xs text-blue-100 leading-relaxed font-normal">
                          {sg.realWorldExample}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        <h3 className="text-lg font-bold text-[#0A318B]">
                          {sg.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#3B5284] leading-relaxed font-normal">
                          {sg.shortDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Status Bar */}
                <div
                  className={`pt-3 border-t transition-colors duration-300 flex items-center justify-between text-xs font-semibold relative z-10 ${
                    isActive
                      ? "border-white/10 text-emerald-300"
                      : "border-[#E2ECF9] text-[#0A318B]"
                  }`}
                >
                  {isActive ? (
                    <span className="flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Viewing Scenario</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Hover / Tap to reveal</span>
                    </span>
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "rotate-90 text-emerald-400" : "text-[#0A318B]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
