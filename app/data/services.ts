export type Service = {
  slug: string;
  /** Optional override — if set, links from the services grid/preview go here
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
      body: "Continuous bookkeeping, classified and reconciled in real time. Your dashboard reflects what happened this morning — not six weeks ago.",
    },
    deliverables: [
      { title: "Categorized transactions", body: "Every invoice, receipt and bank line classified to the right account in your chart, every day." },
      { title: "Reconciled bank accounts", body: "Daily auto-reconciliation across all your bank, card and processor accounts." },
      { title: "Real-time dashboard", body: "A single view of revenue, spend, cash position and runway — updated continuously, never stale." },
      { title: "Weekly summary", body: "A 5-minute read from your accountant: what changed, what to watch, what needs your input." },
      { title: "Receipt automation", body: "Forward receipts to a magic email or snap from the app — matched to transactions automatically." },
      { title: "Audit-ready records", body: "Every entry, every change, every approval, traceable. Audit trails that pass scrutiny." },
    ],
    process: [
      { day: "Day 0–1", title: "Discovery", body: "A 60-minute scoping call. We meet your team, map your stack, and quote a fixed monthly fee." },
      { day: "Day 2–4", title: "Connect", body: "We integrate with your bank, payment processors, ERP and tools. No CSV exports, no manual setup." },
      { day: "Day 5–7", title: "Catch up", body: "If your books need cleaning up first, we do it. You get current, accurate records by day 7." },
      { day: "Week 2+", title: "Run", body: "You meet your senior accountant. They review weekly. The AI runs daily. You get on with the business." },
    ],
    faqs: [
      ["Will you migrate me from my current bookkeeper?", "Yes — and we won't charge extra for it. Most migrations take 5–10 working days. We handle the data transfer, chart-of-accounts cleanup and historical reconciliation."],
      ["Do I need to switch accounting software?", "No. We work natively inside QuickBooks, Xero, NetSuite or Sage. You keep your existing software; we add the operations layer on top."],
      ["What if I have messy books today?", "That's normal — about 60% of new clients arrive with some level of catch-up needed. We quote that separately and clean it up before going live."],
      ["Who actually does the work?", "A named, ACA-qualified senior accountant leads your account. They're backed by our AI engine for the mechanical work, freeing them up for the judgment work."],
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
      body: "Vendor payments processed, client invoices tracked and outstanding receivables chased — so your cash position is clear and your supplier relationships stay intact.",
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
      ["Do you handle supplier disputes?", "Yes — we manage correspondence with vendors, chase credits and resolve discrepancies so you don't have to get involved."],
      ["How do you handle overdue invoices?", "We run structured follow-up cadences at 7, 14 and 30 days past due, escalating to your team only when needed."],
      ["Can you integrate with our existing invoicing tool?", "Yes. We connect natively with Xero, QuickBooks, Sage, Stripe Billing and most invoice automation tools."],
      ["What reporting do we get?", "Weekly AP/AR summary, monthly aged debtors and creditors report, and a cash flow bridge showing expected inflows and outflows."],
    ],
  },
  {
    slug: "accounting-tax",
    name: "Accounting & Tax",
    tag: "Filings",
    icon: "⊞",
    summary:
      "Corporation tax, VAT, year-end accounts — filed cleanly and claimed completely.",
    hero: {
      title: "Compliance,",
      highlight: "without the scramble.",
      body: "Corporation tax, VAT, PAYE, R&D credits, EIS/SEIS — handled end-to-end with HMRC liaison and audit-ready records.",
    },
    deliverables: [
      { title: "Corporation tax", body: "CT600 prepared, reviewed and filed — with reliefs and credits claimed in full." },
      { title: "VAT returns", body: "MTD-compliant quarterly returns, with reverse charges, partial exemption and EU/RoW handled." },
      { title: "PAYE & CIS", body: "Monthly RTI submissions, P11Ds, P60s, CIS deductions — never late, never wrong." },
      { title: "R&D tax credits", body: "Technical narrative, costings and claim filed. We chase the rebates you didn't know you were owed." },
      { title: "Self-assessment", body: "Director and shareholder returns, equity reporting and dividend administration." },
      { title: "HMRC liaison", body: "Enquiries, audits and disputes — we handle the correspondence so you don't have to." },
    ],
    process: [
      { day: "Ongoing", title: "Continuous compliance", body: "Filings tracked on a rolling calendar; you'll never get a surprise letter." },
      { day: "Quarterly", title: "VAT & PAYE", body: "Returns prepared from real-time books, reviewed by a senior accountant, filed with HMRC." },
      { day: "Annually", title: "Year-end & CT", body: "Statutory accounts and CT600 filed in tandem, with R&D and EIS administered in parallel." },
      { day: "On demand", title: "Tax advice", body: "Same-day answers on transactions, share schemes and structuring decisions." },
    ],
    faqs: [
      ["Do you handle R&D claims in-house?", "Yes. Senior accountants draft technical narratives and costings. No third-party agents, no contingent fees."],
      ["What if I'm under HMRC enquiry?", "We've handled hundreds. We respond on your behalf, prepare the documentation, and represent you in correspondence."],
      ["Can you backdate VAT registration?", "Sometimes — depends on turnover and timing. Talk to us; we'll look at your situation and advise."],
      ["Is iXBRL filing included?", "Yes. Statutory accounts are tagged and filed to Companies House and HMRC in iXBRL format as part of year-end."],
    ],
  },
  {
    slug: "financial-analysis",
    name: "Financial Analysis",
    tag: "Reporting",
    icon: "╱",
    summary: "Management accounts and KPI packs that actually drive decisions.",
    hero: {
      title: "Decisions,",
      highlight: "not just data.",
      body: "Live dashboards for cash, burn, runway and unit economics — so the answer to \"can we afford this?\" comes in seconds, not weeks.",
    },
    deliverables: [
      { title: "Monthly management accounts", body: "P&L, balance sheet, cashflow and commentary delivered by day 3 of every month." },
      { title: "KPI pack", body: "MRR, ARR, churn, CAC, LTV, gross margin — every number a board would ask for." },
      { title: "Cash flow forecasts", body: "Rolling 13-week and annual cashflow models, refreshed weekly." },
      { title: "Scenario planning", body: "What if we hire 3 more? What if revenue dips 20%? Plug-and-play scenarios on demand." },
      { title: "Board appendix", body: "Variance analysis, unit economics, cohort retention — investor-grade detail." },
      { title: "Custom dashboards", body: "Live views built around the metrics you care about, embedded in your portal." },
    ],
    process: [
      { day: "Week 1", title: "Map", body: "We map your KPI tree, define metric ownership, and agree the reporting cadence." },
      { day: "Week 2", title: "Wire", body: "We connect the source data — accounting, billing, CRM — and stand up dashboards." },
      { day: "Monthly", title: "Pack", body: "Management pack delivered by day 3; we review the commentary with you live." },
      { day: "Quarterly", title: "Plan", body: "Forecast refresh, scenario sessions and a board prep working call." },
    ],
    faqs: [
      ["What tools do you use for reporting?", "We work in your stack: QuickBooks/Xero data, surfaced through Looker, Pigment or a custom React portal — whatever fits."],
      ["Can you run our investor updates?", "Yes. We draft the financial section every month; you add the narrative."],
      ["How do you handle multi-entity?", "Each entity reports separately and consolidates monthly. We handle inter-company, FX and eliminations."],
      ["Do you replace our FP&A team?", "We complement it. For Seed–B we often are it; for Series C+ we partner with your in-house team."],
    ],
  },
  {
    slug: "cfo-advisory",
    name: "CFO Advisory",
    tag: "Strategic",
    icon: "◇",
    summary:
      "A fractional CFO for board meetings, fundraising and unit economics.",
    hero: {
      title: "Senior finance,",
      highlight: "on demand.",
      body: "Fractional CFO support for the moments that matter — board prep, fundraising, scenario modelling, unit economics. Senior expertise without the senior overhead.",
    },
    deliverables: [
      { title: "Board pack", body: "Quarterly board packs prepared, reviewed and presented alongside your founders." },
      { title: "Fundraising support", body: "Forecasts, cap-table modelling, data-room curation and investor diligence." },
      { title: "Unit economics", body: "Cohort analysis, contribution margin, payback periods and pricing strategy." },
      { title: "Strategic forecasts", body: "Annual budget, quarterly reforecasts and scenario decks." },
      { title: "Capital strategy", body: "Debt vs equity, runway extension and treasury planning." },
      { title: "Operating reviews", body: "Monthly operating reviews with founders to drive the business off the numbers." },
    ],
    process: [
      { day: "Onboarding", title: "Diagnostic", body: "We audit the financial setup, identify gaps, and prioritise the first 90 days." },
      { day: "Monthly", title: "Operating review", body: "A 90-minute working session with founders on the numbers and the next moves." },
      { day: "Quarterly", title: "Board", body: "Pack drafted, rehearsed and presented alongside you." },
      { day: "Ad hoc", title: "On call", body: "Same-day support during raises, M&A or critical decisions." },
    ],
    faqs: [
      ["Is this a real CFO or an analyst?", "Real. Each CFO is ACA / ACCA / CFA qualified with 10+ years of operating finance experience."],
      ["How many hours per month?", "Tiers from 8 to 40 hours/month. Series A–B typically take 16; Series C+ takes 32 or more."],
      ["Can we use you just for a raise?", "Yes — we run discrete fundraising engagements (8–14 weeks) with a separate scope and price."],
      ["Do you replace our existing FD?", "We work alongside in-house finance leads, augmenting capacity. Or we operate solo if you don't have one yet."],
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
