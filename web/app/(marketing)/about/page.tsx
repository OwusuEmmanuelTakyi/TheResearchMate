import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import {
  aboutIntro,
  approach,
  integrityPolicy,
  mission,
  vision,
} from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our mission, our vision and our approach to academic integrity. We guide and support; students remain the authors of their own research.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutIntro.title} lead={aboutIntro.lead} />

      <Section
        tone="light"
        containerClassName="grid gap-14 md:grid-cols-2 md:gap-16"
      >
        {[mission, vision].map((item) => (
          <div key={item.heading} className="border-t-2 border-espresso pt-6">
            <h2 className="font-display text-xl text-amber-deep">
              {item.heading}
            </h2>
            <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
              {item.body}
            </p>
          </div>
        ))}
      </Section>

      <Section tone="parchment" aria-labelledby="approach-heading">
        <h2
          id="approach-heading"
          className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
        >
          How we work with you
        </h2>
        <ol className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {approach.map((value, i) => (
            <li key={value.title} className="flex gap-6">
              <span className="font-display text-4xl leading-none text-amber-deep">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl leading-snug">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-espresso/75">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        tone="light"
        id="integrity"
        aria-labelledby="integrity-heading"
        className="scroll-mt-20"
      >
        <div className="max-w-3xl border-l-[3px] border-oxblood pl-6 sm:pl-10">
          <h2
            id="integrity-heading"
            className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl"
          >
            {integrityPolicy.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-espresso/80">
            {integrityPolicy.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-parchment p-8 sm:p-10">
            <h3 className="font-display text-2xl">What we do</h3>
            <ul className="mt-6 space-y-4">
              {integrityPolicy.weDo.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <svg
                    aria-hidden="true"
                    className="mt-1.5 shrink-0"
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2.5 6.5l2.2 2.2L9.5 3.5"
                      stroke="#9A5518"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-2 border-espresso/15 p-8 sm:p-10">
            <h3 className="font-display text-2xl">What we don&apos;t do</h3>
            <ul className="mt-6 space-y-4">
              {integrityPolicy.weDont.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <svg
                    aria-hidden="true"
                    className="mt-1.5 shrink-0"
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M3 3l6 6M9 3L3 9"
                      stroke="#7A2A20"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-3xl leading-relaxed text-espresso/70">
          {integrityPolicy.closing}
        </p>
      </Section>

      <CtaBand
        heading="Let's talk about your research."
        body="Tell us what you're working on and where you'd like support."
      />
    </>
  );
}
