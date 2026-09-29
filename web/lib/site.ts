export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "TheResearchMate",
  tagline: "Your Partner in Research",
  description:
    "Research support for Ghanaian university students: final-year projects, theses and dissertations, data analysis, editing and defence preparation.",
  contact: {
    whatsappDisplay: "050 065 0326",
    // International format without "+" or leading zero, as wa.me expects.
    whatsappNumber: "233500650326",
    email: "researchmate1999@gmail.com",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  requestHref: "/request",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${siteConfig.contact.email}${query ? `?${query}` : ""}`;
}
