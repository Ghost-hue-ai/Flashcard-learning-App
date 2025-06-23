import React from "react";
import { NavLink } from "react-router-dom";
import { GitHub, Twitter, Mail } from "react-feather";

function Footer() {
  const activeStyle = {
    color: "#1E1B22",
    fontWeight: "bold",
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">FlashMaster</h2>
          <p className="text-sm">Your ultimate flashcard companion for smarter study sessions.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/dashboard"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="hover:text-purple-600 transition"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="hover:text-purple-600 transition"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="hover:text-purple-600 transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">
              <GitHub size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">
              <Twitter size={20} />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-purple-600 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-500 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} FlashMaster. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
