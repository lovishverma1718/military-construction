import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { COMPANY, SERVICES, PROCESS_STEPS, WHY_CHOOSE_US_POINTS } from '../constants/company';
import { images } from '../constants/images';
import { Button } from '../components/ui/Button';
import { GalleryGrid } from '../components/gallery/GalleryGrid';

export const Home: React.FC = () => {
  const galleryPreviewImages = [
    { src: images.image1, alt: "Architectural framing site", category: "Framing", caption: "Precision timber framing lockup" },
    { src: images.image5, alt: "ICF Foundation wall setup", category: "Foundations", caption: "ICF concrete installation BC" },
    { src: images.image8, alt: "Custom residential structure", category: "Custom Home", caption: "Multi-story residential framing" },
  ];

  return (
    <div className="w-full bg-background text-primary">
      
      {/* 1. PORTRAIT EDITORIAL HERO (Blueprint Grid Background) */}
      <section className="relative min-h-[95vh] pt-[120px] pb-16 flex items-center justify-center bg-blueprint-grid border-b border-accent/15">
        
        {/* Layout framing guides */}
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/10 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/10 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
          
          {/* Hero Left Content (55% width, typographic focus) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 reveal-up z-10">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                {COMPANY.shortName} // SPECIFICATION 01-A
              </span>
            </div>
            
            <h1 className="font-heading text-clamp-hero text-primary font-normal leading-tight">
              Building British Columbia <br />
              <span className="italic font-light text-accent text-clamp-hero">with structural precision.</span>
            </h1>
            
            <p className="font-body text-xs md:text-sm leading-relaxed text-muted max-w-xl font-light">
              Military Homes Construction Ltd. delivers exceptional craftsmanship across custom homes, residential framing, commercial construction, ICF foundations, and renovation projects throughout British Columbia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              <Link to="/contact">
                <Button variant="primary" className="w-full sm:w-auto text-[9px] tracking-[0.2em] py-4.5 px-10">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="w-full sm:w-auto text-[9px] tracking-[0.2em] py-4.5 px-10">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Right Image (With Drafting Dimension Rulers) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative pr-8 pb-8">
              
              {/* Vertical Dimension Ruler */}
              <div className="absolute right-0 top-0 h-[calc(100%-32px)] w-[1px] border-r border-accent/20 flex flex-col justify-between items-center py-4 text-[8px] font-mono text-accent">
                <div className="w-2 h-[1px] bg-accent/30" />
                <span className="rotate-90 origin-center translate-x-2 tracking-widest">H_1630mm</span>
                <div className="w-2 h-[1px] bg-accent/30" />
              </div>
              
              {/* Horizontal Dimension Ruler */}
              <div className="absolute bottom-0 left-0 w-[calc(100%-32px)] h-[1px] border-b border-accent/20 flex justify-between items-center px-4 text-[8px] font-mono text-accent">
                <div className="h-2 w-[1px] bg-accent/30" />
                <span className="tracking-widest">W_965mm</span>
                <div className="h-2 w-[1px] bg-accent/30" />
              </div>

              {/* Main Image Frame */}
              <div className="relative w-full max-w-[390px] border border-accent/20 p-5 bg-background shadow-premium">
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-accent/40" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-accent/40" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                <div className="overflow-hidden flex items-center justify-center bg-secondary-bg border border-border/40">
                  <img
                    src={images.image11}
                    alt="Military Homes Construction Hero Timber Framing"
                    fetchPriority="high"
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-102"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                  <div className="flex flex-col">
                    <span className="font-bold text-primary uppercase">EXHIBIT // HERO-01</span>
                    <span className="text-muted tracking-wide mt-0.5 lowercase italic font-heading text-[11px]">heavy-timber layout</span>
                  </div>
                  <div className="text-right text-[8px] font-mono text-muted/70 tracking-widest">
                    <span>SCALE // 1:15</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION (Newspaper print columns) */}
      <section className="py-24 bg-secondary-bg border-b border-border/60 relative overflow-hidden">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1000px] px-6 text-center flex flex-col items-center gap-8 relative">
          <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
            01 // brand statement
          </span>
          
          <div className="absolute select-none pointer-events-none font-heading text-[8vw] italic font-light text-accent/3 opacity-30 -top-6">
            Craftsmanship
          </div>

          <h2 className="font-heading text-clamp-section text-primary font-normal leading-tight z-10">
            Crafting the skeleton and foundation of British Columbia's finest structures.
          </h2>
          
          <div className="w-12 h-[1px] bg-accent/40 my-2" />
          
          {/* Newspaper Column format */}
          <div className="editorial-columns text-left font-body text-xs leading-relaxed text-muted font-light max-w-3xl">
            <p className="mb-4">
              At Military Homes Construction Ltd. (MHCL), we believe that structural precision is the true art of building. A premium custom home or multi-family commercial structure is only as reliable as the concrete foundation it stands upon and the wooden framing skeleton that supports its load vectors.
            </p>
            <p>
              By maintaining a highly trained, dedicated framing and concrete crew, we coordinate directly with structural engineering coordinates and municipal building inspectors. We verify plumb margins using high-precision laser alignment to eliminate joist bounce, rafter sag, and foundation shifts.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-24 bg-background relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="flex flex-col gap-3">
              <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                02 // specializations
              </span>
              <h2 className="font-heading text-clamp-section text-primary font-normal">
                Our Core Services
              </h2>
            </div>
            <Link to="/services" className="group flex items-center gap-2 font-body text-[9px] font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors">
              <span>View All Services Details</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid - Asymmetrical staggers & catalog labels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col bg-background border border-border p-5 group hover:border-accent/25 hover:shadow-premium transition-all duration-500 rounded-2xl ${
                  index % 3 === 1 ? 'lg:translate-y-6' : index % 3 === 2 ? 'lg:-translate-y-6' : ''
                }`}
              >
                {/* Image Frame with drafting points */}
                <div className="relative w-full bg-secondary-bg overflow-hidden flex items-center justify-center border border-border/40 p-2 rounded-xl">
                  <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-accent/15" />
                  <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-accent/15" />
                  <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-accent/15" />
                  <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-accent/15" />
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-102 rounded-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-4 pt-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-body text-sm font-bold text-primary">
                      {service.title}
                    </h3>
                    <span className="font-mono text-[9px] text-accent/50 font-bold">0{index + 1}</span>
                  </div>
                  <p className="font-body text-[11px] text-muted leading-relaxed font-light min-h-[48px]">
                    {service.description}
                  </p>
                  <div className="w-full h-[1px] bg-accent/10 my-2" />
                  <Link
                    to={`/services#${service.id}`}
                    className="group flex items-center gap-2 font-body text-[9px] font-bold tracking-[0.25em] uppercase text-accent hover:text-primary transition-colors"
                  >
                    <span>Discover Specs</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE MHCL */}
      <section className="py-24 bg-secondary-bg border-y border-border/60 relative overflow-hidden">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left side Image (40% width, uncropped with dimension lines) */}
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

                <div className="relative w-full bg-background border border-accent/20 p-5 shadow-subtle">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                  <div className="overflow-hidden flex items-center justify-center bg-background border border-border/40">
                    <img
                      src={images.image14}
                      alt="Why choose MHCL construction framing"
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                    <div>
                      <span className="font-bold text-primary uppercase">EXHIBIT // ACC-02</span>
                    </div>
                    <div className="text-right text-[8px] font-mono text-muted/70">
                      <span>TIMBER ANCHORS</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side Copy */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                  03 // our standards
                </span>
                <h2 className="font-heading text-clamp-section text-primary font-normal">
                  Why Partners Trust MHCL
                </h2>
              </div>

              {/* Reasons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {WHY_CHOOSE_US_POINTS.map((point) => (
                  <div key={point.title} className="flex flex-col gap-3 border-l border-accent/20 pl-4">
                    <div className="flex items-center gap-3">
                      <span className="text-accent shrink-0">
                        <Check size={14} />
                      </span>
                      <h4 className="font-body text-xs font-bold text-primary">
                        {point.title}
                      </h4>
                    </div>
                    <p className="font-body text-[11px] text-muted leading-relaxed font-light pl-6">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (Asymmetrical Columns & Dimension Marks) */}
      <section className="py-24 bg-background relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="flex flex-col gap-3">
              <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                04 // case studies
              </span>
              <h2 className="font-heading text-clamp-section text-primary font-normal">
                Featured Projects
              </h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-2 font-body text-[9px] font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors">
              <span>View All Portfolio Projects</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col gap-6 group cursor-pointer"
            >
              <div className="relative pr-8 pb-8">
                
                {/* Horizontal Dimension */}
                <div className="absolute bottom-0 left-0 w-[calc(100%-32px)] h-[1px] border-b border-accent/20 flex justify-between items-center px-4 text-[8px] font-mono text-accent">
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                  <span className="tracking-widest">W_1000mm</span>
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                </div>
                
                <div className="relative bg-secondary-bg border border-accent/15 p-6 overflow-hidden flex items-center justify-center">
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-accent/10 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-accent/10 rounded-full" />
                  
                  <img
                    src={images.image12}
                    alt="Custom Home Framing, West Vancouver"
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-750 ease-out group-hover:scale-102"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 pl-2">
                <div className="flex justify-between items-center border-b border-accent/10 pb-2">
                  <span className="font-body text-[8px] font-bold tracking-[0.25em] text-accent uppercase">
                    RESIDENTIAL FRAMING // WEST VANCOUVER
                  </span>
                  <span className="font-mono text-[9px] text-muted/60">MHCL-FR12</span>
                </div>
                <h3 className="font-heading text-3xl font-normal text-primary">
                  The Ridgeview Residence
                </h3>
                <p className="font-body text-xs text-muted leading-relaxed font-light">
                  A high-end architectural framing build utilizing premium lumber and custom steel beam integrations, completed to millimeter tolerances on a challenging sloped terrain.
                </p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:translate-y-20 flex flex-col gap-6 group cursor-pointer"
            >
              <div className="relative pr-8 pb-8">
                
                {/* Vertical Dimension */}
                <div className="absolute right-0 top-0 h-[calc(100%-32px)] w-[1px] border-r border-accent/20 flex flex-col justify-between items-center py-4 text-[8px] font-mono text-accent">
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                  <span className="rotate-90 origin-center translate-x-2 tracking-widest">H_1600mm</span>
                  <div className="w-1.5 h-[1px] bg-accent/30" />
                </div>

                <div className="relative bg-secondary-bg border border-accent/15 p-6 overflow-hidden flex items-center justify-center">
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-accent/10 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-accent/10 rounded-full" />
                  
                  <img
                    src={images.image20}
                    alt="ICF Foundation & Multi-family Build, Burnaby"
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-750 ease-out group-hover:scale-102"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 pl-2">
                <div className="flex justify-between items-center border-b border-accent/10 pb-2">
                  <span className="font-body text-[8px] font-bold tracking-[0.25em] text-accent uppercase">
                    ICF FOUNDATIONS // BURNABY
                  </span>
                  <span className="font-mono text-[9px] text-muted/60">MHCL-FD20</span>
                </div>
                <h3 className="font-heading text-3xl font-normal text-primary">
                  The Metrotown Structural Shell
                </h3>
                <p className="font-body text-xs text-muted leading-relaxed font-light">
                  Advanced Insulated Concrete Forms (ICF) foundation installation providing superior thermal values and lateral resistance, followed by standard multi-family timber framing.
                </p>
              </div>
            </motion.div>

          </div>

          <div className="h-0 lg:h-24" />
        </div>
      </section>

      {/* 6. CONSTRUCTION PROCESS (Uses Image 23 with structural lines) */}
      <section className="py-24 bg-secondary-bg border-y border-border/60 relative overflow-hidden">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Process Copy */}
            <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
              <div className="flex flex-col gap-3">
                <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                  05 // how we work
                </span>
                <h2 className="font-heading text-clamp-section text-primary font-normal">
                  The Framing & Foundation Process
                </h2>
              </div>

              {/* Steps List */}
              <div className="flex flex-col gap-8">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="flex gap-6 border-b border-accent/10 pb-6 last:border-0 last:pb-0">
                    <span className="font-heading text-4xl italic text-accent/50 select-none">
                      {step.step}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-body text-xs font-bold text-primary uppercase tracking-wider">
                        {step.title}
                      </h4>
                      <p className="font-body text-xs text-muted leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative pr-8 pb-8 w-full max-w-[380px]">
                
                {/* Horizontal Dimension */}
                <div className="absolute bottom-0 left-0 w-[calc(100%-32px)] h-[1px] border-b border-accent/20 flex justify-between items-center px-4 text-[8px] font-mono text-accent">
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                  <span className="tracking-widest">W_900mm</span>
                  <div className="h-1.5 w-[1px] bg-accent/30" />
                </div>

                <div className="relative bg-background border border-accent/20 p-5 shadow-subtle">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                  <div className="overflow-hidden flex items-center justify-center bg-background border border-border/40">
                    <img
                      src={images.image23}
                      alt="Precision construction site framing"
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-accent/15 flex justify-between items-center text-[9px] font-body">
                    <div>
                      <span className="font-bold text-primary uppercase">EXHIBIT // PRC-23</span>
                    </div>
                    <div className="text-right text-[8px] font-mono text-muted/70">
                      <span>STEEL & WOOD SHELL</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PORTRAIT MASONRY GALLERY PREVIEW */}
      <section className="py-24 bg-background relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                06 // visual proof
              </span>
              <h2 className="font-heading text-clamp-section text-primary font-normal">
                Craftsmanship in Detail
              </h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-2 font-body text-[9px] font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors">
              <span>Enter Full Gallery</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <GalleryGrid images={galleryPreviewImages} />

        </div>
      </section>

      {/* 8. LARGE CTA BANNER */}
      <section className="py-28 bg-primary text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1000px] px-6 text-center flex flex-col items-center gap-8 relative z-10">
          <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
            Let's Collaborate
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            Ready to build with structural precision?
          </h2>
          <p className="font-body text-xs text-white/70 max-w-xl font-light leading-relaxed">
            Partner with British Columbia's premier residential and commercial framing contractors. Contact us today to receive a detailed estimation for your foundation or framing plans.
          </p>
          <div className="w-12 h-[1px] bg-accent/40 my-2" />
          <Link to="/contact">
            <Button variant="light" className="text-[9px] tracking-[0.2em] py-4.5 px-10">
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};
