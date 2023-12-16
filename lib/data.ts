import React from "react";
import { FaCodepen, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import chrome from "@/public/chrome.jpeg";
import gpt from "@/public/gpt.jpeg";

export const sections = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const social = [
  {
    name: "Github",
    link: "https://github.com/AnandRoy01",
    icon: React.createElement(FaGithub),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/anandroy01/",
    icon: React.createElement(FaLinkedin),
  },
  {
    name: "CodePen",
    link: "https://codepen.io/AnandRoy",
    icon: React.createElement(FaCodepen),
  },
  {
    name: "instagram",
    link: "https://www.linkedin.com/in/anandroy01/",
    icon: React.createElement(FaInstagram),
  },
] as const;

export const experience = [
  {
    duration: "2019 — Present",
    company: "Nineleaps",
    companyLink: "https://www.nineleaps.com/",
    position: "Software Developement Engineer 2",
    prevPosition: [
      "Software Developement Engineer 1",
      "Member of Technical Staff 2",
      "intern",
    ],
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Browserstack, Caratlane and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [
      "React",
      "Node",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "jQuery",
    ],
  },
];

export const projects = [
  {
    name: "Productive Pause",
    link: "https://github.com/AnandRoy01/Productive-Pause",
    description:
      "The Productive Pause Chrome Extension is a productivity tool designed to help users manage their work intervals and breaks effectively, all within the convenience of their web browser.",
    skills: ["React", "javascript", "vite"],
    image: chrome,
  },
  {
    name: "Movies-GPT",
    link: "https://github.com/AnandRoy01/Movies-GPT",
    description:
      "Built a Netflix clone using React, Firebase, Tailwind CSS, and OpenAI APIs, featuring user-friendly movie browsing and personalized recommendations powered by OpenAI's advanced system.",
    skills: [
      "React",
      "javascript",
      "tailwind",
      "firebase",
      "redux-toolkit",
      "Openai Api",
    ],
    image: gpt,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Sass",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Tailwind",
  "GSAP",
  "jQuery",
  "Styled Components",
  "Sentry",
  "Enzyme",
  "Ruby on Rails",
  "Git",
  "GitHub",
  "Vercel",
  "Docker",
  "Webpack",
  "Gulp",
  "Firebase",
  "Storybook",
  "Figma",
] as const;

export const tableHeadings = [
  "Year",
  "Project",
  "Made At",
  "Built with",
  "Link",
];

export const fullProjectDetails = [
  {
    year: "2023",
    project: "Productive Pause",
    projectLink: "https://github.com/AnandRoy01/Productive-Pause",
    madeAt: "Personal",
    tech: ["React", "javascript", "vite"],
    linkText: "Productive Pause (Github)",
  },
  {
    year: "2023",
    project: "Movies-GPT",
    projectLink: "https://github.com/AnandRoy01/Movies-GPT",
    madeAt: "Personal",
    tech: [
      "React",
      "javascript",
      "tailwind",
      "firebase",
      "redux-toolkit",
      "Openai Api",
    ],
    linkText: "Movies-GPT (Github)",
  },
  {
    year: "2023",
    project: "BrowserStack - AppLive",
    projectLink: "https://www.browserstack.com/app-live",
    madeAt: "Nineleaps",
    tech: ["React", "redux-toolkit", "scss", "WCAG"],
    linkText: "AppLive",
  },
  {
    year: "2022",
    project: "BrowserStack - Live",
    projectLink: "https://www.browserstack.com/live",
    madeAt: "Nineleaps",
    tech: [
      "React",
      "redux-toolkit",
      "scss",
      "webRTC",
      "chrome extension",
      "Ruby on Rails",
      "WCAG",
    ],
    linkText: "Live",
  },
  {
    year: "2021",
    project: "Caratlane - DigiGold",
    projectLink: "https://www.caratlane.com/caratlane-digi-gold",
    madeAt: "Nineleaps",
    tech: ["React Native", "Ruby on Rails", "Firebase"],
    linkText: "Digital Gold",
  },
  {
    year: "2023",
    project: "Productive Pause",
    projectLink: "https://github.com/AnandRoy01/Productive-Pause",
    madeAt: "Personal",
    tech: ["React", "javascript", "vite"],
    linkText: "Productive Pause (Github)",
  },
  {
    year: "2023",
    project: "Movies-GPT",
    projectLink: "https://github.com/AnandRoy01/Movies-GPT",
    madeAt: "Personal",
    tech: [
      "React",
      "javascript",
      "tailwind",
      "firebase",
      "redux-toolkit",
      "Openai Api",
    ],
    linkText: "Movies-GPT (Github)",
  },
  {
    year: "2023",
    project: "BrowserStack - AppLive",
    projectLink: "https://www.browserstack.com/app-live",
    madeAt: "Nineleaps",
    tech: ["React", "redux-toolkit", "scss", "WCAG"],
    linkText: "AppLive",
  },
  {
    year: "2022",
    project: "BrowserStack - Live",
    projectLink: "https://www.browserstack.com/live",
    madeAt: "Nineleaps",
    tech: [
      "React",
      "redux-toolkit",
      "scss",
      "webRTC",
      "chrome extension",
      "Ruby on Rails",
      "WCAG",
    ],
    linkText: "Live",
  },
  {
    year: "2021",
    project: "Caratlane - DigiGold",
    projectLink: "https://www.caratlane.com/caratlane-digi-gold",
    madeAt: "Nineleaps",
    tech: ["React Native", "Ruby on Rails", "Firebase"],
    linkText: "Digital Gold",
  },
  {
    year: "2023",
    project: "Productive Pause",
    projectLink: "https://github.com/AnandRoy01/Productive-Pause",
    madeAt: "Personal",
    tech: ["React", "javascript", "vite"],
    linkText: "Productive Pause (Github)",
  },
  {
    year: "2023",
    project: "Movies-GPT",
    projectLink: "https://github.com/AnandRoy01/Movies-GPT",
    madeAt: "Personal",
    tech: [
      "React",
      "javascript",
      "tailwind",
      "firebase",
      "redux-toolkit",
      "Openai Api",
    ],
    linkText: "Movies-GPT (Github)",
  },
  {
    year: "2023",
    project: "BrowserStack - AppLive",
    projectLink: "https://www.browserstack.com/app-live",
    madeAt: "Nineleaps",
    tech: ["React", "redux-toolkit", "scss", "WCAG"],
    linkText: "AppLive",
  },
  {
    year: "2022",
    project: "BrowserStack - Live",
    projectLink: "https://www.browserstack.com/live",
    madeAt: "Nineleaps",
    tech: [
      "React",
      "redux-toolkit",
      "scss",
      "webRTC",
      "chrome extension",
      "Ruby on Rails",
      "WCAG",
    ],
    linkText: "Live",
  },
  {
    year: "2021",
    project: "Caratlane - DigiGold",
    projectLink: "https://www.caratlane.com/caratlane-digi-gold",
    madeAt: "Nineleaps",
    tech: ["React Native", "Ruby on Rails", "Firebase"],
    linkText: "Digital Gold",
  },
];
