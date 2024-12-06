'use client';
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const pathname = usePathname();

  // Refs for each section
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to the section based on the hash in the URL
  useEffect(() => {
    const hash = pathname.split('#')[1];
    if (hash) {
      const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
        about: aboutMeRef,
        projects: projectsRef,
        experience: experienceRef,
        contact: contactRef,
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
          <Projects />
        </section>
        <section
          id="contact"
          ref={contactRef}
          className="min-h-screen flex items-center justify-center"
        >
          <Contact />
        </section>
        <footer className=" text-white py-6 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/awhittle6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anderson-whittle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Anderson Whittle. All rights reserved.
        </p>
      </footer>
      </motion.div>

    </>
  );
}
