import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import REALHIRELOGO from '@/assets/logo-realhire.png'
// Dummy project data
const PROJECTS = [
  {
    name: "Real Hire",
    image: REALHIRELOGO,
    link: "https://realhire.com",
    description:
      "A scalable AI-driven platform that connects people with jobs and jobs with people.",
  },
  {
    name: "E-Commerce App",
    link: "https://www.ecwid.com/",
    description:
      "A dynamic e-commerce platform with real-time inventory management and a user-friendly interface for seamless shopping.",
  },
  {
    name: "Open Source ML Library",
    link: "https://github.com/awhittle6/ml-projects",
    description:
      "An open-source machine learning library built in C++ for high-performance model training and inference.",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center pt-16">
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 mt-6 px-32">
        {PROJECTS.map((project, index) => (
          <Link href={project.link} className='py-3'>
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {project.image && <Image
              src={project.image}
              alt={project.name}
              width={80}
              height={80} // Reduced size
              className="rounded-md"
            />}
            <h3 className="text-xl font-semibold mt-3 text-black">{project.name}</h3>
            <p className="text-gray-500 mt-2 text-sm">{project.description}</p>
            
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
