"use client";

import Navbar from "@/components/Navbar";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <CareersSection />
      </div>
      <Footer />
    </main>
  );
}
