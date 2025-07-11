// src/data/projects.ts

import { IProject } from "./types";

const projects: IProject[] = [
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description:
      "Developed a fully functional e-commerce platform with secure user authentication, product management, shopping cart, and order processing capabilities. Implemented robust RESTful APIs and ensured data integrity with PostgreSQL. This project showcases my proficiency in building scalable backend solutions.",
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Spring Security",
      "React.js",
    ],
    githubLink: "https://github.com/abhishekg-21", // Replace with actual GitHub link
    liveDemoLink: "https://e-shop-frontend-eta.vercel.app/", // Replace with actual live demo link (if exists)
    image: "public/E-Shop.png", // Path to project screenshot
  },
  {
    id: "qr-code-lms-module",
    title: "QR Code LMS Web Module",
    description:
      "Designed and implemented a web-based Learning Management System module using QR codes for efficient attendance tracking and resource sharing. Leveraged Node.js for backend logic and Neon DB for scalable data management, demonstrating my ability to deliver practical web solutions.",
    techStack: [
      "Node.js",
      "Express.js",
      "Neon DB",
      "EJS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubLink: "https://github.com/abhishekg-21", // Replace with actual GitHub link
    liveDemoLink: "https://scans-gold.vercel.app/", // Replace with actual live demo link (if exists)
    image: "public/LMS.png", // Path to project screenshot
  },
  // Add more projects as Abhishek develops them
  // {
  //   id: 'project-three',
  //   title: 'Another Awesome Project',
  //   description: 'This is a description for another project, highlighting its features and my role.',
  //   techStack: ['Python', 'Django', 'SQLite', 'React.js', 'Docker'],
  //   githubLink: 'https://github.com/AbhishekGupta/another-project',
  //   liveDemoLink: null, // Or omit if not applicable
  //   image: '/assets/images/another-project.png',
  // },
];

export default projects;
