"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface PageTransitionContextType {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(PageTransitionContext);

const scrollToHash = (hash: string, smooth = false) => {
  if (!hash || typeof window === "undefined") return;
  const elementId = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!elementId) return;

  const targetElement =
    document.getElementById(elementId) || document.querySelector(hash);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: smooth ? "smooth" : ("instant" as ScrollBehavior),
      block: "start",
    });
  }
};

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const currentPath = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);

  const triggerTransition = (href: string) => {
    if (isNavigating) return;

    let targetPath = href;
    try {
      const url = new URL(href, window.location.origin);
      targetPath = url.pathname;
    } catch {
      targetPath = href.split("#")[0].split("?")[0] || "/";
    }

    if (targetPath === currentPath) return;

    setTargetHref(href);
    setIsNavigating(true);
  };

  // Manage transition sequence: Cover -> Navigate -> Instant Scroll Behind Screen -> Uncover
  useEffect(() => {
    if (!isNavigating || !targetHref) return;

    // Extract hash if present (e.g. /#waitlist)
    let hash = "";
    try {
      const url = new URL(targetHref, window.location.origin);
      hash = url.hash;
    } catch {
      const parts = targetHref.split("#");
      hash = parts[1] ? `#${parts[1]}` : "";
    }

    // Phase 1: Cover viewport with overlay (400ms)
    const navTimer = setTimeout(() => {
      router.push(targetHref);
    }, 400);

    // Phase 2: Instant scroll to top (or target hash) WHILE screen is 100% covered (480ms)
    const scrollTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        if (hash) {
          scrollToHash(hash);
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    }, 480);

    // Phase 3: Hold logo on covered screen, then trigger exit wipe (750ms)
    const exitTimer = setTimeout(() => {
      setIsNavigating(false);
      setTargetHref(null);
    }, 750);

    return () => {
      clearTimeout(navTimer);
      clearTimeout(scrollTimer);
      clearTimeout(exitTimer);
    };
  }, [isNavigating, targetHref, router]);

  // Scroll to hash on route load if hash exists
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const timer = setTimeout(() => {
        scrollToHash(window.location.hash);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPath]);

  // Global click interceptor for internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isExternal =
        anchor.getAttribute("target") === "_blank" ||
        anchor.hasAttribute("download") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

      if (isExternal) return;

      let targetPath = href;
      let hash = "";
      try {
        const url = new URL(href, window.location.origin);
        targetPath = url.pathname;
        hash = url.hash;
      } catch {
        const parts = href.split("#");
        targetPath = parts[0] || "/";
        hash = parts[1] ? `#${parts[1]}` : "";
      }

      // Handle same-page hash navigation (e.g. clicking /#waitlist while on /)
      if (targetPath === currentPath) {
        if (hash) {
          e.preventDefault();
          e.stopPropagation();
          scrollToHash(hash);
          window.history.pushState(null, "", href);
        }
        return;
      }

      // Different page navigation (e.g. from /about to /#waitlist)
      e.preventDefault();
      e.stopPropagation();
      triggerTransition(href);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, [currentPath, isNavigating]);

  return (
    <PageTransitionContext.Provider
      value={{ navigateTo: triggerTransition, isTransitioning: isNavigating }}
    >
      {children}

      {/* Fullscreen Blue Transition Overlay with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isNavigating && (
          <motion.div
            key="page-transition-overlay"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[999999] w-full h-full bg-[#0A192F] flex flex-col items-center justify-center pointer-events-auto overflow-hidden border-t-2 border-b-2 border-emerald-400/40 shadow-2xl"
          >
            {/* Background Radial Pattern & Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 vga-bg-grid-dark opacity-100" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0A318B]/40 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/25 rounded-full blur-2xl" />
            </div>

            {/* Centered Content: Clean Logo & Verified Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative z-10 flex flex-col items-center space-y-5 px-6 text-center"
            >
              {/* Premium Logo Container */}
              <div className="p-5 rounded-3xl bg-white/95 border border-[#E2ECF9] shadow-2xl shadow-black/40 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Visa Guard Africa Logo"
                  width={506}
                  height={493}
                  className="h-12 sm:h-16 w-auto object-contain"
                  priority
                />
              </div>

              {/* Verified Escrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#072366] border border-[#0A318B] text-white text-xs font-semibold shadow-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Milestone Escrow Travel Infrastructure</span>
              </div>

              {/* Glowing Pulse Accent Bar */}
              <div className="w-28 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-pulse mt-2" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
