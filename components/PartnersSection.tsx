"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tv, Building2, Cpu, Shield } from "lucide-react";

const partners = [
  { name: "NewsX", type: "Media Partner", icon: Tv, description: "Official media partner providing broadcast coverage and content distribution.", accent: "#A020F0" },
  { name: "BNS Consulting", type: "Brand & Sponsorship Partner", icon: Building2, description: "Strategic brand partnerships and sponsorship management.", accent: "#FF00FF" },
  { name: "ZARX Technologies Pvt Ltd", type: "Technology Partner", icon: Cpu, description: "Platform technology, infrastructure, and digital solutions.", accent: "#B44AFF" },
  { name: "X Arena", type: "Managing Partner", icon: Shield, description: "Event management, venue operations, and execution.", accent: "#FF2D95" },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#A020F0]/[0.03] to-transparent rounded-full" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            Partners
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            Strategic <span className="text-gradient">Partners</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 neon-line-h mx-auto mb-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6b6b80] text-sm max-w-md mx-auto"
          >
            Building the ecosystem alongside industry leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="group"
            >
              <div className="glass-card hud-corners rounded-sm p-6 h-full text-center relative overflow-hidden">
                <div className="absolute  right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${partner.accent}30, transparent)` }} />

                <div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 opacity-0 group-hover:opacity-[0.08] rounded-full blur-3xl transition-opacity duration-500"
                  style={{ background: partner.accent }}
                />

                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-sm flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border"
                  style={{ background: `${partner.accent}08`, borderColor: `${partner.accent}20`, boxShadow: `0 0 20px ${partner.accent}10` }}
                >
                  <partner.icon className="w-6 h-6" style={{ color: partner.accent }} />
                </div>

                <span className="text-[8px] font-heading tracking-[0.2em] uppercase block mb-2" style={{ color: `${partner.accent}99` }}>
                  {partner.type}
                </span>
                <h3 className="font-heading text-sm font-bold mb-2.5 text-white/90 group-hover:text-white transition-colors">
                  {partner.name}
                </h3>
                <p className="text-[10px] text-[#6b6b80] leading-relaxed">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
