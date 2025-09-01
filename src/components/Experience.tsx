import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  website?: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Autopilot Investments",
    position: "Senior Software Engineer (ML/InfoSec/Performance Calculation Services)",
    location: "Irvine, CA",
    duration: "2025 - Present",
    website: "https://joinautopilot.com",
    highlights: [
      "Spearheaded legacy system modernization achieving 67% computation reduction and $500K+ annual savings through Timescale infrastructure migration",
      "Led complete architecture of performance analytics infrastructure serving all investment products with real-time metrics and dynamic rebalancing algorithms",
      "Architected MCP server infrastructure for AI-driven compliance automation, reducing support tickets by 40%",
      "Rebuilt mission-critical asset quote microservice from NestJS to Rust, achieving 99.9% uptime"
    ]
  },
  {
    company: "Real Hire, Inc",
    position: "CTO & Co-Founder",
    location: "Miami, FL",
    duration: "2023 - 2025",
    website: "https://realhire.com",
    highlights: [
      "Led development of recruiting SaaS platform scaling to 10,000+ users and securing $300K in Seed funding",
      "Architected robust backend with Node.js, Python, Rust, and MongoDB achieving 99% uptime",
      "Built NLP-driven resume parsing system reducing manual review time by 70%",
      "Developed AI matching algorithms increasing user engagement by 35% and reducing placement times by 20%"
    ]
  },
  {
    company: "Wells Fargo",
    position: "Machine Learning Engineer",
    location: "Charlotte, NC",
    duration: "2021 - 2023",
    highlights: [
      "Developed PyTorch ML framework for generative AI models supporting 100+ developers",
      "Designed ML algorithms reducing annual loan collection losses by $3M with 20% accuracy increase",
      "Built real-time anomaly detection system reducing fraudulent transactions by 30%",
      "Optimized data pipelines with Kafka and Airflow reducing latency by 40%"
    ]
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-7xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-8">Experience</h2>
      
      <div className="w-full space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div className="text-left mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                    {exp.website ? (
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="text-xl text-white mt-1">{exp.position}</p>
                </div>
                
                <div className="flex flex-col md:items-end text-left md:text-right space-y-1">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaCalendarAlt className="text-sm" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-left">
                {exp.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={hIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: hIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-400 mt-1 text-sm">▸</span>
                    <p className="text-gray-200 text-sm md:text-base">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {index < experiences.length - 1 && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;