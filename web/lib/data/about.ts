// About page copy. Kept as data so it can move to a CMS later.

export const aboutIntro = {
  title: "About TheResearchMate",
  lead: "We started TheResearchMate because too many capable students in Ghana reach final year without the guidance they need to finish their research well. We exist to close that gap: patiently, honestly, and without ever taking your work out of your hands.",
};

export const mission = {
  heading: "Our mission",
  body: "To help university students in Ghana complete sound, original research by giving them clear guidance, practical tools and expert feedback at every stage, from first idea to final defence.",
};

export const vision = {
  heading: "Our vision",
  body: "A generation of Ghanaian graduates who understand their own research, can defend it with confidence, and carry those skills into their careers and further study.",
};

export type Value = {
  title: string;
  description: string;
};

export const approach: Value[] = [
  {
    title: "Explain, don't just fix",
    description:
      "When we suggest a change, we tell you why. The aim is for you to understand your research better with every round of feedback.",
  },
  {
    title: "Meet you where you are",
    description:
      "Whether you're choosing a topic or a week from submission, we start from your draft, your data and your supervisor's comments.",
  },
  {
    title: "Be honest about time and scope",
    description:
      "We agree what's realistic before we begin, and we tell you early if something needs to change.",
  },
  {
    title: "Keep your work private",
    description:
      "Your drafts, data and personal details are shared with no one outside the people helping you.",
  },
];

export const integrityPolicy = {
  heading: "Our approach to academic integrity",
  intro:
    "Your degree should reflect your own work. Everything we offer is designed to strengthen your research, not replace your part in it. You remain the author, and your work remains yours.",
  weDo: [
    "Explain research methods, concepts and analysis techniques",
    "Give feedback and suggestions on your drafts",
    "Run and interpret analyses alongside you, showing each step",
    "Proofread and edit for grammar, clarity and formatting",
    "Help you prepare for your presentation and defence",
    "Provide templates, guides and examples to learn from",
  ],
  weDont: [
    "Write chapters, theses or assignments for you to submit as your own",
    "Fabricate or alter data or results",
    "Sit exams, tests or defences on your behalf",
    "Help anyone get around their institution's academic rules",
  ],
  closing:
    "If you're unsure whether a kind of help is appropriate for your programme, ask us, and check your institution's guidelines. We're always happy to talk it through.",
};
