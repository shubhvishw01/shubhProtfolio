import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation before sending request
    if (!formData.name || !formData.email.includes("@")) {
      alert("Please fill in a valid Name and Email.");
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzqxCUa9DmTr-kfRnE5PDEQsIxzp1TpolVOpXq1BRkp7niOSL4i9QziYRiLy0NyuOs8/exec"; // ✅ Make sure it's the FULL DEPLOYED URL

    const response = await fetch(scriptURL, {
      method: "POST",
      // mode: "no-cors", // ✅ Use no-cors mode for Google Apps Script
      headers: {
        "Content-Type": "application/json", // ✅ Tell server it's JSON
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Success:", result);
    alert("Form submitted successfully!");

    // Optional: Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  return (
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
        className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        🚀 Send Message
      </button>
    </form>
  );
}

export default ContactForm;
