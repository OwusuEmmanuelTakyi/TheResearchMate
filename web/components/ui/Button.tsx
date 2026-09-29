import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "text";
/** The background the button sits on, which decides outline/text colours. */
type Tone = "dark" | "light";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

type NativeButtonProps = BaseProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem] rounded-md",
  lg: "h-13 px-7 text-base rounded-md",
};

const variants: Record<Variant, Record<Tone, string>> = {
  primary: {
    dark: "bg-amber text-espresso hover:bg-amber-hover",
    light: "bg-amber text-espresso hover:bg-amber-hover",
  },
  outline: {
    dark: "border border-cream/35 text-cream hover:border-cream hover:bg-cream/5",
    light:
      "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso/5",
  },
  text: {
    dark: "px-0! h-auto! text-cream underline decoration-amber decoration-2 underline-offset-6 hover:text-amber",
    light:
      "px-0! h-auto! text-espresso underline decoration-amber decoration-2 underline-offset-6 hover:text-amber-deep",
  },
};

export function buttonClasses({
  variant = "primary",
  tone = "light",
  size = "md",
  className = "",
}: Pick<BaseProps, "variant" | "tone" | "size" | "className">) {
  return [base, sizes[size], variants[variant][tone], className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant,
  tone,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = buttonClasses({ variant, tone, size, className });

  if (props.href !== undefined) {
    const { href, external, ...rest } = props;
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
