
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  accentColor?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundBlendMode?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  enableTilt = true,
  accentColor = "rgba(255,255,255,0.05)",
  backgroundImage,
  backgroundOpacity = 0.3,
  backgroundBlendMode = "normal"
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse positions for tilt and parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  // Tilt transforms (very smooth)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Parallax transform for children items
  const translateX = useTransform(mouseX, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], ["-10px", "10px"]);

  // Glow position
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / rect.width - 0.5);
    y.set(mouseYPos / rect.height - 0.5);
    setGlowPos({ x: mouseXPos, y: mouseYPos });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative rounded-[3rem] overflow-hidden perspective-2000 group
        ${className}
      `}
    >
      {/* Dynamic Mesh Gradient Background */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at center, ${accentColor}, transparent)`,
          opacity: isHovered ? 0.6 : 0.3,
        }}
      />

      {/* Background Image (full-bleed) */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-[1] transition-all duration-1000 group-hover:scale-105"
          style={{
            opacity: backgroundOpacity,
            mixBlendMode: backgroundBlendMode as any,
          }}
        />
      )}

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

      {/* Glassmorphism Border & Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 border border-white/10"
        style={{
          opacity: isHovered ? 1 : 0.5,
          background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.08), transparent 80%)`,
        }}
      />

      {/* Internal Content with Parallax */}
      <motion.div
        className="relative z-20 h-full w-full"
        style={{
          x: translateX,
          y: translateY,
          transformZ: "30px",
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </motion.div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent w-[200%] h-[200%]"
        initial={{ x: "-100%", y: "-100%" }}
        animate={isHovered ? { x: "100%", y: "100%" } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};
