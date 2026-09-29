import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { empathy } from "@/lib/data/home";

export function Empathy() {
  return (
    <Section
      tone="light"
      aria-labelledby="empathy-heading"
      containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <Reveal className="lg:col-span-5">
        <h2
          id="empathy-heading"
          className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
        >
          {empathy.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-espresso/75">
          {empathy.body}
        </p>
      </Reveal>

      <Reveal className="lg:col-span-7">
        <ul className="divide-y divide-espresso/12 border-y border-espresso/12">
          {empathy.concerns.map((concern) => (
            <li key={concern} className="py-6 sm:py-7">
              <blockquote className="font-display text-xl italic leading-snug text-espresso/85 sm:text-2xl">
                &ldquo;{concern}&rdquo;
              </blockquote>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-espresso/75">
          Sound familiar? That&apos;s exactly where we come in.{" "}
          <Button href="/services" variant="text" className="ml-1">
            See how we help
          </Button>
        </p>
      </Reveal>
    </Section>
  );
}
