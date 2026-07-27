"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ShieldCheck } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Can the travel agent withdraw money before finishing my application?",
    answer:
      "No. Funds deposited in Visa Guard Escrow are ring-fenced in a regulated partner bank account. The travel agent has zero withdrawal privilege until you inspect AI-verified milestone proof and explicitly authorize disbursement.",
  },
  {
    question: "What happens if an agent submits a fake visa appointment slip or doctored PDF?",
    answer:
      "Visa Guard's AI document verification engine cross-references appointment confirmation codes, flight PNRs, and PDF metadata against official embassy databases. Flagged submissions trigger an immediate safety hold and compliance investigation.",
  },
  {
    question: "How does Visa Guard protect against visa agent scams in Nigeria and Africa?",
    answer:
      "We eliminate lump-sum upfront cash payments. All application funds stay securely locked in bank-grade escrow vaults handled entirely by our payment infrastructure provider, Paystack. Visa Guard provides the trust orchestration layer and does not have direct access to transaction funds—except for standard subscription plans and platform maintenance commissions. Funds are released step-by-step only after verified document and appointment proof, eliminating agent ghosting and fake document fraud.",
  },
  {
    question: "How long does a dispute refund take if an agent breaches milestone terms?",
    answer:
      "If an agent fails to deliver an agreed milestone or fraudulent activity is confirmed by our legal arbitration team, unreleased funds are automatically refunded to your bank account within 24 to 48 hours.",
  },
  {
    question: "How are travel agents verified on Visa Guard before taking clients?",
    answer:
      "Every listed travel agent undergoes a rigorous 9-step vetting process including CAC corporate registry check, mandatory live face liveness verification, physical office address inspection, director NIN/BVN biometric matching, and active travel license confirmation.",
  },
];

export default function HowItWorksFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] border-b border-[#E2ECF9]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2ECF9] text-xs font-semibold text-[#0A318B]">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Search-Intent Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B]">
            Frequently Asked Escrow Questions
          </h2>
          <p className="text-sm sm:text-base text-[#3B5284] font-normal">
            Everything you need to know about milestone payouts, AI document checks, and traveler protection.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#E2ECF9] overflow-hidden shadow-xs hover:border-[#0A318B]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-[#0A318B] text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0A318B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#3B5284] leading-relaxed border-t border-slate-100 font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
