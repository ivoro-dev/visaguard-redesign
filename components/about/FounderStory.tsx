"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B3593] rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Founder Photo with White Border & Name Badge */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/4.8] sm:aspect-[4/5] rounded-[24px] overflow-hidden border-[3px] border-white shadow-2xl">
                <Image
                  src="/assets/about-founder.png"
                  alt="Mr. Chukwudi Eze · Founder & CEO of Visa Guard Africa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />

                {/* Bottom Left Badge */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center bg-white rounded-lg px-3 py-1.5 shadow-lg border border-slate-100">
                  <span className="w-2.5 h-4 bg-[#FF5A1F] rounded-[2px] mr-2 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#072366]">
                    Mr. Chukwudi Eze · (Founder)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Story Content */}
            <div className="lg:col-span-7 text-white space-y-4 sm:space-y-6">
              <span className="text-[#93B4ED] text-xs sm:text-sm font-bold tracking-widest uppercase block">
                FOUNDER STORY
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Turning Pain Into Purpose
              </h2>

              <div className="text-[#E2ECF9] text-sm sm:text-base font-normal leading-relaxed space-y-4">
                <p>
                  <strong className="font-bold text-white">Visa Guard Africa Technologies</strong> was founded by <strong className="font-bold text-white">Chukwudi Eze</strong> after personally experiencing the devastating impact of visa and relocation scams. Like many Africans pursuing opportunities abroad, he trusted the wrong people, lost money, faced betrayal, and endured moments of uncertainty that could have derailed his dreams.
                </p>
                <p>
                  Instead of allowing those experiences to define him, he chose to build a solution to protect others from the same pain. Through embassies, immigration authorities and law enforcement organizations, he discovered a major gap in the African travel industry - the absence of a trusted, technology-driven system focused on transparency, accountability, and traveler protection. That realization became the foundation of Visa Guard Africa Technologies LTD.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
