import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaStar } from "react-icons/fa";

export const Education: React.FC = () => {
  const educationList = [
    {
      id: 1,
      degree: "B.Tech — Artificial Intelligence & Data Science",
      institution: "V.S.B College of Engineering Technical Campus, Coimbatore",
      duration: "2023 – 2027",
      grade: "CGPA: 8.35",
      highlight: "Undergraduate Program",
      icon: <FaGraduationCap className="text-brand-red w-6 h-6" />,
      iconBg: "bg-[#FFF0EB]",
      bgStyle: "bg-white",
      borderStyle: "border-brand-red/15 hover:border-brand-red/35",
      rotateStyle: "rotate-[-1.5deg] hover:rotate-0"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC), CBSE",
      institution: "Annai Meenakshi Public School, Tenkasi",
      duration: "2022 – 2023",
      grade: "Score: 67%",
      highlight: "Senior Secondary Education",
      icon: <FaSchool className="text-blue-600 w-6 h-6" />,
      iconBg: "bg-[#EDF6FF]",
      bgStyle: "bg-[#FFFDFB]",
      borderStyle: "border-blue-200/70 hover:border-blue-300",
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
      id="education" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Ambient background icons */}
      <div className="absolute top-[20%] left-[8%] text-3xl opacity-10 select-none pointer-events-none">📚</div>
      <div className="absolute bottom-[20%] right-[8%] text-3xl opacity-10 select-none pointer-events-none">🎓</div>

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
            <span className="font-display text-xs font-black text-brand-red">Academics 🎓</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-text-dark tracking-tight mb-4">
            Education
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted text-center max-w-lg mb-14 leading-relaxed font-medium">
            My academic foundation in Artificial Intelligence, Data Science, and Computer Science fundamentals.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className={`p-7 border rounded-[2.5rem] flex flex-col justify-between shadow-xs hover:scale-[1.02] hover:shadow-md transition-all duration-300 ${edu.bgStyle} ${edu.borderStyle} ${edu.rotateStyle}`}
            >
              <div>
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={`p-3.5 rounded-2xl w-12 h-12 flex items-center justify-center shadow-2xs ${edu.iconBg}`}>
                    {edu.icon}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted bg-bg-warm/70 px-3 py-1.5 rounded-full border border-brand-red/10">
                    <FaCalendarAlt className="text-brand-red/70 text-[10px]" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Degree / Certificate Title */}
                <h3 className="font-display text-lg sm:text-xl font-black text-text-dark mb-2 leading-snug">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm text-text-muted font-bold leading-relaxed mb-6">
                  {edu.institution}
                </p>
              </div>

              {/* Grade / Milestone Footer */}
              <div className="pt-4 border-t border-brand-red/10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] border border-brand-red/15 text-brand-red text-xs font-black rounded-full">
                  <FaStar className="text-[10px]" />
                  <span>{edu.grade}</span>
                </span>
                <span className="text-[11px] font-extrabold text-text-muted">
                  {edu.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
