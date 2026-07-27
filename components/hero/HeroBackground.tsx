"use client";

import React from "react";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* SVG Dot Grid Pattern */}
      <div className="absolute inset-0 vga-bg-grid opacity-100" />

      {/* Calibrated Ambient Blue Glow Spheres */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#0A318B]/25 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#0A318B]/20 rounded-full blur-2xl" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#0A318B]/20 rounded-full blur-2xl" />

      {/* Hero Phones Illustration - Behind the text content */}
      <div className="hidden lg:block absolute bottom-0 left-20 -translate-x-1/2 z-0 w-full max-w-4xl h-full">
        <Image
          src="/assets/hero-phones.png"
          alt="Visa Guard Africa on mobile phones"
          width={1200}
          height={600}
          priority
          className="object-contain opacity-70"
          style={{ objectPosition: "center top" }}
        />
      </div>
    </div>
  );
}
