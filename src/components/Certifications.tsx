import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws, FaGraduationCap, FaBookOpen, FaBrain, FaAward, FaBolt, FaTimes, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

interface Certification {
  id: number;
  name: string;
  org: string;
  date?: string;
  badge?: string;
  description: string;
  topics: string[];
  icon: React.ReactNode;
  iconBg: string;
  bgStyle: string;
  borderStyle: string;
  rotateStyle: string;
}

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeCert]);

  const certificationsList: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services (AWS)",
      date: "July 2026",
      badge: "Industry Certified",
      description: "Comprehensive validation of overall understanding of the AWS Cloud platform, covering cloud concepts, security, compliance, core AWS services, billing, and pricing models.",
      topics: [
        "Cloud Computing Concepts & Value Proposition",
        "AWS Core Services: EC2, S3, RDS, DynamoDB, Lambda, VPC",
        "Security, Identity, and Access Management (IAM)",
        "CloudWatch Monitoring & AWS Shared Responsibility Model",
        "AWS Billing, Pricing Models, and Support Ecosystem"
      ],
      icon: <FaAws className="text-[#FF9900] w-5 h-5" />,
      iconBg: "bg-[#FFEFE5]",
      bgStyle: "bg-white",
      borderStyle: "border-brand-red/15 hover:border-brand-red/35",
      rotateStyle: "rotate-[-1.5deg] hover:rotate-0"
    },
    {
      id: 2,
      name: "Cloud Computing",
      org: "NPTEL",
      date: "October 2025",
      badge: "Elite",
      description: "Advanced academic coursework covering distributed computing architecture, virtualization concepts, resource management, cloud storage, and fault-tolerant service deployment.",
      topics: [
        "Distributed Computing & System Virtualization",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Resource Virtualization & Hypervisors",
        "Cloud Storage Architectures & Scalability",
        "Fault Tolerance, SLA Management, and Cloud Security"
      ],
      icon: <FaGraduationCap className="text-teal-600 w-5 h-5" />,
      iconBg: "bg-[#ECFDF5]",
      bgStyle: "bg-[#FFFDF6]",
      borderStyle: "border-amber-200/70 hover:border-amber-400/80",
      rotateStyle: "rotate-[2deg] hover:rotate-0"
    },
    {
      id: 3,
      name: "Introduction to Internet of Things",
      org: "NPTEL",
      date: "April 2025",
      badge: "Elite",
      description: "In-depth study of IoT architectures, sensor networks, embedded device communication, cloud integration, and real-time telemetry protocols.",
      topics: [
        "IoT System Architecture & Sensing Paradigms",
        "Wireless Sensor Networks (WSN) & Actuator Interfacing",
        "Embedded Computing & Communication Protocols (MQTT, CoAP)",
        "Cloud-IoT Integration & Telemetry Analytics",
        "IoT Security Challenges and Real-World Case Studies"
      ],
      icon: <FaBookOpen className="text-blue-600 w-5 h-5" />,
      iconBg: "bg-[#EDF6FF]",
      bgStyle: "bg-[#FFF2F0]",
      borderStyle: "border-red-200/70 hover:border-red-400/80",
      rotateStyle: "rotate-[-1deg] hover:rotate-0"
    },
    {
      id: 4,
      name: "AWS Lambda Foundations",
      org: "AWS Training & Certification",
      badge: "AWS Training",
      description: "Official AWS training focusing on serverless compute concepts, event source mappings, Lambda function lifecycle, permissions, and serverless best practices.",
      topics: [
        "Serverless Compute Fundamentals on AWS",
        "AWS Lambda Execution Environment & Event Source Mappings",
        "IAM Execution Roles & Function Security",
        "Monitoring with Amazon CloudWatch & X-Ray",
        "Serverless Best Practices & Cost Optimization"
      ],
      icon: <FaBolt className="text-amber-500 w-5 h-5" />,
      iconBg: "bg-[#FFF7ED]",
      bgStyle: "bg-[#FFFDFB]",
      borderStyle: "border-orange-200/70 hover:border-orange-300",
      rotateStyle: "rotate-[1.5deg] hover:rotate-0"
    },
    {
      id: 5,
      name: "Generative AI Learning Plan",
      org: "Amazon Web Services (AWS)",
      badge: "AWS Learning",
      description: "Foundational curriculum covering generative AI concepts, foundation models, prompt engineering, and building AI-powered cloud applications.",
      topics: [
        "Generative AI & Foundation Models (FMs)",
        "Prompt Engineering Principles & Optimization",
        "Amazon Bedrock & Foundation Model Customization",
        "Integrating Generative AI with AWS Cloud Architecture",
        "Responsible AI, Security, and Governance"
      ],
      icon: <FaBrain className="text-purple-600 w-5 h-5" />,
      iconBg: "bg-[#FAF5FF]",
      bgStyle: "bg-white",
      borderStyle: "border-purple-200/70 hover:border-purple-300",
      rotateStyle: "rotate-[-1.5deg] hover:rotate-0"
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
        delay: i * 0.08,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section 
      id="certifications" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-[20%] right-[10%] text-3xl opacity-10 select-none pointer-events-none">🎓</div>
      <div className="absolute bottom-[20%] left-[8%] text-3xl opacity-10 select-none pointer-events-none">📜</div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-1.5 self-center px-3.5 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-4">
            <span className="font-display text-xs font-black text-brand-red">Continuous Learning 🎓</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-text-dark tracking-tight mb-4">
            Certifications &amp; Training
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted text-center max-w-lg mb-16 leading-relaxed font-medium">
            Verified credentials and cloud training programs I've completed to deepen my engineering expertise. Click any card to explore curriculum highlights!
          </p>
        </motion.div>

        {/* Playful Certification Cards Grid - All Cards are Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              onClick={() => setActiveCert(cert)}
              className={`p-6 border rounded-[2.2rem] flex flex-col justify-between shadow-xs hover:scale-[1.03] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none group ${cert.bgStyle} ${cert.borderStyle} ${cert.rotateStyle}`}
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl w-11 h-11 flex items-center justify-center shadow-2xs ${cert.iconBg}`}>
                    {cert.icon}
                  </div>
                  {cert.badge && (
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red uppercase tracking-wider">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-black text-text-dark mb-1.5 leading-snug group-hover:text-brand-red transition-colors">
                  {cert.name}
                </h3>

                {/* Organization */}
                <p className="text-xs sm:text-sm text-text-muted font-bold mb-4">
                  {cert.org}
                </p>
              </div>

              {/* Issue Date & View Details Footer */}
              <div className="pt-3 border-t border-brand-red/10 flex items-center justify-between">
                <span className="text-[11px] text-text-muted font-bold">
                  {cert.date ? `Issued: ${cert.date}` : "AWS Training Path"}
                </span>
                <span className="text-[11px] font-black text-brand-red flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Details Modal with Escape and Click-Outside Support */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-text-dark/45 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-brand-red/15 rounded-[2.5rem] shadow-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto z-10 select-text"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-brand-red/10 px-6 py-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-2xl ${activeCert.iconBg} shadow-2xs`}>
                    {activeCert.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-black text-text-dark leading-tight">
                      {activeCert.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-red mt-0.5">{activeCert.org}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="text-text-muted hover:text-brand-red p-2 rounded-full hover:bg-[#FFF0EC] transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Meta Badge Bar */}
                <div className="flex items-center justify-between flex-wrap gap-2 bg-[#FFF9F6] border border-brand-red/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-brand-red text-sm" />
                    <span className="text-xs font-black text-text-dark">
                      {activeCert.badge || "Verified Credential"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted font-bold">
                    <FaCalendarAlt className="text-brand-red/70 text-[10px]" />
                    <span>{activeCert.date ? `Issued: ${activeCert.date}` : "Official Training Path"}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase font-black text-brand-red tracking-wider mb-2">
                    Overview &amp; Scope
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed font-medium">
                    {activeCert.description}
                  </p>
                </div>

                {/* Key Syllabus / Core Topics */}
                <div>
                  <h4 className="text-xs uppercase font-black text-brand-red tracking-wider mb-3">
                    Curriculum &amp; Verified Concepts
                  </h4>
                  <div className="space-y-2.5">
                    {activeCert.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-text-muted font-medium">
                        <FaCheckCircle className="text-emerald-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-brand-red/10 px-6 py-4 flex items-center justify-between gap-3 bg-[#FFF9F6]">
                <span className="text-xs text-text-muted font-medium">Press <kbd className="px-1.5 py-0.5 bg-white border border-brand-red/15 rounded text-[10px] font-mono">Esc</kbd> to close</span>
                <button
                  onClick={() => setActiveCert(null)}
                  className="inline-flex items-center justify-center px-5 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-black rounded-full shadow-xs transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
