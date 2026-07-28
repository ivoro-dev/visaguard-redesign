"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuickHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Verified Agent",
      description:
        "Select from CAC-verified, identity-checked travel agencies audited through our 9-step fraud protection framework.",
      icon: UserCheck,
      badge: "Strictly Vetted",
      accent: "bg-blue-50 text-[#0A318B] border-blue-200",
    },
    {
      number: "02",
      title: "Pay Securely Through Escrow",
      description:
        "Deposit application funds into regulated bank escrow. Your money is locked safely and never paid upfront.",
      icon: ShieldCheck,
      badge: "Zero Upfront Risk",
      accent: "bg-amber-50 text-amber-900 border-amber-200",
    },
    {
      number: "03",
      title: "Release Payment Only After Verified Milestones",
      description:
        "Funds are released in stages only when genuine milestone proof—such as embassy appointments and visa approvals—is verified.",
      icon: CheckCircle2,
      badge: "Milestone Protected",
      accent: "bg-emerald-50 text-emerald-900 border-emerald-200",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3] relative border-y border-[#E2ECF9]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A318B] text-white text-xs font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>How Visa Guard Protects You</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A318B] tracking-tight">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-xs sm:text-sm text-[#3B5284] font-medium leading-relaxed">
            Eliminating travel agent scams with guaranteed escrow milestones and verified agency credentials.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2ECF9] shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between group"
              >
                {/* Step Badge & Icon Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-[#0A318B]/20 font-mono">
                      {step.number}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${step.accent}`}>
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#0A318B] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A318B] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3B5284] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Card Step Footer Indicator */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#0A318B] group-hover:translate-x-1 transition-transform">
                  <span>Step {idx + 1} Protection</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Link to Deep-Dive How It Works */}
        <div className="text-center pt-2">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A318B] hover:text-[#072366] hover:underline"
          >
            <span>Explore full escrow workflow & technical protection layers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
