import React from "react";

const Home = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-800">
        Hi, I'm Shubham
      </h1>
      <p className="text-xl text-gray-600">
        Full Stack Developer specializing in MERN stack
      </p>
      <a
        href="/projects"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow"
      >
        See My Work
      </a>
    </section>
  );
};

export default Home;
