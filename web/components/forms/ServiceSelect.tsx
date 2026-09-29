"use client";

import { useSearchParams } from "next/navigation";
import { Select } from "@/components/ui/form/Select";
import { OTHER_SERVICE } from "@/lib/data/request";
import { allServices, serviceCategories } from "@/lib/data/services";

type ServiceSelectProps = {
  id: string;
  name: string;
  defaultValue?: string;
};

export function ServiceSelect({ id, name, defaultValue = "" }: ServiceSelectProps) {
  return (
    <Select id={id} name={name} defaultValue={defaultValue} placeholder="Select a service" required>
      {serviceCategories.map((category) => (
        <optgroup key={category.slug} label={category.title}>
          {category.services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </optgroup>
      ))}
      <option value={OTHER_SERVICE}>Not sure yet</option>
    </Select>
  );
}

/**
 * Preselects the service from `?service=<slug>` (used by "Request this
 * service" links). Must be rendered inside <Suspense>, with a plain
 * <ServiceSelect> as the fallback, so the page can still be prerendered.
 */
export function ServiceSelectFromQuery(props: Omit<ServiceSelectProps, "defaultValue">) {
  const param = useSearchParams().get("service") ?? "";
  const valid =
    param === OTHER_SERVICE || allServices.some((s) => s.slug === param);
  return <ServiceSelect {...props} defaultValue={valid ? param : ""} />;
}
