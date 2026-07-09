import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
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
}

const FLAGSHIP_PROJECTS: CaseStudyType[] = [
  {
    id: "ridgeview-residence",
    title: "The Ridgeview Custom Residence",
    location: "West Vancouver, BC",
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
    title: "The Whistler Timber Passivhaus",
    location: "Whistler, BC",
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
    id: "kitsilano-underpinning-remediation",
    title: "The Kitsilano Underpinning & Remediation",
    location: "Kitsilano, Vancouver, BC",
    serviceType: "Structural Underpinning & Basement Lowering",
    year: "2024",
    sqFt: "3,200 SQ. FT. (Remodeled)",
    image: images.image2,
    description: "Heritage structure foundation repair and basement excavation lowering to establish modern code compliance.",
    challenges: "Sustaining active load points of a 100-year-old wood frame while excavating 4 feet below footings.",
    solutions: "Transferred building loads onto temporary steel needle shoring beams and poured new concrete footings in stages.",
    outcome: "Successfully established safe headroom clearance with zero wall settlement or stress cracks.",
    goals: [
      "Lower basement floor slab safely",
      "Reinforce structural soil pressure resistance",
      "Preserve historical timber frames"
    ],
    materials: ["Steel shoring H-beams", "Self-consolidating concrete (SCC)", "Polyurethane injections"],
    timeline: "10 Weeks"
  },
  {
    id: "metrotown-structural-shell",
    title: "The Metrotown Structural Shell",
    location: "Burnaby, BC",
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
    id: "fraser-valley-icf-assembly",
    title: "The Fraser Valley ICF Assembly",
    location: "Abbotsford, BC",
    serviceType: "ICF Foundations and Waterproofing",
    year: "2023",
    sqFt: "6,200 SQ. FT.",
    image: images.image4,
    description: "Advanced Insulated Concrete Form foundation walls built to handle high lateral water pressure table conditions.",
    challenges: "Preventing water ingress from a surrounding high alluvial water table basin.",
    solutions: "Assembled interlocking ICF blocks integrated with external dimpled drainage mats and dual sump lines.",
    outcome: "Delivered a fully waterproofed basement foundation shell with R-22 insulation values.",
    goals: [
      "Achieve 100% moisture envelope protection",
      "Continuous concrete core fill alignment",
      "Establish soundproof cellar boundaries"
    ],
    materials: ["Monolithic ICF units", "Dimpled air-gap membrane", "Premium structural concrete"],
    timeline: "6 Weeks"
  },
  {
    id: "ridgeview-vaulted-ceilings",
    title: "The Ridgeview Vaulted Ceilings",
    location: "West Vancouver, BC",
    serviceType: "Custom Home Vaulted Timber Framing",
    year: "2024",
    sqFt: "3,800 SQ. FT.",
    image: images.image8,
    description: "Intricate ceiling framing geometries, custom timber post caps, and vaulted wood rafters.",
    challenges: "Calculating complex geometric intersections across a multi-slope roofline.",
    solutions: "Mapped layout coordinates using precision laser distance calculators and CNC-trimmed wood joints.",
    outcome: "Delivered a visually striking, structurally sound vaulted roof frame ready for drywall.",
    goals: [
      "Calculate compound miter cuts precisely",
      "Erect exposed structural ceiling collar ties",
      "Seamless drywall backing alignment"
    ],
    materials: ["Premium kiln-dried timber", "Structural wood screws", "Exposed hardware details"],
    timeline: "5 Weeks"
  },
  {
    id: "coquitlam-multi-family-framing-skeleton",
    title: "The Coquitlam Duplex Skeleton",
    location: "Coquitlam, BC",
    serviceType: "Multi-Family Framing Skeleton",
    year: "2023",
    sqFt: "7,200 SQ. FT.",
    image: images.image21,
    description: "Comprehensive wood skeleton framing for a multi-family duplex structure.",
    challenges: "Erecting tall multi-level wall panels on a high-density lot with limited working space.",
    solutions: "Staged materials off-site and coordinated rapid panel crane placements to prevent site logjams.",
    outcome: "Erected the main duplex wood skeleton ahead of schedule, enabling rapid lock-up handoff.",
    goals: [
      "Erect firewall partition framing to code",
      "Precise window header alignment",
      "Stiff structural floor joist setups"
    ],
    materials: ["Select lumber framing studs", "Structural floor trusses", "Sheathing membrane barriers"],
    timeline: "9 Weeks"
  },
  {
    id: "kitsilano-roof-truss-assembly",
    title: "The Kitsilano Roof Truss Assembly",
    location: "Vancouver, BC",
    serviceType: "Heavy Timber Truss Construction",
    year: "2024",
    sqFt: "2,400 SQ. FT.",
    image: images.image6,
    description: "Architectural roof truss framing, collar ties, and ridge beam framing installations.",
    challenges: "Handling heavy timbers on a narrow residential street with overhead power utility constraints.",
    solutions: "Utilized specialized compact cranes and manual hoist systems to slide roof members into place.",
    outcome: "Assembled the entire roof framework with zero utility disruptions and perfect plumb lines.",
    goals: [
      "Rigid truss-to-wall load anchoring",
      "Clean exposed ceiling timber joints",
      "Perfect ridge line alignment"
    ],
    materials: ["Architectural grade timber trusses", "Heavy structural lag screws", "Steel roof connector plates"],
    timeline: "3 Weeks"
  },
  {
    id: "kitsilano-mixed-use-architectural-framing",
    title: "The Kitsilano Mixed-Use Framing",
    location: "Vancouver, BC",
    serviceType: "Mixed-Use Wood & Steel Architectural Framing",
    year: "2025",
    sqFt: "14,200 SQ. FT.",
    image: images.image23,
    description: "Complex mixed-use wood-and-steel architectural framing, stair structures, and load integrations.",
    challenges: "Directing complex load transfers from irregular architectural roof geometries down to structural foundations.",
    solutions: "Employed heavy-timber frame columns combined with hidden steel joist hangers and tie-downs.",
    outcome: "Achieved structural lock-up with zero layout errors, ensuring 100% plan compliance.",
    goals: [
      "Execute complex load distribution maps",
      "Custom timber-to-steel connections",
      "Plumb alignment of complex architectural headers"
    ],
    materials: ["Glued Laminated Timber (Glulam) columns", "Structural steel load anchors", "Structural fastening systems"],
    timeline: "11 Weeks"
  }
];

export const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Projects | Military Homes Construction Ltd.";
  }, []);

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

                  {/* Image Frame (Swaps side depending on index) */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={imageReveal}
                    className={`lg:col-span-6 relative group ${!isEven ? 'lg:order-last' : ''}`}
                  >
                    <div className="relative aspect-square rounded-[4px] overflow-hidden shadow-premium border border-border bg-white p-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-[4px] transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#240a40]/10 pointer-events-none" />
                    </div>

                    {/* Hover Overlay info card */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm border border-border px-4 py-2 rounded-[4px] shadow-sm font-body text-[10px] text-muted font-bold uppercase tracking-wider">
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
