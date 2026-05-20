import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { PricingNav } from "./PricingNav";

export const metadata: Metadata = {
  title: "Pricing - Accountables",
  description:
    "Transparent, structured pricing for every stage of business growth. From £100/month.",
};

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    price: "£100",
    tagline: "Structured bookkeeping and reporting support for early-stage businesses building their finance operations.",
    featured: false,
    cta: "Get Started",
    href: "/#contact",
    includes: [
      "Monthly bookkeeping",
      "Bank reconciliations",
      "Year-end accounts",
      "CT600 filing",
      "1 payroll included",
      "Email support",
    ],
    accountablesOne: [
      "File sharing support",
      "Centralised communication access",
    ],
    scope: [
      "Up to 100 monthly transactions",
      "Up to £200k annual turnover",
    ],
    addon: "Quarterly VAT filings available as an add-on.",
    suitedFor: null as string | null,
  },
  {
    id: "operations",
    name: "Operations",
    price: "£300",
    tagline: "Ongoing finance operations support designed for growing businesses requiring more active coordination and reporting visibility.",
    featured: true,
    cta: "Book a Consultation",
    href: "/#contact",
    includes: [
      "AP & AR support",
      "VAT filings included",
      "Payroll support",
      "Management accounting",
      "Enhanced reporting visibility",
    ],
    accountablesOne: [
      "Task manager access",
      "Workflow visibility",
      "Finance coordination tracking",
      "Communication & approvals",
    ],
    scope: [
      "Up to 300 monthly transactions",
      "Up to £500k annual turnover",
    ],
    addon: null as string | null,
    suitedFor: null as string | null,
  },
  {
    id: "finance-partner",
    name: "Finance Partner",
    price: "£600",
    tagline: "A more integrated finance support environment designed for businesses with increasing operational and reporting complexity.",
    featured: false,
    cta: "Speak With Our Team",
    href: "/#contact",
    includes: [
      "FP&A support",
      "Budgeting & forecasting",
      "Advanced management reporting",
      "Cash flow visibility",
      "Senior finance oversight",
    ],
    accountablesOne: [
      "Full platform access",
      "Accounting system integrations",
      "AI-assisted categorisation",
      "Operational dashboards",
    ],
    scope: [
      "Designed for businesses above £1m annual turnover.",
    ],
    addon: null as string | null,
    suitedFor: null as string | null,
  },
  {
    id: "strategic-support",
    name: "Strategic Support",
    price: "Custom",
    tagline: "Designed for businesses requiring dedicated finance leadership, strategic finance involvement and higher operational complexity.",
    featured: false,
    cta: "Contact Us",
    href: "/#contact",
    includes: [
      "Fractional CFO support",
      "Strategic finance oversight",
      "Investor & board reporting",
      "Business performance reviews",
      "Cross-border finance coordination",
      "Dedicated operational support",
    ],
    accountablesOne: [
      "Custom workflows",
      "Dedicated reporting setup",
      "Custom integrations",
    ],
    scope: [] as string[],
    addon: null as string | null,
    suitedFor: "Businesses above £2m annual turnover or requiring a more embedded finance function." as string | null,
  },
];

const faqs = [
  {
    q: "Are there setup fees?",
    a: "No. We don't charge a setup fee on standard onboarding. Complex migrations from messy books may incur a one-off scoping fee, agreed up front.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes - up or down, any time, no penalty. We'll re-baseline the work and update your next invoice.",
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
    a: "Accountables One is our AI-powered finance layer - giving you real-time visibility into your numbers, automated reconciliations, and instant reporting. Included from the Operations plan upwards.",
  },
];

