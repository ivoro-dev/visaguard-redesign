"use client";

import React, { useState, useEffect } from "react";

export default function WaitlistCounter() {
  const [timeLeft, setTimeLeft] = useState({
    days: "04",
    hours: "18",
    minutes: "32",
    seconds: "45",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
      const diff = target.getTime() - now.getTime();

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-2">
      <p className="text-[11px] font-bold text-[#566C9A] uppercase tracking-wider mb-2">
        Beta Platform Launch Countdown
      </p>
      <div className="grid grid-cols-4 gap-2 text-center max-w-xs mx-auto sm:mx-0">
        <div className="p-2.5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9]">
          <span className="block text-lg font-bold text-[#0A318B]">{timeLeft.days}</span>
          <span className="text-[9px] text-[#566C9A] uppercase font-semibold">Days</span>
        </div>
        <div className="p-2.5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9]">
          <span className="block text-lg font-bold text-[#0A318B]">{timeLeft.hours}</span>
          <span className="text-[9px] text-[#566C9A] uppercase font-semibold">Hours</span>
        </div>
        <div className="p-2.5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9]">
          <span className="block text-lg font-bold text-[#0A318B]">{timeLeft.minutes}</span>
          <span className="text-[9px] text-[#566C9A] uppercase font-semibold">Mins</span>
        </div>
        <div className="p-2.5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9]">
          <span className="block text-lg font-bold text-[#0A318B]">{timeLeft.seconds}</span>
          <span className="text-[9px] text-[#566C9A] uppercase font-semibold">Secs</span>
        </div>
      </div>
    </div>
  );
}
