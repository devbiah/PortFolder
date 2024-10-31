import React from "react";
import intelbras from "../assets/intelbras.png";

const ExperienceCard = ({ experience }) => {
  return (
    <div id="Experience" className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px]">
      <div
        className="absolute w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: experience.iconBg,
          left: "-24px",
          top: "20px",
        }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-14">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-lg font-semibold">{experience.company_name}</p>
        <p className="text-sm text-gray-400">{experience.date}</p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "BackEnd Developer",
      company_name: "Intelbras",
      icon: intelbras,
      iconBg: "#383E56",
      date: "Março 2024 - Atualmente",
      points: [
        "Desenvolvi uma API e testes unitários do zero usando NestJS e suas tecnologias no setor de Cloud Services em Segurança Eletrônica como aprendiz da indústria.",
      ],
    },
  ];

  return (
    <section id="Experience" className="mt-20 max-w-6xl mx-auto text-white">
      <div className="mb-10">
        <p className="text-gray-400 uppercase tracking-wider">
          O que eu fiz até agora
        </p>
        <h2 className="text-3xl font-extrabold">Experiências de Trabalho.</h2>
      </div>
      <div className="flex flex-col space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
