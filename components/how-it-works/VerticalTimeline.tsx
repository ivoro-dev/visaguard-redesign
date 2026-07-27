"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react";


export interface TimelineStep {
  id: number;
  number: string;
  shortTitle: string;
  badge: string;
  title: string;
  description: string;
  mechanisms: string[];
  imageUrl: string;
  imageAlt: string;
  statusBadge: string;
}

const STEPS: TimelineStep[] = [
  {
    id: 0,
    number: "01",
    shortTitle: "Sign Up & Identity",
    badge: "Step 01 // Traveler Onboarding",
    title: "Biometric Identity & NIN Database Matching",
    description:
      "Travelers create a profile in under 2 minutes. Visa Guard executes instantaneous 3D facial matching cross-referenced with NIMC and BVN databases via NDPR-compliant encryption before any escrow contract is initiated.",
    mechanisms: [
      "NIMC & BVN Database Sync",
      "3D Liveness Biometric Match",
      "NDPR Data Privacy Compliant",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person using smartphone for biometric ID verification",
    statusBadge: "Traveler Identity Verified",
  },
  {
    id: 1,
    number: "02",
    shortTitle: "Agent Match",
    badge: "Step 02 // Contractor Selection",
    title: "Select 9-Step Vetted Agent & Lock Contract Terms",
    description:
      "Browse CAC-registered travel agents who have passed physical premise inspections and background checks. Define clear milestone deliverables (e.g., document audit, embassy appointment booking, final visa submission) with binding payout conditions.",
    mechanisms: [
      "CAC Registration & Premises Audit",
      "Director Background Verification",
      "Binding Milestone Schedule",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional travel consultation meeting in modern office setting",
    statusBadge: "Milestone Contract Locked",
  },
  {
    id: 2,
    number: "03",
    shortTitle: "Escrow Deposit",
    badge: "Step 03 // Capital Ring-Fencing",
    title: "Deposit Application Funds in Bank Escrow Vault",
    description:
      "Your contract funds are transferred into a tier-1 regulated bank escrow account. Funds remain completely ring-fenced—travel agents have zero upfront access and cannot withdraw money until milestone criteria are verified.",
    mechanisms: [
      "Regulated Bank Escrow Vault",
      "Zero Upfront Agent Payouts",
      "Immutable Audit Ledger",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital bank security and vault interface representation",
    statusBadge: "Funds Safe in Escrow Vault",
  },
  {
    id: 3,
    number: "04",
    shortTitle: "AI Verification",
    badge: "Step 04 // Automated Deliverable Audit",
    title: "Agent Uploads Deliverables; AI Audits Authenticity",
    description:
      "When the agent submits proof (such as embassy appointment confirmation numbers or airline PNR codes), Visa Guard's AI anti-fraud engine audits the references directly against official embassy and carrier databases to detect tampered PDFs.",
    mechanisms: [
      "Embassy Reference Code Validation",
      "Airline PNR & Receipt Audit",
      "PDF Tamper Metadata Scanning",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Passport and official visa document close-up review",
    statusBadge: "Milestone Proof AI Verified",
  },
  {
    id: 4,
    number: "05",
    shortTitle: "Fund Release",
    badge: "Step 05 // Authorized Disbursement",
    title: "Confirm Verified Deliverables or Trigger Instant Refund",
    description:
      "You review the AI-verified milestone proof inside your dashboard. Once you confirm satisfaction, funds for that stage disburse instantly to the agent. If the agent defaults or fails verification, unreleased funds automatically refund to your bank account.",
    mechanisms: [
      "Traveler Sign-Off Authorization",
      "24-48h Bank Refund Execution",
      "24/7 Legal Arbitration Support",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Confident traveler inside airport terminal after visa confirmation",
    statusBadge: "Disbursement Authorized / Refund Guaranteed",
  },
];

export default function VerticalTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll observer to link viewport scrolling to active step
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      for (let i = stepRefs.current.length - 1; i >= 0; i--) {
        const ref = stepRefs.current[i];
        if (ref && ref.offsetTop <= scrollPosition) {
          setActiveStep(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToStep = (index: number) => {
    setActiveStep(index);
    const targetRef = stepRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Progress percentage (0% for step 0 up to 100% for step 4)
  const progressPercent = (activeStep / (STEPS.length - 1)) * 100;

  return (
    <section
      id="timeline-section"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2ECF9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A318B] bg-[#F5F9FE] px-3.5 py-1.5 rounded-full border border-[#E2ECF9]">
            Unified 5-Step Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight">
            How Milestone Escrow <span className="gradient-text-blue font-serif-heading italic font-normal pr-3">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3B5284] font-normal max-w-xl mx-auto">
            Scroll down or select a node below to see how funds, data, and travel agents move safely through each verification milestone.
          </p>
        </div>

        {/* Top Horizontal Step Pill Navigation (Mobile / Tablet Quick Jump) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100">
          {STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;
            return (
              <button
                key={s.number}
                onClick={() => jumpToStep(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? "bg-[#0A318B] text-white border-[#0A318B] shadow-md shadow-blue-900/15"
                    : isPassed
                    ? "bg-[#FBFDF3] text-emerald-700 border-emerald-200"
                    : "bg-[#F5F9FE] text-[#566C9A] border-[#E2ECF9] hover:bg-slate-100"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? "bg-white text-[#0A318B]"
                      : isPassed
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {s.number}
                </span>
                <span>{s.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Main Connected-Dot Timeline Layout */}
        <div className="relative">
          {/* Vertical Dashed Line Container (Desktop Left Side) */}
          <div className="hidden lg:block absolute left-[31px] top-6 bottom-12 w-1 z-0">
            {/* Background Dashed Line */}
            <div className="w-full h-full border-r-2 border-dashed border-[#E2ECF9]" />

            {/* Filled Progress Line Trail */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#0A318B] via-emerald-500 to-emerald-600 rounded-full"
              style={{ height: `${progressPercent}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Timeline Steps Stack */}
          <div className="space-y-16 lg:space-y-24">
            {STEPS.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-24 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Left Column: Numbered Connected Circle Node (Desktop) */}
                  <div className="hidden lg:flex lg:col-span-1 items-start justify-center relative z-10 pt-2">
                    <button
                      onClick={() => jumpToStep(index)}
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 cursor-pointer relative ${
                        isActive
                          ? "bg-[#0A318B] text-white shadow-xl ring-4 ring-emerald-400/40 shadow-emerald-500/20 scale-110"
                          : isPassed
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-white border-2 border-[#E2ECF9] text-[#566C9A] hover:border-[#0A318B]"
                      }`}
                    >
                      {/* Pulse Glow Effect for Active Node */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
                      )}
                      <span>{step.number}</span>
                    </button>
                  </div>

                  {/* Middle & Right Column: Content Card with Unsplash Image Side-by-Side */}
                  <div className="lg:col-span-11 bg-[#F5F9FE] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E2ECF9] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Text Side (lg:col-span-7) */}
                      <div className="lg:col-span-7 space-y-5">
                        {/* Step Header Badge */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[11px] font-semibold tracking-wider uppercase bg-white px-3 py-1 rounded-full border border-[#E2ECF9] text-[#0A318B]">
                            {step.badge}
                          </span>

                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {step.statusBadge}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A318B] leading-tight">
                          {step.title}
                        </h3>

                        {/* Mechanism Description */}
                        <p className="text-sm sm:text-base text-[#3B5284] leading-relaxed font-normal">
                          {step.description}
                        </p>

                        {/* Technical Mechanism Pills */}
                        <div className="pt-1 flex flex-wrap gap-2">
                          {step.mechanisms.map((mech) => (
                            <span
                              key={mech}
                              className="text-xs font-bold text-[#0A318B] bg-white px-3 py-1.5 rounded-xl border border-[#E2ECF9] flex items-center gap-1.5 shadow-2xs"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>{mech}</span>
                            </span>
                          ))}
                        </div>

                        {/* Jump Controls */}
                        <div className="pt-4 flex items-center justify-between border-t border-[#E2ECF9]">
                          <button
                            disabled={index === 0}
                            onClick={() => jumpToStep(Math.max(0, index - 1))}
                            className="px-3 py-2 rounded-xl text-xs font-bold text-[#0A318B] bg-white border border-[#E2ECF9] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-slate-50 flex items-center gap-1"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Previous Phase</span>
                          </button>

                          <span className="text-xs font-bold text-[#566C9A]">
                            Step {index + 1} of {STEPS.length}
                          </span>

                          <button
                            disabled={index === STEPS.length - 1}
                            onClick={() => jumpToStep(Math.min(STEPS.length - 1, index + 1))}
                            className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-[#0A318B] hover:bg-[#072366] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                          >
                            <span className="hidden sm:inline">Next Phase</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Image Side (lg:col-span-5) */}
                      <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#E2ECF9] group">
                        {/* Unsplash Photo */}
                        <Image
                          src={step.imageUrl}
                          alt={step.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Editorial Brand Navy Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-[#0A192F]/30 to-transparent" />

                        {/* Caption / Image Badge */}
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 text-left shadow-lg">
                          <p className="text-[11px] font-bold text-[#0A318B]">
                            {step.shortTitle} Visual Verification
                          </p>
                          <p className="text-[10px] text-[#3B5284] line-clamp-1 font-medium">
                            {step.imageAlt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
