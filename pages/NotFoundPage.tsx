
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />
            <Navbar />

            <section className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-24 md:py-32">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-9xl md:text-[12rem] font-black text-slate-100 leading-none select-none">
                            404
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-[-2rem] md:mt-[-4rem] relative z-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl max-w-lg mx-auto mb-8 leading-relaxed">
                            Oops! It looks like you've ventured off the roof. The page you're looking for doesn't exist or has been moved.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/"
                                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-widest hover:bg-blue-700 transition-all uppercase flex items-center gap-2 shadow-lg shadow-blue-600/20"
                            >
                                <Home className="w-4 h-4" />
                                Return Home
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-sm tracking-widest hover:bg-slate-50 transition-all uppercase flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Go Back
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFoundPage;
