"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Aniket Singh", role: "Founder & CEO", bio: "Visionary entrepreneur pioneering India's competitive gaming infrastructure. Under his leadership, ZEF has grown from a single tournament into a multi-IP esports ecosystem spanning cities and titles nationwide.", isFounder: true },
  { name: "Ayan Khan", role: "Vice President — Head of Operations", bio: "The operational backbone of ZEF, orchestrating end-to-end event execution, team logistics, and competitive readiness across every league and tournament property." },
  { name: "Bhanu Pratap Singh", role: "Associate — HR, Legal & Compliance", bio: "Ensures ZEF operates with integrity — managing talent acquisition, organizational policy, and regulatory compliance to build a sustainable esports enterprise." },
  { name: "Adil Hassan", role: "Specialist — GFX", bio: "The creative force behind ZEF's visual identity — crafting tournament branding, social assets, and graphic systems that define the look of every IP." },
  { name: "M. Imtiaz Ahmmed", role: "Specialist — VFX", bio: "Brings ZEF's broadcasts and content to life with dynamic motion graphics, visual effects, and cinematic production that elevate the viewer experience." },
  { name: "Ankush Yadav", role: "Analyst — League & Content Strategist", bio: "Drives data-informed competitive formats and content strategy — shaping league structures, audience engagement, and editorial direction across ZEF platforms." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">


      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            The <span className="text-gradient">Team</span> Behind ZEF
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
            className="text-[#6b6b80] text-sm max-w-2xl mx-auto leading-relaxed"
          >
            ZARX Esports Forum is a global competitive gaming IP curator building structured esports ecosystems across titles and territories.
          </motion.p>
        </div>

        {/* Founder Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="glass-card hud-corners rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#A020F0]/[0.06] rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF00FF]/[0.04] rounded-full blur-[100px]" />

            {/* Photo placeholder */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-sm bg-gradient-to-br from-[#A020F0] to-[#FF00FF] flex items-center justify-center overflow-hidden">
                <User className="w-16 h-16 text-white/60" />
              </div>
              <div className="absolute -inset-1.5 rounded-sm border border-[#A020F0]/20 -z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-sm border border-[#A020F0]/10 -z-20"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left relative z-10">
              <span className="text-[9px] font-heading tracking-[0.2em] uppercase text-[#A020F0] mb-2 block font-bold">
                Founder & CEO
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-black mb-3 text-white/95">
                Aniket Singh
              </h3>
              <p className="text-[#8a8a9a] text-sm leading-relaxed mb-5 max-w-lg">
                Visionary entrepreneur pioneering India&apos;s competitive gaming infrastructure. Under his leadership, ZEF has grown from a single tournament into a multi-IP esports ecosystem spanning cities and titles nationwide.
              </p>
              <div className="flex gap-2.5 justify-center md:justify-start">
                {[Linkedin, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-8 h-8 rounded-sm border border-[#A020F0]/20 flex items-center justify-center hover:bg-[#A020F0]/10 hover:border-[#A020F0]/40 transition-all">
                    <Icon className="w-3.5 h-3.5 text-[#6b6b80]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {team.slice(1).map((member, i) => {
            const accents = ["#A020F0", "#FF00FF", "#B44AFF", "#FF2D95", "#E6E6FA"];
            const accent = accents[i % accents.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="glass-card rounded-sm p-5 text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }} />

                <div
                  className="w-14 h-14 mx-auto mb-3 rounded-sm flex items-center justify-center transition-all duration-300 border"
                  style={{ background: `${accent}08`, borderColor: `${accent}20` }}
                >
                  <User className="w-6 h-6 text-[#6b6b80] group-hover:text-white/70 transition-colors" />
                </div>

                <h4 className="font-heading text-xs font-bold text-white/85 mb-1">{member.name}</h4>
                <p className="text-[9px] font-heading tracking-[0.15em] uppercase mb-2.5" style={{ color: `${accent}cc` }}>
                  {member.role}
                </p>
                <p className="text-[10px] text-[#6b6b80] leading-relaxed">{member.bio}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
