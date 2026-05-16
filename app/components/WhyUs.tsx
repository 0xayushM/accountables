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
      "An eager team that talks numbers like a partner — not a portal. Get your books in shape, faster.",
    metric: "<24h",
    metricLabel: "Response time",
  },
  {
    title: "Affordability",
    body:
      "Starting at just £20/hour. Quality finance support without the in-house overhead.",
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

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="pill">Why Accountables</span>
            <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-[var(--text-primary)]">
              We&apos;ve got
              <br />
              you <span className="accent">covered</span>.
            </h2>
            <p className="mt-6 max-w-md text-[16px] md:text-[17px] leading-[1.55] text-[var(--text-secondary)]">
              A process-based approach with top-notch customer service. Consider
              us your outsourced finance department — without the overhead.
            </p>
            <a href="#contact" className="btn-ghost mt-8">
              Talk to us today
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
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
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
      </div>
    </section>
  );
}
