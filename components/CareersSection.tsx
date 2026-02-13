"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Radio, Target, Users, ArrowRight, Send } from "lucide-react";

const roles = [
  {
    category: "Internship Opportunities",
    icon: Zap,
    positions: ["Esports Operations Intern", "Content & Social Media Intern", "Event Management Intern", "Community Management Intern"],
    accent: "#A020F0",
  },
  {
    category: "Esports Operations",
    icon: Target,
    positions: ["Tournament Director", "League Operations Manager", "Referee Coordinator", "Player Relations Manager"],
    accent: "#FF00FF",
  },
  {
    category: "Broadcast & Media",
    icon: Radio,
    positions: ["Live Production Director", "Broadcast Engineer", "Graphics & Overlay Designer", "Stream Operations Lead"],
    accent: "#B44AFF",
  },
  {
    category: "Strategy & Partnerships",
    icon: Users,
    positions: ["Business Development Manager", "Sponsorship Manager", "Strategic Partnerships Lead", "Brand & Marketing Manager"],
    accent: "#FF2D95",
  },
];

export default function CareersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0818]/30 via-transparent to-[#050508]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            Careers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            Join the <span className="text-gradient">Competitive Architecture</span> Movement
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
            className="text-[#6b6b80] text-sm max-w-lg mx-auto"
          >
            Be part of building the future infrastructure of global competitive gaming. We&apos;re looking for passionate individuals who want to shape the esports industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {roles.map((role, i) => (
            <motion.div
              key={role.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="glass-card hud-corners rounded-sm p-6 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${role.accent}30, transparent)` }} />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center border transition-all duration-300"
                  style={{ background: `${role.accent}08`, borderColor: `${role.accent}20` }}
                >
                  <role.icon className="w-5 h-5" style={{ color: role.accent }} />
                </div>
                <h3 className="font-heading text-sm font-bold text-white/85 group-hover:text-white transition-colors">{role.category}</h3>
              </div>

              <ul className="space-y-2">
                {role.positions.map((position, j) => (
                  <li
                    key={j}
                    className="flex items-center justify-between py-1.5 px-2.5 rounded-sm hover:bg-white/[0.02] transition-colors cursor-pointer group/item"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full" style={{ background: role.accent }} />
                      <span className="text-[11px] text-[#8a8a9a] group-hover/item:text-white/80 transition-colors">{position}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all" style={{ color: role.accent }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Apply CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card hud-corners rounded-sm p-8 md:p-10 max-w-xl mx-auto">
            <Send className="w-8 h-8 text-[#A020F0] mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold mb-2 text-white/90">Ready to join?</h3>
            <p className="text-[#6b6b80] text-xs mb-5">Send your resume and portfolio to our careers team.</p>
            <a href="mailto:careers@zarxesports.com" className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-2.5">
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
