// src/data/types.ts

/**
 * Interface for a Project object.
 */
export interface IProject {
  id: string; // Unique identifier for the project
  title: string; // Name of the project
  description: string; // Brief description of the project
  techStack: string[]; // Array of technologies used (e.g., ['Spring Boot', 'PostgreSQL'])
  githubLink?: string; // Optional: URL to the GitHub repository
  liveDemoLink?: string; // Optional: URL to a live demo of the project
  image?: string; // Optional: Path to a project screenshot/image (e.g., '/assets/images/ecommerce.png')
}

/**
 * Interface for a Skill object.
 */
export interface ISkill {
  id: string; // Unique identifier for the skill
  name: string; // Name of the skill (e.g., 'Java', 'React.js')
  category: "Languages" | "Frameworks" | "Tools" | "Databases" | "Cloud"; // Predefined categories
  icon?: string; // Optional: Path to an icon image or a string representing an icon name (e.g., 'java-icon.svg', 'FaJava')
}

/**
 * Interface for a Certification object.
 */
export interface ICertification {
  id: string; // Unique identifier for the certification
  name: string; // Name of the certification (e.g., 'Full Stack Web Development')
  issuer: string; // Issuing body (e.g., 'Pride Educare')
  date?: string; // Optional: Date of certification (e.g., 'Jan 2024')
  link?: string; // Optional: Link to the certification (e.g., credential URL)
}

/**
 * Interface for Social Link objects (used in footer/contact)
 */
export interface ISocialLink {
  name: string; // e.g., 'LinkedIn', 'GitHub'
  url: string; // Full URL to the social profile
  iconComponent?: React.ElementType; // Optional: If using React components for icons (e.g., FaLinkedin)
}
