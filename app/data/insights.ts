export type InsightPhase = {
  phase: number;
  title: string;
  checklist: string[];
  outcomes: string[];
};

export type Insight = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  problemsIntro: string;
  problems: string[];
  structureIntro: string;
  structurePoints: string[];
  phases: InsightPhase[];
  whyItWorksPoints: string[];
  takeaway: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "monthly-close-checklist",
    category: "Operations",
    title: "Monthly Close Checklist",
    subtitle: "A Disciplined Approach to Reliable Financial Reporting",
    intro:
      "Most month-end closes struggle not because of effort, but because ownership, sequencing, and standards are unclear.",
    problemsIntro: "Common breakdowns include:",
    problems: [
      "Review starting before the data is ready",
      "Overlap between bookkeeping and accounting work",
      "Reactive adjustments late in the process",
      "Leadership receiving numbers they hesitate to rely on",
    ],
    structureIntro:
      "This checklist reflects a system-led approach to closing — designed to create consistency, accountability, and trust as organisations scale.",
    structurePoints: [
      "A defined owner",
      "A clear output",
      "A formal handoff",
    ],
    phases: [
      {
        phase: 1,
        title: "Data Completion",
        checklist: [
          "Bank and credit card feeds finalised",
          "Exceptions clearly identified",
          "Documentation attached or flagged",
          "Uncategorised items isolated",
        ],
        outcomes: ["No missing data", "Fewer downstream corrections"],
      },
      {
        phase: 2,
        title: "Reconciliations",
        checklist: [
          "Bank and card accounts fully reconciled",
          "Liability balances validated",
          "Reconciliation support retained",
        ],
        outcomes: ["Cash and balances can be trusted", "Issues surface early"],
      },
      {
        phase: 3,
        title: "Bookkeeping Finalisation",
        checklist: [
          "Revenue and expense classifications reviewed",
          "Suspense or clearing accounts resolved",
          "Transfers and inter-account activity validated",
          "Fixed assets updated where applicable",
        ],
        outcomes: ["Clean, review-ready books", "Efficient use of accounting expertise"],
      },
      {
        phase: 4,
        title: "Accounting Review",
        checklist: [
          "Accruals and adjustments assessed",
          "Standards applied consistently",
          "Variance movements reviewed",
          "Key decisions documented",
        ],
        outcomes: ["Consistent financials", "Reduced risk and rework"],
      },
      {
        phase: 5,
        title: "Financial Reporting",
        checklist: [
          "Final Profit & Loss and Balance Sheet prepared",
          "Key movements explained",
          "Material risks or issues highlighted",
        ],
        outcomes: [
          "Leadership understands the numbers",
          "Better decision-making conversations",
        ],
      },
      {
        phase: 6,
        title: "Close Lock & Sign-Off",
        checklist: [
          "Final review completed",
          "Issues log updated",
          "Period locked",
        ],
        outcomes: ["No retroactive changes", "True period comparability"],
      },
    ],
    whyItWorksPoints: [
      "Separates execution from judgment",
      "Creates predictable cadence",
      "Reduces dependency on individuals",
      "Scales with transaction volume",
    ],
    takeaway:
      "A strong monthly close isn't about working faster. It's about working in the right order, with clear ownership. When the close is structured correctly, finance becomes a dependable operating function — not a recurring fire drill.",
  },
];

export const getInsight = (slug: string) =>
  INSIGHTS.find((i) => i.slug === slug);
