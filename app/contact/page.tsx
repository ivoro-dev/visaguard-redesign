"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBFDF3] text-[#072366] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <ContactHero />

      {/* Main Cards & Contact Form Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFDF3]">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top 3 Cards: Email Card, Contact Number Card, Socials Card */}
          <ContactCards />

          {/* Form Container */}
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
