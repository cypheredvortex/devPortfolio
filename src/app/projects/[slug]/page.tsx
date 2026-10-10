import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ProjectGlyph } from "@/components/projects/ProjectGlyph";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TechLabel, TechLabelList } from "@/components/ui/TechLabel";
import {
  getAdjacentProject,
  getProject,
  projects,
} from "@/data/projects";
import { site } from "@/data/site";
import { counter } from "@/lib/utils";

/**
 * Every case study is prerendered at build time. Unknown slugs render the
 * not-found page. Note: with Cache Components enabled the prerendered shell is
 * served with a 200 status and the not-found UI is streamed into it.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      type: "article",
      title: `${project.title} — ${site.name}`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const next = getAdjacentProject(project.slug);

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container>
        <Link
          href="/#projects"
          className="label-mono group inline-flex items-center gap-2 text-muted transition-colors hover:text-navy"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          All projects
        </Link>

        <header className="mt-10 grid gap-10 border-t border-line pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <TechLabel tone="navy">{project.category}</TechLabel>
              <span className="label-mono text-muted">{project.provenance}</span>
            </div>

            <h1 className="mt-7 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.03em] text-ink">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-ink-soft">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/#contact" trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                Ask about this project
              </Button>
              <span className="label-mono text-muted">
                Case study {counter(index + 1)} / {counter(projects.length)}
              </span>
            </div>
          </div>

          <ProjectGlyph
            kind={project.glyph}
            className="aspect-4/3 min-h-[220px] border border-line"
          />
        </header>

        <div className="mt-16 grid gap-14 border-t border-line pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="label-mono text-navy">Overview</h2>
            <p className="mt-5 text-[0.975rem] leading-[1.85] text-ink-soft">
              {project.description}
            </p>

            <h2 className="label-mono mt-12 text-navy">Principal capabilities</h2>
            <ul className="mt-5 space-y-3">
              {project.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 text-[0.95rem] leading-[1.7] text-ink-soft"
                >
                  <Check className="mt-1.5 h-3.5 w-3.5 shrink-0 text-navy" aria-hidden="true" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>

            {project.architecture ? (
              <>
                <h2 className="label-mono mt-12 text-navy">
                  {project.architecture.title}
                </h2>
                <ul className="mt-5 border-t border-line">
                  {project.architecture.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-line py-4 text-sm leading-[1.75] text-ink-soft"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-line bg-surface p-6">
              <h2 className="label-mono text-navy">Stack</h2>
              <TechLabelList items={project.technologies} className="mt-5" />

              <h2 className="label-mono mt-8 text-navy">Scope</h2>
              <dl className="mt-4 border-t border-line">
                <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="label-mono text-muted">Origin</dt>
                  <dd className="text-right text-sm text-ink-soft">
                    {project.provenance}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="label-mono text-muted">Type</dt>
                  <dd className="text-right text-sm text-ink-soft">{project.category}</dd>
                </div>
              </dl>

              <p className="mt-6 text-[0.8rem] leading-[1.8] text-muted">
                No public repository or live demo is linked: none is documented for
                this project. Source or further detail is available on request.
              </p>
            </div>

            <nav aria-label="Other projects" className="mt-6 border border-line bg-surface p-6">
              <h2 className="label-mono text-navy">Next case study</h2>
              <Link
                href={`/projects/${next.slug}`}
                className="group mt-4 flex items-start justify-between gap-4"
              >
                <span className="text-sm leading-snug text-ink transition-colors group-hover:text-navy">
                  {next.title}
                </span>
                <ArrowRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </nav>
          </aside>
        </div>
      </Container>
    </article>
  );
}
