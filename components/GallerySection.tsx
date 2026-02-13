"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Expand, X } from "lucide-react";

const galleryItems = [
  { title: "ZEF Champions League Finals", category: "Champions League", color: "#A020F0" },
  { title: "Winter Wars Grand Finals", category: "Winter Wars", color: "#FF00FF" },
  { title: "Arena Setup - Champions League", category: "Arena", color: "#E6E6FA" },
  { title: "ZEF Champions League Season 2", category: "Champions League", color: "#A020F0" },
  { title: "Winter Wars Opening Ceremony", category: "Winter Wars", color: "#FFB6C1" },
  { title: "Live Broadcast Production", category: "Arena", color: "#FF00FF" },
  { title: "Pro Player Bootcamp Session", category: "Champions League", color: "#A020F0" },
  { title: "Arena Crowd View", category: "Arena", color: "#E6E6FA" },
];

const categories = ["All", "Champions League", "Winter Wars", "Arena"];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7"
          >
            Media
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            Media <span className="text-gradient">Gallery</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 neon-line-h mx-auto"
          />
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-sm text-[10px] font-heading font-bold tracking-[0.15em] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#A020F0] to-[#FF00FF] text-white shadow-lg shadow-[#A020F0]/20"
                  : "border border-[#A020F0]/20 text-[#6b6b80] hover:text-white hover:border-[#A020F0]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredItems.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              layout
              className="gallery-item aspect-[4/3] cursor-pointer group rounded-sm overflow-hidden"
              onClick={() => setSelectedImage(galleryItems.indexOf(item))}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${item.color}12, ${item.color}04)` }}
              >
                <Camera className="w-7 h-7 mb-2 transition-transform group-hover:scale-110 duration-300" style={{ color: `${item.color}50` }} />
                <span className="text-[10px] text-[#555568] font-heading tracking-[0.15em]">{item.category}</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 z-10">
                <p className="text-[11px] font-heading font-bold text-white">{item.title}</p>
                <p className="text-[9px]" style={{ color: `${item.color}cc` }}>{item.category}</p>
              </div>

              <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3.5 h-3.5 text-white/70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#A020F0] transition-colors" onClick={() => setSelectedImage(null)}>
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-4xl w-full mx-4 glass-card rounded-sm p-6 text-center">
            <div
              className="w-full aspect-video rounded-sm mb-5 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${galleryItems[selectedImage].color}15, ${galleryItems[selectedImage].color}06)` }}
            >
              <Camera className="w-14 h-14 text-[#A020F0]/30" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white/90">{galleryItems[selectedImage].title}</h3>
            <p className="text-xs" style={{ color: galleryItems[selectedImage].color }}>{galleryItems[selectedImage].category}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
