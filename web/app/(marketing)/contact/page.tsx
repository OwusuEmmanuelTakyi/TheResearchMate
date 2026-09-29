import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${siteConfig.name} on WhatsApp (${siteConfig.contact.whatsappDisplay}) or by email at ${siteConfig.contact.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in touch"
        lead="Questions about a service, pricing or whether we can help with your project? Message us. WhatsApp is usually the quickest way to reach us."
      />

      <Section
        tone="light"
        containerClassName="grid gap-14 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-5">
          <div className="border-t-2 border-espresso pt-6">
            <h2 className="font-display text-xl text-amber-deep">WhatsApp</h2>
            <p className="mt-3 font-display text-4xl tracking-tight">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-deep"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </p>
            <p className="mt-3 leading-relaxed text-espresso/70">
              Chat, send voice notes or share files directly.
            </p>
            <Button href={whatsappLink()} className="mt-6">
              Open WhatsApp
            </Button>
          </div>

          <div className="mt-14 border-t border-espresso/20 pt-6">
            <h2 className="font-display text-xl text-amber-deep">Email</h2>
            <p className="mt-3 font-display text-2xl tracking-tight break-all sm:text-3xl">
              <a href={mailtoLink()} className="hover:text-amber-deep">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="mt-3 leading-relaxed text-espresso/70">
              Best for longer questions or sending documents.
            </p>
          </div>

          <div className="mt-14 border-t border-espresso/20 pt-6">
            <h2 className="font-display text-xl text-amber-deep">
              Ready to start?
            </h2>
            <p className="mt-3 leading-relaxed text-espresso/70">
              If you already know what you need, the request form collects
              everything we need to give you a plan and a quote.
            </p>
            <Button
              href={siteConfig.requestHref}
              variant="text"
              className="mt-4"
            >
              Go to the request form
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-parchment p-6 sm:p-10 lg:col-span-7">
          <h2 className="font-display text-3xl leading-tight">
            Send us a message
          </h2>
          <p className="mt-3 mb-8 leading-relaxed text-espresso/70">
            Your message will open in your email or WhatsApp app, ready to
            send.
          </p>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
