"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LEDTicker from "@/components/LEDTicker";
import NXTSection from "@/components/NXTSection";
import EcosystemSection from "@/components/EcosystemSection";
import TimelineSection from "@/components/TimelineSection";
import IPsSection from "@/components/IPsSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import InvestorSection from "@/components/InvestorSection";
import CareersSection from "@/components/CareersSection";
import GallerySection from "@/components/GallerySection";
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

/* ===== Ripple Click ===== */
function useRippleEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const button = (e.target as HTMLElement).closest("button, .btn-primary, .btn-outline");
      if (button) {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height);
        Object.assign(ripple.style, {
          width: `${size}px`, height: `${size}px`,
          left: `${e.clientX - rect.left - size / 2}px`,
          top: `${e.clientY - rect.top - size / 2}px`,
          position: "absolute", borderRadius: "50%",
          background: "rgba(160, 32, 240, 0.25)",
          transform: "scale(0)", animation: "ripple 0.6s ease-out",
          pointerEvents: "none",
        });
        const el = button as HTMLElement;
        el.style.position = "relative";
        el.style.overflow = "hidden";
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

/* ===== Scroll Reveal ===== */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

/* ===== Cursor Glow ===== */
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-[300px] h-[300px] pointer-events-none z-[1] opacity-[0.05] hidden md:block rounded-full"
      style={{ background: "radial-gradient(circle, rgba(160, 32, 240, 0.9) 0%, transparent 70%)", willChange: "transform" }}
    />
  );
}

/* ===== Scanline Overlay ===== */
function ScanlineOverlay() {
  return (
    <>
      <div className="scanlines pointer-events-none fixed inset-0 z-[2]" />
      <div className="noise pointer-events-none fixed inset-0 z-[2]" />
    </>
  );
}

/* ===== Neon Section Divider ===== */
function NeonDivider() {
  return <div className="relative h-px w-full"><div className="absolute inset-0 neon-line-h" /></div>;
}

/* ===== PAGE ===== */
export default function HomePage() {
  useSmoothScroll();
  useRippleEffect();
  useScrollReveal();

  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <CursorGlow />
      <ScanlineOverlay />
      <Navbar />
      <HeroSection />
      <LEDTicker />
      <NeonDivider />
      <NXTSection />
      <NeonDivider />
      <EcosystemSection />
      <NeonDivider />
      <TimelineSection />
      <NeonDivider />
      <IPsSection />
      <NeonDivider />
      <AboutSection />
      <NeonDivider />
      <PartnersSection />
      <NeonDivider />
      <InvestorSection />
      <NeonDivider />
      <CareersSection />
      <NeonDivider />
      <GallerySection />
      <NeonDivider />
      <Footer />
    </main>
  );
}
