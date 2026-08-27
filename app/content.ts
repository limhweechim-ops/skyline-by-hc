export const topics = [
  {
    slug: "development-strategy-procurement",
    title: "Development Strategy & Procurement",
    description:
      "Early developer decisions, feasibility, procurement strategy, contracts and risk allocation.",
    question:
      "What must the developer decide before design and procurement commitments harden?",
  },
  {
    slug: "developer-leadership",
    title: "Developer Leadership",
    description:
      "Ownership, governance, escalation and the conditions developers create for project teams.",
    question:
      "How should ownership and escalation be designed so problems surface while there is still time to act?",
  },
  {
    slug: "construction-delivery-top",
    title: "Construction Delivery & TOP",
    description:
      "Interfaces, quality, commissioning, authority clearances, maintainability and completion readiness.",
    question:
      "What information, interfaces and quality gates must be resolved before completion pressure turns them into rework?",
  },
  {
    slug: "ppvc-dfma-productivity",
    title: "PPVC, DfMA, Technology & Productivity",
    description:
      "Industrialised construction and digital tools, judged by how well they integrate into real delivery.",
    question:
      "What must be integrated across design, manufacturing, logistics and digital delivery for technology to produce reliable productivity?",
  },
  {
    slug: "policy-regulation",
    title: "Policy, Regulation & Sustainability",
    description:
      "How planning rules, authority requirements, incentives and long-term outcomes meet project realities.",
    question:
      "How can regulatory intent, commercial feasibility, sustainability and project delivery be reconciled in practice?",
  },
] as const;

export type TopicSlug = (typeof topics)[number]["slug"];
export type TopicTitle = (typeof topics)[number]["title"];

export type ArticleStatus = "draft" | "scheduled" | "published";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  publishAt: string;
  status: ArticleStatus;
  contentReady: boolean;
  topic: TopicTitle;
  read: string;
  featured?: boolean;
  thumbnail?: string;
  thumbnailAlt?: string;
  tags: string[];
  originalUrl?: string;
};

