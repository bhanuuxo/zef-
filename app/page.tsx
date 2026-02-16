"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FloatingLines from "@/components/FloatingLines";
import HeroSection from "@/components/HeroSection";
import LEDTicker from "@/components/LEDTicker";
import NXTSection from "@/components/NXTSection";
import EcosystemSection from "@/components/EcosystemSection";
import TimelineSection from "@/components/TimelineSection";
import PartnersSection from "@/components/PartnersSection";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

/* ===== Smooth Scroll ===== */
function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href?.startsWith("#")) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

/* ===== PAGE ===== */
export default function HomePage() {
  useSmoothScroll();

  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      {/* ── FloatingLines shader background — fixed, covers entire page ── */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-90 bg-[#050508]" aria-hidden="true">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[6]}
          lineDistance={[5]}
          bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -1 }}
          animationSpeed={1}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax={true}
          parallaxStrength={0.2}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-[1]">
        <Navbar />
        <HeroSection />
        <LEDTicker />
        <NXTSection />
        <EcosystemSection />
        <TimelineSection />
        <PartnersSection />
        <InvestorSection />
        <Footer />
      </div>
    </main>
  );
}
