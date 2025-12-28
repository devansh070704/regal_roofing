
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatItemProps> = ({ value, suffix, prefix = "", label, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [isInView, value, count, delay]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center transition-all hover:bg-white/15 group"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mb-1 flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <span className="text-white/70 font-medium tracking-tight text-sm md:text-base">
        {label}
      </span>
    </motion.div>
  );
};

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] lg:min-h-[800px]">

        {/* Left Side: Full-Bleed Image with Text Overlay */}
        <div className="relative h-[500px] lg:h-auto">
          {/* Background Image */}
          <img
            src="https://media.istockphoto.com/id/973812618/photo/man-on-ladder-cleaning-house-gutter-from-leaves-and-dirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=MwaDs0PDFJOY1ppMK-48JwWlFjLngDfxuda2K7fbw2w="
            alt="Regal Roofing professional at work in East London"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block" style={{ color: '#E63946' }}>
                Why Choose Regal Roofing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Your Trusted Local Roofing Specialists Since 1982
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                As a family-run business with over 40 years of experience in the roofing trade, we offer the personal service and attention to detail that larger companies often lack. We work with private homeowners, local authorities, estate agents, and housing associations across East London and Essex. Health and safety is our priority, and all our operatives are fully trained and certified.
              </p>

              {/* Feature List */}
              <div className="space-y-3">
                {[
                  "Fully Insured & Licensed",
                  "CORC Certified Contractors",
                  "Free Estimates & Assessments"
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C41E3A' }}>
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Stats Grid on Dark Background */}
        <div className="bg-black flex items-center justify-center p-8 md:p-12 lg:p-16">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard value={40} suffix="+" label="Years Experience" delay={0.1} />
              <StatCard value={1000} suffix="+" label="Roofs Protected" delay={0.2} />
              <StatCard value={100} suffix="%" label="Satisfaction Rate" delay={0.3} />
              <StatCard value={10} prefix="£" suffix="M" label="Public Liability" delay={0.4} />
            </div>

            {/* Trust Badges */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-white">CORC</p>
                <p className="text-xs text-white/50">Certified</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Google</p>
                <p className="text-xs text-white/50">5★ Rated</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Insured</p>
                <p className="text-xs text-white/50">Fully Licensed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
