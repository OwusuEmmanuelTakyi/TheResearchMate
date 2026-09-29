import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import logo from "@/public/images/logo.png";

type LogoProps = {
  className?: string;
  /** Load eagerly when the logo is above the fold (e.g. in the header). */
  eager?: boolean;
};

// The logo artwork is light-on-transparent, so it should only be placed on
// espresso (dark) backgrounds.
export function Logo({ className = "", eager = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-block shrink-0 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={logo}
        alt={siteConfig.name}
        className="h-full w-auto"
        sizes="(min-width: 640px) 240px, 180px"
        loading={eager ? "eager" : "lazy"}
      />
    </Link>
  );
}
