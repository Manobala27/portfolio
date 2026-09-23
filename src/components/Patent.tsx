import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaFileAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export const Patent: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 35 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: 0.12,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section 
      id="patent" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[300px] bg-brand-red/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] text-3xl opacity-10 select-none pointer-events-none">💡</div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Pill */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-1.5 self-center px-3.5 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-4">
            <span className="font-display text-xs font-black text-brand-red">Innovation &amp; Research 💡</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-text-dark tracking-tight mb-4 text-center">
            Published Patent 💡
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted text-center max-w-lg mb-14 leading-relaxed font-medium">
            A dedicated research contribution in Artificial Intelligence and Big Data Analytics.
          </p>
        </motion.div>

        {/* Featured Glowing Patent Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ y: -5 }}
          className="relative max-w-3xl w-full bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF6F2] border-2 border-brand-red/25 rounded-[2.8rem] p-8 md:p-10 patent-glow-card transition-all duration-300 select-none"
        >
          {/* Top Status Badges */}
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3.5 bg-[#FFF0EB] border border-brand-red/20 rounded-2xl text-brand-red shadow-xs">
                <FaLightbulb className="w-6 h-6 text-amber-500 animate-pulse" />
              </div>
              <div>
                <span className="text-[11px] font-black px-3 py-1 bg-amber-100/80 text-amber-900 border border-amber-200 rounded-full uppercase tracking-wider">
                  Indian Patent Application
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted bg-white px-3.5 py-1.5 rounded-full border border-brand-red/15 shadow-2xs">
              <FaCalendarAlt className="text-brand-red/70 text-xs" />
              <span>Published: March 2025</span>
            </div>
          </div>

          {/* Patent Title */}
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-text-dark leading-snug mb-4">
            "Intelligent Temperature Forecasting with Swarm-Based LSTM in Big Data Analytics Congestion"
          </h3>

          {/* Official Application Number Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-brand-red/15 rounded-xl text-xs font-mono font-bold text-brand-red mb-6 shadow-2xs">
            <FaFileAlt className="text-text-muted" />
            <span>Application No. 202541016742 A</span>
          </div>

          {/* Description */}
          <div className="bg-white/80 backdrop-blur-xs border border-brand-red/10 rounded-2xl p-5 mb-6 shadow-2xs">
            <h4 className="text-xs uppercase font-black text-brand-red tracking-wider mb-2 flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500" />
              <span>Research Summary</span>
            </h4>
            <p className="text-sm text-text-muted leading-relaxed font-medium">
              Proposed an AI-based temperature forecasting model using Swarm-Based Long Short-Term Memory (LSTM) networks and Big Data Analytics for accurate weather and climatic pattern prediction.
            </p>
          </div>

          {/* Key Pill Highlights */}
          <div className="flex items-center gap-2.5 flex-wrap pt-2 border-t border-brand-red/10">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-red/5 text-brand-red border border-brand-red/10">
              Swarm Intelligence
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/60">
              LSTM Deep Learning
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
              Big Data Analytics
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
              Weather Prediction
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
