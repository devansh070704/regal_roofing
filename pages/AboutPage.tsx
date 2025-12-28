import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Shield,
    PoundSterling,
    Clock,
    Phone,
    Award,
    Users,
    Target,
    Heart,
    CheckCircle2,
    ArrowRight,
    Star
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';
import { StatCounter } from '../components/StatCounter';
import { FloatingCallButton } from '../components/FloatingCallButton';

const AboutPage: React.FC = () => {
    const pillars = [
        {
            icon: Shield,
            title: 'Quality Materials',
            description: 'We exclusively use premium roofing materials from trusted UK suppliers. Every tile, slate, and membrane we install meets or exceeds British Standards, ensuring exceptional durability and weather protection for our climate.',
        },
        {
            icon: PoundSterling,
            title: 'Fair Pricing',
            description: 'Transparent, honest pricing with no hidden fees or surprise charges. We provide detailed, itemised quotes so you know exactly where every pound is spent. Our competitive rates never compromise on quality craftsmanship.',
        },
        {
            icon: Clock,
            title: 'Fast Turnaround',
            description: 'We understand that your time is valuable. Our efficient project management and experienced crews ensure timely completion without cutting corners. Most domestic repairs are completed within 1-2 days, with full re-roofs typically taking 3-5 days depending on size.',
        },
    ];

    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            text: 'To provide every homeowner with reliable, high-quality roofing solutions that protect their families and investments for generations to come.',
        },
        {
            icon: Heart,
            title: 'Our Values',
            text: 'Integrity, craftsmanship, and customer satisfaction drive everything we do. We treat every home as if it were our own.',
        },
        {
            icon: Award,
            title: 'Our Promise',
            text: 'Complete satisfaction guaranteed. We stand behind our work with industry-leading warranties and responsive after-service support.',
        },
    ];



    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="About Us - Family Owned Since 1982"
                description="Meet the team behind Regal Roofing Contractors. Over 40 years of experience delivering quality roofing services across East London and Essex."
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/homepage-hero-uk.jpg"
                        alt="Regal Roofing team at work"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-blue-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter max-w-3xl"
                    >
                        Building Trust, One Roof at a Time
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    >
                        For over 40 years, we've been the trusted roofing partner for homeowners across East London and Essex, delivering exceptional craftsmanship and unparalleled customer service.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-blue-600">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={40} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={1000} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={100} suffix="%" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Satisfaction Rate</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={15} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Service Areas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-black">
                <div className="max-w-[1200px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.1]"
                    >
                        Reliable. <span className="text-blue-500">Local.</span> Professional.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 md:mt-12 text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        As a family-run business with over 40 years of experience in the roofing trade, we offer the personal service and attention to detail that larger companies often lack. Serving East London and Essex with pride.
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Story</span>
                            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                                A Legacy of Excellence Since 1982
                            </h2>
                            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Regal Roofing Contractors has been serving East London and Essex since 1982. As a family-owned business, we understand the importance of trust, quality workmanship, and reliable service.
                                </p>
                                <p>
                                    We work with private homeowners, local authorities, estate agents, and housing associations. Our fully trained operatives bring decades of experience to every project, ensuring exceptional results.
                                </p>
                                <p>
                                    With CORC certification and comprehensive insurance coverage, you can trust that your roofing project is in safe, professional hands. We're proud to be your local roofing specialists.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                    Fully Insured & Licensed
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                    CORC Certified
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                    40+ Years Experience
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                                <img
                                    src="/images/bento-slate-roof.jpg"
                                    alt="Roofing work in progress"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                                <p className="text-4xl font-black">25+</p>
                                <p className="text-blue-100 text-sm">Years of Excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">What Drives Us</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">{value.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{value.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 Pillars Grid */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Why Choose Us</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            The Regal Roofing Difference
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group bg-black rounded-3xl p-8 md:p-10 hover:bg-blue-600 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
                                    <pillar.icon className="text-white group-hover:text-blue-600 w-7 h-7 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                                <p className="text-slate-400 group-hover:text-blue-100 leading-relaxed transition-colors">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Testimonial Section */}
            {/* Testimonial Section */}
            <TestimonialsSection />

            {/* CTA Strip */}
            <section className="w-full py-16 md:py-20 px-4 md:px-6 bg-blue-600">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Fully Licensed & Insured
                        </h3>
                        <p className="text-blue-100">Ready to protect your home? Get a free consultation today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:02089892385"
                            className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
                        >
                            <Phone className="w-5 h-5" />
                            020 8989 2385
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all"
                        >
                            Get Free Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingCallButton />
        </div>
    );
};

export default AboutPage;
