"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A318B] text-blue-100 border-t border-blue-900/40 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center group">
              <div className="px-3.5 py-2 rounded-xl bg-white/95 border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Visa Guard Africa Logo"
                  width={160}
                  height={160}
                  className="h-8 sm:h-9 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-xs text-blue-100/90 leading-relaxed max-w-sm">
              Visa Guard Africa Technologies LTD (RC: 7924102) is Africa&apos;s travel trust infrastructure. We protect Nigerian and African travelers from visa agent scams using 9-step agent vetting, bank-grade milestone escrow vaults, and AI document verification.
            </p>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded border border-white/20 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-200" />
                NDPR Compliant Privacy
              </span>
              <span className="text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded border border-white/20 flex items-center gap-1">
                <Lock className="w-3 h-3 text-blue-200" />
                Bank Escrow Protected
              </span>
              <span className="text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded border border-white/20">
                CAC Registered (RC: 7924102)
              </span>
            </div>

            {/* Google Play Store Badge Button */}
            <div className="pt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0A318B] hover:bg-blue-50 font-bold text-xs shadow-md transition-all cursor-pointer hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current text-[#0A318B]" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
                </svg>
                <span>Download on Google Play</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Escrow & Safety Navigation</h4>
            <ul className="space-y-2.5 text-xs text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home (Escrow Platform)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Chukwudi Eze & Mission
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How Milestone Escrow Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contacts & Compliance</h4>
            <ul className="space-y-3 text-xs text-blue-100">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-200 shrink-0" />
                <a href="mailto:admin@visaguardafrica.com" className="hover:text-white transition-colors">
                  admin@visaguardafrica.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-200 shrink-0" />
                <a href="tel:09015663101" className="hover:text-white transition-colors">
                  09015663101
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
                <span>Visa Guard Africa Technologies LTD • Lagos & Ebonyi State (Ezza North LGA), Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-blue-200">
          <p>© {new Date().getFullYear()} Visa Guard Africa Technologies LTD. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-white font-semibold">
            <span>Milestone Protected Payments</span>
            <ShieldCheck className="w-4 h-4 text-blue-200" />
          </div>

          <p className="flex items-center gap-1">
            <span>Redesigned by</span>
            <span className="text-white font-semibold">Iworro Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
