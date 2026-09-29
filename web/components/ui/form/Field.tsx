import type { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
};

/** Label + control + hint wrapper shared by every form input. */
export function Field({
  id,
  label,
  optional = false,
  hint,
  className = "",
  children,
}: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3">
        <span className="font-medium text-espresso">{label}</span>
        {optional && (
          <span className="text-sm text-espresso/50">Optional</span>
        )}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-espresso/60">
          {hint}
        </p>
      )}
    </div>
  );
}

/** Shared control styling so inputs, selects and textareas match. */
export const controlClasses =
  "w-full rounded-md border border-espresso/25 bg-paper px-4 text-base text-espresso placeholder:text-espresso/40 transition-colors hover:border-espresso/45 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30 user-invalid:border-oxblood user-invalid:ring-oxblood/20 disabled:opacity-60";
