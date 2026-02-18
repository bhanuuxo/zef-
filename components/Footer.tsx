"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Instagram, Youtube, Linkedin, ArrowRight, Send, Globe, Gamepad2, Phone } from "lucide-react";
import Image from "next/image";

const DiscordIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>;

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/zef.global?igsh=dXRoYmh3cmVsMTBu" },
  { name: "Discord", icon: DiscordIcon, href: "https://discord.gg/YaN6pqYbks" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@zef.global?si=F-oPNSmK-m2BB4Ib" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/zarx-esports-federation/" },
];

const footerLinks = [
  { title: "Explore", links: [{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }, { name: "Our IPs", href: "/ips" }, { name: "Timeline", href: "#timeline" }, { name: "Media Gallery", href: "/gallery" }] },
  { title: "IP", links: [{ name: "NXT in Gaming 2026", href: "#nxt" }, { name: "NSL 2026", href: "/nsl2026" }, { name: "GSL 2026", href: "/ips" }, { name: "Champions League", href: "#timeline" }, { name: "Winter Wars", href: "#timeline" }] },
  { title: "Connect", links: [{ name: "Careers", href: "/careers" }, { name: "Partner With Us", href: "#partners" }, { name: "Invest", href: "#invest" }, { name: "Investment Inquiries", href: "mailto:partnerships@zefglobal.com" }, { name: "Sponsor Inquiry", href: "mailto:partnerships@zefglobal.com" }] },
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
      <section className="relative py-8 md:py-12">
        <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6">
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {/* Contact Form */}
            <div className="glass-card hud-corners rounded-sm p-4 md:p-5">
              <h3 className="font-heading text-base font-bold mb-4 text-white/90">Send us a message</h3>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <textarea placeholder="Your Message" rows={3} className="form-input resize-none" />
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-2.5">
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 relative z-10" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="glass-card rounded-sm p-3 md:p-4">
                <h3 className="font-heading text-sm font-bold mb-3 text-white/85">Contact Information</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "EMAIL", value: "info@zefglobal.com", accent: "#A020F0" },
                    { icon: Phone, label: "CONTACT", value: "+91 7899589100", accent: "#FF00FF" },
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

              <div className="grid grid-cols-2 gap-2">
                <a href="mailto:partnerships@zefglobal.com" className="glass-card rounded-sm p-4 text-center hover:border-[#A020F0]/30 transition-all group">
                  <Gamepad2 className="w-5 h-5 mx-auto mb-1.5 text-[#A020F0] group-hover:text-[#B44AFF]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.1em] text-[#8a8a9a]">Sponsor Inquiry</span>
                </a>
                <a href="mailto:partnerships@zefglobal.com" className="glass-card rounded-sm p-4 text-center hover:border-[#FF00FF]/30 transition-all group">
                  <Globe className="w-5 h-5 mx-auto mb-1.5 text-[#FF00FF] group-hover:text-[#FF2D95]" />
                  <span className="text-[10px] font-heading font-bold tracking-[0.1em] text-[#8a8a9a]">Investment Inquiry</span>
                </a>
              </div>

              <div className="glass-card rounded-sm p-3">
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
      <div className="relative glass">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center mb-3 group">
                <Image
                  src="/logo.png"
                  alt="ZARX Esports Forum"
                  width={128}
                  height={128}
                  quality={100}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-[11px] text-[#555568] leading-relaxed max-w-sm mb-3">
                ZARX Esports Forum is a global competitive gaming IP curator building structured esports ecosystems across titles and territories.
              </p>
              <p className="text-[10px] text-[#333345]">&copy; {new Date().getFullYear()} ZARX Esports Forum. All rights reserved.</p>
              <div className="flex gap-4 mt-1.5">
                <Link href="/terms" className="text-[10px] text-[#444458] hover:text-[#A020F0] transition-colors">Terms &amp; Conditions</Link>
                <Link href="/privacy" className="text-[10px] text-[#444458] hover:text-[#A020F0] transition-colors">Privacy Policy</Link>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-heading text-[10px] font-bold tracking-[0.2em] mb-2.5 text-[#8a8a9a] uppercase">{section.title}</h4>
                <ul className="space-y-1.5">
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
