"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  /* Derived rather than stored, so leaving the home page clears it naturally. */
  const activeHref = isHome ? activeSection : "";
  const sectionHref = useCallback(
    (hash: string) => (isHome ? hash : `/${hash}`),
    [isHome],
  );

  /* Highlight the section currently in view (home page only). */
  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  /* Condense the bar into a bordered surface once the page scrolls. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Close the mobile panel on Escape and lock background scrolling. */
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/#top"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 bg-navy transition-transform duration-300 group-hover:rotate-45"
            />
            <span className="label-mono-sm text-ink transition-colors group-hover:text-navy">
              {site.wordmark}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={sectionHref(link.href)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative text-sm transition-colors",
                        isActive
                          ? "text-ink"
                          : "text-muted hover:text-ink",
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-navy transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={sectionHref("#contact")}
              className="label-mono hidden items-center gap-2 rounded-[2px] border border-navy bg-navy px-4 py-3 text-white transition-colors hover:bg-navy-deep md:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-line-strong text-ink transition-colors hover:border-navy hover:text-navy md:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-line bg-paper md:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="py-6">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={sectionHref(link.href)}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between border-b border-line py-4 text-lg text-ink transition-colors hover:text-navy"
                  >
                    {link.label}
                    <span className="label-mono text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={sectionHref("#contact")}
              onClick={() => setMenuOpen(false)}
              className="label-mono mt-6 flex items-center justify-center gap-2 rounded-[2px] border border-navy bg-navy px-4 py-4 text-white"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
