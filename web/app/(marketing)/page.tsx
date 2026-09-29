import { Empathy } from "@/components/home/Empathy";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IntegrityStatement } from "@/components/home/IntegrityStatement";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { CtaBand } from "@/components/marketing/CtaBand";
import { finalCta } from "@/lib/data/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Empathy />
      <ServicesOverview />
      <HowItWorks />
      <WhyUs />
      <IntegrityStatement />
      <CtaBand heading={finalCta.heading} body={finalCta.body} reveal />
    </>
  );
}
