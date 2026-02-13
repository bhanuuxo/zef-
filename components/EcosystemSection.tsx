"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Clapperboard, UserCheck, GraduationCap, Zap } from "lucide-react";

const ecosystemCards = [
  {
    id: 1,
    icon: Layers,
    title: "Esports IP Design & Curation",
    description: "End-to-end intellectual property creation for competitive ecosystems with long-term value.",
    features: [
      "League & competitive format design",
      "Governance & lifecycle planning",
      "Tournament integrity frameworks",
      "Long-term season structuring",
      "Full ownership model",
    ],
    accentColor: "#A020F0",
  },
  {
    id: 2,
    icon: Clapperboard,
    title: "Media Production & Broadcast Operations",
    description: "Broadcast-first approach to esports content with professional production pipelines.",
    features: [
      "End-to-end live broadcast execution",
      "Multi-platform streaming pipelines",
      "Broadcast overlays & design systems",
      "Post-event content lifecycle",
      "Unified production command",
    ],
    accentColor: "#FF00FF",
  },
  {
    id: 3,
    icon: UserCheck,
    title: "League, Team & Operations Management",
    description: "Structured operations management for competitive integrity across all levels.",
    features: [
      "Central command structure",
      "Team onboarding frameworks",
      "Referee & admin governance",
      "Competitive readiness operations",
    ],
    accentColor: "#B44AFF",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "High-Performance Player Development",
    description: "Building professional athletes through structured development pathways.",
    features: [
      "Structured bootcamps",
      "Skill progression models",
      "Career-aligned development",
      "Long-term athlete architecture",
    ],
    accentColor: "#FF2D95",
  },
];

function EcosystemCard({ card, index }: { card: (typeof ecosystemCards)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group"
    >
      <div className="glass-card rounded-sm p-8 h-full relative overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent 10%, ${card.accentColor}60, transparent 90%)` }} />

        {/* Background number */}
        <div className="absolute top-4 right-6 font-heading text-7xl font-black text-white/[0.015] select-none">0{card.id}</div>

        {/* Hover glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `${card.accentColor}12` }}
        />

        {/* Icon container */}
        <div className="relative z-10 mb-7">
          <div className="w-12 h-12 rounded-sm flex items-center justify-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${card.accentColor}20, ${card.accentColor}06)`, border: `1px solid ${card.accentColor}25` }}
          >
            <card.icon className="w-5 h-5" style={{ color: card.accentColor }} />
          </div>
        </div>

        {/* Number + Title */}
        <div className="relative z-10">
          <span className="text-[8px] font-heading tracking-[0.3em] uppercase mb-2 block" style={{ color: `${card.accentColor}80` }}>
            MODULE 0{card.id}
          </span>
          <h3 className="font-heading text-lg md:text-xl font-bold mb-3 text-white/95 group-hover:text-white transition-colors leading-tight">
            {card.title}
          </h3>
          <p className="text-[#6b6b80] text-xs mb-7 leading-relaxed">{card.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 relative z-10">
          {card.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.12 + i * 0.05 + 0.3 }}
              className="flex items-start gap-3 text-xs text-[#9494a8]"
            >
              <div
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: card.accentColor, boxShadow: `0 0 6px ${card.accentColor}60` }}
              />
              <span className="leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );
}

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Ambient blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A020F0]/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF00FF]/[0.02] rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-18">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            <Zap className="w-3 h-3 text-[#A020F0]" />
            What We Architect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-5"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            Competitive Ecosystem<br />
            <span className="text-gradient">Architecture</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 neon-line-h mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#6b6b80] text-sm max-w-xl mx-auto leading-relaxed"
          >
            We don&apos;t offer services. We architect competitive ecosystems
            that scale across titles, audiences, and territories.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-16">
          {ecosystemCards.map((card, i) => (
            <EcosystemCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
