"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Our IPs", href: "#ips" },
  { name: "NSL 2026", href: "/nsl2026" },
  { name: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2.5 bg-[#050508]/85 backdrop-blur-xl border-b border-white/[0.04]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-[4px] flex items-center justify-center font-heading font-black text-xs bg-gradient-to-br from-[#A020F0] to-[#7c3aed]">
              Z
            </div>
            <span className="font-heading font-bold text-[13px] tracking-[0.12em] text-white/90 hidden sm:block">ZARX</span>
          </Link>

          {/* Desktop Nav — minimal */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[12px] font-medium tracking-wide text-[#8a8a9a] hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[12px] font-medium tracking-wide text-[#8a8a9a] hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Single CTA */}
          <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-white bg-[#A020F0] rounded-[3px] hover:bg-[#8b18d4] transition-colors duration-200">
            Contact
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-[#8a8a9a] hover:text-white transition-colors"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#050508]/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                >
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-lg font-heading font-semibold tracking-[0.08em] text-[#8a8a9a] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-lg font-heading font-semibold tracking-[0.08em] text-[#8a8a9a] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-8 py-3 text-sm font-heading font-semibold tracking-[0.1em] uppercase text-white bg-[#A020F0] rounded-[3px]"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
