import React from "react";
import { motion, Variants } from "framer-motion";
import certifications from "../data/certifications"; // Import certifications data
import { ICertification } from "../data/types"; // Import ICertification interface
import {
  AcademicCapIcon,
  DocumentTextIcon,
  LinkIcon,
} from "@heroicons/react/24/outline"; // Icons

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

// Animation variants for individual certification/education items
const itemVariants: Variants = {
  // Add : Variants here
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CertificationsPage: React.FC = () => {
  // Separate education from certifications for distinct display if needed
  const education = certifications.filter((cert) => cert.name.includes("BCA"));
  const professionalCertifications = certifications.filter(
    (cert) => !cert.name.includes("BCA")
  );

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-10 text-center border-b-2 border-accent-500 pb-4 inline-block mx-auto block"
        variants={itemVariants}
      >
        Certifications & Education
      </motion.h2>

      {/* Education Section */}
      {education.length > 0 && (
        <motion.section
          className="mb-16 p-8 bg-light-card dark:bg-dark-card rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={pageVariants} // Use page variants for section animation
        >
          <motion.h3
            className="text-3xl font-heading font-semibold text-accent-500 mb-6 flex items-center space-x-3 border-b border-light-border dark:border-dark-border pb-3"
            variants={itemVariants}
          >
            <AcademicCapIcon className="h-8 w-8" />
            <span>Education</span>
          </motion.h3>
          <div className="space-y-8">
            {education.map((cert: ICertification) => (
              <motion.div
                key={cert.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
                variants={itemVariants}
                whileHover={{
                  translateY: -5,
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h4 className="text-xl font-heading font-bold text-light-text dark:text-dark-text mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="text-md text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </p>
                  )}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium transition-colors duration-200"
                  >
                    <LinkIcon className="h-5 w-5" />
                    <span>View Details</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Professional Certifications Section */}
      {professionalCertifications.length > 0 && (
        <motion.section
          className="p-8 bg-light-card dark:bg-dark-card rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={pageVariants}
        >
          <motion.h3
            className="text-3xl font-heading font-semibold text-accent-500 mb-6 flex items-center space-x-3 border-b border-light-border dark:border-dark-border pb-3"
            variants={itemVariants}
          >
            <DocumentTextIcon className="h-8 w-8" />
            <span>Certifications</span>
          </motion.h3>
          <div className="space-y-8">
            {professionalCertifications.map((cert: ICertification) => (
              <motion.div
                key={cert.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
                variants={itemVariants}
                whileHover={{
                  translateY: -5,
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h4 className="text-xl font-heading font-bold text-light-text dark:text-dark-text mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="text-md text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </p>
                  )}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium transition-colors duration-200"
                  >
                    <LinkIcon className="h-5 w-5" />
                    <span>View Credential</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
};

export default CertificationsPage;
