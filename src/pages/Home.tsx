import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import skills from "../data/skills"; // Import skills data
import { ISkill } from "../data/types"; // Import ISkill interface for typing

// Animation variants for sections
const sectionVariants: Variants = {
  // Add : Variants
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for individual elements/children
const itemVariants: Variants = {
  // Add : Variants
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  // Group skills by category
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, ISkill[]>); // Type assertion for accumulator

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <motion.section
        className="text-center md:text-left min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] flex flex-col justify-center items-center md:items-start"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.p
          className="text-lg text-accent-500 mb-2 font-medium"
          variants={itemVariants}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-heading font-extrabold text-light-text dark:text-dark-text leading-tight"
          variants={itemVariants}
        >
          Abhishek Gupta
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-semibold text-gray-700 dark:text-gray-300 mb-4"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-light-text dark:text-dark-text max-w-2xl mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Passionate Full Stack Developer seeking internships and entry-level
          roles in web & desktop development. Let's build something amazing!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          variants={itemVariants}
        >
          {/* CTA: Download Resume */}
          <motion.a
            href="/assets/resume/Abhishek_Gupta_Resume.pdf" // **Replace with actual path to resume PDF**
            download="Abhishek_Gupta_Resume.pdf"
            className="px-8 py-3 rounded-lg bg-accent-500 text-white font-bold text-lg
                       hover:bg-accent-600 transition-colors duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          {/* CTA: View Projects (links to dedicated Projects page) */}
          <motion.div variants={itemVariants}>
            {" "}
            {/* Wrap with motion.div or motion.span */}
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg border-2 border-accent-500 text-accent-500 font-bold text-lg
                         hover:bg-accent-50 hover:dark:bg-accent-900/20 transition-colors duration-300 transform hover:scale-105"
              // Add Framer Motion props directly to Link if you want interactive animations on the Link itself
              // For simple transitions, Link's own styles are often enough.
              // If you need whileHover/whileTap on the Link, you'd make Link a motion component:
              // const MotionLink = motion(Link);
              // <MotionLink ... >
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block h-full w-full"
              >
                View Projects
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className="mt-20 md:mt-32 p-8 bg-light-card dark:bg-dark-card rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible" // Animates when section comes into view
        viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of section is visible
        variants={sectionVariants}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-6 border-b-2 border-accent-500 pb-2 inline-block"
          variants={itemVariants}
        >
          About Me
        </motion.h3>
        <motion.p
          className="text-lg md:text-xl text-light-text dark:text-gray-300 leading-relaxed mb-4"
          variants={itemVariants}
        >
          Hello! I'm Abhishek Gupta, a dedicated **Full Stack Developer** with a
          strong foundation in Java and a keen interest in building robust web
          applications. My passion lies in crafting seamless user experiences
          and efficient backend systems.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-light-text dark:text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          Based in **Mumbai**, I'm currently pursuing my **BCA from Atharva
          Institute (2022-2025)**. My journey in tech is driven by a passion for
          creating impactful solutions and a commitment to continuous learning
          and growth.
        </motion.p>
      </motion.section>

      {/* Skills & Tech Stack Section */}
      <motion.section
        className="mt-20 md:mt-32 p-8 bg-light-card dark:bg-dark-card rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-8 border-b-2 border-accent-500 pb-2 inline-block"
          variants={itemVariants}
        >
          Skills & Tech Stack
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.keys(categorizedSkills).map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="text-2xl font-heading font-semibold text-accent-500 mb-4">
                {category}
              </h4>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4" // Responsive grid for skills within category
                variants={sectionVariants} // Apply stagger to skill items
              >
                {categorizedSkills[category].map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="flex flex-col items-center p-4 rounded-lg bg-light-bg dark:bg-dark-bg transition-all duration-200
                                hover:scale-105 hover:shadow-md cursor-default border border-light-border dark:border-dark-border"
                    variants={itemVariants} // Each skill item animates
                    whileHover={{ translateY: -5 }} // Subtle lift on hover
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="h-10 w-10 mb-2 object-contain"
                      />
                    )}
                    <p className="text-md font-medium text-light-text dark:text-dark-text text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
