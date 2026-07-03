import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('ALIGNING SYSTEM COORDINATES');

  useEffect(() => {
    // Progress count-up simulation (1.2 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Random incremental jump
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Update diagnostic message based on progress percentage
  useEffect(() => {
    if (progress < 30) {
      setStage('MAPPING TIMBER JOIST VECTORS');
    } else if (progress < 60) {
      setStage('CALIBRATING ICF CONCRETE LOADS');
    } else if (progress < 90) {
      setStage('VERIFYING BC BUILDING CODES');
    } else {
      setStage('STRUCTURAL DESIGN COMPLETED');
    }

    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex flex-col justify-between p-12 select-none pointer-events-none">
      
      {/* Top Header metadata */}
      <div className="flex justify-between items-start font-body text-[9px] text-accent tracking-[0.25em] uppercase">
        <span>MILITARY HOMES CONSTRUCTION LTD.</span>
        <span>BC // GENERAL CONTRACTORS</span>
      </div>

      {/* Center Loader */}
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated grid blueprint indicator in bg */}
        <div className="absolute w-[200px] h-[200px] border border-accent/15 opacity-40 animate-pulse bg-blueprint-grid" />
        
        <h2 className="font-heading text-clamp-subheading italic text-primary text-center">
          MHCL // structural assembly
        </h2>
        
        <div className="flex flex-col items-center gap-1.5 font-mono text-[9px] text-muted tracking-widest uppercase">
          <span>{stage}</span>
          <span className="text-accent font-bold text-base mt-2">
            [{progress.toString().padStart(3, '0')}%]
          </span>
        </div>
      </div>

      {/* Bottom Footer metadata */}
      <div className="flex justify-between items-end font-mono text-[8px] text-muted/60 tracking-wider">
        <span>LAT // 49.2827° N // LON // -123.1207° W</span>
        <span>VERSION // 2026.07.03</span>
      </div>

    </div>
  );
};
