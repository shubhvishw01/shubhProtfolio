import React from "react";

const Skills = () => {
  const skills = ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
