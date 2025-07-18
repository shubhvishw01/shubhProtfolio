import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email.includes("@")) {
      alert("Please fill in a valid Name and Email.");
      return;
    }

    setStatus("submitting");
    setShowPopup(true); // Show popup immediately

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw6lQ_e_IyJ-xnhuEUWA4_uejWWH8N7ZIVTLnWteBp-sYVou9G0H-4OPSvrO0sQ10Iw/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });

      setStatus("success");

      // Auto close after 3s
      setTimeout(() => {
        setShowPopup(false);
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
      setShowPopup(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          Send a Message ✉️
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className={`mt-4 font-semibold py-3 rounded-lg transition duration-300 ${
            status === "submitting"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {status === "submitting" ? "Sending..." : "🚀 Send Message"}
        </button>
      </form>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center animate-fade-in">
            {status === "submitting" ? (
              <>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Sending your message...
                </h2>
                <div className="h-1 bg-blue-300 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 animate-progress-bar"></div>
                </div>
              </>
            ) : (
              <>
                <div className="text-green-600 text-4xl mb-2">✅</div>
                <h2 className="text-lg font-bold text-gray-800">
                  Message Sent!
                </h2>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out.
                </p>
                <div className="h-1 mt-4 bg-green-300 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 animate-progress-bar"></div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tailwind Custom Animation */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress-bar {
          animation: progressBar 3s linear forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default ContactForm;
