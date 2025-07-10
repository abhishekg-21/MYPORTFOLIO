import React from "react";
// import { Link } from "react-router-dom"; // Only if you plan to use Link in footer

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card py-6 text-center text-light-text dark:text-gray-400 border-t border-light-border dark:border-dark-border mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Abhishek Gupta. All rights reserved.
        </p>
        {/* Add social media links or other footer elements here. */}
        {/* Example:
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-accent-500 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-accent-500 transition-colors duration-200">Terms of Service</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
