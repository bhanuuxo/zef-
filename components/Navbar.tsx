"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  {
    name: "Ecosystem",
    href: "#ecosystem",
    children: [
      { name: "IP Design & Curation", href: "#ecosystem" },
      { name: "Media Production", href: "#ecosystem" },
      { name: "Operations Management", href: "#ecosystem" },
      { name: "Player Development", href: "#ecosystem" },
    ],
  },
  { name: "Our IPs", href: "#ips" },
  { name: "Timeline", href: "#timeline" },
  { name: "NSL 2026", href: "/nsl2026" },
  { name: "Partners", href: "#partners" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "py-2 bg-[#050508]/80 backdrop-blur-2xl border-b border-[#A020F0]/10 shadow-[0_4px_30px_rgba(160,32,240,0.08)]"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="w-9 h-9 flex items-center justify-center font-heading font-black text-sm relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #A020F0, #FF00FF)",
                  clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                }}
              >
                <span className="relative z-10">Z</span>
              </div>
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #A020F0, #FF00FF)" }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-sm tracking-[0.15em] text-white block leading-none">ZARX</span>
              <span className="font-heading text-[8px] text-[#A020F0]/60 tracking-[0.25em] block mt-0.5">ESPORTS FORUM</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-[11px] font-heading font-semibold tracking-[0.12em] uppercase text-[#8a8aa0] hover:text-white transition-colors duration-300 flex items-center gap-1 relative group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-[#A020F0] to-[#FF00FF] group-hover:w-3/4 transition-all duration-400" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="px-3 py-2 text-[11px] font-heading font-semibold tracking-[0.12em] uppercase text-[#8a8aa0] hover:text-white transition-colors duration-300 flex items-center gap-1 relative group"
                  >
                    <span>{link.name}</span>
                    {link.children && (
                      <ChevronDown className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180 opacity-50" />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-[#A020F0] to-[#FF00FF] group-hover:w-3/4 transition-all duration-400" />
                  </a>
                )}

                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-60 rounded-sm overflow-hidden border border-[#A020F0]/15"
                      style={{ background: "rgba(8,8,15,0.95)", backdropFilter: "blur(24px)" }}
                    >
                      <div className="h-[1px] bg-gradient-to-r from-[#A020F0]/40 via-[#FF00FF]/20 to-transparent" />
                      <div className="py-1">
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-[10px] font-heading tracking-[0.1em] uppercase text-[#8a8aa0] hover:text-white hover:bg-[#A020F0]/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#A020F0]"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#invest" className="btn-outline text-[9px] py-2 px-5">
              <span>Invest</span>
            </a>
            <a href="#register" className="btn-primary text-[9px] py-2 px-5">
              <span>Register</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-[#8a8aa0] hover:text-white transition-colors relative"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(5,5,8,0.97)", backdropFilter: "blur(30px)" }}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-fine opacity-30" />

            <div className="relative flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                >
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-4 text-base font-heading font-bold tracking-[0.1em] uppercase text-[#8a8aa0] hover:text-white border-b border-[#A020F0]/8 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-4 text-base font-heading font-bold tracking-[0.1em] uppercase text-[#8a8aa0] hover:text-white border-b border-[#A020F0]/8 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a href="#invest" className="btn-outline text-center text-xs"><span>Invest With Us</span></a>
                <a href="#register" className="btn-primary text-center text-xs"><span>Register Now</span></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
