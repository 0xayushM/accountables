export type Service = {
  slug: string;
  /** Optional override - if set, links from the services grid/preview go here
   *  instead of /services/[slug] and no detail page is generated. */
  externalHref?: string;
  name: string;
  tag: string;
  icon: string;
  summary: string;
  hero: { title: string; highlight: string; body: string };
  deliverables: { title: string; body: string }[];
  process: { day: string; title: string; body: string }[];
  faqs: [string, string][];
  requirements?: string[];
  oneFeatures?: string[];
  idealFor?: string[];
  closingStatement?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    tag: "Daily",
    icon: "∑",
    summary:
      "Real-time, continuously-classified books that always reflect today.",
    hero: {
      title: "Books that",
      highlight: "never lag your business.",
      body: "Continuous bookkeeping, classified and reconciled in real time. Your dashboard reflects what happened this morning - not six weeks ago.",
    },
    deliverables: [
      { title: "Categorized transactions", body: "Every invoice, receipt and bank line classified to the right account in your chart, every day." },
      { title: "Reconciled bank accounts", body: "Daily auto-reconciliation across all your bank, card and processor accounts." },
      { title: "Real-time dashboard", body: "A single view of revenue, spend, cash position and runway - updated continuously, never stale." },
      { title: "Weekly summary", body: "A 5-minute read from your accountant: what changed, what to watch, what needs your input." },
      { title: "Receipt automation", body: "Forward receipts to a magic email or snap from the app - matched to transactions automatically." },
      { title: "Audit-ready records", body: "Every entry, every change, every approval, traceable. Audit trails that pass scrutiny." },
    ],
    process: [
      { day: "Day 0–1", title: "Discovery", body: "A 60-minute scoping call. We meet your team, map your stack, and quote a fixed monthly fee." },
      { day: "Day 2–4", title: "Connect", body: "We integrate with your bank, payment processors, ERP and tools. No CSV exports, no manual setup." },
      { day: "Day 5–7", title: "Catch up", body: "If your books need cleaning up first, we do it. You get current, accurate records by day 7." },
      { day: "Week 2+", title: "Run", body: "You meet your senior accountant. They review weekly. The AI runs daily. You get on with the business." },
    ],
    faqs: [
      ["Will you migrate me from my current bookkeeper?", "Yes. Accountables supports onboarding and migration from existing bookkeeping or accounting environments, including historical reconciliation reviews, reporting transitions and operational handovers where required."],
      ["Do I need to switch accounting software?", "No. Accountables works alongside existing accounting environments including Xero and QuickBooks, while integrating workflow coordination, reporting visibility and AI-assisted operational workflows through Accountables One."],
      ["What if my books need cleanup or catch-up work?", "Many businesses begin with some level of cleanup, reconciliation or reporting reorganization. Accountables reviews the existing finance environment during onboarding and structures catch-up work based on operational requirements and reporting timelines."],
      ["How does communication and coordination work?", "Clients communicate directly with their Accountable Manager through structured workflows designed around reporting visibility, operational coordination and ongoing finance support. Accountables One centralizes communication, task tracking, reporting updates and workflow coordination within one connected operational environment."],
      ["Who manages our finance operations?", "Each business works with an Accountable Manager supported by a broader finance operations team across reporting, compliance and coordination workflows. Accountables One supports the environment through connected workflows, centralized visibility and AI-assisted transaction categorization designed to reduce manual friction across ongoing finance operations."],
    ],
  },
  {
    slug: "accounts-payable-receivable",
    name: "Accounts Payable & Receivable",
    tag: "Cash Flow",
    icon: "⊟",
    summary:
      "Vendor payments, receivables tracking and ongoing visibility into incoming and outgoing cash movement.",
    hero: {
      title: "Cash flow,",
      highlight: "tracked and controlled.",
      body: "Vendor payments processed, client invoices tracked and outstanding receivables chased - so your cash position is clear and your supplier relationships stay intact.",
    },
    deliverables: [
      { title: "AP management", body: "Vendor invoice processing, payment scheduling, approval workflows and supplier statement reconciliation." },
      { title: "AR tracking", body: "Client invoicing, outstanding receivables tracking and payment matching across all accounts." },
      { title: "Invoicing coordination", body: "Invoices issued on time, matched to purchase orders and followed up consistently." },
      { title: "Collections coordination", body: "Proactive follow-up on overdue receivables, dispute resolution and aged debt reporting." },
      { title: "Payment workflows", body: "Structured payment runs, bank transfers coordinated and cash outflow visibility maintained." },
      { title: "Cash flow reporting", body: "Ongoing visibility into receivables, payables and net cash position across your accounts." },
    ],
    process: [
      { day: "Week 1", title: "Map", body: "We map your vendors, clients, payment terms and existing AP/AR workflows." },
      { day: "Week 2", title: "Connect", body: "Integrations with your accounting software, payment processor and invoicing tools." },
      { day: "Ongoing", title: "Run", body: "Weekly payment runs, daily AR monitoring, monthly aged debtors and creditors report." },
      { day: "Monthly", title: "Review", body: "AP/AR summary reviewed with your accountant; overdue items escalated and resolved." },
    ],
    faqs: [
      ["How does Accountables manage AR/AP workflows?", "Accountables supports receivables, payables and finance coordination workflows through structured operational processes designed around visibility, approvals and ongoing cash flow coordination."],
      ["Will we have visibility into outstanding receivables and payables?", "Yes. Accountables One centralizes receivables visibility, payable tracking, workflow updates and finance coordination to support ongoing operational visibility across finance activities."],
      ["Can Accountables work alongside our existing invoicing and accounting setup?", "Yes. Accountables works alongside existing accounting and invoicing environments including Xero and QuickBooks while supporting finance coordination workflows through Accountables One."],
      ["How are approvals and finance coordination managed?", "Approval workflows, finance communication and operational coordination are managed through centralized workflows designed around ongoing visibility and execution tracking."],
      ["What reporting and visibility do we receive?", "Depending on operational requirements, reporting may include receivables visibility, payable tracking, cash flow coordination, aged balances and ongoing operational finance reporting."],
    ],
  },
  {
    slug: "accounting-tax",
    name: "Accounting & Tax",
    tag: "Filings",
    icon: "⊞",
    summary:
      "Corporation tax, VAT, year-end accounts - filed cleanly and claimed completely.",
    hero: {
      title: "Compliance,",
      highlight: "without the scramble.",
      body: "UK compliance including corporation tax, VAT, PAYE, R&D credits and EIS/SEIS — handled end-to-end with HMRC liaison and audit-ready records. This service is structured specifically for businesses operating within the United Kingdom.",
    },
    deliverables: [
      { title: "Corporation tax", body: "CT600 prepared, reviewed and filed - with reliefs and credits claimed in full." },
      { title: "VAT returns", body: "MTD-compliant quarterly returns, with reverse charges, partial exemption and EU/RoW handled." },
      { title: "PAYE & CIS", body: "Monthly RTI submissions, P11Ds, P60s, CIS deductions - never late, never wrong." },
      { title: "R&D tax credits", body: "Technical narrative, costings and claim filed. We chase the rebates you didn't know you were owed." },
      { title: "Self-assessment", body: "Director and shareholder returns, equity reporting and dividend administration." },
      { title: "HMRC liaison", body: "Enquiries, audits and disputes - we handle the correspondence so you don't have to." },
    ],
    process: [
      { day: "Ongoing", title: "Continuous compliance", body: "Filings tracked on a rolling calendar; you'll never get a surprise letter." },
      { day: "Quarterly", title: "VAT & PAYE", body: "Returns prepared from real-time books, reviewed by a senior accountant, filed with HMRC." },
      { day: "Annually", title: "Year-end & CT", body: "Statutory accounts and CT600 filed in tandem, with R&D and EIS administered in parallel." },
      { day: "On demand", title: "Tax advice", body: "Same-day answers on transactions, share schemes and structuring decisions." },
    ],
    faqs: [
      ["How does Accountables manage payroll and compliance workflows?", "Accountables supports payroll, VAT, reporting and compliance coordination through structured workflows designed around visibility, timelines and ongoing operational support."],
      ["How are deadlines and filings tracked?", "Accountables One centralizes compliance timelines, reporting tasks and workflow coordination within one connected operational environment designed around ongoing visibility and execution tracking."],
      ["Can Accountables support businesses operating across multiple regions?", "Yes. Accountables supports businesses operating across the United Kingdom, United States and India, including businesses managing international finance and compliance environments."],
      ["Will we have visibility into ongoing compliance activities?", "Yes. Reporting updates, workflow progress, communication and finance coordination are centralized through Accountables One to provide ongoing operational visibility."],
      ["Who coordinates ongoing finance and compliance activities?", "Each business works with an Accountable Manager supported by a broader finance operations team across payroll, reporting, compliance and coordination workflows."],
    ],
  },
  {
    slug: "financial-analysis",
    externalHref: "/services/cfo-advisory",
    name: "Financial Analysis",
    tag: "Reporting",
    icon: "╱",
    summary: "Management accounts and KPI packs that actually drive decisions.",
    hero: { title: "", highlight: ".", body: "" },
    deliverables: [],
    process: [],
    faqs: [],
  },
  {
    slug: "cfo-advisory",
    name: "CFO & FP&A",
    tag: "Leadership",
    icon: "◇",
    summary: "Structured finance leadership across reporting, forecasting and operational visibility for growing businesses.",
    hero: {
      title: "Finance leadership,",
      highlight: "without building a full in-house team.",
      body: "Structured finance leadership across reporting, forecasting, operational visibility and financial decision-making — designed for growing businesses that need more than bookkeeping, but do not yet require a full internal finance department.",
    },
    requirements: [
      "Financial visibility",
      "Operational finance coordination",
      "Budgeting & forecasting",
      "Management reporting",
      "Cash flow planning",
      "Controller oversight",
      "Strategic finance support",
    ],
    deliverables: [
      { title: "Management reporting", body: "Structured monthly reporting covering P&L, balance sheet, cash flow visibility and operational finance insights." },
      { title: "Forecasting & planning", body: "Rolling forecasts, budgeting support and forward-looking financial visibility aligned with business growth requirements." },
      { title: "KPI & performance visibility", body: "Operational and financial KPI visibility designed around management reporting, decision-making and ongoing business performance tracking." },
      { title: "Cash flow coordination", body: "Cash flow monitoring, working capital visibility and finance coordination across ongoing operational activities." },
      { title: "Controller oversight", body: "Support across reporting structures, reconciliations, finance controls, operational coordination and ongoing finance execution workflows." },
      { title: "Reporting dashboards & visibility", body: "Centralized finance visibility through Accountables One, including reporting environments, workflow tracking and operational coordination." },
    ],
    process: [
      { day: "Onboarding", title: "Finance diagnostic", body: "We review the existing finance environment, reporting structures and operational workflows to identify visibility gaps, coordination requirements and ongoing finance priorities." },
      { day: "Monthly", title: "Reporting & operational reviews", body: "Structured monthly reviews covering management reporting, cash flow visibility, forecasting, finance operations and ongoing business performance discussions." },
      { day: "Ongoing", title: "CFO & controller coordination", body: "Ongoing finance leadership and controller oversight across reporting workflows, operational finance coordination, approvals, compliance timelines and execution visibility." },
      { day: "As required", title: "Strategic finance support", body: "Support across budgeting, forecasting, financial modeling, operational planning and business-critical finance decisions as requirements evolve." },
    ],
    oneFeatures: [
      "Reporting dashboards",
      "Forecast visibility",
      "Workflow coordination",
      "Finance communication",
      "Task tracking",
      "Approval visibility",
      "KPI monitoring",
      "AI-assisted transaction categorization",
    ],
    idealFor: [
      "Founder-led businesses",
      "Growth-stage companies",
      "Ecommerce & Shopify brands",
      "Agencies & service businesses",
      "International businesses",
      "Businesses scaling beyond owner-managed finance",
    ],
    faqs: [
      ["Who supports Fractional CFO engagements?", "Fractional CFO engagements are supported by ACA, ACCA and CA qualified finance professionals with experience across operating finance environments, reporting structures, finance operations and business decision-making support."],
      ["What areas does finance leadership support typically cover?", "Support may include financial planning & analysis, budgeting, forecasting, management reporting, controller oversight, cash flow visibility, operational finance coordination and strategic finance support aligned with business growth requirements."],
      ["Can Accountables work alongside our existing finance team?", "Yes. Accountables can operate alongside internal finance teams by supporting finance leadership, controller functions, reporting structures, operational coordination and ongoing financial visibility."],
      ["How involved is the finance leadership team in day-to-day operations?", "The level of involvement depends on operational requirements, reporting complexity and the stage of the business. Support structures are designed around ongoing coordination, visibility and finance decision-making requirements."],
      ["How does communication and reporting coordination work?", "Clients communicate directly with their Accountable Manager and finance leadership team through structured workflows designed around reporting visibility, operational coordination and ongoing finance support. Accountables One centralizes communication, reporting updates and workflow coordination within one connected operational environment."],
    ],
    closingStatement: "Structured finance support for businesses that need more clarity, stronger reporting and better operational visibility — without building a large in-house finance department.",
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
