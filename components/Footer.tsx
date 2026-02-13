"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Instagram, Twitter, Youtube, Linkedin, Twitch, ArrowRight, Send, Globe, Gamepad2 } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitch", icon: Twitch, href: "#" },
];

const footerLinks = [
  { title: "Explore", links: [{ name: "Home", href: "#home" }, { name: "About Us", href: "#about" }, { name: "Our IPs", href: "#ips" }, { name: "Timeline", href: "#timeline" }, { name: "Media Gallery", href: "#gallery" }] },
  { title: "Events", links: [{ name: "NXT in Gaming 2026", href: "#nxt" }, { name: "NSL 2026", href: "/nsl2026" }, { name: "GSL 2026", href: "#ips" }, { name: "Champions League", href: "#timeline" }, { name: "Winter Wars", href: "#timeline" }] },
  { title: "Connect", links: [{ name: "Careers", href: "#careers" }, { name: "Partner With Us", href: "#partners" }, { name: "Invest", href: "#invest" }, { name: "Media Inquiries", href: "#contact" }, { name: "Sponsor Inquiry", href: "#contact" }] },
];

const tickerLogos = [
  "ZARX ESPORTS FORUM", "★", "NXT IN GAMING 2026", "★", "NSL 2026", "★", "GSL 2026", "★",
  "CHAMPIONS LEAGUE", "★", "WINTER WARS", "★", "ZARX ESPORTS FORUM", "★", "NXT IN GAMING 2026", "★",
  "NSL 2026", "★", "GSL 2026", "★",
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Contact Section */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0818]/30 via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-grid-fine opacity-15" />

        <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black mb-4"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
            >
              Let&apos;s Build the <span className="text-gradient">Future</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-20 neon-line-h mx-auto"
            />
          </div>

          {/* Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Contact Form */}
            <div className="glass-card hud-corners rounded-sm p-7">
              <h3 className="font-heading text-lg font-bold mb-5 text-white/90">Send us a message</h3>
              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input type="text" placeholder="Your Name" className="form-input" />
                  <input type="email" placeholder="Email Address" className="form-input" />
                </div>
                <select className="form-input">
                  <option value="">Inquiry Type</option>
                  <option value="ip">IP Inquiry</option>
                  <option value="sponsor">Sponsorship Inquiry</option>
                  <option value="media">Media Inquiry</option>
                  <option value="invest">Investment Inquiry</option>
                  <option value="partner">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="form-input resize-none" />
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-2.5">
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 relative z-10" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="glass-card rounded-sm p-6">
                <h3 className="font-heading text-sm font-bold mb-4 text-white/85">Contact Information</h3>
                <div className="space-y-3.5">
                  {[
                    { icon: Mail, label: "EMAIL", value: "contact@zarxesports.com", accent: "#A020F0" },
                    { icon: Globe, label: "WEB", value: "www.zarxesports.com", accent: "#FF00FF" },
                    { icon: MapPin, label: "LOCATION", value: "New Delhi, India", accent: "#B44AFF" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-sm flex items-center justify-center border" style={{ background: `${item.accent}08`, borderColor: `${item.accent}20` }}>
                        <item.icon className="w-4 h-4" style={{ color: item.accent }} />
                      </div>
                      <div>
                        <p className="text-[8px] font-heading tracking-[0.2em] text-[#555568]">{item.label}</p>
                        <p className="text-xs text-[#8a8a9a]">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <a href="mailto:sponsors@zarxesports.com" className="glass-card rounded-sm p-4 text-center hover:border-[#A020F0]/30 transition-all group">
                  <Gamepad2 className="w-5 h-5 mx-auto mb-1.5 text-[#A020F0] group-hover:text-[#B44AFF]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.1em] text-[#8a8a9a]">Sponsor Inquiry</span>
                </a>
                <a href="mailto:media@zarxesports.com" className="glass-card rounded-sm p-4 text-center hover:border-[#FF00FF]/30 transition-all group">
                  <Globe className="w-5 h-5 mx-auto mb-1.5 text-[#FF00FF] group-hover:text-[#FF2D95]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.1em] text-[#8a8a9a]">Media Inquiry</span>
                </a>
              </div>

              <div className="glass-card rounded-sm p-5">
                <h4 className="text-[8px] font-heading tracking-[0.2em] text-[#555568] mb-3 uppercase">Follow Us</h4>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="w-8 h-8 rounded-sm border border-[#A020F0]/15 flex items-center justify-center hover:bg-[#A020F0]/10 hover:border-[#A020F0]/30 transition-all group" aria-label={social.name}>
                      <social.icon className="w-3.5 h-3.5 text-[#6b6b80] group-hover:text-[#A020F0] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LED Footer Ticker */}
      <div className="led-ticker-wrap py-2.5">
        <div className="flex animate-ticker-fast">
          {[...tickerLogos, ...tickerLogos, ...tickerLogos].map((text, i) => (
            <span key={i} className={`flex-shrink-0 mx-3 text-[10px] font-heading tracking-[0.3em] uppercase ${text === "★" ? "text-[#A020F0]/60" : "text-[#555568] hover:text-[#A020F0]/80 transition-colors"}`}>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative bg-[#050508] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#A020F0] to-[#FF00FF] flex items-center justify-center font-heading font-black text-sm">Z</div>
                <div>
                  <span className="font-heading font-bold text-sm tracking-wider">ZARX</span>
                  <span className="font-heading text-[8px] text-[#E6E6FA]/60 block -mt-0.5 tracking-[0.2em]">ESPORTS FORUM</span>
                </div>
              </Link>
              <p className="text-[11px] text-[#555568] leading-relaxed max-w-sm mb-5">
                ZARX Esports Forum is a global competitive gaming IP curator building structured esports ecosystems across titles and territories.
              </p>
              <p className="text-[10px] text-[#333345]">&copy; {new Date().getFullYear()} ZARX Esports Forum. All rights reserved.</p>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-heading text-[10px] font-bold tracking-[0.2em] mb-3.5 text-[#8a8a9a] uppercase">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("/") ? (
                        <Link href={link.href} className="text-[11px] text-[#555568] hover:text-[#A020F0] transition-colors">{link.name}</Link>
                      ) : (
                        <a href={link.href} className="text-[11px] text-[#555568] hover:text-[#A020F0] transition-colors">{link.name}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
