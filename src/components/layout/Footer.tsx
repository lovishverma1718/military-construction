import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
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

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white border-t border-primary/20 pt-20 pb-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3.5 focus:outline-none group">
              <img
                src={images.logo}
                alt={COMPANY.name}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-body text-base font-bold tracking-normal leading-tight text-white">
                  Military Homes
                </span>
                <span className="font-body text-[8px] font-bold tracking-[0.25em] uppercase text-accent leading-none">
                  Construction Ltd.
                </span>
              </div>
            </Link>
            <p className="font-body text-xs leading-relaxed text-white/60 font-light max-w-xs">
              Exceptional architectural wood framing, structural concrete ICF foundations, and residential construction built with precision across British Columbia, Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 lg:pl-12">
            <h4 className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3.5 font-body text-xs text-white/70">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              Core Services
            </h4>
            <nav className="flex flex-col gap-3.5 font-body text-xs text-white/70">
              <Link to="/services" className="hover:text-accent transition-colors">House Framing</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Custom Homes</Link>
              <Link to="/services" className="hover:text-accent transition-colors">ICF Foundations</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Foundation & Renovation</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Residential Construction</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Commercial Framing</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4 font-body text-xs text-white/70">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone size={14} className="text-accent shrink-0" />
                <span>{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.emailPrimary}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail size={14} className="text-accent shrink-0" />
                <span className="break-all">{COMPANY.emailPrimary}</span>
              </a>
              <a href={`mailto:${COMPANY.emailSecondary}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail size={14} className="text-accent shrink-0" />
                <span className="break-all">{COMPANY.emailSecondary}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-accent shrink-0" />
                <span>{COMPANY.location}</span>
              </div>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors mt-2"
              >
                <InstagramIcon size={14} className="text-accent shrink-0" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
          <p className="font-body text-[10px] text-white/40 tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Military Homes Construction Ltd. All rights reserved. Built with structural precision.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group font-body text-[10px] font-bold tracking-[0.2em] uppercase text-accent hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
