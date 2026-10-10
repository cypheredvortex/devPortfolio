import { stackLayers } from "@/data/skills";
import { cn, counter } from "@/lib/utils";

/**
 * A schematic of how an application is layered, from interface down to
 * persistence. It is a typographic diagram, not a simulated product UI.
 */
export function StackDiagram({ className }: { className?: string }) {
  return (
    <figure className={cn("border border-line bg-surface", className)}>
      <figcaption className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
        <span className="label-mono text-navy">Application layers</span>
        <span className="label-mono text-muted">Full-stack</span>
      </figcaption>

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-8 bottom-8 left-[34px] w-px bg-line"
        />
        <ol>
          {stackLayers.map((layer, index) => (
            <li
              key={layer.name}
              className="grid grid-cols-[30px_1fr] items-start gap-4 border-b border-line px-5 py-5 last:border-b-0"
            >
              <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-line bg-surface">
                <span className="label-mono-xs text-navy">
                  {counter(index + 1)}
                </span>
              </span>
              <div className="pt-0.5">
                <p className="text-sm font-medium tracking-[-0.01em] text-ink">
                  {layer.name}
                </p>
                <p className="mt-1.5 font-mono text-[0.7rem] leading-[1.7] tracking-[0.01em] text-muted">
                  {layer.items.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-line bg-navy-tint/40 px-5 py-4">
        <span className="label-mono text-navy">Interface → data</span>
        <span aria-hidden="true" className="h-px flex-1 bg-navy/20" />
        <span className="label-mono text-muted">End to end</span>
      </div>
    </figure>
  );
}
