import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProjectGlyph } from "@/components/projects/ProjectGlyph";
import { TechLabelList } from "@/components/ui/TechLabel";
import type { Project } from "@/data/projects";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-line bg-surface">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label-mono rounded-[2px] border border-navy/25 bg-navy-tint px-2.5 py-2 text-navy">
              Flagship project
            </span>
            <span className="label-mono text-muted">{project.provenance}</span>
          </div>

          <h3 className="mt-6 text-[clamp(1.4rem,2.6vw,1.95rem)] leading-[1.15] font-medium tracking-[-0.02em] text-ink">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-navy"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-5 text-[0.95rem] leading-[1.75] text-ink-soft">
            {project.description}
          </p>

          <h4 className="label-mono mt-8 text-navy">Principal capabilities</h4>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {project.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-2.5 text-sm leading-[1.6] text-ink-soft"
              >
                <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-navy" aria-hidden="true" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>

          <h4 className="label-mono mt-8 text-navy">Stack</h4>
          <TechLabelList items={project.technologies} className="mt-4" tone="navy" />

          <Link
            href={`/projects/${project.slug}`}
            className="label-mono group mt-8 inline-flex items-center gap-2 text-navy"
          >
            Read the case study
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ProjectGlyph
          kind={project.glyph}
          className="min-h-[260px] border-t border-line lg:border-t-0 lg:border-l"
        />
      </div>
    </article>
  );
}
