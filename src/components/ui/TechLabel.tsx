import { cn } from "@/lib/utils";

export function TechLabel({
  children,
  tone = "default",
  className,
}: {
  children: string;
  tone?: "default" | "navy" | "inverse";
  className?: string;
}) {
  const tones = {
    default: "border-line-strong text-ink-soft",
    navy: "border-navy/25 bg-navy-tint/60 text-navy",
    inverse: "border-white/25 text-white/85",
  } as const;

  return (
    <span
      className={cn(
        "label-mono inline-flex items-center rounded-[2px] border px-2 py-[6px]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechLabelList({
  items,
  tone = "default",
  className,
}: {
  items: readonly string[];
  tone?: "default" | "navy" | "inverse";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <TechLabel tone={tone}>{item}</TechLabel>
        </li>
      ))}
    </ul>
  );
}
