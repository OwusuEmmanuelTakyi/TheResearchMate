// Site content lives here as typed data so it can later be served from a CMS
// or database without changing the components that render it.

export type Service = {
  slug: string;
  name: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  /** One or two sentences used on the home page overview. */
  summary: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "project-guidance",
    title: "Project & thesis guidance",
    summary:
      "Structured support from topic selection to final chapter, for final-year projects, theses and dissertations.",
    services: [
      {
        slug: "final-year-project-support",
        name: "Final-year project support",
        description:
          "Help shaping your topic, objectives and chapter structure, with feedback at each stage so you always know what comes next.",
      },
      {
        slug: "thesis-dissertation-support",
        name: "Thesis & dissertation support",
        description:
          "Guidance for Master's and PhD candidates on argument, structure and coherence across a long piece of research.",
      },
      {
        slug: "research-consultation",
        name: "Research consultation",
        description:
          "One-on-one sessions to talk through a problem, whether that's a stalled chapter, supervisor comments or a change of direction.",
      },
    ],
  },
  {
    slug: "literature-methodology",
    title: "Literature & methodology",
    summary:
      "Find, organise and critique the right sources, then choose a research design you can defend.",
    services: [
      {
        slug: "literature-review",
        name: "Literature reviews",
        description:
          "Support locating relevant sources, organising them into themes and identifying the gap your study addresses.",
      },
      {
        slug: "methodology-support",
        name: "Methodology support",
        description:
          "Guidance on research design, sampling, instruments and justification, so your methods chapter holds up to scrutiny.",
      },
    ],
  },
  {
    slug: "data",
    title: "Data collection & analysis",
    summary:
      "From designing a questionnaire to interpreting your output, with every step explained so you understand your results.",
    services: [
      {
        slug: "questionnaire-design",
        name: "Questionnaire & survey design",
        description:
          "Build clear, valid instruments aligned with your research questions, ready for pre-testing.",
      },
      {
        slug: "data-collection",
        name: "Data collection support",
        description:
          "Planning and coordination for fieldwork and online surveys, including data entry and cleaning.",
      },
      {
        slug: "data-analysis",
        name: "Data analysis",
        description:
          "Quantitative and qualitative analysis using tools such as SPSS, Stata, R and Excel, with plain-language interpretation of your results.",
      },
    ],
  },
  {
    slug: "editing",
    title: "Editing & proofreading",
    summary:
      "Careful review of grammar, clarity, formatting and referencing, so your work reads as well as it thinks.",
    services: [
      {
        slug: "proofreading",
        name: "Proofreading & editing",
        description:
          "Line-level corrections, consistency checks, reference formatting (APA, Harvard and others) and layout to your institution's guidelines.",
      },
    ],
  },
  {
    slug: "defence-resources",
    title: "Defence prep & resources",
    summary:
      "Walk into your defence prepared, and keep templates and guides on hand for every stage of research.",
    services: [
      {
        slug: "presentation-defence-prep",
        name: "Presentation & defence preparation",
        description:
          "Slide design, a clear narrative of your study, and mock questioning so you can answer your panel with confidence.",
      },
      {
        slug: "research-tools-templates",
        name: "Research tools & templates",
        description:
          "Chapter outlines, proposal templates, consent forms and checklists you can adapt for your own project.",
      },
      {
        slug: "student-resources",
        name: "Student resources",
        description:
          "Practical guides on referencing, writing style, research ethics and managing your time through final year.",
      },
    ],
  },
];

export const allServices: Service[] = serviceCategories.flatMap(
  (category) => category.services,
);

export const servicesPage = {
  title: "Services",
  lead: "Support for every stage of a final-year project, thesis or dissertation, built around guidance and explanation so the work stays yours.",
  notSure: {
    heading: "Not sure what you need?",
    body: "Many students start with a research consultation. Tell us where you're stuck and we'll suggest the right kind of help, or tell you honestly if you don't need us.",
  },
  cta: {
    heading: "Found what you need?",
    body: "Send us a request with your deadline and a short description. We'll reply with a plan and a quote.",
  },
};
