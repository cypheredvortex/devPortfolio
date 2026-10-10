import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { CvAction, CvNotice } from "@/components/CvAction";
import { StackDiagram } from "@/components/hero/StackDiagram";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site, socials } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Editorial column rules, decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1180px] -translate-x-1/2 px-10 lg:block"
      >
        <div className="grid h-full grid-cols-4">
          <span className="border-l border-line/60" />
          <span className="border-l border-line/60" />
          <span className="border-l border-line/60" />
          <span className="border-l border-line/60" />
        </div>
      </div>

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="label-mono-lg text-navy">
              {site.name}
            </p>

            <h1 className="mt-7 text-[clamp(2.5rem,6.2vw,4.4rem)] leading-[1.03] font-medium tracking-[-0.035em] text-ink">
              <span className="block">Complete software</span>
              <span className="block">systems, engineered</span>
              <span className="block">
                end to end<span className="text-navy">.</span>
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-[1.25rem] leading-tight font-medium tracking-[-0.015em] text-ink md:text-[1.5rem]">
              {site.title}
            </p>

            <p className="mt-5 max-w-2xl text-[0.975rem] leading-[1.75] text-ink-soft">
              {site.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                href="#projects"
                variant="primary"
                trailingIcon={<ArrowDownRight className="h-4 w-4" aria-hidden="true" />}
              >
                View projects
              </Button>
              <CvAction variant="secondary" />
            </div>

            <div className="mt-6">
              <CvNotice />
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-navy"
                  >
                    <BrandIcon name={social.icon} className="h-4 w-4" />
                    <span>{social.label}</span>
                    <span className="text-muted">{social.handle}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <StackDiagram className="lg:mt-2" />
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-y-3 border-t border-line pt-6 sm:grid-cols-3 sm:gap-x-8 md:mt-20">
          {site.positioning.map((item) => (
            <li key={item} className="label-mono leading-[1.8] text-muted">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
