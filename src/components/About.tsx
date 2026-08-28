import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaAws, FaServer, FaPython, FaInfinity } from "react-icons/fa";

export const About: React.FC = () => {
  const interests = [
    {
      name: "Cloud Computing",
      icon: <FaCloud className="w-4 h-4 text-brand-red" />,
      desc: "Architecting reliable, distributed systems leveraging modern cloud concepts.",
    },
    {
      name: "AWS (Amazon Web Services)",
      icon: <FaAws className="w-4 h-4 text-brand-red" />,
      desc: "Designing and deploying secure resources like S3, EC2, Lambda, and DynamoDB.",
    },
    {
      name: "Backend Development",
      icon: <FaServer className="w-4 h-4 text-brand-red" />,
      desc: "Creating fast, secure RESTful APIs and structural service integration layers.",
    },
    {
      name: "Python Programming",
      icon: <FaPython className="w-4 h-4 text-brand-red" />,
      desc: "Writing clean, robust code for web apps, automation scripts, and analytics.",
    },
    {
      name: "DevOps & Automation",
      icon: <FaInfinity className="w-4 h-4 text-brand-red" />,
      desc: "Streamlining development lifecycles with containerization and version control tools.",
    },
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-6 md:px-12 bg-bg-warm border-b border-border-hairline relative"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Editorial Headline */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <span className="font-mono text-[10px] tracking-widest text-brand-red font-bold mb-4 uppercase">
            01 // PROFILE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-dark leading-[1.1] mb-6">
            A little about me.
          </h2>
          <div className="w-12 h-[1px] bg-brand-red mb-6 hidden lg:block"></div>
        </div>

        {/* Right Side: Narrative and Focus Areas */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Main bio text */}
          <div className="text-base sm:text-lg text-text-dark/90 leading-relaxed font-normal mb-12">
            I am a focused Cloud Engineer and Python Developer. My passion lies in constructing backend architectures and robust systems that scale seamlessly. I leverage programmatic solutions and cloud infrastructure to solve real-world technical challenges.
          </div>

          {/* Area of Expertise Checklist - Editorial Row style */}
          <div className="border-t border-border-hairline pt-10">
            <h3 className="font-mono text-[10px] tracking-widest text-brand-red font-bold mb-6 uppercase">
              Core Technical Focus Areas
            </h3>
            
            <div className="divide-y divide-border-hairline">
              {interests.map((interest, idx) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="py-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group hover:bg-white/30 transition-all duration-300 px-2 -mx-2"
                >
                  <div className="flex items-center gap-3 sm:w-1/3 flex-shrink-0">
                    <span className="font-mono text-[10px] text-text-muted/50">0{idx + 1}.</span>
                    <span className="text-brand-red/90">{interest.icon}</span>
                    <h4 className="text-sm font-semibold text-text-dark group-hover:text-brand-red transition-colors duration-300">
                      {interest.name}
                    </h4>
                  </div>
                  <div className="text-sm text-text-muted leading-relaxed sm:w-2/3">
                    {interest.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
