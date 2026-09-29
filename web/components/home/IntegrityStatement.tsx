import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { integrity } from "@/lib/data/home";

export function IntegrityStatement() {
  return (
    <Section tone="parchment" aria-labelledby="integrity-heading">
      <Reveal className="mx-auto max-w-3xl border-l-[3px] border-oxblood pl-6 sm:pl-10">
        <p className="text-sm font-medium text-oxblood">
          Our commitment to academic integrity
        </p>
        <h2
          id="integrity-heading"
          className="mt-3 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
        >
          {integrity.heading}
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-espresso/80">
          {integrity.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Button href="/about#integrity" variant="text" className="mt-8">
          Read about our approach
        </Button>
      </Reveal>
    </Section>
  );
}
