export type SocialIconName = "github" | "linkedin";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: SocialIconName;
};

export const site = {
  name: "Achraf Sghiri",
  wordmark: "ACHRAF SGHIRI",
  title: "Future Computer and Network Engineer",
  positioning: [
    "Digital Systems Development",
    "Full-Stack Engineering",
    "Software Architecture",
  ],
  intro:
    "I am an engineering student building complete software systems — interfaces, services, APIs and the data they depend on. My experience comes from academic projects and end-of-year internships, including a framework for quantitative risk assessment of industrial control systems. I work methodically: model the problem, design the architecture, then implement it so it stays readable.",
  email: "achrafsghiri240@gmail.com",
  /** Path relative to /public. Present only if the file has been supplied. */
  cvPath: "/Achraf-Sghiri-CV.pdf",
} as const;

/**
 * Year shown in the footer before the client corrects it. Kept as a constant
 * because prerendering rejects non-deterministic values such as `new Date()`.
 */
export const buildYear = 2026;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/cypheredvortex",
    handle: "cypheredvortex",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/achraf-sghiri-a30544279/",
    handle: "achraf-sghiri",
    icon: "linkedin",
  },
];

export const aboutFacts: Array<{ term: string; value: string }> = [
  {
    term: "Currently",
    value: "Fifth year of the engineering cycle in Computer Science and Networks",
  },
  {
    term: "Institution",
    value: "École Marocaine des Sciences et de l'Ingénierie (EMSI)",
  },
  {
    term: "Specialisation",
    value: "Développement Digital des Systèmes d'Information (DDSI)",
  },
  {
    term: "Focus areas",
    value: "Frontend, backend services, API design, data persistence, application architecture",
  },
  {
    term: "Working style",
    value: "Analytical, methodical, adaptable, comfortable in teams and under delivery constraints",
  },
];

export const softSkills: string[] = [
  "Analytical thinking",
  "Methodical approach",
  "Problem-solving",
  "Project management",
  "Working under pressure",
  "Adaptability",
  "Teamwork",
];

export const languages: Array<{ name: string; level: string }> = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
];
