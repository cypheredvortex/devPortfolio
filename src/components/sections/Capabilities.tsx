import { SectionShell } from "@/components/ui/Section";
import { languages, softSkills } from "@/data/site";

export function Capabilities() {
  return (
    <SectionShell
      id="capabilities"
      index={6}
      label="Working style & languages"
      title="How I work, and the languages I work in."
    >
      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="label-mono text-muted">Working style</h3>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="border border-line bg-surface px-3 py-2 text-sm text-ink-soft"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-mono text-muted">Languages</h3>
          <dl className="mt-5 border-t border-line">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
              >
                <dt className="text-sm text-ink">{language.name}</dt>
                <dd className="label-mono text-muted">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
