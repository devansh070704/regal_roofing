import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { StatCounter } from '../components/StatCounter';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FloatingCallButton } from '../components/FloatingCallButton';

interface Project {
    id: number;
    title: string;
    location: string;
    type: string;
    year: string;
    image: string;
    description: string;
}

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState('all');

    const projects: Project[] = [
        {
            id: 1,
            title: 'Tiled Roof Installation',
            location: 'Wanstead, E11',
            type: 'residential',
            year: '2024',
            image: '/images/service-roof-tile.jpg',
            description: 'Full strip and re-tile of a Victorian residence using traditional clay tiles.',
        },
        {
            id: 2,
            title: 'Chimney Restoration',
            location: 'Ilford, IG1',
            type: 'residential',
            year: '2024',
            image: '/images/service-chimney-repairs.jpg',
            description: 'Complete chimney stack rebuild and lead flashing for a heritage property.',
        },
        {
            id: 3,
            title: 'Flat Roof Replacement',
            location: 'Stratford, E15',
            type: 'commercial',
            year: '2024',
            image: '/images/service-flat-roof.jpg',
            description: 'Installation of a high-performance EPDM rubber flat roof system.',
        },
        {
            id: 4,
            title: 'Guttering Upgrade',
            location: 'Romford, RM1',
            type: 'residential',
            year: '2023',
            image: '/images/service-gutter-repairs.jpg',
            description: 'Complete replacement of gutters and downspouts for a detached house.',
        },
        {
            id: 5,
            title: 'Slate Roof Repair',
            location: 'Epping, CM16',
            type: 'residential',
            year: '2023',
            image: '/images/service-slate-roof.jpg',
            description: 'Expert slate repair and valley replacement for a rural cottage.',
        },
        {
            id: 6,
            title: 'Commercial Guttering',
            location: 'Walthamstow, E17',
            type: 'commercial',
            year: '2023',
            image: '/images/service-guttering-systems.jpg',
            description: 'Industrial-grade guttering system installation for a warehouse unit.',
        },
        {
            id: 7,
            title: 'New Lead Valley',
            location: 'Woodford, IG8',
            type: 'residential',
            year: '2024',
            image: '/images/service-lead-valleys.jpg',
            description: 'Installation of traditional lead valleys on a multi-pitched roof.',
        },
        {
            id: 8,
            title: 'Tile Matching Repair',
            location: 'Brentwood, CM14',
            type: 'residential',
            year: '2023',
            image: '/images/service-tiled-roof.jpg',
            description: 'Specialist tile matching and repair after storm damage.',
        },
        {
            id: 9,
            title: 'Roof Maintenance',
            location: 'Enfield, EN1',
            type: 'commercial',
            year: '2023',
            image: '/images/bento-chimney-work.jpg',
            description: 'Annual maintenance and cleaning for a retail park complex.',
        },
        {
            id: 10,
            title: 'Bay Window Roof',
            location: 'Buckhurst Hill, IG9',
            type: 'residential',
            year: '2024',
            image: '/images/project-bay-window.jpg',
            description: 'New felt roofing for a bay window with decorative lead flashing.',
        },
        {
            id: 11,
            title: 'Zinc Valley Detail',
            location: 'Basildon, SS14',
            type: 'residential',
            year: '2024',
            image: '/images/service-zinc-valleys.jpg',
            description: 'Modern zinc valley installation for superior water channeling.',
        },
        {
            id: 12,
            title: 'Full House Re-Roof',
            location: 'Loughton, IG10',
            type: 'residential',
            year: '2023',
            image: '/images/bento-completed-houses.jpg',
            description: 'Complete roof replacement including new felt, battens, and concrete tiles.',
        },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.type === filter);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Project Gallery & Case Studies"
                description="Explore our portfolio of completed residential and commercial roofing projects across the Pacific Northwest."
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bento-completed-houses.jpg"
                        alt="Our portfolio of roofing projects in East London"
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
                        Our Portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter max-w-3xl"
                    >
                        Recent Work in Your Area
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    >
                        Browse our gallery of completed projects. From residential re-roofs to commercial installations in East London and Essex, see the quality craftsmanship that sets us apart.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-blue-600">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={500} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={100} suffix="%" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Client Satisfaction</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={40} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={10} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Service Areas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    {/* Header with Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Gallery</span>
                            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-black tracking-tighter">
                                Featured Projects
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            {['all', 'residential', 'commercial'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px - 4 sm: px - 5 py - 2 rounded - full text - xs sm: text - sm font - bold uppercase tracking - wider transition - all ${filter === type
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        } `}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 max-w-3xl mb-12 leading-relaxed">
                        Our portfolio showcases the breadth of our expertise across residential and commercial roofing projects in East London and Essex. Each project represents our commitment to quality craftsmanship, attention to detail, and customer satisfaction.
                    </p>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.5 }}
                                onClick={() => setSelectedProject(project)}
                                className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer relative"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-bold text-sm md:text-base">{project.title}</p>
                                        <p className="text-white/70 text-xs flex items-center gap-1 mt-1">
                                            <MapPin className="w-3 h-3" />
                                            {project.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Lightbox */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="aspect-video w-full">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-black">{selectedProject.title}</h3>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {selectedProject.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {selectedProject.year}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
                                <div className="mt-6">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
                                    >
                                        Get a Similar Quote
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Testimonial Section */}
            <TestimonialsSection />

            {/* Service Areas */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Coverage Area</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-black tracking-tighter">
                            Serving East London & Essex
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                            We proudly serve homeowners and businesses throughout the following areas and beyond.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                        {['Wanstead', 'Ilford', 'Stratford', 'Romford', 'Epping', 'Walthamstow', 'Woodford', 'Brentwood', 'Enfield', 'Loughton', 'Basildon', 'Chigwell'].map((city) => (
                            <div key={city} className="bg-white rounded-xl p-4 border border-slate-100">
                                <p className="font-medium text-slate-700">{city}</p>
                            </div>
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
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg mb-8 max-w-xl mx-auto"
                    >
                        Join our growing list of satisfied customers. Get a free, no-obligation estimate today.
                    </motion.p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
            <FloatingCallButton />
        </div>
    );
};

export default ProjectsPage;
