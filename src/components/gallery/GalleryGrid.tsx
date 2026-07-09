import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const navigatePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  const navigateNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  // Keyboard hooks for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <div className={`w-full ${className}`}>
      
      {/* Strict 3-Column Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            onClick={() => openLightbox(idx)}
            className="flex flex-col relative group cursor-pointer bg-white"
          >
            {/* Asset Frame Bounds: Uniform aspect-ratio 4:3 */}
            <div className="w-full aspect-[4/3] overflow-hidden border border-border bg-secondary-bg relative rounded-[4px]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#240a40]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3.5 bg-accent text-white rounded-[4px] shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>

            {/* Typographic Metadata Blocks */}
            <div className="py-4 bg-white text-left flex flex-col">
              <span className="font-heading text-sm font-extrabold uppercase text-[#111111] leading-tight">
                {img.caption || img.alt}
              </span>
              <span className="font-body text-[10px] text-accent font-bold tracking-widest uppercase mt-1">
                {img.category || 'Structural Spec'}
              </span>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] bg-[#240a40]/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={navigatePrev}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={navigateNext}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image Canvas */}
            <div className="relative max-w-4xl w-full h-[70vh] flex items-center justify-center">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-[4px] border border-white/10"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="text-center mt-6 max-w-xl text-white px-4">
              <h3 className="font-heading text-xl font-extrabold uppercase">
                {images[selectedIndex].caption || images[selectedIndex].alt}
              </h3>
              <span className="font-body text-xs text-accent font-bold tracking-wider uppercase mt-1 block">
                {images[selectedIndex].category || 'Portfolio'}
              </span>
              <p className="font-body text-[10px] text-white/60 mt-2 tracking-widest uppercase">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
