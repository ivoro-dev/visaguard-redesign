export interface TrustPillarItem {
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  tagBg: string;
  tagText: string;
  highlight: string;
  description: string;
  features: string[];
  ctaText: string;
}

export const TRUST_PILLARS_DATA: TrustPillarItem[] = [
  {
    number: "01",
    title: "9-Step Agent Vetting System",
    subtitle: "Anti-Scam Verified Badging",
    tag: "CAC & Biometric Checked",
    tagBg: "bg-[#0A318B]",
    tagText: "text-white",
    highlight: "Only 1 in 12 applicant agents qualify for verified status.",
    description:
      "We physically and digitally verify CAC corporate registration, physical office locations across Lagos/Abuja, director NIN/BVN identities, and past client visa outcomes before any agent is listed.",
    features: [
      "Physical office walk-through verification",
      "Director NIN/BVN identity cross-check",
      "Historical visa outcome audit ratio",
      "Live scam complaint database matching",
    ],
    ctaText: "Explore Agent Vetting Standards",
  },
  {
    number: "02",
    title: "Bank-Grade Milestone Escrow Vaults",
    subtitle: "Zero Upfront Financial Fraud",
    tag: "Bank Escrow Protected",
    tagBg: "bg-emerald-700",
    tagText: "text-white",
    highlight: "Your money remains safely locked until milestone proof is uploaded.",
    description:
      "Your application deposit is held in NDPR-compliant bank escrow vaults. Payments are released in 3 strict milestone phases: 25% on document prep, 35% on biometric slip verification, and 40% on visa outcome.",
    features: [
      "NDPR-compliant bank vault escrow",
      "Milestone-based release triggers",
      "Full refund policy on agent default",
      "Transparent audit timeline tracking",
    ],
    ctaText: "How Escrow Vault Works",
  },
  {
    number: "03",
    title: "AI Document Inspection Engine",
    subtitle: "Instant Fraud Detection",
    tag: "AI Forensic Tech",
    tagBg: "bg-[#072366]",
    tagText: "text-white",
    highlight: "Scans appointment slips, reference numbers, and seals in seconds.",
    description:
      "Our proprietary AI document inspection tool scans TLScontact, VFS Global, and embassy confirmation slips to detect forged PDF metadata, invalid barcodes, and altered appointment dates.",
    features: [
      "TLS / VFS appointment barcode validation",
      "PDF metadata tamper analysis",
      "Embassy reference pattern checking",
      "Instant forgery warning alerts",
    ],
    ctaText: "See AI Document Engine",
  },
];
