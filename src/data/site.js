// ============================================================
//  SITE CONTENT — edit this file to update your whole website
// ============================================================

export const site = {
  name: "Mohamed Abdelgafar",
  role: "Software Engineer",
  photo: "/profile.jpg",
  tagline:
    "I build reliable web applications and clean, maintainable software. I care about good architecture, smooth user experiences, and shipping things that work.",
  email: "mohamed.abdelgafar.job@gmail.com",
  resumeUrl: "/resume.pdf",
  location: "Egypt",
  responseTime: "Usually responds within 24 hours",
  openToWork: true,
};

// Your social links
export const socials = [
  { name: "GitHub", url: "https://github.com/mohamed8483", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-abdelgafar-dev/", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/mohamed-abdelgafar/", icon: "leetcode" },
  { name: "Email", url: "mailto:mohamed.abdelgafar.job@gmail.com", icon: "mail" },
];

export const stats = [
  { value: "3+", label: "Projects shipped" },
  { value: "2+", label: "Years coding" },
  { value: "10+", label: "Technologies used" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Go", "C++", "C", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend & Systems",
    items: ["Monolith", "High-Scale", "Caching", "Optimization"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Bash", "Shell"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "Linux", "Ubuntu", "Figma", "pre-commit"],
  },
];

export const about = {
  heading: "A software engineer who likes building things end to end.",
  paragraphs: [
    "Hi! I'm Mohamed, a software engineer focused on web development. I enjoy taking an idea from a blank page to a working product — designing the structure, writing the code, and polishing the details until it feels right.",
    "I work primarily with modern JavaScript tools like React, and I care a lot about clean code, performance, and accessibility. When I'm not building, I'm usually learning something new or writing about what I've learned.",
  ],
  identityCode: `class MohamedAbdelgafar extends SoftwareEngineer {
  stack = ["JavaScript", "React", "Node.js"]
  focus = "clean, reliable software"
  principle = "build it end to end"
}`,
};

export const projects = [
  {
    title: "School Management System CLI",
    featured: true,
    description:
      "A C++ command-line application for managing students, teachers, and courses.",
    problem:
      "Schools need a simple way to keep track of students, teachers, and course enrollments without setting up a complex database system.",
    solution:
      "Built a modular C++ CLI split into models, system logic, and UI layers. It supports adding students, teachers, and courses, enrolling students, assigning teachers, and displaying all records. A scripted test input file allows automated verification of the whole workflow.",
    tags: ["C++", "OOP", "CLI", "Data Structures"],
    links: {
      code: "https://github.com/mohamed8483/SchoolSystemCli",
    },
  },
  {
    title: "Product & Authentication API",
    featured: false,
    description:
      "A REST API built with Express 5 and PostgreSQL for managing products and users.",
    problem:
      "Applications need a secure, reusable backend for product management and user authentication without mixing database logic into request handlers.",
    solution:
      "Built a layered Express API (routes, controllers, services, repositories) with parameterized PostgreSQL queries. It provides full product CRUD with search and pagination, plus registration with bcrypt-hashed passwords and login by username or email with request validation and proper HTTP status codes.",
    tags: ["Node.js", "Express 5", "PostgreSQL", "REST API", "bcrypt"],
    links: {
      code: "https://github.com/mohamed8483/Task_manager_api",
    },
  },
  {
    title: "webpack (Fork)",
    featured: false,
    description:
      "A fork of webpack — the module bundler that packs many modules into a few bundled assets.",
    problem:
      "Really understanding a bundler means going beyond the docs: how modules are resolved, how loaders transform files, and how chunks are produced only becomes clear by exploring a real, large codebase.",
    solution:
      "Forked the webpack repository to study and experiment with its architecture — module resolution, the loader pipeline, code splitting, and the plugin interface — as a hands-on way to learn from one of the most widely used build tools in the JavaScript ecosystem.",
    tags: ["JavaScript", "Webpack", "Build Tools", "Node.js"],
    links: {
      code: "https://github.com/mohamed8483/webpack",
    },
  },
];

export const siteLinks = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
