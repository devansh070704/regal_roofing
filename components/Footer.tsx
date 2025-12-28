
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/regal-logo.png" alt="Regal Roofing Contractors" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              Family-owned roofing specialists serving East London and Essex since 1982. Quality craftsmanship backed by 40+ years of experience.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/corc-logo.png"
                alt="CORC Certified - Confederation of Roofing Contractors"
                className="h-12 w-auto object-contain"
              />
              <div className="text-xs text-slate-400">
                <p className="font-semibold text-slate-600">CORC Certified</p>
                <p>Confederation of Roofing Contractors</p>
              </div>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Chimney Repairs</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Flat Roof Repairs</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Guttering Systems</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Lead Flashings</Link></li>
            </ul>
          </div>

          {/* Quick Links: Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-blue-600 transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li>37 Bushey Avenue <br /> London, E18 2DT</li>
              <li><a href="mailto:regalroofing@ymail.com" className="hover:text-blue-600 transition-colors">regalroofing@ymail.com</a></li>
              <li className="text-slate-900 font-bold">020 8989 2385</li>
              <li className="text-slate-900 font-bold">07831 259465</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © 2025 Regal Roofing Contractors. All rights reserved. <br className="md:hidden" />
            Registered: Sterling House, Langston Road, Loughton, Essex, IG10 3FA
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
