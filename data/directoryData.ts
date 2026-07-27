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
  url: string;
  note: string;
}

export interface ScamArticleItem {
  title: string;
  tag: string;
  readTime: string;
  url?: string;
}

export const EMBASSIES_DATA: EmbassyItem[] = [
  {
    country: "United Kingdom",
    flagUrl: "https://flagcdn.com/w80/gb.png",
    title: "UK Visas & Immigration (GOV.UK)",
    url: "https://www.gov.uk/browse/visas-immigration",
    note: "Official GOV.UK portal for Student, Skilled Worker, and Visitor visas. Includes TLScontact & VFS appointment portals."
  },
  {
    country: "Canada",
    flagUrl: "https://flagcdn.com/w80/ca.png",
    title: "IRCC Official Portal (Canada.ca)",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    note: "Official IRCC portal for Study Permits, Express Entry PR, Visitor Visas, and VFS Global biometrics."
  },
  {
    country: "United States",
    flagUrl: "https://flagcdn.com/w80/us.png",
    title: "U.S. Embassy & Consulates in Nigeria",
    url: "https://ng.usembassy.gov",
    note: "Official DS-160 portal and CGI Federal appointment scheduling for Lagos consulate & Abuja embassy."
  },
  {
    country: "Schengen Area (EU)",
    flagUrl: "https://flagcdn.com/w80/eu.png",
    title: "EU Official Visa Policy & Portals",
    url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en",
    note: "Official short-stay Schengen visa requirements, VFS/BLS appointment verification, and proof of funds rules."
  },
  {
    country: "Germany",
    flagUrl: "https://flagcdn.com/w80/de.png",
    title: "German Embassy Abuja & Consulate Lagos",
    url: "https://nigeria.diplo.de",
    note: "Official appointment booking for Opportunity Card (Chancenkarte), Student, and Employment visas."
  },
  {
    country: "Australia",
    flagUrl: "https://flagcdn.com/w80/au.png",
    title: "Department of Home Affairs (ImmiAccount)",
    url: "https://immi.homeaffairs.gov.au",
    note: "Official ImmiAccount portal for Subclass 500 Student Visas, Work, and Permanent Residency applications."
  },
  {
    country: "France",
    flagUrl: "https://flagcdn.com/w80/fr.png",
    title: "France-Visas Official Portal",
    url: "https://france-visas.gouv.fr",
    note: "Official application creation, document checklist, and Capago appointment scheduling."
  },
  {
    country: "Ireland",
    flagUrl: "https://flagcdn.com/w80/ie.png",
    title: "Irish Immigration Service (AVATS)",
    url: "https://www.irishimmigration.ie",
    note: "Official AVATS online visa application system for study and employment visas."
  },
];

export const AIRLINES_DATA: AirlineItem[] = [
  {
    name: "Ethiopian Airlines",
    code: "ET",
    logoUrl: "https://images.kiwi.com/airlines/64/ET.png",
    type: "Flag Carrier",
    url: "https://www.ethiopianairlines.com",
    note: "Official booking portal, flight status verification & student extra baggage allowance."
  },
  {
    name: "Qatar Airways",
    code: "QR",
    logoUrl: "https://images.kiwi.com/airlines/64/QR.png",
    type: "Global Carrier",
    url: "https://www.qatarairways.com",
    note: "Official booking portal, Student Club discounts & Doha transit visa verification."
  },
  {
    name: "Emirates",
    code: "EK",
    logoUrl: "https://images.kiwi.com/airlines/64/EK.png",
    type: "International Carrier",
    url: "https://www.emirates.com",
    note: "Official Dubai booking portal, transit visa application & flight ticket verification."
  },
  {
    name: "Air Peace",
    code: "P4",
    logoUrl: "https://images.kiwi.com/airlines/64/P4.png",
    type: "Nigerian Carrier",
    url: "https://flyairpeace.com",
    note: "Official booking portal for direct London Gatwick flights & regional West Africa routes."
  },
  {
    name: "British Airways",
    code: "BA",
    logoUrl: "https://images.kiwi.com/airlines/64/BA.png",
    type: "International Carrier",
    url: "https://www.britishairways.com",
    note: "Official booking portal for direct Lagos/Abuja to London Heathrow flights & manage booking."
  },
  {
    name: "Turkish Airlines",
    code: "TK",
    logoUrl: "https://images.kiwi.com/airlines/64/TK.png",
    type: "Global Carrier",
    url: "https://www.turkishairlines.com",
    note: "Official booking portal, Istanbul transit e-Visa rules & global destination routing."
  },
  {
    name: "Royal Air Maroc",
    code: "AT",
    logoUrl: "https://images.kiwi.com/airlines/64/AT.png",
    type: "African Carrier",
    url: "https://www.royalairmaroc.com",
    note: "Official booking portal for European & North American connecting flights via Casablanca."
  },
  {
    name: "Lufthansa",
    code: "LH",
    logoUrl: "https://images.kiwi.com/airlines/64/LH.png",
    type: "Global Carrier",
    url: "https://www.lufthansa.com",
    note: "Official booking portal for Frankfurt/Munich connections & transit visa guidelines."
  },
  {
    name: "Delta Air Lines",
    code: "DL",
    logoUrl: "https://images.kiwi.com/airlines/64/DL.png",
    type: "US Carrier",
    url: "https://www.delta.com",
    note: "Official booking portal for direct Lagos to Atlanta flights & US travel documentation."
  },
  {
    name: "Kenya Airways",
    code: "KQ",
    logoUrl: "https://images.kiwi.com/airlines/64/KQ.png",
    type: "African Carrier",
    url: "https://www.kenya-airways.com",
    note: "Official booking portal for East Africa & direct New York JFK connecting flights."
  },
  {
    name: "Virgin Atlantic",
    code: "VS",
    logoUrl: "https://images.kiwi.com/airlines/64/VS.png",
    type: "International Carrier",
    url: "https://www.virginatlantic.com",
    note: "Official booking portal for direct Lagos to London Heathrow flights & baggage policy."
  },
  {
    name: "EgyptAir",
    code: "MS",
    logoUrl: "https://images.kiwi.com/airlines/64/MS.png",
    type: "African Carrier",
    url: "https://www.egyptair.com",
    note: "Official booking portal for Cairo transit & affordable student travel options."
  },
];

export const SCAM_ARTICLES_DATA: ScamArticleItem[] = [
  { title: "How to Spot Fake Visa Agents & Fraudulent Offices in Nigeria", tag: "Anti-Scam Guide", readTime: "4 min read" },
  { title: "Canada & UK Student Visa Scam Red Flags to Avoid in 2026", tag: "Student Safety", readTime: "5 min read" },
  { title: "Why You Should Never Pay 100% Upfront Cash to Any Travel Agent", tag: "Financial Safety", readTime: "3 min read" },
  { title: "Verifying Embassy Appointment Slips with AI Document Inspection", tag: "Tech Guide", readTime: "6 min read" },
];
