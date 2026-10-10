export type ExperienceEntry = {
  id: string;
  organisation: string;
  role: string;
  project: string;
  context: string;
  summary: string;
  contributions: string[];
  technologies: string[];
};

/**
 * Internship experience. The CV does not state internship dates, so entries are
 * presented without fabricated timelines and ordered by technical depth.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "jesa",
    organisation: "JESA SA",
    role: "End-of-Year Internship",
    project:
      "Generic Bayesian-network framework for quantitative risk assessment of Industrial Control Systems",
    context: "Industrial cybersecurity · Risk assessment · Software engineering",
    summary:
      "Engineering internship on a framework that models industrial control systems and supports quantitative risk assessment through Bayesian networks. The deliverable combined a React and TypeScript interface with a Python service layer and a relational persistence layer for the modelled systems and assessment data.",
    contributions: [
      "Structured modelling of industrial control systems as reusable assessment data.",
      "Bayesian-network logic for quantitative risk assessment of the modelled systems.",
      "Frontend for building systems and reading assessment results in React and TypeScript.",
      "Service layer exposing the assessment workflow through FastAPI.",
      "Persistence of models and results with SQLAlchemy 2.0 over SQLite.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQLAlchemy 2.0",
      "SQLite",
    ],
  },
  {
    id: "dcpc",
    organisation: "Direction de la Concurrence, des Prix et de la Compensation",
    role: "End-of-Year Internship",
    project:
      "Reporting component of an office-supplies order management application",
    context: "Internal business application · Reporting · Data presentation",
    summary:
      "Internship developing the reporting component of an application used to manage office-supplies orders — the part of the system that turns stored order data into structured, readable reports. The component was built inside an existing PHP and MySQL application, with supporting work in Python and Django.",
    contributions: [
      "Reporting module for an existing office-supplies order management application.",
      "Aggregation of order data into structured, readable reports.",
      "Integration with the application's established structure and data model.",
      "Server-rendered interfaces and interactions built with PHP, JavaScript, HTML and CSS.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Python", "Django"],
  },
];
