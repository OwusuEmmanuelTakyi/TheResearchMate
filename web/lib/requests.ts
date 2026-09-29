import { allServices } from "@/lib/data/services";
import { OTHER_SERVICE } from "@/lib/data/request";

// Shape of a support request. When a backend is added, this becomes the
// payload for a server action / API route and the basis of the DB model.
export type SupportRequest = {
  // Required
  fullName: string;
  university: string;
  programme: string;
  academicLevel: string;
  service: string; // service slug, or OTHER_SERVICE
  deadline: string; // yyyy-mm-dd
  description: string;
  // Optional
  projectTitle?: string;
  additionalInstructions?: string;
  fileNames?: string[];
};

export type ContactMessage = {
  name: string;
  replyTo: string; // email or phone
  message: string;
};

export function serviceLabel(slug: string) {
  if (slug === OTHER_SERVICE) return "Not sure yet";
  return allServices.find((s) => s.slug === slug)?.name ?? slug;
}

function formatDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Plain-text summary of a request, used for WhatsApp and email hand-off. */
export function formatSupportRequest(request: SupportRequest) {
  const lines = [
    "New support request",
    "",
    `Name: ${request.fullName}`,
    `University: ${request.university}`,
    `Programme: ${request.programme}`,
    `Academic level: ${request.academicLevel}`,
    `Service needed: ${serviceLabel(request.service)}`,
    `Deadline: ${formatDate(request.deadline)}`,
  ];
  if (request.projectTitle) lines.push(`Project title: ${request.projectTitle}`);
  lines.push("", "Description:", request.description);
  if (request.additionalInstructions) {
    lines.push("", "Additional instructions:", request.additionalInstructions);
  }
  if (request.fileNames?.length) {
    lines.push(
      "",
      `Files to share: ${request.fileNames.join(", ")} (I'll attach these separately)`,
    );
  }
  return lines.join("\n");
}

export function formatContactMessage(message: ContactMessage) {
  return [
    message.message,
    "",
    `From: ${message.name}`,
    `Reply to: ${message.replyTo}`,
  ].join("\n");
}
