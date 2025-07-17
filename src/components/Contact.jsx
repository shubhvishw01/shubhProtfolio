import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-stretch justify-between">
        {/* Contact Info Box */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-blue-100 min-h-[550px] flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Contact Me
            </h2>

            <div className="space-y-3 text-gray-700 text-lg">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:shubh.vishw01@gmail.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  shubh.vishw01@gmail.com
                </a>
              </p>

              <p>
                🔗{" "}
                <a
                  href="https://www.linkedin.com/in/shubham-vishwakarma-ab609a219"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>

              <p>
                💻{" "}
                <a
                  href="http://github.com/shubhvishw01"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>

              <p>
                🌐{" "}
                <a
                  href="https://shubh-protfolio-ryt2.vercel.app/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Portfolio
                </a>
              </p>

              <p>📱 +91 8357847811</p>
              <p>📍 Indore, India</p>
            </div>
          </div>

          <p className="text-gray-600 italic">
            Let’s connect and build something amazing together! 🚀
          </p>
        </div>

        {/* Contact Form Box */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-8 border border-blue-100 min-h-[550px] flex items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
