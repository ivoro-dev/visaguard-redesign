"use client";

import { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";


export default function EscrowDeepDive() {
  const [budget, setBudget] = useState<number>(1500000); // ₦1.5m default


  const presets = [
    { label: "₦500k", value: 500000 },
    { label: "₦1.5M", value: 1500000 },
    { label: "₦3.0M", value: 3000000 },
    { label: "₦5.0M", value: 5000000 },
  ];

  // Milestone disbursements
  const m1 = Math.round(budget * 0.2); // 20% Document Audit & Booking
  const m2 = Math.round(budget * 0.5); // 50% Embassy Appointment & Biometrics
  const m3 = Math.round(budget * 0.3); // 30% Visa Outcome Confirmation

  const formatNaira = (val: number) => {
    return "₦" + val.toLocaleString("en-NG");
  };

  return (
    <section
      id="escrow-calculator"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] relative overflow-hidden border-b border-[#E2ECF9]"
    >
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Bank-Grade Escrow Vault Mechanics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight">
            How Your Capital Remains <br /> <span className="gradient-text-blue font-serif-heading italic font-normal pr-3">100% Protected</span>
          </h2>

          <p className="text-[#3B5284] text-base sm:text-lg max-w-2xl mx-auto font-normal">
            No lump-sum upfront cash. Funds remain in a regulated tier-1 bank escrow vault and disburse in verified milestone tranches only upon your explicit authorization.
          </p>
        </div>

        {/* Interactive Escrow Vault Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2ECF9] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Budget Input & Preset Buttons */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0A318B]">
                Interactive Capital Calculator
              </span>

              <h3 className="text-2xl font-bold text-[#0A318B]">
                Set Your Travel Application Budget
              </h3>

              <p className="text-xs sm:text-sm text-[#3B5284] font-normal leading-relaxed">
                Test how Visa Guard locks your money in escrow and breaks payouts into risk-free verified milestone stages.
              </p>

              {/* Preset Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-[#0A318B] uppercase tracking-wide">
                  Quick Select Amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => {
                        setBudget(p.value);
                      }}
                      className={`py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                        budget === p.value
                          ? "bg-[#0A318B] text-white border-[#0A318B] shadow-sm"
                          : "bg-[#F5F9FE] text-[#3B5284] border-[#E2ECF9] hover:bg-slate-100"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#0A318B]">
                  <span>Custom Contract Amount</span>
                  <span className="text-sm font-bold text-[#0A318B]">
                    {formatNaira(budget)}
                  </span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={10000000}
                  step={50000}
                  value={budget}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setBudget(val);
                  }}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A318B]"
                />
                <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                  <span>₦200,000</span>
                  <span>₦10,000,000</span>
                </div>
              </div>
            </div>

            {/* Safeguard Guarantee Banner */}
            <div className="p-4 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Vault Ring-Fence Guarantee</span>
              </div>
              <p className="text-[11px] text-[#3B5284] font-normal leading-relaxed">
                If the travel agent defaults or fails document authenticity checks, {formatNaira(budget)} is returned directly to your linked Nigerian bank account in 24-48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Milestone Tranche Breakdown Visualizer */}
          <div className="lg:col-span-7 bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                  Escrow Milestone Tranches
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  {formatNaira(budget)} Vaulted
                </span>
              </div>

              {/* Milestone Tranche List */}
              <div className="space-y-3 pt-2">
                {/* Tranche 1 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-[10px]">
                        1
                      </span>
                      Milestone 1: Document Audit & Strategy (20%)
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {formatNaira(m1)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-7 font-normal">
                    Released ONLY after 3D biometric match & initial document checklist verification.
                  </p>
                </div>

                {/* Tranche 2 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-[10px]">
                        2
                      </span>
                      Milestone 2: Embassy Booking & Biometrics (50%)
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {formatNaira(m2)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-7 font-normal">
                    Released ONLY after AI checks official embassy appointment confirmation reference code.
                  </p>
                </div>

                {/* Tranche 3 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-[10px]">
                        3
                      </span>
                      Milestone 3: Final Passport Submission & Outcome (30%)
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {formatNaira(m3)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-7 font-normal">
                    Released ONLY after traveler sign-off upon embassy submission confirmation.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2 relative z-10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Agent Withdrawal Privilege
              </span>
              <span className="font-bold text-white">100% Capital Audit Trail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
