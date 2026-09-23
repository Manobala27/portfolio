import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaArrowRight, FaLock, FaHeartbeat, FaCar } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  shortDesc: string;
  longDesc: string;
  technologies: string[];
  githubUrl: string;
  features: string[];
  bgStyle: string;
  borderStyle: string;
  rotateStyle: string;
  tagBg: string;
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const projectsList: Project[] = [
    {
      id: 1,
      title: "CloudVault",
      subtitle: "Cloud Storage Platform on AWS",
      emoji: "☁️",
      shortDesc: "A full-stack cloud storage web application enabling users to upload, organize, manage, and securely share files using AWS S3.",
      longDesc: "CloudVault is a full-stack cloud storage web application enabling users to upload, organize, manage, and securely share files using AWS S3 for scalable object storage. Built with a Python and Flask backend and MySQL relational database, it implements secure user authentication and role-based access control (RBAC) to ensure private file access and structured directory organization.",
      technologies: ["Python", "Flask", "MySQL", "AWS S3", "HTML/CSS/JavaScript", "Bootstrap", "Git"],
      githubUrl: "https://github.com/Manobala27",
      features: [
        "Full-stack cloud storage web application built with Python and Flask.",
        "AWS S3 scalable object storage integration for secure file storage and management.",
        "MySQL relational data storage for user records, folders, and file metadata.",
        "Secure authentication and Role-Based Access Control (RBAC).",
        "Responsive dashboard enabling users to upload, organize, and securely share files.",
        "Clean user interface built with Bootstrap, HTML, CSS, and JavaScript."
      ],
      bgStyle: "bg-[#FFFDF6]",
      borderStyle: "border-amber-200/70 hover:border-amber-400/80",
      rotateStyle: "rotate-[-1.5deg] hover:rotate-0",
      tagBg: "bg-amber-100/70 text-amber-900"
    },
    {
      id: 2,
      title: "CloudPulse",
      subtitle: "Serverless Real-Time Log Analytics & Alerting Platform",
      emoji: "⚡",
      shortDesc: "A serverless event-driven platform for real-time application log ingestion, pipeline processing, anomaly detection, and instant SNS alerting.",
      longDesc: "CloudPulse is a serverless event-driven log analytics and alerting platform designed for real-time application log ingestion, anomaly detection, and automated monitoring. Utilizing Amazon Kinesis for stream ingestion and AWS Lambda for real-time event filtering and processing, it stores logs and alerts in Amazon DynamoDB and Amazon S3, sends notifications via Amazon SNS, and integrates CloudWatch monitoring and REST APIs.",
      technologies: ["Python", "Boto3", "AWS Lambda", "Amazon Kinesis", "DynamoDB", "S3", "SNS", "CloudWatch", "Flask"],
      githubUrl: "https://github.com/Manobala27",
      features: [
        "Serverless event-driven log analytics platform built with Python and Boto3.",
        "Ingests and processes application logs in real time with anomaly detection.",
        "AWS Lambda + Amazon Kinesis stream processing pipeline.",
        "Amazon DynamoDB for low-latency incident telemetry and Amazon S3 for archival.",
        "Automated SNS alerts to instantly notify administrators of critical log events.",
        "Amazon CloudWatch monitoring combined with Flask-based REST APIs and real-time dashboard."
      ],
      bgStyle: "bg-[#FFF2F0]",
      borderStyle: "border-red-200/70 hover:border-red-400/80",
      rotateStyle: "rotate-[2deg] hover:rotate-0",
      tagBg: "bg-red-100/70 text-red-900"
    },
    {
      id: 3,
      title: "Vehicle Speed Detection System",
      subtitle: "Computer Vision & Video Analytics",
      emoji: "🚗",
      shortDesc: "A computer vision and image processing solution in Python and OpenCV for real-time vehicle detection, tracking, and speed estimation.",
      longDesc: "A computer vision and image processing project developed in Python using OpenCV. By processing video feeds, the application applies computer vision algorithms to detect moving vehicles, track vehicle centroids across video frames, and calculate real-time speed estimations based on geometric distance calibration and video analysis.",
      technologies: ["Python", "OpenCV", "SQLite", "Flask"],
      githubUrl: "https://github.com/Manobala27",
      features: [
        "Computer vision and image processing project using Python and OpenCV.",
        "Real-time vehicle detection from video-based analysis.",
        "Vehicle tracking algorithms following vehicle centroids across consecutive frames.",
        "Accurate speed estimation computed from calibrated frame rates and reference markers.",
        "Lightweight Flask web interface and SQLite logging for incident review."
      ],
      bgStyle: "bg-[#F3FAF8]",
      borderStyle: "border-emerald-200/70 hover:border-emerald-400/80",
      rotateStyle: "rotate-[-1deg] hover:rotate-0",
      tagBg: "bg-emerald-100/70 text-emerald-900"
    }
  ];

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
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  // Conceptual illustration renderers
  const renderVisualIllustration = (id: number) => {
    if (id === 1) {
      return (
        <div className="h-36 w-full bg-gradient-to-tr from-amber-100/50 to-orange-100/30 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-amber-200/40">
          <motion.div 
            animate={{ y: [0, -5, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-xs border border-amber-200/50 z-10"
          >
            <FaLock className="text-amber-600 text-2xl" />
            <div className="flex flex-col">
              <span className="font-display text-[10px] font-black text-amber-700 leading-none">AWS S3 + Flask</span>
              <span className="font-display text-[11px] font-black text-text-dark">Cloud Storage</span>
            </div>
          </motion.div>
          <div className="absolute bottom-2 right-4 text-3xl select-none opacity-20 pointer-events-none">☁️</div>
        </div>
      );
    }
    if (id === 2) {
      return (
        <div className="h-36 w-full bg-gradient-to-tr from-red-100/50 to-rose-100/30 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-red-200/40">
          <motion.div 
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-xs border border-red-200/50 z-10"
          >
            <FaHeartbeat className="text-brand-red text-2xl" />
            <div className="flex flex-col">
              <span className="font-display text-[10px] font-black text-brand-red leading-none">SERVERLESS STREAM</span>
              <span className="font-display text-[11px] font-black text-text-dark">Kinesis + Lambda</span>
            </div>
          </motion.div>
          <div className="absolute top-2 left-4 text-3xl select-none opacity-20 pointer-events-none">⚡</div>
        </div>
      );
    }
    return (
      <div className="h-36 w-full bg-gradient-to-tr from-[#ECFDF5]/70 to-[#D1FAE5]/40 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-emerald-200/40">
        <motion.div 
          animate={{ x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-xs border border-emerald-200/50 z-10"
        >
          <FaCar className="text-emerald-600 text-2xl" />
          <div className="flex flex-col">
            <span className="font-display text-[10px] font-black text-emerald-700 leading-none">OPENCV + AI</span>
            <span className="font-display text-[11px] font-black text-text-dark">Speed Estimation</span>
          </div>
        </motion.div>
        <div className="absolute bottom-2 right-4 text-3xl select-none opacity-20 pointer-events-none">🚙</div>
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-1.5 self-center px-3.5 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-4">
            <span className="font-display text-xs font-black text-brand-red">My Creations 🎨</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-text-dark tracking-tight mb-4">
            Featured Projects
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted text-center max-w-lg mb-16 leading-relaxed font-medium">
            Cloud-native systems and software projects built with real-world architectures and clean code. Click any project card for in-depth details!
          </p>
        </motion.div>

        {/* Card Grid - Entire Card is Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              onClick={() => setActiveProject(project)}
              className={`border rounded-[2.5rem] p-6 flex flex-col shadow-xs hover:scale-[1.03] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none group ${project.bgStyle} ${project.borderStyle} ${project.rotateStyle}`}
            >
              {/* Illustration banner */}
              {renderVisualIllustration(project.id)}

              {/* Title & Subtitle */}
              <div className="mb-2">
                <h3 className="font-display text-xl font-black text-text-dark flex items-center gap-2 group-hover:text-brand-red transition-colors">
                  <span>{project.title}</span>
                  <span className="text-xl">{project.emoji}</span>
                </h3>
                <p className="text-xs font-bold text-brand-red mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-text-muted mb-5 flex-grow leading-relaxed font-medium">
                {project.shortDesc}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full ${project.tagBg}`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] font-black text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-red/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-black rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <span>🚀 View Details</span>
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-brand-red/20 hover:bg-[#FFF5F2] text-text-dark text-xs font-black rounded-full shadow-2xs transition-all duration-300 active:scale-95"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popover Modal with Escape and Click-Outside Support */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-text-dark/45 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-brand-red/15 rounded-[2.5rem] shadow-2xl max-w-xl w-full max-h-[88vh] overflow-y-auto z-10 select-text"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-brand-red/10 px-6 py-5 flex items-center justify-between z-10">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-black text-text-dark flex items-center gap-2">
                    <span>{activeProject.title}</span>
                    <span className="text-xl">{activeProject.emoji}</span>
                  </h3>
                  <p className="text-xs font-bold text-brand-red mt-0.5">{activeProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-text-muted hover:text-brand-red p-2 rounded-full hover:bg-[#FFF0EC] transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Visual Banner */}
                {renderVisualIllustration(activeProject.id)}

                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase font-black text-brand-red tracking-wider mb-2">
                    About this project
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed font-medium">
                    {activeProject.longDesc}
                  </p>
                </div>

                {/* Technical Highlights / What I Built */}
                <div>
                  <h4 className="text-xs uppercase font-black text-brand-red tracking-wider mb-3">
                    Key Features &amp; Architecture
                  </h4>
                  <div className="space-y-2.5">
                    {activeProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-text-muted font-medium">
                        <span className="text-brand-red mt-1 flex-shrink-0">
                          <FaArrowRight size={10} />
                        </span>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div>
                  <h4 className="text-xs uppercase font-black text-brand-red tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-black px-3.5 py-1.5 rounded-full ${activeProject.tagBg}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-brand-red/10 px-6 py-4 flex items-center justify-between gap-3 bg-[#FFF9F6]">
                <span className="text-xs text-text-muted font-medium">Press <kbd className="px-1.5 py-0.5 bg-white border border-brand-red/15 rounded text-[10px] font-mono">Esc</kbd> to close</span>
                <div className="flex items-center gap-2">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-brand-red/20 text-text-dark text-xs font-black rounded-full shadow-2xs hover:bg-[#FFF0EC] transition-all cursor-pointer"
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="inline-flex items-center justify-center px-5 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-black rounded-full shadow-xs transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
