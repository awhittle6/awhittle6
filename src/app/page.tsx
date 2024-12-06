'use client';
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
        'about-me': aboutMeRef,
        'projects': projectsRef,
        'experience': experienceRef,
        'education': educationRef,
      };

      const targetRef = sectionMap[hash];
      if (targetRef?.current) {
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
          id="about-me"
          ref={aboutMeRef}
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
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
