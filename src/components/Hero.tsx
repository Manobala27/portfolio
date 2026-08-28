import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 64;
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
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-16 px-6 md:px-12 bg-bg-warm overflow-hidden border-b border-border-hairline grid-lines-pattern"
    >
      {/* Editorial grid line overlays */}
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none z-0">
        <div className="max-w-6xl mx-auto h-full w-full relative">
          {/* Vertical layout lines */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-border-hairline" />
          <div className="absolute right-0 top-0 w-[1px] h-full bg-border-hairline" />
          <div className="absolute left-[58.333%] top-0 w-[1px] h-full bg-border-hairline hidden lg:block" />
          
          {/* Horizontal decorative layout line */}
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-border-hairline" />
          <div className="absolute bottom-[15%] left-0 w-full h-[1px] bg-border-hairline" />
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-8">
        {/* Left Column: Asymmetrical Editorial Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Section Indicator */}
          <motion.span 
            variants={itemVariants} 
            className="font-mono text-[10px] tracking-widest text-brand-red font-bold mb-4 uppercase"
          >
            00 // INITIATE PORTFOLIO
          </motion.span>

          {/* Status Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded bg-white border border-border-hairline mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="font-mono text-[9px] font-semibold tracking-widest text-text-dark uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Massive Typography Name */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-text-dark leading-[0.9] mb-6 flex flex-col"
          >
            <span>Mano</span>
            <span className="text-brand-red flex items-center gap-3">
              Bala
              <span className="w-2.5 h-2.5 bg-brand-red rounded-full inline-block"></span>
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div 
            variants={itemVariants}
            className="font-mono text-xs md:text-sm font-semibold text-text-dark tracking-wider mb-6 flex items-center gap-2"
          >
            <span className="text-text-muted">ROLE:</span>
            <span>CLOUD ENGINEER</span>
            <span className="text-brand-red">&amp;</span>
            <span>PYTHON DEVELOPER</span>
          </motion.div>

          {/* Statement Statement */}
          <motion.blockquote 
            variants={itemVariants}
            className="border-l-2 border-brand-red pl-4 text-base md:text-lg font-display font-medium text-text-dark/95 leading-relaxed mb-6 max-w-xl"
          >
            "Building secure cloud systems and turning ideas into scalable infrastructure."
          </motion.blockquote>

          {/* Short supporting paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-text-muted leading-relaxed mb-10 max-w-lg"
          >
            I architect cloud platforms, automate delivery pipelines, and build robust backend interfaces using Python and Amazon Web Services. Focused on modular patterns, secure access policies, and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-row items-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-md cursor-pointer border border-brand-red hover:border-brand-red-hover"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-text-dark hover:bg-text-dark hover:text-white text-text-dark font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Interactive Cloud Blueprint diagram */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[350px] lg:min-h-[500px]">
          {/* Subtle outer coordinate marks for engineering look */}
          <div className="absolute top-0 left-0 font-mono text-[9px] text-text-muted/40">SYS_REF: [87.2, 14.9]</div>
          <div className="absolute top-0 right-0 font-mono text-[9px] text-text-muted/40">REG: [us-east-1]</div>
          <div className="absolute bottom-0 left-0 font-mono text-[9px] text-text-muted/40">PORT: [80/443]</div>
          <div className="absolute bottom-0 right-0 font-mono text-[9px] text-text-muted/40">SEC: [TLS_1.3]</div>

          {/* Core SVG Graphic with floating lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full max-w-[420px] max-h-[420px] aspect-square border border-border-hairline bg-white/70 p-6 shadow-sm backdrop-blur-sm relative"
          >
            {/* SVG Content */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-full text-text-dark" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Lines inside container */}
              <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              <line x1="50" y1="250" x2="350" y2="250" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              <line x1="50" y1="350" x2="350" y2="350" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              
              <line x1="50" y1="50" x2="50" y2="350" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              <line x1="150" y1="50" x2="150" y2="350" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              <line x1="250" y1="50" x2="250" y2="350" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>
              <line x1="350" y1="50" x2="350" y2="350" stroke="rgba(17,17,17,0.04)" strokeDasharray="3 3"/>

              {/* Connecting paths */}
              <motion.path 
                d="M 200 60 L 200 120" 
                stroke="#111111" 
                strokeWidth="1.5" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path 
                d="M 200 120 L 100 180 L 100 240" 
                stroke="#111111" 
                strokeWidth="1" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.path 
                d="M 200 120 L 300 180 L 300 240" 
                stroke="#111111" 
                strokeWidth="1" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.path 
                d="M 100 240 L 200 310" 
                stroke="#111111" 
                strokeWidth="1" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.path 
                d="M 300 240 L 200 310" 
                stroke="#111111" 
                strokeWidth="1" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />

              {/* Central Serverless DB connection */}
              <motion.path 
                d="M 200 120 L 200 310" 
                stroke="#B81D24" 
                strokeWidth="1" 
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* System nodes */}
              {/* User Client node */}
              <circle cx="200" cy="60" r="10" fill="white" stroke="#111111" strokeWidth="2" />
              <circle cx="200" cy="60" r="3" fill="#111111" />
              
              {/* API Gateway / Entry node */}
              <rect x="175" y="105" width="50" height="30" rx="3" fill="white" stroke="#111111" strokeWidth="1.5" />
              <line x1="180" y1="120" x2="220" y2="120" stroke="#111111" strokeWidth="1.5" />

              {/* EC2 / Compute node Left */}
              <rect x="75" y="215" width="50" height="50" rx="4" fill="white" stroke="#111111" strokeWidth="1.5" />
              <rect x="83" y="223" width="34" height="6" rx="1" fill="#111111" />
              <rect x="83" y="237" width="34" height="6" rx="1" fill="#111111" />
              <circle cx="90" cy="253" r="2.5" fill="#B81D24" />
              <circle cx="100" cy="253" r="2.5" fill="#111111" />
              <circle cx="110" cy="253" r="2.5" fill="#111111" />

              {/* Lambda / Serverless node Right */}
              <rect x="275" y="215" width="50" height="50" rx="4" fill="white" stroke="#111111" strokeWidth="1.5" />
              <path d="M 292 245 L 308 235 M 292 235 L 308 245" stroke="#111111" strokeWidth="1.5" />
              <circle cx="300" cy="240" r="12" stroke="#111111" strokeWidth="1" strokeDasharray="3 3"/>
              
              {/* Storage / S3 / DynamoDB Node Bottom */}
              <circle cx="200" cy="310" r="16" fill="white" stroke="#B81D24" strokeWidth="1.5" />
              <line x1="190" y1="305" x2="210" y2="305" stroke="#B81D24" strokeWidth="1.5" />
              <line x1="190" y1="310" x2="210" y2="310" stroke="#B81D24" strokeWidth="1.5" />
              <line x1="190" y1="315" x2="210" y2="315" stroke="#B81D24" strokeWidth="1.5" />

              {/* Pulsing signal nodes */}
              <motion.circle 
                cx="200" 
                cy="60" 
                r="18" 
                stroke="#111111" 
                strokeWidth="0.5" 
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
              />
              <motion.circle 
                cx="200" 
                cy="310" 
                r="24" 
                stroke="#B81D24" 
                strokeWidth="0.5" 
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeOut", delay: 1 }}
              />
            </svg>

            {/* Micro annotations and technical labels */}
            <div className="absolute top-8 left-8 font-mono text-[8px] text-text-muted uppercase tracking-wider">
              CLIENT // ACCESS
            </div>
            <div className="absolute top-20 right-8 font-mono text-[8px] text-text-muted uppercase tracking-wider text-right">
              API GATEWAY<br/>v1.0.4
            </div>
            <div className="absolute bottom-[170px] left-8 font-mono text-[8px] text-text-muted uppercase tracking-wider">
              INSTANCE_POOL<br/>t3.micro // SGP
            </div>
            <div className="absolute bottom-[170px] right-8 font-mono text-[8px] text-text-muted uppercase tracking-wider text-right">
              LAMBDA_TRIGGER<br/>SYS_HANDLER.PY
            </div>
            <div className="absolute bottom-8 left-0 right-0 mx-auto text-center font-mono text-[8px] text-brand-red uppercase tracking-wider">
              PERSISTENCE_LAYER // S3_BUCKET // DYNAMODB
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
