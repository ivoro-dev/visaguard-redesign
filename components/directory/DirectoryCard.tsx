"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, ShieldAlert } from "lucide-react";
import { EmbassyItem, AirlineItem, ScamArticleItem } from "@/data/directoryData";

interface EmbassyCardProps {
  type: "embassy";
  item: EmbassyItem;
  idx: number;
}

interface AirlineCardProps {
  type: "airline";
  item: AirlineItem;
  idx: number;
}

interface ScamArticleCardProps {
  type: "scam-article";
  item: ScamArticleItem;
  idx: number;
}

type DirectoryCardProps = EmbassyCardProps | AirlineCardProps | ScamArticleCardProps;

export default function DirectoryCard(props: DirectoryCardProps) {
  const { type, idx } = props;

  if (type === "embassy") {
    const { item } = props;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: idx * 0.08 }}
        whileHover={{ y: -4 }}
        className="p-6 rounded-3xl bg-white border border-[#E2ECF9] hover:border-[#0A318B]/40 transition-all flex flex-col justify-between space-y-4 shadow-sm vga-card-hover cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] p-1.5 flex items-center justify-center overflow-hidden shadow-xs shrink-0 relative">
              <Image
                src={item.flagUrl}
                alt={`${item.country} flag`}
                width={40}
                height={40}
                unoptimized
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0A318B]">{item.country}</h3>
              <span className="text-[10px] text-[#566C9A] font-semibold">Official Embassy Info</span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Verified Link
          </span>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#072366]">{item.title}</h4>
          <p className="text-xs text-[#566C9A] mt-1 leading-relaxed">{item.note}</p>
        </div>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A318B] hover:text-[#072366] transition-colors pt-2 cursor-pointer group"
        >
          <span>Visit Official Portal</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    );
  }

  if (type === "airline") {
    const { item } = props;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: idx * 0.08 }}
        whileHover={{ y: -4 }}
        className="p-6 rounded-3xl bg-white border border-[#E2ECF9] hover:border-[#0A318B]/40 transition-all flex flex-col justify-between space-y-4 shadow-sm vga-card-hover cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] p-1.5 flex items-center justify-center overflow-hidden shadow-xs shrink-0 relative">
              <Image
                src={item.logoUrl}
                alt={`${item.name} logo`}
                width={40}
                height={40}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0A318B]">{item.name}</h3>
              <span className="text-[10px] text-[#566C9A] font-semibold">{item.code} Official Carrier</span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#0A318B] bg-[#F5F9FE] px-3 py-1 rounded-full border border-[#E2ECF9]">
            {item.type}
          </span>
        </div>

        <div>
          <p className="text-xs text-[#566C9A] mt-1 leading-relaxed">{item.note}</p>
        </div>

        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A318B] hover:text-[#072366] transition-colors pt-2 cursor-pointer group"
        >
          <span>Verify Booking Rules</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    );
  }

  // scam-article
  const { item } = props;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.08 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-3xl bg-white border border-[#E2ECF9] hover:border-[#0A318B]/40 transition-all flex flex-col justify-between space-y-4 shadow-sm vga-card-hover cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-[#0A318B] bg-[#F5F9FE] px-3 py-1 rounded-full border border-[#E2ECF9]">
          {item.tag}
        </span>
        <span className="text-[10px] font-bold text-[#566C9A]">{item.readTime}</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-bold text-[#0A318B] leading-snug">{item.title}</h3>
        <p className="text-xs text-[#566C9A] leading-relaxed">
          Learn how Visa Guard Africa&apos;s milestone escrow prevents advance fee fraud and protects your travel funds.
        </p>
      </div>

      <Link
        href="/how-it-works"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors pt-2 cursor-pointer group"
      >
        <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
        <span>Read Anti-Scam Guide</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
