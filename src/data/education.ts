export type EducationEntry = {
  id: string;
  institution: string;
  qualification: string;
  field: string;
  detail?: string;
  period: string;
  status: "in-progress" | "completed";
};

export const education: EducationEntry[] = [
  {
    id: "emsi",
    institution: "École Marocaine des Sciences et de l'Ingénierie (EMSI)",
    qualification: "Engineering cycle — Computer Science and Networks",
    field: "Développement Digital des Systèmes d'Information (DDSI)",
    detail:
      "Fifth year, in progress. Coursework covers software engineering, application architecture, databases and networks, with a specialisation in the development of information systems.",
    period: "Fifth year · In progress",
    status: "in-progress",
  },
  {
    id: "institut-ben-mbarek",
    institution: "Institut Ben M'Barek",
    qualification: "Baccalauréat — Mathematical Sciences B",
    field: "Mathematics and science track",
    detail:
      "Secondary education completed with a focus on advanced mathematics, providing the analytical foundation for engineering studies.",
    period: "2022",
    status: "completed",
  },
];
