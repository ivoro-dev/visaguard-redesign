"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HeroSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[#E2ECF9] max-w-md mx-auto"
    >
      {/* Avatar Stack using Real downloaded assets */}
      <div className="flex -space-x-3">
        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-md">
          <Image
            src="/assets/agent1.jpg"
            alt="Verified Visa Guard Agent 1 profile"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-md">
          <Image
            src="/assets/agent2.jpg"
            alt="Verified Visa Guard Agent 2 profile"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-md">
          <Image
            src="/assets/agent3.jpg"
            alt="Verified Visa Guard Agent 3 profile"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center sm:text-left space-y-0.5">
        <div className="flex items-center justify-center sm:justify-start gap-1 text-[#0A318B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
          ))}
          <span className="text-xs font-bold text-[#0A318B] ml-1">
            4.9/5 Verified Rating
          </span>
        </div>
        <p className="text-xs text-[#566C9A] font-medium">
          Now Live on Google Play Store • 10,000+ Protected Travelers
        </p>
      </div>
    </motion.div>
  );
}
