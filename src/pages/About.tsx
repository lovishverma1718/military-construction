import React, { useEffect } from 'react';
import { Shield, Check, FileText } from 'lucide-react';
import { COMPANY } from '../constants/company';
import { images } from '../constants/images';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Military Homes Construction Ltd. (MHCL)";
  }, []);

  return (
    <div className="w-full pt-[90px] bg-background text-primary">
      
      {/* 1. EDITORIAL PAGE HERO */}
      <section className="py-24 bg-secondary-bg border-b border-accent/15 relative overflow-hidden bg-blueprint-grid">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
              01 // company profile
            </span>
            <h1 className="font-heading text-clamp-hero font-normal leading-tight text-primary">
              Precision-driven structural framing <br />
              <span className="italic font-light text-accent">and heavy-duty foundations.</span>
            </h1>
            <p className="font-body text-xs md:text-sm leading-relaxed text-muted font-light max-w-xl">
              Based in British Columbia, Canada, Military Homes Construction Ltd. delivers general contracting and specialized subcontracting for high-end custom home framing, heavy timber layouts, and ICF foundations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: COMPANY STORY */}
      <section className="py-24 bg-background border-b border-border/40 relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image (40% width on desktop, with dimensions) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative pr-8 pb-8 w-full max-w-[380px]">
                
                {/* Horizontal Dimension */}
                <div className="absolute bottom-0 left-0 w-[calc(100%-32px)] h-[1px] border-b border-accent/20 flex justify-between items-center px-4 text-[8px] font-mono text-accent">
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                  <span className="tracking-widest">W_900mm</span>
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                </div>
                
                {/* Vertical Dimension */}
                <div className="absolute right-0 top-0 h-[calc(100%-32px)] w-[1px] border-r border-accent/20 flex flex-col justify-between items-center py-4 text-[8px] font-mono text-accent">
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                  <span className="rotate-90 origin-center translate-x-2 tracking-widest">H_1500mm</span>
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                </div>

                <div className="relative w-full bg-secondary-bg border border-accent/20 p-5 shadow-subtle">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                  <div className="overflow-hidden flex items-center justify-center bg-secondary-bg border border-border/40">
                    <img
                      src={images.image1}
                      alt="MHCL custom timber framing work"
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-102"
                    />
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                    <div>
                      <span className="font-bold text-primary uppercase">EXHIBIT // ABT-01</span>
                    </div>
                    <div className="text-right text-[8px] font-mono text-muted/70">
                      <span>TIMBER SKELETON</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
              <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                02 // our history
              </span>
              <h2 className="font-heading text-clamp-section text-primary font-normal leading-tight">
                Evolving through structural challenges.
              </h2>
              <div className="w-12 h-[1px] bg-accent/40" />
              <p className="font-body text-xs md:text-sm leading-relaxed text-muted font-light">
                {COMPANY.story}
              </p>
              <p className="font-body text-xs leading-relaxed text-muted font-light">
                By maintaining a specialized workforce focused entirely on wood framing and structural concrete work, we have built a reputation among British Columbia's leading custom home builders and engineering studios. Today, we manage shell completions, seismic retrofits, and foundation Lower Mainland integrations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: MISSION & VISION */}
      <section className="py-24 bg-secondary-bg border-b border-border/40 relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Text (60% width) - Left on desktop */}
            <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1 lg:pr-6">
              <div className="flex flex-col gap-6">
                <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                  03 // philosophy
                </span>
                <h2 className="font-heading text-clamp-section text-primary font-normal leading-tight">
                  Precision in every dimension.
                </h2>
                <div className="w-12 h-[1px] bg-accent/40" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3 border-l border-accent/20 pl-4">
                  <h4 className="font-body text-[10px] font-bold text-primary tracking-widest uppercase">
                    Our Mission
                  </h4>
                  <p className="font-body text-xs text-muted leading-relaxed font-light">
                    {COMPANY.mission}
                  </p>
                </div>
                <div className="flex flex-col gap-3 border-l border-accent/20 pl-4">
                  <h4 className="font-body text-[10px] font-bold text-primary tracking-widest uppercase">
                    Our Vision
                  </h4>
                  <p className="font-body text-xs text-muted leading-relaxed font-light">
                    {COMPANY.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* Image (40% width) - Right on desktop */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative pr-8 pb-8 w-full max-w-[380px]">
                
                {/* Horizontal Dimension */}
                <div className="absolute bottom-0 left-0 w-[calc(100%-32px)] h-[1px] border-b border-accent/20 flex justify-between items-center px-4 text-[8px] font-mono text-accent">
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                  <span className="tracking-widest">W_900mm</span>
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                </div>
                
                {/* Vertical Dimension */}
                <div className="absolute right-0 top-0 h-[calc(100%-32px)] w-[1px] border-r border-accent/20 flex flex-col justify-between items-center py-4 text-[8px] font-mono text-accent">
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                  <span className="rotate-90 origin-center translate-x-2 tracking-widest">H_1500mm</span>
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                </div>

                <div className="relative w-full bg-background border border-accent/20 p-5 shadow-subtle">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                  <div className="overflow-hidden flex items-center justify-center bg-background border border-border/40">
                    <img
                      src={images.image7}
                      alt="MHCL on site planning alignment"
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-102"
                    />
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                    <div>
                      <span className="font-bold text-primary uppercase">EXHIBIT // ABT-02</span>
                    </div>
                    <div className="text-right text-[8px] font-mono text-muted/70">
                      <span>LASER ADJUST</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION 3: SAFETY & CREDENTIALS */}
      <section className="py-24 bg-background border-b border-border/40 relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image (40% width) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative pr-8 pb-8 w-full max-w-[380px]">
                
                {/* Horizontal Dimension */}
                <div className="absolute bottom-0 left-0 w-[calc(100%-32px)] h-[1px] border-b border-accent/20 flex justify-between items-center px-4 text-[8px] font-mono text-accent">
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                  <span className="tracking-widest">W_900mm</span>
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                </div>
                
                {/* Vertical Dimension */}
                <div className="absolute right-0 top-0 h-[calc(100%-32px)] w-[1px] border-r border-accent/20 flex flex-col justify-between items-center py-4 text-[8px] font-mono text-accent">
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                  <span className="rotate-90 origin-center translate-x-2 tracking-widest">H_1500mm</span>
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                </div>

                <div className="relative w-full bg-secondary-bg border border-accent/20 p-5 shadow-subtle">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                  <div className="overflow-hidden flex items-center justify-center bg-secondary-bg border border-border/40">
                    <img
                      src={images.image15}
                      alt="Safety and concrete form setup on site"
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-102"
                    />
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                    <div>
                      <span className="font-bold text-primary uppercase">EXHIBIT // ABT-03</span>
                    </div>
                    <div className="text-right text-[8px] font-mono text-muted/70">
                      <span>CONCRETE COLUMNS</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-6">
              <div className="flex flex-col gap-6">
                <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                  04 // accreditation
                </span>
                <h2 className="font-heading text-clamp-section text-primary font-normal leading-tight">
                  WorkSafeBC & Liability Shield.
                </h2>
                <div className="w-12 h-[1px] bg-accent/40" />
                <p className="font-body text-xs md:text-sm leading-relaxed text-muted font-light">
                  Building in British Columbia requires strict adherence to safe work procedures and seismic codes. Military Homes Construction Ltd. operates under safety protocols to protect workers, engineering coordinates, and properties.
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                
                <div className="flex items-start gap-4 p-5 border border-border bg-secondary-bg">
                  <span className="text-accent shrink-0 mt-1">
                    <Shield size={18} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-body text-[10px] font-bold text-primary uppercase tracking-widest">
                      WCB Registered
                    </h4>
                    <p className="font-body text-[11px] text-muted font-light leading-relaxed">
                      100% compliant with WorkSafeBC regulations. Regular site safety sweeps and certified crews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border border-border bg-secondary-bg">
                  <span className="text-accent shrink-0 mt-1">
                    <FileText size={18} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-body text-[10px] font-bold text-primary uppercase tracking-widest">
                      Fully Insured
                    </h4>
                    <p className="font-body text-[11px] text-muted font-light leading-relaxed">
                      Comprehensive commercial general liability insurance protecting all site stakeholders.
                    </p>
                  </div>
                </div>

              </div>

              <ul className="flex flex-col gap-2.5 font-body text-xs text-muted font-light mt-2 pl-2">
                <li className="flex items-center gap-3">
                  <span className="text-accent">
                    <Check size={12} />
                  </span>
                  <span>Daily toolbox safety reviews before shift mobilization.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">
                    <Check size={12} />
                  </span>
                  <span>Direct coordinates with structural engineering firms for form sign-offs.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
