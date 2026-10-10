import Link from "next/link";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { Container } from "@/components/ui/Container";
import { navLinks, site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-12 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="label-mono text-navy">{site.wordmark}</p>
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-ink-soft">
              {site.title} · {site.positioning.join(" · ")}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="label-mono text-muted">Sections</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-sm text-ink-soft transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-mono text-muted">Elsewhere</h2>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft transition-colors hover:text-navy"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink-soft transition-colors hover:text-navy"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label-mono leading-[1.7] text-muted">
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          <p className="label-mono leading-[1.7] text-muted">
            Built with Next.js, TypeScript and Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
