
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 0,
    title: "Chimney Repairs",
    description: "Expert stack rebuilding, repointing, and leadwork to ensure structural integrity and prevent leaks.",
    image: "/images/service-chimney-repairs.jpg"
  },
  {
    id: 1,
    title: "Flat Roof Repairs",
    description: "Specialist repairs for all flat roof systems using modern materials for long-lasting protection.",
    image: "/images/service-flat-roof.jpg"
  },
  {
    id: 2,
    title: "Gutter Repairs",
    description: "Fast and reliable fixes for leaks, sags, and damage to maintain effective water flow.",
    image: "/images/service-gutter-repairs.jpg"
  },
  {
    id: 3,
    title: "Guttering Systems",
    description: "Complete installation of high-quality, modern guttering systems designed for durability.",
    image: "/images/service-guttering-systems.jpg"
  },
  {
    id: 4,
    title: "Roof Tile Repairs",
    description: "Precision replacement of broken or missing tiles to restore the beauty and function of your roof.",
    image: "/images/service-roof-tile.jpg"
  },
  {
    id: 5,
    title: "Slate Roof Repairs",
    description: "Specialized restoration and repair of traditional slate roofs maintaining original character.",
    image: "/images/service-slate-roof.jpg"
  },
  {
    id: 6,
    title: "Tiled Roof Repairs",
    description: "Comprehensive repairs for pitched tiled roofs ensuring complete weather protection.",
    image: "/images/service-tiled-roof.jpg"
  },
  {
    id: 7,
    title: "New Zinc Valleys",
    description: "Expert installation of zinc valleys providing superior durability and aesthetic appeal.",
    image: "/images/service-zinc-valleys.jpg"
  },
  {
    id: 8,
    title: "New Lead Valleys",
    description: "Traditional lead valley installation ensuring perfectly watertight roof intersections.",
    image: "https://media.istockphoto.com/id/901964116/photo/metal-roof-with-rain-gutter-pipeline-system-and-holders.webp?a=1&b=1&s=612x612&w=0&k=20&c=1KpBgpOmb1E8W3bOiFiEz2oXW-pzQAXtxfT1Zl-ivtI="
  },
  {
    id: 9,
    title: "New Lead Flashings",
    description: "Professional lead flashing work for chimneys, walls, and joints to prevent water ingress.",
    image: "https://media.istockphoto.com/id/901956902/photo/close-up-on-roof-gutter-holder-and-guttering-downspout-pipe-with-clay-tiles-roof-installing.webp?a=1&b=1&s=612x612&w=0&k=20&c=wqzQ6ad6qiVrgDd6v6DR2BnHOQhb3JJQD1e5TaDqFDs="
  }
];

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [prevService, setPrevService] = useState<number>(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-based progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Update active service based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isHovering) return; // Don't update on scroll if user is hovering

    // Calculate which service should be active based on scroll progress
    const serviceIndex = Math.min(
      Math.floor(latest * services.length),
      services.length - 1
    );

    if (serviceIndex !== activeService && serviceIndex >= 0) {
      handleServiceChange(serviceIndex);
    }
  });

  const handleServiceChange = (index: number) => {
    if (index !== activeService) {
      setDirection(index > activeService ? 'down' : 'up');
      setPrevService(activeService);
      setActiveService(index);
    }
  };

  // Calculate progress based on active service (0-100%)
  const progressHeight = ((activeService + 1) / services.length) * 100;

  // Clip-path variants for image reveal
  const imageVariants = {
    enter: (dir: 'up' | 'down') => ({
      clipPath: dir === 'down'
        ? 'polygon(0 0, 100% 0, 100% 0, 0 0)'
        : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      opacity: 1,
    }),
    center: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
    },
    exit: (dir: 'up' | 'down') => ({
      clipPath: dir === 'down'
        ? 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
        : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      opacity: 1,
    }),
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#C41E3A' }}>Our Services</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-2xl">
            Comprehensive Roofing Services
          </p>
          <p className="mt-4 text-slate-500 max-w-3xl leading-relaxed">
            We offer a full range of professional roofing services to meet all your residential and commercial needs across East London and Essex.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: Vertical List with Progress Line */}
          <div
            className="flex-1 relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Background Track Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-100 rounded-full" />

            {/* Animated Progress Fill */}
            <motion.div
              className="absolute left-0 top-0 w-[3px] rounded-full origin-top"
              style={{ backgroundColor: '#C41E3A' }}
              initial={{ height: '25%' }}
              animate={{ height: `${progressHeight}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="space-y-8 lg:space-y-12 py-6 lg:py-10">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => { serviceRefs.current[index] = el; }}
                  onMouseEnter={() => handleServiceChange(index)}
                  onClick={() => handleServiceChange(index)}
                  className="group cursor-pointer relative pl-8 lg:pl-10 transition-all duration-300"
                >
                  {/* Active Dot Indicator */}
                  <motion.div
                    className="absolute left-[-5px] lg:left-[-4px] top-2 w-[9px] h-[9px] lg:w-[11px] lg:h-[11px] rounded-full border-2 bg-white"
                    animate={{
                      scale: activeService === index ? 1 : 0.7,
                      borderColor: activeService === index ? '#C41E3A' : '#e2e8f0',
                      backgroundColor: activeService === index ? '#C41E3A' : '#ffffff',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    animate={{
                      x: activeService === index ? 0 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3
                      className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 lg:mb-3 transition-colors duration-500 ${activeService === index ? 'text-slate-900' : 'text-slate-300'
                        }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm lg:text-lg leading-relaxed max-w-md transition-colors duration-500 ${activeService === index ? 'text-slate-600' : 'text-slate-300'
                        }`}
                    >
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile View Images */}
            <div className="lg:hidden mt-8 relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={activeService}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Sticky Image with Clip-Path Reveal */}
          <div className="hidden lg:block flex-1 sticky top-24 h-[600px]">
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
              {/* Background image (previous) */}
              <img
                src={services[prevService].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Foreground image with clip-path reveal */}
              <AnimatePresence mode="sync" custom={direction}>
                <motion.img
                  key={activeService}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              {/* Service Number Badge */}
              <motion.div
                key={`badge-${activeService}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-sm font-bold text-slate-900">
                  {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
