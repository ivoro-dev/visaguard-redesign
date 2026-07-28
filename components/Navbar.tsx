"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0A318B] border-b border-blue-900/30 py-2 px-4 text-center text-xs font-medium text-blue-100 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span>
          <strong className="text-white">Escrow-Protected Travel Infrastructure</strong> — Protecting African travelers from visa scams.
        </span>
        <span className="hidden sm:inline-block bg-white/15 text-white text-[10px] px-2.5 py-0.5 rounded-full border border-white/20">
          1,000+ Early Registrations
        </span>
      </div>

      {/* Main Navbar: Logo on Left, Nav Links Center, Action CTA + Hamburger on Right */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 transform-gpu ${
          isScrolled
            ? "bg-[#F5F9FE]/95 backdrop-blur-md border-b border-[#E2ECF9] shadow-sm py-2"
            : "bg-[#FBFDF3]/90 backdrop-blur-sm py-2 border-b border-[#E2ECF9]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Visa Guard Africa Logo"
              width={506}
              height={493}
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-md font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all relative py-1 ${
                    isActive
                      ? "text-[#072366] font-extrabold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#0A318B] after:rounded-full"
                      : "text-[#0A318B] hover:text-[#072366] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#0A318B] hover:after:w-full after:transition-all"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA + Hamburger Icon on Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-lg bg-[#0A318B] hover:bg-[#072366] shadow-sm cursor-pointer transition-all active:scale-95"
            >
              <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
              </svg>
              <span>Download on Google Play</span>
            </a>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-[#F5F9FE] hover:bg-slate-200/60 text-[#0A318B] transition-all border border-[#E2ECF9] cursor-pointer active:scale-95 focus:outline-none"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Over Navigation Sidebar (Right Side) */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-[#072366]/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Right Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full sm:w-[380px] h-full bg-[#0A318B] text-white shadow-2xl flex flex-col justify-between border-l border-blue-900/40"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-blue-900/40 flex items-center justify-between">
                <Link href="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-white/95 border border-white/20 shadow-md flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Visa Guard Africa Logo"
                      width={140}
                      height={140}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </Link>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-xl bg-blue-900/60 text-blue-100 hover:text-white hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items (Scrollbar Hidden) */}
              <div className="px-6 py-8 overflow-y-auto no-scrollbar flex-1 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-xl font-semibold transition-all group cursor-pointer ${
                        isActive
                          ? "bg-white/15 text-white border border-white/25 shadow-xs font-bold underline decoration-white decoration-2 underline-offset-4"
                          : "text-blue-100 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/15"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-all ${
                          isActive
                            ? "text-white opacity-100 translate-x-1"
                            : "text-blue-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-blue-900/40 space-y-4 bg-[#072366]">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs text-blue-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Now Live on Google Play Store</span>
                </div>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSidebarOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-white text-[#0A318B] hover:bg-blue-50 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-[#0A318B]" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.587V3.401c0-.604.22-1.16.609-1.587zM15.206 13.414l2.756-2.756-11.455-6.61 8.699 9.366zm0-2.828L6.507 1.22 17.962 7.83l-2.756 2.756zm1.414 1.414l3.87-2.235a1.8 1.8 0 0 0 0-3.13l-1.114-.643-2.756 2.756 2.756 2.756-.756.496z"/>
                  </svg>
                  <span>Download on Google Play</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
