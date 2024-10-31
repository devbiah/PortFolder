import React from "react";
import nestjs from "../assets/tech/nestjs.svg";
import tailwind from "../assets/tech/tailwind.svg";
import { Link } from "react-router-dom";

const technologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const Tech = () => {
  return (
    <section id="Tech" className="mt-20 max-w-6xl mx-auto text-white p-1 mb-20">
      <div className="mb-10">
        <p className="text-gray-400 uppercase tracking-wider">
          Hard Skills
        </p>
        <h2 className="text-3xl font-extrabold">Tecnologias</h2>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-24 h-24 flex items-center justify-center transition-transform duration-300 transform hover:scale-110'
            key={technology.name}
          >
            <div className='w-full h-full bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-[#18819e] transition duration-300'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-16 h-16 object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
