import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { CvAction, CvNotice } from "@/components/CvAction";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SectionShell } from "@/components/ui/Section";
import { site, socials } from "@/data/site";

export function Contact() {
  return (
    <SectionShell
      id="contact"
      index={7}
      label="Contact"
      tone="dark"
      title="Open to conversations about software engineering."
      description="Internships, junior engineering roles, project collaboration — or a technical question about anything in the case studies above."
    >
      <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h3 className="label-mono text-white/70">Email</h3>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-block max-w-full text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium break-all text-white underline decoration-white/35 underline-offset-[10px] transition-colors hover:decoration-white"
          >
            {site.email}
          </a>

          <div className="mt-7 flex flex-wrap items-start gap-3">
            <CopyEmailButton email={site.email} />
            <CvAction variant="inverse" />
          </div>

          <div className="mt-5">
            <CvNotice tone="dark" />
          </div>
        </div>

        <div>
          <h3 className="label-mono text-white/70">Profiles</h3>
          <ul className="mt-5 border-t border-white/15">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-white/15 py-4 transition-colors hover:border-white/40"
                >
                  <span className="flex items-center gap-3 text-sm text-white">
                    <BrandIcon
                      name={social.icon}
                      className="h-4 w-4 text-white/70"
                    />
                    {social.label}
                  </span>
                  <span className="label-mono flex items-center gap-2 text-white/70">
                    {social.handle}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
