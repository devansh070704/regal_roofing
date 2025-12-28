
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Excellent service from start to finish. The team was professional, punctual, and left our property spotless. Our new roof looks fantastic and we couldn't be happier with the quality of work.",
    author: "Sarah Mitchell",
    role: "Homeowner",
    location: "Woodford, Essex",
  },
  {
    id: 2,
    text: "We've used Regal Roofing for multiple properties across our estate. Their reliability and attention to detail is outstanding. Highly recommended for any roofing work.",
    author: "David Thompson",
    role: "Property Manager",
    location: "Ilford, East London",
  },
  {
    id: 3,
    text: "Quick response to our emergency roof leak. The team arrived within hours, diagnosed the problem, and had it fixed the same day. Fair pricing and great workmanship.",
    author: "James Wilson",
    role: "Homeowner",
    location: "Epping, Essex",
  },
  {
    id: 4,
    text: "Family business with genuine care for their customers. They explained everything clearly, provided a detailed quote, and completed the work ahead of schedule. Would definitely use again.",
    author: "Linda Rogers",
    role: "Homeowner",
    location: "Romford, Essex",
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; idx: number }> = ({ testimonial, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, duration: 0.5 }}
    className="group p-6 md:p-8 rounded-3xl bg-[#f9fafb] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between h-full min-w-[280px] sm:min-w-[320px] lg:min-w-0"
  >
    <div>
      <div className="flex gap-0.5 mb-4 md:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" style={{ color: '#C41E3A' }} />
        ))}
      </div>

      <Quote className="w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4" style={{ color: 'rgba(196, 30, 58, 0.2)' }} />

      <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium italic">
        "{testimonial.text}"
      </p>
    </div>

    <div>
      <h4 className="text-slate-900 font-bold text-sm md:text-base">{testimonial.author}</h4>
      <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">
        {testimonial.role} &bull; {testimonial.location}
      </p>
    </div>
  </motion.div>
);

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-8 md:mb-16">
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2 md:mb-3" style={{ color: '#C41E3A' }}>Customer Reviews</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Clients Say About Us
            </p>
          </div>

          {/* Navigation Arrows - Mobile Only */}
          <div className="flex gap-2 lg:hidden">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border border-slate-200 transition-all ${canScrollLeft ? 'hover:text-white hover:border-transparent' : 'opacity-30 cursor-not-allowed'
                }`}
              style={canScrollLeft ? { ':hover': { backgroundColor: '#C41E3A', borderColor: '#C41E3A' } } : {}}
              onMouseOver={(e) => canScrollLeft && (e.currentTarget.style.backgroundColor = '#C41E3A', e.currentTarget.style.borderColor = '#C41E3A', e.currentTarget.style.color = 'white')}
              onMouseOut={(e) => canScrollLeft && (e.currentTarget.style.backgroundColor = '', e.currentTarget.style.borderColor = '', e.currentTarget.style.color = '')}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border border-slate-200 transition-all ${canScrollRight ? 'hover:text-white hover:border-transparent' : 'opacity-30 cursor-not-allowed'
                }`}
              onMouseOver={(e) => canScrollRight && (e.currentTarget.style.backgroundColor = '#C41E3A', e.currentTarget.style.borderColor = '#C41E3A', e.currentTarget.style.color = 'white')}
              onMouseOut={(e) => canScrollRight && (e.currentTarget.style.backgroundColor = '', e.currentTarget.style.borderColor = '', e.currentTarget.style.color = '')}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial.id} className="snap-start flex-shrink-0 w-[85vw] max-w-[320px]">
              <TestimonialCard testimonial={testimonial} idx={idx} />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} idx={idx} />
          ))}
        </div>

        {/* Small Bottom Trust Signal */}
        <div className="mt-10 md:mt-16 flex justify-center items-center gap-2 opacity-50 grayscale">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">Trusted by homeowners and local authorities across East London & Essex</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-slate-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
