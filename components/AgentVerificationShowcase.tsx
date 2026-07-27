"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  CheckCircle2,
  FileBadge,
  Building,
  Camera,
  MapPin,
  FileText,
  Phone,
  Mail,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function AgentVerificationShowcase() {
  const auditStages = [
    {
      stageNumber: "Stage 01",
      stageTitle: "Identity & Corporate Registration",
      badge: "Identity Vetted",
      steps: [
        { icon: FileBadge, title: "Government ID Verification", desc: "NIN / International Passport biometric check against legal database." },
        { icon: UserCheck, title: "Live Face Verification Process", desc: "Mandatory live 3D facial liveness scan & biometric match to prevent agent impersonation." },
        { icon: Building, title: "CAC Business Registration", desc: "Corporate Affairs Commission (CAC) status & RC number lookup." },
      ],
    },
    {
      stageNumber: "Stage 02",
      stageTitle: "Physical Office & Address Audit",
      badge: "On-Site Verified",
      steps: [
        { icon: FileText, title: "Utility Bill Verification", desc: "Active utility bill audit matching agency corporate address." },
        { icon: MapPin, title: "Physical Address Audit", desc: "On-site office inspection conducted by Visa Guard field auditors." },
        { icon: Camera, title: "Premises Photo Verification", desc: "Geo-tagged photo verification of physical business office." },
      ],
    },
    {
      stageNumber: "Stage 03",
      stageTitle: "Corporate Contact & Legal Compliance",
      badge: "Final Compliance Sign-Off",
      steps: [
        { icon: Phone, title: "Corporate Phone OTP", desc: "Verified business telephone line via corporate OTP." },
        { icon: Mail, title: "Corporate Domain Email", desc: "Corporate email domain match (no free webmail accounts)." },
        { icon: ShieldAlert, title: "Legal Risk Review", desc: "Manual background legal check by our compliance team." },
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
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
            <span>Anti-Scam Agent Vetting</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight">
            The 9-Step Agent <span className="gradient-text- pr-2 font-serif-heading italic font-normal">Verification Badge</span>
          </h2>

          <p className="text-[#3B5284] text-base sm:text-lg">
            How travel agents are verified in Nigeria. Every agent must pass 9 mandatory identity, office, and legal audits before receiving a verified badge.
          </p>
        </motion.div>

        {/* 3 Grouped Audit Stages Layout with Cascading Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {auditStages.map((stage, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: sIdx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2ECF9] shadow-md flex flex-col justify-between space-y-6 vga-card-hover cursor-pointer"
            >
              <div className="space-y-6">
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-[#E2ECF9] pb-4">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#566C9A]">
                      {stage.stageNumber}
                    </span>
                    <h3 className="text-lg font-semibold text-[#0A318B]">{stage.stageTitle}</h3>
                  </div>

                
                </div>

                {/* Steps List */}
                <div className="space-y-4">
                  {stage.steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#F5F9FE]/60 border border-[#E2ECF9]/60">
                        <div className="w-9 h-9 rounded-xl bg-[#0A318B] flex items-center justify-center text-white shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-medium text-[#0A318B]">{step.title}</h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A318B] shrink-0" />
                          </div>
                          <p className="text-[11px] text-[#566C9A] leading-normal">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-[#F5F9FE] flex items-center justify-between text-xs font-bold text-[#0A318B]">
                <span>Stage {sIdx + 1} Vetting Standard</span>
                <CheckCircle2 className="w-4 h-4 text-[#0A318B]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-2"
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-md shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <span> Complete  Guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
