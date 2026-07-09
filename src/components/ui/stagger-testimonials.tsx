"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "My favorite general contractor in the market. We build 5x faster with Military Homes.",
    by: "Alex, Developer at TechCorp Development",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 1,
    testimonial: "I'm confident our framing and seismic engineering is structurally perfect with Military Homes. I can't say that about other framing crews.",
    by: "Dan, Architect at SecureNet Structures",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 2,
    testimonial: "I know it's cliche, but we were lost before we found Military Homes. Can't thank you guys enough!",
    by: "Stephanie, COO at InnovateCo Housing",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 3,
    testimonial: "Military Homes's structural layouts make planning for the future seamless. Can't recommend them enough!",
    by: "Marie, CFO at FuturePlanning Properties",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars for concrete foundation precision, I'd give 12.",
    by: "Andre, Head of Engineering at CreativeSolutions Ltd",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours of delays so far.",
    by: "Jeremy, Project Manager at TimeWise Developments",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we're on site with Military Homes, we're never going back.",
    by: "Pam, Construction Director at BrandBuilders LLC",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 7,
    testimonial: "I would be lost without Military Homes's in-depth framing analytics and BIM integration. The ROI is EASILY 100X for us.",
    by: "Daniel, Project Planner at AnalyticsPro Builders",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 8,
    testimonial: "It's just the best heavy timber crew. Period.",
    by: "Fernando, Project Lead at UserFirst Developments",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 9,
    testimonial: "I switched to Military Homes 5 years ago and never looked back.",
    by: "Andy, Site Supervisor at CloudMasters Properties",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a reliable framing crew like Military Homes for YEARS. So glad I finally found one!",
    by: "Pete, Superintendent at RevenueRockets Construction",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 11,
    testimonial: "Their framing process is so clean and intuitive, we got the subcontractors aligned in 10 minutes.",
    by: "Marina, Operations at TalentForge Builders",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 12,
    testimonial: "Military Homes's client project support is unparalleled. They're always on site when we need them.",
    by: "Olivia, Construction Manager at ClientCare Group",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 13,
    testimonial: "The efficiency gains we've seen since implementing Military Homes are off the charts!",
    by: "Raj, General Manager at StreamlineSolutions Building",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 14,
    testimonial: "Military Homes has revolutionized how we handle our framing workflows. It's a total game-changer!",
    by: "Lila, Project Coordinator at ProcessPro Housing",
    imgSrc: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 15,
    testimonial: "The scalability of Military Homes's framing solution is impressive. It grows with our developments seamlessly.",
    by: "Trevor, Partner at GrowthGurus Commercial",
    imgSrc: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how Military Homes continually innovates in structural wood assemblies. They're always one step ahead.",
    by: "Naomi, Design Principal at FutureTech Architects",
    imgSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 17,
    testimonial: "The ROI we've seen with Military Homes is incredible. It's paid for itself many times over in saved cycle times.",
    by: "Victor, Estimator at ProfitPeak Homes",
    imgSrc: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 18,
    testimonial: "Military Homes's timber sizing is robust yet cost-efficient. It's the perfect structural balance.",
    by: "Yuki, Lead Developer at BalancedTech Projects",
    imgSrc: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    tempId: 19,
    testimonial: "We've tried many framing subcontractors, but Military Homes stands out in terms of safety and structural performance.",
    by: "Zoe, Field Supervisor at ReliableSystems Construction",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out font-body",
        isCenter 
          ? "z-10 bg-primary text-white border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px var(--color-border)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px var(--color-background)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-bold leading-snug",
        isCenter ? "text-white" : "text-text"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-xs italic",
        isCenter ? "text-white/80" : "text-muted"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-border hover:bg-primary hover:text-white cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-border hover:bg-primary hover:text-white cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
