"use client";

import Link from "next/link";
import { useState } from "react";
import { RevealBlock } from "../components/RevealBlock";
import ScrollRevealText from "../components/ScrollRevealText";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// ─── Hero Dashboard Mockup ────────────────────────────────────────────────────

function HeroDashboard() {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden border border-[var(--border)] shadow-[0_24px_64px_-16px_rgba(11,30,63,0.12)] bg-white"
      aria-hidden
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {["bg-red-300", "bg-yellow-300", "bg-green-300"].map((c, i) => (
              <div key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
            ))}
          </div>
          <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)]">
            Accountables One
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Live Environment
        </span>
      </div>

      {/* Header row */}
      <div className="px-5 pt-4 pb-3 border-b border-[var(--border)]">
        <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-1">
          Finance Coordination
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[17px] font-semibold text-[var(--text-primary)]">Reporting in Review</p>
          <span className="text-[11px] font-medium text-[var(--brand-blue)] bg-blue-50 px-2.5 py-1 rounded-full">
            82% Complete
          </span>
        </div>
        <p className="text-[11.5px] text-[var(--text-muted)] mt-1">Month-End Close · April 2026</p>
      </div>

      {/* Two-column body */}
      <div className="grid grid-cols-2 gap-0 divide-x divide-[var(--border)]">
        {/* Compliance Timeline */}
        <div className="p-4">
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-3">
            Compliance Timeline
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "VAT Filing", status: "Upcoming", color: "text-amber-600 bg-amber-50" },
              { label: "Payroll Review", status: "Active", color: "text-green-600 bg-green-50" },
              { label: "Year-End Prep", status: "Scheduled", color: "text-[var(--text-muted)] bg-[var(--surface-soft)]" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[11.5px] text-[var(--text-secondary)]">{item.label}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Communication */}
        <div className="p-4">
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-3">
            Team Communication
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="bg-[var(--surface-soft)] rounded-xl p-2.5">
              <p className="text-[11px] leading-[1.5] text-[var(--text-secondary)]">
                Updated reporting shared for review.
              </p>
              <p className="text-[9.5px] text-[var(--text-muted)] mt-1">Accountables · 2h ago</p>
            </div>
            <div className="bg-[var(--surface-soft)] rounded-xl p-2.5">
              <p className="text-[11px] leading-[1.5] text-[var(--text-secondary)]">
                Vendor payment approvals pending.
              </p>
              <p className="text-[9.5px] text-[var(--text-muted)] mt-1">Finance Team · 4h ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Finance Support row */}
      <div className="px-5 py-3.5 border-t border-[var(--border)] flex items-center justify-between">
        <div>
          <p className="text-[9px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">Finance Support</p>
          <p className="text-[12px] font-medium text-[var(--text-primary)] mt-0.5">Structured Around Ongoing Visibility</p>
        </div>
        <span className="text-[10px] font-semibold text-[var(--brand-accent)] bg-blue-50 px-2.5 py-1 rounded-full">
          Active Support
        </span>
      </div>
    </div>
  );
}

// ─── Region Toggle ─────────────────────────────────────────────────────────────

const regions = {
  "United Kingdom": {
    items: [
      "VAT workflows",
      "HMRC reporting",
      "Payroll & pensions",
      "Management accounts",
      "Year-end coordination",
      "Xero environments",
    ],
  },
  "United States": {
    items: [
      "Sales tax workflows",
      "QuickBooks environments",
      "Payroll coordination",
      "Multi-state support",
      "Financial reporting workflows",
    ],
  },
  India: {
    items: [
      "GST workflows",
      "TDS compliance",
      "ROC coordination",
      "Payroll support",
      "MIS reporting",
      "Accounting operations",
    ],
  },
};

// ─── FAQ Accordion (Bench two-column style) ────────────────────────────────────

