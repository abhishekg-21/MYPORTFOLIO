import React from "react";
import Button from "../component/Button/Button"; // Ensure correct path
import Card from "../component/Card/Card"; // Ensure correct path
import { SocialIcon } from "react-social-icons"; // Assuming you use react-social-icons
import socialLinks from "../data/socialLinks"; // Your social links data

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] flex flex-col justify-center items-center text-center py-16 sm:py-24 md:py-32">
      {/* Hero Section */}
      <section className="mb-12">
        {/* Profile Picture Placeholder */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-6 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
          {/* Replace with your actual image */}
          <img
            src="/assets/profile.jpg" // Assuming your image is in public/assets
            alt="Abhishek Gupta"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight text-light-text dark:text-dark-text">
          Hi, I'm <span className="text-accent-500">Abhishek Gupta</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate Full Stack Developer with a knack for building beautiful
          and functional web applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              /* Handle scroll to contact or show modal */
            }}
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              /* Handle download resume */
            }}
          >
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.name}
              url={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            />
          ))}
        </div>
      </section>

      {/* About Section (Example using Card) */}
      <section className="w-full max-w-4xl px-4">
        <Card className="text-left">
          <h2 className="text-3xl font-heading font-bold text-accent-500 mb-4">
            About Me
          </h2>
          <p className="text-lg text-light-text dark:text-gray-300 leading-relaxed">
            I'm a dedicated and enthusiastic computer applications student with
            a strong foundation in web development technologies. My journey into
            full-stack development has equipped me with skills in both front-end
            (React, HTML, CSS, JavaScript) and back-end (Node.js, Express,
            databases) development. I love turning ideas into reality through
            clean, efficient, and user-friendly code.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Home;
