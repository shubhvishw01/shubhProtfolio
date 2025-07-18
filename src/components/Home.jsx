import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-10 flex flex-col items-center justify-center text-center px-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
        <div className="flex flex-col gap-6 w-full md:w-1/2 animate-fade-in-up">
          {/* <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg"> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Shubham Vishwakarma
            </span>{" "}
            <span className="inline-block animate-wiggle">👋</span>
          </h2>

          <p className="text-gray-600 text-base md:text-xl leading-relaxed">
            I'm a{" "}
            <span className="font-semibold text-blue-600">React Developer</span>{" "}
            with 1+ year of experience building fast and responsive web apps. I
            specialize in{" "}
            <span className="font-medium text-purple-600">ReactJS, Redux</span>,
            and modern frontend development tools. Currently working at{" "}
            <span className="text-green-600 font-medium">
              HP Software India
            </span>
            , I focus on clean code and performance optimization. Let’s connect
            and build something amazing together!
          </p>
          {/* </div> */}
        </div>

        <div className="flex justify-center md:justify-center w-full md:w-1/3">
          <img
            src="/Profile.jpg" // 👈 yahan apni image ka path/URL daalo
            alt="Profile"
            className="w-95 h-120  object-cover shadow-lg border-4 border-none"
          />
        </div>
      </div>

      {/* Button Group */}
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        {/* Download Resume Button */}
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Shubham-Vishwakarma-Resume.pdf";
            link.click();
          }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          📄 Download Resume
        </button>

        {/* See My Work Button */}
        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform text-center"
        >
          🚀 Connect me
        </Link>
      </div>

      {/* <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/resume.pdf"; // public folder path
          link.download = "Shubham-Vishwakarma-Resume.pdf"; // custom filename
          link.click();
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        📄 Download Resume
      </button>

      <Link
        to="/projects"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow"
      >
        See My Work
      </Link> */}

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
