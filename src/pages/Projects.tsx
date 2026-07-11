import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { images } from '../constants/images';

interface CaseStudyType {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  year: string;
  sqFt: string;
  image: string;
  description: string;
  challenges: string;
  solutions: string;
  outcome: string;
  goals: string[];
  materials: string[];
  timeline: string;
  images?: string[];
  videos?: string[];
}

const FLAGSHIP_PROJECTS: CaseStudyType[] = [
  {
    id: "ridgeview-residence",
    title: "Ridge townhouse project maple ridge",
    location: "Maple Ridge, BC",
    serviceType: "Luxury Home Framing & Erection",
    year: "2024",
    sqFt: "5,400 SQ. FT.",
    image: images.image12,
    description: "High-end multi-story custom estate built with detailed timber skeletons and high-load lateral window frames.",
    challenges: "Sloped hillside terrain required detailed lateral wind resistance load planning and deep grade structural ties.",
    solutions: "Erected double-reinforced concrete foundations and plumb wood framing to withstand seismic and slope forces.",
    outcome: "Successfully handed off lock-up frame 15 days ahead of building coordinates schedule.",
    goals: [
      "Plumb alignment across sloping site headers",
      "Strict moisture boundary management",
      "Seamless load distribution transfers"
    ],
    materials: ["Douglas Fir timber studs", "Engineered LVL headers", "High-slump structural concrete"],
    timeline: "14 Weeks"
  },
  {
    id: "whistler-timber-passivhaus",
    title: "Townhouse project in Coquitlam",
    location: "Coquitlam, BC",
    serviceType: "Exposed Architectural Heavy Timber Framing",
    year: "2024",
    sqFt: "4,800 SQ. FT.",
    image: images.image1,
    description: "Passivhaus structural wood build utilizing heavy timber rafter connections and exposed ceiling beam trusses.",
    challenges: "Accommodating heavy mountain snow loads (10.5 kPa design limits) within airtight wall parameters.",
    solutions: "Pre-fabricated dowel-connected heavy timbers with hidden steel knife plates to prevent thermal bridges.",
    outcome: "Completed structural framing with a perfect airtight building envelope score.",
    goals: [
      "High-load timber truss connections",
      "Zero thermal bridge framing transitions",
      "Intricate traditional joinery styling"
    ],
    materials: ["Douglas Fir timbers", "Hidden internal steel plates", "Thermal isolation breaks"],
    timeline: "12 Weeks"
  },
  {
    id: "metrotown-structural-shell",
    title: "Fourplex project in Vernon bc",
    location: "Vernon, BC",
    serviceType: "Multi-Family ICF Concrete Foundation",
    year: "2023",
    sqFt: "12,800 SQ. FT.",
    image: images.image20,
    description: "High-density multi-family foundation shell constructed with advanced monolithic ICF blocks.",
    challenges: "Mitigating structural vibration and sound transfer from the adjacent rapid urban transit railway corridor.",
    solutions: "Poured heavy reinforced concrete walls using double-layered insulating foam boundaries to isolate noise.",
    outcome: "Achieved superior acoustic sound-dampening insulation ratings exceeding local municipal guidelines.",
    goals: [
      "Continuous R-24 thermal insulated envelope",
      "High sound transmission class (STC) rating",
      "Rigid reinforcing steel bar matrices"
    ],
    materials: ["Nudura ICF blocks", "Grade 60 steel rebar", "Waterproofing membrane layering"],
    timeline: "8 Weeks"
  },
  {
    id: "park-residence-vancouver",
    title: "Park Residence Vancouver",
    location: "Vancouver, BC",
    serviceType: "Luxury Residential Wood Framing",
    year: "2024",
    sqFt: "6,500 SQ. FT.",
    image: images.project4,
    description: "Pre-fabricated luxury timber panel erection and high-load shear wall framing for an upscale park-side estate.",
    challenges: "High lateral wind loads from open park borders and strict architectural height limits.",
    solutions: "Installed heavy-duty Simpson tie-downs and grade-60 structural steel boundary struts.",
    outcome: "Completed all wood framing ahead of schedule, passing engineering inspection on first review.",
    goals: [
      "Seismic shear walls alignment",
      "Airtight building envelope wraps",
      "Zero-deflection roof joists"
    ],
    materials: ["Premium kiln-dried studs", "Simpson structural tie-downs", "Engineered LVL beams"],
    timeline: "11 Weeks"
  },
  {
    id: "lakeside-4-plex-vancouver",
    title: "Lakeside 4 Plex, Vancouver",
    location: "Vancouver, BC",
    serviceType: "Multi-Family Residential Framing",
    year: "2024",
    sqFt: "9,800 SQ. FT.",
    image: images.project5,
    description: "Complete wood framing skeleton and envelope moisture barrier wraps for a premium multi-family 4-plex.",
    challenges: "Extremely tight workspace parameters near lakeside soil and strict noise control rules.",
    solutions: "Leveraged off-site component pre-fabrication and scheduled crane placements to prevent site congestion.",
    outcome: "Erected the main 4-plex skeleton structure with zero delay, handing off ahead of schedule.",
    goals: [
      "Sound transmission class (STC) boundaries",
      "Waterproof below-grade envelope",
      "Rigid timber trusses setup"
    ],
    materials: ["Interlocking wood trusses", "High-performance house wrap", "Heavy structural fasteners"],
    timeline: "13 Weeks"
  },
  {
    id: "heritage-building-restoration-vancouver",
    title: "Heritage Building Restoration, Vancouver",
    location: "Vancouver, BC",
    serviceType: "Structural Remediation & Timber Repair",
    year: "2025",
    sqFt: "8,200 SQ. FT.",
    image: images.project6_1,
    images: [images.project6_1, images.project6_2],
    description: "Structural remediation and timber post-and-beam restoration of a historic building to bring it to modern code.",
    challenges: "Shoring historic heavy load-bearing timber members without causing settlement cracks to heritage brickwork.",
    solutions: "Transferred structural loads to temporary needle shoring columns while replacing degraded foundations.",
    outcome: "Stabilized structural components perfectly, achieving 100% building code compliance.",
    goals: [
      "Preserve historic timber beams",
      "Seismic foundation reinforcement",
      "Zero structural movement during shoring"
    ],
    materials: ["Salvaged Douglas Fir timbers", "Structural epoxy grout", "Heavy-gauge steel connectors"],
    timeline: "16 Weeks"
  },
  {
    id: "tsawassen-townhouse-project",
    title: "Tsawassen Townhouse Project",
    location: "Delta/Tsawwassen, BC",
    serviceType: "Multi-Family Townhouse Concrete & Framing",
    year: "2025",
    sqFt: "18,400 SQ. FT.",
    image: "",
    videos: [images.project7_1, images.project7_2],
    description: "Heavy structural foundations, concrete formwork, and multi-family framing layout for a premium townhouse development.",
    challenges: "Managing massive concrete pours and framing layout placements on low-bearing delta soils.",
    solutions: "Poured double-reinforced thick slab concrete footings combined with high-grade timber load walls.",
    outcome: "Created a solid structural base and frame layout, ready for mechanical/electrical rough-in.",
    goals: [
      "Low-bearing soil foundation slab",
      "Monolithic concrete pours consistency",
      "Accurate partition framing"
    ],
    materials: ["High-strength concrete mix", "Rebar cage reinforcement matrices", "Premium structural lumber"],
    timeline: "18 Weeks"
  }
];

