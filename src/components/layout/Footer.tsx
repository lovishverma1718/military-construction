import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY } from '../../constants/company';
import { images } from '../../constants/images';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
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
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
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
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
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
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-[#240a40] text-white pt-[60px] pb-[30px] border-t border-white/10 font-body">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Upper Newsletter Horizon Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 mb-12">
          <div className="font-heading text-lg sm:text-xl font-bold max-w-full lg:max-w-[50%] text-white text-left uppercase leading-snug">
            SIGN UP OUR NEWSLETTER TO GET UPDATE INFORMATION, NEWS AND FREE INSIGHT.
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto max-w-md shrink-0">
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="flex-grow bg-white border-none p-4 text-[#111111] font-body text-sm rounded-l-[4px] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-[#5900cc] text-white font-bold text-xs uppercase px-6 py-4 rounded-r-[4px] border-none transition-colors duration-200 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Four Symmetric Vertical Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Corporate Identity */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <img
                src={images.logo}
                alt="Military Homes Construction"
                className="max-h-[40px] w-auto object-contain brightness-0 invert"
              />
              <span className="font-heading text-lg font-black tracking-tighter text-white ml-2 uppercase">
                Military Homes
              </span>
            </div>
            <p className="font-body text-xs text-white/60 leading-relaxed">
              We govern multi-family framing assemblies and heavy-duty structural concrete foundations across British Columbia.
            </p>
            <div className="flex flex-col gap-2.5 font-body text-xs text-white/70">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone size={14} className="text-accent shrink-0" />
                <span>{COMPANY.phone}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>{COMPANY.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Map Array */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3 font-body text-xs text-white/70 uppercase">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-accent transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Service Pillars Array */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
              Our Pillars
            </h4>
            <nav className="flex flex-col gap-3 font-body text-xs text-white/70 uppercase">
              <Link to="/services" className="hover:text-accent transition-colors">Multi-Family Framing</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Commercial Foundations</Link>
              <Link to="/services" className="hover:text-accent transition-colors">ICF Concrete Pours</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Heavy Timber & CLT</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Structural Renovations</Link>
            </nav>
          </div>

          {/* Column 4: Social Metric Hub */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
              Connect With Us
            </h4>
            <p className="font-body text-xs text-white/60 leading-relaxed mb-1">
              Follow our commercial sites and multi-family framing progress updates.
            </p>
            <div className="flex items-center gap-3 text-white/80">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-accent hover:text-white rounded-[4px] transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-accent hover:text-white rounded-[4px] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-accent hover:text-white rounded-[4px] transition-colors duration-200"
                aria-label="Facebook Page"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-[30px]">
          <p className="font-body text-[10px] text-white/40 tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Military Homes Construction Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group font-heading text-[10px] font-bold tracking-[0.2em] uppercase text-accent hover:text-white transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};
