"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, Trophy, Calendar, MapPin, Users, Ticket, Store,
  Handshake, Crown, Star, Shield, Building2, Check, Send,
} from "lucide-react";

/* ===== TICKET TYPES ===== */
const tickets = [
  { name: "General Entry", price: "Coming Soon", icon: Ticket, features: ["Full venue access", "Live match viewing", "Fan zone access", "Event merchandise"], accent: "#A020F0", popular: false },
  { name: "VIP Arena Pass", price: "Coming Soon", icon: Star, features: ["Priority seating", "VIP lounge access", "Exclusive merchandise", "Meet & greet opportunity", "Complimentary refreshments"], accent: "#FF00FF", popular: false },
  { name: "Pro Experience Pass", price: "Coming Soon", icon: Crown, features: ["Backstage access", "Player interaction sessions", "Pro gaming station access", "Premium seating", "All VIP benefits", "Exclusive pro kit"], accent: "#B44AFF", popular: true },
  { name: "Founder Circle Access", price: "Limited", icon: Shield, features: ["All Pro Experience benefits", "Private networking lounge", "Investor presentation access", "Founder exclusive dinner", "Lifetime event priority", "Named recognition"], accent: "#FFD700", popular: false },
  { name: "Corporate Box", price: "On Request", icon: Building2, features: ["Private viewing suite", "Corporate branding opportunities", "Dedicated hospitality", "Custom experiences", "All premium benefits", "Multi-pass allocation"], accent: "#FF2D95", popular: false },
];

/* ===== REGISTRATION FORM ===== */
function RegistrationForm({ title, type }: { title: string; type: "vendor" | "team" | "sponsor" }) {
  return (
    <div className="glass-card hud-corners rounded-sm p-7">
      <h3 className="font-heading text-lg font-bold mb-5 text-white/90">{title}</h3>
      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input type="text" placeholder={type === "team" ? "Team Name" : "Organization / Name"} className="form-input" />
          <input type="email" placeholder="Email Address" className="form-input" />
        </div>
        <input type="tel" placeholder="Phone Number" className="form-input" />
        {type === "vendor" && (
          <select className="form-input">
            <option value="">Stall Type</option>
            <option value="standard">Standard Stall</option>
            <option value="premium">Premium Stall</option>
            <option value="custom">Custom Setup</option>
          </select>
        )}
        {type === "team" && (
          <>
            <select className="form-input">
              <option value="">Game Title</option>
              <option value="valorant">Valorant</option>
              <option value="pubg">PUBG Mobile</option>
              <option value="bgmi">BGMI</option>
              <option value="freefire">Free Fire Max</option>
              <option value="coc">Clash of Clans</option>
              <option value="cr">Clash Royale</option>
              <option value="lol">League of Legends</option>
            </select>
            <input type="number" placeholder="Number of Players" className="form-input" />
          </>
        )}
        {type === "sponsor" && (
          <select className="form-input">
            <option value="">Sponsorship Level</option>
            <option value="title">Title Sponsor</option>
            <option value="gold">Gold Sponsor</option>
            <option value="silver">Silver Sponsor</option>
            <option value="partner">Event Partner</option>
          </select>
        )}
        <textarea placeholder="Additional Details" rows={3} className="form-input resize-none" />
        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-2.5">
          <span>Submit</span>
          <Send className="w-3.5 h-3.5 relative z-10" />
        </button>
      </form>
    </div>
  );
}

