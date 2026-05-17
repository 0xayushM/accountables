export type ScopeItem = {
  title: string;
  body?: string;
  bullets?: string[];
  subSections?: { heading: string; bullets: string[] }[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  stat: string;
  statLabel: string;
  summary: string;
  body: string;
  stats: [string, string][];
  context?: string;
  role?: string;
  scopeItems?: ScopeItem[];
  resultBullets?: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "furniture-manufacturing-group",
    name: "Furniture Manufacturing Group",
    industry: "Bed Manufacturing & Retail · UK Conglomerate",
    stat: "3 months",
    statLabel: "backlog cleared",
    summary: "2018 books reconstructed from scratch, 20+ subsidiaries brought audit-ready in a single quarter.",
    body: "Accountables became associated with this prominent UK group in early 2020, at a critical juncture. The client faced a significant operational and compliance hurdle: an extensive backlog of financial books from 2018 that needed urgent attention. This challenge was exacerbated by the absence of a proper handover from previous accountants and a lack of structured financial data from the management.",
    stats: [
      ["3mo", "backlog cleared"],
      ["20+", "subsidiaries"],
      ["£40Mn+", "annual turnover"],
      ["100%", "audit-ready"],
    ],
    context:
      "Accountables became associated with this prominent UK group in early 2020, at a critical juncture. The client faced a significant operational and compliance hurdle: an extensive backlog of financial books from 2018 that needed urgent attention. This challenge was exacerbated by the absence of a proper handover from previous accountants and a lack of structured financial data from the management. With the company's first-year audit approaching, there was an immediate and pressing need for rapid financial reconstruction and the establishment of robust, auditable processes from the ground up.",
    role:
      "Accountables was engaged not just to resolve the immediate crisis but to establish a sustainable financial infrastructure. We quickly transitioned into the role of their Financial Controller, taking full ownership of financial execution and strategic oversight across their 20+ subsidiary companies.",
    scopeItems: [
      {
        title: "Rapid Backlog Clearance",
        body: "Accountables successfully prepared the entire overdue backlog of books from 2018 in a record turnaround time of just three months, ensuring the client was audit-ready.",
      },
      {
        title: "Process Establishment",
        body: "In the absence of any proper handover or structured data, Accountables meticulously established fresh financial processes from the bottom up, creating a robust and compliant accounting framework.",
      },
      {
        title: "Multi-portal Revenue Reconciliation",
        body: "We implemented sophisticated reconciliation processes for revenue generated through various online portals, including Amazon, eBay, and Wowcher, and across diverse payment gateways such as Klarna, PayPal, Stripe, and ClearPay. This ensured accurate and timely revenue recognition.",
      },
      {
        title: "Comprehensive Management Accounts",
        body: "Our team took over all aspects of bookkeeping, payroll, and period-end accounting. This included meticulous reconciliation of local and imported purchases, providing the client with periodical, insightful finance and accounts reports essential for strategic decision-making.",
      },
      {
        title: "Full Statutory Compliance Management",
        body: "Accountables assumed responsibility for all statutory compliances for the group's 20+ subsidiary companies, covering:",
        bullets: [
          "Preparation and filing of VAT returns.",
          "Preparation and filing of Annual Corporate Tax returns.",
          "Filing of Annual Accounts with Companies House.",
          "Proactive dealing with notices or enquiries from Tax Authorities or Companies House.",
          "Strategic Tax Planning advisory to optimise the group's tax position.",
          "Company setup and all related incorporation compliances for new or acquired businesses.",
        ],
      },
    ],
    resultBullets: [
      "Timely Compliance & Audit Readiness: The extensive backlog was cleared, and robust processes were established, ensuring the group was fully compliant for its first audit and all subsequent statutory requirements.",
      "Streamlined Financial Operations: Complex multi-portal revenue streams and purchase reconciliations are now efficiently managed, providing clear, real-time financial oversight across all entities.",
      "Strategic Growth Enablement: By offloading the financial burden, the group's management can now fully concentrate on their core business expansion, including vertical and horizontal integration strategies.",
      "Reduced Administrative Burden: The client experienced a substantial reduction in the administrative load associated with financial management, freeing up internal resources for higher-value activities.",
    ],
  },
  {
    slug: "global-skateboard-apparel",
    name: "Global Skateboard & Apparel Seller",
    industry: "E-commerce & Wholesale · US Market",
    stat: "$43Mn",
    statLabel: "annual turnover",
    summary: "Multi-platform reconciliation, end-to-end US compliance, and full AR/AP management for a global e-commerce leader.",
    body: "Since 2020, this high-volume global e-commerce and wholesale client required a sophisticated financial partner capable of navigating complex international cash flows, multi-platform sales reconciliation, and rigorous US-specific compliance.",
    stats: [
      ["$43Mn", "annual turnover"],
      ["7+", "platforms"],
      ["Multi-state", "US compliance"],
      ["100%", "audit-ready"],
    ],
    context:
      "Since 2020, this high-volume global e-commerce and wholesale client required a sophisticated financial partner capable of navigating complex international cash flows, multi-platform sales reconciliation, and rigorous US-specific compliance. The client faced challenges in high-volume transaction reconciliation, intricate AR/AP management, comprehensive US compliance across multiple states, ongoing audit preparedness, and the absence of structured cash flow projections and annual budgeting.",
    role:
      "Accountables operates as an integrated, specialized accounting department for the client, focusing on AR/AP Management, Global E-commerce Reconciliation, and Comprehensive US Compliance.",
    scopeItems: [
      {
        title: "Revenue and Accounts Receivables Management",
        bullets: [
          "Accurate recording of invoices and meticulous revenue reconciliation from reports extracted through platforms like Exenta and Shopify.",
          "Comprehensive customer payment reconciliation and proactive AR ageing and management to optimise cash flow and minimise bad debt.",
        ],
      },
      {
        title: "Expenses and Accounts Payables Management",
        bullets: [
          "Thorough expense recording and reconciliation in QuickBooks, ensuring all expenditures are accurately categorised and accounted for.",
          "Efficient handling of payments, including issuing checks, ACHs, and EFTs, alongside preparing detailed vendor reconciliations and managing subcontractor payments.",
          "Regular communication with vendors to resolve discrepancies and proactive AP ageing and management for better financial control.",
        ],
      },
      {
        title: "Monthly Management Accounts",
        bullets: [
          "All reconciliations, including comprehensive bookkeeping and period-end accounting, are performed diligently.",
          "Periodical finance and accounts reports are consistently shared with the client, providing real-time insights for informed decision-making.",
        ],
      },
      {
        title: "Reviewing Other Financial Items",
        bullets: [
          "Maintaining a precise Fixed Asset Register using specialised Asset Tiger software.",
          "Preparing prepaid expense schedules and accurately amortising expenses over their useful life.",
          "Thorough review of accrued liabilities and expenses during month-end close to ensure financial accuracy.",
        ],
      },
      {
        title: "Cash Flow Projections and Budget",
        bullets: [
          "Regular preparation of detailed cash forecasts to support liquidity management and strategic operational planning.",
          "Preparation of comprehensive annual budgets, enabling the client to set financial targets and allocate resources effectively.",
        ],
      },
      {
        title: "Yearly Audit and Multiple Client & Vendor Audits",
        bullets: [
          "Expert preparation of data required for audits in the specific format requested by auditors.",
          "Proactive assistance with audit queries, ensuring smooth and successful audit outcomes with minimal disruption.",
        ],
      },
      {
        title: "Compliances",
        bullets: [
          "Meticulous management of the US Department of Commerce survey.",
          "Handling respective state compliances with respect to franchise tax, Sales and Use tax, and business property statements, among others.",
        ],
      },
    ],
    resultBullets: [
      "Enhanced Financial Clarity & Control: Streamlined revenue and expense reconciliation across complex multi-platform operations provided a clear and accurate financial picture, enabling better decision-making.",
      "Optimised Cash Flow & Strategic Planning: Proactive AR/AP management, regular cash flow projections, and annual budgeting significantly improved liquidity, financial stability, and strategic foresight.",
      "Guaranteed Compliance: All US-specific and general statutory compliance requirements are meticulously met, mitigating risks, avoiding penalties, and ensuring peace of mind.",
      "Seamless Audit Processes: Expert preparation and support during yearly, client, and vendor audits minimised disruption and ensured successful outcomes, reinforcing trust with stakeholders.",
      "Operational Efficiency: By outsourcing complex financial tasks, the client's internal team can now focus on core business growth, product development, and market expansion.",
    ],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
