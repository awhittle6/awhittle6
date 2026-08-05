import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  current?: boolean;
  website?: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "WYEA",
    position: "Co-Founder & Principal Engineer",
    location: "Orange County, CA",
    duration: "2026 - Present",
    current: true,
    website: "https://wyea.ai",
    highlights: [
      "Co-founded WYEA and took it from zero to live production deployments at multiple California law firms — each firm on its own isolated instance, integrated with its own document management and identity systems",
      "Eliminated AI hallucination from legal output with a verified-citation architecture: every assertion is grounded in an exact quote from a source document or flagged as unverifiable, so nothing unsupported ever reaches an attorney",
      "Cut days of manual litigation work to minutes for California civil practice — discovery responses, motion drafting, and filing packages generated with per-statute checks that catch defects before anything is served or filed"
    ]
  },
  {
    company: "VybeOS",
    position: "Principal ML/AI Engineer",
    location: "Costa Mesa, CA",
    duration: "2025 - Present",
    current: true,
    website: "https://www.vybeos.co",
    highlights: [
      "Principal engineer through VybeOS's growth from zero to $14M in revenue — the ML systems turning a brand's voice, visual identity, and performance data into on-brand content generation across every channel",
      "Built the brand-memory infrastructure that keeps generated content in-voice and on-identity, so brands scale output without diluting what makes them recognizable",
      "Closed the loop between creative and results: analytics pipelines feed campaign performance back into generation, so every asset produced is informed by what actually converted"
    ]
  },
  {
    company: "Zipd",
    position: "Founder",
    location: "Orange County, CA",
    duration: "2025 - 2026",
    highlights: [
      "Took an applied-AI product from concept to production single-handedly — full product, ML stack, and cloud infrastructure shipped and operated end to end on GCP",
      "Wound down operations in 2026 to focus on WYEA"
    ]
  },
  {
    company: "Autopilot Investments",
    position: "Senior Software Engineer (ML/InfoSec/Performance Calculation Services)",
    location: "Irvine, CA",
    duration: "2025 - 2026",
    website: "https://joinautopilot.com",
    highlights: [
      "Core engineer through Autopilot's growth from a $20M to a $100M valuation — owned the performance analytics infrastructure serving every investment product with real-time metrics and dynamic rebalancing",
      "Delivered $500K+ in annual savings and a 67% computation reduction by modernizing legacy systems onto Timescale infrastructure",
      "Cut support tickets 40% with MCP server infrastructure for AI-driven compliance automation",
      "Rebuilt the mission-critical asset quote microservice from NestJS to Rust, achieving 99.9% uptime"
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
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">Experience</p>
      <h2 className="font-serif text-4xl md:text-5xl text-left text-white mb-16">
        Where I&rsquo;ve <span className="italic">delivered.</span>
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex ${
                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
              } justify-start`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10">
                <div
                  className={`w-3 h-3 rounded-full ${
                    exp.current
                      ? 'bg-white shadow-[0_0_16px_rgba(255,255,255,0.7)]'
                      : 'bg-black border border-white/40'
                  }`}
                />
                {exp.current && (
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-white animate-ping opacity-30" />
                )}
              </div>

              {/* Duration label on the opposite side (desktop only) */}
              <div
                className={`hidden md:flex absolute top-6 items-center gap-2 text-white/40 text-sm ${
                  index % 2 === 0
                    ? 'left-0 right-1/2 justify-start pl-2'
                    : 'left-1/2 right-0 justify-end pr-2 md:flex-row-reverse'
                }`}
              >
                <FaCalendarAlt className="text-xs" />
                <span className={exp.current ? 'text-white/90' : ''}>{exp.duration}</span>
              </div>

              {/* Card */}
              <div className="ml-12 md:ml-0 w-full md:w-[calc(50%-2.5rem)]">
                <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] hover:border-white/30 transition-all duration-300">
                  <div className="text-left mb-4">
                    <h3 className="font-serif text-3xl text-white">
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:italic"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <p className="text-white/70 mt-1">{exp.position}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-white/40 text-sm">
                      <span className="flex items-center gap-2 md:hidden">
                        <FaCalendarAlt className="text-xs" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-xs" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-baseline gap-3">
                        <span className="text-white/30 text-sm shrink-0">{'//'}</span>
                        <p className="text-white/60 text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
