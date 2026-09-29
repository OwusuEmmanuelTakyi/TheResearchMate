import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { trustPoints } from "@/lib/data/home";

export function WhyUs() {
  return (
    <Section
      tone="light"
      aria-labelledby="why-heading"
      containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <Reveal className="lg:col-span-4">
        <h2
          id="why-heading"
          className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
        >
          Why students choose us
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-espresso/75">
          Good research support is patient, honest and specific. That&apos;s the
          standard we hold ourselves to.
        </p>
      </Reveal>

      <RevealGroup
        as="dl"
        className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8"
      >
        {trustPoints.map((point) => (
          <RevealItem
            key={point.title}
            className="border-t border-espresso/15 py-7"
          >
            <dt className="font-display text-2xl leading-snug">
              {point.title}
            </dt>
            <dd className="mt-3 leading-relaxed text-espresso/70">
              {point.description}
            </dd>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
