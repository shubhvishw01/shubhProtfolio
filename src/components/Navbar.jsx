import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md bg-opacity-70 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Shubham</h1>
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-500">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
