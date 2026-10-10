"use client";

import { useSyncExternalStore } from "react";
import { buildYear } from "@/data/site";

const subscribe = () => () => {};

/**
 * Cache Components rejects unstable values such as `new Date()` while
 * prerendering, so the year is read as an external store: the server snapshot
 * is the year the site was built in, and the client snapshot is the real
 * current year.
 */
export function CopyrightYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => buildYear,
  );

  return <>{year}</>;
}
