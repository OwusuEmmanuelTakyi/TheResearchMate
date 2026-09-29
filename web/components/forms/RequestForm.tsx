"use client";

import { Suspense, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/form/Field";
import { FileInput } from "@/components/ui/form/FileInput";
import { Input } from "@/components/ui/form/Input";
import { Select } from "@/components/ui/form/Select";
import { Textarea } from "@/components/ui/form/Textarea";
import { academicLevels, acceptedFileTypes } from "@/lib/data/request";
import { formatSupportRequest, type SupportRequest } from "@/lib/requests";
import { mailtoLink, whatsappLink } from "@/lib/site";
import { ServiceSelect, ServiceSelectFromQuery } from "./ServiceSelect";

type Channel = "whatsapp" | "email";

function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="border-t-2 border-espresso pt-6">
      <legend className="float-left w-full font-display text-2xl">{title}</legend>
      {description && (
        <p className="clear-both pt-2 text-espresso/65">{description}</p>
      )}
      <div className="clear-both grid gap-6 pt-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

// No backend yet: submitting formats the request and hands it off to WhatsApp
// or the student's email app. When a backend exists, replace handleSubmit with
// a server action that receives a SupportRequest and the uploaded files.
export function RequestForm() {
  const [sentVia, setSentVia] = useState<Channel | null>(null);
  const [fileCount, setFileCount] = useState(0);
  const deadlineRef = useRef<HTMLInputElement>(null);

  // Set the earliest selectable deadline on the client, so the prerendered
  // HTML doesn't carry the build date.
  useEffect(() => {
    if (deadlineRef.current) deadlineRef.current.min = todayISO();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as
      | HTMLButtonElement
      | null;
    const channel = (submitter?.value as Channel) ?? "whatsapp";
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const request: SupportRequest = {
      fullName: get("fullName"),
      university: get("university"),
      programme: get("programme"),
      academicLevel: get("academicLevel"),
      service: get("service"),
      deadline: get("deadline"),
      description: get("description"),
      projectTitle: get("projectTitle") || undefined,
      additionalInstructions: get("additionalInstructions") || undefined,
      fileNames: data
        .getAll("files")
        .filter((f): f is File => f instanceof File && f.size > 0)
        .map((f) => f.name),
    };
    const text = formatSupportRequest(request);

    if (channel === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(
        `Support request: ${request.fullName}`,
        text,
      );
    }
    setSentVia(channel);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-14">
      <FormSection title="About you">
        <Field id="fullName" label="Full name">
          <Input id="fullName" name="fullName" autoComplete="name" required />
        </Field>
        <Field id="university" label="University">
          <Input
            id="university"
            name="university"
            autoComplete="organization"
            placeholder="e.g. University of Ghana"
            required
          />
        </Field>
        <Field id="programme" label="Programme">
          <Input
            id="programme"
            name="programme"
            placeholder="e.g. BSc Nursing"
            required
          />
        </Field>
        <Field id="academicLevel" label="Academic level">
          <Select
            id="academicLevel"
            name="academicLevel"
            defaultValue=""
            placeholder="Select your level"
            required
          >
            {academicLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </Select>
        </Field>
      </FormSection>

      <FormSection title="Your project">
        <Field id="service" label="Service needed">
          <Suspense fallback={<ServiceSelect id="service" name="service" />}>
            <ServiceSelectFromQuery id="service" name="service" />
          </Suspense>
        </Field>
        <Field id="deadline" label="Deadline">
          <Input
            ref={deadlineRef}
            id="deadline"
            name="deadline"
            type="date"
            required
          />
        </Field>
        <Field
          id="projectTitle"
          label="Project title"
          optional
          className="sm:col-span-2"
        >
          <Input id="projectTitle" name="projectTitle" />
        </Field>
        <Field
          id="description"
          label="Brief description"
          hint="Where are you now, and what would you like help with? Include any supervisor feedback that matters."
          className="sm:col-span-2"
        >
          <Textarea
            id="description"
            name="description"
            rows={6}
            aria-describedby="description-hint"
            required
          />
        </Field>
      </FormSection>

      <FormSection
        title="Anything else"
        description="Optional, but it helps us give you an accurate plan and quote."
      >
        <Field
          id="files"
          label="Files"
          optional
          hint="Files can't be sent through this form yet. We'll list their names in your message; attach them in WhatsApp or email after it opens."
          className="sm:col-span-2"
        >
          <FileInput
            id="files"
            name="files"
            multiple
            accept={acceptedFileTypes}
            aria-describedby="files-hint"
            onFilesChange={(files) => setFileCount(files.length)}
          />
        </Field>
        <Field
          id="additionalInstructions"
          label="Additional instructions"
          optional
          className="sm:col-span-2"
        >
          <Textarea
            id="additionalInstructions"
            name="additionalInstructions"
            rows={4}
            placeholder="Referencing style, institution guidelines, preferred times to talk…"
          />
        </Field>
      </FormSection>

      <div className="border-t border-espresso/15 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" name="channel" value="whatsapp" size="lg">
            Send request on WhatsApp
          </Button>
          <Button
            type="submit"
            name="channel"
            value="email"
            variant="outline"
            size="lg"
          >
            Send by email
          </Button>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-espresso/60">
          Your request opens in WhatsApp or your email app, ready to send.
          Nothing is sent until you press send there.
        </p>
        <p role="status" className="mt-4 leading-relaxed text-espresso">
          {sentVia &&
            `${
              sentVia === "whatsapp"
                ? "WhatsApp should have opened in a new tab with your request."
                : "Your email app should have opened with your request."
            }${
              fileCount > 0
                ? ` Remember to attach your ${fileCount === 1 ? "file" : `${fileCount} files`} before sending.`
                : ""
            }`}
        </p>
      </div>
    </form>
  );
}
