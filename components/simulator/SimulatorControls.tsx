"use client";

import React from "react";
import { ShieldCheck, Landmark } from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  defaultAmount: number;
  bgImage: string;
}

interface SimulatorControlsProps {
  scenarios: Scenario[];
  selectedScenario: Scenario;
  setSelectedScenario: (sc: Scenario) => void;
  depositAmount: number;
  setDepositAmount: (val: number) => void;
}

export default function SimulatorControls({
  scenarios,
  selectedScenario,
  setSelectedScenario,
  depositAmount,
  setDepositAmount,
}: SimulatorControlsProps) {
  return (
    <div className="p-6 rounded-3xl bg-white border border-[#E2ECF9] shadow-md space-y-6">
      <div>
        <label className="block text-xs font-bold text-[#566C9A] uppercase tracking-wider mb-2">
          Select Visa Application Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenario(sc);
                setDepositAmount(sc.defaultAmount);
              }}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedScenario.id === sc.id
                  ? "bg-[#0A318B] text-white border-[#0A318B] shadow-sm"
                  : "bg-[#F5F9FE] text-[#072366] border-[#E2ECF9] hover:border-[#0A318B]/40"
              }`}
            >
              <span className="block text-xs font-bold">{sc.name}</span>
              <span className="block text-[10px] opacity-80 mt-0.5">
                ₦{sc.defaultAmount.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Amount Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-[#566C9A] uppercase tracking-wider">
            Total Application Deposit
          </label>
          <span className="text-lg font-bold text-[#0A318B]">
            ₦{depositAmount.toLocaleString()}
          </span>
        </div>

        <input
          type="range"
          min={200000}
          max={5000000}
          step={50000}
          value={depositAmount}
          onChange={(e) => setDepositAmount(Number(e.target.value))}
          className="w-full h-2 bg-[#E2ECF9] rounded-lg appearance-none cursor-pointer accent-[#0A318B]"
        />

        <div className="flex justify-between text-[10px] text-[#566C9A] font-semibold">
          <span>₦200,000</span>
          <span>₦2,500,000</span>
          <span>₦5,000,000</span>
        </div>
      </div>
    </div>
  );
}
