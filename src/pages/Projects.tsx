import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { images } from '../constants/images';

const CATEGORIES = ["All", "Custom Homes", "Framing", "Foundations"];

interface ProjectImage {
  src: string;
  alt: string;
  category: "Custom Homes" | "Framing" | "Foundations";
  caption: string;
}

const ALL_PROJECTS: ProjectImage[] = [
  {
    src: images.image11,
    alt: "Custom timber skeleton layout",
    category: "Custom Homes",
    caption: "Heavy architectural timber framing",
  },
  {
    src: images.image12,
    alt: "Ridgeview Residence exterior framing",
    category: "Custom Homes",
    caption: "The Ridgeview Residence",
  },
  {
    src: images.image20,
    alt: "Multi-family ICF concrete shell",
    category: "Foundations",
    caption: "The Metrotown Structural Shell",
  },
  {
    src: images.image4,
    alt: "Advanced ICF concrete foundation walls",
    category: "Foundations",
    caption: "Insulated Concrete Form assembly",
  },
  {
    src: images.image1,
    alt: "Architectural home wood framing skeleton",
    category: "Framing",
    caption: "Custom residential timber lockup",
  },
  {
    src: images.image2,
    alt: "Foundation remediation underpinning work",
    category: "Foundations",
    caption: "Foundation underpinning & pouring",
  },
  {
    src: images.image3,
    alt: "High-load concrete foundation wall footing",
    category: "Foundations",
    caption: "Heavy-duty foundation footing",
  },
  {
    src: images.image5,
    alt: "Architectural deck and column framing",
    category: "Framing",
    caption: "Outdoor architectural deck framing",
  },
  {
    src: images.image6,
    alt: "Timber truss roof installation",
    category: "Framing",
    caption: "Heavy-timber truss construction",
  },
  {
    src: images.image7,
    alt: "Plumb lines and leveling alignment check",
    category: "Framing",
    caption: "Millimeter-precision laser alignment",
  },
  {
    src: images.image8,
    alt: "Custom home vaulted ceiling framing",
    category: "Custom Homes",
    caption: "Vaulted ceiling timber framing",
  },
  {
    src: images.image9,
    alt: "Precision rafters tail framing cuts",
    category: "Framing",
    caption: "Complex roof rafter geometry",
  },
  {
    src: images.image10,
    alt: "Floor joist system spacing setup",
    category: "Framing",
    caption: "Multi-story floor joist spacing",
  },
  {
    src: images.image13,
    alt: "Commercial high-load roof decking",
    category: "Framing",
    caption: "Commercial heavy wood roof system",
  },
  {
    src: images.image14,
    alt: "Wood stud wall panel assembly",
    category: "Framing",
    caption: "Structural wall panel construction",
  },
  {
    src: images.image15,
    alt: "Architectural concrete column forms",
    category: "Foundations",
    caption: "Heavy concrete structural columns",
  },
  {
    src: images.image16,
    alt: "Architectural wood stairs stringer framing",
    category: "Framing",
    caption: "Custom staircase timber stringers",
  },
  {
    src: images.image17,
    alt: "Precision timber connection brackets",
    category: "Framing",
    caption: "Structural steel-to-wood joinery",
  },


  {
    src: images.image21,
    alt: "Duplex multi-family timber framing",
    category: "Framing",
    caption: "Multi-family framing skeleton",
  },
  {
    src: images.image22,
    alt: "Commercial wood studs layout",
    category: "Framing",
    caption: "Light-commercial retail framing",
  },
  {
    src: images.image23,
    alt: "Commercial mixed steel and wood construction",
    category: "Custom Homes",
    caption: "Mixed-use architectural framing",
  }
];

export const Projects: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "Projects | Military Homes Construction Ltd. (MHCL)";
    
    const categoryParam = searchParams.get('category');
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setFilter(categoryParam);
    }
  }, [searchParams]);

  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    return proj.category === filter;
  });

  return (
    <div className="w-full pt-[90px] bg-background text-primary">
      
      {/* 1. PORTFOLIO HERO */}
      <section className="py-24 bg-secondary-bg border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="font-body text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                Selected Works
              </span>
              <h1 className="font-heading text-clamp-hero font-normal leading-tight text-primary">
                Casting & framing, <br />
                <span className="italic font-light text-accent">precision documented.</span>
              </h1>
              <p className="font-body text-sm md:text-base leading-relaxed text-muted font-light max-w-lg">
                Explore our detailed structural wood framing, ICF concrete foundations, and custom home construction completions across Greater Vancouver and British Columbia.
              </p>
            </div>

            {/* Filter Navigation */}
            <div className="flex flex-wrap items-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-body text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 border transition-colors duration-300 focus:outline-none cursor-pointer rounded-lg ${
                    filter === cat
                      ? 'border-accent text-accent bg-accent/5'
                      : 'border-border text-muted hover:text-primary hover:border-muted'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID SECTION */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          {filteredProjects.length > 0 ? (
            <GalleryGrid images={filteredProjects} />
          ) : (
            <div className="text-center py-20">
              <p className="font-heading text-2xl italic text-muted">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
