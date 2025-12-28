import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    ShieldCheck,
    Menu,
    X,
    Droplets,
    HardHat,
    Timer,
    Leaf
} from 'lucide-react';
import { BentoCard } from '../components/BentoCard';
import { StatCounter } from '../components/StatCounter';
import { ServicesSection } from '../components/ServicesSection';
import { TrustStatsSection } from '../components/TrustStatsSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { FloatingCallButton } from '../components/FloatingCallButton';

const HomePage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Expert Roofing Services East London & Essex | Regal Roofing Contractors"
                description="Family-owned roofing specialists with 40+ years experience across East London & Essex. CORC certified. Tiled roofs, flat roofs, chimney repairs, guttering. Free quotes."
            />
            <Navbar />

            {/* Hero Header Area */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="w-full pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 text-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-8"
                >
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C41E3A' }} />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">CORC Certified • 40+ Years Experience</span>
                </motion.div>
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[110px] font-extrabold text-black tracking-tighter leading-[0.95] mb-4 md:mb-6 lg:mb-10"
                >
                    The Standard in <br /> Modern Roofing.
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed tracking-tight mb-6 md:mb-10 px-2"
                >
                    Family-owned roofing specialists with over 40 years of experience across East London and Essex. From small domestic repairs to large-scale commercial projects, we deliver first-class workmanship with personal service and competitive rates.
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center mb-6 md:mb-10"
                >
                    <img
                        src="/corc-logo.png"
                        alt="CORC Certified - Confederation of Roofing Contractors"
                        className="h-16 md:h-20 w-auto object-contain opacity-90"
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
                    <Link
                        to="/contact"
                        className="text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-bold active:scale-95 transition-all shadow-lg text-center"
                        style={{ backgroundColor: '#C41E3A', boxShadow: '0 10px 40px rgba(196, 30, 58, 0.2)' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#A01729'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#C41E3A'}
                    >
                        Get Free Estimate
                    </Link>
                    <Link
                        to="/services"
                        className="bg-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-bold active:scale-95 transition-all text-center"
                        style={{ color: '#C41E3A', borderWidth: '2px', borderStyle: 'solid', borderColor: '#C41E3A' }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#FEF2F2'; }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                    >
                        View Our Services
                    </Link>
                </motion.div>
            </motion.div>

            {/* Main Black Bento Container */}
            <section className="w-full max-w-[1440px] mx-auto px-3 md:px-6 pb-16 md:pb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="bg-black rounded-[2rem] md:rounded-[4rem] p-3 md:p-6 lg:p-8"
                >
                    {/* Internal Grid - 5 Cards (2 Above, 3 Below) */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6"
                    >
                        {/* --- TOP ROW (2 Cards) --- */}

                        {/* Card 1: Large Image (8 cols on desktop) */}
                        <BentoCard className="lg:col-span-8 h-[280px] sm:h-[360px] md:h-[420px] lg:h-[540px] group" accentColor="rgba(196, 30, 58, 0.1)">
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src="/images/homepage-hero-uk.jpg"
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                    alt="Regal Roofing team installing roof tiles in East London"
                                />
                            </div>
                        </BentoCard>

                        {/* Card 2: Mission Card (4 cols) - Expertise */}
                        <BentoCard
                            className="lg:col-span-4 bg-[#111111] p-6 md:p-8 lg:p-12 flex flex-col justify-between border border-white/5 relative group overflow-hidden h-[280px] md:h-[320px] lg:h-auto"
                            accentColor="rgba(255, 255, 255, 0.05)"
                            backgroundImage="/images/bento-slate-roof.jpg"
                            backgroundOpacity={0.15}
                        >
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-1000" />
                            <div className="relative z-10">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 md:mb-6">
                                    <HardHat className="text-white w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter">01</h2>
                            </div>
                            <div className="space-y-2 md:space-y-4 relative z-10">
                                <h3 className="text-xl md:text-2xl font-black text-white">Expertise</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                    Our fully trained operatives bring four decades of roofing mastery to every project, ensuring exceptional craftsmanship and lasting results.
                                </p>
                            </div>
                        </BentoCard>

                        {/* --- BOTTOM ROW (3 Cards) - 2 columns on mobile --- */}
                        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
                            {/* Card 3: Red Card (4 cols) - Trusted Experience */}
                            <BentoCard
                                className="col-span-1 lg:col-span-4 p-5 md:p-8 lg:p-12 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[420px] flex flex-col justify-between text-white relative group overflow-hidden"
                                style={{ backgroundColor: '#C41E3A' }}
                                accentColor="rgba(255, 255, 255, 0.2)"
                                backgroundImage="/images/bento-chimney-work.jpg"
                                backgroundOpacity={0.35}
                                backgroundBlendMode="multiply"
                            >
                                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white/20 flex items-center justify-center mb-2 md:mb-4">
                                        <ShieldCheck className="text-white w-4 h-4 md:w-6 md:h-6" />
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter">
                                        <StatCounter value={40} suffix="+" />
                                    </h2>
                                </div>
                                <div className="space-y-1 md:space-y-2 relative z-10">
                                    <h3 className="text-base sm:text-lg md:text-2xl font-black">Years Experience</h3>
                                    <p className="text-white/70 text-[10px] sm:text-xs md:text-base leading-relaxed hidden sm:block">
                                        Family-owned excellence. Fully insured with public and employer's liability coverage.
                                    </p>
                                </div>
                            </BentoCard>

                            {/* Card 4: Black Card (4 cols) - Projects Completed */}
                            <BentoCard
                                className="col-span-1 lg:col-span-4 bg-[#0d0d0d] p-5 md:p-8 lg:p-12 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[420px] flex flex-col justify-between text-white border border-white/5 relative group overflow-hidden"
                                accentColor="rgba(196, 30, 58, 0.15)"
                                backgroundImage="/images/bento-flat-roof.jpg"
                                backgroundOpacity={0.25}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(196, 30, 58, 0.1), transparent)' }} />
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2 md:mb-4">
                                        <Droplets className="text-white w-4 h-4 md:w-6 md:h-6" />
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter">
                                        <StatCounter value={1000} suffix="+" />
                                    </h2>
                                </div>
                                <div className="space-y-1 md:space-y-2 relative z-10">
                                    <h3 className="text-base sm:text-lg md:text-2xl font-black">Projects Completed</h3>
                                    <p className="text-slate-400 text-[10px] sm:text-xs md:text-base leading-relaxed hidden sm:block">
                                        From private homes to local authorities across East London and Essex.
                                    </p>
                                </div>
                            </BentoCard>

                            {/* Card 5: Grey Card (4 cols) - Sustainability */}
                            <BentoCard
                                className="col-span-2 lg:col-span-4 bg-[#f5f5f7] p-5 md:p-8 lg:p-12 h-[180px] sm:h-[220px] md:h-[280px] lg:h-[420px] flex flex-col justify-between relative group overflow-hidden"
                                accentColor="rgba(34, 197, 94, 0.1)"
                                backgroundImage="/images/bento-completed-houses.jpg"
                                backgroundOpacity={0.2}
                            >
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent)] opacity-100" />
                                <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-black/5 flex items-center justify-center md:mb-4 flex-shrink-0">
                                        <Leaf className="text-black w-4 h-4 md:w-6 md:h-6" />
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black tracking-tighter">
                                        <StatCounter value={98} suffix="%" />
                                    </h2>
                                </div>
                                <div className="space-y-1 md:space-y-2 relative z-10">
                                    <h3 className="text-base sm:text-lg md:text-2xl font-black text-black">Eco-Smart</h3>
                                    <p className="text-slate-600 text-[10px] sm:text-xs md:text-base leading-relaxed font-medium">
                                        Our recycling-first approach diverts 98% of old roofing materials from landfills.
                                    </p>
                                </div>
                            </BentoCard>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <ServicesSection />
            <TrustStatsSection />
            <GallerySection />
            <TestimonialsSection />
            <CtaSection />
            <Footer />
            <FloatingCallButton />
        </div>
    );
};

export default HomePage;
