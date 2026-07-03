import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export const ScrollLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    const updateRaf = (time: number) => {
      lenis.raf(time);
    };

    // Use requestAnimationFrame loop for Lenis
    let rafId = requestAnimationFrame(function rafLoop(time) {
      updateRaf(time);
      rafId = requestAnimationFrame(rafLoop);
    });

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Handle Route Transitions and Anchor Scrolling
  useEffect(() => {
    // Reset window scroll coordinate immediately on route change
    window.scrollTo(0, 0);
    
    // If a route hash exists (e.g. /services#house-framing), smooth scroll to it
    if (location.hash && lenisRef.current) {
      const targetHash = location.hash;
      setTimeout(() => {
        lenisRef.current?.scrollTo(targetHash, { 
          offset: -90, // Offsets the sticky navbar height
          duration: 1.2,
          immediate: false
        });
      }, 100);
    }
  }, [location.pathname, location.hash]);

  // Scroll Progress Bar tracking
  useEffect(() => {
    const handleScrollProgress = () => {
      if (!progressBarRef.current) return;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      progressBarRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', handleScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 w-full h-[2.5px] bg-accent z-[9999] origin-left transform scale-x-0 transition-transform duration-75 ease-out"
      />

      {children}
    </>
  );
};
