"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, TriangleAlert } from "lucide-react";

type CopyState = "idle" | "copied" | "error";

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const timeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timeout.current);
  }, []);

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        /* Fallback for non-secure contexts where the Clipboard API is absent. */
        const field = document.createElement("textarea");
        field.value = email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(field);
        if (!ok) {
          throw new Error("copy command rejected");
        }
      }
      setState("copied");
    } catch {
      setState("error");
    }

    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setState("idle"), 2600);
  }

  const labels: Record<CopyState, string> = {
    idle: "Copy email address",
    copied: "Email address copied",
    error: "Copying failed",
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="label-mono inline-flex items-center gap-2 rounded-[2px] border border-white/30 px-4 py-3 text-white transition-colors hover:border-white hover:bg-white/5"
    >
      {state === "copied" ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : state === "error" ? (
        <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span>{labels[state]}</span>
      <span role="status" aria-live="polite" className="sr-only">
        {state === "copied"
          ? `${email} copied to clipboard`
          : state === "error"
            ? "Copying failed; select the address manually"
            : ""}
      </span>
    </button>
  );
}
