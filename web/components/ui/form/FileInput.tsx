"use client";

import { useState, type ComponentProps } from "react";

type FileInputProps = Omit<ComponentProps<"input">, "type" | "onChange"> & {
  onFilesChange?: (files: File[]) => void;
};

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileInput({ id, onFilesChange, ...props }: FileInputProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed border-espresso/35 bg-paper/60 px-6 py-8 text-center transition-colors hover:border-amber hover:bg-paper has-[:focus-visible]:border-amber has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-amber/30"
      >
        <span className="font-medium text-espresso underline decoration-amber decoration-2 underline-offset-4">
          Choose files
        </span>
        <span className="text-sm text-espresso/55">
          Drafts, supervisor comments, data files or guidelines
        </span>
        <input
          id={id}
          type="file"
          className="sr-only"
          onChange={(e) => {
            const list = Array.from(e.target.files ?? []);
            setFiles(list);
            onFilesChange?.(list);
          }}
          {...props}
        />
      </label>
      {files.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm text-espresso/75">
          {files.map((file) => (
            <li key={`${file.name}-${file.size}`} className="flex justify-between gap-4">
              <span className="truncate">{file.name}</span>
              <span className="shrink-0 text-espresso/50">
                {formatSize(file.size)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
