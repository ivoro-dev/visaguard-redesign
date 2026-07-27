"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import TrustCard from "./trust/TrustCard";
import { TRUST_PILLARS_DATA } from "@/data/trustData";

export default function TrustPillars() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F9FE] border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0A318B]" />
            <span>3 Pillars of Visa Guard Security</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight">
            How We Eliminate <br />
            <span className="gradient-text-blue font-serif-heading italic font-normal">
              Visa Scams & Advance Fee Fraud
            </span>
          </h2>

          <p className="text-[#3B5284] text-base sm:text-lg">
            Our multi-layered trust infrastructure combines physical agent verification, milestone bank escrow vaults, and AI appointment slip inspection.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_PILLARS_DATA.map((pillar, idx) => (
            <TrustCard key={pillar.number} pillar={pillar} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
