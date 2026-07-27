"use client";

import React from "react";
import { Landmark, Plane, ShieldAlert } from "lucide-react";

export type DirectoryTabType = "embassies" | "airlines" | "scam-education";

interface DirectoryTabsProps {
  activeTab: DirectoryTabType;
  setActiveTab: (tab: DirectoryTabType) => void;
}

export default function DirectoryTabs({ activeTab, setActiveTab }: DirectoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-[#E2ECF9] shadow-xs max-w-xl mx-auto">
      <button
        onClick={() => setActiveTab("embassies")}
        className={`flex-1 min-w-[130px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
          activeTab === "embassies"
            ? "bg-[#0A318B] text-white shadow-sm"
            : "text-[#566C9A] hover:text-[#0A318B] hover:bg-[#F5F9FE]"
        }`}
      >
        <Landmark className="w-4 h-4" />
        <span>Embassies</span>
      </button>

      <button
        onClick={() => setActiveTab("airlines")}
        className={`flex-1 min-w-[130px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
          activeTab === "airlines"
            ? "bg-[#0A318B] text-white shadow-sm"
            : "text-[#566C9A] hover:text-[#0A318B] hover:bg-[#F5F9FE]"
        }`}
      >
        <Plane className="w-4 h-4" />
        <span>Airlines</span>
      </button>

      <button
        onClick={() => setActiveTab("scam-education")}
        className={`flex-1 min-w-[130px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
          activeTab === "scam-education"
            ? "bg-[#0A318B] text-white shadow-sm"
            : "text-[#566C9A] hover:text-[#0A318B] hover:bg-[#F5F9FE]"
        }`}
      >
        <ShieldAlert className="w-4 h-4 text-emerald-500" />
        <span>Anti-Scam Guides</span>
      </button>
    </div>
  );
}
