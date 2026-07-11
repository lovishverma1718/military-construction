import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { Award, Clock, UserCheck } from 'lucide-react';
import { images } from '../constants/images';
import { StaggerTestimonials } from '../components/ui/stagger-testimonials';

export const Home: React.FC = () => {
  // Progress loaders view triggers
  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, { once: true, margin: "-100px" });

  return (
    <div className="w-full bg-white text-[#111111] pt-[80px]">
      
      {/* II. THE HOMEPAGE HERO HEROIC BLOCK */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] bg-black overflow-hidden flex items-center">
        
        {/* The HTML5 Video Stream Layer */}
        <div className="hero-video-wrapper absolute top-0 left-0 w-full h-full z-[1]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-100"
            poster={images.image12}
          >
            <source src={images.mainVideo} type="video/mp4" />
          </video>
        </div>

        {/* Color Overlay Mask */}
        <div 
          className="absolute inset-0 z-[2] w-full h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(36, 10, 64, 0.8) 0%, rgba(0, 0, 0, 0.65) 100%)'
          }}
        />

        {/* Foreground Copy Stack Layer */}
        <div className="mx-auto max-w-[1200px] w-full px-6 z-[3] flex flex-col justify-center h-full">
          <div className="max-w-[800px] flex flex-col items-start gap-4">
            <span className="font-heading text-xs font-extrabold tracking-[0.3em] text-accent uppercase">
              Heavy Commercial & Structural Framing
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-left uppercase">
              Welcome to Military Homes Construction Ltd
            </h1>
            <p className="font-body text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mt-4">
              We govern multi-family framing assemblies and heavy-duty structural concrete foundations across British Columbia. Built for speed, engineered for strength, and delivered on schedule.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link to="/services">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold text-xs uppercase rounded-[4px] cursor-pointer hover:bg-white hover:text-[#240a40] transition-all duration-300">
                  SEE OUR SERVICES
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-accent border-2 border-accent text-white px-8 py-4 font-bold text-xs uppercase rounded-[4px] cursor-pointer hover:bg-[#5900cc] hover:border-[#5900cc] transition-all duration-300">
                  GET A FREE QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* III. HOMEPAGE TRIPLE-CARD VALUE MATRIX */}
      <section className="py-20 bg-white border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="font-heading text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
              Three reasons why people choose us
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-text uppercase">
              Our Core Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="value-card group border border-border bg-white p-10 text-center shadow-[0_8px_24px_rgba(36, 10, 64, 0.06)] flex flex-col items-center rounded-[4px] transition-all duration-300 hover:bg-[#240a40] hover:border-[#240a40] hover:-translate-y-[5px]">
              <div className="p-4 bg-accent/5 rounded-full text-accent group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                <Award size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-text mt-6 mb-4 group-hover:text-white transition-colors duration-300">
                Unyielding Quality
              </h3>
              <p className="font-body text-sm text-muted group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                Every concrete assembly and wall layout complies with strict engineering guidelines and provincial building standards.
              </p>
            </div>
 
            {/* Card 2 */}
            <div className="value-card group border border-border bg-white p-10 text-center shadow-[0_8px_24px_rgba(36, 10, 64, 0.06)] flex flex-col items-center rounded-[4px] transition-all duration-300 hover:bg-[#240a40] hover:border-[#240a40] hover:-translate-y-[5px]">
              <div className="p-4 bg-accent/5 rounded-full text-accent group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                <Clock size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-text mt-6 mb-4 group-hover:text-white transition-colors duration-300">
                On-Schedule Dispatch
              </h3>
              <p className="font-body text-sm text-muted group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                We organize our custom framing crews to match crane dispatch windows, keeping your commercial site on schedule.
              </p>
            </div>
 
            {/* Card 3 */}
            <div className="value-card group border border-border bg-white p-10 text-center shadow-[0_8px_24px_rgba(36, 10, 64, 0.06)] flex flex-col items-center rounded-[4px] transition-all duration-300 hover:bg-[#240a40] hover:border-[#240a40] hover:-translate-y-[5px]">
              <div className="p-4 bg-accent/5 rounded-full text-accent group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                <UserCheck size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-text mt-6 mb-4 group-hover:text-white transition-colors duration-300">
                Professionalism
              </h3>
              <p className="font-body text-sm text-muted group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                Full WorkSafeBC compliance, certified crane signalers, and dedicated project managers for every project.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IV. INDUSTRIAL VALUE SPLIT-GRID MATRIX & PROGRESS LOAD METRICS */}
      <section ref={progressRef} className="py-20 bg-secondary-bg border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Descriptive Text */}
            <div className="flex flex-col gap-6">
              <span className="font-heading text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
                Proven Capacity
              </span>
              <h2 className="font-heading text-4xl font-extrabold text-primary uppercase leading-tight">
                Reliable Services for Stronger Foundations
              </h2>
              <div className="w-20 h-[3px] bg-accent" />
              <p className="font-body text-sm text-muted leading-relaxed">
                Since our inception, MHCL has framing-skeletized dozens of custom developments across the Lower Mainland. We manage heavy timber layouts, concrete pour configurations, and complex seismic ties.
              </p>
            </div>

            {/* Right Column: Animated Data Counters */}
            <div className="flex flex-col gap-8">
              
              {/* Statistical loop counter */}
              <div className="flex items-center gap-6 p-6 bg-white border border-border rounded-[4px] shadow-[0_8px_24px_rgba(36, 10, 64, 0.04)]">
                <div className="w-16 h-16 bg-[#7f00ff]/10 rounded-full flex items-center justify-center shrink-0 text-accent overflow-hidden relative">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    {/* Foundation Ground Line */}
                    <line x1="2" y1="21" x2="22" y2="21" strokeDasharray="3 2" className="animate-pulse" />
                    
                    {/* Column 1 (Left) */}
                    <path 
                      d="M6,21 L6,11" 
                      className="animate-rise-left" 
                      style={{ transformOrigin: 'bottom' }} 
                    />
                    
                    {/* Column 2 (Center) */}
                    <path 
                      d="M12,21 L12,5" 
                      className="animate-rise-center" 
                      style={{ transformOrigin: 'bottom' }} 
                    />
                    
                    {/* Column 3 (Right) */}
                    <path 
                      d="M18,21 L18,11" 
                      className="animate-rise-right" 
                      style={{ transformOrigin: 'bottom' }} 
                    />
                    
                    {/* Horizontal Rafter/Beam */}
                    <path 
                      d="M6,11 L12,5 L18,11" 
                      className="animate-beam-draw" 
                      strokeDasharray="40" 
                      strokeDashoffset="40"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-black text-primary">
                    20+ Years
                  </span>
                  <span className="font-body text-xs text-muted">
                    of combined framing and structural engineering experience
                  </span>
                </div>
              </div>

              {/* Progress Loaders */}
              <div className="flex flex-col gap-6">
                
                {/* Loader 1 */}
                <div>
                  <div className="flex justify-between items-center font-heading text-xs font-extrabold text-text uppercase">
                    <span>Comprehensive Solutions</span>
                    <span>85%</span>
                  </div>
                  <div className="bg-border h-[12px] rounded-[6px] w-full mt-2 overflow-hidden">
                    <div 
                      className="bg-accent h-full rounded-[6px] transition-all duration-[1500ms] ease-out" 
                      style={{ width: isProgressInView ? '85%' : '0%' }}
                    />
                  </div>
                </div>

                {/* Loader 2 */}
                <div>
                  <div className="flex justify-between items-center font-heading text-xs font-extrabold text-text uppercase">
                    <span>Innovative Approach</span>
                    <span>90%</span>
                  </div>
                  <div className="bg-border h-[12px] rounded-[6px] w-full mt-2 overflow-hidden">
                    <div 
                      className="bg-accent h-full rounded-[6px] transition-all duration-[1500ms] ease-out" 
                      style={{ width: isProgressInView ? '90%' : '0%' }}
                    />
                  </div>
                </div>

                {/* Loader 3 */}
                <div>
                  <div className="flex justify-between items-center font-heading text-xs font-extrabold text-text uppercase">
                    <span>Client-Centric Focus</span>
                    <span>75%</span>
                  </div>
                  <div className="bg-border h-[12px] rounded-[6px] w-full mt-2 overflow-hidden">
                    <div 
                      className="bg-accent h-full rounded-[6px] transition-all duration-[1500ms] ease-out" 
                      style={{ width: isProgressInView ? '75%' : '0%' }}
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* V. THE CORE SERVICES MATRIX SECTION */}
      <section className="py-20 bg-[#240a40] text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="font-heading text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
              Core Capabilities
            </span>
            <h2 className="font-heading text-3xl font-extrabold uppercase">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Multi-Family Projects & Hotels */}
            <div className="flex flex-col bg-white/5 border border-white/10 p-8 rounded-[4px] hover:border-accent/40 transition-colors duration-300">
              <h3 className="font-heading text-xl font-extrabold uppercase border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="w-3 h-3 bg-accent" />
                Multi-Family & Hotels
              </h3>
              <ul className="flex flex-col text-left gap-4 mt-6">
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Condominiums
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Apartments
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Townhomes
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Student Housing
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Hotels & Motels
                </li>
              </ul>
            </div>

            {/* Column 2: Commercial Projects */}
            <div className="flex flex-col bg-white/5 border border-white/10 p-8 rounded-[4px] hover:border-accent/40 transition-colors duration-300">
              <h3 className="font-heading text-xl font-extrabold uppercase border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="w-3 h-3 bg-accent" />
                Commercial Projects
              </h3>
              <ul className="flex flex-col text-left gap-4 mt-6">
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Strip Malls
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Office Buildings
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Schools & Academies
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Churches & Temples
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Retail Stores
                </li>
              </ul>
            </div>

            {/* Column 3: Heavy Timber & CLT */}
            <div className="flex flex-col bg-white/5 border border-white/10 p-8 rounded-[4px] hover:border-accent/40 transition-colors duration-300">
              <h3 className="font-heading text-xl font-extrabold uppercase border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="w-3 h-3 bg-accent" />
                Heavy Timber & CLT
              </h3>
              <ul className="flex flex-col text-left gap-4 mt-6">
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Mass Timber Shells
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  CLT Assemblies
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Heavy Timber Framing
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Post & Beam Structural
                </li>
                <li className="flex items-center gap-3 font-body text-sm text-white/90">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  Custom Trusses
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* VI. CUSTOMER FEEDBACK GRAPHIC WATERMARK ROTATOR */}
      <section className="py-24 bg-secondary-bg border-b border-border relative overflow-hidden">
        
        {/* World Map Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 500" className="w-full h-full text-primary fill-current">
            <path d="M150,150 L200,140 L250,160 L300,120 L350,170 L400,130 L450,180 L500,120 L550,190 L600,130 L650,180 L700,140 L750,200 L800,130 L850,150 Z" strokeWidth="2" stroke="currentColor" fill="none" />
            <circle cx="200" cy="150" r="5" />
            <circle cx="450" cy="180" r="5" />
            <circle cx="700" cy="140" r="5" />
            <circle cx="850" cy="150" r="5" />
            <path d="M150,250 Q300,350 450,250 T750,250 T900,300" strokeWidth="1" stroke="currentColor" strokeDasharray="5,5" fill="none" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="font-body text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-text uppercase">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Box Wrapper */}
          <div className="relative max-w-[1000px] mx-auto rounded-[4px] shadow-[0_8px_24px_rgba(36, 10, 64, 0.06)] overflow-hidden">
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      {/* VIII. LARGE CTA BANNER */}
      <section className="py-20 bg-accent text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1000px] px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="font-heading text-xs font-extrabold tracking-[0.3em] text-white uppercase">
            Let's Collaborate
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-white uppercase leading-tight">
            Ready to build with structural precision?
          </h2>
          <p className="font-body text-sm text-white/90 max-w-xl leading-relaxed">
            Partner with British Columbia's premier residential and commercial framing contractors. Contact us today to receive a detailed estimation for your foundation or framing plans.
          </p>
          <div className="w-16 h-[2px] bg-white/40 my-2" />
          <Link to="/contact">
            <button className="bg-white text-[#240a40] px-10 py-5 font-bold text-xs uppercase rounded-[4px] border-none tracking-[0.5px] cursor-pointer hover:bg-[#f4f6f9] transition-colors duration-200">
              Request a Free Consultation
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};
