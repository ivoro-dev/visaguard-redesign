"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  FileCheck2,
  UserCheck,
  Vault,
  MessageSquareLock,
  UserCog,
  History,
  Lock,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";

export default function SecurityMeasuresGrid() {
  const securityMeasures = [
    {
      id: "ai-scam-detection",
      title: "AI Scam Detection",
      description:
        "Real-time machine learning pattern matching against blacklisted fraudulent numbers, fake agency aliases, and active travel scam databases.",
      icon: ShieldAlert,
      tag: "AI Powered",
    },
    {
      id: "ai-doc-verification",
      title: "AI Document Verification",
      description:
        "Forensic scanning of TLScontact, VFS Global, and embassy confirmation slips to detect forged PDF metadata, altered dates, and invalid barcodes.",
      icon: FileCheck2,
      tag: "Forensic Scan",
    },
    {
      id: "strict-agent-vetting",
      title: "Strict Agent Verification",
      description:
        "Mandatory 9-step audit including CAC corporate check, physical office walkthrough, director NIN validation, and visa success rate verification.",
      icon: UserCheck,
      tag: "9-Step Audit",
    },
    {
      id: "milestone-escrow",
      title: "Milestone-Based Escrow Payments",
      description:
        "Application funds locked in regulated bank escrow vaults and released in 3 verifiable milestone stages. Zero upfront scam loss.",
      icon: Vault,
      tag: "Bank Escrow",
    },
    {
      id: "secure-messaging",
      title: "Secure In-App Messaging",
      description:
        "End-to-end encrypted messaging channel between travelers and verified agencies to prevent off-platform WhatsApp extortion.",
      icon: MessageSquareLock,
      tag: "Encrypted",
    },
    {
      id: "role-based-controls",
      title: "Role-Based Administrative Controls",
      description:
        "Strict multi-level permission hierarchy ensuring zero unauthorized access to traveler identity files or escrow funds.",
      icon: UserCog,
      tag: "RBAC Security",
    },
    {
      id: "audit-logs",
      title: "Immutable Audit Logs",
      description:
        "Tamper-proof digital log of every document upload, milestone approval, chat message, and fund disbursement for transparent legal arbitration.",
      icon: History,
      tag: "Audit Trail",
    },
    {
      id: "privacy-data-protection",
      title: "Privacy & Data Protection",
      description:
        "Strict compliance with NDPR and international data privacy laws. High-grade AES-256 encryption at rest and in transit.",
      icon: Lock,
      tag: "NDPR Compliant",
    },
    {
      id: "secure-id-verification",
      title: "Secure Identity Verification",
      description:
        "Live 3D liveness detection and biometric NIN matching for agency directors and travelers to guarantee absolute accountability.",
      icon: Fingerprint,
      tag: "Biometric NIN",
    },
  ];

  return (
    <div className="pt-16 space-y-10">
      {/* Sub-Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A318B] text-white text-xs font-bold shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
          <span>Security At Our Core</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A318B] tracking-tight">
          Comprehensive 9-Point Security Architecture
        </h3>
        <p className="text-xs sm:text-sm text-[#3B5284] leading-relaxed">
          Every layer of Visa Guard is built to protect traveler capital, ensure data privacy, and hold travel agencies strictly accountable.
        </p>
      </div>

      {/* 9 Security Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {securityMeasures.map((measure, idx) => {
          const Icon = measure.icon;
          return (
            <motion.div
              key={measure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E2ECF9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0A318B]/30"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A318B]/10 text-[#0A318B] flex items-center justify-center group-hover:bg-[#0A318B] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5F9FE] text-[#0A318B] text-[11px] font-bold border border-[#E2ECF9]">
                    {measure.tag}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#0A318B] group-hover:text-[#072366] transition-colors">
                  {measure.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#3B5284] leading-relaxed">
                  {measure.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <Lock className="w-3 h-3" />
                <span>Active Infrastructure Guard</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
