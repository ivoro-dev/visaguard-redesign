"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Lock, Users2, Sparkles, CheckCircle } from "lucide-react";

export default function AboutMission() {
  const missionPillars = [
    {
      icon: Lock,
      title: "Bank-Grade Milestone Vaults",
      badge: "Financial Security",
      description:
        "We lock 100% of traveler payments in audited escrow accounts. Funds are only disbursed when contractually verified visa milestones are completed.",
    },
    {
      icon: ShieldCheck,
      title: "Elevating Legitimate Agencies",
      badge: "Vetting Standard",
      description:
        "Honest travel consultants undergo a rigorous 9-step CAC & biometric background check, earning a verifiable badge to stand out from scammers.",
    },
    {
      icon: Users2,
      title: "Empowering 100,000+ Travelers",
      badge: "Pan-African Impact",
      description:
        "Democratizing access to global work, study, and tourism opportunities by giving students and families total protection over their life savings.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] border-y border-[#E2ECF9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-semibold shadow-xs"
          >
            <Target className="w-4 h-4 text-[#0A318B]" />
            <span>Our Driving Mission</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#0A318B] tracking-tight"
          >
            Eradicating Travel Fraud. Safeguarding African Ambition.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base font-medium text-[#3B5284] leading-relaxed max-w-2xl mx-auto"
          >
            Our mission is to establish the single standard of trust for African travel. We believe no student, worker, or family should risk their life savings when pursuing international opportunities.
          </motion.p>
        </div>

        {/* Mission Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white p-8 rounded-3xl border border-[#E2ECF9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A318B] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0A318B] bg-[#F5F9FE] px-2.5 py-1 rounded-full border border-[#E2ECF9]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A318B]">{item.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-[#3B5284] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Verified Escrow Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
