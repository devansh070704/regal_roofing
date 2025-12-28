import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Gallery', href: '/projects' },
        { name: 'Contact us', href: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9990]"
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[9999] shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-slate-100">
                                <span className="text-lg font-black tracking-tighter text-black uppercase">Menu</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Menu links */}
                            <div className="flex flex-col gap-2 p-6 flex-1 overflow-y-auto">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`text-xl font-bold py-3 px-4 hover:bg-slate-50 rounded-xl transition-colors block ${isActive(link.href) ? 'text-[#C41E3A]' : 'text-slate-800'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-4 text-white rounded-xl font-bold text-sm tracking-widest transition-all uppercase block text-center shadow-lg"
                                    style={{ backgroundColor: '#C41E3A', boxShadow: '0 10px 40px rgba(196, 30, 58, 0.2)' }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#A01729'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#C41E3A'}
                                >
                                    Get Free Quote
                                </Link>
                                <div className="mt-4 text-center">
                                    <a
                                        href="tel:02089892385"
                                        className="text-sm font-bold text-slate-500 transition-colors"
                                        style={{ color: '#6B6B6B' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = '#C41E3A'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#6B6B6B'}
                                    >
                                        020 8989 2385
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Navbar */}
            <nav className="w-full px-4 md:px-6 py-6 md:py-8 lg:px-12 flex justify-between items-center bg-white/95 backdrop-blur-xl fixed top-0 left-0 right-0 z-[100] border-b border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 md:gap-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/regal-logo.png" alt="Regal Roofing Contractors" className="h-8 md:h-10 lg:h-12 w-auto object-contain" />
                    </Link>
                    <div className="hidden md:block h-8 w-px bg-slate-300"></div>
                    <img
                        src="/corc-logo.png"
                        alt="CORC Certified"
                        className="hidden md:block h-8 lg:h-10 w-auto object-contain opacity-80"
                    />
                </div>

                {/* Floating Pill Menu */}
                <div className="hidden lg:flex items-center gap-1 bg-slate-100/90 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full ${isActive(link.href) ? 'text-white' : 'text-slate-500 hover:text-black'
                                }`}
                            style={isActive(link.href) ? { backgroundColor: '#C41E3A' } : {}}
                            onMouseOver={(e) => {
                                if (isActive(link.href)) e.currentTarget.style.backgroundColor = '#A01729';
                            }}
                            onMouseOut={(e) => {
                                if (isActive(link.href)) e.currentTarget.style.backgroundColor = '#C41E3A';
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="hidden md:block px-6 py-2.5 text-white rounded-xl font-black text-[11px] tracking-widest transition-all uppercase"
                        style={{ backgroundColor: '#C41E3A' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#A01729'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#C41E3A'}
                    >
                        Get Free Quote
                    </Link>
                    <button
                        className="lg:hidden p-2 text-black z-[110]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>
        </>
    );
};
