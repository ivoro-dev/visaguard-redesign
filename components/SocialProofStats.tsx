"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Award,
  Lock,
} from "lucide-react";

export default function SocialProofStats() {
  const stats = [
    {
      id: "verified-agents",
      label: "Verified Travel Agents",
      value: "150+",
      subtext: "Strictly CAC & NIN audited",
      icon: Building2,
      color: "from-blue-600 to-blue-800",
    },
    {
      id: "registered-travelers",
      label: "Registered Travelers",
      value: "1,250+",
      subtext: "Protected waitlist members",
      icon: Users,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      id: "escrow-transactions",
      label: "Escrow Transactions Protected",
      value: "₦450M+",
      subtext: "Secured application funds",
      icon: ShieldCheck,
      color: "from-[#0A318B] to-[#072366]",
    },
    {
      id: "successful-cases",
      label: "Successful Cases Completed",
      value: "98.4%",
      subtext: "Verified visa milestones",
      icon: CheckCircle2,
      color: "from-emerald-600 to-teal-800",
    },
    {
      id: "disputes-resolved",
      label: "Disputes Successfully Resolved",
      value: "100%",
      subtext: "Fair escrow arbitration",
      icon: Scale,
      color: "from-purple-600 to-indigo-900",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBFDF3] via-[#F5F9FE] to-[#FBFDF3] border-b border-[#E2ECF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A318B] text-white text-xs font-bold shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Proven Trust Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A318B] tracking-tight">
            Building Africa&apos;s Most Trusted Travel Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-[#3B5284] font-medium leading-relaxed">
            Real-time metric indicators demonstrating our commitment to zero-fraud visa processing and secure escrow payments.
          </p>
        </div>

        {/* 5 Dynamic Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-[#E2ECF9] shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-[#0A318B]/10 text-[#0A318B] flex items-center justify-center group-hover:bg-[#0A318B] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A318B] tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#072366] leading-snug">
                    {stat.label}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-center gap-1 text-[11px] text-[#566C9A]">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>{stat.subtext}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
