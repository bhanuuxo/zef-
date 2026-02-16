"use client";

import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
