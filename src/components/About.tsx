import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaAws, FaServer, FaPython, FaInfinity } from "react-icons/fa";

export const About: React.FC = () => {
  const interests = [
    {
      name: "Cloud Computing",
      icon: <FaCloud className="w-5 h-5 text-brand-red" />,
      desc: "Architecting reliable, distributed systems leveraging modern cloud concepts.",
    },
    {
      name: "AWS (Amazon Web Services)",
      icon: <FaAws className="w-5 h-5 text-brand-red" />,
      desc: "Designing and deploying secure resources like S3, EC2, Lambda, and DynamoDB.",
    },
    {
      name: "Backend Development",
      icon: <FaServer className="w-5 h-5 text-brand-red" />,
      desc: "Creating fast, secure RESTful APIs and structural service integration layers.",
    },
    {
      name: "Python Programming",
      icon: <FaPython className="w-5 h-5 text-brand-red" />,
      desc: "Writing clean, robust code for web apps, automation scripts, and analytics.",
    },
    {
      name: "DevOps & Automation",
      icon: <FaInfinity className="w-5 h-5 text-brand-red" />,
      desc: "Streamlining development lifecycles with containerization and version control tools.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-brand-red md:w-12"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            I am a focused Cloud Engineer and Python Developer. My passion lies in constructing backend architectures and robust systems that scale seamlessly. I leverage programmatic solutions and cloud infrastructure to solve real-world technical challenges.
          </p>
        </div>

        {/* Areas of Interest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {interests.map((interest, idx) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 bg-gray-50/50 hover:bg-gray-50 border border-gray-100 rounded-lg flex gap-4 transition-all duration-300 group hover:border-red-100"
            >
              <div className="flex-shrink-0 p-2.5 bg-white border border-gray-100 rounded-md group-hover:border-red-100 transition-colors duration-300">
                {interest.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {interest.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