/* ===== MAIN PAGE ===== */
export default function NSL2026Page() {
  const heroRef = useRef(null);
  const ticketsRef = useRef(null);
  const registerRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const ticketsInView = useInView(ticketsRef, { once: true, margin: "-100px" });
  const registerInView = useInView(registerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"vendor" | "team" | "sponsor">("team");

  return (
    <main className="min-h-screen bg-[#050508]">
      {/* Scanlines & Noise */}
      <div className="scanlines pointer-events-none fixed inset-0 z-[2]" />
      <div className="noise pointer-events-none fixed inset-0 z-[2]" />

      {/* Back to home */}
      <div className="fixed top-5 left-5 z-50">
        <Link href="/" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm glass-card text-[11px] font-heading font-bold tracking-[0.1em] text-[#8a8a9a] hover:text-white transition-all">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0 bg-grid-fine opacity-20" />

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#A020F0]/[0.06] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#FF00FF]/[0.04] to-transparent rounded-full blur-3xl" />
        </div>

        {/* Floating geometric shapes */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#A020F0]/[0.06] rounded-sm"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%`, width: 30 + i * 8, height: 30 + i * 8 }}
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360], opacity: [0.03, 0.1, 0.03] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03]">
              Championship Esports Finals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-5"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            <span className="text-gradient">NSL</span>{" "}
            <span style={{ color: "#A020F0" }}>2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-[#8a8a9a] font-heading mb-4"
          >
            National Series League
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="w-20 neon-line-h mx-auto mb-6"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-5 mb-10 text-[#6b6b80]"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#A020F0]" />
              <span className="font-heading text-[11px] tracking-[0.15em]">April – May 2026</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#A020F0]/30 hidden md:block" />
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF00FF]" />
              <span className="font-heading text-[11px] tracking-[0.15em]">Pan India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="#tickets" className="btn-primary text-sm px-6 py-2.5">Get Tickets</a>
            <a href="#register" className="btn-outline text-sm px-6 py-2.5">Register Team</a>
            <a href="#register" className="btn-outline text-sm px-6 py-2.5 border-[#FF00FF]/25 hover:bg-[#FF00FF]/[0.06]">Sponsor Inquiry</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-[#555568] text-[9px] font-heading tracking-[0.3em]">
            <span>SCROLL</span>
            <div className="w-[1px] h-6 bg-gradient-to-b from-[#A020F0]/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== TICKETS SECTION ===== */}
      <section id="tickets" ref={ticketsRef} className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0818]/30 via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-grid-fine opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={ticketsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
            >
              Tickets
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={ticketsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black mb-4"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
            >
              Choose Your <span className="text-gradient">Experience</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={ticketsInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-20 neon-line-h mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tickets.map((ticket, i) => (
              <motion.div
                key={ticket.name}
                initial={{ opacity: 0, y: 40 }}
                animate={ticketsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className={`relative group ${ticket.popular ? "lg:-mt-3 lg:mb-3" : ""}`}
              >
                {ticket.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-sm bg-gradient-to-r from-[#A020F0] to-[#FF00FF] text-[8px] font-heading font-bold tracking-[0.15em] z-10">
                    MOST POPULAR
                  </div>
                )}
                <div className={`glass-card hud-corners rounded-sm p-5 h-full text-center relative overflow-hidden ${ticket.popular ? "border-[#A020F0]/30" : ""}`}>
                  <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${ticket.accent}30, transparent)` }} />

                  <div
                    className="w-11 h-11 mx-auto rounded-sm flex items-center justify-center mb-3 border transition-all duration-300"
                    style={{ background: `${ticket.accent}08`, borderColor: `${ticket.accent}20` }}
                  >
                    <ticket.icon className="w-5 h-5" style={{ color: ticket.accent }} />
                  </div>

                  <h3 className="font-heading text-xs font-bold mb-1.5 text-white/85">{ticket.name}</h3>
                  <p className="text-[9px] font-heading tracking-[0.15em] uppercase mb-4" style={{ color: `${ticket.accent}cc` }}>{ticket.price}</p>

                  <ul className="space-y-2 text-left mb-5">
                    {ticket.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-[10px] text-[#8a8a9a]">
                        <Check className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ticket.accent }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2 rounded-sm text-[10px] font-heading font-bold tracking-[0.15em] transition-all duration-300 ${
                      ticket.popular
                        ? "bg-gradient-to-r from-[#A020F0] to-[#FF00FF] text-white hover:shadow-lg hover:shadow-[#A020F0]/20"
                        : "border border-[#A020F0]/20 text-[#8a8a9a] hover:bg-[#A020F0]/[0.06] hover:border-[#A020F0]/30"
                    }`}
                  >
                    Coming Soon
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REGISTRATION SECTION ===== */}
      <section id="register" ref={registerRef} className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0 bg-grid-fine opacity-15" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={registerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-heading font-black mb-4"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
            >
              <span className="text-gradient">Register</span> Now
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={registerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
              className="w-20 neon-line-h mx-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={registerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-2.5 mb-10"
          >
            {[
              { key: "team" as const, label: "Team Registration", icon: Users },
              { key: "vendor" as const, label: "Vendor & Stall", icon: Store },
              { key: "sponsor" as const, label: "Sponsor Inquiry", icon: Handshake },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-heading font-bold tracking-[0.15em] transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-[#A020F0] to-[#FF00FF] text-white shadow-lg shadow-[#A020F0]/15"
                    : "glass-card text-[#6b6b80] hover:text-white"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={registerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {activeTab === "team" && <RegistrationForm title="Team Registration" type="team" />}
            {activeTab === "vendor" && <RegistrationForm title="Vendor & Stall Registration" type="vendor" />}
            {activeTab === "sponsor" && <RegistrationForm title="Sponsor Inquiry" type="sponsor" />}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.04] py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xs">
            <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-[#A020F0] to-[#FF00FF] flex items-center justify-center font-heading font-black text-[11px]">Z</div>
            ZARX Esports Forum
          </Link>
          <p className="text-[10px] text-[#333345]">&copy; {new Date().getFullYear()} ZARX Esports Forum. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
