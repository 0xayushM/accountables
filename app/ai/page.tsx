import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Terminal } from "../components/Terminal";
import { WaitlistForm } from "../components/WaitlistForm";

export const metadata: Metadata = {
  title: "AI Close — Join the waitlist · Accountables",
  description:
    "The first autonomous month-end. AI Close ingests, classifies, reconciles and reports — closing your books in minutes, not weeks. Join the private beta.",
};

const terminalLines = [
  { prompt: "$", text: "accountables ai.close --period=2026-04", kind: "k" as const },
  { prompt: "→", text: "connecting: Xero · Stripe · Brex · Mercury", kind: "d" as const },
  { prompt: "✓", text: "1,847 transactions ingested", kind: "ok" as const },
  { prompt: "→", text: "classifying with v4.2 model…", kind: "d" as const },
  { prompt: "✓", text: "99.2% high-confidence · 14 to review", kind: "ok" as const },
  { prompt: "→", text: "reconciling 6 bank accounts in parallel", kind: "d" as const },
  { prompt: "✓", text: "all accounts balanced · variance £0.00", kind: "ok" as const },
  { prompt: "→", text: "generating P&L, BS, CF, KPI pack", kind: "d" as const },
  { prompt: "⚠", text: "anomaly: marketing spend +218% vs trend", kind: "w" as const },
  { prompt: "✓", text: "human reviewer notified (Priya · GMT)", kind: "ok" as const },
  { prompt: "$", text: "close complete · 11m 48s · pack ready", kind: "k" as const },
];

const metrics = [
  { value: "11.8", unit: "min", label: "Typical close time", delta: "vs. 14 days industry" },
  { value: "99.2", suffix: "%", label: "Classification confidence" },
  { value: "47", suffix: "m", label: "Transactions in training set" },
  { value: "0", suffix: " /mo", label: "Hours of manual entry", delta: "(yes, really)" },
];

const pipeline = [
  { n: "01", title: "Ingest", body: "Two-way sync with QuickBooks, Xero, NetSuite, Stripe, Brex, Mercury, Plaid and 40+ more. Transactions flow in continuously — not in monthly dumps." },
  { n: "02", title: "Classify", body: "Our finance-tuned model categorizes every line with a confidence score. Anything below 95% gets routed to a human; everything else posts automatically." },
  { n: "03", title: "Reconcile", body: "Six accounts, twelve currencies, parallel reconciliation. Discrepancies surface with the matching evidence already attached." },
  { n: "04", title: "Report", body: "P&L, Balance Sheet, Cashflow, KPI pack, board appendix — all drafted automatically, all version-controlled, all traceable to source." },
  { n: "05", title: "Flag", body: "Anomaly detection runs against your own historical baselines. Unusual spend, missing revenue, drift in unit economics — all surfaced the day it happens." },
  { n: "06", title: "Review", body: "Your senior accountant gets a clean queue of judgment calls. They sign off in hours instead of hunting through entries for days." },
];

const faqs: [string, string][] = [
  ["Is my data secure?", "Yes. SOC 2 Type II certified, AES-256 at rest, TLS 1.3 in transit, single-tenant logical isolation, and we never use client data to train shared models. Period."],
  ["What happens when the AI is uncertain?", "Anything below a 95% confidence threshold is routed to your dedicated senior accountant. The AI never auto-posts entries it isn't sure about — and every decision is fully auditable."],
  ["How does pricing work in beta?", "AI Close is free during beta for existing Accountables clients. Standalone pricing kicks in at GA (Q4 2026) at £499/mo or bundled with full-service plans."],
  ["Will this replace my accountant?", "No — and we wouldn't want it to. AI Close handles the mechanical 80% so your accountant can spend their hours on judgment, advice and edge cases."],
  ["What systems do you integrate with?", "Native: QuickBooks, Xero, NetSuite, Sage, Stripe, Brex, Mercury, Ramp, Plaid, Shopify, Square, Gusto. Plus a public API and webhooks for everything else."],
  ["When does the beta open?", "Rolling onboarding through 2026. We're bringing on roughly 8 new teams per week, prioritising Series A–C startups and e-commerce brands on our integration list."],
];

const stack = [
  "QuickBooks", "Xero", "NetSuite", "Plaid", "Stripe",
  "Brex", "Ramp", "Mercury", "Sage", "Gusto",
  "Shopify", "Square",
];

