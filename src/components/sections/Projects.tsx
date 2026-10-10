import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/Section";
import { featuredProject, secondaryProjects } from "@/data/projects";

export function Projects() {
  return (
    <SectionShell
      id="projects"
      index={3}
      label="Projects"
      title="Software built across the full stack — and the reasoning behind it."
      description="Five projects spanning industrial risk assessment, full-stack web applications, a desktop application and enterprise-style management systems. Each one links to a case study with its architecture and scope."
    >
      <div className="mt-14">
        <Reveal>
          <FeaturedProjectCard project={featuredProject} />
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {secondaryProjects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.06}>
            <ProjectCard project={project} index={index + 2} />
          </Reveal>
        ))}
      </div>

      <p className="label-mono mt-10 max-w-3xl leading-[1.9] text-muted">
        Source code is not published here: the professional work belongs to its
        organisation and no repository URLs are documented. Where a project can be
        shared, it is available on request.
      </p>
    </SectionShell>
  );
}
