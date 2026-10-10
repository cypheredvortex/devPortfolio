import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/Section";
import { skillCategories } from "@/data/skills";
import { counter } from "@/lib/utils";

export function Skills() {
  return (
    <SectionShell
      id="skills"
      index={4}
      label="Technical skills"
      title="A working toolkit, grouped the way it is actually used."
      description="No proficiency scores: the categories below describe where each technology fits, not how it is rated."
    >
      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={(index % 3) * 0.05}>
            <section aria-labelledby={`skill-${category.id}`}>
              <div className="flex items-baseline justify-between gap-4 border-t border-line-strong pt-4">
                <h3 id={`skill-${category.id}`} className="text-[0.95rem] font-medium text-ink">
                  {category.title}
                </h3>
                <span className="label-mono text-muted">{counter(index + 1)}</span>
              </div>
              <p className="mt-3 text-[0.8rem] leading-[1.7] text-muted">
                {category.summary}
              </p>
              <ul className="mt-5 space-y-px">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-line py-2 font-mono text-[0.75rem] tracking-[0.01em] text-ink-soft last:border-b-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
