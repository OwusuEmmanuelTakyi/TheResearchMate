import type { ComponentProps } from "react";
import { controlClasses } from "./Field";

export function Textarea({
  className = "",
  rows = 5,
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      rows={rows}
      className={`${controlClasses} resize-y py-3 leading-relaxed ${className}`}
      {...props}
    />
  );
}
