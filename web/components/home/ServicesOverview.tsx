import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { serviceCategories } from "@/lib/data/services";

export function ServicesOverview() {
  const [featured, ...rest] = serviceCategories;

  return (
    <Section tone="parchment" aria-labelledby="services-heading">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="services-heading"
          className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
        >
          Support at every stage of your research
        </h2>
        <Button
          href="/services"
          variant="text"
          className="self-start sm:self-auto"
        >
          View all services
        </Button>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {/* Featured category: the core offering, given more weight. */}
        <RevealItem
          as="article"
          className="relative flex flex-col rounded-lg bg-espresso p-8 text-cream sm:p-10 md:col-span-2 lg:col-span-1 lg:row-span-2"
        >
          <span className="font-display text-sm text-gold">01</span>
          <h3 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            <Link
              href={`/services#${featured.slug}`}
              className="after:absolute after:inset-0 after:rounded-lg hover:text-amber"
            >
              {featured.title}
            </Link>
          </h3>
          <p className="mt-4 leading-relaxed text-cream/75">
            {featured.summary}
          </p>
          <ul className="mt-auto space-y-2.5 border-t border-cream/15 pt-6 text-cream/85 max-lg:mt-8">
            {featured.services.map((s) => (
              <li key={s.slug}>{s.name}</li>
            ))}
          </ul>
        </RevealItem>

        {rest.map((category, i) => (
          <RevealItem
            as="article"
            key={category.slug}
            className="group relative flex flex-col border-t-2 border-espresso bg-cream/60 p-7 transition-colors hover:bg-cream sm:p-8"
          >
            <span className="font-display text-sm text-espresso/50">
              {String(i + 2).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-2xl leading-tight">
              <Link
                href={`/services#${category.slug}`}
                className="after:absolute after:inset-0 group-hover:text-amber-deep"
              >
                {category.title}
              </Link>
            </h3>
            <p className="mt-3 leading-relaxed text-espresso/70">
              {category.summary}
            </p>
            <p className="mt-auto pt-5 text-sm text-espresso/55">
              {category.services.map((s) => s.name).join(" · ")}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
