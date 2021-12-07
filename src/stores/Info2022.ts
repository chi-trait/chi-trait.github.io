import { CFP, Metadata, Organizer, Overview, Schedule } from "./Interfaces";

const overview: Overview = {
  acronym: "TRAIT",
  year: "2022",
  fullName: "Workshop on Trust and Reliance in AI-Human Teams",
  description: "",
  backgroundImg: "chi2022-background.png",
  confLogoImg: "chi2022.png",
  confName: "CHI",
};

const organizers: Organizer[] = [
  {
    name: "Gagan Bansal",
    affliation: "University of Washington",
    webpage: "https://homes.cs.washington.edu/~bansalg/",
    img: "gagan.png",
    description:
      "Gagan is a Ph.D. candidate in the Allen School of Computer Science and Engineering at the University of Washington, Seattle. He is part of the UW Lab for Human-AI Interaction and conducts interdisciplinary research on Artificial Intelligence and Human-Computer Interaction with focus on developing human-centered AI systems for augmenting people.",
  },
  {
    name: "Alison Smith-Renner",
    affliation: "Dataminr",
    webpage: "https://alisonmsmith.github.io/",
    img: "alison.png",
    description:
      "Alison is a Senior Research Scientist at Dataminr. Her research interests lie at the intersection of AI and HCI, focusing on transparency and control for human-in-the-loop systems to engender appropriate trust and improve human performance. Alison received her Ph.D. from the University of Maryland, College Park. She has organized various workshops on explainable AI and human-centered ML, including at IUI, CHI, and TEI, and she has held senior committee roles at IUI.",
  },
  {
    name: "Zana Buçinca",
    affliation: "Harvard University",
    webpage: "https://hci.seas.harvard.edu/people/zana-bu%C3%A7inca",
    img: "zana.png",
    description:
      "Zana is a Ph.D. Candidate at Harvard University. Her research lies at the intersection of Human-Computer Interaction and Artificial Intelligence. Informed by cognitive science theories, Zana designs, builds, and evaluates AI for decision-making support.",
  },
  {
    name: "Tongshuang (Sherry) Wu",
    affliation: "University of Washington",
    webpage: "https://homes.cs.washington.edu/~wtshuang/",
    img: "sherry.png",
    description:
      "Sherry is a Ph.D. Candidate at the University of Washington, Seattle. " +
      "Her research lies at the intersection of Human-Computer Interaction " +
      "and Natural Language Processing, aiming to support humans interacting with imperfect AIs, " +
      "by debugging and correcting AIs interactively. Her work improves system transparency and " +
      "controllability in human-AI collaborations, and encourages global understanding and " +
      "refinement in model analysis.",
  },
  {
    name: "Kenneth Holstein",
    affliation: "Carnegie Mellon University",
    webpage: "https://kenholstein.myportfolio.com/ke",
    img: "kenneth.png",
    description:
      "Kenneth is an Assistant Professor in Human-Computer Interaction at Carnegie Mellon University. His research interests lie at the intersection of HCI, AI, design, and cognitive science, focusing on the design, development, and evaluation of human-AI collaborative systems in complex social contexts.",
  },
  {
    name: "Jessica Hullman",
    affliation: "Northwestern University",
    webpage: "http://users.eecs.northwestern.edu/~jhullman/",
    img: "jessica.png",
    description:
      "Jessica is an Associate Professor of Computer Science at Northwestern University. Her research looks at how to design, evaluate, coordinate, and think about visual representations of data and model predictions for inference, decision making, and communication, including the effects of visualizing uncertainty on belief updating and potential for behaviorally induced feedback loops in visualizing model predictions in strategic settings.",
  },
  {
    name: "Simone Stumpf",
    affliation: "University of Glasgow",
    webpage: "https://www.gla.ac.uk/schools/computing/staff/simonestumpf/",
    img: "simone.png",
    description:
      "Simone Stumpf is a Reader in Responsible and Interactive AI at University of Glasgow, UK. She has a long-standing research focus on user interactions with machine learning systems. Her work has contributed to shaping the field of Explainable AI (XAI) through the Explanatory Debugging approach to interactive machine learning, providing design principles for crafting explanations. She is a member of the organising committee of the ExSS workshop at IUI, and has held senior committee roles at CHI, IUI and EICS conferences.",
  },
];

