import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import REALHIRELOGO from '@/assets/logo-realhire.png'
const PROJECTS = [
  {
    name: "Real Hire Platform",
    image: REALHIRELOGO,
    link: "https://realhire.com",
    description:
      "A scalable AI-driven recruiting SaaS platform connecting candidates with employers. Scaled to 10,000+ users with NLP-driven resume parsing and ML matching algorithms.",
  },
  {
    name: "Solana Blockchain Token Launch Sniper",
    link: "https://github.com/awhittle6",
    description: 
      "High-performance Rust trading bot with gRPC streaming and RPC analytics for real-time token evaluation and rapid transaction execution using bonding curve analysis."
  },
  {
    name: "Real-Time Portfolio Risk Analytics",
    link: "https://github.com/awhittle6",
    description:
      "Distributed ML pipeline using Apache Kafka and Ray processing 500K+ events/sec with ensemble models for sub-second risk alerts on $10M+ portfolios.",
  },
  {
    name: "Production Performance Manufacturing",
    link: "https://github.com/awhittle6",
    description:
      "Automated manufacturing storyboard system for process capability, OEE, and yield analysis with complex relational database queries and data visualization.",
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-6xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex flex-col items-center space-y-4">
                {project.image && (
                  <div className="relative w-20 h-20 mb-2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-blue-400/0 to-green-400/0 group-hover:from-purple-400/5 group-hover:via-blue-400/5 group-hover:to-green-400/5 rounded-xl transition-all duration-300" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
