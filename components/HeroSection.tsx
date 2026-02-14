"use client";

import { motion } from "framer-motion";

/* ===== MAIN HERO SECTION ===== */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-32 pb-40 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[10px] font-heading font-semibold tracking-[0.2em] uppercase text-[#a78bfa] border border-[#7c3aed]/25 bg-[#7c3aed]/[0.05]">
            Global Esports IP Curator
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading font-black leading-[1.05] mb-6 hero-title"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}
        >
          <span className="text-white">Designing the Future of</span>
          <br />
          <span className="text-gradient">Competitive Gaming</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#9494a8] text-lg max-w-2xl mb-12 font-body leading-relaxed"
        >
          We curate, build, and scale competitive esports IPs across titles,
          audiences, and continents — powering the next generation of
          <span className="text-[#E6E6FA] font-semibold"> competitive gaming infrastructure.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <a href="#ips" className="btn-primary">
            <span>Explore Our IPs</span>
          </a>
          <a href="#contact" className="btn-outline">
            <span>Get In Touch</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {[
            { val: "3+", label: "IPs OWNED" },
            { val: "10+", label: "EVENTS" },
            { val: "₹40K+", label: "PRIZE POOL" },
            { val: "5+", label: "CITIES" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-black text-2xl text-white mb-1">{s.val}</div>
              <div className="text-[11px] text-[#6b6b80]">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-heading tracking-[0.3em] text-[#555568]">SCROLL</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#A020F0]/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