const cfp: CFP = {
  description:
    "As humans increasingly interact with AI systems during decision-making, creative tasks, and other workflows, appropriate trust and reliance are necessary to ensure proper usage and adoption of these systems. For example, people should understand when to trust or rely on an algorithm’s outputs and when to override them. While significant research focus has aimed to measure and promote trust in human-AI interaction, the field lacks synthesized results across contexts, formalized key concepts, and definitions. The workshop will provide a venue to explore three broad aspects related to human-AI trust: (1) How do we clarify definitions and frameworks relevant to human-AI trust and reliance (e.g., what does trust mean in different contexts)? (2) How do we measure trust and reliance? And, (3) How do we shape trust and reliance? ",
  themes: [
    "Definitions of trust and reliance",
    "Human-human trust and lessons from social sciences",
    "Qualitative (e.g., user reflection) and quantitative methods (e.g., usage, adoption, team performance, etc.) for evaluating trust and reliance.",
    "Tradeoffs with other objectives (e.g., team performance, creativity, etc)",
    "Solutions (and their limitations) for promoting appropriate trust (e.g., XAI, control mechanisms, human agency, communicating uncertainty etc).",
    "Safety mechanisms for when trust is broken.",
  ],
  dates: [
    {
      date: "February 24, 2022",
      type: "submission",
      description: "Submission will be reviewed by program committee.",
    },
    {
      date: "TBD",
      type: "notification",
      description:
        "accepted papers will be posted on the workshop website and shared via social media.",
    },
    {
      date: "TBD",
      type: "workshop",
      description: "At least one author must register and attend the workshop.",
    },
  ],
  submit: {
    platform: {
      name: "EasyChair (todo)",
      url: "#",
    },
    format: "2-6 page",
    template: {
      name: "SIGCHI (todo)",
      url: "#",
    },
    type: "position, summarize existing research, provide industry perspective, or in-progress works.",
  },
};

const pcs = [
  { name: "Ben Shneiderman", affiliation: "University of Maryland" },
  { name: "Elena Glassman", affiliation: "Harvard" },
  { name: "Jenn Wortman", affiliation: "MSR" },
  { name: "Krzystof Gajos", affiliation: "Harvard" },
  { name: "Matthew Kay", affiliation: "Northwestern" },
  { name: "Tim Miller", affiliation: "University of Melbourne" },
  { name: "Alon Jacovi", affiliation: "Bar Ilan University" },
  { name: "Maria De-Arteaga", affiliation: "UT Austin" },
  { name: "Vera Liao", affiliation: "MSR" },
  { name: "Hal Daume", affiliation: "University of Maryland" },
  { name: "Gonzalo Ramos", affiliation: "MSR" },
  { name: "Michael Terry", affiliation: "Google" },

  { name: "Ming Yin", affiliation: "Purdue" },
  { name: "Maia Jacobs", affiliation: "Northwestern" },
  { name: "Erin Chiou", affiliation: "ASU Adapt Lab" },
  { name: "Ella Glikson", affiliation: "Bar Ilan University" },
  { name: "Tom Williams", affiliation: "Colorado School of Mines" },
  { name: "Shi Feng", affiliation: "University of Maryland" },
  { name: "Zahra Ashkortab", affiliation: "IBM" },
  { name: "Brian Lim", affiliation: "National University of Singapore" },
  { name: "Michael Bernstein", affiliation: "Stanford HAI" },
];

export const schedule: Schedule[] = [
  {
    start: "09:00",
    end: "09:15",
    title: "Welcome",
  },
  {
    start: "09:15",
    end: "10:15",
    title: "Keynote talk by Prof. John D. Lee",
    description: "The talk is about...",
  },
  {
    start: "10:15",
    end: "10:45",
    title: "Paper sessions 1",
  },
  {
    start: "10:45",
    end: "11:30",
    title: "Panel with experts that have diverse and well-balanced expertise",
  },
  {
    start: "11:30",
    end: "12:00",
    title: "Paper sessions 2",
  },
  {
    start: "12:00",
    end: "13:00",
    title: "Lunch break",
  },
  {
    start: "13:00",
    end: "14:30",
    title: "Group activity 1 (60 min discussion + 30 min group result sharing)",
  },
  {
    start: "14:30",
    end: "15:00",
    title: "Coffee break (concurrent with poster presentations)",
  },
  {
    start: "15:00",
    end: "16:30",
    title: "Group activity 2 (60 min discussion + 30 min group result sharing)",
  },
  {
    start: "16:30",
    end: "16:45",

    title: "Closing remarks",
  },
];

export const Info2022: Metadata = {
  overview,
  organizers,
  cfp,
  pcs,
  schedule,
};
