"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Calendar, Clock, Tag, Share2, Linkedin, Link2, ChevronRight, Search, X, Instagram, MessageCircle, Gamepad2 } from "lucide-react";
import { blogPosts, categories, type BlogPost } from "@/lib/blogData";

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

/* ─── Share Modal Component ─── */
function ShareModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${post.id}` : "";
  const shareText = `${post.title} — ZARX Esports Forum Blog`;
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={14} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      accent: "#0A66C2",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={14} />,
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`,
      accent: "#25D366",
    },
    {
      name: "X",
      icon: <XIcon size={14} />,
      href: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      accent: "#A020F0",
    },
    {
      name: "Instagram",
      icon: <Instagram size={14} />,
      href: `https://www.instagram.com/`,
      accent: "#FF2D95",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card rounded-sm p-6 max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#6b6b80] hover:text-white transition-colors">
          <X size={18} />
        </button>

        <h3 className="font-heading font-bold text-sm mb-1 text-white/90">Share this article</h3>
        <p className="text-[10px] text-[#6b6b80] mb-5 truncate">{post.title}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-sm border transition-colors"
              style={{ borderColor: `${link.accent}30`, background: `${link.accent}08`, color: link.accent }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${link.accent}18`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${link.accent}08`; }}
            >
              {link.icon}
              <span className="text-[10px] font-heading tracking-wider text-white/80">{link.name}</span>
            </a>
          ))}
        </div>

        <button
          onClick={copyLink}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
        >
          <Link2 size={14} className="text-[#6b6b80]" />
          <span className="text-[10px] font-heading tracking-wider text-white/80">
            {copied ? "Link Copied!" : "Copy Link"}
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Blog Card Component ─── */
function BlogCard({ post, onShare }: { post: BlogPost; onShare: (post: BlogPost) => void }) {
  const accentMap: Record<string, string> = {
    News: "#A020F0",
    Tournaments: "#FF00FF",
    Industry: "#B44AFF",
    Guides: "#00F0FF",
    Interviews: "#FF2D95",
    Updates: "#FFD700",
  };
  const accent = accentMap[post.category] || "#A020F0";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-sm overflow-hidden group flex flex-col h-full relative"
      id={`post-${post.id}`}
    >
      {/* Full card clickable link */}
      <a href={`/blog/${post.id}`} className="absolute inset-0 z-10" aria-label={`Read: ${post.title}`} />

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-[#0a0a12] flex items-center justify-center">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <Gamepad2 className="w-12 h-12 text-[#A020F0]/20" />
        )}
        <div className="absolute top-3 left-3">
          <span
            className="text-[8px] font-heading font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm"
            style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3 text-[#555568]">
          <div className="flex items-center gap-1">
            <Calendar size={10} />
            <span className="text-[9px] font-heading tracking-wider">{post.date}</span>
          </div>
          <div className="w-[1px] h-2.5 bg-white/10" />
          <div className="flex items-center gap-1">
            <Clock size={10} />
            <span className="text-[9px] font-heading tracking-wider">{post.readTime}</span>
          </div>
        </div>

        <h3 className="font-heading font-bold text-sm text-white/90 mb-2 group-hover:text-[#A020F0] transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>

        <p className="text-[10px] text-[#6b6b80] leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-[8px] font-heading tracking-wider text-[#555568] px-2 py-0.5 rounded-sm border border-white/5 bg-white/[0.02]">
              <Tag size={7} />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-[9px] text-[#555568] font-heading tracking-wider">
            By <span className="text-white/60">{post.author}</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onShare(post); }}
              className="relative z-20 flex items-center gap-1 text-[9px] text-[#555568] hover:text-[#A020F0] transition-colors font-heading tracking-wider"
            >
              <Share2 size={11} />
              Share
            </button>
            <span className="text-[#A020F0]/30">|</span>
            <span className="flex items-center gap-0.5 text-[9px] text-[#A020F0]/60 group-hover:text-[#A020F0] transition-colors font-heading tracking-wider">
              Read More <ChevronRight size={10} />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Featured Post Component ─── */
