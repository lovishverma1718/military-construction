import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { images } from '../constants/images';

// Reusable Tactile Button Component with Magnetic Hover Slide Arrow
const TactileButton: React.FC<{ to: string; label: string; light?: boolean }> = ({ to, label, light = false }) => {
  return (
    <Link to={to} className="inline-block">
      <button className={`
        group relative flex items-center gap-3 px-8 py-4 font-body text-[0.8rem] font-bold uppercase tracking-wider rounded-[4px] cursor-pointer transition-all duration-300 border
        ${light 
          ? 'bg-white text-[#240a40] border-transparent hover:bg-white/95 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]' 
          : 'bg-accent text-white border-transparent hover:bg-[#5900cc] hover:shadow-[0_8px_24px_rgba(127,0,255,0.2)]'
        }
      `}>
        <span>{label}</span>
        <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-accent group-hover:text-white" />
      </button>
    </Link>
  );
};

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Services | Military Homes Construction Ltd.";
  }, []);

  // Framer Motion Animation Variants (Casted as any to satisfy compiler)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  } as any;

  const imageReveal = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  } as any;

  return (
    <div className="w-full pt-[80px] bg-white text-[#111111] overflow-hidden">
      
      {/* ========================================================
          I. CINEMATIC SUBPAGE HERO
          ======================================================== */}
      <section className="relative w-full h-[75vh] min-h-[500px] bg-[#ebe6fa] flex items-center justify-center overflow-hidden">
        {/* AI Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={images.services_hero_v2} 
            alt="Our Services background" 
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
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-[1200px] px-6 text-center z-10 relative flex flex-col items-center gap-4 text-[#240a40]"
        >
          <span className="font-body text-xs font-black tracking-[0.3em] text-[#7f00ff] uppercase">
            MILITARY HOMES // ENGINEERING SERVICES MATRIX
          </span>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-[5.5rem] font-black text-primary uppercase tracking-tight leading-none">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-accent mt-2 mx-auto" />
        </motion.div>
      </section>

      {/* ========================================================
          II. CORE SERVICE SECTIONS (Alternating Compositions)
          ======================================================== */}

      {/* --------------------------------------------------------
          SECTION 1: HOUSE FRAMING
          -------------------------------------------------------- */}
      <section id="house-framing" className="relative py-28 border-b border-border bg-white bg-blueprint-grid scroll-mt-[80px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 right-10 font-heading text-[18vw] font-black text-[#7f00ff]/5 leading-none select-none pointer-events-none">
              01
            </div>

            {/* Left Image: Square 1:1 Aspect Ratio */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 relative group"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-border bg-white p-2">
                <img
                  src={images.house_framing_service}
                  alt="House framing timber skeleton"
                  className="w-full h-full object-cover rounded-[4px] transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#240a40]/10 pointer-events-none" />
              </div>
              
              {/* Overlaid glass info card */}
              <div className="absolute -bottom-6 -right-6 md:right-6 bg-white/95 backdrop-blur-md border border-border p-5 rounded-[4px] shadow-premium max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-primary">Heavy Timber & CLT</span>
                </div>
                <p className="font-body text-[11px] text-muted leading-relaxed">
                  Every structural wood skeleton is calculated to transfer loads with millimeter-level precision and absolute code compliance.
                </p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // HEAVY TIMBER & CLT
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-primary uppercase">
                House Framing
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-muted">
                Our core mastery lies in custom timber framing. We align every stud and header using advanced optical leveling systems, planning load pathways to absorb wood shrinkage, seasonal movements, and soil pressure.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Build Scope</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Custom roof truss structures</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Heavy timber posts & beams</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Load-bearing wall assemblies</li>
                  </ul>
                </div>

                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Precision Details</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Laser leveling alignments</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Seismic shear strap fixtures</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Premium grade timbers only</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=house-framing" label="Request Framing Estimate" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          SECTION 2: CUSTOM HOMES FRAMING (DARK FEATURING BANNER)
          -------------------------------------------------------- */}
      <section id="custom-homes-framing" className="relative py-28 border-b border-border bg-[#111111] text-white bg-blueprint-grid scroll-mt-[80px]">
        {/* Soft radial glow */}
        <div className="absolute inset-0 soft-glow-radial" />
        
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 left-10 font-heading text-[18vw] font-black text-white/5 leading-none select-none pointer-events-none">
              02
            </div>

            {/* Left Content (Aligned Left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6 lg:order-first"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // CUSTOM LUXURY RESIDENCES
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-white uppercase">
                Custom Homes Framing
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-white/80">
                We manage turnkey custom home framing, matching design intent with operational precision. From floor layout through lock-up framing, our crews govern every phase with unmatched structural oversight.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Coordination Map</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Architect-to-site consulting</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Envelope engineering reviews</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Rigorous municipal code tests</li>
                  </ul>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Structural Quality</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> High-end timber products</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Thermal insulation wraps</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Complete structural lock-ups</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=custom-homes-framing" label="Begin Consultation" light />
              </div>
            </motion.div>

            {/* Right Image: Square 1:1 Aspect Ratio (Aligned Right) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 lg:order-last"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-white/10 bg-black/40 p-2">
                <img
                  src={images.custom_homes_framing_service}
                  alt="Custom home carpentry and framing details"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          SECTION 3: ICF FOUNDATIONS
          -------------------------------------------------------- */}
      <section id="icf-foundations" className="relative py-28 border-b border-border bg-white bg-blueprint-grid scroll-mt-[80px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 right-10 font-heading text-[18vw] font-black text-[#7f00ff]/5 leading-none select-none pointer-events-none">
              03
            </div>

            {/* Left Image: Square 1:1 Aspect Ratio */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 relative group"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-border bg-white p-2">
                <img
                  src={images.icf_foundations_service}
                  alt="ICF foundations concrete pours setup"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // ICF CONCRETE POURS
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-primary uppercase">
                ICF Foundations
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-muted">
                Insulated Concrete Forms (ICF) offer the ultimate foundation stability. Combining double-layer expanded polystyrene blocks with reinforced structural concrete cores, we pour monolithic foundation structures designed to withstand seismic shifts.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Thermal Metrics</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> R-22+ insulation standard</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> High acoustic soundproofing</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Zero thermal cold bridging</li>
                  </ul>
                </div>

                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Anchor Details</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Continuous concrete pour core</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Grade 60 rebar framework</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Damp-proofing drainage mats</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=icf-foundations" label="Inquire ICF Estimating" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          SECTION 4: HERITAGE BUILDING RESTORATION (DARK FEATURING BANNER)
          -------------------------------------------------------- */}
      <section id="heritage-building-restoration" className="relative py-28 border-b border-border bg-[#111111] text-white bg-blueprint-grid scroll-mt-[80px]">
        {/* Soft radial glow */}
        <div className="absolute inset-0 soft-glow-radial" />
        
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 left-10 font-heading text-[18vw] font-black text-white/5 leading-none select-none pointer-events-none">
              04
            </div>

            {/* Left Content (Aligned Left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6 lg:order-first"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // HISTORIC RESTORATION
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-white uppercase">
                Heritage Building Restoration
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-white/80">
                Restoring historic structures requires delicate structural shoring and heavy timber post-and-beam rehabilitation. We safely transfer loads during foundation retrofits while preserving BC's architectural heritage.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Restoration Scope</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Heavy timber beam preservation</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Temporary needle shoring systems</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Seismic foundation retrofits</li>
                  </ul>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Engineering Standards</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Zero structural movement tolerance</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Structural epoxy timber repairs</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Heritage BC Code compliance</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=heritage-building-restoration" label="Inquire Heritage Restoration" light />
              </div>
            </motion.div>

            {/* Right Image: Square 1:1 Aspect Ratio (Aligned Right) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 lg:order-last"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-white/10 bg-black/40 p-2">
                <img
                  src={images.heritage_restoration_service}
                  alt="Heritage building restoration timber post and beam"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          SECTION 5: FOUNDATION & RENOVATION
          -------------------------------------------------------- */}
      <section id="foundation-renovation" className="relative py-28 border-b border-border bg-white bg-blueprint-grid scroll-mt-[80px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 right-10 font-heading text-[18vw] font-black text-[#7f00ff]/5 leading-none select-none pointer-events-none">
              05
            </div>

            {/* Left Image: Square 1:1 Aspect Ratio */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 relative group"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-border bg-white p-2">
                <img
                  src={images.image2}
                  alt="Foundation shoring and underpinning remediation"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // STRUCTURAL RENOVATIONS
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-primary uppercase">
                Foundation & Renovation
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-muted">
                Remediating older foundations requires precision structural shoring. We lower basement slabs, install underpinning piers, and execute seismic structural connections to elevate classic heritage frames to modern BC codes.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Remediation Core</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Underpinning footing piers</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Basement ceiling lowering</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Structural framing shoring</li>
                  </ul>
                </div>

                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Seismic Measures</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Structural tie anchorages</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Foundation weeping tile rehab</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Concrete crack injections</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=foundation-renovation" label="Discuss Structural Remodeling" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          SECTION 6: TOWNHOUSE FRAMING (DARK FEATURING BANNER)
          -------------------------------------------------------- */}
      <section id="townhouse-framing" className="relative py-28 border-b border-border bg-[#111111] text-white bg-blueprint-grid scroll-mt-[80px]">
        {/* Soft radial glow */}
        <div className="absolute inset-0 soft-glow-radial" />
        
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 left-10 font-heading text-[18vw] font-black text-white/5 leading-none select-none pointer-events-none">
              06
            </div>

            {/* Left Content (Aligned Left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6 lg:order-first"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // MULTI-FAMILY TOWNHOUSE FRAMING
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-white uppercase">
                Townhouse Framing
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-white/80">
                From luxury townhome developments to multi-family residential frames, our crews construct enduring timber frameworks. We control site logistics to ensure moisture-tight envelopes, acoustic firewall separation, and zero air gaps.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Scope Parameters</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Multi-family townhouse framing</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Acoustic sound wall separation</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Structural floor joist grids</li>
                  </ul>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Quality Standards</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-white/70">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Kiln-dried dimensional studs</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Strict wall plumb coordinates</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Subfloor glue & screw setups</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=townhouse-framing" label="Inquire Townhouse Pricing" light />
              </div>
            </motion.div>

            {/* Right Image: Square 1:1 Aspect Ratio (Aligned Right) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 lg:order-last"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-white/10 bg-black/40 p-2">
                <img
                  src={images.townhouse_framing_service}
                  alt="Multi-family townhouse framing structural framework"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          SECTION 7: COMMERCIAL CONSTRUCTION
          -------------------------------------------------------- */}
      <section id="commercial-construction" className="relative py-28 border-b border-border bg-white bg-blueprint-grid scroll-mt-[80px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
            
            {/* Translucent background number */}
            <div className="absolute -top-16 right-10 font-heading text-[18vw] font-black text-[#7f00ff]/5 leading-none select-none pointer-events-none">
              07
            </div>

            {/* Left Image: Square 1:1 Aspect Ratio */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="lg:col-span-6 relative group"
            >
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden shadow-premium border border-border bg-white p-2">
                <img
                  src={images.image22}
                  alt="Heavy-duty commercial framing and slab concrete"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <span className="font-body text-xs font-extrabold tracking-widest text-accent uppercase">
                CORE PILLAR // COMMERCIAL FOUNDATIONS
              </span>
              
              <h2 className="font-heading text-clamp-subheading font-bold text-primary uppercase">
                Commercial Construction
              </h2>

              <div className="w-16 h-[2px] bg-accent" />

              <p className="font-body text-sm leading-relaxed text-muted">
                We handle heavy wood framing, structural concrete columns, and floor slabs for light-commercial structures. We coordinate concrete pours and frame setups with commercial subtrades to keep projects fully on schedule.
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Build Capacity</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Concrete column formwork</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Light steel studs partitions</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Load-bearing floor slab pours</li>
                  </ul>
                </div>

                <div className="p-5 bg-secondary-bg border border-border rounded-[4px]">
                  <h4 className="font-body text-xs font-bold text-accent uppercase tracking-wider mb-2">Safety & Codes</h4>
                  <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Underparkade height clearances</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Strict commercial load values</li>
                    <li className="flex items-center gap-2"><Check size={12} className="text-accent" /> Synchronized site logistics</li>
                  </ul>
                </div>
              </div>

              <div className="mt-2">
                <TactileButton to="/contact?service=commercial-construction" label="Inquire Commercial Spec Quote" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          III. CLIMACTIC HIGH-CONVERSION CTA
          ======================================================== */}
      <section className="relative py-32 bg-[#240a40] text-white text-center overflow-hidden">
        {/* Blueprint overlay texture */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 soft-glow-radial" />
        
        <div className="mx-auto max-w-[800px] px-6 relative z-10 flex flex-col items-center gap-6">
          <span className="font-body text-xs font-black tracking-[0.3em] text-accent uppercase">
            Start Your Estimate
          </span>
          <h2 className="font-heading text-clamp-section font-bold uppercase leading-tight">
            Ready to build with structural precision?
          </h2>
          <p className="font-body text-sm text-white/80 max-w-lg leading-relaxed">
            We provide prompt, accurate estimates based directly on structural design diagrams. Upload your blueprints and let's organize your construction mobilization.
          </p>
          <div className="w-16 h-[2px] bg-white/20 my-2" />
          <TactileButton to="/contact" label="Contact Project Manager" light />
        </div>
      </section>
      
    </div>
  );
};
