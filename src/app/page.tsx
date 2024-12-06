'use client';
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const pathname = usePathname();

  // Refs for each section
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Scroll to the section based on the hash in the URL
  useEffect(() => {
    const hash = pathname.split('#')[1];
    if (hash) {
      const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
        'about': aboutMeRef,
        'projects': projectsRef,
        'experience': experienceRef,
        'education': educationRef,
      };

      const targetRef = sectionMap[hash];
      if (targetRef?.current) {
        // Scroll immediately to the section if hash is detected
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
        <Hero />
      </div>
            {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y:   -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 w-full bg-black bg-opacity-50 text-white p-4 z-50 transition-transform ${'shadow-lg'
        }`}
        style={{
          position:"fixed",
          top:  "auto",
        }}
      >
        <ul className="flex justify-center space-x-4">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center h-auto bg-transparent text-center text-white"
      >
        <section
          id="about"
          ref={aboutMeRef}
          className="min-h-screen flex items-center justify-center"
        >
          <AboutMe />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>
        <section
          id="experience"
          ref={experienceRef}
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
        </section>
        <section
          id="education"
          ref={educationRef}
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Education</h2>
        </section>
      </motion.div>
    </>
  );
}

