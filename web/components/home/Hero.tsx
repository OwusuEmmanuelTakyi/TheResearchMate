import { Button } from "@/components/ui/Button";
import { LoadIn } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/data/home";
import { siteConfig, whatsappLink } from "@/lib/site";

const chapters = [
  { label: "Introduction", status: "done" },
  { label: "Literature review", status: "done" },
  { label: "Methodology", status: "active" },
  { label: "Data analysis", status: "next" },
  { label: "Conclusions", status: "next" },
] as const;

const statusText = {
  done: "Reviewed",
  active: "In progress",
  next: "Up next",
} as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-espresso text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-amber/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.headline}{" "}
            <em className="text-amber">{hero.headlineEmphasis}</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.requestHref} tone="dark" size="lg">
              {hero.primaryCta}
            </Button>
            <Button
              href={whatsappLink(hero.whatsappMessage)}
              variant="outline"
              tone="dark"
              size="lg"
            >
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="mt-8 text-sm text-cream/50">
            For undergraduate, Master&apos;s and PhD students.
          </p>
        </div>

        {/* Illustrative "table of contents" showing staged, chapter-by-chapter support. */}
        <LoadIn className="lg:col-span-5">
          <div
            aria-hidden="true"
            className="mx-auto max-w-md rotate-0 rounded-sm bg-cream p-7 text-espresso shadow-2xl shadow-black/50 sm:p-9 lg:rotate-[1.5deg]"
          >
            <div className="flex items-baseline justify-between border-b border-espresso/15 pb-4">
              <p className="font-display text-xl italic">Your thesis</p>
              <p className="text-xs text-espresso/55">Contents</p>
            </div>
            <ol className="mt-2">
              {chapters.map((chapter, i) => (
                <li
                  key={chapter.label}
                  className="flex items-baseline gap-3 border-b border-dotted border-espresso/20 py-3.5 last:border-b-0"
                >
                  <span className="w-5 font-display text-espresso/45">
                    {i + 1}
                  </span>
                  <span
                    className={`flex-1 font-display text-lg ${
                      chapter.status === "next" ? "text-espresso/55" : ""
                    }`}
                  >
                    {chapter.label}
                  </span>
                  <span
                    className={`flex items-center gap-1.5 text-xs ${
                      chapter.status === "done"
                        ? "text-espresso/70"
                        : chapter.status === "active"
                          ? "font-medium text-amber-deep"
                          : "text-espresso/40"
                    }`}
                  >
                    {chapter.status === "done" && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6.5l2.2 2.2L9.5 3.5"
                          stroke="#C9A227"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {chapter.status === "active" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    )}
                    {statusText[chapter.status]}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 border-t border-espresso/15 pt-4 text-sm text-espresso/60">
              Defence preparation scheduled after final review.
            </p>
          </div>
        </LoadIn>
      </Container>
    </section>
  );
}
