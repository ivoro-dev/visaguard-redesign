"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface WaitlistSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function WaitlistSuccessModal({ isOpen, onClose, email }: WaitlistSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#072366]/70 backdrop-blur-md cursor-pointer"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E2ECF9] shadow-2xl space-y-6 relative overflow-hidden text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#0A318B]">You&apos;re On the Visa Guard Waitlist!</h3>
                <p className="text-xs sm:text-sm text-[#566C9A]">
                  We sent a confirmation link to <span className="font-bold text-[#0A318B]">{email}</span>. Your money will stay protected until verified milestones are completed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9] text-left space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#0A318B]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Early Access Benefit Granted</span>
                </div>
                <p className="text-[#566C9A] leading-relaxed">
                  Zero transaction fees on your first milestone deposit + free AI agent credential audit.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Done</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
