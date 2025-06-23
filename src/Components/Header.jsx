import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { Sun, Moon, Menu, X } from "react-feather";
import  appService  from "../appwrite/authConfig";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  function toggleDarkMode() {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  }

  const navLinks = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Subjects", to: "/subjects" },
    { name: "Contact", to: "/contact" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-xl font-extrabold tracking-wide hover:text-purple-400 transition"
        >
          FlashMaster
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-purple-400 font-semibold transition ${
                  isActive ? "text-purple-400 font-bold" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 transition text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user && (
            <div className="select-none flex justify-center items-center w-[30px] h-[30px] rounded-full border-0 bg-amber-100  ">
              {user.name[0].toUpperCase()}
            </div>
          )}

          {/* If user logged in, show logout button on desktop */}
          {user ? (
            <button
              onClick={async (e) => {
                await appService.logOutUser();
                navigate("/");
              }}
              className="select-none ml-4 px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 text-white font-semibold transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={async (e) => {
                navigate("/login");
              }}
              className="ml-4 px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 text-white font-semibold transition"
            >
              Sign Up
            </button>
          )}

          {!user && (
            <div className="hidden sm:flex space-x-2">
              <Link
                to="/login"
                className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-white font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/login"
                className="px-3 py-1 border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white text-white font-semibold transition"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden p-2 rounded-md focus:outline-none text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-800 shadow-md">
          <div className="px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-white font-semibold hover:text-purple-400 transition px-2 py-1 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 text-white transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-md hover:bg-red-600 hover:text-white text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
