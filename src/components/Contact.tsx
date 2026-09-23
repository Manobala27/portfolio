import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck, FaWhatsapp } from "react-icons/fa";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const contactData = {
    whatsappUrl: "https://wa.me/919344705377?text=Hi%20Mano!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
    gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=balamano462@gmail.com&su=Hello%20Mano%20-%20Portfolio&body=Hi%20Mano%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A",
    emailAddress: "balamano462@gmail.com",
    githubUrl: "https://github.com/Manobala27",
    linkedinUrl: "https://www.linkedin.com/in/mano-bala-a61214374",
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactData.emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Bi-directional repeatable scroll pop animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative ambient blurred shapes */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[320px] h-[320px] bg-[#FFEBEA] rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[320px] h-[320px] bg-brand-red/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        {/* Friendly Indicator */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 self-center px-4 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-5"
        >
          <span className="font-display text-xs font-black text-brand-red">Got something cool in mind? 👀</span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h2 
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-text-dark tracking-tight mb-4"
        >
          Let's talk!
        </motion.h2>
        
        {/* Conversational Description */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg text-text-muted max-w-lg leading-relaxed mb-10 font-medium"
        >
          Whether you want to discuss cloud pipelines, backend systems, or explore exciting collaborations, I'd love to connect with you.
        </motion.p>

        {/* 3 Balanced Primary Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 w-full max-w-xl"
        >
          {/* Action 1: WhatsApp "Let's Talk" */}
          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm font-black rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-[#25D366]"
          >
            <FaWhatsapp className="text-lg text-white" />
            <span>Let's Talk 💬</span>
          </a>

          {/* Action 2: Send Mail / Say Hello (Direct Gmail Compose) */}
          <a
            href={contactData.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-sans text-sm font-black rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-brand-red"
          >
            <FaEnvelope className="text-sm" />
            <span>Say Hello ✉️</span>
          </a>

          {/* Action 3: Copy Email */}
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-brand-red/20 text-text-dark font-sans text-sm font-black rounded-full shadow-2xs hover:bg-[#FFF5F2] hover:border-brand-red/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-500 text-sm" />
                <span className="text-emerald-700 font-bold">Copied! ✓</span>
              </>
            ) : (
              <>
                <FaCopy className="text-brand-red text-xs" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social & Direct Channel Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-3.5 flex-wrap w-full border-t border-brand-red/10 pt-8"
        >
          {/* WhatsApp Badge */}
          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50 rounded-full text-xs sm:text-sm font-black transition-all duration-300 shadow-2xs hover:shadow-xs hover:scale-105 rotate-[-1.5deg]"
          >
            <FaWhatsapp className="text-emerald-600 text-base" />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn Badge */}
          <a
            href={contactData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-brand-red/15 text-text-dark hover:text-brand-red hover:border-brand-red/30 rounded-full text-xs sm:text-sm font-black transition-all duration-300 shadow-2xs hover:shadow-xs hover:scale-105 rotate-[1deg]"
          >
            <FaLinkedin className="text-blue-600 text-base" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub Badge */}
          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-brand-red/15 text-text-dark hover:text-brand-red hover:border-brand-red/30 rounded-full text-xs sm:text-sm font-black transition-all duration-300 shadow-2xs hover:shadow-xs hover:scale-105 rotate-[-1deg]"
          >
            <FaGithub className="text-neutral-900 text-base" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
