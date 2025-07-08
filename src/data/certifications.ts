// src/data/certifications.ts

import { ICertification } from "./types";

const certifications: ICertification[] = [
  // Education
  {
    id: "bca-atharva",
    name: "Bachelor of Computer Applications (BCA)",
    issuer: "Atharva Institute",
    date: "2022 – 2025 (Expected)", // Use 'Expected' as it's an ongoing degree
    link: "https://atharvainstitute.edu.in/", // Replace with actual Atharva Institute's website if applicable
  },
  // Certifications
  {
    id: "full-stack-pride-educare",
    name: "Full Stack Web Development Certification",
    issuer: "Pride Educare",
    date: "August 2024", // Example date, replace with actual completion date
    link: "https://www.prideeducare.com/certifications/fullstack", // Example link, replace with actual certification URL if available
  },
  // Add more certifications here as Abhishek completes them
  // {
  //   id: 'aws-developer',
  //   name: 'AWS Certified Developer - Associate',
  //   issuer: 'Amazon Web Services (AWS)',
  //   date: 'January 2025',
  //   link: 'https://www.credly.com/badges/your-aws-badge-id',
  // },
];

export default certifications;
