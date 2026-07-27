"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SecuredProtectedSection() {
  return (
    <section className="pt-20 lg:pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FE] via-[#FBFDF3] to-[#F5F9FE] relative overflow-hidden border-t border-[#E2ECF9]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left Column: Blurred Slide-In Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left pb-12 lg:pb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2ECF9] text-[#0A318B] text-xs font-bold shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-[#0A318B]" />
              <span>Escrow Payment Protection</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A318B] tracking-tight leading-[1.12]">
              Your Payments Stay <br />
              <span className="gradient-text-blue font-serif-heading italic font-normal">
                Secured & Protected
              </span>
            </h2>

            <p className="text-[#3B5284] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
              Too many African travelers lose millions when fake visa agents take 100% upfront payment and vanish. Visa Guard holds your funds in escrow, releasing payment stage-by-stage only after milestone proof is verified.
            </p>

            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-base shadow-xl shadow-blue-900/20 transition-all cursor-pointer"
                >
                  <span>See Escrow Milestone Protections</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Spring Rise Up Phone Mockup Animation */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center items-end relative h-[420px] sm:h-[480px] lg:h-[540px] w-full"
          >
            {/* Pulsing Ripple Background Rings */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none"
            />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-blue-400/20 rounded-full pointer-events-none" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[480px] h-[480px] border border-blue-300/10 rounded-full pointer-events-none" />

            {/* Mockup Phone Image */}
            <div className="relative z-10 w-full max-w-[420px] h-full">
              <Image
                src="/assets/mockup.png"
                alt="Visa Guard Africa Mobile App - Secured & Protected Escrow"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
