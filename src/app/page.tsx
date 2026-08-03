'use client';
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Navigation from "@/components/Navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const MARQUEE_ITEMS = Array.from({ length: 10 });

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

      sectionMap[hash]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <main className="bg-black text-white">
      <Navigation />

      {/* Hero with atmospheric fog rising from the bottom */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-2/3 fog pointer-events-none" />
        <Hero />
      </div>

      <section id="about" ref={aboutMeRef}>
        <AboutMe />
      </section>
      <section id="experience" ref={experienceRef}>
        <Experience />
      </section>
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="contact" ref={contactRef} className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 fog pointer-events-none" />
        <Contact />
      </section>

      {/* Marquee of the name, like the template's footer */}
      <div className="relative overflow-hidden py-10 border-t border-white/10">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {MARQUEE_ITEMS.map((_, i) => (
            <span
              key={i}
              className="font-serif italic text-6xl md:text-7xl text-white/10 px-8 select-none"
            >
              Anderson Whittle
            </span>
          ))}
        </div>
      </div>

      <footer className="text-white py-10 text-center border-t border-white/10">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/awhittle6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white/50 hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anderson-whittle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white/50 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-4 text-sm text-white/30">
          © {new Date().getFullYear()} Anderson Whittle. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