const faqs = [
  {
    q: "How does Accountables function as a virtual finance department?",
    a: "We combine bookkeeping, compliance, reporting and finance coordination into one connected operating environment. Rather than managing separate vendors, you work with one team across all finance functions.",
  },
  {
    q: "What accounting software does Accountables support?",
    a: "We work across Xero, QuickBooks, FreeAgent and Sage, with integrations for payments, invoicing and inventory tools across UK, US and India.",
  },
  {
    q: "How does communication with the Accountables team work?",
    a: "All coordination happens through Accountables One — our operating environment. Reporting updates, approvals, finance requests and ongoing communication are centralized in one place.",
  },
  {
    q: "What regions does Accountables operate in?",
    a: "We support businesses operating in the United Kingdom, United States and India, with experience across regional compliance, tax and reporting requirements specific to each market.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No long-term contracts. We work on ongoing monthly arrangements designed around your business needs, with flexibility to adjust as your requirements change.",
  },
  {
    q: "How quickly can Accountables get started?",
    a: "Most clients are onboarded within one to two weeks. We begin with a structured onboarding to understand your current finance setup, tools and reporting requirements before transitioning operations.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeRegion, setActiveRegion] = useState<keyof typeof regions>("United Kingdom");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>

        {/* ════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 bg-[var(--background)]">
          {/* Background stripes */}
          <div aria-hidden className="absolute inset-0 jersey-stripes opacity-[0.6]" />
          <div aria-hidden className="absolute inset-0 jersey-fade" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left: copy */}
              <div>
                <div className="rise rise-1">
                  <span className="pill mb-6 block w-fit">Services</span>
                </div>

                <h1 className="rise rise-2 display text-[40px] sm:text-[52px] md:text-[60px] font-semibold text-[var(--text-primary)] leading-[1.02]">
                  Your Virtual<br />
                  <span className="accent">Finance</span> Department.
                </h1>

                <p className="rise rise-3 mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[var(--text-secondary)] max-w-[460px]">
                  Built for businesses looking for structured finance support without building a large in-house finance team.
                </p>

                <p className="rise rise-3 mt-3 text-[16px] md:text-[17px] leading-[1.7] text-[var(--text-secondary)] max-w-[460px]">
                  Accountables combines accounting, reporting, compliance and finance coordination within a connected operating environment designed around ongoing visibility, organized execution and embedded support.
                </p>

                <div className="rise rise-4 mt-8 flex flex-col sm:flex-row items-start gap-3">
                  <Link href="/#contact" className="btn-primary !px-7 !py-3 !text-[14.5px]">
                    Book a Consultation
                  </Link>
                </div>

                <p className="rise rise-5 mt-5 text-[12.5px] text-[var(--text-muted)]">
                  Powered by{" "}
                  <a
                    href="https://one.accountables.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--brand-blue)] hover:underline underline-offset-2"
                  >
                    Accountables One
                  </a>
                  .
                </p>
              </div>

              {/* Right: dashboard */}
              <div className="rise rise-4 hidden lg:block">
                <HeroDashboard />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINANCE SUPPORT VALUE PROPS
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* Centered header */}
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <RevealBlock delay={0}>
                <span className="pill">Finance Support</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  Finance support designed around{" "}
                  <span className="accent">growing businesses</span>.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  Accountables combines structured finance support, operational coordination and ongoing visibility — allowing businesses to operate with a more organized finance function.
                </p>
              </RevealBlock>
            </div>

            {/* 4-column value blocks */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: "More Time for Operations",
                  body: "Reduce time spent coordinating accounting, reporting, compliance and finance follow-ups internally.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20h20M5 20V10l7-7 7 7v10" /><path d="M9 20v-5h6v5" />
                    </svg>
                  ),
                  title: "Ongoing Financial Visibility",
                  body: "Structured reporting environments designed around business visibility and informed decision-making.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Embedded Finance Support",
                  body: "Work with a finance team designed to operate alongside your business and internal workflows.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: "Organized Execution",
                  body: "Defined processes, coordinated timelines and ongoing operational support designed around consistency and clarity.",
                },
              ].map((item, idx) => (
                <RevealBlock key={item.title} delay={idx * 70}>
                  <div className="card p-7 md:p-8 flex flex-col gap-5 h-full">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center text-white"
                      style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">{item.body}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINANCE OPERATIONS — SERVICE BREAKDOWN
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* Header */}
            <div className="max-w-2xl mb-14 md:mb-16">
              <RevealBlock delay={0}>
                <span className="pill">Finance Operations</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  End-to-End Finance Support,{" "}
                  <span className="accent">Delivered</span> as One Connected Function.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  A structured finance function designed around ongoing operational support, reporting visibility and coordinated execution.
                </p>
              </RevealBlock>
            </div>

            {/* Service rows */}
            <div className="flex flex-col divide-y divide-[var(--border)]">
              {[
                {
                  number: "01",
                  title: "Bookkeeping & Reporting",
                  body: "Monthly bookkeeping, reconciliations, reporting workflows and structured month-end close designed to maintain organized and up-to-date financial records.",
                  tags: ["Bookkeeping", "Reconciliations", "Ledger maintenance", "Reporting workflows", "Month-end close"],
                  href: "/services/bookkeeping",
                },
                {
                  number: "02",
                  title: "Accounts Payable & Receivable",
                  body: "Vendor payments, receivables tracking, invoicing coordination and ongoing visibility into incoming and outgoing cash movement.",
                  tags: ["AP management", "AR tracking", "Invoicing", "Collections coordination", "Payment workflows"],
                  href: "/services/bookkeeping",
                },
                {
                  number: "03",
                  title: "Payroll & Compliance",
                  body: "Payroll processing, tax coordination, year-end support and ongoing compliance workflows across operating regions.",
                  tags: ["Payroll processing", "VAT / Sales Tax / GST", "Compliance workflows", "Year-end coordination", "Tax support"],
                  href: "/services/accounting-tax",
                },
                {
                  number: "04",
                  title: "Planning & Finance Support",
                  body: "Cash flow visibility, KPI reporting, forecasting support and finance coordination designed around business decision-making.",
                  tags: ["Forecasting", "KPI visibility", "Management reporting", "Financial planning support", "Operational finance coordination"],
                  href: "/services/financial-analysis",
                },
                {
                  number: "05",
                  title: "Fractional CFO Support",
                  body: "Strategic finance oversight and structured financial leadership for growing businesses requiring ongoing finance support without a full in-house CFO structure.",
                  tags: ["Financial oversight", "Founder support", "Reporting reviews", "Strategic finance discussions", "Business performance visibility"],
                  href: "/services/cfo-advisory",
                },
              ].map((s, idx) => (
                <RevealBlock key={s.number} delay={idx * 50}>
                  <div className="py-8 md:py-10 grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-10 items-start group">
                    {/* Number */}
                    <span
                      className="text-[11px] tracking-[0.18em] font-semibold pt-0.5"
                      style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", color: "var(--text-muted)" }}
                    >
                      / {s.number}
                    </span>

                    {/* Title + body */}
                    <div>
                      <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--text-primary)] leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-[1.65] text-[var(--text-secondary)] max-w-md">
                        {s.body}
                      </p>
                    </div>

                    {/* Tags + link */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {s.tags.map((tag) => (
                          <span key={tag} className="pill text-[11px] !py-1 !px-2.5">{tag}</span>
                        ))}
                      </div>
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[var(--brand-blue)] hover:underline underline-offset-4 w-fit"
                      >
                        Learn more
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            ACCOUNTABLES ONE — dark section
        ════════════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
        >
          {/* Stripe overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 60px, transparent 60px, transparent 120px)",
            }}
          />
          {/* Glow */}
          <div
            aria-hidden
            className="absolute -top-1/4 -right-1/4 h-[70%] w-[60%] rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)" }}
          />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

              {/* Left */}
              <div>
                <RevealBlock delay={0}>
                  <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 border border-white/20 rounded-full px-3 py-1 mb-6">
                    Accountables One
                  </span>
                </RevealBlock>
                <RevealBlock delay={80}>
                  <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-white leading-[1.04]">
                    Finance Support, Connected Through{" "}
                    <span className="accent">One Environment</span>.
                  </h2>
                </RevealBlock>
                <RevealBlock delay={160}>
                  <p className="mt-5 text-[16px] leading-[1.7] text-white/65 max-w-md">
                    Accountables One supports reporting visibility, workflow coordination, task tracking and ongoing finance communication across the Accountables operating environment.
                  </p>
                </RevealBlock>
                <RevealBlock delay={240}>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href="/ai"
                      className="inline-flex h-11 items-center gap-2 px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14px] font-medium hover:bg-white/90 transition-colors"
                    >
                      Join Early Access
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </RevealBlock>
                <RevealBlock delay={300}>
                  <p className="mt-5 text-[11.5px] text-white/40">
                    Expanded workflow capabilities coming soon.
                  </p>
                </RevealBlock>
              </div>

              {/* Right: feature pills grid */}
              <RevealBlock delay={120}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Reporting Visibility", body: "Structured reporting environments designed around ongoing business visibility and financial clarity." },
                    { title: "Workflow Coordination", body: "Task tracking, finance timelines and operational workflow visibility." },
                    { title: "Finance Communication", body: "Centralized communication, approvals and ongoing coordination with the Accountables team." },
                    { title: "Operational Visibility", body: "A connected environment designed around finance coordination and structured execution." },
                    { title: "Task Tracking", body: "Finance timelines, deliverable management and structured execution across all operating areas." },
                    {
                      title: "Coming Soon",
                      body: "Expanded workflow capabilities, integrated operational tools and enhanced reporting environments.",
                      soon: true,
                    },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className={`rounded-2xl border p-5 flex flex-col gap-2 ${
                        f.soon
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-white/10 bg-white/[0.08] backdrop-blur-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-[13px] font-semibold ${f.soon ? "text-white/40" : "text-white"}`}>
                          {f.title}
                        </h3>
                        {f.soon && (
                          <span className="text-[9px] tracking-[0.14em] uppercase font-semibold text-white/30 border border-white/15 rounded-full px-1.5 py-0.5 flex-shrink-0">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className={`text-[11.5px] leading-[1.6] ${f.soon ? "text-white/30" : "text-white/55"}`}>
                        {f.body}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealBlock>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            REGIONAL EXPERIENCE
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* Header */}
            <div className="max-w-2xl mb-12 md:mb-14">
              <RevealBlock delay={0}>
                <span className="pill">Regional Experience</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  Operational Experience Across{" "}
                  <span className="accent">Key Markets</span>.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  Accountables supports businesses operating across the United Kingdom, United States and India, with experience across regional finance operations, reporting and compliance requirements.
                </p>
              </RevealBlock>
            </div>

            {/* Region toggle */}
            <RevealBlock delay={200}>
              <div className="flex gap-2 mb-10">
                {(Object.keys(regions) as (keyof typeof regions)[]).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all ${
                      activeRegion === region
                        ? "bg-[var(--brand-navy)] text-white"
                        : "bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:bg-[var(--border)]"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Region content */}
              <div className="card p-8 md:p-10">
                <h3 className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-6">
                  {activeRegion} · Finance Operations
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {regions[activeRegion].items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[var(--surface-soft)] border border-[var(--border)]"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--brand-accent)" }}
                      />
                      <span className="text-[13.5px] text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INDUSTRIES
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center max-w-xl mx-auto mb-12 md:mb-14">
              <RevealBlock delay={0}>
                <span className="pill">Industries</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  Built for{" "}
                  <span className="accent">Growing Businesses</span>.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  Supporting founder-led and growth-stage businesses across multiple industries and operating environments.
                </p>
              </RevealBlock>
            </div>

            <RevealBlock delay={200}>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Ecommerce & Shopify Brands",
                  "Consumer Businesses",
                  "Agencies & Service Businesses",
                  "Startups & Growth Companies",
                  "International Businesses",
                  "Founder-Led SMEs",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="card px-6 py-4 text-[14px] font-medium text-[var(--text-primary)]"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FAQ — Bench two-column style
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.8fr] gap-14 md:gap-20">

              {/* Left: sticky heading */}
              <div className="md:sticky md:top-28 self-start">
                <RevealBlock delay={0}>
                  <h2 className="display text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[var(--text-primary)] leading-[1.1]">
                    Frequently Asked Questions
                  </h2>
                  <Link
                    href="/#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--brand-blue)] hover:underline underline-offset-4"
                  >
                    Ask us directly →
                  </Link>
                </RevealBlock>
              </div>

              {/* Right: accordion */}
              <div className="divide-y divide-[var(--border)]">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <button
                      key={faq.q}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left py-6 flex flex-col gap-3 group"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <span className="text-[15px] md:text-[16px] font-medium text-[var(--text-primary)] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className={`flex-shrink-0 mt-0.5 h-6 w-6 rounded-full border border-[var(--border-strong)] flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </span>
                      </div>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-400 ${
                          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[14.5px] md:text-[15px] leading-[1.65] text-[var(--text-secondary)] pr-10">
                          {faq.a}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINAL CTA
        ════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[var(--surface-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div
              className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-10 md:p-20"
              style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
            >
              {/* Stripe overlay */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 80px, transparent 80px, transparent 160px)",
                }}
              />
              {/* Glow */}
              <div
                aria-hidden
                className="absolute -top-1/2 -right-1/4 h-[120%] w-[60%] rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, rgba(10,132,255,0.6) 0%, transparent 70%)" }}
              />

              <div className="relative text-center max-w-2xl mx-auto">
                <RevealBlock delay={0}>
                  <h2 className="display text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-white leading-[1.04]">
                    A More <span className="accent">Organized</span> Finance Function.
                  </h2>
                </RevealBlock>
                <RevealBlock delay={80}>
                  <p className="mt-5 text-[16px] md:text-[17px] leading-[1.65] text-white/65 max-w-lg mx-auto">
                    Accountables helps businesses build structured finance operations designed around visibility, coordination and scalable growth.
                  </p>
                </RevealBlock>
                <RevealBlock delay={160}>
                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="inline-flex h-12 items-center gap-2 px-8 rounded-full bg-white text-[var(--brand-navy)] text-[14.5px] font-medium hover:bg-white/90 transition-colors"
                    >
                      Book a Consultation
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </RevealBlock>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
