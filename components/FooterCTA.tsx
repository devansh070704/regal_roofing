
import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ShieldCheck
} from 'lucide-react';

export const FooterCTA: React.FC = () => {
  return (
    <footer className="w-full pb-4 px-4 bg-[#fcfcfc]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[1400px] mx-auto bg-[#0f172a] rounded-[2.5rem] overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl"
      >
        {/* Background Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Abstract Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Left Side: The Hook */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05]">
                Ready to transform your home?
              </h2>
              <p className="text-xl text-slate-400 max-w-md leading-relaxed">
                Schedule your free inspection today. No obligation, just expert advice and professional service.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:border-blue-500">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Call Us Now</p>
                  <a href="tel:02089892385" className="text-3xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight">
                    020 8989 2385
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:border-blue-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email Our Team</p>
                  <a href="mailto:regalroofing@ymail.com" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight">
                    regalroofing@ymail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2rem]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all appearance-none">
                    <option value="" disabled selected>Service Needed</option>
                    <option value="residential">Residential Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="repair">Roof Repair</option>
                    <option value="gutter">Gutters & Maintenance</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group overflow-hidden bg-blue-600 text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-blue-900/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Submit Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <p className="text-center text-slate-500 text-sm">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>

        {/* Footer Links Area */}
        <div className="mt-20 lg:mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Elite<span className="text-blue-600">Roof</span></span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 Elite Roofing Solutions. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contractor License #WA-90123</a>
          </div>

          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-slate-400 hover:text-white"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
