import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { images } from '../../constants/images';

const NAV_LINKS = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[80px] z-[999] bg-white border-b border-border shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center">
        <div className="mx-auto max-w-[1200px] w-full px-6 flex items-center justify-between">
          
          {/* Left Flex-Item Slot: Logo */}
          <Link to="/" className="flex items-center z-[1000] focus:outline-none">
            <div className="max-h-[60px] flex items-center">
              <img
                src={images.logo}
                alt="Military Homes Construction"
                className="max-h-[50px] w-auto object-contain"
              />
              <span className="font-body text-lg font-black tracking-tighter text-primary ml-2 uppercase">
                Military Homes
              </span>
            </div>
          </Link>

          {/* Center Flex-Item Slot: Menu Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-[0.9rem] font-bold uppercase relative py-2 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-accent' : 'text-text'
                  } hover:text-accent group`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Far Right Flex-Item Slot: Anchor CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button
                className="bg-accent text-white px-6 py-3 font-bold text-xs uppercase rounded-[4px] border-none tracking-[0.5px] transition-all duration-200 transform hover:-translate-y-[1px] hover:bg-[#240a40] cursor-pointer"
              >
                GET A FREE QUOTE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-[1000] p-2 text-text hover:text-accent focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[998] md:hidden bg-white flex flex-col pt-24 p-8 justify-between"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-body text-xl font-bold uppercase ${
                      isActive ? 'text-accent' : 'text-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-border flex flex-col gap-4">
              <Link to="/contact">
                <button
                  className="w-full bg-accent text-white py-4 font-bold text-sm uppercase rounded-[4px] border-none tracking-[0.5px] cursor-pointer"
                >
                  GET A FREE QUOTE
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
