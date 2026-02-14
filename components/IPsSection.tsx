"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const ips = [
  {
    id: 1,
    title: "NXT in Gaming 2026",
    subtitle: "India's Premier Esports Exhibition",
    date: "12th March 2026",
    location: "Bharat Mandapam, New Delhi",
    description: "A premier gaming and esports exhibition bringing together players, brands, and industry leaders under one roof.",
    accent: "#A020F0",
    link: "#nxt",
  },
  {
    id: 2,
    title: "NSL 2026",
    subtitle: "National Series League",
    date: "April – May 2026",
    location: "Pan India",
    description: "A national-scale competitive league spanning major Indian cities with multi-title tournaments and broadcast production.",
    accent: "#FF00FF",
    link: "/nsl2026",
  },
  {
    id: 3,
    title: "GSL 2026",
    subtitle: "Global Series League",
    date: "November 2026",
    location: "International",
    description: "Global competitive league expanding ZEF's esports IP to international territories with structured season formats.",
    accent: "#E6E6FA",
    link: "#ips",
  },
];

function IPCard({ ip, index }: { ip: (typeof ips)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX((y - rect.height / 2) / 12);
    setRotateY((x - rect.width / 2) / -12);
  };

  const handleMouseLeave = () => { setRotateX(0); setRotateY(0); };

  const LinkComponent = ip.link.startsWith("/") ? Link : "a";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="glass-card hud-corners rounded-sm overflow-hidden h-full relative"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* Top accent line */}
        <div className="h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${ip.accent}, transparent)` }} />

        {/* Module label */}
        <div className="px-6 pt-5">
          <span className="text-[9px] font-heading font-bold tracking-[0.2em] uppercase" style={{ color: `${ip.accent}99` }}>
            IP MODULE 0{ip.id}
          </span>
        </div>

        {/* Icon area */}
        <div className="relative px-6 pt-4 pb-0">
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-sm flex items-center justify-center mb-5 border"
              style={{
                background: `${ip.accent}08`,
                borderColor: `${ip.accent}25`,
                boxShadow: `0 0 35px ${ip.accent}15`,
              }}
            >
              <span className="font-heading text-2xl font-black" style={{ color: ip.accent }}>
                {ip.title.charAt(0)}
              </span>
            </motion.div>
          </div>

          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
            style={{ background: ip.accent }}
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-2">
          <span className="text-[9px] font-heading tracking-[0.2em] uppercase block mb-2" style={{ color: `${ip.accent}cc` }}>
            {ip.subtitle}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-black mb-3 text-white/90 group-hover:text-white transition-colors">
            {ip.title}
          </h3>

          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-[10px] text-[#6b6b80]">
              <Calendar className="w-3 h-3" style={{ color: ip.accent }} />
              <span>{ip.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#6b6b80]">
              <MapPin className="w-3 h-3" style={{ color: ip.accent }} />
              <span>{ip.location}</span>
            </div>
          </div>

          <p className="text-[#6b6b80] text-xs leading-relaxed mb-5">{ip.description}</p>

          <LinkComponent
            href={ip.link}
            className="inline-flex items-center gap-2 text-[11px] font-heading font-bold tracking-[0.1em] transition-colors group/link"
            style={{ color: `${ip.accent}cc` }}
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </LinkComponent>
        </div>

        {/* Number watermark */}
        <div className="absolute bottom-4 right-5 font-heading text-7xl font-black opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{ color: ip.accent }}>
          0{ip.id}
        </div>
      </div>
    </motion.div>
  );
}

export default function IPsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ips" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#080510]/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#A020F0]/[0.09] to-transparent rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#FFD700]/[0.03] rounded-full blur-[140px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            Our IPs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            Intellectual <span className="text-gradient">Properties</span>
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
            Three major IPs designed for scale, broadcast, and long-term competitive value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ips.map((ip, i) => (
            <IPCard key={ip.id} ip={ip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
