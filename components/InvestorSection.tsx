"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Globe, Radio, BarChart3, ArrowRight } from "lucide-react";

const investorPoints = [
  { icon: Layers, title: "IP Ownership Model", description: "Full intellectual property ownership across competitive formats, leagues, and seasonal structures with long-term value accrual.", accent: "#A020F0" },
  { icon: BarChart3, title: "Scalable League Architecture", description: "Modular competitive systems designed to scale from regional to global with minimal marginal cost.", accent: "#FF00FF" },
  { icon: Radio, title: "Broadcast-First Monetisation", description: "Revenue pipelines built on broadcast distribution, sponsorships, and media rights from day one.", accent: "#B44AFF" },
  { icon: Globe, title: "Global Expansion Roadmap", description: "Structured territory expansion plan covering South Asia, SEA, Europe, and Americas by 2028.", accent: "#FF2D95" },
];

export default function InvestorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="invest" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0818]/30 via-[#050508] to-[#0a0515]/20" />

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#A020F0]/[0.04] to-transparent rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#FF00FF]/[0.03] to-transparent rounded-full" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
            >
              For Investors
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black mb-5 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
            >
              Building the <span className="text-gradient">Next Generation</span><br />
              Competitive Gaming<br />
              <span style={{ color: "#A020F0" }}>Infrastructure</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.15 }}
              className="w-20 neon-line-h mb-5"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6b6b80] text-sm leading-relaxed mb-8 max-w-lg"
            >
              ZEF offers a unique investment opportunity in the structured competitive gaming space with clear IP ownership, scalable architecture, and broadcast-first monetisation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="mailto:invest@zarxesports.com" className="btn-primary inline-flex items-center gap-3 text-sm px-8 py-3">
                <span>Request Investor Deck</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {investorPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                className="glass-card hud-corners rounded-sm p-5 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${point.accent}30, transparent)` }} />

                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-3 border transition-all duration-300"
                  style={{ background: `${point.accent}08`, borderColor: `${point.accent}20` }}
                >
                  <point.icon className="w-5 h-5" style={{ color: point.accent }} />
                </div>
                <h4 className="font-heading text-xs font-bold mb-1.5 text-white/85 group-hover:text-white transition-colors">{point.title}</h4>
                <p className="text-[10px] text-[#6b6b80] leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 glass-card hud-corners rounded-sm p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "IPs Owned", value: "3+" },
              { label: "Events Delivered", value: "10+" },
              { label: "Prize Pool", value: "₹40K+" },
              { label: "Cities", value: "5+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              >
                <span className="block font-heading text-2xl md:text-3xl font-black text-gradient mb-1">{stat.value}</span>
                <span className="text-[9px] font-heading tracking-[0.2em] uppercase text-[#6b6b80]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
