import { images } from './images';

export const COMPANY = {
  name: "Military Homes Construction Ltd.",
  shortName: "MHCL",
  location: "Lower Mainland, British Columbia, Canada",
  phone: "+1 (778) 710-1033",
  phoneRaw: "+17787101033",
  emailPrimary: "militaryconstructionltd@yahoo.com",
  emailSecondary: "mhclframing@gmail.com",
  instagram: "https://www.instagram.com/mhclframing",
  about: "Military Homes Construction Ltd. delivers exceptional craftsmanship across custom homes, residential framing, commercial construction, ICF foundations, and renovation projects throughout British Columbia.",
  story: "Founded on the principles of discipline, operational precision, and uncompromising craftsmanship, Military Homes Construction Ltd. (MHCL) has established itself as one of British Columbia's premier construction framing and foundation contracting partners. We serve custom home builders, commercial developers, and private homeowners who refuse to compromise on structural integrity.",
  mission: "To construct enduring residential and commercial structures throughout British Columbia with absolute precision, utilizing premium materials, rigorous engineering standards, and unmatched professionalism.",
  vision: "To set the standard for architectural wood framing and structural concrete foundations in Western Canada, building spaces that stand the test of time for generations to come.",
};

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  benefits: string[];
}

export const SERVICES: ServiceType[] = [
  {
    id: "house-framing",
    title: "House Framing",
    description: "Architectural timber skeleton framing designed to bear loads with millimeter precision.",
    image: images.house_framing_service,
    details: [
      "Heavy timber framing & wood construction",
      "Calculated load distributions & structural framing",
      "Roof trusses and complex joist installations",
      "Laser-leveled wall framing and ceiling layouts"
    ],
    benefits: [
      "Perfect structural alignment for interior finishing",
      "Strict compliance with BC Building Code standards",
      "Minimized wood shrinkage and warp adjustments",
      "Efficient execution matching strict timeline schedules"
    ]
  },
  {
    id: "custom-homes-framing",
    title: "Custom Homes Framing",
    description: "Masterfully crafted luxury residence framing built in British Columbia's finest neighborhoods.",
    image: images.custom_homes_framing_service,
    details: [
      "Turnkey architectural timber framing",
      "High-end residential framing & luxury materials",
      "Collaborative project management with leading architects",
      "Sustainable structural design & energy compliance"
    ],
    benefits: [
      "Bespoke layout configuration built to your exact design",
      "Premium selection of sustainable, high-grade timbers",
      "Full integration of state-of-the-art building envelopes",
      "Dedicated management from ground excavation to lock-up"
    ]
  },
  {
    id: "icf-foundations",
    title: "ICF Foundations",
    description: "Insulated Concrete Forms for advanced energy efficiency and unparalleled structural strength.",
    image: images.icf_foundations_service,
    details: [
      "Insulated Concrete Form (ICF) design and installation",
      "High R-value thermal performance foundation walls",
      "Superior structural durability against seismic activity",
      "Waterproofing and drainage integration"
    ],
    benefits: [
      "Drastic reduction in heating and cooling energy costs",
      "Unparalleled sound-dampening acoustic performance",
      "Superior moisture, mold, and rot resistance",
      "Engineered concrete cores to resist lateral soil pressures"
    ]
  },
  {
    id: "heritage-building-restoration",
    title: "Heritage Building Restoration",
    description: "Structural remediation, timber post-and-beam restoration, and historical frame stabilization.",
    image: images.heritage_restoration_service,
    details: [
      "Historical heavy timber preservation & post-and-beam repair",
      "Needle shoring & temporary structural load transfer",
      "Seismic reinforcement & foundation retrofitting",
      "Heritage BC Building Code compliance & structural engineering"
    ],
    benefits: [
      "Preserves original architectural heritage and character",
      "Zero structural movement during heavy load-bearing shoring",
      "Full compliance with provincial seismic & safety standards",
      "Custom timber matching and structural epoxy stabilization"
    ]
  },
  {
    id: "foundation-renovation",
    title: "Foundation & Renovation",
    description: "Structural remediation, underpinning, and precision upgrades to preserve heritage framing.",
    image: images.image2,
    details: [
      "Structural underpinning and concrete stabilization",
      "Basement lowering and grade beam enhancements",
      "Waterproofing and earthquake seismic retrofits",
      "Heritage foundation reconstruction"
    ],
    benefits: [
      "Restoration of older homes to modern structural codes",
      "Increased ceiling heights and livable square footage",
      "Enhanced foundation drainage systems to prevent water ingress",
      "Timeless preservation of architectural character"
    ]
  },
  {
    id: "townhouse-framing",
    title: "Townhouse Framing",
    description: "Sophisticated multi-family townhouse framing engineered to endure for generations.",
    image: images.townhouse_framing_service,
    details: [
      "Multi-family townhouse framing & timber assembly",
      "Vapor barrier, air sealing, and high-performance envelopes",
      "Acoustic separation wall framing between units",
      "Structural floor joist grids and roof trusses"
    ],
    benefits: [
      "High-density multi-family townhouse framing solutions",
      "Strict moisture management and vapor barrier sealing",
      "Enhanced sound isolation between unit firewalls",
      "Engineered for rapid mobilization and site efficiency"
    ]
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description: "Heavy-duty commercial framing, structural concrete, and shell construction for premium spaces.",
    image: images.image22,
    details: [
      "Steel stud and heavy wood commercial framing",
      "Concrete structural columns and floor slabs",
      "Retail, office, and institutional shell completions",
      "Strict safety, zoning, and building code compliance"
    ],
    benefits: [
      "Robust commercial timber and light steel framing systems",
      "Engineered for high occupancy load capacities",
      "Seamless coordination with commercial subtrades",
      "Adherence to commercial safety and municipal standards"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We review your architectural plans, structural engineering drawings, and site conditions to align on scope, budget guidelines, and aesthetic expectations."
  },
  {
    step: "02",
    title: "Planning",
    description: "A comprehensive material takeoff and scheduling flow is established. We procure high-grade lumber and coordinate site layouts for immediate setup."
  },
  {
    step: "03",
    title: "Construction",
    description: "Our dedicated framing and foundation crews mobilize. Using precision instruments, we erect structures that exceed BC structural engineering criteria."
  },
  {
    step: "04",
    title: "Completion",
    description: "We perform rigorous quality control checks and walk-throughs with the municipal inspectors and structural engineers to hand off a pristine frame."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Experienced Team",
    description: "Our carpenters and supervisors bring decades of specialized experience in framing complex geometries and pouring heavy-duty concrete foundations."
  },
  {
    title: "Quality Craftsmanship",
    description: "No shortcuts. We build to tight tolerances, ensuring every stud is plumb, every joist is crowned correctly, and every foundation wall is square."
  },
  {
    title: "Reliable Timelines",
    description: "We understand that delay in framing ripples through the entire project schedule. We stick to agreed milestone dates through efficient site logistics."
  },
  {
    title: "Transparent Communication",
    description: "We provide regular photo updates, clear progress reports, and immediate flagging of any site-condition issues to maintain complete trust."
  },
  {
    title: "Professional Project Management",
    description: "From material deliveries to scheduling inspects, our project management keeps operations running smoothly with minimal site congestion."
  },
  {
    title: "Long-Term Durability",
    description: "By combining correct waterproofing membranes, premium timber grades, and sound structural anchoring, we build structures meant to last centuries."
  }
];
