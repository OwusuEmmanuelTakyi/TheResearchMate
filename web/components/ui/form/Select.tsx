import type { ComponentProps } from "react";
import { controlClasses } from "./Field";

type SelectProps = ComponentProps<"select"> & {
  placeholder?: string;
};

export function Select({
  className = "",
  placeholder,
  children,
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
        className={`${controlClasses} h-12 appearance-none pr-11 ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-espresso/60"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 5.5l4 4 4-4" />
      </svg>
    </div>
  );
}
