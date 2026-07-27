"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Lock, Award } from "lucide-react";

export default function AboutHero() {
  const heroMetrics = [
    {
      value: "₦0",
      label: "Escrow Funds Lost",
      subtext: "100% milestone protection",
      icon: Lock,
    },
    {
      value: "CAC Registered",
      label: "RC 7924102",
      subtext: "NDPR Data Compliant",
      icon: ShieldCheck,
    },
    {
      value: "9-Step Vetting",
      label: "Verification Standard",
      subtext: "Strict agent auditing",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E2ECF9] overflow-hidden bg-[#FBFDF3]">
      {/* Background Image & Ambient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/bg-about.png"
          alt="About background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFDF3]/70 via-[#F5F9FE]/50 to-[#FBFDF3]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Top Tag & Title */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E2ECF9] text-[#0A318B] text-xs font-semibold shadow-xs"
          >
            <HeartHandshake className="w-4 h-4 text-[#0A318B]" />
            <span>Our Origins & Purpose</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A318B] tracking-tight leading-[1.14]"
          >
            Built From Personal Pain: <br className="hidden sm:inline" />
            <span className="text-[#072366] underline decoration-[#0A318B]/30 underline-offset-8">
              Africa&apos;s Travel Escrow Protocol
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#3B5284] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            After losing money to fake visa agents twice, Chukwudi Eze built Visa Guard Africa — Nigeria&apos;s first CAC-registered travel company with milestone escrow protection and a 9-step agent vetting standard.
          </motion.p>
        </div>

        {/* Quick Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {heroMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E2ECF9] shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#F5F9FE] text-[#0A318B] border border-[#E2ECF9] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#0A318B] block">
                    {metric.value}
                  </span>
                  <p className="text-xs font-semibold text-[#072366] mt-0.5">
                    {metric.label}
                  </p>
                  <p className="text-[11px] font-medium text-[#566C9A]">
                    {metric.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
