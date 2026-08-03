import React from 'react';
import SELFPORTRAIT from '@/assets/self-portrait.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SKILLS = [
  'Applied AI & ML Infrastructure',
  'Rust, Python & TypeScript',
  'Grounded / Verified AI Systems',
  'Cloud Architecture (GCP, AWS)',
  'Full-Stack Product Engineering',
];

const AboutMe = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-12">About</p>

      <div className="flex flex-col md:flex-row items-start gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <Link href={'https://www.linkedin.com/in/anderson-whittle/'}>
            <Image
              src={SELFPORTRAIT}
              alt="Anderson Whittle"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
              width={280}
              height={280}
            />
          </Link>
        </motion.div>

        <div className="text-left space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl leading-tight text-white"
          >
            I build AI that <span className="italic">verifies</span> what it claims.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 leading-relaxed max-w-xl"
          >
            Founder and engineer with 5+ years building AI-driven products end to end. I
            co-founded WYEA, a legal technology firm building verified, grounded AI systems for
            law practices, and serve as Principal ML/AI Engineer at VybeOS, the AI-native
            creative operating system for modern brands. Before that: mission-critical financial
            systems at Autopilot, co-founding Real Hire to 10,000+ users and $300K in seed
            funding, and ML frameworks at Wells Fargo.
          </motion.p>

          <div className="space-y-3">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-baseline gap-4 border-b border-white/10 pb-3"
              >
                <span className="text-white/30 text-sm">{'//'}</span>
                <span className="text-white/80">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