function SubPanel({
  label,
  items,
  note,
  dark,
}: {
  label: string;
  items: string[];
  note?: string | null;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 flex flex-col gap-3 ${
        dark
          ? "bg-white/[0.08] border border-white/[0.10]"
          : "bg-[var(--surface-soft)] border border-[var(--border)]"
      }`}
    >
      <p
        className={`text-[9.5px] tracking-[0.15em] uppercase font-semibold ${
          dark ? "text-white/40" : "text-[var(--text-muted)]"
        }`}
      >
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={`text-[12px] leading-[1.5] ${
              dark ? "text-white/70" : "text-[var(--text-secondary)]"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      {note && (
        <p className={`text-[11px] italic mt-1 ${dark ? "text-white/35" : "text-[var(--text-muted)]"}`}>
          {note}
        </p>
      )}
    </div>
  );
}

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

      {/* Tiers */}
      <section id="pricing-tiers" className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex gap-0 lg:gap-10 xl:gap-14 items-start">

            {/* Sticky sidebar nav */}
            <PricingNav
              sectionId="pricing-tiers"
              tiers={tiers.map((t) => ({
                id: t.id,
                name: t.name,
                price: t.price === "Custom" ? "Custom" : `${t.price}/mo`,
              }))}
            />

            {/* Card stack */}
            <div className="flex-1 flex flex-col gap-5">
              {tiers.map((t) => (
                <article
                  key={t.id}
                  id={t.id}
                  className="relative rounded-[24px] overflow-hidden scroll-mt-28 min-h-[400px]"
                  style={
                    t.featured
                      ? { background: "linear-gradient(140deg, #0b1e3f 0%, #14305f 55%, #1a3a6b 100%)" }
                      : { background: "#ffffff", border: "1px solid var(--border)" }
                  }
                >
                  {t.featured && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-white/80 border border-white/20 bg-white/10 rounded-full px-3 py-1">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-10 md:p-14">
                    {/* Inner grid: left info + right panels */}
                    <div className="grid md:grid-cols-[1fr_1.8fr] gap-8 md:gap-10 items-start">

                      {/* Left */}
                      <div className={t.featured ? "pt-8 md:pt-0" : ""}>
                        <p
                          className={`text-[10px] tracking-[0.2em] uppercase font-semibold mb-4 ${
                            t.featured ? "text-white/45" : "text-[var(--text-muted)]"
                          }`}
                        >
                          {t.name}
                        </p>
                        <h2
                          className={`display font-semibold leading-[1.08] mb-5 ${
                            t.featured ? "text-white" : "text-[var(--text-primary)]"
                          }`}
                        >
                          {t.price === "Custom" ? (
                            <span className="text-[40px] md:text-[48px]">Custom Pricing</span>
                          ) : (
                            <>
                              <span className={`block text-[16px] font-medium mb-1 ${t.featured ? "text-white/55" : "text-[var(--text-muted)]"}`}>
                                Starting from
                              </span>
                              <span className="text-[40px] md:text-[52px]">
                                {t.price}
                                <span className={`text-[22px] ${t.featured ? "text-white/55" : "text-[var(--text-muted)]"}`}>/month</span>
                              </span>
                            </>
                          )}
                        </h2>
                        <p
                          className={`text-[13.5px] leading-[1.7] mb-7 ${
                            t.featured ? "text-white/60" : "text-[var(--text-secondary)]"
                          }`}
                        >
                          {t.tagline}
                        </p>
                        <a
                          href={t.href}
                          className={`inline-flex h-11 items-center px-6 rounded-full text-[13px] font-semibold transition-colors ${
                            t.featured
                              ? "bg-white text-[var(--brand-navy)] hover:bg-white/90"
                              : "bg-[var(--brand-navy)] text-white hover:bg-[#050d22]"
                          }`}
                        >
                          {t.cta}
                        </a>
                      </div>

                      {/* Right: 3 sub-panels */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <SubPanel
                          label="Includes"
                          items={t.includes}
                          dark={t.featured}
                        />
                        <SubPanel
                          label="Accountables One"
                          items={t.accountablesOne}
                          dark={t.featured}
                        />
                        <SubPanel
                          label={t.suitedFor ? "Best Suited For" : "Operational Scope"}
                          items={t.suitedFor ? [t.suitedFor] : t.scope}
                          note={t.addon}
                          dark={t.featured}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <p className="mt-4 text-center text-[12.5px] text-[var(--text-muted)]">
                All prices in GBP, exclusive of VAT · No long-term contracts · Billed monthly
              </p>
            </div>
          </div>
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
