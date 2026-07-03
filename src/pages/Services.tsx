import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants/company';
import { Button } from '../components/ui/Button';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Services | Military Homes Construction Ltd. (MHCL)";
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
              01 // specializations
            </span>
            <h1 className="font-heading text-clamp-hero font-normal leading-tight text-primary">
              Structural concrete, framing, <br />
              <span className="italic font-light text-accent">and general contracting.</span>
            </h1>
            <p className="font-body text-xs md:text-sm leading-relaxed text-muted font-light max-w-xl">
              We specialize in the critical structural skeleton of high-end builds. Our service offerings span advanced heavy timber framing, ICF concrete foundation assemblies, and structural renovations across British Columbia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DETAIL SECTIONS (Alternating Layouts with Dimensions) */}
      <section className="flex flex-col relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={service.id}
              id={service.id}
              className={`py-24 border-b border-border scroll-mt-[90px] relative ${
                index % 2 !== 0 ? 'bg-secondary-bg' : 'bg-background'
              }`}
            >
              <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                  
                  {/* Left Column: Image Container with Dimension Ticks */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
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
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-102"
                          />
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                          <div>
                            <span className="font-bold text-primary uppercase">DIAGRAM // SVC-0{index + 1}</span>
                          </div>
                          <div className="text-right text-[8px] font-mono text-muted/70 tracking-widest">
                            <span>MHCL // BC</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right Column: Text content */}
                  <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? 'lg:order-2 lg:pl-10' : 'lg:order-1 lg:pr-10'}`}>
                    <span className="font-heading text-4xl italic text-accent/50 select-none">
                      0{index + 1}
                    </span>
                    
                    <h2 className="font-heading text-4xl font-normal text-primary leading-tight">
                      {service.title}
                    </h2>
                    
                    <p className="font-body text-xs leading-relaxed text-muted font-light">
                      {service.description}
                    </p>

                    {/* Features checklist formatted beautifully */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                      <div className="flex flex-col gap-3">
                        <h4 className="font-body text-[9px] font-bold tracking-[0.2em] text-accent uppercase border-b border-accent/10 pb-1.5">
                          Execution details
                        </h4>
                        <ul className="flex flex-col gap-2.5 font-body text-xs text-muted font-light">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-accent shrink-0 mt-0.5">
                                <Check size={12} />
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h4 className="font-body text-[9px] font-bold tracking-[0.2em] text-accent uppercase border-b border-accent/10 pb-1.5">
                          Structural benefits
                        </h4>
                        <ul className="flex flex-col gap-2.5 font-body text-xs text-muted font-light">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-accent shrink-0 mt-0.5">
                                <Check size={12} />
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing CTA */}
                    <div className="mt-4">
                      <Link to={`/contact?service=${service.id}`}>
                        <Button variant="outline" className="text-[9px] tracking-[0.2em] py-3.5 px-8">
                          <span>Request pricing for {service.title}</span>
                          <ArrowRight size={12} className="ml-2 inline" />
                        </Button>
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="mx-auto max-w-[800px] px-6 flex flex-col items-center gap-6">
          <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
            Start Your Estimate
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-light">
            Need pricing for your engineering diagrams?
          </h2>
          <p className="font-body text-xs text-white/60 max-w-md font-light leading-relaxed">
            We provide prompt, accurate quotes based on structural drawings. Upload your blueprints and framing specs on our contact page.
          </p>
          <Link to="/contact" className="mt-4">
            <Button variant="light" className="text-[9px] tracking-[0.2em]">
              Contact Project Manager
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};
