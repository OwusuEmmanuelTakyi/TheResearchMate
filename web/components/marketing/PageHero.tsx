import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
};

// Dark introductory band at the top of inner marketing pages.
export function PageHero({ title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-espresso text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] h-[30rem] w-[30rem] rounded-full bg-amber/10 blur-3xl"
      />
      <Container className="relative pt-14 pb-16 sm:pt-20 sm:pb-24">
        <h1 className="max-w-3xl font-display text-[2.5rem] leading-[1.04] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            {lead}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
