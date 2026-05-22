import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";

export const metadata: Metadata = {
  title: "Why Accountables",
  description:
    "Real-time accounting, top-notch service, and a team that talks numbers like a partner.",
};

const reasons = [
  {
    title: "Profitability",
    body:
      "We help you spot the financial opportunities to grow margins and trim what isn't earning its keep.",
    metric: "+22%",
    metricLabel: "Avg. margin lift",
  },
  {
    title: "Availability",
    body:
      "An eager team that talks numbers like a partner - not a portal. Real humans, fast responses.",
    metric: "<24h",
    metricLabel: "Response time",
  },
  {
    title: "Affordability",
    body:
      "Quality finance support without the in-house overhead. Pricing built around the work, not the seat.",
    metric: "£20",
    metricLabel: "From, per hour",
  },
  {
    title: "Convenience",
    body:
      "Submit documents and track the progress of your accounts and filings through one calm platform.",
    metric: "1",
    metricLabel: "Place for everything",
  },
];

const values = [
  {
    title: "Numbers are stories.",
    body:
      "We don't just file forms. We help you read what the numbers are actually saying about the business.",
  },
  {
    title: "Tools, then people.",
    body:
      "Software does the repetitive work; our team does the thinking. You get speed without losing judgment.",
  },
  {
    title: "No surprises.",
    body:
      "Fixed pricing, predictable cadence, and clear communication. If we see a problem, you'll hear about it first.",
  },
  {
    title: "Built for growth.",
    body:
      "From your first invoice to your Series A and beyond - the finance function scales with you.",
  },
];

export default function WhyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Why Accountables"
        title="A finance partner,"
        highlight="not just a filing service."
        description="Real-time accounting with a process-based approach and top-notch customer service. Consider us your outsourced finance department - without the overhead."
        serif={{ inTitle: "partner", inHighlight: "filing" }}
      />

      {/* Metrics grid */}
      <section className="pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="card p-7">
                <div className="display text-[36px] md:text-[44px] font-semibold tracking-tight text-[var(--brand-navy)]">
                  {r.metric}
                </div>
                <div className="text-[12px] tracking-[0.14em] uppercase text-[var(--text-muted)] mt-1">
                  {r.metricLabel}
                </div>
                <h3 className="display mt-5 text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)]">
                  {r.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.5] text-[var(--text-secondary)]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="pill">What we believe</span>
              <h2 className="display mt-5 text-[36px] sm:text-[44px] md:text-[56px] font-semibold text-[var(--text-primary)]">
                How we <span className="accent">think</span> about
                <br />
                <span className="text-[var(--text-muted)]">your numbers.</span>
              </h2>
              <p className="mt-5 max-w-md text-[16px] md:text-[17px] leading-[1.55] text-[var(--text-secondary)]">
                A few principles that keep our work honest and useful.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
              {values.map((v) => (
                <div key={v.title} className="card p-7">
                  <h3 className="display text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--text-secondary)]">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difference strip */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <span className="pill">The difference</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              We <span className="accent">specialise</span> in e-commerce.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)]">
              From multi-channel sales to international VAT, we know the messy
              edges of e-commerce accounting - and we have a quick turnaround on
              year-end accounts.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { k: "500+ ", v: "Businesses served" },
              { k: "20+", v: "Countries supported" },
              { k: "98%", v: "Client retention" },
            ].map((s) => (
              <div key={s.k} className="card p-7 text-center">
                <div className="display text-[40px] md:text-[48px] font-semibold text-[var(--brand-navy)]">
                  {s.k}
                </div>
                <div className="text-[12px] tracking-[0.14em] uppercase text-[var(--text-muted)] mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Talk to us"
        title="A real finance team is one call away."
        body="See how we can take month-end, tax, and reporting off your plate - for less than the cost of a junior hire."
      />
    </PageShell>
  );
}
