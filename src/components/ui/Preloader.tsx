import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants/images';
import { COMPANY } from '../../constants/company';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant, slightly slower loading simulation (1.5 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#111111] z-[9999] flex flex-col justify-between p-12 md:p-20 select-none cursor-none">
      
      {/* Top micro-typography */}
      <div className="flex justify-between items-start font-body text-[8px] md:text-[9px] text-[#FAF9F6]/30 tracking-[0.3em] uppercase">
        <span>{COMPANY.shortName}</span>
        <span>BRITISH COLUMBIA</span>
      </div>

      {/* Center Branded Loader */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-sm mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={images.logo}
            alt={COMPANY.name}
            className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert"
          />
          <div className="flex flex-col mt-2">
            <span className="font-body text-lg md:text-xl font-bold tracking-[0.05em] text-[#FAF9F6]">
              Military Homes
            </span>
            <span className="font-body text-[9px] font-bold tracking-[0.3em] uppercase text-accent mt-1">
              Construction Ltd.
            </span>
          </div>
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-[1px] bg-[#FAF9F6]/10 relative mt-4 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Bottom coordinate-free luxury detail */}
      <div className="flex justify-between items-end font-body text-[8px] md:text-[9px] text-[#FAF9F6]/20 tracking-[0.2em] uppercase">
        <span>PREMIUM BUILDERS</span>
        <span>EST. 2026</span>
      </div>

    </div>
  );
};