export default function AiPage() {
  return (
    <div className="theme-dark">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-12 md:pt-20 pb-24 md:pb-32">
          <div aria-hidden className="absolute inset-0 overflow-hidden">
            <div className="jersey-stripes-dark stripe-slide-in opacity-[0.95]" />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 jersey-fade-dark fade-in-soft"
          />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <Link
              href="/services"
              className="mono inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors mb-8 normal-case tracking-normal"
            >
              ← All services
            </Link>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
              <div>
                <span className="waitlist-chip mb-6">
                  {/* <span className="dot-pulse" /> */}
                  <span className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-white/85 flex items-center gap-2">
                     <img src="/prod_icon.svg" alt="Accountables" style={{ display: "block", height: "18px", width: "32px", filter: "brightness(0) invert(1)", marginBottom: "2px" }} /> · Private beta · Q3 2026
                  </span>
                </span>
                <h1 className="display text-[44px] sm:text-[64px] md:text-[84px] font-semibold leading-[1.02] text-white">
                  The first <span className="accent">autonomous</span>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #93c5fd 0%, #60a5fa 45%, #0a84ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    month-end.
                  </span>
                </h1>
                <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-white/70 max-w-xl">
                  AI Close ingests every transaction, classifies with audit-ready
                  confidence, reconciles in parallel, and hands a senior accountant
                  only the things that need a human. Month-end in minutes, not weeks.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "11m 48s typical close",
                    "99.2% AI accuracy",
                    "SOC 2 Type II",
                    "ACA-supervised",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                        style={{ boxShadow: "0 0 0 3px rgba(52, 211, 153, 0.2)" }}
                      />
                      <span className="mono text-white/70 normal-case tracking-normal">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#waitlist-form"
                    className="inline-flex h-12 items-center justify-center gap-2 px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14.5px] font-semibold hover:bg-white/90 transition-colors"
                  >
                    Join the waitlist
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#pipeline"
                    className="inline-flex h-12 items-center justify-center px-6 rounded-full border border-white/25 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
                  >
                    How it works
                  </a>
                </div>
              </div>

              <div>
                <Terminal lines={terminalLines} minHeight={460} />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics strip — dark */}
        <section className="py-14 md:py-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="strip grid-cols-2 md:grid-cols-4 !border-white/[0.08]">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="cell !border-white/[0.08] py-7 md:py-8"
                >
                  <div className="display text-[40px] md:text-[52px] font-semibold leading-none tracking-tight text-white">
                    {m.value}
                    {m.suffix && (
                      <span className="text-[0.5em] text-white/55 font-medium ml-1 align-super">
                        {m.suffix}
                      </span>
                    )}
                    {m.unit && (
                      <span className="text-[0.34em] text-white/55 font-normal ml-2 align-baseline">
                        {m.unit}
                      </span>
                    )}
                  </div>
                  <div className="mono mt-3 uppercase text-white/50">
                    {m.label}
                  </div>
                  {m.delta && (
                    <div className="mono mt-1 text-emerald-400 normal-case tracking-normal">
                      {m.delta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section
          id="waitlist-form"
          className="py-20 md:py-28 border-t border-white/[0.06]"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="pill !bg-white/[0.06] !text-white/80 !border-white/[0.10]">
                  Early access
                </span>
                <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-white leading-[1.05]">
                  Be among the first to
                  <br />
                  run an <span className="accent">autonomous</span> close.
                </h2>
                <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-white/70 max-w-md">
                  Beta cohorts onboard weekly. We&apos;re prioritising Series A–C
                  startups and e-commerce brands on our integration list. No
                  credit card, no commitment — just early access to the future
                  of month-end.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {[
                    "Free for the duration of beta",
                    "Dedicated onboarding manager",
                    "Direct line to the product team",
                    "Locked-in launch pricing after GA",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-3 text-[15px] text-white/75"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                        style={{
                          boxShadow: "0 0 0 3px rgba(52, 211, 153, 0.18)",
                        }}
                      />
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Stack pills */}
                <div className="mt-10">
                  <div className="mono uppercase text-white/45 mb-4">
                    Connects to your stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.10] text-[12.5px] text-white/85 backdrop-blur-sm"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section
          id="pipeline"
          className="py-24 md:py-32 border-t border-white/[0.06]"
          style={{ background: "var(--surface-soft)" }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="pill !bg-white/[0.06] !text-white/80 !border-white/[0.10]">
                How it works
              </span>
              <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-white">
                Six stages, one continuous{" "}
                <span className="accent">close</span>.
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] md:text-[18px] leading-[1.55] text-white/70">
                AI Close runs continuously in the background. The
                &ldquo;month-end&rdquo; you used to dread becomes a 10-minute
                review of work that&apos;s already done.
              </p>
            </div>

            <div
              className="rounded-[24px] border border-white/[0.10] overflow-hidden grid sm:grid-cols-2 lg:grid-cols-3"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {pipeline.map((p, i) => (
                <div
                  key={p.n}
                  className={`p-7 md:p-9 ${
                    i % 3 !== 2 ? "lg:border-r" : ""
                  } ${i % 2 !== 1 ? "sm:border-r lg:border-r-0" : ""} ${
                    i < 3 ? "border-b lg:border-b" : ""
                  } ${
                    i < pipeline.length - 1 && i % 2 === 0 ? "border-b sm:border-b" : ""
                  }`}
                  style={{
                    borderRightWidth: i % 3 !== 2 ? "1px" : undefined,
                    borderBottomWidth: i < 3 ? "1px" : undefined,
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="mono uppercase" style={{ color: "#60a5fa" }}>
                    / {p.n}
                  </div>
                  <h3 className="display mt-4 text-[20px] md:text-[24px] font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-white/65">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 md:py-32 border-t border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <div className="max-w-2xl mb-12">
              <span className="pill !bg-white/[0.06] !text-white/80 !border-white/[0.10]">
                FAQs
              </span>
              <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-white">
                Common questions about <span className="accent">AI Close</span>.
              </h2>
            </div>

            <div
              className="rounded-[24px] border border-white/[0.10] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {faqs.map(([q, a], i) => (
                <div
                  key={q}
                  className={`grid grid-cols-[44px_1fr] md:grid-cols-[60px_1fr] gap-3 md:gap-4 px-6 md:px-8 py-6 ${
                    i < faqs.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span className="mono text-white/45">/ 0{i + 1}</span>
                  <div>
                    <div className="text-[16px] md:text-[17px] font-medium text-white">
                      {q}
                    </div>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-white/65 max-w-2xl">
                      {a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 border-t border-white/[0.06]">
          <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
            <h2 className="display text-[36px] sm:text-[44px] md:text-[56px] font-semibold text-white">
              Be first in <span className="accent">line</span>.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-white/65">
              We&apos;re onboarding a small group of finance teams every month.
              Reserve your seat — no credit card required.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="#waitlist-form"
                className="inline-flex h-12 items-center justify-center gap-2 px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14.5px] font-semibold hover:bg-white/90 transition-colors"
              >
                Join the waitlist
              </a>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center px-6 rounded-full border border-white/25 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
