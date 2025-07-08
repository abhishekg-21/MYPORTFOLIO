import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme hook
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"; // Import the ToggleSwitch component

// Import icons from @heroicons/react (make sure you have them installed: npm install @heroicons/react)
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu open/close
  const { theme, toggleTheme } = useTheme(); // Get theme state and toggle function from context
  const location = useLocation(); // Hook to get current path for active link highlighting

  // Array of navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-light-card dark:bg-dark-card shadow-md dark:shadow-lg transition-colors duration-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-heading font-bold text-accent-500 hover:text-accent-600 transition-colors duration-300"
        >
          Abhishek Gupta
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              // Apply active link styling based on current path
              className={`
                text-lg font-medium hover:text-accent-500 transition-colors duration-200
                ${
                  location.pathname === link.path
                    ? "text-accent-500 border-b-2 border-accent-500 pb-1" // Active link style
                    : "text-light-text dark:text-dark-text" // Inactive link style
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle for Desktop */}
          <div className="flex items-center ml-4">
            {theme === "light" ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-300" />
            )}
            <ToggleSwitch
              isActive={theme === "dark"}
              onToggle={toggleTheme}
              className="ml-2"
            />
          </div>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          {/* Theme Toggle for Mobile (next to hamburger) */}
          <div className="flex items-center mr-4">
            {theme === "light" ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-300" />
            )}
            <ToggleSwitch
              isActive={theme === "dark"}
              onToggle={toggleTheme}
              className="ml-2"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-md p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" /> // Close icon
            ) : (
              <Bars3Icon className="h-8 w-8" /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card py-4 shadow-inner transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={`
                  text-xl font-medium py-2 px-4 rounded-lg
                  hover:bg-accent-100 hover:text-accent-600 dark:hover:bg-dark-bg dark:hover:text-accent-500
                  transition-colors duration-200 w-full text-center
                  ${
                    location.pathname === link.path
                      ? "text-accent-500 bg-accent-50 dark:bg-accent-900/20" // Active link style
                      : "text-light-text dark:text-dark-text" // Inactive link style
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