function FeaturedPost({ post, onShare }: { post: BlogPost; onShare: (post: BlogPost) => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass-card hud-corners rounded-sm overflow-hidden mb-12 group relative"
      id={`post-${post.id}`}
    >
      {/* Full card clickable link */}
      <a href={`/blog/${post.id}`} className="absolute inset-0 z-10" aria-label={`Read: ${post.title}`} />

      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative lg:w-1/2 h-64 lg:h-auto bg-[#0a0a12] overflow-hidden flex items-center justify-center">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain p-10 group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <Gamepad2 className="w-16 h-16 text-[#A020F0]/20" />
          )}
          <div className="absolute top-4 left-4">
            <span className="text-[8px] font-heading font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm bg-[#A020F0]/20 text-[#A020F0] border border-[#A020F0]/30">
              Featured
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050508]/80 hidden lg:block" />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center relative">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#A020F0]/[0.04] rounded-full blur-[80px]" />

          <div className="flex items-center gap-3 mb-4 text-[#555568] relative z-10">
            <span className="text-[8px] font-heading font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm bg-[#FF00FF]/10 text-[#FF00FF] border border-[#FF00FF]/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={10} />
              <span className="text-[9px] font-heading tracking-wider">{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={10} />
              <span className="text-[9px] font-heading tracking-wider">{post.readTime}</span>
            </div>
          </div>

          <h2 className="font-heading font-black text-xl lg:text-2xl text-white/95 mb-4 leading-tight relative z-10 group-hover:text-[#A020F0] transition-colors">
            {post.title}
          </h2>

          <p className="text-[11px] text-[#8a8a9a] leading-relaxed mb-6 relative z-10">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-[8px] font-heading tracking-wider text-[#555568] px-2.5 py-1 rounded-sm border border-white/5 bg-white/[0.02]">
                <Tag size={8} />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] text-[#555568] font-heading tracking-wider">
              By <span className="text-white/60">{post.author}</span>
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onShare(post); }}
                className="relative z-20 flex items-center gap-1.5 text-[10px] text-[#555568] hover:text-[#A020F0] transition-colors font-heading tracking-wider"
              >
                <Share2 size={12} />
                Share
              </button>
              <span className="flex items-center gap-1 text-[10px] text-[#A020F0] group-hover:text-[#A020F0]/80 transition-colors font-heading tracking-wider font-bold">
                Read Full Article <ChevronRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Blog Page ─── */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sharePost, setSharePost] = useState<BlogPost | null>(null);

  const featuredPost = blogPosts.find((p) => p.featured);
  const filteredPosts = blogPosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) =>
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
              >
                Blog & News
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading font-black mb-4"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
              >
                Latest from <span className="text-gradient">ZEF</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-20 neon-line-h mx-auto mb-5"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#6b6b80] text-sm max-w-lg mx-auto leading-relaxed"
              >
                News, insights, and updates from the ZARX Esports Forum ecosystem.
              </motion.p>
            </div>

            {/* Search & Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              {/* Search */}
              <div className="relative max-w-md mx-auto mb-8">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555568]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-sm bg-white/[0.03] border border-white/[0.06] text-xs text-white/80 font-heading tracking-wider placeholder:text-[#444458] focus:outline-none focus:border-[#A020F0]/30 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555568] hover:text-white transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-sm text-[9px] font-heading font-bold tracking-[0.15em] uppercase transition-all duration-300 border ${
                      activeCategory === cat
                        ? "bg-[#A020F0]/15 border-[#A020F0]/30 text-[#A020F0]"
                        : "bg-white/[0.02] border-white/[0.05] text-[#555568] hover:border-white/10 hover:text-white/60"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Featured Post */}
            {featuredPost && activeCategory === "All" && !searchQuery && (
              <FeaturedPost post={featuredPost} onShare={setSharePost} />
            )}

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} onShare={setSharePost} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-[#555568] font-heading text-sm tracking-wider">No articles found matching your criteria.</p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                  className="mt-4 text-[10px] text-[#A020F0] font-heading tracking-wider hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-20 glass-card hud-corners rounded-sm p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#A020F0]/[0.05] rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF00FF]/[0.03] rounded-full blur-[100px]" />

              <div className="relative z-10">
                <h3 className="font-heading font-black text-lg md:text-xl mb-3 text-white/95">
                  Stay in the <span className="text-gradient">Loop</span>
                </h3>
                <p className="text-[11px] text-[#6b6b80] mb-6 max-w-md mx-auto leading-relaxed">
                  Get the latest esports news, tournament announcements, and exclusive ZEF updates delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-sm bg-white/[0.04] border border-white/[0.08] text-xs text-white/80 font-heading tracking-wider placeholder:text-[#444458] focus:outline-none focus:border-[#A020F0]/30 transition-colors"
                  />
                  <button className="btn-primary text-xs px-6 py-3 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Share Modal */}
      {sharePost && <ShareModal post={sharePost} onClose={() => setSharePost(null)} />}
    </main>
  );
}
