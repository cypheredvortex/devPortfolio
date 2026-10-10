import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio of Achraf Sghiri, a future computer and network engineer specialising in digital systems development. Full-stack work across frontend, APIs, databases and software architecture, with an engineering internship on a Bayesian risk-assessment framework for industrial control systems.",
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Achraf Sghiri",
    "computer and network engineer",
    "digital systems development",
    "full-stack developer",
    "software architecture",
    "industrial control systems",
    "Bayesian network risk assessment",
    "Next.js portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${site.name} — ${site.title}`,
    description:
      "Full-stack engineering portfolio: web applications, APIs, database-backed systems and software architecture.",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.title}`,
    description:
      "Full-stack engineering portfolio: web applications, APIs, database-backed systems and software architecture.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#17395a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"        className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      >
        {/* Entrance animations start hidden in the markup; without JavaScript
            they must still be visible, so the rule only applies in noscript. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a
          href="#main"
          className="label-mono sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
