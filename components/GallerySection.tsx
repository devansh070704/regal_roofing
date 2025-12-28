
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProject {
  id: number;
  title: string;
  location: string;
  image: string;
}

const galleryItems: GalleryProject[] = [
  {
    id: 1,
    title: "Residential Tile Roof Restoration",
    location: "Wanstead, East London",
    image: "/images/bento-completed-houses.jpg"
  },
  {
    id: 2,
    title: "Flat Roof Replacement",
    location: "Ilford, Essex",
    image: "/images/bento-flat-roof.jpg"
  },
  {
    id: 3,
    title: "Commercial Flat Roofing",
    location: "Chigwell, Essex",
    image: "/images/service-flat-roof.jpg"
  },
  {
    id: 4,
    title: "Complete Guttering System",
    location: "Loughton, Essex",
    image: "/images/service-guttering-systems.jpg"
  },
  {
    id: 5,
    title: "Heritage Tile Roof Repair",
    location: "Brentwood, Essex",
    image: "/images/bento-chimney-work.jpg"
  }
];

export const GallerySection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Adjusted spring transition: decreased stiffness from 200 to 100 
  // and damping from 20 to 22 for a slower, smoother, more premium "heavy" expansion.
  // Professional easing for a "fluid" expansion feel
  const galleryTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  } as const;

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#C41E3A' }}>Our Work</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Quality Workmanship Across East London
          </p>
        </div>

        {/* Desktop View: Expanding Horizontal Accordion */}
        <div className="hidden lg:flex h-[600px] gap-4">
          {galleryItems.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <motion.div
                key={item.id}
                layoutId={`gallery-card-${item.id}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                transition={galleryTransition}
                style={{ willChange: 'flex' }}
                className={`
                  relative overflow-hidden rounded-[2.5rem] cursor-pointer group transform-gpu
                  ${isHovered ? 'flex-[6]' : 'flex-[1]'}
                `}
              >
                {/* Image container with CSS transition for smoother resizing */}
                <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `} />

                {/* Content */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      className="absolute bottom-10 left-10 text-white z-10"
                    >
                      <h3 className="text-3xl font-bold mb-1 tracking-tight">{item.title}</h3>
                      <p className="text-white/70 font-medium uppercase tracking-widest text-sm">{item.location}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed label (vertical) */}
                {!isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="rotate-[-90deg] whitespace-nowrap text-slate-200 font-bold uppercase tracking-widest text-xs pointer-events-none">
                      Project 0{item.id}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Standard Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative h-[300px] overflow-hidden rounded-3xl">
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/70 text-xs uppercase tracking-widest">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
