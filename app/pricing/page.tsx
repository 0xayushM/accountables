import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";

export const metadata: Metadata = {
  title: "Pricing — Accountables",
  description:
    "Transparent, structured pricing for every stage of business growth. From £100/month.",
};

const Check = () => (
  <svg className="mt-0.5 flex-shrink-0 text-[var(--brand-blue)]" width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const tiers = [
  {
    name: "Foundation",
    price: "£100",
    tagline: "Structured bookkeeping and reporting support for early-stage businesses building their finance operations.",
    featured: false,
    cta: "Get Started",
    href: "/#contact",
    includesLabel: "Includes",
    bullets: [
      "Monthly bookkeeping",
      "Bank reconciliations",
      "Year-end accounts",
      "CT600 filing",
      "1 payroll included",
      "Email support",
    ],
    scope: [
      "Up to 100 monthly transactions",
      "Up to £200k annual turnover",
    ],
    addon: "Quarterly VAT filings available as an add-on.",
    suitedFor: null,
  },
  {
    name: "Operations",
    price: "£300",
    tagline: "Ongoing finance operations support designed for growing businesses requiring more active coordination and reporting visibility.",
    featured: true,
    cta: "Book a Consultation",
    href: "/#contact",
    includesLabel: "Everything in Foundation, plus",
    bullets: [
      "Accounts payable & receivable support",
      "VAT filings included",
      "Payroll support",
      "Management accounting",
      "Enhanced reporting visibility",
      "Access to Accountables One",
    ],
    scope: [
      "Up to 300 monthly transactions",
      "Up to £500k annual turnover",
    ],
    addon: null,
    suitedFor: null,
  },
  {
    name: "Finance Partner",
    price: "£600",
    tagline: "A more integrated finance support environment designed for businesses with increasing operational and reporting complexity.",
    featured: false,
    cta: "Speak With Our Team",
    href: "/#contact",
    includesLabel: "Everything in Operations, plus",
    bullets: [
      "Financial planning & analysis",
      "Budgeting & forecasting",
      "Advanced management reporting",
      "Cash flow visibility",
      "Ongoing finance coordination",
      "Senior finance oversight",
    ],
    scope: [
      "Designed for businesses above £1m annual turnover.",
    ],
    addon: null,
    suitedFor: null,
  },
  {
    name: "Strategic Support",
    price: "Custom",
    tagline: "Designed for businesses requiring dedicated finance leadership, strategic finance involvement and higher operational complexity.",
    featured: false,
    cta: "Contact Us",
    href: "/#contact",
    includesLabel: "Includes",
    bullets: [
      "Fractional CFO support",
      "Strategic finance oversight",
      "Investor & board reporting",
      "Business performance reviews",
      "Cross-border finance coordination",
      "Dedicated operational support",
    ],
    scope: [],
    addon: null,
    suitedFor: "Businesses above £2m annual turnover or requiring a more embedded finance function.",
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
    q: "What if my transaction volume changes mid-month?",
    a: "Plans are sized on average monthly volume. Occasional spikes are fine. If volume sustainably outgrows your plan, we'll flag it and recommend the next tier.",
  },
  {
    q: "Is VAT included in the price?",
    a: "Prices shown are exclusive of VAT. UK customers will be invoiced inclusive of VAT at the prevailing rate.",
  },
  {
    q: "What is Accountables One?",
    a: "Accountables One is our AI-powered finance layer — giving you real-time visibility into your numbers, automated reconciliations, and instant reporting. Included from the Operations plan upwards.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Priced for every"
        highlight="stage of growth."
        description="Transparent, structured plans with no hidden fees. Start where you are, scale as you need."
        serif={{ inHighlight: "stage" }}
      />

      {/* Tiers — 2×2 grid */}
      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`relative card p-8 md:p-10 flex flex-col ${
                  t.featured ? "ring-2 ring-[var(--brand-blue)]/40" : ""
                }`}
                style={
                  t.featured
                    ? { background: "linear-gradient(160deg, #fff 0%, #f0f5ff 100%)" }
                    : undefined
                }
              >
                {t.featured && (
                  <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[var(--brand-blue)] text-white text-[11px] tracking-[0.14em] uppercase font-semibold">
                    Most popular
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--brand-blue)] mb-2">
                      {t.name}
                    </p>
                    <p className="text-[14px] leading-[1.6] text-[var(--text-secondary)] max-w-sm">
                      {t.tagline}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1 flex-shrink-0">
                    <span className="display text-[36px] md:text-[42px] font-semibold text-[var(--text-primary)] leading-none">
                      {t.price}
                    </span>
                    {t.price !== "Custom" && (
                      <span className="text-[13px] text-[var(--text-muted)]">/month</span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={t.href}
                  className={`mt-6 inline-flex h-11 w-full items-center justify-center px-5 rounded-full text-[13.5px] font-semibold transition-colors ${
                    t.featured
                      ? "bg-[var(--brand-navy)] text-white hover:bg-[#050d22]"
                      : "border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  {t.cta}
                </a>

                {/* Includes */}
                <div className="mt-7 pt-6 border-t border-[var(--border)]">
                  <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-4">
                    {t.includesLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-[var(--text-primary)]">
                        <Check />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope */}
                {(t.scope.length > 0 || t.addon || t.suitedFor) && (
                  <div className="mt-6 pt-5 border-t border-[var(--border)]">
                    <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-3">
                      {t.suitedFor ? "Best suited for" : "Operational scope"}
                    </p>
                    {t.suitedFor ? (
                      <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">{t.suitedFor}</p>
                    ) : (
                      <>
                        <ul className="space-y-1.5">
                          {t.scope.map((s) => (
                            <li key={s} className="text-[13px] text-[var(--text-secondary)] flex items-start gap-2">
                              <span className="mt-[5px] flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]" />
                              {s}
                            </li>
                          ))}
                        </ul>
                        {t.addon && (
                          <p className="mt-3 text-[12px] italic text-[var(--text-muted)]">{t.addon}</p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-[13px] text-[var(--text-muted)]">
            All prices in GBP, exclusive of VAT. No long-term contracts — billed monthly.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-28 border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="pill">Pricing FAQs</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              The fine print, in <span className="accent">plain English</span>.
            </h2>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-[16px] font-semibold text-[var(--text-primary)]">{f.q}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--text-secondary)]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Not sure where to start?"
        title="We'll recommend the right plan."
        body="Tell us about your business, your volume, and where it hurts. We'll come back within 24 hours with a plan and a price."
      />
    </PageShell>
  );
}
