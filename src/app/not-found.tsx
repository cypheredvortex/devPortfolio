import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="pt-40 pb-32">
      <Container>
        <p className="label-mono text-navy">Error 404</p>
        <h1 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.03em]">
          This page does not exist.
        </h1>
        <p className="mt-5 max-w-xl text-[0.975rem] leading-[1.75] text-ink-soft">
          The address may be mistyped, or the project it refers to may have been
          renamed. The portfolio sections are all reachable from the home page.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/#projects" variant="secondary">
            Browse projects
          </Button>
        </div>
      </Container>
    </div>
  );
}
