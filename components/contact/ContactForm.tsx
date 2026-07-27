"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  User,
  Building2,
  AtSign,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2ECF9] shadow-xl shadow-[#0A318B]/5 relative overflow-hidden">
      {/* Accent Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A318B] via-emerald-500 to-[#0A318B]" />

      <div className="max-w-3xl mx-auto space-y-7 sm:space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0A318B]">
            Inquiry Form
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A318B] tracking-tight">
            Send A Direct Message
          </h2>
          <p className="text-xs sm:text-sm text-[#3B5284] max-w-lg mx-auto font-medium">
            Fill out the details below and we will respond to your inquiry promptly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#F5F9FE] border border-emerald-300 text-center space-y-4 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A318B]">Message Received!</h3>
              <p className="text-xs sm:text-sm text-[#3B5284] max-w-md mx-auto leading-relaxed font-medium">
                Thank you for reaching out, <span className="font-semibold text-[#0A318B]">{formData.fullName || "Traveler"}</span>. We have logged your inquiry regarding <span className="font-semibold text-[#0A318B]">{formData.subject}</span> and will respond shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: "",
                      company: "",
                      email: "",
                      subject: "General Inquiry",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0A318B] text-white text-xs font-semibold hover:bg-[#072366] transition-colors cursor-pointer shadow-sm active:scale-98"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="contact-fullname" className="text-xs font-semibold text-[#0A318B] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0A318B]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="contact-fullname"
                    type="text"
                    required
                    placeholder="e.g. Chukwudi Eze"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] text-xs font-semibold text-[#072366] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A318B]/30 focus:border-[#0A318B]/40 transition-all shadow-2xs"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-xs font-semibold text-[#0A318B] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#0A318B]" />
                    <span>Company / Agency (Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="e.g. Eze Travel Solutions LTD"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] text-xs font-semibold text-[#072366] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A318B]/30 focus:border-[#0A318B]/40 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-[#0A318B] flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5 text-[#0A318B]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="chukwudi@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] text-xs font-semibold text-[#072366] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A318B]/30 focus:border-[#0A318B]/40 transition-all shadow-2xs"
                  />
                </div>

                {/* Subject of Inquiry */}
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-[#0A318B] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#0A318B]" />
                    <span>Subject of Inquiry *</span>
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] text-xs font-semibold text-[#072366] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A318B]/30 focus:border-[#0A318B]/40 transition-all cursor-pointer shadow-2xs"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Agent Verification & Vetting">Agent Verification & Vetting</option>
                    <option value="Escrow Deposit & Vault Security">Escrow Deposit & Vault Security</option>
                    <option value="Press & Media">Press & Media</option>
                    <option value="Partnership / Investor Portal">Partnership / Investor Portal</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-semibold text-[#0A318B] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#0A318B]" />
                  <span>Message *</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Write your detailed inquiry here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F9FE] border border-[#E2ECF9] text-xs font-semibold text-[#072366] placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A318B]/30 focus:border-[#0A318B]/40 transition-all resize-y shadow-2xs"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#0A318B] hover:bg-[#072366] text-white font-bold text-sm shadow-md shadow-[#0A318B]/15 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
