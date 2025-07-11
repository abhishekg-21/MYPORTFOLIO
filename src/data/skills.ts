// src/data/skills.ts

import { ISkill } from "./types";

const skills: ISkill[] = [
  // Languages
  {
    id: "java",
    name: "Java",
    category: "Languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    id: "html",
    name: "HTML5", // Often referred to as HTML5
    category: "Languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", // You'll need to add an HTML icon in public/assets/icons/
    // Or 'Frontend', or 'Web Fundamentals'
  },
  {
    id: "css",
    name: "CSS3", // Often referred to as CSS3
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", // You'll need to add a CSS icon in public/assets/icons/
    category: "Languages", // Or 'Frontend', or 'Web Fundamentals'
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Languages",
    icon: "/assets/icons/sql.svg",
  },

  // Frameworks & Runtimes
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Frameworks",
    icon: "/assets/icons/spring-boot.svg",
  },
  {
    id: "reactjs",
    name: "React.js",
    category: "Frameworks",
    icon: "/assets/icons/react.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Frameworks",
    icon: "/assets/icons/node-js.svg",
  },
  // Adding Express.js as a common Node.js framework
  {
    id: "expressjs",
    name: "Express.js",
    category: "Frameworks",
    icon: "/assets/icons/express.svg",
  },

  // Databases (though listed under "SQL" in prompt, good to separate if more are added)
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    icon: "/assets/icons/postgresql.svg",
  },
  {
    id: "neon-db",
    name: "Neon DB",
    category: "Databases",
    icon: "/assets/icons/neon.svg",
  }, // Assuming an icon for Neon DB

  // Tools & Platforms
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    icon: "/assets/icons/postman.svg",
  },
  {
    id: "docker",
    name: "Docker",
    category: "Tools",
    icon: "/assets/icons/docker.svg",
  },
  { id: "git", name: "Git", category: "Tools", icon: "/assets/icons/git.svg" },
  {
    id: "netlify",
    name: "Netlify",
    category: "Tools",
    icon: "/assets/icons/netlify.svg",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    icon: "/assets/icons/github.svg",
  }, // Often included with Git
];

export default skills;

/*
  Icon Notes:
  - The `icon` property is set to a string path (e.g., '/assets/icons/java.svg').
  - You will need to place actual SVG or PNG icon files corresponding to these paths
    inside your `public/assets/icons/` directory.
  - Alternatively, if using a library like `react-icons`:
    1. Install it: `npm install react-icons`
    2. In `types.ts`, change `icon?: string;` to `iconComponent?: React.ElementType;` for ISkill.
    3. In `skills.ts`, import icons like: `import { FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';`
    4. Then use them in the `iconComponent` property:
       `{ id: 'java', name: 'Java', category: 'Languages', iconComponent: FaJava },`
    This approach provides consistent styling and saves you from managing individual image files.
    For this portfolio, using image paths for now is simpler if `react-icons` isn't a hard requirement.
*/
