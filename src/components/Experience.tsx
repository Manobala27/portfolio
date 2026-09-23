import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  emoji: string;
  icon: React.ReactNode;
  iconBg: string;
  badge: string;
  badgeBg: string;
  points: string[];
  tech: string[];
  bgStyle: string;
  borderStyle: string;
  rotateStyle: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Let's GameTech",
      period: "July 2025",
      emoji: "💻",
      icon: <FaCode className="w-5 h-5 text-brand-red" />,
      iconBg: "bg-[#FFF0EB]",
      badge: "Internship",
      badgeBg: "bg-brand-red/10 text-brand-red",
      points: [
        "Developed and maintained web application modules using full-stack technologies.",
        "Collaborated with team members to test, debug, and implement new features for live projects."
      ],
      tech: ["Full Stack", "Web Development", "Debugging", "Team Collaboration"],
      bgStyle: "bg-white",
      borderStyle: "border-brand-red/15 hover:border-brand-red/35",
      rotateStyle: "rotate-[-1deg] hover:rotate-0"
    },
    {
      id: 2,
      role: "Artificial Intelligence Intern",
      company: "Emglitz Technologies",
      period: "March 2024",
      emoji: "🤖",
      icon: <FaBrain className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-[#ECFDF5]",
      badge: "Internship",
      badgeBg: "bg-emerald-100 text-emerald-800",
      points: [
        "Built computer vision and image processing applications using Python and OpenCV.",
        "Developed a real-time vehicle detection and speed estimation solution using video-based analysis."
      ],
      tech: ["Python", "OpenCV", "Computer Vision", "Video Analytics"],
      bgStyle: "bg-[#FFFDFB]",
      borderStyle: "border-emerald-200/80 hover:border-emerald-300",
      rotateStyle: "rotate-[1.5deg] hover:rotate-0"
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
        delay: i * 0.12,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section 
      id="experience" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative floating stickers */}
      <div className="absolute top-[15%] right-[10%] text-3xl opacity-10 select-none pointer-events-none">💼</div>
      <div className="absolute bottom-[20%] left-[8%] text-3xl opacity-10 select-none pointer-events-none">⚡</div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-1.5 self-center px-3.5 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-4">
            <span className="font-display text-xs font-black text-brand-red">My Journey 🚀</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-text-dark tracking-tight mb-4">
            Work Experience
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted text-center max-w-lg mb-14 leading-relaxed font-medium">
            Hands-on industry internships where I built real software, debugged live systems, and engineered AI computer vision pipelines.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className={`p-7 border rounded-[2.5rem] flex flex-col shadow-xs hover:scale-[1.02] hover:shadow-md transition-all duration-300 ${exp.bgStyle} ${exp.borderStyle} ${exp.rotateStyle}`}
            >
              {/* Card Top Row */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl w-12 h-12 flex items-center justify-center shadow-2xs ${exp.iconBg}`}>
                    {exp.icon}
                  </div>
                  <div>
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${exp.badgeBg}`}>
                      {exp.badge}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted bg-bg-warm/70 px-3 py-1.5 rounded-full border border-brand-red/10">
                  <FaCalendarAlt className="text-brand-red/70 text-[10px]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role & Company */}
              <h3 className="font-display text-xl font-black text-text-dark mb-1 flex items-center gap-2">
                <span>{exp.role}</span>
                <span className="text-lg">{exp.emoji}</span>
              </h3>
              
              <p className="text-sm font-extrabold text-brand-red mb-5">
                @ {exp.company}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-6 flex-grow">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed font-medium">
                    <FaCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-brand-red/10 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-brand-red/10 text-text-dark/90 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
