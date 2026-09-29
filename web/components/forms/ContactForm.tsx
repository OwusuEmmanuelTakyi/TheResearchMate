"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/form/Field";
import { Input } from "@/components/ui/form/Input";
import { Textarea } from "@/components/ui/form/Textarea";
import { formatContactMessage, type ContactMessage } from "@/lib/requests";
import { mailtoLink, whatsappLink } from "@/lib/site";

type Channel = "email" | "whatsapp";

// No backend yet: submitting hands the message off to the student's email or
// WhatsApp app. Replace handleSubmit with a server action when one exists.
export function ContactForm() {
  const [sentVia, setSentVia] = useState<Channel | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as
      | HTMLButtonElement
      | null;
    const channel = (submitter?.value as Channel) ?? "email";
    const data = new FormData(e.currentTarget);
    const message: ContactMessage = {
      name: String(data.get("name") ?? "").trim(),
      replyTo: String(data.get("replyTo") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
    const text = formatContactMessage(message);

    if (channel === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(
        `Enquiry from ${message.name}`,
        text,
      );
    }
    setSentVia(channel);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field id="contact-name" label="Your name">
        <Input id="contact-name" name="name" autoComplete="name" required />
      </Field>
      <Field
        id="contact-reply"
        label="Email or phone number"
        hint="So we know how to reply to you."
      >
        <Input
          id="contact-reply"
          name="replyTo"
          autoComplete="email"
          aria-describedby="contact-reply-hint"
          required
        />
      </Field>
      <Field id="contact-message" label="Message">
        <Textarea id="contact-message" name="message" rows={6} required />
      </Field>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" name="channel" value="email" size="lg">
          Send by email
        </Button>
        <Button
          type="submit"
          name="channel"
          value="whatsapp"
          variant="outline"
          size="lg"
        >
          Send on WhatsApp
        </Button>
      </div>

      <p role="status" className="text-sm text-espresso/70">
        {sentVia === "email" &&
          "Your email app should have opened with your message ready to send. If it didn't, email us directly at the address on this page."}
        {sentVia === "whatsapp" &&
          "WhatsApp should have opened in a new tab with your message ready to send."}
      </p>
    </form>
  );
}
