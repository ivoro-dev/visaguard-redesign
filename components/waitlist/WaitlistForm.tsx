"use client";

import React, { useState } from "react";
import { ArrowRight, UserCheck, ShieldCheck } from "lucide-react";
import WaitlistSuccessModal from "./WaitlistSuccessModal";

export default function WaitlistForm() {
  const [role, setRole] = useState<"traveler" | "agent">("traveler");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Canada");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 800);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role Toggle Selector */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#F5F9FE] border border-[#E2ECF9]">
          <button
            type="button"
            onClick={() => setRole("traveler")}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              role === "traveler"
                ? "bg-[#0A318B] text-white shadow-xs"
                : "text-[#566C9A] hover:text-[#0A318B]"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>I am a Traveler</span>
          </button>
          <button
            type="button"
            onClick={() => setRole("agent")}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              role === "agent"
                ? "bg-[#0A318B] text-white shadow-xs"
                : "text-[#566C9A] hover:text-[#0A318B]"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>I am a Travel Agent</span>
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#072366] mb-1">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Babatunde Adeleke"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2ECF9] text-sm text-[#072366] placeholder:text-slate-400 focus:outline-none focus:border-[#0A318B] focus:ring-1 focus:ring-[#0A318B] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#072366] mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="babatunde@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2ECF9] text-sm text-[#072366] placeholder:text-slate-400 focus:outline-none focus:border-[#0A318B] focus:ring-1 focus:ring-[#0A318B] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#072366] mb-1">WhatsApp / Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234 801 234 5678"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2ECF9] text-sm text-[#072366] placeholder:text-slate-400 focus:outline-none focus:border-[#0A318B] focus:ring-1 focus:ring-[#0A318B] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#072366] mb-1">Primary Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2ECF9] text-sm text-[#072366] focus:outline-none focus:border-[#0A318B] focus:ring-1 focus:ring-[#0A318B] transition-all cursor-pointer"
              >
                <option value="Canada">Canada (Study/Work/PR)</option>
                <option value="United Kingdom">United Kingdom (Student/Skilled)</option>
                <option value="United States">United States (B1/B2, F1)</option>
                <option value="Schengen">Schengen Europe</option>
                <option value="Other">Other Country</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Securing Your Spot...</span>
          ) : (
            <>
              <span>Lock Early Access & Free Protection</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      <WaitlistSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        email={email}
      />
    </>
  );
}
