"use client";

import Navbar from "@/components/Navbar";
import IPsSection from "@/components/IPsSection";
import Footer from "@/components/Footer";

export default function IPsPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <IPsSection />
      </div>
      <Footer />
    </main>
  );
}
