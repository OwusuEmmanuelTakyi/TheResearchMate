import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";

type CtaBandProps = {
  heading: string;
  body: string;
  /** Animate in as the band scrolls into view. */
  reveal?: boolean;
};

// Closing call to action, reusable across marketing pages.
export function CtaBand({ heading, body, reveal = false }: CtaBandProps) {
  const Wrapper = reveal ? Reveal : "div";
  return (
    <Section tone="darker" aria-labelledby="cta-heading">
      <Wrapper className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            id="cta-heading"
            className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/70">
            {body}
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.requestHref} tone="dark" size="lg">
              Request support
            </Button>
            <Button
              href={whatsappLink()}
              variant="outline"
              tone="dark"
              size="lg"
            >
              WhatsApp us
            </Button>
          </div>
          <p className="mt-5 text-sm text-cream/55">
            Or email{" "}
            <a
              href={mailtoLink()}
              className="text-cream/80 underline decoration-cream/30 underline-offset-4 hover:text-amber"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </Wrapper>
    </Section>
  );
}
