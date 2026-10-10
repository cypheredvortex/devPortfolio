import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectGlyph } from "@/components/projects/ProjectGlyph";
import { TechLabelList } from "@/components/ui/TechLabel";
import type { Project } from "@/data/projects";
import { counter } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col border border-line bg-surface transition-colors duration-200 hover:border-navy/45"
      >
        <ProjectGlyph
          kind={project.glyph}
          className="aspect-16/9 border-b border-line"
        />

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="label-mono leading-[1.6] text-navy">{project.category}</span>
            <span className="label-mono text-muted">{counter(index)}</span>
          </div>

          <h3 className="mt-4 text-[1.0625rem] leading-snug font-medium tracking-[-0.015em] text-ink">
            {project.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-[1.7] text-ink-soft">
            {project.tagline}
          </p>

          <TechLabelList
            items={project.technologies.slice(0, 4)}
            className="mt-5"
          />

          <span className="label-mono mt-6 inline-flex items-center gap-2 text-navy">
            Project details
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
