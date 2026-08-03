import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: "Real Hire Platform",
    link: "https://realhire.com",
    description:
      "AI-driven recruiting SaaS scaled to 10,000+ users — NLP resume parsing and ML matching.",
  },
  {
    name: "Solana Token Launch Sniper",
    link: "https://github.com/awhittle6",
    description:
      "High-performance Rust trading bot with gRPC streaming and bonding-curve analysis.",
  },
  {
    name: "Portfolio Risk Analytics",
    link: "https://github.com/awhittle6",
    description:
      "Distributed ML pipeline on Kafka and Ray — 500K+ events/sec, sub-second risk alerts.",
  },
  {
    name: "Manufacturing Analytics",
    link: "https://github.com/awhittle6",
    description:
      "Automated storyboard system for process capability, OEE, and yield analysis.",
  },
];

const Projects = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">Selected work</p>
      <h2 className="font-serif text-4xl md:text-5xl text-left text-white mb-16">
        Unique. <span className="italic">Intentional.</span> Mine.
      </h2>

      <div className="border-t border-white/10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-2 py-8 border-b border-white/10 text-left hover:bg-white/[0.03] transition-colors px-2 md:px-4"
            >
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-white/90 group-hover:text-white group-hover:italic transition-all">
                  {project.name}
                </h3>
                <p className="text-white/50 text-sm mt-2 max-w-xl">{project.description}</p>
              </div>
              <span className="text-white/40 text-sm tracking-wide whitespace-nowrap group-hover:text-white transition-colors">
                Take a look →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
