import React from "react";
import { motion, Variants } from "framer-motion";
import projects from "../data/projects"; // Import project data
import { IProject } from "../data/types"; // Import IProject interface
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"; // Icons for live demo and GitHub

// Animation variants for the page container
const pageVariants: Variants = {
  // Add : Variants here
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for individual project cards
const cardVariants: Variants = {
  // Add : Variants here
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-10 text-center border-b-2 border-accent-500 pb-4 inline-block mx-auto block"
        variants={cardVariants} // Using cardVariants for title as well
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project: IProject) => (
          <motion.div
            key={project.id}
            className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden
                       flex flex-col h-full border border-light-border dark:border-dark-border"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.2 }} // Animate when 20% of card is visible
          >
            {project.image && (
              <div className="w-full h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  // Fallback for broken images
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.src = `https://placehold.co/600x400/E5E7EB/1F2937?text=No+Image`;
                    e.currentTarget.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-heading font-semibold text-light-text dark:text-dark-text mb-3">
                {project.title}
              </h3>
              <p className="text-light-text dark:text-gray-300 text-base leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent-50 text-accent-700 dark:bg-accent-900/20 dark:text-accent-300
                               px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-light-border dark:border-dark-border">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium
                               transition-colors duration-200"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium
                               transition-colors duration-200"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
