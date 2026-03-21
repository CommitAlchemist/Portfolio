import React from "react";
import { motion } from "framer-motion";
import { workData, educationData } from "../assets/assets";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      {/* <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className=" text-center text-gray-400  max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 between:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>
                <div className="bg-dark-300 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3>{data.role}</h3>
                    <span>{data.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Journey
          </span>
        </h2>
        <p className="text-gray-400 mt-3">
          Education & Professional Experience
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-purple-500"></div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* EDUCATION (LEFT) */}

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex justify-end">
                {/* Dot */}
                <div className="hidden md:block absolute left-[-14px] top-4 w-2 h-2 bg-purple-500 rounded-full"></div>

                {/* Card */}
                <div className="w-full bg-dark-300 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition duration-300">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{item.role}</h3>

                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-2">{item.company}</p>

                  <p className="text-gray-300 mt-3 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* EXPERIENCE (RIGHT) */}

          <div className="space-y-16">
            {workData.map((item, index) => (
              <div key={index} className="relative flex justify-start">
                {/* Dot */}
                <div className="hidden md:block absolute left-[-14px] top-4 w-2 h-2 bg-purple-500 rounded-full"></div>

                {/* Card */}
                <div className="w-full bg-dark-300 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition duration-300">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{item.role}</h3>

                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-2">{item.company}</p>

                  <p className="text-gray-300 mt-3 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
