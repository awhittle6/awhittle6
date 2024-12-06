import React from 'react';
import SELFPORTRAIT from '@/assets/self-portrait.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { SiTypescript } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

const ICON_SIZE = 100; // Define a constant for icon size
const ICON_COLOR = "#7797ed"; // Define a constant for icon color

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h2 className="text-5xl font-bold">About</h2>
      <Link href={'https://www.linkedin.com/in/anderson-whittle/'}>
        <Image
          src={SELFPORTRAIT}
          alt="Self Portrait"
          className="rounded-full"
          width={300}
          height={300}
        />
      </Link>
      <p className="px-6 max-w-2xl text-xl font-[300]">
        Dynamic and results-driven Engineer with over five years of experience in pioneering cutting-edge technologies. Proven expertise in developing scalable AI-driven software, robust web applications, and user-focused platforms. Co-founded and led a tech startup, driving the development of a full-stack application that scaled to over 10,000 users and secured $10M in funding. Acclaimed for leadership in managing cross-functional teams and spearheading innovative AI solutions that align with strategic business objectives. Recognized for blending technical acumen with strategic vision to deliver impactful results.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-16"> {/* Increased gap from 4 to 8 */}
        {[SiTypescript, FaSwift, FaPython, SiPytorch, SiTensorflow, FaJenkins, FaAws, FaDigitalOcean, FaRust, FaGit, FaDocker, AiOutlineKubernetes, FaJava, FaLinux].map(
          (Icon, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 rounded-full" // Increased padding from 2 to 4
            >
              <div className="bg-white p-6 rounded-full flex items-center justify-center"> {/* Increased inner padding */}
                <Icon size={ICON_SIZE} color={ICON_COLOR} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AboutMe;
