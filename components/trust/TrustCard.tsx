"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { TrustPillarItem } from "@/data/trustData";

interface TrustCardProps {
  pillar: TrustPillarItem;
  idx: number;
}

export default function TrustCard({ pillar, idx }: TrustCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      whileHover={{ y: -6 }}
      className="p-8 rounded-3xl bg-white border border-[#E2ECF9] shadow-sm hover:shadow-xl hover:border-[#0A318B]/40 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden vga-card-hover group cursor-pointer"
    >
      <div className="space-y-4">
        {/* Top Tag & Number */}
        <div className="flex items-center justify-between">
          <span className="text-4xl font-extrabold text-[#0A318B]/20 font-mono">
            {pillar.number}
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 ${pillar.tagBg} ${pillar.tagText}`}
          >
            {pillar.tag}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#566C9A] uppercase tracking-wider block">
            {pillar.subtitle}
          </span>
          <h3 className="text-2xl font-bold text-[#0A318B] leading-snug">
            {pillar.title}
          </h3>
        </div>

        {/* Highlight Callout */}
        <div className="p-3.5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9] text-xs font-bold text-[#072366]">
          {pillar.highlight}
        </div>

        {/* Description */}
        <p className="text-xs text-[#3B5284] leading-relaxed">
          {pillar.description}
        </p>

        {/* Feature List */}
        <div className="space-y-2 pt-2 border-t border-[#E2ECF9]">
          {pillar.features.map((feat, fIdx) => (
            <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-[#072366]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/how-it-works"
        className="w-full py-3.5 rounded-xl bg-[#F5F9FE] hover:bg-[#0A318B] text-[#0A318B] hover:text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 group-hover:bg-[#0A318B] group-hover:text-white cursor-pointer"
      >
        <span>{pillar.ctaText}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
