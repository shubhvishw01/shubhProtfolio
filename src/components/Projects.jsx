import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "UK Mobility",
      description: "Transport dashboard using MERN stack.",
    },
    {
      name: "Portfolio Website",
      description: "React + Vite + Tailwind based personal portfolio.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectList.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
              {proj.name}
            </h3>
            <p className="text-gray-600">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
