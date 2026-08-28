import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-20 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Subtle Accent Tag */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100/50 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider text-brand-red uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Mano Bala
          </motion.h1>

          {/* Role */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-red mb-6"
          >
            Cloud Engineer & Python Developer
          </motion.h2>

          {/* Introduction */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10"
          >
            I build secure, scalable cloud applications and backend systems using AWS and Python.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 text-sm font-semibold rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background decoration (very clean, no complex Technical decorations) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
