"use client";

import React, { useState } from "react";
import { ArrowRight, UserCheck, ShieldCheck, AlertCircle } from "lucide-react";
import WaitlistSuccessModal from "./WaitlistSuccessModal";

export default function WaitlistForm() {
  const [role, setRole] = useState<"traveler" | "agent">("traveler");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Canada");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "b7c7cde3-519f-43c5-b11d-d9c31cad590e";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `VisGuard Early Access Waitlist - ${role === "traveler" ? "Traveler" : "Travel Agent"}`,
          from_name: fullName,
          name: fullName,
          email: email,
          phone: phone || "Not specified",
          role: role === "traveler" ? "Traveler" : "Travel Agent",
          destination: destination,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowModal(true);
      } else {
        setErrorMessage(data.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms submit error:", err);
      setErrorMessage("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

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
            <label htmlFor="waitlist-fullname" className="block text-xs font-bold text-[#072366] mb-1">
              Full Name
            </label>
            <input
              id="waitlist-fullname"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Babatunde Adeleke"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2ECF9] text-sm text-[#072366] placeholder:text-slate-400 focus:outline-none focus:border-[#0A318B] focus:ring-1 focus:ring-[#0A318B] transition-all"
            />
          </div>

          <div>
            <label htmlFor="waitlist-email" className="block text-xs font-bold text-[#072366] mb-1">
              Email Address
            </label>
            <input
              id="waitlist-email"
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
              <label htmlFor="waitlist-phone" className="block text-xs font-bold text-[#072366] mb-1">
                WhatsApp / Phone
              </label>
              <input
                id="waitlist-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09015663101"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2ECF9] text-sm text-[#072366] placeholder:text-slate-400 focus:outline-none focus:border-[#0A318B] focus:ring-1 focus:ring-[#0A318B] transition-all"
              />
            </div>

            <div>
              <label htmlFor="waitlist-destination" className="block text-xs font-bold text-[#072366] mb-1">
                Primary Destination
              </label>
              <select
                id="waitlist-destination"
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
            <span>Sending Link...</span>
          ) : (
            <>
              <span>Send Google Play Download Link</span>
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