const articleRegistry: Article[] = [
  {
    slug: "one-camera-many-agencies-one-project-reality",
    title: "One Camera, Many Agencies, One Project Reality",
    dek: "How better upstream information changed the way Grand Dunman prepared for TOP—and why the real innovation was integration, not the camera.",
    date: "20 Aug 2026",
    publishAt: "2026-08-20",
    status: "published",
    contentReady: true,
    topic: "Construction Delivery & TOP",
    read: "14 min",
    featured: true,
    thumbnail: "/images/articles/one-camera-many-agencies-one-project-reality/01_grand-dunman-completed-waterfront.jpg",
    thumbnailAlt: "Completed Grand Dunman development viewed across the waterfront",
    tags: ["Whole-of-Government Virtual Inspection", "Grand Dunman", "TOP", "CORENET X", "information flow", "construction productivity"],
    originalUrl: "https://medium.com/@hcl.writes/one-camera-many-agencies-one-project-reality-0de26eb68a8d",
  },
  {
    slug: "aluminium-finish-survive-twice",
    title: "The Aluminium Finish That Has to Survive Twice",
    dek: "Why powder coating, PVDF and anodised aluminium can look identical on a sample board—and age nothing alike.",
    date: "12 Aug 2026",
    publishAt: "2026-08-12",
    status: "published",
    contentReady: true,
    topic: "Construction Delivery & TOP",
    read: "8 min",
    featured: true,
    thumbnail: "/images/articles/aluminium-finish-survive-twice/coating-samples-daylight.webp",
    thumbnailAlt: "Project team comparing aluminium coating samples in daylight",
    tags: ["aluminium", "powder coating", "PVDF", "anodising", "façade", "maintainability"],
    originalUrl: "https://medium.com/@hcl.writes/the-aluminium-finish-that-has-to-survive-twice-42a134fdaf94",
  },
  {
    slug: "bet-is-expiring",
    title: "BET Is Expiring. The Transformation Should Not.",
    dek: "As Singapore’s BET incentive expires, Lim Hwee Chim examines what should replace it to sustain construction productivity, innovation and industry transformation.",
    date: "4 Aug 2026",
    publishAt: "2026-08-04",
    status: "published",
    contentReady: true,
    topic: "Policy, Regulation & Sustainability",
    read: "10 min",
    thumbnail: "/images/articles/bet-is-expiring/early-site-works-productivity.webp",
    thumbnailAlt: "Early site works illustrating construction productivity and transformation",
    tags: ["BET GFA", "construction transformation", "BCA", "URA"],
    originalUrl: "https://www.linkedin.com/pulse/bet-expiring-transformation-should-hwee-chim-lim-66gwc/",
  },
  {
    slug: "top-90-day-stress-test",
    title: "TOP: The 90-Day Stress Test",
    dek: "Completion does not reveal a project’s final problems. It reveals the accumulated consequences of its earlier decisions.",
    date: "30 Jul 2026",
    publishAt: "2026-07-30",
    status: "published",
    contentReady: true,
    topic: "Construction Delivery & TOP",
    read: "7 min",
    thumbnail: "/images/articles/top-90-day-stress-test/completed-residential-facade.webp",
    thumbnailAlt: "Completed residential facade approaching project completion",
    tags: ["TOP", "commissioning", "authority clearances", "CONQUAS"],
  },
  {
    slug: "building-built-before-reached-site",
    title: "The Building Was Built Before It Reached Site",
    dek: "A developer-side account of PPVC as an information and coordination system—from early design decisions and factory production to cross-border logistics and module installation.",
    date: "28 Jun 2026",
    publishAt: "2026-06-28",
    status: "published",
    contentReady: true,
    topic: "PPVC, DfMA, Technology & Productivity",
    read: "7 min",
    thumbnail: "/images/articles/building-built-before-reached-site/ppvc-module-on-trailer.webp",
    thumbnailAlt: "PPVC module transported on a trailer before reaching site",
    tags: ["PPVC", "prefabrication", "design coordination", "manufacturing"],
  },
  {
    slug: "contract-matters-timing-more",
    title: "The Contract Matters. The Timing Matters More.",
    dek: "A developer-side view of SIA, REDAS, ECI and NEC4—and why construction outcomes depend on getting the right information into the room before decisions harden.",
    date: "14 Jun 2026",
    publishAt: "2026-06-14",
    status: "published",
    contentReady: true,
    topic: "Development Strategy & Procurement",
    read: "7 min",
    thumbnail: "/images/articles/contract-matters-timing-more/eci-site-workshop.webp",
    thumbnailAlt: "Early contractor involvement workshop held with the project team",
    tags: ["ECI", "SIA contract", "REDAS", "NEC4", "procurement"],
    originalUrl: "https://www.linkedin.com/pulse/contract-matters-timing-more-hwee-chim-lim-ii3wc/",
  },
  {
    slug: "fire-came-before-i-entered-building-industry",
    title: "Fire came before I entered the building industry",
    dek: "A childhood shophouse fire, a modern high-rise disaster, and why fire-safety rules are not bureaucratic friction but society’s most basic promise.",
    date: "3 Jun 2026",
    publishAt: "2026-06-03",
    status: "published",
    contentReady: true,
    topic: "Policy, Regulation & Sustainability",
    read: "5 min",
    thumbnail: "/images/articles/fire-came-before-i-entered-building-industry/fire-night-cover.webp",
    thumbnailAlt: "Wooden shophouses burning at night",
    tags: ["fire safety", "SCDF", "building regulations", "evacuation", "fire code", "Wang Fuk Court"],
    originalUrl: "https://www.linkedin.com/pulse/fire-came-before-i-entered-building-industry-hwee-chim-lim-ngnlc/",
  },
  {
    slug: "champagne-lasts-ten-minutes",
    title: "The Champagne Lasts Ten Minutes",
    dek: "Winning a Government Land Sale is not the finish line. It begins five years of compressed decisions across design, approvals, procurement, construction and sales.",
    date: "10 May 2026",
    publishAt: "2026-05-10",
    status: "published",
    contentReady: true,
    topic: "Development Strategy & Procurement",
    read: "7 min",
    thumbnail: "/images/articles/champagne-lasts-ten-minutes/bayshore-gls-site-sign.webp",
    thumbnailAlt: "Government Land Sale site sign at Bayshore",
    tags: ["GLS", "ABSD", "development programme", "project feasibility"],
  },
  {
    slug: "substation-went-underground",
    title: "The Substation Went Underground.",
    dek: "A planning refinement made basement substations more attractive. The technical discussion that followed shows why planning, fire safety and long-term grid operations have to be considered together.",
    date: "25 Jul 2026",
    publishAt: "2026-07-25",
    status: "published",
    contentReady: true,
    topic: "Policy, Regulation & Sustainability",
    read: "9 min",
    thumbnail: "/images/articles/substation-went-underground/underground-substation-equipment-room.webp",
    thumbnailAlt: "Electrical equipment room within an underground substation",
    tags: ["basement substation", "URA", "SPPG", "SCDF", "infrastructure"],
  },
  {
    slug: "once-you-take-over-the-ship-own-the-storm",
    title: "Once You Take Over the Ship, You Own the Storm",
    dek: "Reflections on inheriting construction projects midway—and why ownership begins with understanding the technical, relational, decision and regulatory debt already on board.",
    date: "10 Mar 2026",
    publishAt: "2026-03-10",
    status: "published",
    contentReady: true,
    topic: "Developer Leadership",
    read: "7 min",
    thumbnail: "/images/articles/once-you-take-over-the-ship-own-the-storm/once-you-take-over-cover.jpg",
    thumbnailAlt: "Project team conducting a construction site walkthrough",
    tags: ["project takeover", "developer leadership", "regulatory approvals", "project delivery", "team trust"],
    originalUrl: "https://www.linkedin.com/pulse/once-you-take-over-ship-own-storm-hwee-chim-lim-jkjdc/",
  },
  {
    slug: "speed-vs-certainty",
    title: "Speed vs. Certainty: Why I’m Not Copying China’s Construction Playbook",
    dek: "What China’s smart construction sites reveal about Singapore’s real productivity challenge: not a technology gap, but information latency across a fragmented ecosystem.",
    date: "23 Dec 2025",
    publishAt: "2025-12-23",
    status: "published",
    contentReady: true,
    topic: "PPVC, DfMA, Technology & Productivity",
    read: "4 min",
    thumbnail: "/images/articles/speed-vs-certainty/smart-construction-learning-journey.webp",
    thumbnailAlt: "Smart construction learning journey in China",
    tags: ["China construction", "CORENET X", "digitalisation", "information latency"],
  },
];

export function isArticlePublic(article: Article) {
  return article.status === "published" && article.contentReady;
}

export const allArticles = articleRegistry;
export const articles = articleRegistry.filter((article) =>
  isArticlePublic(article),
);
