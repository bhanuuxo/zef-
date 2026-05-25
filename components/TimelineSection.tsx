"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
  { date: "July 19, 2026", title: "ZEF Champions League 2026", description: "India's premier esports championship across the nation.", color: "#A020F0", highlight: true },
  { date: "April–May 2026", title: "NSL 2026", description: "National-scale league spanning major Indian cities.", color: "#FF00FF", highlight: true },
  { date: "Feb–March 2026", title: "NXT in Gaming", description: "India's premier esports exhibition at Bharat Mandapam.", color: "#A020F0", highlight: true },
  { date: "December 2025", title: "Winter Wars 2", description: "Second edition solidifying the Winter Wars IP.", color: "#FF00FF" },
  { date: "November 2025", title: "Winter Wars 1", description: "Premier winter competitive event launch.", color: "#FFB6C1" },
  { date: "September 2025", title: "Champions League Season 4", description: "Fourth season establishing long-term competitive infrastructure.", color: "#A020F0" },
  { date: "August 2025", title: "Champions League Season 3", description: "Season three with enhanced broadcast production.", color: "#FF00FF" },
  { date: "July 2025", title: "Champions League Season 2", description: "Expanding competitive operations with second season.", color: "#E6E6FA" },
  { date: "June 2025", title: "ZEF Champions League Season 1", description: "Launch of our flagship competitive league format.", color: "#A020F0" },
  { date: "May 2025", title: "10 Events | ₹40,000 Prize Pool", description: "Online + Offline competitive events across multiple titles.", color: "#FF00FF" },
  { date: "March 10", title: "Incorporation of ZARX Esports Forum", description: "Official formation of ZEF as a competitive gaming IP curator.", color: "#A020F0" },
];

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  /* Duplicate events (only need 2 copies for pixel-based loop) */
  const loopEvents = [...timelineEvents, ...timelineEvents];

  const SPEED = 1.2; // pixels per frame

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (track && !pausedRef.current) {
      offsetRef.current += SPEED;
      /* Reset seamlessly when we've scrolled past the first set */
      const halfWidth = track.scrollWidth / 2;
      if (offsetRef.current >= halfWidth) {
        offsetRef.current -= halfWidth;
      }
      track.style.transform = `translateX(${-offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <section id="timeline" ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            Our Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            The <span className="text-gradient">ZEF</span> Journey
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
            From incorporation to global-scale competitive IPs.
          </motion.p>
        </div>

        {/* Infinite Auto-Scrolling Timeline */}
        <div
          className="relative overflow-hidden pb-8"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div ref={trackRef} className="flex items-start will-change-transform">
            {loopEvents.map((event, i) => (
              <div key={i} className="flex items-start flex-shrink-0">
                <div className="flex flex-col items-center relative">
                  {/* Card */}
                  <div
                    className="glass-card rounded-sm p-5 w-52 mb-6 cursor-pointer relative overflow-hidden group"
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${event.color}40, transparent)` }} />

                    <span className="text-[9px] font-heading font-bold tracking-[0.15em] uppercase block mb-2" style={{ color: event.color }}>
                      {event.date}
                    </span>
                    <h4 className="font-heading text-xs font-bold text-white/90 mb-1.5 leading-snug">{event.title}</h4>
                    <p className="text-[10px] text-[#6b6b80] leading-relaxed">{event.description}</p>
                    {event.highlight && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-sm text-[8px] font-heading tracking-[0.15em] uppercase" style={{ background: `${event.color}15`, color: `${event.color}cc`, border: `1px solid ${event.color}25` }}>
                        UPCOMING
                      </span>
                    )}
                  </div>

                  {/* Connector */}
                  <div className="w-[1px] h-8" style={{ background: `linear-gradient(180deg, transparent, ${event.color}60)` }} />

                  {/* Node */}
                  <div className="relative z-10">
                    <div className="timeline-node" style={{ background: event.color, boxShadow: `0 0 12px ${event.color}, 0 0 28px ${event.color}50` }} />
                  </div>
                </div>

                {/* Line between nodes */}
                <div className="flex items-end pb-[7px]">
                  <div
                    className="timeline-line"
                    style={{ background: `linear-gradient(90deg, ${event.color}80, ${loopEvents[(i + 1) % loopEvents.length].color}80)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
