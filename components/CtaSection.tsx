
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, CheckCircle2 } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Minimal Modern CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 p-8 md:p-12 lg:p-20">

            {/* Left: Text Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-blue-600/20 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Free Consultation</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.1]"
                >
                  Let's build your <br className="hidden sm:block" />
                  <span className="text-blue-500">dream roof.</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md"
              >
                Get a detailed quote within 24 hours. No stress, no obligation — just expert advice for your home.
              </motion.p>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 md:gap-6 text-sm text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Free Estimate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>24hr Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>No Obligation</span>
                </div>
              </motion.div>
            </div>

            {/* Right: CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-6 self-center"
            >
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">Schedule Inspection</h3>
                <p className="text-slate-400 text-sm">Book your free roof assessment today</p>
              </div>

              {/* Quick actions */}
              <div className="space-y-3">
                <button className="w-full group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                  <Calendar className="w-5 h-5" />
                  Book Online
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:02089892385"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-base flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  020 8989 2385
                </a>
              </div>

              <p className="text-center text-slate-500 text-xs">
                Or email us at <a href="mailto:regalroofing@ymail.com" className="text-blue-400 hover:underline">regalroofing@ymail.com</a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
