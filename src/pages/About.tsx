import React, { useEffect } from 'react';
import { Shield, Check, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '../constants/company';
import { images } from '../constants/images';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Military Homes Construction Ltd.";
  }, []);

  return (
    <div className="w-full pt-[80px] bg-white text-[#111111]">
      
      {/* 1. TOP SUB-PAGE BANNER */}
      <section className="relative w-full h-[75vh] min-h-[500px] bg-[#ebe6fa] flex items-center overflow-hidden">
        {/* AI Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={images.about_hero_v2} 
            alt="About Company background" 
            className="w-full h-full object-cover" 
          />
          {/* Light Lavender Gradient Tint */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(235, 230, 250, 0.95) 0%, rgba(235, 230, 250, 0.75) 50%, rgba(235, 230, 250, 0.15) 100%)'
            }}
          />
        </div>
        
        {/* Blueprint line decorations */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none z-[1]" />
        
        <div className="mx-auto max-w-[1200px] w-full px-6 z-10 relative flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[800px] flex flex-col items-start gap-1"
          >
            <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium text-primary uppercase tracking-wide">
              About Our
            </span>
            <h1 className="font-heading text-6xl sm:text-7xl md:text-[5.5rem] font-black text-primary uppercase tracking-tight leading-none">
              Company
            </h1>
            
            <div className="w-24 h-1 bg-accent mt-4" />
            
            <p className="font-body text-base sm:text-lg text-primary/80 mt-6 max-w-md leading-relaxed text-left">
              Building more than structures –<br />
              we build trust, value, and lasting relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION 1: COMPANY STORY */}
      <section className="py-20 bg-white border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] border border-border bg-white p-2 rounded-[4px] shadow-[0_8px_24px_rgba(36, 10, 64, 0.04)] overflow-hidden">
                <img
                  src={images.image1}
                  alt="MHCL custom timber framing work"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-heading text-[10px] text-accent font-extrabold tracking-widest uppercase">
                01 // Core Foundation
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-primary uppercase">
                Evolving through structural challenges.
              </h2>
              <div className="w-20 h-[3px] bg-accent" />
              <div className="font-body text-sm leading-relaxed text-muted flex flex-col gap-4">
                <p>
                  {COMPANY.story}
                </p>
                <p>
                  By maintaining a specialized workforce focused entirely on wood framing and structural concrete work, we have built a reputation among British Columbia's leading custom home builders and engineering studios. Today, we manage shell completions, seismic retrofits, and foundation Lower Mainland integrations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: MISSION & VISION */}
      <section className="py-20 bg-secondary-bg border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] border border-border bg-white p-2 rounded-[4px] shadow-[0_8px_24px_rgba(36, 10, 64, 0.04)] overflow-hidden">
                <img
                  src={images.image7}
                  alt="MHCL on site planning alignment"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-heading text-[10px] text-accent font-extrabold tracking-widest uppercase">
                02 // Corporate Philosophy
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-primary uppercase">
                Precision in every dimension.
              </h2>
              <div className="w-20 h-[3px] bg-accent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                <div className="flex flex-col gap-2.5 border-l-2 border-accent pl-4">
                  <h4 className="font-heading text-sm font-extrabold text-primary uppercase tracking-wider">
                    Our Mission
                  </h4>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {COMPANY.mission}
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 border-l-2 border-accent pl-4">
                  <h4 className="font-heading text-sm font-extrabold text-primary uppercase tracking-wider">
                    Our Vision
                  </h4>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {COMPANY.vision}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION 3: SAFETY & CREDENTIALS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] border border-border bg-white p-2 rounded-[4px] shadow-[0_8px_24px_rgba(36, 10, 64, 0.04)] overflow-hidden">
                <img
                  src={images.image15}
                  alt="Safety and concrete form setup on site"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-heading text-[10px] text-accent font-extrabold tracking-widest uppercase">
                03 // Compliance
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-primary uppercase">
                WorkSafeBC & Liability Shield.
              </h2>
              <div className="w-20 h-[3px] bg-accent" />
              <p className="font-body text-sm leading-relaxed text-muted">
                Building in British Columbia requires strict adherence to safe work procedures and seismic codes. Military Homes Construction Ltd. operates under strict safety protocols to protect workers and properties.
              </p>

              {/* Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                <div className="flex items-start gap-4 p-5 border border-border bg-[#f4f6f9] rounded-[4px]">
                  <span className="text-accent shrink-0 mt-0.5">
                    <Shield size={18} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-heading text-xs font-extrabold text-primary uppercase tracking-wider">
                      WCB Registered
                    </h4>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      100% compliant with WorkSafeBC regulations. Regular site safety audits and certified crews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border border-border bg-[#f4f6f9] rounded-[4px]">
                  <span className="text-accent shrink-0 mt-0.5">
                    <FileText size={18} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-heading text-xs font-extrabold text-primary uppercase tracking-wider">
                      Fully Insured
                    </h4>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      Comprehensive commercial general liability insurance protecting all site stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 font-body text-xs text-muted mt-4">
                <li className="flex items-center gap-2.5">
                  <span className="text-accent">
                    <Check size={12} />
                  </span>
                  <span>Daily toolbox safety reviews before shift mobilization.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-accent">
                    <Check size={12} />
                  </span>
                  <span>Direct cooperation with structural engineering firms for framing inspections.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
