import React from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1] // Out-expo ease for high-end feel
      }}
      className={`relative overflow-hidden ${className} bg-transparent`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-102 ${imageClassName}`}
        />
      </div>
    </motion.div>
  );
};
