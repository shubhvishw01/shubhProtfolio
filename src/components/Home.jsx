import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <p className="md:text-2xl text-gray-600">
            Hi, I'm Shubham Vishwakarma 👋 I'm a React Developer with 1+ year of
            experience building fast and responsive web apps. I specialize in
            ReactJS, Redux, and modern frontend development tools. Currently
            working at HP Software India, I focus on clean code and performance
            optimization. Let’s connect and build something amazing together!
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <p>Shubham Vishwakarma</p>
        </div>
      </div>

      <Link
        to="/projects"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow"
      >
        See My Work
      </Link>

      {/* <a
        href="/projects"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow"
      >
        See My Work
      </a> */}
    </section>
  );
};

export default Home;
