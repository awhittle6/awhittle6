import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
    const handleScrollToAboutMe = () => {
        const aboutMeSection = document.getElementById("about");
        if (aboutMeSection) {
          aboutMeSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
        }
      };
  return (
    <div id="hero" className="text-4xl font-[300] flex flex-col items-center space-y-3">
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
      >
        Hello, my name is
        <span className="text-blue-500"> Anderson</span>
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
      >
        I&#39;m an Applied AI Engineer
      </motion.div>
      <motion.button
        onClick={handleScrollToAboutMe}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
        className=" text-xl px-2 py-1 bg-blue-500 text-white rounded flex items-center gap-2"
      >
        <span>See below</span>
        <FaArrowDown />
      </motion.button>
    </div>
  );
};

export default Hero;
