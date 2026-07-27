"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Award,
  Users,
  ShieldCheck,
  Scale,
  FileCheck,
  Building2,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export default function AboutVision() {
  const visionPoints = [
    {
      number: "01",
      icon: Globe2,
      title: "Pan-African Escrow Infrastructure",
      description:
        "Standardizing milestone travel escrow across Nigeria, Ghana, Kenya, and all 54 African nations.",
    },
    {
      number: "02",
      icon: Award,
      title: "Verifiable Agent Identity Badge",
      description:
        "Issuing digital CAC & biometric verification badges so honest travel agencies stand out from scammers.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Automated Milestone Verification",
      description:
        "Utilizing smart verification logic before funds release from bank-grade escrow vaults.",
    },
    {
      number: "04",
      icon: Scale,
      title: "Guaranteed Refund Protocol",
      description:
        "Ensuring automated refund mechanisms if contractually agreed milestones fail to materialize.",
    },
    {
      number: "05",
      icon: FileCheck,
      title: "NDPR Digital Audit Log",
      description:
        "Providing transparent, tamper-proof audit trails for every document submission and payment stage.",
    },
    {
      number: "06",
      icon: Users,
      title: "Student & Career Mobility Shield",
      description:
        "Protecting tuition and relocation fees for students and workers pursuing global opportunities.",
    },
    {
      number: "07",
      icon: Building2,
      title: "Tier-1 Bank Vault Partnerships",
      description:
        "Securing all traveler funds in licensed, central-bank regulated escrow financial institutions.",
    },
    {
      number: "08",
      icon: HelpCircle,
      title: "Independent Dispute Ombudsman",
      description:
        "Providing 24/7 legal & travel arbitration to resolve client-agency disputes rapidly and fairly.",
    },
    {
      number: "09",
      icon: TrendingUp,
      title: "Scaling Verified Agency Growth",
      description:
        "Empowering legitimate, verified travel agencies to scale their booking volumes with instant trust.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0A318B]">
            Strategic 9-Point Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A318B]">
            The Vision For African Mobility
          </h2>
          <p className="text-sm font-medium text-[#3B5284]">
            9 foundational pillars transforming how millions of Africans engage with international opportunities safely.
          </p>
        </div>

        {/* 9 Vision Points Grid (3x3 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-7 rounded-2xl border border-[#E2ECF9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#F5F9FE] text-[#0A318B] group-hover:bg-[#0A318B] group-hover:text-white transition-colors flex items-center justify-center border border-[#E2ECF9]">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-[#0A318B] transition-colors">
                      {point.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A318B] leading-snug">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#3B5284] leading-relaxed">
                    {point.description}
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
