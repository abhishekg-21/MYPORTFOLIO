import React from "react";
import { motion, Variants } from "framer-motion";
import certifications from "../data/certifications";
import { ICertification } from "../data/types";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  LinkIcon,
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CertificationsPage: React.FC = () => {
  const education = certifications.filter((cert) => cert.name.includes("BCA"));
  const professionalCertifications = certifications.filter(
    (cert) => !cert.name.includes("BCA")
  );

  return (
    <motion.div
      className="py-12 md:py-20" // Padding handled by main in App.tsx
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
          className="mb-16 p-6 sm:p-8 bg-light-card dark:bg-dark-card rounded-lg shadow-lg" // Responsive padding
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={pageVariants}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-heading font-semibold text-accent-500 mb-6 flex items-center space-x-3 border-b border-light-border dark:border-dark-border pb-3"
            variants={itemVariants}
          >
            <AcademicCapIcon className="h-7 w-7 sm:h-8 sm:w-8" />{" "}
            {/* Responsive icon size */}
            <span>Education</span>
          </motion.h3>
          <div className="space-y-8">
            {education.map((cert: ICertification) => (
              <motion.div
                key={cert.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-5 sm:p-6 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border" // Responsive padding
                variants={itemVariants}
                whileHover={{
                  translateY: -5,
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-light-text dark:text-dark-text mb-1">
                    {" "}
                    {/* Responsive title size */}
                    {cert.name}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>{" "}
                  {/* Responsive text size */}
                  {cert.date && (
                    <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                      {" "}
                      {/* Responsive text size */}
                      {cert.date}
                    </p>
                  )}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium transition-colors duration-200 text-sm sm:text-base" // Responsive text size
                  >
                    <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />{" "}
                    {/* Responsive icon size */}
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
          className="p-6 sm:p-8 bg-light-card dark:bg-dark-card rounded-lg shadow-lg" // Responsive padding
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={pageVariants}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-heading font-semibold text-accent-500 mb-6 flex items-center space-x-3 border-b border-light-border dark:border-dark-border pb-3"
            variants={itemVariants}
          >
            <DocumentTextIcon className="h-7 w-7 sm:h-8 sm:w-8" />{" "}
            {/* Responsive icon size */}
            <span>Certifications</span>
          </motion.h3>
          <div className="space-y-8">
            {professionalCertifications.map((cert: ICertification) => (
              <motion.div
                key={cert.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-5 sm:p-6 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border" // Responsive padding
                variants={itemVariants}
                whileHover={{
                  translateY: -5,
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-light-text dark:text-dark-text mb-1">
                    {" "}
                    {/* Responsive title size */}
                    {cert.name}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>{" "}
                  {/* Responsive text size */}
                  {cert.date && (
                    <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                      {" "}
                      {/* Responsive text size */}
                      {cert.date}
                    </p>
                  )}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium transition-colors duration-200 text-sm sm:text-base" // Responsive text size
                  >
                    <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />{" "}
                    {/* Responsive icon size */}
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
