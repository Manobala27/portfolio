import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaAws, 
  FaGithub, 
  FaPython, 
  FaJava,
  FaJs,
  FaDatabase, 
  FaGitAlt,
  FaServer,
  FaBolt,
  FaBell,
  FaChartBar,
  FaCloud,
  FaStream
} from "react-icons/fa";
import { 
  SiFlask, 
  SiMysql
} from "react-icons/si";

interface SkillItem {
  name: string;
  category: "all" | "cloud" | "languages" | "backend" | "tools";
  emoji: string;
  icon: React.ReactNode;
  bgStyle: string;
  borderStyle: string;
  textColor: string;
  rotateStyle: string;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills ⚡" },
    { id: "cloud", label: "Cloud & AWS ☁️" },
    { id: "languages", label: "Languages 💻" },
    { id: "backend", label: "Databases & APIs 🗄️" },
    { id: "tools", label: "Developer Tools 🛠️" },
  ];

  const allSkills: SkillItem[] = [
    // Programming Languages
    { 
      name: "Python", 
      category: "languages",
      emoji: "🐍", 
      icon: <FaPython className="text-[#3776AB]" />, 
      bgStyle: "bg-[#F3F9EF]", 
      borderStyle: "border-[#C2E0B4]/80", 
      textColor: "text-emerald-950",
      rotateStyle: "rotate-[1.5deg]"
    },
    { 
      name: "Java", 
      category: "languages",
      emoji: "☕", 
      icon: <FaJava className="text-[#EA2D2E]" />, 
      bgStyle: "bg-[#FFF2F0]", 
      borderStyle: "border-red-200/80", 
      textColor: "text-red-950",
      rotateStyle: "rotate-[-2deg]"
    },
    { 
      name: "JavaScript", 
      category: "languages",
      emoji: "⚡", 
      icon: <FaJs className="text-[#F7DF1E]" />, 
      bgStyle: "bg-[#FEFCE8]", 
      borderStyle: "border-yellow-200/80", 
      textColor: "text-yellow-950",
      rotateStyle: "rotate-[2deg]"
    },
    { 
      name: "SQL", 
      category: "languages",
      emoji: "🗄️", 
      icon: <FaDatabase className="text-[#336791]" />, 
      bgStyle: "bg-[#EEF2FF]", 
      borderStyle: "border-indigo-200/80", 
      textColor: "text-indigo-950",
      rotateStyle: "rotate-[-1.5deg]"
    },

    // Cloud & AWS
    { 
      name: "AWS S3", 
      category: "cloud",
      emoji: "🪣", 
      icon: <FaCloud className="text-[#569A31]" />, 
      bgStyle: "bg-[#F4FBEB]", 
      borderStyle: "border-lime-200/80", 
      textColor: "text-lime-950",
      rotateStyle: "rotate-[2deg]"
    },
    { 
      name: "AWS Lambda", 
      category: "cloud",
      emoji: "λ", 
      icon: <FaBolt className="text-[#FF9900]" />, 
      bgStyle: "bg-[#FFF7ED]", 
      borderStyle: "border-amber-200/80", 
      textColor: "text-amber-950",
      rotateStyle: "rotate-[-2deg]"
    },
    { 
      name: "Amazon DynamoDB", 
      category: "cloud",
      emoji: "⚡", 
      icon: <FaDatabase className="text-[#4053D6]" />, 
      bgStyle: "bg-[#EEF2FF]", 
      borderStyle: "border-blue-200/80", 
      textColor: "text-blue-950",
      rotateStyle: "rotate-[1deg]"
    },
    { 
      name: "Amazon Kinesis", 
      category: "cloud",
      emoji: "🌊", 
      icon: <FaStream className="text-[#FF9900]" />, 
      bgStyle: "bg-[#FFF4E5]", 
      borderStyle: "border-orange-200/80", 
      textColor: "text-orange-950",
      rotateStyle: "rotate-[-1.5deg]"
    },
    { 
      name: "Amazon SNS", 
      category: "cloud",
      emoji: "🔔", 
      icon: <FaBell className="text-[#E05243]" />, 
      bgStyle: "bg-[#FFF1F2]", 
      borderStyle: "border-rose-200/80", 
      textColor: "text-rose-950",
      rotateStyle: "rotate-[2.5deg]"
    },
    { 
      name: "Amazon CloudWatch", 
      category: "cloud",
      emoji: "📊", 
      icon: <FaChartBar className="text-[#FF4F8B]" />, 
      bgStyle: "bg-[#FDF2F8]", 
      borderStyle: "border-pink-200/80", 
      textColor: "text-pink-950",
      rotateStyle: "rotate-[-2deg]"
    },
    { 
      name: "Boto3 (AWS SDK)", 
      category: "cloud",
      emoji: "🐍", 
      icon: <FaAws className="text-[#FF9900]" />, 
      bgStyle: "bg-[#EBF5FB]", 
      borderStyle: "border-sky-200/80", 
      textColor: "text-sky-950",
      rotateStyle: "rotate-[1.5deg]"
    },

    // Databases & Frameworks
    { 
      name: "MySQL", 
      category: "backend",
      emoji: "🐬", 
      icon: <SiMysql className="text-[#4479A1]" />, 
      bgStyle: "bg-[#F0F7FF]", 
      borderStyle: "border-cyan-200/80", 
      textColor: "text-cyan-950",
      rotateStyle: "rotate-[-1deg]"
    },
    { 
      name: "Flask", 
      category: "backend",
      emoji: "🌶️", 
      icon: <SiFlask className="text-[#1E1E24]" />, 
      bgStyle: "bg-[#F5F5F7]", 
      borderStyle: "border-zinc-200/90", 
      textColor: "text-zinc-950",
      rotateStyle: "rotate-[2deg]"
    },
    { 
      name: "REST APIs", 
      category: "backend",
      emoji: "🔌", 
      icon: <FaServer className="text-brand-red" />, 
      bgStyle: "bg-[#FFF0EB]", 
      borderStyle: "border-brand-red/20", 
      textColor: "text-brand-red",
      rotateStyle: "rotate-[-2.5deg]"
    },

    // Developer Tools
    { 
      name: "Git", 
      category: "tools",
      emoji: "🌱", 
      icon: <FaGitAlt className="text-[#F05032]" />, 
      bgStyle: "bg-[#FFF1EE]", 
      borderStyle: "border-orange-200/80", 
      textColor: "text-orange-950",
      rotateStyle: "rotate-[1.5deg]"
    },
    { 
      name: "GitHub", 
      category: "tools",
      emoji: "🐙", 
      icon: <FaGithub className="text-[#181717]" />, 
      bgStyle: "bg-[#FAF5FF]", 
      borderStyle: "border-purple-200/80", 
      textColor: "text-purple-950",
      rotateStyle: "rotate-[-1.5deg]"
    },
  ];

  const filteredSkills = activeCategory === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

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

  return (
    <section 
      id="skills" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Visual background elements */}
      <div className="absolute top-[10%] left-[8%] text-3xl opacity-10 select-none pointer-events-none">✨</div>
      <div className="absolute bottom-[18%] right-[8%] text-3xl opacity-10 select-none pointer-events-none">☁️</div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-1.5 self-center px-3.5 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-4">
            <span className="font-display text-xs font-black text-brand-red">My Tech Toolkit 🛠️</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-text-dark tracking-tight mb-4">
            Things I work with 👨‍💻
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted text-center max-w-lg mb-10 leading-relaxed font-medium">
            A collection of programming languages, cloud systems, and frameworks I use to build scalable cloud architectures and backends.
          </p>
        </motion.div>

        {/* Category Pill Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white/70 backdrop-blur-xs p-1.5 rounded-full border border-brand-red/10 shadow-2xs"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-black font-display tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-red text-white shadow-xs scale-102"
                    : "text-text-muted hover:text-text-dark hover:bg-brand-red/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Organic Wrapping Badges Grid */}
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ 
                  duration: 0.45, 
                  delay: idx * 0.03,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
                }}
                whileHover={{ scale: 1.08, rotate: 0, y: -4 }}
                className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-[2rem] border shadow-2xs hover:shadow-md transition-all duration-300 cursor-default select-none ${skill.bgStyle} ${skill.borderStyle} ${skill.rotateStyle}`}
              >
                <span className="text-xl flex-shrink-0">
                  {skill.icon}
                </span>
                <span className={`text-sm sm:text-base font-display font-extrabold ${skill.textColor}`}>
                  {skill.name}
                </span>
                <span className="text-base flex-shrink-0">{skill.emoji}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
