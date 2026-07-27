"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Eye, Scale } from "lucide-react";

export default function AboutPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Zero Upfront Risk",
      description:
        "Travelers never pay agents directly. Funds remain safely vaulted in bank-grade escrow until each milestone is verified and approved.",
      icon: Lock,
      badge: "Escrow Core",
    },
    {
      number: "02",
      title: "Uncompromising Vetting",
      description:
        "Every travel consultant undergoes a 9-step vetting process, including CAC registration checks, biometric ID verification, and criminal background checks.",
      icon: ShieldCheck,
      badge: "9-Step Vetting",
    },
    {
      number: "03",
      title: "Radical Transparency",
      description:
        "Real-time milestone tracking and NDPR-compliant digital audit logs give travelers 100% visibility into where their money and visa applications stand.",
      icon: Eye,
      badge: "NDPR Audited",
    },
    {
      number: "04",
      title: "Automated Refund Safeguard",
      description:
        "If an agent fails to deliver on contractually agreed milestones, escrow funds are instantly protected and refunded without hassle.",
      icon: Scale,
      badge: "Guaranteed Refund",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] border-t border-[#E2ECF9]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0A318B]">
            Core Operating Code
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A318B]">
            The Four Operating Principles
          </h2>
          <p className="text-sm font-medium text-[#3B5284]">
            Every line of code and customer policy at Visa Guard Africa is anchored in these non-negotiable principles.
          </p>
        </div>

        {/* Principles 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#E2ECF9] shadow-sm flex items-start gap-6 relative hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0A318B] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#0A318B] bg-[#F5F9FE] px-2.5 py-1 rounded-full border border-[#E2ECF9]">
                      {p.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Principle {p.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A318B]">{p.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-[#3B5284] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
