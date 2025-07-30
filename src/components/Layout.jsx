import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ChatBot from "./ChatBot";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <ChatBot />
      <footer className="text-center bg-emerald-100 text-gray-600 py-4 text-sm">
        © 2025 Shubham Vishwakarma
      </footer>
    </div>
  );
};

export default Layout;
