import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = ["FOUNDER.", "ML ENGINEER.", "BUILDER."];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="hero" className="relative flex flex-col items-center justify-center space-y-8 px-4 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="font-serif text-glow text-6xl md:text-8xl lg:text-9xl leading-none text-white"
      >
        I&rsquo;m <span className="italic">Anderson</span>
      </motion.h1>

      <div className="h-[1.1em] overflow-hidden text-5xl md:text-7xl lg:text-8xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={ROLES[roleIndex]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="font-serif text-white/90 tracking-wide"
          >
            {ROLES[roleIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={handleScrollToContact}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 px-10 py-3 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white text-base hover:border-white/60 transition-colors"
      >
        Contact
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs md:text-sm text-white/60 tracking-wide"
      >
        <span className="text-white/90">Co-Founder @ WYEA</span>
        <span className="text-white/30">·</span>
        <span className="text-white/90">Principal ML/AI @ VybeOS</span>
      </motion.div>
    </div>
  );
};

export default Hero;
