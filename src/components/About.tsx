import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaAws, FaPython, FaGraduationCap } from "react-icons/fa";

export const About: React.FC = () => {
  const highlights = [
    {
      name: "Cloud Architectures ☁️",
      icon: <FaCloud className="w-5 h-5 text-brand-red" />,
      desc: "Architecting cloud-native pipelines, serverless workflows, and scalable object storage on AWS.",
      rotate: "rotate-[-1.5deg]",
      bg: "bg-white",
      border: "border-brand-red/15 hover:border-brand-red/35",
    },
    {
      name: "AWS Ecosystem ⚡",
      icon: <FaAws className="w-5 h-5 text-[#FF9900]" />,
      desc: "Hands-on with Amazon S3, Lambda, Kinesis, DynamoDB, SNS, CloudWatch, and Boto3 SDKs.",
      rotate: "rotate-[2deg] sm:translate-y-2",
      bg: "bg-[#FFF9F6]",
      border: "border-orange-200/70 hover:border-orange-300",
    },
    {
      name: "Python & Backend 🐍",
      icon: <FaPython className="w-5 h-5 text-[#3776AB]" />,
      desc: "Writing clean Python backends with Flask, creating secure REST APIs, and building automation scripts.",
      rotate: "rotate-[-1deg] sm:translate-y-3",
      bg: "bg-white",
      border: "border-blue-200/70 hover:border-blue-300",
    },
    {
      name: "AI & Data Science 🧠",
      icon: <FaGraduationCap className="w-5 h-5 text-emerald-600" />,
      desc: "Applying AI/ML concepts, video analytics with OpenCV, and predictive modeling (Swarm-LSTM).",
      rotate: "rotate-[1.5deg] sm:translate-y-5",
      bg: "bg-[#F3FAF7]",
      border: "border-emerald-200/70 hover:border-emerald-300",
    },
  ];

  // Repeatable bi-directional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
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
      id="about" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative ambient background sparkles */}
      <div className="absolute top-[20%] right-[8%] text-3xl opacity-15 select-none pointer-events-none">✨</div>
      <div className="absolute bottom-[15%] left-[6%] text-3xl opacity-15 select-none pointer-events-none">🚀</div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Conversational Story & Resume Summary */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-start text-left"
        >
          <motion.div 
            variants={textItemVariants}
            className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 bg-[#FFF0EC] border border-brand-red/15 rounded-full mb-4"
          >
            <span className="font-display text-xs font-black text-brand-red">So... who am I? 🤔</span>
          </motion.div>
          
          <motion.h2 
            variants={textItemVariants}
            className="font-display text-4xl sm:text-5xl font-black text-text-dark leading-[1.1] mb-6"
          >
            A little bit about me.
          </motion.h2>

          <motion.div variants={textItemVariants} className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed font-medium">
            <p>
              I'm <strong className="text-text-dark font-black">Manobala K</strong>, a final-year B.Tech student in <strong className="text-text-dark font-bold">Artificial Intelligence &amp; Data Science</strong> at V.S.B College of Engineering Technical Campus (CGPA: 8.35).
            </p>
            <p>
              I specialize in building <strong className="text-text-dark font-bold">cloud-native applications on AWS using Python and Flask</strong>. Whether it's setting up serverless event streams with Kinesis and Lambda or crafting clean object storage with S3 and MySQL, I focus on turning complex systems into simple, reliable software.
            </p>
            <p>
              Beyond development, I have a published patent in AI-driven temperature forecasting and enjoy exploring modern distributed architectures, automation, and real-time data pipelines.
            </p>
          </motion.div>

          {/* Quick Stats Pill */}
          <motion.div 
            variants={textItemVariants}
            className="mt-8 pt-6 border-t border-brand-red/10 flex items-center gap-4 flex-wrap"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-brand-red/15 shadow-2xs">
              <span className="text-brand-red font-black text-sm">🎓 B.Tech AI &amp; DS</span>
              <span className="text-xs text-text-muted font-bold">(2023–2027)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-brand-red/15 shadow-2xs">
              <span className="text-emerald-600 font-black text-sm">⭐ CGPA: 8.35</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Overlapping Rotated Highlight Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.name}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className={`p-6 border rounded-[2rem] shadow-xs hover:rotate-0 hover:scale-[1.02] hover:shadow-md transition-all duration-300 group cursor-default select-none ${item.rotate} ${item.bg} ${item.border}`}
            >
              {/* Icon container */}
              <div className="flex-shrink-0 p-3 bg-brand-red/5 text-brand-red rounded-2xl w-11 h-11 flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-2xs">
                {item.icon}
              </div>
              
              <h3 className="text-base font-black font-display text-text-dark mb-2">
                {item.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
