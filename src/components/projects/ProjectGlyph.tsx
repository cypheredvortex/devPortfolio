import type { ReactNode } from "react";
import type { ProjectGlyphKind } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Original geometric schematics standing in for project visuals. They describe
 * the category of system (topology, layers, tables, workflows, ledgers) without
 * pretending to show a real product interface.
 */
export function ProjectGlyph({
  kind,
  className,
}: {
  kind: ProjectGlyphKind;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center overflow-hidden bg-navy-tint/35",
        className,
      )}
    >
      <svg viewBox="0 0 360 200" className="h-full w-full" fill="none">
        {schematics[kind]}
      </svg>
    </div>
  );
}

const stroke = {
  stroke: "#17395a",
  strokeOpacity: 0.35,
  strokeWidth: 1,
} as const;

const strong = {
  stroke: "#17395a",
  strokeWidth: 1.4,
} as const;

const filled = { fill: "#17395a" } as const;

const schematics: Record<ProjectGlyphKind, ReactNode> = {
  /* Bayesian network over a control-system topology. */
  network: (
    <>
      <g {...stroke}>
        <line x1="52" y1="104" x2="140" y2="58" />
        <line x1="52" y1="104" x2="140" y2="150" />
        <line x1="140" y1="58" x2="238" y2="74" />
        <line x1="140" y1="150" x2="238" y2="74" />
        <line x1="140" y1="150" x2="238" y2="142" />
        <line x1="238" y1="74" x2="308" y2="112" />
        <line x1="238" y1="142" x2="308" y2="112" />
        <line x1="40" y1="168" x2="320" y2="168" strokeDasharray="3 5" />
      </g>
      <g {...filled}>
        <circle cx="52" cy="104" r="4" />
        <circle cx="238" cy="74" r="4" />
      </g>
      <g>
        <circle cx="140" cy="58" r="7" fill="#ffffff" {...strong} />
        <circle cx="140" cy="150" r="7" fill="#ffffff" {...strong} />
        <circle cx="238" cy="142" r="7" fill="#ffffff" {...strong} />
        <circle cx="308" cy="112" r="7" fill="#ffffff" {...strong} />
      </g>
      <g {...stroke}>
        <line x1="38" y1="40" x2="38" y2="152" />
        <line x1="34" y1="40" x2="42" y2="40" />
        <line x1="34" y1="152" x2="42" y2="152" />
      </g>
    </>
  ),

  /* Client, API and data tiers with a course module sheet in front. */
  layers: (
    <>
      <g>
        <rect x="96" y="34" width="168" height="46" rx="1" fill="#ffffff" {...strong} />
        <rect x="76" y="72" width="208" height="48" rx="1" fill="#ffffff" {...strong} />
        <rect x="56" y="112" width="248" height="52" rx="1" fill="#ffffff" {...strong} />
      </g>
      <g {...stroke}>
        <line x1="116" y1="54" x2="196" y2="54" />
        <line x1="116" y1="63" x2="168" y2="63" />
        <line x1="96" y1="92" x2="196" y2="92" />
        <line x1="96" y1="101" x2="164" y2="101" />
        <line x1="76" y1="132" x2="188" y2="132" />
        <line x1="76" y1="141" x2="150" y2="141" />
        <line x1="76" y1="150" x2="176" y2="150" />
      </g>
      <g {...filled}>
        <rect x="244" y="46" width="6" height="6" />
        <rect x="264" y="46" width="6" height="6" opacity="0.45" />
        <rect x="244" y="84" width="6" height="6" opacity="0.45" />
        <rect x="264" y="84" width="6" height="6" />
        <rect x="244" y="124" width="6" height="6" />
        <rect x="264" y="124" width="6" height="6" />
      </g>
      <g {...stroke}>
        <line x1="284" y1="49" x2="308" y2="49" />
        <line x1="284" y1="87" x2="308" y2="87" />
        <line x1="284" y1="127" x2="308" y2="127" />
      </g>
    </>
  ),

  /* Modelled inventory record: a table with selected rows and relations. */
  grid: (
    <>
      <g>
        <rect x="52" y="40" width="256" height="120" rx="1" fill="#ffffff" {...strong} />
      </g>
      <g {...stroke}>
        <line x1="52" y1="64" x2="308" y2="64" />
        <line x1="52" y1="92" x2="308" y2="92" />
        <line x1="52" y1="120" x2="308" y2="120" />
        <line x1="52" y1="148" x2="308" y2="148" />
        <line x1="132" y1="40" x2="132" y2="160" />
        <line x1="228" y1="40" x2="228" y2="160" />
      </g>
      <g {...filled}>
        <rect x="66" y="49" width="46" height="6" />
        <rect x="66" y="77" width="38" height="6" opacity="0.7" />
        <rect x="66" y="105" width="46" height="6" opacity="0.7" />
        <rect x="66" y="133" width="30" height="6" opacity="0.45" />
        <rect x="146" y="49" width="58" height="6" opacity="0.45" />
        <rect x="146" y="77" width="44" height="6" opacity="0.45" />
        <rect x="146" y="105" width="58" height="6" opacity="0.7" />
        <rect x="242" y="49" width="26" height="6" opacity="0.45" />
        <rect x="242" y="133" width="26" height="6" opacity="0.45" />
      </g>
      <g {...stroke}>
        <line x1="52" y1="176" x2="308" y2="176" strokeDasharray="3 5" />
      </g>
    </>
  ),

  /* Repair workflow across three roles, above a layered architecture band. */
  flow: (
    <>
      <g>
        <rect x="48" y="36" width="76" height="42" rx="1" fill="#ffffff" {...strong} />
        <rect x="142" y="36" width="76" height="42" rx="1" fill="#ffffff" {...strong} />
        <rect x="236" y="36" width="76" height="42" rx="1" fill="#ffffff" {...strong} />
      </g>
      <g {...filled}>
        <rect x="62" y="52" width="30" height="5" opacity="0.6" />
        <rect x="156" y="52" width="30" height="5" opacity="0.6" />
        <rect x="250" y="52" width="30" height="5" opacity="0.6" />
        <rect x="62" y="63" width="18" height="5" opacity="0.35" />
        <rect x="156" y="63" width="18" height="5" opacity="0.35" />
        <rect x="250" y="63" width="18" height="5" opacity="0.35" />
      </g>
      <g {...stroke}>
        <path d="M86 78 L86 104 L276 104" />
        <path d="M180 78 L180 104" />
        <path d="M274 78 L274 104" />
        <path d="M86 104 L86 122" />
      </g>
      <g>
        <rect x="48" y="122" width="264" height="18" rx="1" fill="#ffffff" {...strong} />
        <rect x="48" y="146" width="264" height="18" rx="1" fill="#ffffff" {...strong} />
      </g>
      <g {...filled}>
        <rect x="60" y="129" width="52" height="4" opacity="0.5" />
        <rect x="60" y="153" width="74" height="4" opacity="0.5" />
        <rect x="248" y="129" width="52" height="4" opacity="0.3" />
        <rect x="248" y="153" width="52" height="4" opacity="0.3" />
      </g>
    </>
  ),

  /* Commercial cycle: purchase and sales lines converging on an invoice. */
  ledger: (
    <>
      <g>
        <rect x="44" y="34" width="130" height="132" rx="1" fill="#ffffff" {...strong} />
        <rect x="186" y="34" width="130" height="132" rx="1" fill="#ffffff" {...strong} />
      </g>
      <g {...stroke}>
        <line x1="44" y1="60" x2="174" y2="60" />
        <line x1="186" y1="60" x2="316" y2="60" />
      </g>
      <g {...filled}>
        <rect x="58" y="45" width="40" height="5" />
        <rect x="200" y="45" width="40" height="5" />
        <rect x="58" y="72" width="80" height="5" opacity="0.4" />
        <rect x="58" y="88" width="64" height="5" opacity="0.4" />
        <rect x="58" y="104" width="80" height="5" opacity="0.4" />
        <rect x="58" y="120" width="52" height="5" opacity="0.4" />
        <rect x="200" y="72" width="80" height="5" opacity="0.4" />
        <rect x="200" y="88" width="52" height="5" opacity="0.4" />
        <rect x="200" y="104" width="80" height="5" opacity="0.4" />
        <rect x="200" y="120" width="64" height="5" opacity="0.4" />
      </g>
      <g {...stroke}>
        <line x1="58" y1="146" x2="160" y2="146" />
        <line x1="200" y1="146" x2="302" y2="146" />
      </g>
      <g {...filled}>
        <rect x="58" y="152" width="26" height="5" opacity="0.7" />
        <rect x="200" y="152" width="26" height="5" opacity="0.7" />
      </g>
      <g>
        <rect x="272" y="26" width="44" height="20" rx="1" fill="#17395a" />
      </g>
      <g fill="#ffffff">
        <rect x="280" y="34" width="28" height="4" />
      </g>
    </>
  ),
};
