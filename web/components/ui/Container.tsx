import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** "default" for page content, "narrow" for long-form text. */
  width?: "default" | "narrow";
};

export function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  const max = width === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
