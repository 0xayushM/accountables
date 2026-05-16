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
    slug: "ai-close",
    externalHref: "/ai",
    name: "AI Close",
    tag: "Beta",
    icon: "◐",
    summary: "Autonomous month-end closing in hours, not weeks.",
    hero: {
      title: "The first",
      highlight: "autonomous month-end.",
      body: "AI Close ingests every transaction, classifies it with audit-ready confidence, reconciles in parallel, and surfaces only the calls that need a human. Month-end in minutes, not weeks.",
    },
    deliverables: [
      { title: "Continuous classification", body: "Every line classified the moment it lands, with a confidence score and an audit trail back to source." },
      { title: "Parallel reconciliation", body: "Bank, card, processor and inter-company — all reconciled at once, with discrepancies surfaced in plain English." },
      { title: "Drafted financials", body: "P&L, Balance Sheet, Cashflow and KPI pack drafted automatically, refreshed continuously." },
      { title: "Anomaly detection", body: "Spend, revenue and unit-economics drift surfaced the day it happens — not at month-end review." },
      { title: "Human review queue", body: "Senior accountants get a clean queue of judgment calls. Sign-off in hours, not days." },
      { title: "Full audit trail", body: "Every classification, every reconciliation, every override — recorded, timestamped, and traceable." },
    ],
    process: [
      { day: "Step 01", title: "Ingest", body: "Two-way sync with QuickBooks, Xero, NetSuite, Stripe, Brex, Mercury, Plaid and 40+ more." },
      { day: "Step 02", title: "Classify", body: "Our finance-tuned model categorizes every line with a confidence score; below 95% goes to a human." },
      { day: "Step 03", title: "Reconcile", body: "Six accounts, twelve currencies, parallel reconciliation. Discrepancies surface with evidence." },
      { day: "Step 04", title: "Report & review", body: "Statements drafted automatically; your senior accountant reviews and signs off." },
    ],
    faqs: [
      ["Is my data secure?", "Yes. SOC 2 Type II certified, AES-256 at rest, TLS 1.3 in transit, single-tenant isolation. We never train shared models on client data."],
      ["What happens when the AI is uncertain?", "Anything below 95% confidence is routed to your dedicated senior accountant. The AI never auto-posts entries it isn't sure about."],
      ["Will this replace my accountant?", "No — and we wouldn't want it to. AI Close handles the mechanical 80%; your accountant owns the judgment 20%."],
      ["When does the beta open?", "Rolling onboarding through 2026. We onboard roughly 8 new teams per week, prioritising Series A–C and e-commerce."],
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
  {
    slug: "year-end-accounts",
    name: "Year-end Accounts",
    tag: "Statutory",
    icon: "⌧",
    summary:
      "Filed accounts, iXBRL, Companies House — handled in the background.",
    hero: {
      title: "Year-end,",
      highlight: "handled while you sleep.",
      body: "Statutory accounts, iXBRL tagging, Companies House and HMRC filings — drafted, reviewed and submitted on time. No drama.",
    },
    deliverables: [
      { title: "Statutory accounts", body: "Drafted to FRS 102 (or US GAAP for US subs) with full disclosures and director's report." },
      { title: "iXBRL tagging", body: "Tagged to the latest taxonomy, validated and ready for HMRC submission." },
      { title: "Companies House filing", body: "Confirmation statements, directors and PSC registers maintained alongside year-end." },
      { title: "CT600 in tandem", body: "Corporation tax computation and return prepared and filed in the same cycle." },
      { title: "Director's report", body: "Narrative, going-concern statement and strategic report — drafted, reviewed, signed." },
      { title: "Audit-ready", body: "If you need an audit, we hand over a clean, traceable file. If you don't, you're audit-ready anyway." },
    ],
    process: [
      { day: "Month -2", title: "Plan", body: "Year-end calendar shared, working papers requested, audit considerations flagged." },
      { day: "Month -1", title: "Draft", body: "Trial balance frozen, draft accounts prepared, journals proposed." },
      { day: "Month 0", title: "Review", body: "Accounts reviewed with you, disclosures finalised, signed off." },
      { day: "Month +1", title: "File", body: "Submitted to Companies House and HMRC; CT paid on time." },
    ],
    faqs: [
      ["How early should we engage you for year-end?", "Ideally 8 weeks before year-end. For existing clients it's a non-event — we run continuous close, so year-end is just a sign-off."],
      ["Do you handle FRS 102 vs IFRS?", "Yes. UK SMEs typically file FRS 102 (Section 1A). Larger or group entities may use FRS 101 or IFRS — we'll advise on the right framework."],
      ["What if we need an audit?", "We don't audit (independence), but we partner with several registered auditors and hand over a clean audit pack."],
      ["Are dormant accounts cheaper?", "Yes — flat fee per dormant entity, much less than active accounts. Tell us about your group structure."],
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    tag: "Multi-channel",
    icon: "◰",
    summary:
      "Shopify, Amazon, Stripe and Square — reconciled correctly across every channel.",
    hero: {
      title: "E-commerce books,",
      highlight: "reconciled properly.",
      body: "Settlement files untangled, COGS accrued correctly, marketplace fees tracked. Built for brands selling across Shopify, Amazon, Stripe and Square.",
    },
    deliverables: [
      { title: "Settlement reconciliation", body: "Stripe, Shopify Payments, Amazon, PayPal — fees, refunds, chargebacks reconciled to the penny." },
      { title: "Multi-channel COGS", body: "Inventory accruals, gross margin by channel, returns properly costed." },
      { title: "Inventory accounting", body: "FIFO/weighted-average, landed costs, dead-stock identification and write-downs." },
      { title: "Marketplace fee tracking", body: "Amazon, Etsy and platform fees broken out so you see true contribution margin." },
      { title: "FX handling", body: "Multi-currency revenue translated correctly, hedging gains/losses recorded." },
      { title: "Sales tax / VAT", body: "Multi-jurisdiction sales tax (US) and VAT MOSS / OSS handled cleanly." },
    ],
    process: [
      { day: "Week 1", title: "Map channels", body: "Every storefront, payment processor and 3PL mapped to your chart of accounts." },
      { day: "Week 2", title: "Connect", body: "Native integrations to Shopify, Amazon, Stripe, Square, A2X and ShipBob." },
      { day: "Week 3", title: "Restate", body: "Trailing 12 months restated correctly so you have a clean baseline." },
      { day: "Ongoing", title: "Run", body: "Daily settlement reconciliation, weekly contribution margin reports." },
    ],
    faqs: [
      ["Do you handle Amazon FBA inventory?", "Yes. FBA fees, FBM, inbound shipping, removal orders — all accounted correctly with landed cost."],
      ["Can you back-fix our books?", "Usually yes. We've restated brands going back 36 months with full reconciliation."],
      ["What about international VAT?", "We handle UK, EU OSS, and most major jurisdictions. For complex US sales tax we partner with TaxJar or Avalara."],
      ["Are you set up for 7-figure brands?", "Yes — most of our e-commerce clients do £5M–£40M ARR. We have processes for high-volume reconciliation."],
    ],
  },
  {
    slug: "startup-finance",
    name: "Startup Finance",
    tag: "Series A–C",
    icon: "△",
    summary:
      "EIS/SEIS, R&D claims, equity admin and investor reporting from day one.",
    hero: {
      title: "Series A finance,",
      highlight: "run like Series C.",
      body: "EIS/SEIS, R&D, options and investor reporting — set up right the first time so you don't have to redo it before the next round.",
    },
    deliverables: [
      { title: "EIS/SEIS administration", body: "Compliance certificates, advance assurance and HMRC submissions — never miss a deadline." },
      { title: "R&D tax credits", body: "Technical narrative, costings and claim — managed in-house, no contingent fees." },
      { title: "Options admin", body: "EMI scheme setup, valuations, vesting tracking and HMRC reporting." },
      { title: "Cap table maintenance", body: "Synced with your ledger; investor reporting consistent with the source of truth." },
      { title: "Investor reporting", body: "Monthly investor updates drafted; quarterly KPIs and runway charts produced." },
      { title: "Fundraise readiness", body: "Data room curated, forecasts modelled, diligence questions answered." },
    ],
    process: [
      { day: "Pre-seed", title: "Set up", body: "EIS/SEIS, EMI scheme, banking, accounting software and chart of accounts — all done right." },
      { day: "Seed–Series A", title: "Optimise", body: "R&D claims, monthly accounts, KPI dashboards, first board pack." },
      { day: "Series A–B", title: "Scale", body: "Multi-entity setup, FP&A function, scenario planning, raise prep." },
      { day: "Series B+", title: "Mature", body: "Audit readiness, treasury, ESOP refreshes, international entities." },
    ],
    faqs: [
      ["Do you handle EMI option schemes?", "End to end — scheme setup, valuations, vesting tracking, HMRC reporting and exit calculations."],
      ["What's your R&D claim success rate?", "100% on submitted claims over the past 3 years. We're conservative on what qualifies, so we don't get rejections."],
      ["Can you set up a US Delaware sub?", "Yes — we partner with US-side counsel and handle the UK-side accounting, transfer pricing and consolidation."],
      ["How do you handle convertible loan notes / SAFEs?", "Accounted at fair value with appropriate disclosures. We've handled hundreds across both UK and US instruments."],
    ],
  },
  {
    slug: "payroll",
    name: "Payroll",
    tag: "UK & global",
    icon: "◷",
    summary:
      "UK PAYE, RTI, pensions, international contractors, options — all in one place.",
    hero: {
      title: "Payroll,",
      highlight: "without the spreadsheets.",
      body: "UK PAYE, RTI, pensions, international contractors and equity — run as part of your finance function, not bolted on through a third-party bureau.",
    },
    deliverables: [
      { title: "UK PAYE & RTI", body: "Monthly payroll runs, FPS/EPS submissions, P11Ds and P60s — never late." },
      { title: "Auto-enrolment", body: "Pension scheme management, member onboarding, contribution submissions." },
      { title: "International contractors", body: "Compliant onboarding and payments in 60+ countries via Deel / Remote / Oyster." },
      { title: "Equity admin", body: "Options exercise, EMI / NSO reporting, payroll tax on vests." },
      { title: "Expense & benefits", body: "Mileage, benefits-in-kind, salary sacrifice — handled within payroll." },
      { title: "End-of-year forms", body: "P60s, P11Ds and P11D(b) prepared, distributed and filed." },
    ],
    process: [
      { day: "Onboarding", title: "Set up", body: "Employees imported, codes verified, pension scheme linked, payroll calendar agreed." },
      { day: "Monthly", title: "Run", body: "Payroll prepared, reviewed with you, run by the 25th. Payslips delivered same day." },
      { day: "Annually", title: "Year-end", body: "P60s and P11Ds prepared, submitted, distributed before deadline." },
      { day: "Ad hoc", title: "New hires & leavers", body: "Onboarded/offboarded within 48 hours, with starter checklists and final pay." },
    ],
    faqs: [
      ["What software do you run payroll on?", "BrightPay or Xero Payroll for UK; Deel/Remote/Oyster for global. We integrate with whichever HRIS you use."],
      ["Can you handle pension auto-enrolment?", "Yes — including scheme selection, member onboarding and ongoing contributions."],
      ["Do you handle equity exercises?", "Yes — including the PAYE/NIC treatment of EMI exercises, RSU vests and ESPP discounts."],
      ["What about CIS for contractors?", "Yes. We run CIS deductions, monthly returns and verification — common for our construction and trades clients."],
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
