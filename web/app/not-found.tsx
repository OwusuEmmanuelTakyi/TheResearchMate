import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-cream">
        <Container width="narrow" className="py-28 sm:py-36">
          <p className="font-display text-xl text-amber-deep">Page not found</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            This page isn&apos;t in our table of contents.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-espresso/75">
            The link may be old or mistyped. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Browse services
            </Button>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
