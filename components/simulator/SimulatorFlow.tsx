"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Milestone {
  title: string;
  percent: string;
  trigger: string;
  status: string;
}

interface SimulatorFlowProps {
  milestones: Milestone[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  bgImage: string;
}

export default function SimulatorFlow({
  milestones,
  activeStep,
  setActiveStep,
  bgImage,
}: SimulatorFlowProps) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0A318B] text-white shadow-2xl relative overflow-hidden border border-blue-900/40 space-y-6">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src={bgImage}
          alt="Escrow background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">
              Escrow Vault Status
            </span>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span>Funds Protected in Bank Vault</span>
            </h3>
          </div>
          <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Step {activeStep + 1} of 3
          </span>
        </div>

        {/* Milestone Steps Interactive Flow */}
        <div className="space-y-3 pt-2">
          {milestones.map((ms, idx) => (
            <motion.div
              key={idx}
              onClick={() => setActiveStep(idx)}
              whileHover={{ scale: 1.01 }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-white text-[#0A318B] border-white shadow-lg"
                  : "bg-white/10 text-white border-white/15 hover:bg-white/15"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      activeStep === idx
                        ? "bg-[#0A318B] text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="font-bold text-sm">{ms.title}</span>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    activeStep === idx
                      ? "bg-[#F5F9FE] text-[#0A318B] border border-[#E2ECF9]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {ms.percent}
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed pl-8 ${
                  activeStep === idx ? "text-[#3B5284]" : "text-blue-100/80"
                }`}
              >
                Trigger: <span className="font-semibold">{ms.trigger}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
