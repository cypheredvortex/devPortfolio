/**
 * Minimal class name combiner. Filters out falsy values so conditional
 * classes can be passed inline without a runtime dependency.
 */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

/** Formats a 1-based index as an editorial counter, e.g. 1 -> "01". */
export function counter(index: number, pad = 2): string {
  return String(index).padStart(pad, "0");
}
