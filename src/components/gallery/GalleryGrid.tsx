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
      
      {/* Editorial Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 [column-fill:_balance] w-full">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openLightbox(idx)}
            className="break-inside-avoid mb-10 relative group cursor-pointer border border-border p-4 bg-background hover:shadow-premium hover:border-accent/30 transition-all duration-500 rounded-2xl"
          >
            {/* Technical Drafting Alignment Corner Dots */}
            <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-accent/20" />
            <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-accent/20" />
            <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-accent/20" />
            <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-accent/20" />

            {/* Image Wrapper */}
            <div className="w-full overflow-hidden flex items-center justify-center bg-secondary-bg border border-border/40 relative rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-102 rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/90 backdrop-blur-md rounded-full text-primary border border-border">
                  <Maximize2 size={14} />
                </span>
              </div>
            </div>

            {/* Print Editorial Caption Labels (Default visible, eliminating templated feel) */}
            <div className="pt-4 mt-3 border-t border-accent/15 flex items-start justify-between font-body">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold tracking-[0.2em] text-accent uppercase">
                  {img.category || 'Portfolio Spec'}
                </span>
                <span className="text-[11px] font-heading font-normal italic text-primary lowercase leading-tight">
                  {img.caption || img.alt}
                </span>
              </div>
              <div className="text-right flex flex-col gap-0.5 text-[8px] font-mono text-muted/70 tracking-widest uppercase">
                <span>REF // MHCL-0{idx + 1}</span>
                <span>BC // 49.28° N</span>
              </div>
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
            className="fixed inset-0 z-[9999] bg-primary/98 flex flex-col items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-50 focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={navigatePrev}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white transition-colors z-50 focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={navigateNext}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white transition-colors z-50 focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image Canvas */}
            <div className="relative max-w-4xl w-full h-[75vh] flex items-center justify-center">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="text-center mt-6 max-w-xl text-white px-4">
              <span className="font-body text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
                {images[selectedIndex].category || 'Portfolio'}
              </span>
              <h3 className="font-heading text-2xl italic font-light mt-1 text-white">
                {images[selectedIndex].caption || images[selectedIndex].alt}
              </h3>
              <p className="font-body text-[11px] text-muted mt-2 tracking-widest uppercase">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
