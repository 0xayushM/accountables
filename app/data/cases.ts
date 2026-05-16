export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  stat: string;
  statLabel: string;
  summary: string;
  body: string;
  stats: [string, string][];
};

export const CASES: CaseStudy[] = [
  {
    slug: "lattice-labs",
    name: "Lattice Labs",
    industry: "B2B SaaS · Series B",
    stat: "−92%",
    statLabel: "close time",
    summary: "From 14-day month-end to a Tuesday afternoon.",
    body: "Lattice Labs had grown from 8 to 80 people in 18 months. Their previous firm was running quarterly closes, which meant their CFO was building board packs from data nearly four months out of date. We migrated them in 11 days, ran AI Close against six months of historicals to validate accuracy, and now deliver management accounts by day 3 of every month.",
    stats: [
      ["2.1d", "avg close"],
      ["£412k", "R&D recovered"],
      ["18mo", "partnership"],
      ["99.4%", "AI accuracy"],
    ],
  },
  {
    slug: "hatch-studios",
    name: "Hatch Studios",
    industry: "Creative agency · 22 people",
    stat: "−£68k/yr",
    statLabel: "finance cost",
    summary: "Replaced three external suppliers with one partner.",
    body: "Hatch was running three separate suppliers: a bookkeeper, a tax firm, and a payroll bureau. The handoffs alone were costing them a week of founder time every month, and reconciliation discrepancies between them were a constant fire. We collapsed everything into a single account at less than half the combined fee.",
    stats: [
      ["1", "partner"],
      ["3 → 1", "tools consolidated"],
      ["£68k", "annual savings"],
      ["4hr", "avg ticket SLA"],
    ],
  },
  {
    slug: "northwind-trading",
    name: "Northwind Trading",
    industry: "E-commerce · Shopify + Amazon",
    stat: "£127k",
    statLabel: "tax rebate recovered",
    summary: "Caught 18 months of payroll misclassification.",
    body: "During our discovery audit we spotted that Northwind's previous accountant had misclassified contractor payments as PAYE expenses for 18 months running. We filed a corrected return and recovered £127k in overpaid tax — money that paid for two years of our service before we'd even closed our first month with them.",
    stats: [
      ["£127k", "recovered"],
      ["18mo", "errors caught"],
      ["2.4d", "avg close"],
      ["12", "channels reconciled"],
    ],
  },
  {
    slug: "plinth-materials",
    name: "Plinth Materials",
    industry: "D2C · Series A",
    stat: "4 days",
    statLabel: "time to monthly close",
    summary: "A real-time view of multi-channel revenue.",
    body: "Plinth sells across Shopify, Amazon and three wholesale partners — five settlement processors, four currencies and a constant cashflow guessing game. We rebuilt their COGS accruals, reconciled fees across every channel, and gave their CEO a live cashflow view she trusts enough to operate from.",
    stats: [
      ["4d", "close"],
      ["5", "channels"],
      ["4", "currencies"],
      ["100%", "auto-reconciled"],
    ],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
