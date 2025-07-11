import React from "react";
import { motion, Variants } from "framer-motion";
import projects from "../data/projects";
import { IProject } from "../data/types";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const pageVariants: Variants = {
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      className="py-12 md:py-20" // Padding handled by main in App.tsx
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-10 text-center border-b-2 border-accent-500 pb-4 inline-block mx-auto block"
        variants={cardVariants}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {" "}
        {/* Responsive grid */}
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
            viewport={{ once: true, amount: 0.2 }}
          >
            {project.image && (
              <div className="w-full h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.src = `https://placehold.co/600x400/E5E7EB/1F2937?text=No+Image`;
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            )}

            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              {" "}
              {/* Responsive padding */}
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-light-text dark:text-dark-text mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-light-text dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent-50 text-accent-700 dark:bg-accent-900/20 dark:text-accent-300
                               px-2 py-1 rounded-full text-xs sm:text-sm font-medium" // Responsive tag size
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto pt-4 border-t border-light-border dark:border-dark-border">
                {" "}
                {/* Responsive gap */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 sm:space-x-2 text-accent-500 hover:text-accent-600 font-medium
                               transition-colors duration-200 text-sm sm:text-base" // Responsive text size
                  >
                    <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5" />{" "}
                    {/* Responsive icon size */}
                    <span>View Code</span>
                  </a>
                )}
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 sm:space-x-2 text-accent-500 hover:text-accent-600 font-medium
                               transition-colors duration-200 text-sm sm:text-base" // Responsive text size
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5" />{" "}
                    {/* Responsive icon size */}
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
