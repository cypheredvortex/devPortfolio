import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "inverse"
  | "outline-inverse"
  | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white border border-navy hover:bg-navy-deep hover:border-navy-deep",
  secondary:
    "bg-transparent text-ink border border-line-strong hover:border-navy hover:text-navy",
  inverse:
    "bg-white text-navy border border-white hover:bg-paper",
  "outline-inverse":
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5",
  ghost:
    "bg-transparent text-ink border border-transparent px-0 hover:text-navy",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] text-sm font-medium transition-colors duration-200";

export type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Triggers a native file download when set. */
  download?: boolean | string;
  className?: string;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  download,
  className,
  icon,
  trailingIcon,
  ariaLabel,
}: ButtonProps) {
  const isInternalRoute = href.startsWith("/") && !download;
  const isExternal = /^https?:\/\//.test(href);

  const classes = cn(
    base,
    variants[variant],
    variant === "ghost" ? "" : "px-5 py-3",
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {trailingIcon}
    </>
  );

  if (isInternalRoute) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      download={download}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
}