export const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [activeMediaIndices, setActiveMediaIndices] = useState<Record<string, number>>({});

  useEffect(() => {
    document.title = "Projects | Military Homes Construction Ltd.";
  }, []);

  const handlePrevMedia = (projectId: string, mediaLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveMediaIndices((prev) => {
      const current = prev[projectId] || 0;
      const next = current === 0 ? mediaLength - 1 : current - 1;
      return { ...prev, [projectId]: next };
    });
  };

  const handleNextMedia = (projectId: string, mediaLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveMediaIndices((prev) => {
      const current = prev[projectId] || 0;
      const next = current === mediaLength - 1 ? 0 : current + 1;
      return { ...prev, [projectId]: next };
    });
  };

  const toggleCaseStudy = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  // Framer Motion Animation Variants
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
          I. CINEMATIC PORTFOLIO HERO
          ======================================================= */}
      <section className="relative w-full h-[75vh] min-h-[500px] bg-[#ebe6fa] flex items-center overflow-hidden">
        {/* AI Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={images.projects_hero_bg} 
            alt="Projects portfolio background" 
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
        
        <div className="mx-auto max-w-[1200px] w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero: Editorial Intro */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-7 flex flex-col gap-6 text-[#240a40]"
          >
            <span className="font-body text-xs font-black tracking-[0.3em] text-[#7f00ff] uppercase">
              MILITARY HOMES // SELECTED WORKS
            </span>
            <h1 className="font-heading text-clamp-section font-black uppercase leading-tight text-primary">
              Erecting enduring structures with engineering precision
            </h1>
            <div className="w-20 h-[3px] bg-accent" />
            <p className="font-body text-sm text-primary/80 max-w-xl leading-relaxed">
              Explore our selection of flagship custom homes, structural ICF foundations, and heavy timber framing projects delivered across British Columbia.
            </p>
          </motion.div>

          {/* Right Hero: Animated Stats Grid */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-white/60 border border-primary/10 rounded-[4px] backdrop-blur-md shadow-premium">
              <span className="font-heading text-3xl font-black text-accent block">500+</span>
              <span className="font-body text-xs text-primary/70 mt-1 block">Projects Completed</span>
            </div>
            <div className="p-6 bg-white/60 border border-primary/10 rounded-[4px] backdrop-blur-md shadow-premium">
              <span className="font-heading text-3xl font-black text-accent block">20+</span>
              <span className="font-body text-xs text-primary/70 mt-1 block">Years Experience</span>
            </div>
            <div className="p-6 bg-white/60 border border-primary/10 rounded-[4px] backdrop-blur-md shadow-premium">
              <span className="font-heading text-xl font-black text-primary block uppercase tracking-wider">BC Wide</span>
              <span className="font-body text-xs text-primary/70 mt-1 block">Licensed & Insured</span>
            </div>
            <div className="p-6 bg-white/60 border border-primary/10 rounded-[4px] backdrop-blur-md shadow-premium">
              <span className="font-heading text-xl font-black text-primary block uppercase tracking-wider">Safety</span>
              <span className="font-body text-xs text-primary/70 mt-1 block">WorkSafeBC Certified</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          II. Flagship Project Compositions
          ======================================================== */}
      <section className="py-24 bg-white bg-architecture-lines">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col gap-32">
          
          {FLAGSHIP_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const isOpen = expandedProject === project.id;

            return (
              <div key={project.id} className="scroll-mt-[100px] border-b border-border/50 pb-20 last:border-none">
                
                {/* Alternate Section Layout Composition */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative`}>
                  
                  {/* Oversized background count */}
                  <div className="absolute -top-16 right-0 font-heading text-[15vw] font-black text-[#7f00ff]/3 leading-none select-none pointer-events-none">
                    0{index + 1}
                  </div>

                  {/* Image/Video Frame (Swaps side depending on index) */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={imageReveal}
                    className={`lg:col-span-6 relative group ${!isEven ? 'lg:order-last' : ''}`}
                  >
                    <div className="relative aspect-square rounded-[4px] overflow-hidden shadow-premium border border-border bg-white p-2 flex items-center justify-center">
                      {project.videos && project.videos.length > 0 ? (
                        // Videos Slider
                        <div className="relative w-full h-full">
                          <video
                            key={project.videos[activeMediaIndices[project.id] || 0]}
                            src={project.videos[activeMediaIndices[project.id] || 0]}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-[4px]"
                          />
                          {project.videos.length > 1 && (
                            <>
                              <button
                                onClick={(e) => handlePrevMedia(project.id, project.videos!.length, e)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full border border-border shadow-sm cursor-pointer z-20 flex items-center justify-center"
                                aria-label="Previous Video"
                              >
                                <ChevronLeft size={16} />
                              </button>
                              <button
                                onClick={(e) => handleNextMedia(project.id, project.videos!.length, e)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full border border-border shadow-sm cursor-pointer z-20 flex items-center justify-center"
                                aria-label="Next Video"
                              >
                                <ChevronRight size={16} />
                              </button>
                              {/* Slide Indicator */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-[#240a40]/80 px-3 py-1 rounded-full text-white text-[10px] font-bold">
                                {(activeMediaIndices[project.id] || 0) + 1} / {project.videos.length}
                              </div>
                            </>
                          )}
                        </div>
                      ) : project.images && project.images.length > 0 ? (
                        // Images Slider
                        <div className="relative w-full h-full">
                          <img
                            key={project.images[activeMediaIndices[project.id] || 0]}
                            src={project.images[activeMediaIndices[project.id] || 0]}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-[4px]"
                          />
                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={(e) => handlePrevMedia(project.id, project.images!.length, e)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full border border-border shadow-sm cursor-pointer z-20 flex items-center justify-center"
                                aria-label="Previous Image"
                              >
                                <ChevronLeft size={16} />
                              </button>
                              <button
                                onClick={(e) => handleNextMedia(project.id, project.images!.length, e)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full border border-border shadow-sm cursor-pointer z-20 flex items-center justify-center"
                                aria-label="Next Image"
                              >
                                <ChevronRight size={16} />
                              </button>
                              {/* Slide Indicator */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-[#240a40]/80 px-3 py-1 rounded-full text-white text-[10px] font-bold">
                                {(activeMediaIndices[project.id] || 0) + 1} / {project.images.length}
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        // Single Image Fallback
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-[4px] transition-transform duration-1000 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-[#240a40]/10 pointer-events-none z-10" />
                    </div>

                    {/* Hover Overlay info card */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm border border-border px-4 py-2 rounded-[4px] shadow-sm font-body text-[10px] text-muted font-bold uppercase tracking-wider z-20">
                      <MapPin size={10} className="inline mr-1 text-accent" /> {project.location}
                    </div>
                  </motion.div>

                  {/* Project Meta and Description */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="lg:col-span-6 flex flex-col gap-6"
                  >
                    <span className="font-body text-xs font-black tracking-widest text-accent uppercase">
                      {project.serviceType}
                    </span>
                    
                    <h2 className="font-heading text-clamp-subheading font-bold text-primary uppercase leading-snug">
                      {project.title}
                    </h2>

                    <div className="w-16 h-[2px] bg-accent" />

                    <p className="font-body text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {/* Specs grid */}
                    <div className="grid grid-cols-3 gap-6 py-4 border-y border-border my-2 font-body text-center">
                      <div>
                        <span className="text-[10px] text-muted block uppercase tracking-wider mb-1">Area</span>
                        <span className="text-xs font-bold text-primary uppercase">{project.sqFt.split(' ')[0]}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-muted block uppercase tracking-wider mb-1">Completed</span>
                        <span className="text-xs font-bold text-primary">{project.year}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-muted block uppercase tracking-wider mb-1">Timeline</span>
                        <span className="text-xs font-bold text-primary">{project.timeline.split(' ')[0]} Wks</span>
                      </div>
                    </div>

                    {/* Interactive toggle buttons */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleCaseStudy(project.id)}
                        className="flex items-center gap-2 px-6 py-3 border border-accent hover:bg-accent hover:text-white text-accent font-body text-xs font-bold uppercase tracking-wider rounded-[4px] cursor-pointer transition-colors duration-300"
                      >
                        <span>{isOpen ? 'Close Case Study' : 'Explore Case Study'}</span>
                        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                      
                      <Link to="/contact">
                        <button className="text-muted hover:text-accent font-body text-xs font-bold uppercase tracking-wider py-3 flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-none">
                          <span>Consult framing specs</span>
                          <ArrowRight size={14} />
                        </button>
                      </Link>
                    </div>

                  </motion.div>

                </div>

                {/* EXPANDABLE INLINE CASE STUDY DRAWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-10"
                    >
                      <div className="bg-secondary-bg border border-border p-8 md:p-12 rounded-[4px] grid grid-cols-1 lg:grid-cols-2 gap-12">
                        
                        {/* Left: Case study copy details */}
                        <div className="flex flex-col gap-6">
                          <div>
                            <h4 className="font-heading text-xs font-extrabold text-accent uppercase tracking-wider mb-2">The Challenges</h4>
                            <p className="font-body text-xs text-muted leading-relaxed">{project.challenges}</p>
                          </div>

                          <div>
                            <h4 className="font-heading text-xs font-extrabold text-accent uppercase tracking-wider mb-2">The Solutions</h4>
                            <p className="font-body text-xs text-muted leading-relaxed">{project.solutions}</p>
                          </div>

                          <div>
                            <h4 className="font-heading text-xs font-extrabold text-accent uppercase tracking-wider mb-2">Structural Outcomes</h4>
                            <p className="font-body text-xs text-muted leading-relaxed">{project.outcome}</p>
                          </div>
                        </div>

                        {/* Right: Goals checklist & Materials list */}
                        <div className="flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-12">
                          <div>
                            <h4 className="font-heading text-xs font-extrabold text-accent uppercase tracking-wider mb-3">Project Alignment Goals</h4>
                            <ul className="flex flex-col gap-2 font-body text-xs text-muted">
                              {project.goals.map((g, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <Check size={12} className="text-accent mt-0.5 shrink-0" />
                                  <span>{g}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-heading text-xs font-extrabold text-accent uppercase tracking-wider mb-3">Material Specifications</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.materials.map((m, idx) => (
                                <span key={idx} className="bg-white border border-border text-muted text-[10px] uppercase font-body px-3 py-1.5 rounded-[2px] shadow-sm">
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>
      </section>

      {/* ========================================================
          III. CLIMACTIC HIGH-CONVERSION CTA
          ======================================================== */}
      <section className="relative py-32 bg-[#240a40] text-white text-center overflow-hidden">
        {/* Blueprint background grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 soft-glow-radial" />
        
        <div className="mx-auto max-w-[800px] px-6 relative z-10 flex flex-col items-center gap-6">
          <span className="font-body text-xs font-black tracking-[0.3em] text-accent uppercase">
            Ready to Build
          </span>
          
          <h2 className="font-heading text-clamp-section font-bold uppercase leading-tight">
            Ready to Build Something Exceptional?
          </h2>
          
          <p className="font-body text-sm text-white/80 max-w-lg leading-relaxed">
            Partner with Western Canada's premier structural wood framing and concrete foundation specialists. Get in touch with our operations manager to review your engineering blueprints.
          </p>

          <div className="w-16 h-[2px] bg-white/20 my-2" />

          {/* Double Button CTA Block */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/contact">
              <button className="bg-accent hover:bg-[#5900cc] text-white px-8 py-4 font-body text-xs font-bold uppercase tracking-wider rounded-[4px] border-none transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_8px_24px_rgba(127,0,255,0.2)] flex items-center gap-2">
                <span>Request a Quote</span>
                <ArrowRight size={12} />
              </button>
            </Link>
            
            <a href="tel:+17787101033">
              <button className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-4 font-body text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors duration-300 cursor-pointer">
                Speak with a Project Manager
              </button>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
