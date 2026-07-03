import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY } from '../../constants/company';
import { images } from '../../constants/images';


const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const NAV_LINKS = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          scrolled
            ? 'glass-nav border-b border-accent/20 shadow-subtle'
            : 'bg-transparent border-b border-accent/10 border-dashed'
        }`}
        style={{ height: '90px' }}
      >
        {/* Technical crosshair alignments on header edges */}
        <div className="absolute top-0 left-[3.5%] w-1.5 h-1.5 bg-accent/25 rounded-full -translate-x-1/2 -translate-y-1/2 hidden xl:block" />
        <div className="absolute top-0 right-[3.5%] w-1.5 h-1.5 bg-accent/25 rounded-full translate-x-1/2 -translate-y-1/2 hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-full flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 z-[1000] focus:outline-none group">
            <div className="relative">
              <img
                src={images.logo}
                alt={COMPANY.name}
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-full bg-accent/30" />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-base font-bold tracking-normal text-primary leading-tight">
                Military Homes
              </span>
              <span className="font-body text-[8px] font-bold tracking-[0.25em] uppercase text-accent leading-none">
                Construction Ltd.
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, idx) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <React.Fragment key={link.path}>
                  <Link
                    to={link.path}
                    className={`font-body text-[10px] font-bold tracking-[0.2em] uppercase relative py-2 focus:outline-none ${
                      isActive ? 'text-accent' : 'text-primary/70 hover:text-primary'
                    } transition-colors duration-200`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {idx < NAV_LINKS.length - 1 && (
                    <span className="text-accent/25 font-mono text-[9px] select-none">+</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>



          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-[1000] p-2 text-primary focus:outline-none hover:text-accent transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[998] md:hidden bg-background flex flex-col pt-32 p-8 justify-between"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-heading text-4xl italic font-light tracking-wide block py-2 ${
                        isActive ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Contact & Meta */}
            <div className="border-t border-border pt-8 flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-muted font-body text-xs tracking-wider">
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-3.5 hover:text-accent transition-colors">
                  <Phone size={14} className="text-accent" />
                  <span>{COMPANY.phone}</span>
                </a>
                <a href={`mailto:${COMPANY.emailPrimary}`} className="flex items-center gap-3.5 hover:text-accent transition-colors">
                  <Mail size={14} className="text-accent" />
                  <span className="break-all">{COMPANY.emailPrimary}</span>
                </a>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 hover:text-accent transition-colors"
                >
                  <InstagramIcon size={14} className="text-accent" />
                  <span>Instagram Profile</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
