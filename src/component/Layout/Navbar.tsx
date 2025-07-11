import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"; // Assuming this handles theme toggle
import { useScrollDirection } from "../../hooks/useScrollDirection"; // Custom hook for scroll direction

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection(); // Re-introduce this hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine the background classes based on scroll direction
  const navbarBackgroundClasses =
    scrollDirection === "none" // 'none' means at the very top of the page
      ? "bg-transparent" // Transparent at the very top
      : "bg-light-card/90 dark:bg-dark-card/90 shadow-md backdrop-blur-sm"; // Opaque with blur on scroll

  // Determine border classes based on scroll direction (only show border when scrolled)
  const navbarBorderClasses =
    scrollDirection === "none"
      ? "" // No border when at the very top
      : "border-b border-light-border dark:border-dark-border"; // Border when scrolled

  return (
    // Navbar container: Fixed at top, dynamic background and border
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBackgroundClasses} ${navbarBorderClasses}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-accent-500 hover:text-accent-600 transition-colors duration-200 flex-shrink-0"
        >
          Abhishek
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium"
          >
            Projects
          </Link>
          <Link
            to="/certifications"
            className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium"
          >
            Certifications
          </Link>
          <Link
            to="/contact"
            className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium"
          >
            Contact
          </Link>
          <ToggleSwitch /> {/* Theme toggle for desktop */}
        </div>

        {/* Mobile Menu Button (Hamburger) and Toggle Switch */}
        <div className="md:hidden flex items-center space-x-4">
          <ToggleSwitch className="flex-shrink-0" />{" "}
          {/* Theme toggle for mobile */}
          <button
            onClick={toggleMenu}
            className="text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-accent-500 rounded p-1"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card shadow-lg py-4 border-t border-light-border dark:border-dark-border">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/certifications"
              className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Certifications
            </Link>
            <Link
              to="/contact"
              className="text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 text-lg font-medium py-2 w-full text-center"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
