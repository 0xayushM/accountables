import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";

export const metadata: Metadata = {
  title: "Pricing — Accountables",
  description:
    "Simple, transparent pricing. From £20/hour. Fixed monthly plans for every stage of growth.",
};

const tiers = [
  {
    name: "Starter",
    tagline: "For early-stage businesses just getting set up.",
    price: "£20",
    unit: "/hour",
    cta: "Contact us",
    href: "/#contact",
    featured: false,
    bullets: [
      "Up to 100 transactions / month",
      "Monthly bookkeeping",
      "Bank reconciliation",
      "VAT returns",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For scaling businesses with growing complexity.",
    price: "£800",
    unit: "/month",
    cta: "Contact us",
    href: "/#contact",
    featured: true,
    bullets: [
      "Up to 1,000 transactions / month",
      "Real-time bookkeeping",
      "Monthly management reports",
      "VAT, PAYE & corporation tax",
      "Year-end accounts included",
      "Priority support (Slack channel)",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For teams that need a dedicated finance function.",
    price: "Custom",
    unit: "",
    cta: "Contact sales",
    href: "/#contact",
    featured: false,
    bullets: [
      "Unlimited transactions",
      "Dedicated finance manager",
      "Custom integrations",
      "Audit support & investor reporting",
      "FP&A and forecasting",
      "Advanced access controls (SSO)",
    ],
  },
];

const faqs = [
  {
    q: "Are there setup fees?",
    a: "No. We don't charge a setup fee on standard onboarding. Complex migrations from messy books may incur a one-off scoping fee, agreed up front.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes — up or down, any time, no penalty. We'll re-baseline the work and update your next invoice.",
  },
  {
    q: "What if my volume changes mid-month?",
    a: "Plans are sized on average monthly volume. Occasional spikes are fine. If volume sustainably outgrows your plan, we'll flag it and recommend the next tier.",
  },
  {
    q: "Is VAT included in the price?",
    a: "Prices shown are exclusive of VAT. UK customers will be invoiced inclusive of VAT at the prevailing rate.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="A plan for every"
        highlight="stage of growth."
        description="Start free, scale as you grow. No hidden fees or surprise charges. Cancel any time."
        serif={{ inHighlight: "stage" }}
      />

      {/* Tiers */}
      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`relative card p-8 md:p-10 flex flex-col ${
                  t.featured ? "ring-2 ring-[var(--brand-blue)]/40" : ""
                }`}
                style={
                  t.featured
                    ? {
                        background:
                          "linear-gradient(180deg, #fff 0%, #f1f5ff 100%)",
                      }
                    : undefined
                }
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--brand-blue)] text-white text-[11px] tracking-[0.14em] uppercase font-semibold">
                    Most popular
                  </div>
                )}
                <div>
                  <h3 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)]">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.5] text-[var(--text-secondary)]">
                    {t.tagline}
                  </p>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="display text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)] leading-none">
                    {t.price}
                  </span>
                  <span className="text-[14px] text-[var(--text-muted)]">
                    {t.unit}
                  </span>
                </div>
                <a
                  href={t.href}
                  className={`mt-6 inline-flex h-11 items-center justify-center px-5 rounded-full text-[13.5px] font-semibold transition-colors ${
                    t.featured
                      ? "bg-[var(--brand-navy)] text-white hover:bg-[#050d22]"
                      : "border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  {t.cta}
                </a>

                <ul className="mt-8 space-y-3 pt-6 border-t border-[var(--border)]">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px] text-[var(--text-primary)]"
                    >
                      <svg
                        className="mt-0.5 flex-shrink-0 text-[var(--brand-blue)]"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12l4 4L19 6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-[13px] text-[var(--text-muted)]">
            Prices in GBP, exclusive of VAT. No long-term contracts — pay monthly.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-28 bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="pill">What's included</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              Every plan <span className="accent">includes</span>.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              "Real-time bookkeeping",
              "Cloud-based, secure",
              "Xero / QuickBooks / Sage",
              "UK-based team",
              "Quarterly reviews",
              "Tax reminders",
            ].map((f) => (
              <div
                key={f}
                className="card p-5 flex items-center gap-3"
              >
                <span className="h-7 w-7 rounded-full flex items-center justify-center bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l4 4L19 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[14.5px] font-medium text-[var(--text-primary)]">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <span className="pill">Pricing FAQs</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              The fine print, in <span className="accent">plain English</span>.
            </h2>
          </div>
          <div className="mt-12 divide-y divide-[var(--border)]">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-[16.5px] font-medium text-[var(--text-primary)]">
                  {f.q}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-secondary)]">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Not sure where to start?"
        title="We'll quote you in 24 hours."
        body="Tell us your volume, tools, and where it hurts. We'll come back with a plan and a price."
      />
    </PageShell>
  );
}
