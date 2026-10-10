import type { ReactNode } from "react";
import { cn, counter } from "@/lib/utils";

export function Timeline({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <ol className={cn("mt-12 md:mt-16", className)} aria-label={ariaLabel}>
      {children}
    </ol>
  );
}

export function TimelineItem({
  index,
  meta,
  title,
  subtitle,
  badge,
  children,
  isLast = false,
}: {
  index: number;
  meta: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  children: ReactNode;
  isLast?: boolean;
}) {
  return (
    <li
      className={cn(
        "grid gap-6 md:grid-cols-[190px_1fr] md:gap-10",
        isLast ? "pb-0" : "pb-14 md:pb-16",
      )}
    >
      <div className="flex items-baseline gap-4 md:block">
        <span className="label-mono text-navy">{counter(index)}</span>
        <span className="label-mono text-muted md:mt-3 md:block">{meta}</span>
      </div>

      <div className="border-line pb-2 md:border-l md:border-line md:pb-0 md:pl-8 lg:pl-10">
        {badge ? <div className="mb-4 flex flex-wrap gap-2">{badge}</div> : null}
        <h3 className="text-[1.15rem] leading-snug font-medium tracking-[-0.01em] text-ink md:text-[1.3rem]">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-[0.95rem] leading-[1.65] text-ink-soft">{subtitle}</p>
        ) : null}
        <div className="mt-4">{children}</div>
      </div>
    </li>
  );
}
