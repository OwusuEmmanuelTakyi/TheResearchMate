import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="-ml-4 h-20" />
          <p className="mt-5 max-w-sm text-cream/65 leading-relaxed">
            Guidance, analysis and editing support for students across
            Ghana&apos;s universities. You remain the author of your work.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="font-display text-lg text-gold">Explore</h2>
          <ul className="mt-4 space-y-3">
            {[{ label: "Home", href: "/" }, ...siteConfig.nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={siteConfig.requestHref}
                className="text-cream/75 transition-colors hover:text-cream"
              >
                Request support
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-display text-lg text-gold">Get in touch</h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-sm text-cream/50">WhatsApp</dt>
              <dd>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream transition-colors hover:text-amber"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-cream/50">Email</dt>
              <dd>
                <a
                  href={mailtoLink()}
                  className="break-all text-cream transition-colors hover:text-amber"
                >
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-cream/50 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. {siteConfig.tagline}.
          </p>
          <p>Made for students in Ghana.</p>
        </Container>
      </div>
    </footer>
  );
}
