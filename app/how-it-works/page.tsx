import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import VerticalTimeline from "@/components/how-it-works/VerticalTimeline";
import EscrowDeepDive from "@/components/how-it-works/EscrowDeepDive";
import ProtectionLayers from "@/components/how-it-works/ProtectionLayers";
import HowItWorksFaq from "@/components/how-it-works/HowItWorksFaq";
import HowItWorksCta from "@/components/how-it-works/HowItWorksCta";

export const metadata = {
  title: "How It Works - Visa Guard Africa | Milestone Escrow Protocol",
  description:
    "Discover how Visa Guard protects African travelers with bank-grade milestone escrow, 3D biometric NIN matching, and AI document verification.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#F5F9FE] text-[#072366] flex flex-col font-sans">
      <Navbar />
      <HowItWorksHero />
      <VerticalTimeline />
      <EscrowDeepDive />
      <ProtectionLayers />
      <HowItWorksFaq />
      <HowItWorksCta />
      <Footer />
    </main>
  );
}
