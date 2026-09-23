import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaAws, FaPython, FaDocker, FaCloud, FaBolt, FaWhatsapp } from "react-icons/fa";
import manoPortrait from "../assets/mano_portrait.jpg";

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = "https://wa.me/919344705377?text=Hi%20Mano!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";

  // Mouse tilt effect for interactive illustration/portrait on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-120, 120], [6, -6]);
  const rotateY = useTransform(smoothX, [-120, 120], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: fine)").matches) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Bi-directional repeatable entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.97 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden dots-pattern"
    >
      {/* Decorative soft blurred ambient lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] right-[-5%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-brand-red/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-[#FFEBE1] rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[25%] w-[250px] h-[250px] bg-orange-200/10 rounded-full blur-2xl" />
      </div>

      {/* Floating subtle ambient stars */}
      <div className="absolute top-24 left-[15%] text-brand-red/20 text-2xl animate-spin [animation-duration:14s] select-none pointer-events-none">⭐</div>
      <div className="absolute bottom-24 right-[20%] text-brand-red/20 text-3xl animate-bounce select-none pointer-events-none">✨</div>
      <div className="absolute top-44 right-[12%] text-brand-red/25 text-xl select-none pointer-events-none">🌟</div>

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Left Column: Welcome Copy & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Welcome Tag */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full rotate-[-1.5deg] shadow-xs mb-5 hover:rotate-0 transition-transform cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-display text-xs sm:text-sm font-black text-brand-red uppercase tracking-wider">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name & Greeting */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-text-dark tracking-tight leading-[1.08] mb-3"
          >
            Hey, I'm <span className="text-brand-red underline decoration-wavy decoration-brand-red/25">Mano</span> 👋
          </motion.h1>

          {/* Professional Identity Subtitle */}
          <motion.div 
            variants={itemVariants}
            className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-text-dark/95 leading-snug mb-5 flex items-center gap-2 flex-wrap"
          >
            <span>Cloud Engineer &amp; Python Developer</span>
            <span className="text-brand-red select-none">☁️</span>
          </motion.div>

          {/* Persona Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 max-w-xl font-medium"
          >
            I build cloud applications, automate workflows, and turn ideas into working systems.
          </motion.p>

          {/* Playful Buttons with Micro-interactions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-row items-center gap-3.5 flex-wrap"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="inline-flex items-center gap-2.5 justify-center px-6 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-sans text-sm font-extrabold rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">🚀 View My Work</span>
            </a>
            
            {/* Direct WhatsApp "Let's Talk" Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm font-extrabold rounded-full shadow-xs hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <FaWhatsapp className="text-base group-hover:rotate-12 transition-transform" />
              <span>Let's Talk →</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Portrait in Organic Frame with Subtle Parallax & Badges */}
        <div 
          className="lg:col-span-5 flex items-center justify-center relative min-h-[360px] lg:min-h-[460px]"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-[340px] sm:max-w-[370px] relative flex items-center justify-center cursor-default"
          >
            {/* Layered Decorative Backdrop Cards with Playful Tilts */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE7E0] to-[#FFF0E6] border-2 border-brand-red/15 rounded-[3rem] rotate-3 -z-10 shadow-sm transition-transform duration-300 group-hover:rotate-4" />
            <div className="absolute inset-0 bg-white/85 backdrop-blur-xs border border-brand-red/20 rounded-[3rem] -rotate-2 -z-10 shadow-md" />

            {/* Organic Container for Mano's Portrait */}
            <div className="relative w-full aspect-[4/4.6] rounded-[2.8rem] overflow-hidden border-2 border-brand-red/25 bg-gradient-to-b from-[#FFF5F0] via-white to-[#FFEFEA] portrait-glow">
              <img
                src={manoPortrait}
                alt="Manobala K — Cloud Engineer & Python Developer"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] hover:scale-103 transition-transform duration-500"
                loading="eager"
              />
              
              {/* Subtle bottom gradient overlay for smooth visual blending */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2B2A30]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Tech Badges around the Portrait */}
            <motion.div
              animate={{ 
                y: isHovered ? [0, -5, 0] : [0, -9, 0], 
                rotate: [-2, 3, -2] 
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3.5 left-2 bg-white/95 backdrop-blur-xs border border-brand-red/20 rounded-full px-3.5 py-1.5 shadow-sm text-xs font-black font-display text-[#FF9900] flex items-center gap-1.5 select-none hover:scale-110 transition-transform cursor-pointer"
            >
              <FaAws className="text-base" /> <span>AWS</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: isHovered ? [0, 5, 0] : [0, 8, 0], 
                rotate: [3, -3, 3] 
              }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-2 -right-3 bg-white/95 backdrop-blur-xs border border-brand-red/20 rounded-full px-3.5 py-1.5 shadow-sm text-xs font-black font-display text-[#3776AB] flex items-center gap-1.5 select-none hover:scale-110 transition-transform cursor-pointer"
            >
              <FaPython className="text-base" /> <span>Python</span>
            </motion.div>

            <motion.div
              animate={{ 
                y: isHovered ? [0, -7, 0] : [0, -11, 0],
                rotate: [-4, 4, -4]
              }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-10 -left-6 bg-white/95 backdrop-blur-xs border border-brand-red/20 rounded-full px-3.5 py-1.5 shadow-sm text-xs font-black font-display text-[#2496ED] flex items-center gap-1.5 select-none hover:scale-110 transition-transform cursor-pointer"
            >
              <FaDocker className="text-base" /> <span>Docker</span>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 8, 0], 
                rotate: [2, -4, 2] 
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.9 }}
              className="absolute -bottom-3.5 left-8 bg-white/95 backdrop-blur-xs border border-brand-red/20 rounded-full px-3.5 py-1.5 shadow-sm text-xs font-black font-display text-[#569A31] flex items-center gap-1.5 select-none hover:scale-110 transition-transform cursor-pointer"
            >
              <FaCloud className="text-base" /> <span>AWS S3</span>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 6, 0], 
                rotate: [-5, 5, -5] 
              }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.1 }}
              className="absolute -bottom-3 right-4 bg-brand-red text-white rounded-full px-3.5 py-1.5 shadow-md text-xs font-black font-display flex items-center gap-1 select-none rotate-4 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaBolt className="text-xs text-amber-300" />
              <span>Cloud Engineer ⚡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
