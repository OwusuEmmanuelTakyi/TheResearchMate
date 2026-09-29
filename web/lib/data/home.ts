// Home page copy. Kept as data so it can move to a CMS later.

export const hero = {
  headline: "Finish your research with someone",
  headlineEmphasis: "in your corner.",
  subhead:
    "TheResearchMate guides Ghanaian university students through final-year projects, theses and dissertations, from methodology and data analysis to editing and your defence. You do the research. We make sure you never do it alone.",
  primaryCta: "Request support",
  secondaryCta: "Chat on WhatsApp",
  whatsappMessage: "Hello TheResearchMate, I'd like help with my research.",
};

export const empathy = {
  heading: "Final year shouldn't feel like guesswork.",
  body: "Most students aren't short on effort. They're short on clear direction, and on someone who can explain what their supervisor, their data or their deadline is really asking of them.",
  concerns: [
    "My supervisor says my methodology is weak, but not why.",
    "I have my SPSS output. I just don't know what it means.",
    "I've rewritten chapter two three times and it still doesn't flow.",
    "My defence is in two weeks and I haven't started the slides.",
  ],
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Tell us what you need",
    description:
      "Send a request with your programme, level, deadline and a short description, or message us on WhatsApp.",
  },
  {
    title: "Get a clear plan and quote",
    description:
      "We review your brief and reply with what we'll help with, how we'll work together, and the cost. No surprises.",
  },
  {
    title: "Work through it together",
    description:
      "We guide, analyse and give feedback in stages. You make the decisions and write in your own voice.",
  },
  {
    title: "Submit and defend with confidence",
    description:
      "A final review before submission, then preparation for your presentation or defence if you need it.",
  },
];

export type TrustPoint = {
  title: string;
  description: string;
};

export const trustPoints: TrustPoint[] = [
  {
    title: "Made for Ghanaian universities",
    description:
      "We understand local programme structures, supervisor expectations and the realities of fieldwork here.",
  },
  {
    title: "Clear pricing, agreed up front",
    description:
      "You know the scope and cost before any work begins.",
  },
  {
    title: "Deadlines taken seriously",
    description:
      "We plan backwards from your submission date and tell you honestly what's achievable.",
  },
  {
    title: "Confidential by default",
    description:
      "Your topic, data and drafts stay between you and us.",
  },
];

export const integrity = {
  heading: "We guide. You author.",
  body: [
    "TheResearchMate offers guidance, feedback, analysis support and editing. We don't write work for you to submit as your own.",
    "Your ideas, your decisions and your voice stay at the centre of your research. You remain its author, and it remains yours.",
  ],
};

export const finalCta = {
  heading: "Ready to move your research forward?",
  body: "Tell us where you are and what you need. We'll reply with a plan.",
};
