import type { ComponentProps } from "react";
import { controlClasses } from "./Field";

export function Input({ className = "", ...props }: ComponentProps<"input">) {
  return <input className={`${controlClasses} h-12 ${className}`} {...props} />;
}
