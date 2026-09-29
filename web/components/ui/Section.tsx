import type { ReactNode } from "react";
import { Container } from "./Container";

export type SectionTone = "dark" | "darker" | "light" | "parchment";

const tones: Record<SectionTone, string> = {
  dark: "bg-espresso text-cream",
  darker: "bg-espresso-light text-cream",
  light: "bg-cream text-espresso",
  parchment: "bg-parchment text-espresso",
};

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
};

export function Section({
  children,
  tone = "light",
  id,
  className = "",
  containerClassName = "",
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tones[tone]} py-20 sm:py-28 ${className}`}
      {...rest}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
