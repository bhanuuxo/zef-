"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Tag, Share2, ChevronLeft, ChevronRight, Linkedin, Instagram, MessageCircle, Link2, X, ArrowUp, Gamepad2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, type BlogPost } from "@/lib/blogData";

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

/* ─── Share Modal ─── */
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
    { name: "LinkedIn", icon: <Linkedin size={14} />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, accent: "#0A66C2" },
    { name: "WhatsApp", icon: <MessageCircle size={14} />, href: `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`, accent: "#25D366" },
    { name: "X", icon: <XIcon size={14} />, href: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, accent: "#A020F0" },
    { name: "Instagram", icon: <Instagram size={14} />, href: `https://www.instagram.com/`, accent: "#FF2D95" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card rounded-sm p-6 max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#6b6b80] hover:text-white transition-colors"><X size={18} /></button>
        <h3 className="font-heading font-bold text-sm mb-1 text-white/90">Share this article</h3>
        <p className="text-[10px] text-[#6b6b80] mb-5 truncate">{post.title}</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {shareLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
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
        <button onClick={copyLink} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
          <Link2 size={14} className="text-[#6b6b80]" />
          <span className="text-[10px] font-heading tracking-wider text-white/80">{copied ? "Link Copied!" : "Copy Link"}</span>
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Markdown-like Content Renderer ─── */
function ArticleContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="article-prose">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-4" />;

        // H2
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="font-heading font-black text-lg md:text-xl text-white/95 mt-10 mb-4 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#A020F0]">
              {trimmed.slice(3)}
            </h2>
          );
        }

        // H3
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="font-heading font-bold text-sm md:text-base text-white/90 mt-8 mb-3">
              {trimmed.slice(4)}
            </h3>
          );
        }

        // Table header
        if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
          // Check if next line is separator
          const nextLine = lines[i + 1]?.trim();
          if (nextLine && /^\|[\s\-|]+\|$/.test(nextLine)) {
            // This is a table header row
            const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
            return (
              <div key={i} className="overflow-x-auto mt-4 mb-6">
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-[#A020F0]/20">
                      {cells.map((cell, j) => (
                        <th key={j} className="py-2 px-3 text-left font-heading font-bold text-[#A020F0] tracking-wider uppercase text-[9px]">{cell}</th>
                      ))}
                    </tr>
                  </thead>
                </table>
              </div>
            );
          }
          // Separator row
          if (/^\|[\s\-|]+\|$/.test(trimmed)) return null;
          // Data row
          const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
          return (
            <div key={i} className="overflow-x-auto -mt-5 mb-1">
              <table className="w-full text-[11px]">
                <tbody>
                  <tr className="border-b border-white/5">
                    {cells.map((cell, j) => (
                      <td key={j} className="py-2 px-3 text-[#8a8a9a]">{cell}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }

        // Numbered list
        if (/^\d+\.\s/.test(trimmed)) {
          const text = trimmed.replace(/^\d+\.\s/, "");
          return (
            <div key={i} className="flex gap-3 mb-2 pl-2">
              <span className="text-[#A020F0] font-heading font-bold text-xs mt-0.5 shrink-0">{trimmed.match(/^\d+/)?.[0]}.</span>
              <p className="text-[11px] md:text-xs text-[#8a8a9a] leading-relaxed">{renderInline(text)}</p>
            </div>
          );
        }

        // Unordered list
        if (trimmed.startsWith("- ")) {
          const text = trimmed.slice(2);
          return (
            <div key={i} className="flex gap-3 mb-2 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A020F0]/40 mt-1.5 shrink-0" />
              <p className="text-[11px] md:text-xs text-[#8a8a9a] leading-relaxed">{renderInline(text)}</p>
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={i} className="text-[11px] md:text-xs text-[#8a8a9a] leading-[1.8] mb-3">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

/* Inline bold/italic rendering */
function renderInline(text: string) {
  const parts: (string | JSX.Element)[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) parts.push(remaining.slice(0, boldMatch.index));
      parts.push(<strong key={key++} className="text-white/80 font-semibold">{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
    } else {
      parts.push(remaining);
      break;
    }
  }
  return <>{parts}</>;
}

/* ─── Blog Post Page ─── */
export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [sharePost, setSharePost] = useState<BlogPost | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const post = useMemo(() => blogPosts.find((p) => p.id === parseInt(params.id)), [params.id]);

  // Related posts: same category, excluding current
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.id !== post.id && p.category === post.category)
      .slice(0, 3);
  }, [post]);

  // Next/previous posts
  const currentIndex = post ? blogPosts.findIndex((p) => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Scroll to top listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setShowScrollTop(window.scrollY > 600));
  }

  const accentMap: Record<string, string> = {
    Global: "#A020F0",
    National: "#FF00FF",
    Esports: "#00F0FF",
  };

  if (!post) {
    return (
      <main className="relative bg-[#050508] min-h-screen overflow-hidden">
        <Navbar />
        <div className="pt-24 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-heading font-black text-2xl text-white/90 mb-4">Article Not Found</h1>
            <p className="text-[#6b6b80] text-sm mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className="btn-primary text-xs px-6 py-3 inline-flex items-center gap-2">
              <ChevronLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const accent = accentMap[post.category] || "#A020F0";

  return (
    <main className="relative bg-[#050508] min-h-screen overflow-hidden">
      <Navbar />

      <div className="pt-24">
        <article className="relative py-12 md:py-20 overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20" style={{ background: accent }} />
          <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[#A020F0]/[0.05] rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8">
            {/* Back link */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-[10px] text-[#555568] hover:text-[#A020F0] transition-colors font-heading tracking-wider mb-8 group">
                <ChevronLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Category + Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span
                className="text-[8px] font-heading font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm"
                style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}
              >
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-[#555568]">
                <Calendar size={10} />
                <span className="text-[9px] font-heading tracking-wider">{post.date}</span>
              </div>
              <div className="w-[1px] h-3 bg-white/10" />
              <div className="flex items-center gap-1 text-[#555568]">
                <Clock size={10} />
                <span className="text-[9px] font-heading tracking-wider">{post.readTime}</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-white/95 leading-tight mb-6"
            >
              {post.title}
            </motion.h1>

            {/* Author + Share row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-8"
            >
              <span className="text-[10px] text-[#555568] font-heading tracking-wider">
                By <span className="text-white/70">{post.author}</span>
              </span>
              <button
                onClick={() => setSharePost(post)}
                className="flex items-center gap-1.5 text-[10px] text-[#555568] hover:text-[#A020F0] transition-colors font-heading tracking-wider"
              >
                <Share2 size={12} />
                Share Article
              </button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="relative aspect-[4/5] max-h-[500px] glass-card rounded-sm overflow-hidden mb-10 bg-[#0a0a12] flex items-center justify-center"
            >
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <Gamepad2 className="w-16 h-16 text-[#A020F0]/20" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/40 to-transparent" />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            >
              <ArticleContent content={post.content} />
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-12 pt-6 border-t border-white/[0.06]"
            >
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-[8px] font-heading tracking-wider text-[#555568] px-3 py-1.5 rounded-sm border border-white/5 bg-white/[0.02]">
                  <Tag size={8} />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Share CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-sm p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div>
                <h4 className="font-heading font-bold text-xs text-white/90 mb-1">Enjoyed this article?</h4>
                <p className="text-[10px] text-[#6b6b80]">Share it with your esports community.</p>
              </div>
              <button
                onClick={() => setSharePost(post)}
                className="btn-primary text-[10px] px-5 py-2.5 inline-flex items-center gap-2"
              >
                <Share2 size={12} />
                Share Article
              </button>
            </motion.div>

            {/* Previous / Next navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {prevPost ? (
                <Link href={`/blog/${prevPost.id}`} className="glass-card rounded-sm p-5 group hover:border-[#A020F0]/20 transition-colors">
                  <span className="text-[8px] text-[#555568] font-heading tracking-[0.2em] uppercase">Previous</span>
                  <p className="text-[11px] text-white/70 font-heading mt-1 line-clamp-2 group-hover:text-[#A020F0] transition-colors">{prevPost.title}</p>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link href={`/blog/${nextPost.id}`} className="glass-card rounded-sm p-5 group hover:border-[#A020F0]/20 transition-colors text-right">
                  <span className="text-[8px] text-[#555568] font-heading tracking-[0.2em] uppercase">Next</span>
                  <p className="text-[11px] text-white/70 font-heading mt-1 line-clamp-2 group-hover:text-[#A020F0] transition-colors">{nextPost.title}</p>
                </Link>
              ) : <div />}
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="font-heading font-black text-base text-white/90 mb-6">
                  More in <span style={{ color: accent }}>{post.category}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.id} href={`/blog/${rp.id}`} className="glass-card rounded-sm overflow-hidden group">
                      <div className="relative aspect-[4/5] bg-[#0a0a12] flex items-center justify-center">
                        {rp.image ? (
                          <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <Gamepad2 className="w-10 h-10 text-[#A020F0]/20" />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={8} className="text-[#555568]" />
                          <span className="text-[8px] text-[#555568] font-heading tracking-wider">{rp.date}</span>
                        </div>
                        <h4 className="text-[10px] font-heading font-bold text-white/80 leading-snug line-clamp-2 group-hover:text-[#A020F0] transition-colors">
                          {rp.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>

      <Footer />

      {/* Share Modal */}
      <AnimatePresence>
        {sharePost && <ShareModal post={sharePost} onClose={() => setSharePost(null)} />}
      </AnimatePresence>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-sm bg-[#A020F0]/20 border border-[#A020F0]/30 flex items-center justify-center text-[#A020F0] hover:bg-[#A020F0]/30 transition-colors"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
