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
    <section id="contact" className="py-20 px-6 md:px-8 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 relative inline-block">
          Let's Build Something Great
          <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-brand-red md:w-12"></span>
        </h2>
        
        <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed mt-4 mb-10">
          I am always open to discussing cloud architecture, python scripting, backend development opportunities, or project collaborations.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href={CONTACT_LINKS.email}
            className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 hover:border-red-100 hover:shadow-md rounded-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white rounded-full transition-all duration-300">
              <FaEnvelope size={22} />
            </div>
            <span className="text-sm font-semibold text-gray-900">Email Me</span>
            <span className="text-xs text-gray-500 truncate max-w-full">
              {CONTACT_LINKS.email.replace("mailto:", "")}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 hover:border-red-100 hover:shadow-md rounded-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white rounded-full transition-all duration-300">
              <FaLinkedin size={22} />
            </div>
            <span className="text-sm font-semibold text-gray-900">LinkedIn</span>
            <span className="text-xs text-gray-500 truncate max-w-full">
              Connect on LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 hover:border-red-100 hover:shadow-md rounded-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white rounded-full transition-all duration-300">
              <FaGithub size={22} />
            </div>
            <span className="text-sm font-semibold text-gray-900">GitHub</span>
            <span className="text-xs text-gray-500 truncate max-w-full">
              View Repositories
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
