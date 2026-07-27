"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Share2,
  Copy,
  Check,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function ContactCards() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@visaguard.africa");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {/* Email Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2ECF9] shadow-sm hover:shadow-xl hover:shadow-[#0A318B]/8 hover:border-[#0A318B]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
      >
        {/* Accent Top Edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A318B] via-[#0A318B] to-emerald-500" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A318B] to-[#072366] text-white flex items-center justify-center shadow-md shadow-[#0A318B]/20 group-hover:scale-105 transition-transform duration-300 relative">
              <Mail className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
            </div>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F5F9FE] text-[#0A318B] border border-[#E2ECF9]">
              Email Channel
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0A318B]">Email Support</h3>
          </div>

          <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
            <div className="p-3 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9] flex items-center justify-between font-semibold text-[#0A318B]">
              <span className="truncate">support@visaguard.africa</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg hover:bg-white text-slate-500 hover:text-[#0A318B] transition-colors cursor-pointer ml-2 shrink-0 border border-transparent hover:border-[#E2ECF9]"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="text-xs text-[#566C9A] flex items-center gap-1.5 pt-0.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Average response time: &lt; 2 hours</span>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <a
            href="mailto:support@visaguard.africa"
            className="w-full py-2.5 rounded-xl bg-[#F5F9FE] hover:bg-[#0A318B] text-[#0A318B] hover:text-white font-semibold text-xs border border-[#E2ECF9] hover:border-[#0A318B] transition-all text-center block cursor-pointer shadow-2xs"
          >
            Send Direct Email →
          </a>
        </div>
      </motion.div>

      {/* Phone Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2ECF9] shadow-sm hover:shadow-xl hover:shadow-[#0A318B]/8 hover:border-[#0A318B]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
      >
        {/* Accent Top Edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#0A318B] to-[#0A318B]" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A318B] to-[#072366] text-white flex items-center justify-center shadow-md shadow-[#0A318B]/20 group-hover:scale-105 transition-transform duration-300 relative">
              <Phone className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
            </div>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F5F9FE] text-[#0A318B] border border-[#E2ECF9]">
              Hotline
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0A318B]">Phone Support</h3>
          </div>

          <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
            <div className="p-3 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9] font-semibold text-[#0A318B]">
              +234 (0) 800 VISAGUARD
              <p className="text-[11px] font-normal text-[#566C9A] mt-0.5">
                (+234 800 847 248 273)
              </p>
            </div>

            <div className="text-xs text-[#566C9A] flex items-center gap-1.5 pt-0.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Mon - Sat: 8:00 AM – 7:00 PM WAT</span>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <a
            href="tel:+234800847248273"
            className="w-full py-2.5 rounded-xl bg-[#F5F9FE] hover:bg-[#0A318B] text-[#0A318B] hover:text-white font-semibold text-xs border border-[#E2ECF9] hover:border-[#0A318B] transition-all text-center block cursor-pointer shadow-2xs"
          >
            Call Hotline Now →
          </a>
        </div>
      </motion.div>

      {/* Socials Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2ECF9] shadow-sm hover:shadow-xl hover:shadow-[#0A318B]/8 hover:border-[#0A318B]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
      >
        {/* Accent Top Edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A318B] via-emerald-500 to-[#0A318B]" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A318B] to-[#072366] text-white flex items-center justify-center shadow-md shadow-[#0A318B]/20 group-hover:scale-105 transition-transform duration-300 relative">
              <Share2 className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Verified Official</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0A318B]">Social Handles</h3>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] hover:bg-slate-100 hover:border-[#0A318B]/20 text-xs font-semibold text-[#0A318B] flex items-center justify-between transition-all cursor-pointer group/link"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#566C9A] group-hover/link:text-[#0A318B] transition-colors" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] hover:bg-slate-100 hover:border-[#0A318B]/20 text-xs font-semibold text-[#0A318B] flex items-center justify-between transition-all cursor-pointer group/link"
            >
              <span>X (Twitter)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#566C9A] group-hover/link:text-[#0A318B] transition-colors" />
            </a>

            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] hover:bg-slate-100 hover:border-[#0A318B]/20 text-xs font-semibold text-[#0A318B] flex items-center justify-between transition-all cursor-pointer group/link"
            >
              <span>WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#566C9A] group-hover/link:text-[#0A318B] transition-colors" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] hover:bg-slate-100 hover:border-[#0A318B]/20 text-xs font-semibold text-[#0A318B] flex items-center justify-between transition-all cursor-pointer group/link"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#566C9A] group-hover/link:text-[#0A318B] transition-colors" />
            </a>
          </div>
        </div>

        <div className="pt-6">
          <div className="w-full py-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-emerald-800 font-semibold text-xs text-center flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Official Brand Presence</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
