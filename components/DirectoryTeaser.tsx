"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import DirectoryTabs, { DirectoryTabType } from "./directory/DirectoryTabs";
import DirectoryCard from "./directory/DirectoryCard";
import { EMBASSIES_DATA, AIRLINES_DATA, SCAM_ARTICLES_DATA } from "@/data/directoryData";

export default function DirectoryTeaser() {
  const [activeTab, setActiveTab] = useState<DirectoryTabType>("embassies");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] relative overflow-hidden border-t border-[#E2ECF9]">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs">
            <BookOpen className="w-4 h-4 text-[#0A318B]" />
            <span>Free Anti-Fraud Resource Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A318B] tracking-tight">
            Official Travel <span className="gradient-text-blue font-serif-heading italic font-normal">Directories & Education</span>
          </h2>

          <p className="text-[#3B5284] text-base sm:text-lg">
            Direct access to official embassy portals, verified airlines, and critical fraud prevention resources to keep your visa process safe.
          </p>
        </motion.div>

        {/* Directory Tab Selector */}
        <DirectoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Directory Grid */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeTab === "embassies" &&
              EMBASSIES_DATA.map((item, idx) => (
                <DirectoryCard key={item.country} type="embassy" item={item} idx={idx} />
              ))}

            {activeTab === "airlines" &&
              AIRLINES_DATA.map((item, idx) => (
                <DirectoryCard key={item.name} type="airline" item={item} idx={idx} />
              ))}

            {activeTab === "scam-education" &&
              SCAM_ARTICLES_DATA.map((item, idx) => (
                <DirectoryCard key={item.title} type="scam-article" item={item} idx={idx} />
              ))}
          </div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#0A318B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900/40"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Need to Verify an Agent or Visa Offer?</span>
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl">
              Use our AI document checker and verified database to confirm your agent&apos;s credentials before paying a kobo.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white text-[#0A318B] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 flex items-center gap-2 group cursor-pointer"
          >
            <span>Verify Agent Credentials</span>
            <ArrowRight className="w-4 h-4 text-[#0A318B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
