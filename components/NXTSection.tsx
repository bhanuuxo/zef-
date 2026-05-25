"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-3 md:gap-5 justify-center">
      {Object.entries(timeLeft).map(([label, value], i) => (
        <div key={label} className="flex items-center gap-3 md:gap-5">
          <div className="text-center group">
            <div className="relative">
              <div className="glass-card rounded-sm w-[72px] md:w-[100px] py-4 md:py-5 text-center">
                <span className="countdown-digit block">{String(value).padStart(2, "0")}</span>
              </div>
            </div>
            <span className="text-[9px] md:text-[10px] text-[#6b6b80] font-heading tracking-[0.2em] mt-3 block uppercase">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="text-[#A020F0]/40 font-heading text-xl font-bold -mt-5">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function NXTSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="nxt">


      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[9px] font-heading font-semibold tracking-[0.2em] uppercase text-[#c084fc] border border-[#A020F0]/20 bg-[#A020F0]/[0.04]">
            Current Focus
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center font-heading font-black mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          <span className="text-gradient">ZEF Champions League</span>{" "}
          <span className="glow-text">2026</span>
        </motion.h2>

        {/* Event details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-14 text-[#8a8aa0]"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#A020F0]" />
            <span className="text-[11px] font-heading tracking-[0.1em]">19th July 2026</span>
          </div>
          <div className="w-[1px] h-3 bg-[#A020F0]/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FF00FF]" />
            <span className="text-[11px] font-heading tracking-[0.1em]">India</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <CountdownTimer targetDate={new Date("2026-07-19T10:00:00")} />
        </motion.div>

        {/* NXT Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-20"
        >
          <motion.div
            className="relative"
          >
            <div className="glass-card rounded-sm px-12 py-10 text-center max-w-md">
              <div className="w-40 h-50 mx-auto mb-5 rounded-sm flex items-center justify-center relative overflow-hidden bg-white p-0.5">
                <Image
                  src="/ZEF-Champions-League-2026.png.png"
                  alt="ZEF Champions League 2026"
                  width={512}
                  height={640}
                  quality={100}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 tracking-wider">ZEF Champions League 2026</h3>
              <p className="text-[#6b6b80] text-xs tracking-wider leading-relaxed">
                India&apos;s Premier Esports Championship
              </p>
            </div>
            <div className="absolute -inset-8 bg-gradient-radial from-[#A020F0]/8 to-transparent rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a href="#register" className="btn-primary text-sm px-12 py-4">
            <span>Join the Arena</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
