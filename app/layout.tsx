import type { Metadata } from "next";
import { Poppins, Manrope, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Visa Guard Africa | Verified Agents & Escrow-Protected Travel Infrastructure",
  description:
    "Protecting African travelers from visa scams through verified agent badging, milestone-based escrow payments, AI document verification, and NDPR-compliant security.",
  keywords: [
    "Visa Guard Africa",
    "Visa scam Nigeria",
    "Fake visa agents",
    "Verify travel agent",
    "Canada visa scam",
    "UK visa scam",
    "Travel fraud Africa",
    "Secure visa escrow",
    "AI scam detection",
  ],
  authors: [{ name: "Visa Guard Africa Technologies LTD" }],
  openGraph: {
    title: "Visa Guard Africa — Verify Before You Pay",
    description:
      "Africa's first travel trust infrastructure holding agent payments in escrow until verified milestones are completed.",
    url: "https://www.visaguardafrica.com",
    siteName: "Visa Guard Africa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Guard Africa — Escrow-Protected Travel Infrastructure",
    description:
      "Eliminating visa agent scams across Africa through verified badges and secure escrow milestones.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FBFDF3] text-[#072366] selection:bg-[#0A318B]/20 selection:text-[#0A318B]">
        <SmoothScrollProvider>
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
