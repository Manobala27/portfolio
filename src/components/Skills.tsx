import React from "react";
import { FaAws, FaDocker, FaLinux, FaGitAlt, FaGithub, FaPython, FaDatabase, FaTerminal } from "react-icons/fa";
import { SiFlask, SiFastapi } from "react-icons/si";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws className="w-5 h-5 text-orange-500" /> },
        { name: "Docker", icon: <FaDocker className="w-5 h-5 text-blue-500" /> },
        { name: "Linux", icon: <FaLinux className="w-5 h-5 text-gray-700" /> },
        { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="w-5 h-5 text-gray-900" /> },
      ],
    },
    {
      title: "Programming & Backend",
      skills: [
        { name: "Python", icon: <FaPython className="w-5 h-5 text-blue-600" /> },
        { name: "Flask", icon: <SiFlask className="w-5 h-5 text-gray-800" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-5 h-5 text-teal-600" /> },
        { name: "SQL", icon: <FaDatabase className="w-5 h-5 text-indigo-600" /> },
        { name: "Bash", icon: <FaTerminal className="w-5 h-5 text-green-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-8 bg-gray-50/30 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 relative inline-block">
            Skills & Expertise
            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-brand-red md:w-12"></span>
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest mt-4">
            Technical Toolkit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200/60 text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-brand-red transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
