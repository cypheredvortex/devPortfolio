import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/Section";
import { aboutFacts } from "@/data/site";

const paragraphs = [
  "I am in the fifth year of the engineering cycle in computer science and networks at the École Marocaine des Sciences et de l'Ingénierie (EMSI), specialising in Développement Digital des Systèmes d'Information (DDSI). The specialisation is centred on information systems as a whole: modelling a domain, designing the services and APIs around it, giving it an interface, and persisting the data it depends on.",
  "That end-to-end scope is where I do my best work. Across academic projects I have built full-stack applications with React, Node.js and Django, modelled data in both relational and document databases, and worked through architecture questions such as layer boundaries and role-based access. Two end-of-year internships added professional context: a reporting module for an office-supplies order management application, and a framework for quantitative risk assessment of industrial control systems.",
  "I work analytically and methodically — understand the system before changing it, break the problem into parts, then implement it in a way a teammate can follow. I adapt quickly to unfamiliar stacks and stay effective when a project has to be delivered under pressure.",
];

export function About() {
  return (
    <SectionShell
      id="about"
      index={1}
      label="About"
      title="Applications built end to end, from the model to the interface."
      description="Fifth-year engineering student in computer science and networks, working across frontend, backend services, databases and application architecture."
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl space-y-6">
          {paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.05}>
              <p className="text-[0.95rem] leading-[1.8] text-ink-soft">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <dl className="border-t border-line-strong">
            {aboutFacts.map((fact) => (
              <div
                key={fact.term}
                className="grid grid-cols-[104px_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[132px_1fr]"
              >
                <dt className="label-mono pt-[3px] leading-[1.7] text-muted">
                  {fact.term}
                </dt>
                <dd className="text-sm leading-[1.7] text-ink-soft">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </SectionShell>
  );
}
