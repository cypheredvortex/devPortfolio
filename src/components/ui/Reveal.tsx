"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Entrance animation for content entering the viewport. Purely decorative:
 * with reduced motion enabled the children render immediately and unanimated,
 * and the `data-reveal` marker lets a <noscript> rule keep content visible when
 * JavaScript is unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} data-reveal="static">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      data-reveal="animated"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
