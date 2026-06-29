// Current open positions at Accountables.
// Distinct from the career-path roles on the careers page: these are the
// roles actively open for hiring right now.

export type JdSection = { heading: string; bullets: string[] };
export type WhyJoinItem = { title: string; body: string };

export type Opening = {
  slug: string;
  title: string;
  location: string;
  type: string;
  qualification: string;
  exposure: string;
  /**
   * External application link (e.g. a Google Form). When set, "Apply Now"
   * opens this URL in a new tab instead of the in-house application form.
   * Sourced from a NEXT_PUBLIC_ env var so it can be set in Vercel.
   */
  applyUrl?: string;
  /** Short summary shown on the opening card. */
  summary: string;
  /** "You'll Be Responsible For" — shown on the card. */
  responsibilities: string[];
  /** "Skills Required" — shown on the card. */
  skills: string[];
  /** Full job description (sub page). */
  intro: string[];
  workingOn: JdSection[];
  lookingFor: JdSection[];
  thriveList: string[];
  whyJoin: WhyJoinItem[];
};

export const OPENINGS: Opening[] = [
  {
    slug: "financial-controller-financial-reporting",
    title: "Financial Controller – Financial Reporting",
    location: "New Delhi (Hybrid)",
    type: "Full-Time",
    qualification: "CA",
    exposure: "Exposure to UK, US & Indian Clients",
    applyUrl: process.env.NEXT_PUBLIC_APPLY_URL_FINANCIAL_CONTROLLER,
    summary:
      "Own financial reporting and month-end close, lead a delivery team, and partner directly with international clients across the UK, US and India.",
    responsibilities: [
      "Financial reporting and month-end close",
      "Client accounting oversight",
      "Team leadership and review",
      "Budgeting and forecasting",
      "Process improvements and automation",
      "Strategic finance support",
    ],
    skills: [
      "Strong accounting background",
      "Advanced Excel",
      "QuickBooks Online",
      "Client-facing communication",
      "Team management experience",
    ],
    intro: [
      "This is more than a traditional accounting role.",
      "You'll work closely with businesses to deliver accurate reporting, maintain strong financial controls and support finance operations that help leadership teams make informed decisions.",
      "The role provides exposure across financial reporting, management accounting, operational finance, budgeting, forecasting and process improvement initiatives, while working directly with international clients and stakeholders.",
    ],
    workingOn: [
      {
        heading: "Financial Reporting & Accounting",
        bullets: [
          "Lead month-end accounting and reporting activities",
          "Review reconciliations, accruals and accounting workpapers",
          "Prepare management accounts and reporting packs",
          "Maintain accurate and audit-ready financial records",
          "Support year-end reporting and financial statement preparation",
        ],
      },
      {
        heading: "Finance Operations",
        bullets: [
          "Support day-to-day finance operations across multiple clients",
          "Improve accounting workflows and operational processes",
          "Strengthen controls, documentation and reporting structures",
          "Help build scalable systems that support business growth",
        ],
      },
      {
        heading: "Planning & Analysis",
        bullets: [
          "Support budgeting and forecasting initiatives",
          "Assist with cash flow monitoring and reporting",
          "Perform variance analysis and financial reviews",
          "Contribute to business performance reporting and insights",
        ],
      },
      {
        heading: "Client & Stakeholder Coordination",
        bullets: [
          "Work directly with international clients and finance leadership teams",
          "Coordinate with auditors, advisors and external stakeholders",
          "Support finance-related projects and operational initiatives",
          "Contribute to strategic discussions around reporting and finance visibility",
        ],
      },
      {
        heading: "Team Development",
        bullets: [
          "Review work delivered by junior team members",
          "Support knowledge sharing and process improvements",
          "Contribute to a culture of accountability, ownership and continuous learning",
        ],
      },
    ],
    lookingFor: [
      {
        heading: "Qualifications",
        bullets: [
          "Chartered accountant",
          "Strong accounting and financial reporting foundation",
          "Advanced Excel proficiency",
        ],
      },
      {
        heading: "Experience",
        bullets: [
          "5 years of experience in accounting or finance",
          "Experience working with cloud-based accounting platforms",
          "Strong analytical and communication skills",
          "Ability to manage multiple priorities and deadlines",
          "Experience working in client-facing environments is an advantage",
        ],
      },
      {
        heading: "Preferred Exposure",
        bullets: [
          "QuickBooks Online",
          "Xero",
          "Dext",
          "Hubdoc",
          "SaaS businesses",
          "Ecommerce businesses",
          "Project-based business models",
        ],
      },
    ],
    thriveList: [
      "Enjoy bringing structure to complex finance environments",
      "Take ownership of your work and outcomes",
      "Are comfortable working directly with clients and stakeholders",
      "Continuously look for better ways of working",
      "Believe finance operations can be improved through better systems, workflows and technology",
    ],
    whyJoin: [
      {
        title: "International Exposure",
        body: "Work with businesses across the UK, US and India while gaining experience across different industries and finance environments.",
      },
      {
        title: "Direct Client Interaction",
        body: "Partner with founders, CFOs and business leaders to support reporting, operational finance and business visibility initiatives.",
      },
      {
        title: "Career Development",
        body: "Gain exposure across accounting, reporting, finance operations, management accounting, budgeting, forecasting and strategic finance support.",
      },
      {
        title: "Technology-Enabled Environment",
        body: "Work alongside modern systems and workflows powered through Accountables One, our connected finance operations platform.",
      },
      {
        title: "Ownership & Growth",
        body: "Join a team built around accountability, continuous improvement, collaboration and long-term professional development.",
      },
    ],
  },
];

export function getOpening(slug: string): Opening | undefined {
  return OPENINGS.find((o) => o.slug === slug);
}
