"use client";

import React from "react";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

interface SimulatorMetricsProps {
  depositAmount: number;
}

export default function SimulatorMetrics({ depositAmount }: SimulatorMetricsProps) {
  // Milestone split calculations
  const milestone1 = Math.round(depositAmount * 0.25);
  const milestone2 = Math.round(depositAmount * 0.35);
  const milestone3 = Math.round(depositAmount * 0.4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
      <div className="p-4 rounded-2xl bg-white border border-[#E2ECF9] shadow-xs space-y-1">
        <span className="text-[10px] font-bold text-[#566C9A] uppercase tracking-wider block">
          Milestone 1 (25%)
        </span>
        <span className="text-base font-bold text-[#0A318B] block">
          ₦{milestone1.toLocaleString()}
        </span>
        <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          Doc Audit & Prep
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#E2ECF9] shadow-xs space-y-1">
        <span className="text-[10px] font-bold text-[#566C9A] uppercase tracking-wider block">
          Milestone 2 (35%)
        </span>
        <span className="text-base font-bold text-[#0A318B] block">
          ₦{milestone2.toLocaleString()}
        </span>
        <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          Official Booking Slip
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#E2ECF9] shadow-xs space-y-1">
        <span className="text-[10px] font-bold text-[#566C9A] uppercase tracking-wider block">
          Milestone 3 (40%)
        </span>
        <span className="text-base font-bold text-[#0A318B] block">
          ₦{milestone3.toLocaleString()}
        </span>
        <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          Final Decision Release
        </span>
      </div>
    </div>
  );
}
