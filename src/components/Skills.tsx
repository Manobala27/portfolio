import React from "react";
import { motion } from "framer-motion";
import { 
  FaAws, 
  FaDocker, 
  FaLinux, 
  FaServer, 
  FaDatabase, 
  FaLock, 
  FaNetworkWired, 
  FaBolt, 
  FaCodeBranch, 
  FaPython 
} from "react-icons/fa";
import { SiFlask, SiFastapi, SiJenkins, SiGithubactions } from "react-icons/si";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: "01",
      title: "CLOUD",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4" /> },
        { name: "EC2", icon: <FaServer className="w-4 h-4" /> },
        { name: "S3", icon: <FaDatabase className="w-4 h-4" /> },
        { name: "IAM", icon: <FaLock className="w-4 h-4" /> },
        { name: "VPC", icon: <FaNetworkWired className="w-4 h-4" /> },
        { name: "Lambda", icon: <FaBolt className="w-4 h-4" /> },
      ],
    },
    {
      id: "02",
      title: "DEVOPS",
      skills: [
        { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-4 h-4" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4" /> },
        { name: "CI/CD", icon: <FaCodeBranch className="w-4 h-4" /> },
      ],
    },
    {
      id: "03",
      title: "BACKEND",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4" /> },
        { name: "Flask", icon: <SiFlask className="w-4 h-4" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4" /> },
        { name: "SQL", icon: <FaDatabase className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-24 px-6 md:px-12 bg-bg-warm border-b border-border-hairline relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border-hairline">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-widest text-brand-red font-bold mb-4 uppercase">
              02 // TOOLKIT
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-dark">
              Skills &amp; Expertise
            </h2>
          </div>
          <div className="font-mono text-xs text-text-muted mt-4 md:mt-0 uppercase tracking-widest">
            ENGINEERING SPECIFICATION // V4.3
          </div>
        </div>

        {/* 3-Column Categorized Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              {/* Category Title Header */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-2xl font-bold text-brand-red/90">{category.id}</span>
                <span className="font-mono text-[10px] text-text-muted">/</span>
                <h3 className="font-mono text-sm tracking-wider font-bold text-text-dark uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills Row Stack */}
              <div className="flex flex-col divide-y divide-border-hairline/60 border-t border-b border-border-hairline/60">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between py-3.5 group hover:bg-white/40 transition-colors duration-200 px-2 -mx-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-text-muted group-hover:text-brand-red group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </span>
                      <span className="font-mono text-xs font-semibold text-text-dark/95 group-hover:text-brand-red transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                    {/* Small technical indicator dot */}
                    <span className="w-1.5 h-1.5 bg-border-hairline rounded-full group-hover:bg-brand-red transition-all duration-300"></span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
