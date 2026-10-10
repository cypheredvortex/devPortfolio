export type StackLayer = {
  name: string;
  items: string[];
};

/**
 * How the work is organised across an application, shown as a layered diagram
 * in the hero. Every entry is drawn from technologies documented in the CV.
 */
export const stackLayers: StackLayer[] = [
  {
    name: "Presentation",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Services & APIs",
    items: ["FastAPI", "Node.js", "Express", "Django", "REST"],
  },
  {
    name: "Domain & analysis",
    items: ["Bayesian networks", "UML", "MVC", "Microservices"],
  },
  {
    name: "Persistence",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLAlchemy"],
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  summary: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    summary: "Interfaces and client-side application structure",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    summary: "Services, business logic and programme interfaces",
    skills: [
      "Java",
      "JEE",
      "Spring Boot",
      "Node.js",
      "Express",
      "Django",
      "FastAPI",
      "Laravel",
      "PHP",
      "C#",
      ".NET / ASP.NET Core",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    summary: "Relational, document, key-value and graph storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQLite",
      "MongoDB",
      "Cassandra",
      "Redis",
      "Neo4j",
      "SQLAlchemy",
      "Eloquent ORM",
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    summary: "Languages used across backend, frontend and systems work",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "C", "C++", "PHP", "C#", "SQL"],
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    summary: "How applications are modelled and structured",
    skills: [
      "MVC architecture",
      "Microservices",
      "UML modelling",
      "Full-stack application design",
    ],
  },
  {
    id: "tools",
    title: "Tools & Environments",
    summary: "Version control, deployment and operating environments",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Linux",
      "Ubuntu Server",
      "Bash",
      "VirtualBox",
    ],
  },
];
