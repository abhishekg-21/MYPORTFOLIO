import React from "react";
import Button from "../component/Button/Button";
import Card from "../component/Card/Card";
import { SocialIcon } from "react-social-icons";
import socialLinks from "../data/socialLinks";

const Home: React.FC = () => {
  // Define a dummy function for button click, replace with actual logic (e.g., smooth scroll, modal)
  const handleGetInTouch = () => {
    // Example: Scroll to the contact section or navigate to /contact
    console.log("Navigating to contact or opening contact form...");
    // You might use react-router-dom's useNavigate hook here to go to /contact
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate('/contact');
  };

  const handleDownloadCV = () => {
    // Example: Trigger download of a resume PDF
    const resumeUrl = "/assets/Abhishek_Gupta_Resume.pdf"; // Ensure this path is correct in your public folder
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center py-16 sm:py-24 md:py-32">
      {/* Hero Section */}
      <section className="text-center mb-16 px-4">
        {/* Profile Picture */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto mb-8 shadow-xl border-4 border-accent-500 dark:border-accent-600 transition-all duration-300 transform hover:scale-105">
          <img
            src="/assets/profile_pic.jpg" // CHANGE THIS TO YOUR ACTUAL PROFILE PICTURE PATH
            alt="Abhishek Gupta"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight text-light-text dark:text-dark-text animate-fade-in-down">
          Hi, I'm <span className="text-accent-500">Abhishek Gupta</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in">
          A passionate{" "}
          <span className="font-semibold text-accent-500">
            Full Stack Developer
          </span>{" "}
          with a knack for building beautiful, efficient, and user-friendly web
          applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up">
          <Button variant="primary" size="lg" onClick={handleGetInTouch}>
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" onClick={handleDownloadCV}>
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in">
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.name}
              url={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125 hover:shadow-lg rounded-full"
              style={{ height: 48, width: 48 }} // Increased size for better visibility
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-5xl px-4 mt-16 sm:mt-24">
        <Card className="text-left">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent-500 mb-6 border-b-2 border-accent-500 pb-2 inline-block">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-light-text dark:text-gray-300 leading-relaxed mb-4">
            I'm a dedicated and enthusiastic computer applications student with
            a strong foundation in web development technologies. My journey into
            full-stack development has equipped me with skills in both front-end
            (React, HTML, CSS, JavaScript) and back-end (Node.js, Express,
            databases) development.
          </p>
          <p className="text-lg sm:text-xl text-light-text dark:text-gray-300 leading-relaxed">
            I thrive on turning ideas into reality through clean, efficient, and
            user-friendly code. I am always eager to learn new technologies and
            improve my craft, constantly seeking opportunities to contribute to
            innovative projects and grow as a developer.
          </p>
        </Card>
      </section>

      {/* Optional: Skills Section - Using Card for structure */}
      {/*
      <section className="w-full max-w-5xl px-4 mt-16 sm:mt-24">
        <Card className="text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent-500 mb-6 border-b-2 border-accent-500 pb-2 inline-block">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => ( // Assuming 'skills' data is imported
              <div key={skill.id} className="flex flex-col items-center text-light-text dark:text-dark-text">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
      */}
    </div>
  );
};

export default Home;
