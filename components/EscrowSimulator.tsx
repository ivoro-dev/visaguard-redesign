"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck } from "lucide-react";
import SimulatorControls from "./simulator/SimulatorControls";
import SimulatorFlow from "./simulator/SimulatorFlow";
import SimulatorMetrics from "./simulator/SimulatorMetrics";

export default function EscrowSimulator() {
  const scenarios = [
    {
      id: "canada-study",
      name: "Canada Study Permit",
      defaultAmount: 1200000,
      bgImage: "/assets/handshake.png",
    },
    {
      id: "uk-skilled",
      name: "UK Skilled Worker",
      defaultAmount: 1800000,
      bgImage: "/assets/passport.png",
    },
    {
      id: "us-b1b2",
      name: "US Visitor Visa",
      defaultAmount: 850000,
      bgImage: "/assets/plane.png",
    },
    {
      id: "schengen-tourist",
      name: "Schengen Visa",
      defaultAmount: 950000,
      bgImage: "/assets/jet.png",
    },
  ];

  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [depositAmount, setDepositAmount] = useState(scenarios[0].defaultAmount);
  const [activeStep, setActiveStep] = useState(0);

  const milestones = [
    {
      title: "Document Vetting & Verification",
      percent: "25% Release",
      trigger: "Agent completes 9-step credential audit & document checklist upload",
      status: "Milestone 1 Active",
    },
    {
      title: "Biometric / Embassy Appointment Booked",
      percent: "35% Release",
      trigger: "AI system verifies official appointment confirmation slip & reference code",
      status: "Milestone 2 Pending",
    },
    {
      title: "Official Decision / Visa Stamped",
      percent: "40% Release",
      trigger: "Passport pickup confirmation or official embassy decision slip verified",
      status: "Milestone 3 Final Vault Release",
    },
  ];

  return (
    <section id="escrow-demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs">
            <Calculator className="w-4 h-4 text-[#0A318B]" />
            <span>Interactive Payment Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight">
            See How Your Money Is Protected <br className="hidden sm:inline" />
            <span className="gradient-text-blue font-serif-heading italic font-normal">Step by Step</span>
          </h2>

          <p className="text-[#3B5284] text-base sm:text-lg">
            Simulate your visa application payment. Payments are unlocked to your agent ONLY as verified milestone proofs are confirmed.
          </p>
        </motion.div>

        {/* Main Grid: Controls + Interactive Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <SimulatorControls
              scenarios={scenarios}
              selectedScenario={selectedScenario}
              setSelectedScenario={setSelectedScenario}
              depositAmount={depositAmount}
              setDepositAmount={setDepositAmount}
            />

            <SimulatorMetrics depositAmount={depositAmount} />
          </div>

          {/* Flow Column */}
          <div className="lg:col-span-6">
            <SimulatorFlow
              milestones={milestones}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              bgImage={selectedScenario.bgImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
