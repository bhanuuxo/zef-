"use client";

import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}
