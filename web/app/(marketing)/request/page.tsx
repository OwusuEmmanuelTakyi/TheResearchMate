import type { Metadata } from "next";
import Link from "next/link";
import { RequestForm } from "@/components/forms/RequestForm";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/lib/data/home";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request support",
  description:
    "Tell us about your project, level and deadline, and we'll reply with a plan and a quote.",
};

export default function RequestPage() {
  return (
    <>
      <PageHero
        title="Request support"
        lead="Tell us about your project and deadline. We'll review it and reply with a clear plan and a quote before any work begins."
      />

      <Section
        tone="light"
        containerClassName="grid gap-16 lg:grid-cols-12"
      >
        <div className="lg:col-span-8">
          <RequestForm />
        </div>

        <aside className="lg:col-span-4">
          <div className="space-y-10 lg:sticky lg:top-28">
            <div className="rounded-lg bg-espresso p-7 text-cream">
              <h2 className="font-display text-2xl">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {processSteps.slice(1).map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-xl leading-snug text-amber">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream/65">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-l-[3px] border-oxblood pl-5">
              <p className="leading-relaxed text-espresso/80">
                We guide and support; you remain the author of your work.{" "}
                <Link
                  href="/about#integrity"
                  className="underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-deep"
                >
                  Our integrity policy
                </Link>
              </p>
            </div>

            <div>
              <p className="text-espresso/70">Prefer to talk first?</p>
              <p className="mt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-deep"
                >
                  WhatsApp {siteConfig.contact.whatsappDisplay}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={mailtoLink()}
                  className="break-all underline decoration-espresso/25 underline-offset-4 hover:text-amber-deep"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </aside>
      </Section>
    </>
  );
}
