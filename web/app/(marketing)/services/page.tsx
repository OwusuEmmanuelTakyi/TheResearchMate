import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { serviceCategories, servicesPage } from "@/lib/data/services";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Final-year project and thesis support, literature reviews, methodology, questionnaire design, data collection and analysis, proofreading and defence preparation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title={servicesPage.title} lead={servicesPage.lead} />

      <Section
        tone="light"
        containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <nav
          aria-label="Service categories"
          className="lg:col-span-3"
        >
          <div className="lg:sticky lg:top-28">
            <p className="font-display text-lg">On this page</p>
            <ol className="mt-4 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`#${category.slug}`}
                    className="text-espresso/70 transition-colors hover:text-amber-deep"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="space-y-20 lg:col-span-9">
          {serviceCategories.map((category, i) => (
            <section
              key={category.slug}
              id={category.slug}
              aria-labelledby={`${category.slug}-heading`}
              className="scroll-mt-28"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-lg text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`${category.slug}-heading`}
                  className="font-display text-3xl leading-tight tracking-tight sm:text-4xl"
                >
                  {category.title}
                </h2>
              </div>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-espresso/70">
                {category.summary}
              </p>

              <ul className="mt-8 border-t-2 border-espresso">
                {category.services.map((service) => (
                  <li
                    key={service.slug}
                    id={service.slug}
                    className="grid scroll-mt-28 gap-3 border-b border-espresso/15 py-7 md:grid-cols-5 md:gap-8"
                  >
                    <h3 className="font-display text-2xl leading-snug md:col-span-2">
                      {service.name}
                    </h3>
                    <div className="md:col-span-3">
                      <p className="leading-relaxed text-espresso/75">
                        {service.description}
                      </p>
                      <Link
                        href={`${siteConfig.requestHref}?service=${service.slug}`}
                        className="mt-4 inline-block text-[0.9375rem] font-medium text-espresso underline decoration-amber decoration-2 underline-offset-6 hover:text-amber-deep"
                      >
                        Request this service
                        <span className="sr-only">: {service.name}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <aside className="rounded-lg bg-espresso p-8 text-cream sm:p-10">
            <h2 className="font-display text-3xl leading-tight">
              {servicesPage.notSure.heading}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-cream/75">
              {servicesPage.notSure.body}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                href={`${siteConfig.requestHref}?service=research-consultation`}
                tone="dark"
              >
                Book a consultation
              </Button>
              <Button
                href={whatsappLink(
                  "Hello TheResearchMate, I'm not sure which service I need. Can we talk?",
                )}
                variant="outline"
                tone="dark"
              >
                Ask on WhatsApp
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand heading={servicesPage.cta.heading} body={servicesPage.cta.body} />
    </>
  );
}
