"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InvestorDeckPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0818]/40 via-transparent to-[#050508]" />
        
        <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/#invest" className="inline-flex items-center gap-2 text-[#A020F0] hover:text-[#B44AFF] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-heading tracking-wider">Back to Invest</span>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            ZEF <span className="text-gradient">Investor Deck</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-white/[0.03] rounded-sm border border-white/[0.1] overflow-hidden glass-card"
            style={{ aspectRatio: "16 / 20", maxHeight: "85vh" }}
          >
            <iframe
              src="/Deck/Phase 2 Deck.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full"
              style={{ border: "none" }}
              title="ZEF Investor Deck"
              sandbox="allow-same-origin"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center text-[#6b6b80] text-sm mt-6"
          >
            View only. For inquiries or detailed discussions, please contact us at{" "}
            <a href="mailto:aniketsingh@zefglobal.com" className="text-[#A020F0] hover:underline">
              aniketsingh@zefglobal.com
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}