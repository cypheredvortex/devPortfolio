export type ProjectGlyphKind = "network" | "layers" | "grid" | "flow" | "ledger";

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Where the project comes from, stated accurately (internship or academic work). */
  provenance: string;
  tagline: string;
  description: string;
  capabilities: string[];
  architecture?: {
    title: string;
    points: string[];
  };
  technologies: string[];
  glyph: ProjectGlyphKind;
  featured?: boolean;
};

/**
 * Project catalogue. No repository or live-demo URLs are included because none
 * are documented in the CV or available in the workspace; project detail pages
 * are internal instead of pointing at unverified external links.
 */
export const projects: Project[] = [
  {
    slug: "ics-risk-framework",
    title: "Bayesian Risk Assessment Framework for Industrial Control Systems",
    category: "Software Framework · Industrial Cybersecurity",
    provenance: "JESA SA · End-of-year internship project",
    tagline:
      "A software framework for quantitative risk assessment of Industrial Control Systems using Bayesian networks.",
    description:
      "Industrial control systems concentrate operational risk, and assessing it quantitatively requires both a faithful model of the system and a probabilistic method for reasoning about failure. This framework addresses both: industrial control systems are modelled as structured, reusable data, and Bayesian networks compute quantitative risk results from those models. A React and TypeScript frontend is paired with a Python service layer, so assessment logic and interface stay independent of each other.",
    capabilities: [
      "Reusable modelling of industrial control systems to be assessed",
      "Bayesian-network reasoning for quantitative risk results",
      "Frontend for composing systems and reading assessment outcomes",
      "Service layer exposing the assessment workflow over a typed API",
      "Persistence of models and results for later consultation",
    ],
    architecture: {
      title: "How the pieces fit together",
      points: [
        "Interface layer: React and TypeScript for building system models and presenting results.",
        "Service layer: a FastAPI application that encapsulates the assessment workflow and keeps it independent of the interface.",
        "Analysis layer: Bayesian-network logic computing quantitative risk from the modelled system.",
        "Persistence layer: SQLAlchemy 2.0 over SQLite, storing the modelled systems and their assessment data.",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQLAlchemy 2.0",
      "SQLite",
    ],
    glyph: "network",
    featured: true,
  },
  {
    slug: "e-learning-platform",
    title: "Full-Stack E-Learning Platform",
    category: "Full-Stack Web Application",
    provenance: "Academic project",
    tagline:
      "An e-learning application covering authentication, user management, course management and REST API interactions.",
    description:
      "A full-stack e-learning application built as a MERN stack exercise in end-to-end application design. The client consumes a REST API for every operation, authenticated requests are guarded with JWT, and users and courses are managed through dedicated interfaces supported by document-oriented persistence in MongoDB.",
    capabilities: [
      "Account authentication and protected user sessions with JWT",
      "User management, including account administration",
      "Course creation, listing and management",
      "REST API consumed by a React client",
      "Document-based data modelling with MongoDB",
    ],
    architecture: {
      title: "Application structure",
      points: [
        "Client: React single-page application calling the API for all data operations.",
        "API: an Express server on Node.js exposing REST endpoints for users and courses.",
        "Security: JWT-based authentication protecting the managed resources.",
        "Data: MongoDB collections modelling users, courses and their relationships.",
      ],
    },
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    glyph: "layers",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management Application",
    category: "Web Application · Django",
    provenance: "Academic project",
    tagline:
      "A web application for inventory management built on a modelled data schema and full CRUD operations.",
    description:
      "An inventory management application whose core is its data model: inventory entities, their attributes and their relationships are defined first, and the application operations follow from that schema. The Django layer provides the server-side logic and interfaces, with JavaScript handling client-side interactions and SQLite storing the data.",
    capabilities: [
      "Data modelling of inventory entities and relationships",
      "Create, read, update and delete operations across the inventory",
      "Django views and templates driving the application",
      "Client-side interactions with JavaScript",
      "Local relational persistence with SQLite",
    ],
    technologies: ["Django", "Python", "SQLite", "JavaScript"],
    glyph: "grid",
  },
  {
    slug: "reparatech",
    title: "ReparaTech — Repair Management Application",
    category: "Desktop Application · Layered Architecture",
    provenance: "Academic project",
    tagline:
      "A desktop application managing repair operations and cash transactions with role-specific workflows.",
    description:
      "ReparaTech manages the day-to-day operation of a repair business: devices in for repair, the work carried out on them, and the cash transactions that accompany each job. Three roles — owners, repair technicians and customers — each get a workflow shaped around what they actually do, and the application is structured in explicit layers so interface, control and business logic stay separated.",
    capabilities: [
      "Role-specific workflows for owners, repair technicians and customers",
      "Tracking of repair operations from intake to completion",
      "Cash transaction management associated with repair jobs",
      "Layered separation of interface, controllers and services",
      "UML modelling of the domain and its use cases",
    ],
    architecture: {
      title: "Layered architecture",
      points: [
        "Presentation layer: Java Swing interfaces adapted to each of the three roles.",
        "Controller layer: request handling and workflow coordination between interface and services.",
        "Service layer: business rules for repair operations and cash transactions.",
        "Data layer: MySQL persistence behind the service boundary.",
        "Design up front through UML modelling of the domain and its interactions.",
      ],
    },
    technologies: ["Java", "Swing", "MySQL", "UML"],
    glyph: "flow",
  },
  {
    slug: "store-management",
    title: "Store Management Application",
    category: "Web Application · Enterprise",
    provenance: "Academic project",
    tagline:
      "A web application managing inventory, sales, purchases and invoicing with role-based permissions.",
    description:
      "A store management application covering the commercial cycle from purchasing through to invoicing. Access is organised around five distinct roles — administrators, sales staff, inventory managers, customers and suppliers — each with permissions scoped to their responsibilities, so a supplier and an inventory manager see different parts of the same system.",
    capabilities: [
      "Inventory, sales, purchase and invoicing management",
      "Role-based permissions across five user profiles",
      "Administrator, sales, inventory, customer and supplier perspectives",
      "Server-rendered Razor views styled with Bootstrap",
      "Application structure on C# and ASP.NET Core",
    ],
    architecture: {
      title: "Access model",
      points: [
        "Administrators: oversight of the store's data and users.",
        "Sales staff: sales operations and customer-facing transactions.",
        "Inventory managers: stock levels and purchasing.",
        "Customers and suppliers: scoped views of the orders and records that concern them.",
        "ASP.NET Core with Razor views for server-rendered pages, styled with Bootstrap.",
      ],
    },
    technologies: ["C#", "ASP.NET Core", "Razor", "Bootstrap"],
    glyph: "ledger",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export const secondaryProjects = projects.filter(
  (project) => project.slug !== featuredProject.slug,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
