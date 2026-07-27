"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ArrowRight, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";
import Link from "next/link";

export default function FounderQuote() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FE] relative overflow-hidden border-t border-[#E2ECF9]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2ECF9] shadow-xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait Card with Gentle Rotation & Scale Entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col items-center text-center space-y-4"
            >
              <div className="relative group cursor-pointer">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#0A318B] p-1.5 shadow-xl">
                  <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Chukwudi Eze - Founder & CEO of Visa Guard Africa"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#0A318B] text-white border border-blue-900 px-3.5 py-1 rounded-full text-[11px] font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
                  <span>Scammed Twice • Built The Safeguard</span>
                </motion.div>
              </div>

              <div className="pt-2 space-y-1">
                <h4 className="text-lg font-bold text-[#0A318B]">Chukwudi Eze</h4>
                <p className="text-xs text-[#3B5284] font-medium">
                  Founder & CEO • Visa Guard Africa Technologies LTD
                </p>
                <p className="text-[11px] text-[#566C9A] flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-[#0A318B]" />
                  <span>Ebonyi State (Ezza North LGA), Nigeria</span>
                </p>
              </div>
            </motion.div>

            {/* Right Column: Quote Text Slide-In */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F9FE] border border-[#E2ECF9] text-[#0A318B] text-xs font-bold">
                <HeartHandshake className="w-4 h-4 text-[#0A318B]" />
                <span>The Story Behind The Safeguard</span>
              </div>

              <div className="relative">
                <Quote className="w-12 h-12 text-[#0A318B]/15 absolute -top-5 -left-4 rotate-180" />
                <blockquote className="text-xl font-medium sm:text-2xl font-serif-heading italic text-[#0A318B] leading-relaxed relative z-10 pl-4 border-l-4 border-[#0A318B]">
                  &ldquo;I lost money to fake visa agents twice in Nigeria. Instead of giving up, I built Visa Guard Africa Technologies LTD so no African family ever suffers that financial heartbreak again.&rdquo;
                </blockquote>
              </div>

              <div className="space-y-3 text-[#3B5284] text-xs sm:text-sm leading-relaxed">
                <p>
                  Visa agent scams in Nigeria and across Africa ruin lives. Unregulated agents demand 100% upfront payment, hand over forged appointment slips or fake visas, and block their victims on WhatsApp as soon as the money lands.
                </p>
                <p>
                  Born in Ebonyi State, founder Chukwudi Eze lived through this nightmare twice. He built Visa Guard with a 9-step agent audit and milestone escrow so traveler money stays locked until real, verified milestone proof is provided.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Read Full Founder Backstory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/chukwudi-eze-5580723b0/"
                  target="_blank"
                  className="px-5 py-3.5 rounded-xl bg-[#F5F9FE] hover:bg-slate-200/60 text-[#0A318B] font-semibold text-xs border border-[#E2ECF9] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Chukwudi Eze&apos;s Profile
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
