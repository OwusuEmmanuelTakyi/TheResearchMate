import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Basic web app manifest. Before enabling full PWA features, add 192px and
// 512px PNG icons (including a maskable variant) to the icons list.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name}: ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1a130e",
    theme_color: "#1a130e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
