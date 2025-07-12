import React from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    // {
    //   name: "MongoDB",
    //   icon: <SiMongodb className="text-green-600" size={20} />,
    // },
    // {
    //   name: "Express",
    //   icon: <SiExpress className="text-gray-800" size={20} />,
    // },
    { name: "React", icon: <SiReact className="text-blue-500" size={20} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" size={20} /> },
    // {
    //   name: "Node.js",
    //   icon: <SiNodedotjs className="text-green-700" size={20} />,
    // },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" size={20} />,
    },
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" size={20} /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" size={20} /> },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500" size={20} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-500" size={20} />,
    },
    { name: "GitHub", icon: <SiGithub className="text-black" size={20} /> },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
