import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Home,
    Wrench,
    Droplets,
    Building2,
    Building,
    Settings,
    Phone,
    ArrowRight,
    CheckCircle2,
    Shield,
    Award,
    Clock,
    Star,
    Zap
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { FloatingCallButton } from '../components/FloatingCallButton';

const ServicesPage: React.FC = () => {
    const services = [
        {
            icon: Zap,
            title: 'Chimney Repairs',
            description: 'Expert stack rebuilding, repointing, and leadwork to ensure structural integrity and prevent leaks.',
            features: ['Stack Rebuilding', 'Repointing', 'Leadwork', 'Leak Prevention'],
            image: '/images/service-chimney-repairs.jpg',
        },
        {
            icon: Droplets,
            title: 'Flat Roof Repairs',
            description: 'Specialist repairs for all flat roof systems using modern materials for long-lasting protection.',
            features: ['EPDM', 'GPR', 'Felt Roofing', 'Refurbishment'],
            image: '/images/service-flat-roof.jpg',
        },
        {
            icon: Wrench,
            title: 'Gutter Repairs',
            description: 'Fast and reliable fixes for leaks, sags, and damage to maintain effective water flow.',
            features: ['Leak Fixing', 'Realignment', 'Part Replacement', 'Seal Checks'],
            image: '/images/service-gutter-repairs.jpg',
        },
        {
            icon: Settings,
            title: 'Guttering Systems',
            description: 'Complete installation of high-quality, modern guttering systems designed for durability.',
            features: ['Full Installation', 'uPVC Systems', 'Cast Iron Look', 'Fascia Integration'],
            image: '/images/service-guttering-systems.jpg',
        },
        {
            icon: Home,
            title: 'Roof Tile Repairs',
            description: 'Precision replacement of broken or missing tiles to restore the beauty and function of your roof.',
            features: ['Tile Matching', 'Individual Replaces', 'Batten Repairs', 'Ridge Tiling'],
            image: '/images/service-roof-tile.jpg',
        },
        {
            icon: Building2,
            title: 'Slate Roof Repairs',
            description: 'Specialized restoration and repair of traditional slate roofs maintaining original character.',
            features: ['Natural Slate', 'Synthetic Slate', 'Leadwork', 'Heritage Repairs'],
            image: '/images/service-slate-roof.jpg',
        },
        {
            icon: Shield,
            title: 'Tiled Roof Repairs',
            description: 'Comprehensive repairs for pitched tiled roofs ensuring complete weather protection.',
            features: ['Full Restoration', 'Valley Repairs', 'Dry Verge', 'Dry Ridge'],
            image: '/images/service-tiled-roof.jpg',
        },
        {
            icon: Building,
            title: 'New Zinc Valleys',
            description: 'Expert installation of zinc valleys providing superior durability and aesthetic appeal.',
            features: ['Zinc Work', 'Water Channeling', 'Long Lasting', 'Bespoke Fit'],
            image: '/images/service-zinc-valleys.jpg',
        },
        {
            icon: Clock,
            title: 'New Lead Valleys',
            description: 'Traditional lead valley installation ensuring perfectly watertight roof intersections.',
            features: ['Lead Welding', 'Durable Seals', 'Custom Work', 'Weatherproof'],
            image: '/images/service-lead-valleys.jpg',
        },
        {
            icon: Wrench,
            title: 'New Lead Flashings',
            description: 'Professional lead flashing work for chimneys, walls, and joints to prevent water ingress.',
            features: ['Chimney Flashings', 'Wall Intersections', 'Step Flashings', 'Cover Flashings'],
            image: '/images/service-lead-flashings.jpg',
        },
    ];

    const steps = [
        {
            number: '01',
            title: 'Contact Us',
            description: 'Call or fill out our online form for a free consultation. We\'ll discuss your project needs and schedule an inspection.',
            icon: Phone,
        },
        {
            number: '02',
            title: 'Free Inspection',
            description: 'Our certified inspectors will thoroughly examine your roof, identify issues, and document everything with photos.',
            icon: Shield,
        },
        {
            number: '03',
            title: 'Detailed Quote',
            description: 'Receive a comprehensive, itemized quote with material options, timeline, and financing information within 24 hours.',
            icon: Clock,
        },
        {
            number: '04',
            title: 'Expert Installation',
            description: 'Our factory-trained crews complete your project on time, leaving your property clean and your roof protected.',
            icon: Award,
        },
    ];

    const benefits = [
        { icon: Award, title: 'GAF Certified', text: 'Factory-trained installation team' },
        { icon: Zap, title: 'Fast Response', text: '24-48 hour quote turnaround' },
        { icon: Star, title: '5-Star Rated', text: '500+ satisfied customers' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Roofing Services & Solutions"
                description="From emergency repairs to complete roof replacements. Expert installation of asphalt, metal, and flat roofing systems."
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/service-flat-roof.jpg"
                        alt="Professional roofing services in East London"
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
                        What We Do
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter max-w-3xl"
                    >
                        Complete Roofing Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    >
                        We specialist in a range of roofing repairs including chimney repairs, flat roof repairs, guttering systems, and more across East London and Essex.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
                        >
                            Get Free Estimate
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:02089892385"
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                        >
                            <Phone className="w-5 h-5" />
                            020 8989 2385
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Bar - Premium Minimal */}
            <section className="w-full py-16 md:py-20 px-4 md:px-6 bg-black">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className={`py-8 md:py-12 px-6 md:px-10 text-center ${idx !== benefits.length - 1 ? 'md:border-r border-white/10' : ''
                                    } ${idx !== 0 ? 'border-t md:border-t-0 border-white/10' : ''}`}
                            >
                                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">{benefit.title}</p>
                                <p className="text-slate-500 text-sm mt-2">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid with Images */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Services</span>
                        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            Comprehensive Roofing Services
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                            We offer a full range of professional roofing services to meet all your residential and commercial needs across East London and Essex.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="aspect-[16/10] sm:aspect-[16/10] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-4 sm:p-6 md:p-8">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-3 sm:mb-4">
                                        <service.icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 sm:gap-2 hidden sm:flex">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-sm text-slate-600">
                                        Or call now: <a href="tel:02089892385" className="text-blue-600 font-medium hover:underline">020 8989 2385</a>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Why Choose Us</span>
                            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                                Quality You Can Trust
                            </h2>
                            <p className="mt-6 text-slate-600 leading-relaxed">
                                With over 40 years of experience serving East London and Essex, we combine traditional craftsmanship with modern roofing techniques to deliver exceptional results that stand the test of time.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-black">CORC Certified Roofers</h4>
                                        <p className="text-slate-500 text-sm">Our fully trained operatives are certified by the Confederation of Roofing Contractors, ensuring the highest standards of workmanship.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-black">Premium Materials Only</h4>
                                        <p className="text-slate-500 text-sm">We never cut corners on materials. Only the highest quality, warrantied products are used.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-black">Transparent Pricing</h4>
                                        <p className="text-slate-500 text-sm">Detailed, itemized quotes with no hidden fees. Know exactly what you're paying for.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-black">Clean Job Sites</h4>
                                        <p className="text-slate-500 text-sm">We treat your property with respect. Daily cleanup and thorough final inspection guaranteed.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                                <img
                                    src="/images/bento-chimney-work.jpg"
                                    alt="Roofing work"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden mt-8">
                                <img
                                    src="/images/bento-slate-roof.jpg"
                                    alt="Metal roofing"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works - Minimal Design */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-black">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Process</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">
                            How It Works
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <span className="text-7xl md:text-8xl font-black text-white/10 leading-none block">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-2">{step.title}</h3>
                                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Bottom CTA */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-blue-600">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Ready to Get Started?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg mb-8 max-w-xl mx-auto"
                    >
                        Get a free, no-obligation estimate for your roofing project. Our team will respond within 24 hours.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
                        >
                            Get Free Estimate
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:02089892385"
                            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingCallButton />
        </div>
    );
};

export default ServicesPage;
