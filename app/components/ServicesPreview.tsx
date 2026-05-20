"use client";

import { useState } from "react";
import Link from "next/link";

type Item = {
  slug: string;
  href: string;
  name: string;
  sub: string;
  body: string;
  feats: string[];
};

const items: Item[] = [
  {
    slug: "bookkeeping",
    href: "/services/bookkeeping",
    name: "Bookkeeping",
    sub: "Daily transaction classification",
    body: "Real-time bookkeeping that doesn't lag your business. AI classifies, your accountant verifies, your dashboard always reflects today - not last month.",
    feats: [
      "Daily transaction sync",
      "Multi-currency, multi-entity",
      "AI-assisted categorisation",
      "Audit-ready records",
    ],
  },
  {
    slug: "ai-close",
    href: "/ai",
    name: "AI Close",
    sub: "Autonomous month-end",
    body: "Our flagship AI engine reconciles, reports and flags - closing your books in hours, not weeks. Currently in private beta with select clients.",
    feats: [
      "11-minute typical close",
      "99.2% AI accuracy",
      "Anomaly detection",
      "Senior accountant review",
    ],
  },
  {
    slug: "cfo-advisory",
    href: "/services/cfo-advisory",
    name: "CFO Advisory",
    sub: "Strategic finance",
    body: "A fractional CFO for the moments that matter - board prep, fundraising, scenario modelling, unit economics. Senior expertise without the senior overhead.",
    feats: [
      "Board pack preparation",
      "Fundraising support",
      "Scenario modelling",
      "Unit economics deep-dive",
    ],
  },
  {
    slug: "accounting-tax",
    href: "/services/accounting-tax",
    name: "Accounting & Tax",
    sub: "Year-end, filings, R&D",
    body: "Corporation tax, VAT, R&D credits, EIS/SEIS - filed correctly, claimed completely. We chase the rebates you didn't know you were owed.",
    feats: [
      "Corporation tax",
      "VAT & MTD compliance",
      "R&D tax credits",
      "EIS/SEIS administration",
    ],
  },
  {
    slug: "ecommerce",
    href: "/services/ecommerce",
    name: "E-commerce",
    sub: "Multi-channel finance",
    body: "Built for Shopify, Amazon, Stripe and Square sellers. We untangle settlement reports, accrue COGS correctly and reconcile across every channel.",
    feats: [
      "Settlement reconciliation",
      "Multi-channel COGS",
      "Inventory accounting",
      "Marketplace fee tracking",
    ],
  },
  {
    slug: "payroll",
    href: "/services/payroll",
    name: "Payroll",
    sub: "UK & global",
    body: "Run UK PAYE, manage international contractors, handle pension auto-enrolment. Integrated with your books so it just appears in the right place.",
    feats: [
      "UK PAYE & RTI",
      "Contractor management",
      "Auto-enrolment",
      "Equity & options admin",
    ],
  },
];

export function ServicesPreview() {
  const [tab, setTab] = useState(0);
  const cur = items[tab];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="pill">Services</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[64px] font-semibold text-[var(--text-primary)]">
            One partner.
            <br />
            The whole <span className="accent">finance stack</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)]">
            Most clients start with bookkeeping and add as they scale. No minimum
            commitment, no junior team waiting in the wings.
          </p>
        </div>

        <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white grid md:grid-cols-[320px_1fr] min-h-[460px]">
          {/* Tab list */}
          <div className="bg-[var(--surface-soft)] md:border-r border-b md:border-b-0 border-[var(--border)] p-3 md:p-4 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
            {items.map((s, i) => {
              const active = i === tab;
              return (
                <button
                  key={s.slug}
                  onClick={() => setTab(i)}
                  className={`flex-shrink-0 md:flex-shrink text-left flex md:items-center justify-between gap-3 px-4 py-3 md:py-4 rounded-xl border transition-all ${
                    active
                      ? "bg-white border-[var(--border)] text-[var(--text-primary)] shadow-sm"
                      : "border-transparent text-[var(--text-secondary)] hover:bg-white/60 hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="mono text-[var(--text-muted)] normal-case tracking-normal">
                      / 0{i + 1}
                    </span>
                    <span className="text-[14.5px] font-medium leading-tight">
                      {s.name}
                    </span>
                  </span>
                  <span
                    className={`text-[16px] transition-all ${
                      active
                        ? "text-[var(--brand-blue)] translate-x-0.5"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div key={tab} className="p-8 md:p-12 flex flex-col rise">
            <div className="mono uppercase text-[var(--brand-blue)]">
              {cur.sub}
            </div>
            <h3 className="display mt-3 text-[28px] md:text-[40px] font-semibold leading-[1.05] text-[var(--text-primary)]">
              {cur.name}
            </h3>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)] max-w-xl">
              {cur.body}
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {cur.feats.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[14.5px] text-[var(--text-primary)]"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 flex items-center justify-between gap-4 border-t border-[var(--border)]">
              <span className="mono text-[var(--text-muted)] normal-case tracking-normal">
                Service 0{tab + 1} / 0{items.length}
              </span>
              <Link
                href={cur.href}
                className="btn-ghost !py-2 !px-4 !text-[13.5px]"
              >
                Full service page
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="mono inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors normal-case tracking-normal"
          >
            See all 9 services →
          </Link>
        </div>
      </div>
    </section>
  );
}
