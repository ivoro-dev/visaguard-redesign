"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I know a travel agent in Nigeria isn't a fake or scammer?",
      a: "Check for the Visa Guard Verified Badge. Every verified agent on our platform has undergone NIN biometric matching, CAC business lookup, utility bill audits, and a physical office inspection. Never pay cash into an agent's personal bank account without escrow protection.",
    },
    {
      q: "What happens if my visa agent fails to deliver or disappears?",
      a: "Your money remains safe in the Visa Guard escrow vault. Because funds are released strictly in stages based on approved milestone proof, any unearned money is held safely. If an agent defaults, our legal dispute team audits the in-app evidence and returns your money immediately.",
    },
    {
      q: "How does milestone escrow protect my money during a visa application?",
      a: "You deposit your total application fee into a bank-grade escrow vault at the start. Funds are split into specific milestones (e.g. appointment booking, document submission, final result). The agent receives payment for a stage ONLY after you and our team verify legitimate proof.",
    },
    {
      q: "Does Visa Guard guarantee that foreign embassies will approve my visa?",
      a: "No. Only official government embassies (such as UK Visas & Immigration, IRCC Canada, or US Consulates) have legal authority to issue visas. Visa Guard guarantees 100% financial protection so you never pay for fake documents, forged appointment slips, or incomplete agent work.",
    },
    {
      q: "Is Visa Guard Africa a CAC registered company in Nigeria?",
      a: "Yes. Visa Guard Africa Technologies LTD is registered with the Corporate Affairs Commission (RC: 7924102). All platform operations, escrow structures, and user data handling comply strictly with NDPR regulations and Nigerian financial security laws.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F9FE] border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#0A318B]" />
            <span>Anti-Scam Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A318B] tracking-tight">
            Frequently Asked <span className="gradient-text-blue font-serif-heading italic font-normal">Questions</span>
          </h2>

          <p className="text-[#3B5284] text-base sm:text-lg max-w-2xl mx-auto">
            Clear, direct answers to common questions about visa scams, agent verification, and escrow protection in Nigeria.
          </p>
        </motion.div>

        {/* Accordion List with Cascading Slide-Up Entrances */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-[#E2ECF9] hover:border-[#0A318B]/40 transition-all overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A318B] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0A318B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
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
                      className="px-5 pb-5 text-xs sm:text-sm text-[#3B5284] leading-relaxed border-t border-[#F5F9FE] pt-3.5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center pt-2"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0A318B] hover:text-[#072366] transition-colors cursor-pointer"
          >
            <span>Have more questions? View full FAQ center</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
