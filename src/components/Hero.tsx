import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaRocket, FaBrain, FaCode } from "react-icons/fa";

const Hero = () => {
    const handleScrollToAboutMe = () => {
        const aboutMeSection = document.getElementById("about");
        if (aboutMeSection) {
          aboutMeSection.scrollIntoView({ behavior: "smooth" });
        }
      };
      
  return (
    <div id="hero" className="flex flex-col items-center space-y-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-4 mb-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaBrain className="text-4xl text-purple-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaRocket className="text-4xl text-blue-400" />
        </motion.div>
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode className="text-4xl text-green-400" />
        </motion.div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent"
      >
        Anderson Whittle
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-2xl md:text-3xl font-light text-gray-200"
      >
        Senior Software Engineer @ 
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-semibold text-blue-400 ml-2"
        >
          Autopilot
        </motion.span>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg text-gray-300 max-w-2xl text-center"
      >
        Applied AI Engineer specializing in ML infrastructure, performance optimization, and scalable systems
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        {['Machine Learning', 'Full-Stack', 'Cloud Architecture', 'DevOps'].map((skill, index) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.button
        onClick={handleScrollToAboutMe}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
      >
        <span>Explore My Work</span>
        <FaArrowDown className="animate-bounce" />
      </motion.button>
    </div>
  );
};

export default Hero;
