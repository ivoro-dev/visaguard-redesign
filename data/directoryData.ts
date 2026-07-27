export interface EmbassyItem {
  country: string;
  flagUrl: string;
  title: string;
  url: string;
  note: string;
}

export interface AirlineItem {
  name: string;
  code: string;
  logoUrl: string;
  type: string;
  note: string;
}

export interface ScamArticleItem {
  title: string;
  tag: string;
  readTime: string;
}

export const EMBASSIES_DATA: EmbassyItem[] = [
  {
    country: "United Kingdom",
    flagUrl: "https://flagcdn.com/w80/gb.png",
    title: "UK Visas & Immigration (GOV.UK)",
    url: "https://www.gov.uk/browse/visas-immigration",
    note: "Direct GOV.UK links for Student (Student visa), Skilled Worker, and Standard Visitor visas. Includes official TLScontact appointment instructions."
  },
  {
    country: "Canada",
    flagUrl: "https://flagcdn.com/w80/ca.png",
    title: "IRCC Official Portal (Canada.ca)",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    note: "Official IRCC portal for Study Permits, Express Entry PR, and Visitor Visas. Includes official VFS Global biometric appointment guides."
  },
  {
    country: "United States",
    flagUrl: "https://flagcdn.com/w80/us.png",
    title: "U.S. Embassy & Consulates in Nigeria",
    url: "https://ng.usembassy.gov",
    note: "Official DS-160 visa portal and CGI Federal interview appointment scheduling for Lagos and Abuja consulates."
  },
  {
    country: "Schengen Area (EU)",
    flagUrl: "https://flagcdn.com/w80/eu.png",
    title: "EU Official Visa Information",
    url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en",
    note: "Official short-stay Schengen visa requirements, VFS/BLS appointment verification, and proof of funds guidelines."
  },
];

export const AIRLINES_DATA: AirlineItem[] = [
  {
    name: "Ethiopian Airlines",
    code: "ET",
    logoUrl: "https://images.kiwi.com/airlines/64/ET.png",
    type: "Flag Carrier",
    note: "Direct booking portal & student baggage allowance guidelines."
  },
  {
    name: "Qatar Airways",
    code: "QR",
    logoUrl: "https://images.kiwi.com/airlines/64/QR.png",
    type: "Global Carrier",
    note: "Official booking portal & student discount transit rules."
  },
  {
    name: "Emirates",
    code: "EK",
    logoUrl: "https://images.kiwi.com/airlines/64/EK.png",
    type: "International Carrier",
    note: "Official Dubai transit visa requirements & flight verification."
  },
  {
    name: "Air Peace",
    code: "P4",
    logoUrl: "https://images.kiwi.com/airlines/64/P4.png",
    type: "Nigerian Carrier",
    note: "Official regional & direct London Gatwick flight booking links."
  },
];

export const SCAM_ARTICLES_DATA: ScamArticleItem[] = [
  { title: "How to Spot Fake Visa Agents & Fraudulent Offices in Nigeria", tag: "Anti-Scam Guide", readTime: "4 min read" },
  { title: "Canada & UK Student Visa Scam Red Flags to Avoid in 2026", tag: "Student Safety", readTime: "5 min read" },
  { title: "Why You Should Never Pay 100% Upfront Cash to Any Travel Agent", tag: "Financial Safety", readTime: "3 min read" },
  { title: "Verifying Embassy Appointment Slips with AI Document Inspection", tag: "Tech Guide", readTime: "6 min read" },
];
