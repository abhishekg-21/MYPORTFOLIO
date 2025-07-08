import React from "react";
// import { Link } from "react-router-dom";
// Import GitHub icon from @heroicons/react (make sure you have them installed)
import { SocialIcon } from "react-social-icons"; // A popular library for social media icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-card dark:bg-dark-card shadow-inner dark:shadow-lg mt-8 py-6 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-light-text dark:text-dark-text">
        {/* GitHub Link */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <SocialIcon
            url="https://github.com/AbhishekGupta" // Replace with Abhishek's actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            fgColor="currentColor" // Use current text color for icon
            bgColor="transparent" // Make background transparent
            className="!h-6 !w-6 text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200"
          />
          <a
            href="https://github.com/AbhishekGupta" // Replace with Abhishek's actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-500 transition-colors duration-200"
          >
            AbhishekGupta
          </a>
        </div>

        {/* Copyright Information */}
        <p className="text-center md:text-right">
          Copyright &copy; {currentYear} Abhishek Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
