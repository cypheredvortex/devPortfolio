import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/Section";
import { TechLabel, TechLabelList } from "@/components/ui/TechLabel";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <SectionShell
      id="experience"
      index={2}
      label="Experience"
      title="Internships where software met real operational constraints."
      description="Two end-of-year internships: one on industrial risk assessment, one on reporting for a public administration's internal application. The CV does not document internship dates, so none are shown."
    >
      <Timeline aria-label="Internship experience">
        {experience.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            index={index + 1}
            meta={entry.role}
            title={entry.organisation}
            subtitle={entry.project}
            badge={<TechLabel tone="navy">{entry.context}</TechLabel>}
            isLast={index === experience.length - 1}
          >
            <Reveal>
              <p className="max-w-3xl text-[0.95rem] leading-[1.8] text-ink-soft">
                {entry.summary}
              </p>

              <h4 className="label-mono mt-6 text-muted">Contributions</h4>
              <ul className="mt-4 max-w-3xl space-y-2.5">
                {entry.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="relative pl-6 text-sm leading-[1.7] text-ink-soft before:absolute before:top-[0.65em] before:left-0 before:h-px before:w-3 before:bg-navy/60"
                  >
                    {contribution}
                  </li>
                ))}
              </ul>

              <h4 className="label-mono mt-7 text-muted">Technologies</h4>
              <TechLabelList items={entry.technologies} className="mt-4" />
            </Reveal>
          </TimelineItem>
        ))}
      </Timeline>
    </SectionShell>
  );
}
