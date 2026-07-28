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
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Now Live on Google Play Store</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight leading-tight">
              Your Journey Deserves Protection. <br className="hidden sm:inline" />
              <span className="gradient-text-blue font-serif-heading italic font-normal">Download Visa Guard Today.</span>
            </h2>

            <div className="space-y-2">
              <p className="text-[#072366] text-base sm:text-lg font-bold leading-snug">
                Your money stays protected in bank escrow until verified milestones are completed.
              </p>
              <p className="text-[#3B5284] text-xs sm:text-sm sm:text-base leading-relaxed">
                Join thousands of African travelers verifying CAC-audited agencies, securing payments with milestone escrow, and avoiding visa scams.
              </p>
            </div>

            {/* Benefit Checkmarks - Scannable */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-[#072366] max-w-lg mx-auto sm:mx-0">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2ECF9] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong className="text-[#0A318B]">Instant Verification</strong> for 9-step audited travel agencies</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2ECF9] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong className="text-[#0A318B]">Free AI Audit</strong> for embassy appointment slips & docs</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2ECF9] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong className="text-[#0A318B]">Zero Upfront Risk</strong> with milestone bank escrow vaults</span>
              </div>
            </div>

            {/* Google Play Store Direct Download Action */}
            <div className="pt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-base shadow-xl shadow-blue-900/20 hover:scale-[1.02] transition-all"
              >
                <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
                </svg>
                <span>Get App on Google Play</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Download Card / Quick Link Sender */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2ECF9] shadow-2xl space-y-6 relative overflow-hidden text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0A318B]/10 text-[#0A318B] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A318B]">Download Visa Guard Official App</h3>
                <p className="text-xs text-[#566C9A]">Available globally for all Android devices on Google Play Store.</p>
              </div>

              {/* Direct Play Store Download Banner */}
              <div className="p-5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9] space-y-3">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/15 flex items-center justify-center gap-3 transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
                  </svg>
                  <span>Download on Google Play</span>
                </a>
                <p className="text-[11px] text-[#566C9A]">
                  Fast 1-click install • Instant verification & escrow management
                </p>
              </div>

              {/* Form Subcomponent for SMS Download Link */}
              <WaitlistForm />

              {/* Bottom Social Proof */}
              <div className="pt-4 border-t border-[#E2ECF9] flex items-center justify-between text-[11px] font-semibold text-[#566C9A]">
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#0A318B]" />
                  <span>NDPR Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Google Play App</span>
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
