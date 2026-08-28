import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaArrowRight } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  technologies: string[];
  githubUrl: string;
  features: string[];
  architecture: string;
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 1,
      title: "CloudVault – Secure Cloud Storage Platform",
      shortDesc: "A secure cloud storage platform and file manager bridging web clients and S3 buckets hosted on AWS EC2.",
      longDesc: "CloudVault is a secure object storage gateway interface. It bridges standard web operations with Amazon Web Services (AWS) infrastructure. By hosting a Flask application on Amazon EC2, it provides users with an intuitive file manager interface to upload, download, and structure files inside AWS S3 buckets without exposing private credentials. Security is maintained through localized IAM policies and temporary pre-signed URLs.",
      technologies: ["AWS", "Amazon S3", "IAM", "EC2", "Flask", "MySQL", "Python"],
      githubUrl: "https://github.com/manobala/cloudvault-storage",
      features: [
        "User authentication and multi-tenant file separation.",
        "Secure file transfers directly to/from S3 via temporary pre-signed URLs.",
        "EC2 instance profile setup with fine-grained IAM roles (no hardcoded keys).",
        "MySQL relational schema mapping folder hierarchies and metadata information."
      ],
      architecture: "Flask Application (EC2) ──> IAM Authorized Calls ──> Amazon S3 Storage"
    },
    {
      id: 2,
      title: "CloudPulse – Serverless Log Analytics Platform",
      shortDesc: "An event-driven serverless system for real-time log ingestion, threshold evaluation, and alert dispatch.",
      longDesc: "CloudPulse is an event-driven system built to consume log payloads from external services, evaluate them against predefined thresholds, and immediately dispatch alerts. It completely bypasses physical servers, leveraging AWS serverless compute and stream processors to achieve automatic scaling and minimize idle operational costs.",
      technologies: ["Kinesis", "Lambda", "S3", "DynamoDB", "SNS", "CloudWatch", "Python"],
      githubUrl: "https://github.com/manobala/cloudpulse-analytics",
      features: [
        "Real-time stream ingestion of raw log payloads using Amazon Kinesis.",
        "Filtering, parsing, and threshold detection in Python-based AWS Lambda functions.",
        "Persistent metadata and incident telemetry storage in Amazon DynamoDB tables.",
        "Instant alerts dispatched to administrators via Amazon SNS email channels.",
        "System metrics and scaling behavior logs cataloged in CloudWatch."
      ],
      architecture: "Log Stream ──> Kinesis ──> Lambda ──> DynamoDB (Storage) & SNS (Alerts)"
    },
    {
      id: 3,
      title: "Vehicle Speed Detection System",
      shortDesc: "A computer vision and video analytics pipeline for vehicle tracking and speed estimation using OpenCV.",
      longDesc: "This is a computer vision and video analytics project built in Python. By processing traffic camera feeds, the system detects moving elements, applies tracking filters to isolate individual vehicles, and computes speed estimations based on geometric reference calibration. The tracking logs are stored in a database and rendered on a light Flask monitoring dashboard.",
      technologies: ["Python", "OpenCV", "SQLite", "Flask"],
      githubUrl: "https://github.com/manobala/vehicle-speed-detector",
      features: [
        "Vehicle segmentation and object contours calculation using OpenCV algorithms.",
        "Centroid tracking to follow individual vehicles across consecutive video frames.",
        "Speed calculation based on frame rate and calibrated real-world markers.",
        "Persistent logging of speed events, counts, and timestamps in SQLite.",
        "Flask-based interface to review speed violations and average traffic charts."
      ],
      architecture: "Camera/Video Feed ──> OpenCV Analytics ──> Database (SQLite) ──> Web UI (Flask)"
    }
  ];

  // Helper to render customized abstract vector pipelines
  const renderVisualPipeline = (id: number) => {
    if (id === 1) {
      // CloudVault
      return (
        <svg viewBox="0 0 380 90" className="w-full text-text-dark h-auto max-h-[80px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="25" width="48" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="26" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">USER</text>
          
          <path d="M 50 37 L 98 37" stroke="#111111" strokeWidth="0.8" strokeDasharray="2 2" />
          <polygon points="98,37 93,34 93,40" fill="#111111" />
          
          <rect x="98" y="25" width="70" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="133" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">FLASK/EC2</text>
          
          <path d="M 168 37 L 214 37" stroke="#B81D24" strokeWidth="0.8" />
          <polygon points="214,37 209,34 209,40" fill="#B81D24" />
          
          <rect x="214" y="25" width="60" height="24" rx="2" fill="white" stroke="#B81D24" strokeWidth="1" />
          <text x="244" y="40" textAnchor="middle" fill="#B81D24" fontSize="8" fontFamily="monospace" fontWeight="600">IAM AUTH</text>
          
          <path d="M 274 37 L 318 37" stroke="#111111" strokeWidth="0.8" strokeDasharray="2 2" />
          <polygon points="318,37 313,34 313,40" fill="#111111" />
          
          <rect x="318" y="25" width="58" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="347" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">AWS S3</text>
          
          <circle cx="50" cy="37" r="1.5" fill="#111111" />
          <circle cx="168" cy="37" r="1.5" fill="#B81D24" />
          <circle cx="274" cy="37" r="1.5" fill="#111111" />
        </svg>
      );
    }
    if (id === 2) {
      // CloudPulse
      return (
        <svg viewBox="0 0 380 90" className="w-full text-text-dark h-auto max-h-[80px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="25" width="55" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="29" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">LOG FEED</text>
          
          <path d="M 57 37 L 85 37" stroke="#111111" strokeWidth="0.8" />
          <polygon points="85,37 80,34 80,40" fill="#111111" />
          
          <rect x="85" y="25" width="58" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="114" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">KINESIS</text>
          
          <path d="M 143 37 L 175 37" stroke="#111111" strokeWidth="0.8" />
          <polygon points="175,37 170,34 170,40" fill="#111111" />
          
          <rect x="175" y="25" width="60" height="24" rx="2" fill="white" stroke="#B81D24" strokeWidth="1" />
          <text x="205" y="40" textAnchor="middle" fill="#B81D24" fontSize="8" fontFamily="monospace" fontWeight="600">LAMBDA</text>
          
          {/* Split arrow paths */}
          <path d="M 235 37 L 255 37 L 255 17 L 285 17" stroke="#111111" strokeWidth="0.8" />
          <polygon points="285,17 280,14 280,20" fill="#111111" />
          
          <path d="M 235 37 L 255 37 L 255 57 L 285 57" stroke="#111111" strokeWidth="0.8" />
          <polygon points="285,57 280,54 280,60" fill="#111111" />
          
          <rect x="285" y="5" width="85" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="327" y="20" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">DYNAMODB (DB)</text>
          
          <rect x="285" y="45" width="85" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
          <text x="327" y="60" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">SNS (ALERTS)</text>
          
          <circle cx="57" cy="37" r="1.5" fill="#111111" />
          <circle cx="143" cy="37" r="1.5" fill="#111111" />
          <circle cx="235" cy="37" r="1.5" fill="#B81D24" />
        </svg>
      );
    }
    // Vehicle Speed
    return (
      <svg viewBox="0 0 380 90" className="w-full text-text-dark h-auto max-h-[80px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="25" width="55" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
        <text x="29" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">VIDEO FEED</text>
        
        <path d="M 57 37 L 90 37" stroke="#111111" strokeWidth="0.8" strokeDasharray="2 2" />
        <polygon points="90,37 85,34 85,40" fill="#111111" />
        
        <rect x="90" y="25" width="65" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
        <text x="122.5" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">OPENCV DETECT</text>
        
        <path d="M 155 37 L 195 37" stroke="#B81D24" strokeWidth="0.8" />
        <polygon points="195,37 190,34 190,40" fill="#B81D24" />
        
        <rect x="195" y="25" width="70" height="24" rx="2" fill="white" stroke="#B81D24" strokeWidth="1" />
        <text x="230" y="40" textAnchor="middle" fill="#B81D24" fontSize="8" fontFamily="monospace" fontWeight="600">SQLITE STORAGE</text>
        
        <path d="M 265 37 L 305 37" stroke="#111111" strokeWidth="0.8" strokeDasharray="2 2" />
        <polygon points="305,37 300,34 300,40" fill="#111111" />
        
        <rect x="305" y="25" width="70" height="24" rx="2" fill="white" stroke="#111111" strokeWidth="1" />
        <text x="340" y="40" textAnchor="middle" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">FLASK DASHBOARD</text>
        
        <circle cx="57" cy="37" r="1.5" fill="#111111" />
        <circle cx="155" cy="37" r="1.5" fill="#B81D24" />
        <circle cx="265" cy="37" r="1.5" fill="#111111" />
      </svg>
    );
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-6 md:px-12 bg-bg-warm border-b border-border-hairline relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border-hairline">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-widest text-brand-red font-bold mb-4 uppercase">
              03 // RECENT PROJECTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-dark">
              Architectural Showcases
            </h2>
          </div>
          <div className="font-mono text-xs text-text-muted mt-4 md:mt-0 uppercase tracking-widest">
            PRODUCTION SYSTEM SCHEMATICS
          </div>
        </div>

        {/* Stacked Editorial Layout */}
        <div className="flex flex-col divide-y divide-border-hairline border-t border-b border-border-hairline">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:bg-white/30 transition-all duration-300 px-4 -mx-4"
            >
              {/* Col 1: Huge Number */}
              <div className="lg:col-span-1 flex items-baseline">
                <span className="font-display text-4xl lg:text-6xl font-bold text-text-muted/20 group-hover:text-brand-red/35 transition-colors duration-500">
                  0{project.id}
                </span>
              </div>

              {/* Col 2: Project Info */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-dark group-hover:text-brand-red transition-colors duration-300 mb-3 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-xl">
                  {project.shortDesc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] font-bold text-text-dark bg-white border border-border-hairline px-2.5 py-1 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center justify-center px-4 py-2 bg-brand-red hover:bg-brand-red-hover text-white font-mono text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-md cursor-pointer border border-brand-red hover:border-brand-red-hover"
                  >
                    View Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-white border border-text-dark hover:bg-text-dark hover:text-white text-text-dark font-mono text-[10px] uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    <FaGithub className="mr-1" /> Repository
                  </a>
                </div>
              </div>

              {/* Col 3: Visual Technical Pipeline */}
              <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border-hairline pt-8 lg:pt-0 lg:pl-10">
                <div className="font-mono text-[9px] text-text-muted mb-4 uppercase tracking-widest">
                  System Architecture Pipeline
                </div>
                <div className="bg-white border border-border-hairline/80 p-4 shadow-2xs backdrop-blur-xs relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-red"></div>
                  {renderVisualPipeline(project.id)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-text-dark/40 backdrop-blur-xs"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-bg-warm border border-border-hairline shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 font-sans"
            >
              {/* Sticky Header */}
              <div className="sticky top-0 bg-bg-warm/95 backdrop-blur-md border-b border-border-hairline px-6 py-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-brand-red">0{activeProject.id}</span>
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-text-muted hover:text-brand-red p-1.5 transition-colors cursor-pointer"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-8">
                {/* Description */}
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-bold mb-3">
                    // PROJECT OVERVIEW
                  </h4>
                  <p className="text-sm text-text-dark/90 leading-relaxed font-normal">
                    {activeProject.longDesc}
                  </p>
                </div>

                {/* Pipeline Flowchart (Big) */}
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-bold mb-3">
                    // DETAILED ARCHITECTURE PIPELINE
                  </h4>
                  <div className="bg-white border border-border-hairline p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red"></div>
                    <div className="py-2">
                      {renderVisualPipeline(activeProject.id)}
                    </div>
                    <div className="mt-4 pt-3 border-t border-border-hairline/60 font-mono text-[9px] text-text-muted flex justify-between">
                      <span>FLOW: SYSTEM_INIT ──&gt; SUCCESS</span>
                      <span>SECURE PIPELINE</span>
                    </div>
                  </div>
                </div>

                {/* Core features list */}
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-bold mb-4">
                    // CORE SYSTEM FEATURES
                  </h4>
                  <div className="space-y-3">
                    {activeProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-brand-red mt-1 flex-shrink-0">
                          <FaArrowRight size={10} />
                        </span>
                        <p className="text-sm text-text-muted leading-normal font-normal">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-bold mb-3.5">
                    // INTEGRATED TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] font-semibold text-text-dark bg-white border border-border-hairline px-3 py-1.5 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-border-hairline px-6 py-5 flex items-center justify-end gap-3 bg-white/50 backdrop-blur-xs">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-text-dark hover:bg-text-dark hover:text-white text-text-dark font-mono text-[10px] uppercase tracking-widest font-semibold transition-all duration-300"
                >
                  <FaGithub className="mr-1" /> Repository
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="inline-flex items-center justify-center px-4 py-2 bg-brand-red hover:bg-brand-red-hover text-white font-mono text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
                >
                  Close Schematic
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
