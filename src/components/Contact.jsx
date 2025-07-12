import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-700">Contact Me</h2>
      <p className="text-gray-600 text-lg">
        Email:{" "}
        <a
          href="mailto:shubh.vishw01@gmail.com"
          className="text-blue-600 underline"
          target="_blank"
        >
          📧 Email: shubh.vishw01@gmail.com
        </a>
      </p>
      <p className="text-gray-600 text-lg">
        <a
          href="https://www.linkedin.com/in/shubham-vishwakarma-ab609a219"
          target="_blank"
        >
          🔗 LinkedIn
        </a>
      </p>
      <p className="text-gray-600 text-lg">
        <a href="http://github.com/shubhvishw01" target="_blank">
          💻 GitHub
        </a>
      </p>
      <p className="text-gray-600 text-lg">
        <a href="https://shubh-protfolio-ryt2.vercel.app/" target="_blank">
          🌐 Portfolio
        </a>
      </p>
      <p className="text-gray-600 text-lg">📱 +91 8357847811</p>
      <p className="text-gray-600 text-lg">📍 Indore, India</p>
      Let’s connect and build something amazing together!
    </section>
  );
};

export default Contact;
