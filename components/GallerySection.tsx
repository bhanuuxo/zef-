"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Expand, X } from "lucide-react";
import Image from "next/image";
import { albums } from "@/components/galleryData";

// Extract folder from image path
const getFolderFromPath = (path: string): string => {
  const parts = path.split("/");
  if (parts.length >= 4) {
    return parts[4]; // Extract the folder name (Champions, Match Day, etc)
  }
  return "Other";
};

// Transform albums data into gallery items with folder grouping
const getGalleryItems = () => {
  let items: any[] = [];
  
  albums.forEach((album) => {
    album.images.forEach((imagePath) => {
      const folder = getFolderFromPath(imagePath);
      const title = imagePath.split("/").pop()?.replace(/\.(png|jpg|jpeg|gif)$/i, "") || "Image";
      
      items.push({
        title: `${title} (${folder})`,
        category: album.category,
        color: album.color,
        image: imagePath,
        folder: folder,
      });
    });
  });
  
  return items;
};

const galleryItems = getGalleryItems();
const categories = ["All", "Winter Wars 1", "Winter Wars 2", "Champions League"];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-28 md:py-36 overflow-hidden">


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
        {activeCategory === "Champions League" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <Camera className="w-16 h-16 text-[#A020F0]/50 mb-4" />
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Champions League</h3>
            <p className="text-[#a0a0b8]">Stay Tuned for more images</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-max">
            {filteredItems.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              layout
              className="gallery-item cursor-pointer group rounded-sm overflow-hidden relative"
              onClick={() => setSelectedImage(galleryItems.indexOf(item))}
            >
              {item.image ? (
                <>
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain"
                      quality={80}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 z-10">
                    <p className="text-[11px] font-heading font-bold text-white line-clamp-2">{item.title}</p>
                    <p className="text-[9px]" style={{ color: `${item.color}cc` }}>{item.folder || item.category}</p>
                  </div>
                </>
              ) : (
                <div
                  className="w-full h-64 flex flex-col items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${item.color}12, ${item.color}04)` }}
                >
                  <Camera className="w-7 h-7 mb-2 transition-transform group-hover:scale-110 duration-300" style={{ color: `${item.color}50` }} />
                  <span className="text-[10px] text-[#555568] font-heading tracking-[0.15em] text-center px-2">{item.category}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 z-10">
                    <p className="text-[11px] font-heading font-bold text-white">{item.title}</p>
                    <p className="text-[9px]" style={{ color: `${item.color}cc` }}>{item.category}</p>
                  </div>
                </div>
              )}

              <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3.5 h-3.5 text-white/70" />
              </div>
            </motion.div>
          ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#A020F0] transition-colors" onClick={() => setSelectedImage(null)}>
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-4xl w-full mx-auto glass-card rounded-sm p-6 max-h-[90vh] overflow-y-auto">
            {galleryItems[selectedImage]?.image ? (
              <>
                <div className="w-full rounded-sm mb-5 flex items-center justify-center bg-black/40">
                  <Image
                    src={galleryItems[selectedImage].image}
                    alt={galleryItems[selectedImage].title}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain max-h-[60vh]"
                    quality={100}
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-white/90">{galleryItems[selectedImage].title}</h3>
                <p className="text-xs" style={{ color: galleryItems[selectedImage].color }}>{galleryItems[selectedImage].folder || galleryItems[selectedImage].category}</p>
              </>
            ) : (
              <div
                className="w-full aspect-video rounded-sm mb-5 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${galleryItems[selectedImage]?.color}15, ${galleryItems[selectedImage]?.color}06)` }}
              >
                <Camera className="w-14 h-14 text-[#A020F0]/30" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
