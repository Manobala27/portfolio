import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// ==========================================
// CONFIGURE YOUR SOCIAL LINKS & EMAIL HERE
// ==========================================
const CONTACT_LINKS = {
  email: "mailto:balam@example.com", // Replace with your email address
  github: "https://github.com/manobala", // Replace with your GitHub profile link
  linkedin: "https://linkedin.com/in/manobala", // Replace with your LinkedIn profile link
};

export const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 bg-bg-warm border-b border-border-hairline relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Large Editorial Headline */}
        <div className="flex flex-col mb-4">
          <span className="font-mono text-[10px] tracking-widest text-brand-red font-bold mb-4 uppercase">
            04 // CONNECT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-text-dark leading-[1.0] mb-8">
            Have an idea?<br />
            <span className="text-brand-red">Let's build something reliable.</span>
          </h2>
        </div>

        {/* 2-Column Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 border-t border-border-hairline pt-12">
          {/* Left Side: Summary & Primary email CTA */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8 max-w-sm">
              I am always open to discussing cloud architecture, Python backend pipelines, DevOps automation opportunities, or project collaborations.
            </p>
            
            <a
              href={CONTACT_LINKS.email}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-lg w-full sm:w-auto self-start border border-brand-red"
            >
              <FaEnvelope />
              <span>Send Message</span>
              <span className="text-white/60 font-normal">|</span>
              <span className="text-white/80 lowercase">{CONTACT_LINKS.email.replace("mailto:", "")}</span>
            </a>
          </div>

          {/* Right Side: Other Technical Channels */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-border-hairline">
            {/* LinkedIn row */}
            <a 
              href={CONTACT_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-4.5 flex items-center justify-between group hover:bg-white/40 transition-colors duration-250 px-2 -mx-2"
            >
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-text-muted group-hover:text-brand-red transition-colors" size={16} />
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">LinkedIn</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-text-dark group-hover:text-brand-red transition-colors duration-200">
                linkedin.com/in/manobala
              </span>
            </a>

            {/* GitHub row */}
            <a 
              href={CONTACT_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-4.5 flex items-center justify-between group hover:bg-white/40 transition-colors duration-250 px-2 -mx-2"
            >
              <div className="flex items-center gap-3">
                <FaGithub className="text-text-muted group-hover:text-brand-red transition-colors" size={16} />
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">GitHub</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-text-dark group-hover:text-brand-red transition-colors duration-200">
                github.com/manobala
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
