import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn, counter } from "@/lib/utils";

export function SectionHeading({
  id,
  label,
  index,
  title,
  description,
  tone = "light",
}: {
  id: string;
  label: string;
  index: number;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <header>
      <div
        className={cn(
          "flex items-baseline justify-between gap-4 border-t pt-4",
          isDark ? "border-white/20" : "border-line-strong",
        )}
      >
        <span className={cn("label-mono", isDark ? "text-white/70" : "text-navy")}>
          {label}
        </span>
        <span className={cn("label-mono", isDark ? "text-white/70" : "text-muted")}>
          {counter(index)}
        </span>
      </div>
      <h2
        id={id}
        className={cn(
          "mt-6 max-w-3xl text-[clamp(1.75rem,3.6vw,2.6rem)] leading-[1.08] font-medium tracking-[-0.02em]",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[0.975rem] leading-[1.7]",
            isDark ? "text-white/70" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

/**
 * Section shell: keeps anchors, accessible labelling and the editorial
 * heading treatment consistent across every part of the page.
 */
export function SectionShell({
  id,
  label,
  index,
  title,
  description,
  tone = "light",
  bordered = true,
  className,
  children,
}: {
  id: string;
  label: string;
  index: number;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  bordered?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        tone === "dark" && "bg-navy text-white",
        bordered && tone === "light" && "border-t border-line",
        className,
      )}
    >
      <Container>
        <SectionHeading
          id={`${id}-heading`}
          label={label}
          index={index}
          title={title}
          description={description}
          tone={tone}
        />
        {children}
      </Container>
    </section>
  );
}
