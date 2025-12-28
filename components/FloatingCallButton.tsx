import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingCallButton: React.FC = () => {
  return (
    <motion.a
      href="tel:02089892385"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center group cursor-pointer"
      style={{ backgroundColor: '#C41E3A' }}
      aria-label="Call Regal Roofing"
    >
      {/* Pulse animation ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: '#C41E3A' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Phone icon */}
      <Phone className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10 group-hover:rotate-12 transition-transform" />
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call us: 020 8989 2385
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900" />
      </div>
    </motion.a>
  );
};
