// src/data/socialLinks.ts

import { ISocialLink } from "./types";
// You might import specific icons if you choose to use react-icons here
// import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const socialLinks: ISocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/abhishekg-21", // Replace with Abhishek's actual GitHub URL
    // iconComponent: FaGithub, // Uncomment and import if using react-icons
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhishek-gupta-1a755536a/", // Replace with Abhishek's actual LinkedIn URL
    // iconComponent: FaLinkedinIn, // Uncomment and import if using react-icons
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/u/0/?ogbl#inbox", // Replace with Abhishek's actual email address
    // iconComponent: FaEnvelope, // Uncomment and import if using react-icons
  },
  // Add other social links as needed
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/abhishekgupta_dev',
  //   // iconComponent: FaTwitter,
  // },
];

export default socialLinks;
