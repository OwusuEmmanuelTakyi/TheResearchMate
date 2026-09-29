import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/lib/data/home";

export function HowItWorks() {
  return (
    <Section tone="dark" aria-labelledby="process-heading">
      <Reveal className="max-w-2xl">
        <h2
          id="process-heading"
          className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
        >
          How it works
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">
          A simple process, so you always know where things stand.
        </p>
      </Reveal>

      <RevealGroup
        as="ol"
        className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        {processSteps.map((step, i) => (
          <RevealItem as="li" key={step.title} className="relative">
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl leading-none text-amber">
                {i + 1}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-cream/15" />
            </div>
            <h3 className="mt-6 font-display text-2xl leading-snug">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-cream/70">
              {step.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
