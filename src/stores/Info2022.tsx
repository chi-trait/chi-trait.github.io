import { CFP, Metadata, People, Overview, Schedule } from "./Interfaces";
const format = "documentclass [sigconf, review, anonymous] {acmart}";
const overview: Overview = {
  contact: "trait2022@easychair.org",

  acronym: "TRAIT",
  year: "2022",
  fullName: "Workshop on Trust and Reliance in AI-Human Teams",
  description: (
    <>
      <p>
        As humans increasingly interact (and even collaborate) with AI systems
        during decision-making, creative exercises, and other
        tasks,appropriatetrust and reliance are necessary to ensure proper usage
        and adoption of these systems. Specifically, people should understand
        when to trust or rely on an algorithm's outputs and when to override
        them. While significant research focus has aimedto measure and promote
        trust in human-AI interaction, the field lacks synthesized definitions
        and understanding of results acrosscontexts. Indeed, conceptualizing
        trust and reliance, and identifying the best ways to measure these
        constructs and effectively shapethem in human-AI interactions remains a
        challenge.This workshop aims to{" "}
        <b className="text-highlight">
          establish building appropriate trust and reliance on (imperfect) AI
          systems as a vital, yet under-explored research problem.
        </b>
      </p>
      <p>
        {" "}
        The workshop will provide a venue for exploring three broad aspects
        related to human-AI trust:{" "}
      </p>

      <ul>
        <li>
          How do we clarify{" "}
          <span className="text-highlight">definitions and frameworks</span>{" "}
          relevant to human-AI trust and reliance (e.g., what does trust mean in
          different contexts)?
        </li>
        <li>
          How do we <span className="text-highlight">measure</span> trust and
          reliance?
        </li>
        <li>
          How do we <span className="text-highlight">shape</span> trust and
          reliance?{" "}
        </li>
      </ul>
      <p>
        As these problems and solutions involving humansand AI are
        interdisciplinary in nature, we invite participants with expertise in
        HCI, AI, ML, psychology, and social science, or otherrelevant fields to
        foster closer communications and collaboration between multiple
        communities.
      </p>
    </>
  ),
  backgroundImg: "background.png",
  confLogoImg: "chi2022.png",
  logoImg: "logo.png",
  logoWithWord: "logo_word.png",
  confName: "CHI",
};

const organizers: People[] = [
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
      date: "February 24, 2022, 11:59 PM (Anywhere on Earth)",
      type: "submission",
      description:
        "Submission will be reviewed by program committee members, in a double-blind manner.",
    },
    {
      date: "TBD",
      type: "notification",
      description:
        "Accepted papers will be posted on the workshop website and shared via social media.",
    },
    {
      date: "TBD (between April 14-15 or April 30-May 6)",
      type: "workshop",
      description: "At least one author must register and attend the workshop.",
    },
  ],
  submit: {
    platform: {
      name: "EasyChair",
      url: "https://easychair.org/conferences/?conf=trait2022",
    },
    format: (
      <span>
        {" "}
        ACM double column, 2-6 pages, fully anonymized. [
        <a href="https://www.acm.org/binaries/content/assets/publications/taps/acm_submission_template.docx">
          Word
        </a>
        ][
        <a href="https://www.acm.org/binaries/content/assets/publications/consolidated-tex-template/acmart-primary.zip">
          LaTeX
        </a>
        ][
        <a href="https://www.overleaf.com/latex/templates/acm-conference-proceedings-master-template/pnrfvrrdbfwt">
          Overleaf
        </a>
        ] If you use latex, please use: <code>{format}</code>
      </span>
    ),
    type: "position, summarize existing research, provide industry perspective, or in-progress works.",
  },
};

const pcs = [
  { name: "Zahra Ashkortab", affiliation: "IBM Research" },
  { name: "Michael Bernstein", affiliation: "Stanford University" },

  { name: "Erin Chiou", affiliation: "ASU Adapt Lab" },
  { name: "Hal Daume III", affiliation: "University of Maryland" },
  { name: "Maria De-Arteaga", affiliation: "UT Austin" },

  { name: "Krzystof Gajos", affiliation: "Harvard University" },
  { name: "Elena Glassman", affiliation: "Harvard University" },
  { name: "Ella Glikson", affiliation: "Bar Ilan University" },
  { name: "Shi Feng", affiliation: "University of Maryland" },
  { name: "Matthew Kay", affiliation: "Northwestern University" },
  { name: "Maia Jacobs", affiliation: "Northwestern University" },
  { name: "Alon Jacovi", affiliation: "Bar Ilan University" },
  { name: "Vera Liao", affiliation: "Microsoft Research" },
  { name: "Brian Lim", affiliation: "National University of Singapore" },
  { name: "Tim Miller", affiliation: "University of Melbourne" },
  { name: "Gonzalo Ramos", affiliation: "Microsoft Research" },

  { name: "Ben Shneiderman", affiliation: "University of Maryland" },
  { name: "Tom Williams", affiliation: "Colorado School of Mines" },

  { name: "Jenn Wortman Vaughan", affiliation: "Microsoft Research" },

  { name: "Michael Terry", affiliation: "Google Research" },

  { name: "Ming Yin", affiliation: "Purdue University" },
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

const speakers = [
  {
    name: "John D. Lee",
    affliation: "University of Wisconsin-Madison",
    webpage: "https://directory.engr.wisc.edu/ie/Faculty/Lee_John/",
    img: "john_lee.png",
    description:
      "John is the Emerson Electric Quality & Productivity Professor in Mechanical Engineering at the University of Wisconsin-Madison. " +
      "His research focuses on the safety and acceptance of complex human-machine systems by considering how technology mediates attention. This research is grounded in conceptual and computational models of human-technology interaction. Applications include trust in technology, tele-health, advanced driver assistance systems, and driver distraction.",
  },
];

export const Info2022: Metadata = {
  overview,
  organizers,
  cfp,
  pcs,
  schedule,
  speakers,
};
