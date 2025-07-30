import React, { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  const botReply = (userMsg) => {
    const msg = userMsg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
      return "Hello! 👋 How can I assist you today?";
    if (msg.includes("your name"))
      return "I’m Shubham’s personal portfolio assistant. 🤖";
    if (msg.includes("who are you") || msg.includes("what are you"))
      return "I'm a smart assistant created to help you navigate this portfolio.";
    if (msg.includes("project") || msg.includes("projects"))
      return "You can explore my projects in the 'Projects' section.";
    if (msg.includes("skills") || msg.includes("technology"))
      return "I have strong skills in the MERN Stack: MongoDB, Express, React, Node.js.";
    if (msg.includes("experience"))
      return "I have 1 year of hands-on experience as a React Developer.";
    if (msg.includes("resume") || msg.includes("cv"))
      return "You can download my resume from the 'Resume' section.";
    if (msg.includes("contact") || msg.includes("email"))
      return "Reach me at shubh.vishw01@gmail.com or via the Contact form.";
    if (msg.includes("location") || msg.includes("city"))
      return "I'm based in Indore, India. 📍";
    if (msg.includes("job") || msg.includes("hiring"))
      return "Yes! I'm open to React Developer opportunities.";
    if (msg.includes("linkedin"))
      return "You can find my LinkedIn in the footer section. 🔗";
    if (msg.includes("thank")) return "You're welcome! 😊";
    if (msg.includes("bye")) return "Goodbye! Have a great day ahead! 👋";
    if (msg.includes("help"))
      return "I can help with Projects, Skills, Resume, and Contact Info.";
    return "Sorry, I didn’t understand that. Please check the menu above.";
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTimeout(() => {
      const response = botReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 500);
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl animate-bounce-slow"
          title="Chat with me"
        >
          <MessageCircle size={26} />
        </button>
      )}

      <div
        className={`transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        }`}
      >
        {isOpen && (
          <div className="w-80 bg-white/90 backdrop-blur-md shadow-2xl rounded-xl flex flex-col overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-3 flex justify-between items-center">
              <span className="font-semibold text-sm">🤖 Shubham ChatBot</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl hover:scale-110 transition"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 max-h-96 overflow-y-auto p-4 space-y-2 text-sm bg-white">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 self-end ml-auto text-right"
                      : "bg-gray-100 self-start mr-auto text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatRef} />
            </div>

            {/* Input */}
            <div className="flex border-t p-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md transition"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
