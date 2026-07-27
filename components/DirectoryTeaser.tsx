"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ShieldAlert, ArrowRight, Search, X } from "lucide-react";
import Link from "next/link";
import DirectoryTabs, { DirectoryTabType } from "./directory/DirectoryTabs";
import DirectoryCard from "./directory/DirectoryCard";
import { EMBASSIES_DATA, AIRLINES_DATA, SCAM_ARTICLES_DATA } from "@/data/directoryData";

export default function DirectoryTeaser() {
  const [activeTab, setActiveTab] = useState<DirectoryTabType>("embassies");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmbassies = EMBASSIES_DATA.filter(
    (item) =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAirlines = AIRLINES_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredScamArticles = SCAM_ARTICLES_DATA.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchPlaceholder =
    activeTab === "embassies"
      ? "Search embassies (e.g. UK, Canada, Germany, Australia)..."
      : activeTab === "airlines"
      ? "Search airlines (e.g. Qatar, Air Peace, Emirates, Delta)..."
      : "Search anti-scam guides (e.g. student, fake agent, biometric)...";

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

        {/* Search Bar Column */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#0A318B] absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-[#E2ECF9] text-sm text-[#072366] placeholder:text-slate-400 focus:outline-none focus:border-[#0A318B] focus:ring-2 focus:ring-[#0A318B]/20 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-[#0A318B] hover:bg-[#F5F9FE] transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Directory Grid */}
        <AnimatePresence mode="wait">
          {activeTab === "embassies" && (
            filteredEmbassies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredEmbassies.map((item, idx) => (
                  <DirectoryCard key={item.country} type="embassy" item={item} idx={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-[#E2ECF9] p-8 max-w-lg mx-auto space-y-3">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-[#0A318B]">No Embassies Match &quot;{searchQuery}&quot;</h3>
                <p className="text-xs text-[#566C9A]">
                  Try searching for a different country or clear your search term to see all verified embassy portals.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-xl bg-[#0A318B] text-white text-xs font-bold hover:bg-[#072366] transition-colors cursor-pointer"
                >
                  Clear Search Filter
                </button>
              </div>
            )
          )}

          {activeTab === "airlines" && (
            filteredAirlines.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredAirlines.map((item, idx) => (
                  <DirectoryCard key={item.name} type="airline" item={item} idx={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-[#E2ECF9] p-8 max-w-lg mx-auto space-y-3">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-[#0A318B]">No Airlines Match &quot;{searchQuery}&quot;</h3>
                <p className="text-xs text-[#566C9A]">
                  Try searching for airline name or 2-letter code (e.g. QR, ET, P4, EK, BA) or clear your search term.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-xl bg-[#0A318B] text-white text-xs font-bold hover:bg-[#072366] transition-colors cursor-pointer"
                >
                  Clear Search Filter
                </button>
              </div>
            )
          )}

          {activeTab === "scam-education" && (
            filteredScamArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredScamArticles.map((item, idx) => (
                  <DirectoryCard key={item.title} type="scam-article" item={item} idx={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-[#E2ECF9] p-8 max-w-lg mx-auto space-y-3">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-[#0A318B]">No Guides Match &quot;{searchQuery}&quot;</h3>
                <p className="text-xs text-[#566C9A]">
                  Clear your search to view all fraud prevention guides.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-xl bg-[#0A318B] text-white text-xs font-bold hover:bg-[#072366] transition-colors cursor-pointer"
                >
                  Clear Search Filter
                </button>
              </div>
            )
          )}
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
