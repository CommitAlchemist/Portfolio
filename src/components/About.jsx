import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets.js";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-bark-200"
    >
      <div className="container mx-auto px-6">
        {/*Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className=" text-center text-gray-400  max-w-2xl mx-auto mb-16">
          Get to know more about my background and skills{" "}
        </p>
        {/* image and content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/*Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="photo"
            />
          </div>
          {/*content*/}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Vidyashree R</h3>
              <p className="mb-6 text-gray-300">
                I am a full-stack developer with a strong focus on backend
                development, working with Node.js and React.js to build scalable
                and efficient applications. I enjoy developing solutions that
                are both functional and user-friendly, with an emphasis on clean
                code and performance.
              </p>
              <p className="text-gray-300 mb-6">
                My interest in development grew through building projects and
                exploring how real-world applications work. Over time, I have
                developed a problem-solving mindset and a continuous learning
                approach, always striving to improve my skills and create
                better, more efficient solutions.
              </p>
              {/*cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cusor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {data.title}
                    </h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
