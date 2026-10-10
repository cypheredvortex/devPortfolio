import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { education } from "@/data/education";

export function Education() {
  return (
    <SectionShell
      id="education"
      index={5}
      label="Education"
      title="Engineering studies in computer science and networks."
      description="Currently in progress: the engineering degree has not been completed yet."
    >
      <Timeline aria-label="Education">
        {education.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            index={index + 1}
            meta={entry.period}
            title={entry.institution}
            subtitle={entry.qualification}
            badge={
              <TechLabel tone={entry.status === "in-progress" ? "navy" : "default"}>
                {entry.status === "in-progress" ? "In progress" : "Completed"}
              </TechLabel>
            }
            isLast={index === education.length - 1}
          >
            <Reveal>
              <p className="max-w-3xl text-sm leading-[1.75] text-ink-soft">
                {entry.field}
              </p>
              {entry.detail ? (
                <p className="mt-4 max-w-3xl text-[0.95rem] leading-[1.8] text-ink-soft">
                  {entry.detail}
                </p>
              ) : null}
            </Reveal>
          </TimelineItem>
        ))}
      </Timeline>
    </SectionShell>
  );
}
