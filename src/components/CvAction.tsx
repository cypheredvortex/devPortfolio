import { existsSync } from "node:fs";
import path from "node:path";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

/**
 * The download link is only rendered when the PDF actually exists in /public,
 * so the site never points at a missing file. Everything is resolved at build
 * time, which keeps the page static.
 */
export const cvAvailable: boolean = existsSync(
  path.join(process.cwd(), "public", site.cvPath.replace(/^\//, "")),
);

const cvRequestHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Request: CV of Achraf Sghiri",
)}`;

export function CvAction({
  variant = "secondary",
  className,
}: {
  variant?: "primary" | "secondary" | "inverse" | "ghost";
  className?: string;
}) {
  if (cvAvailable) {
    return (
      <Button
        href={site.cvPath}
        download={`Achraf-Sghiri-CV.pdf`}
        variant={variant}
        className={className}
        icon={<Download className="h-4 w-4" aria-hidden="true" />}
      >
        Download CV
      </Button>
    );
  }

  return (
    <Button
      href={cvRequestHref}
      variant={variant}
      className={className}
      icon={<Mail className="h-4 w-4" aria-hidden="true" />}
    >
      Request CV by email
    </Button>
  );
}

/** Shown next to the CV action while the PDF has not been supplied yet. */
export function CvNotice({ tone = "light" }: { tone?: "light" | "dark" }) {
  if (cvAvailable) {
    return null;
  }

  return (
    <p
      className={
        tone === "dark"
          ? "label-mono max-w-xs leading-[1.7] text-white/70"
          : "label-mono max-w-xs leading-[1.7] text-muted"
      }
    >
      PDF not published yet — the CV is sent directly by email.
    </p>
  );
}
