// Options for the "Request support" form. Kept as data so they can later come
// from a database alongside the services list.

export const academicLevels = [
  "Diploma / HND",
  "Undergraduate (Bachelor's)",
  "Postgraduate Diploma",
  "Master's (MA, MSc, MPhil, MBA)",
  "PhD / Doctorate",
  "Other",
] as const;

export type AcademicLevel = (typeof academicLevels)[number];

/** Value used when the student isn't sure which service they need. */
export const OTHER_SERVICE = "not-sure";

export const acceptedFileTypes =
  ".pdf,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.sav,.dta,.txt";
