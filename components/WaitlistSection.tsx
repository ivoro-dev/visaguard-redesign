"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, UserCheck, Star } from "lucide-react";
import WaitlistForm from "./waitlist/WaitlistForm";
import WaitlistCounter from "./waitlist/WaitlistCounter";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A318B]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Value Props, Countdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0A318B]" />
              <span>Early Access Registration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight leading-tight">
              Protect Your Journey <br className="hidden sm:inline" />
              <span className="gradient-text-blue font-serif-heading italic font-normal">Before You Pay.</span>
            </h2>

            <div className="space-y-2">
              <p className="text-[#072366] text-base sm:text-lg font-bold leading-snug">
                Your money stays protected until verified milestones are completed.
              </p>
              <p className="text-[#3B5284] text-xs sm:text-sm sm:text-base leading-relaxed">
                Join over 1,000+ Nigerian and African travelers gaining early access to verified agent badging, zero upfront scam risk, and bank escrow payment releases.
              </p>
            </div>

            {/* Benefit Checkmarks - Scannable */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-[#072366] max-w-lg mx-auto sm:mx-0">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2ECF9] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong className="text-[#0A318B]">Zero Escrow Fees</strong> on your first travel application</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2ECF9] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong className="text-[#0A318B]">Free AI Audit</strong> for embassy appointment slips & docs</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2ECF9] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong className="text-[#0A318B]">Direct Access</strong> to top 9-step CAC-vetted travel agencies</span>
              </div>
            </div>

            {/* Countdown Component */}
            <WaitlistCounter />
          </motion.div>

          {/* Right Column: Waitlist Card Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2ECF9] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="text-center space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A318B]">Join Thousands of Africans Choosing Safer Travel</h3>
                <p className="text-xs text-[#566C9A]">Get instant SMS/email notification when public access opens.</p>
              </div>

              {/* Form Subcomponent */}
              <WaitlistForm />

              {/* Bottom Social Proof */}
              <div className="pt-4 border-t border-[#E2ECF9] flex items-center justify-between text-[11px] font-semibold text-[#566C9A]">
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#0A318B]" />
                  <span>NDPR Compliant Privacy</span>
                </div>
                <div className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>1,000+ Registered</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
