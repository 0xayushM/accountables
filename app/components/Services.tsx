const services = [
  {
    eyebrow: "01",
    title: "Bookkeeping",
    body:
      "Real-time books done right. We automate where possible and handle large volumes with care — setup, migration, payroll, and invoicing included.",
    bullets: [
      "Accounting setup & migration",
      "Real-time, periodic bookkeeping",
      "Accounts payable & receivable",
      "Payroll & invoicing",
    ],
  },
  {
    eyebrow: "02",
    title: "Accounting & Tax",
    body:
      "Compliance you can sleep on. End-to-end tax filing, returns, and HMRC liaison so your records hold up to scrutiny.",
    bullets: [
      "Corporation & personal tax",
      "VAT & PAYE",
      "Self-assessment filing",
      "HMRC correspondence",
    ],
  },
  {
    eyebrow: "03",
    title: "Financial Analysis",
    body:
      "Decisions, not just data. Live dashboards for cash, burn, runway, and unit economics — answered in seconds.",
    bullets: [
      "Cash flow & runway models",
      "Management reports",
      "KPI dashboards",
      "Forecasts & scenarios",
    ],
  },
  {
    eyebrow: "04",
    title: "Year-end Accounts",
    body:
      "Investor-ready, auditor-friendly. Statutory accounts filed on time with quick turnarounds — especially for e-commerce.",
    bullets: [
      "Statutory accounts",
      "Companies House filing",
      "E-commerce specialism",
      "Audit-ready reporting",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="pill">Our services</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[64px] font-semibold text-[var(--text-primary)]">
            One <span className="accent">finance</span> team.
            <br />
            <span className="text-[var(--text-muted)]">Every back-office need.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)]">
            We handle the books, taxes, and reports so you can spend your time
            on the business itself. Choose what you need — we&apos;ll cover the rest.
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card p-7 md:p-10 group relative overflow-hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(29, 78, 216, 0.18) 0%, transparent 70%)",
                }}
              />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[12px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                    {s.eyebrow}
                  </div>
                  <h3 className="display mt-2 text-[28px] md:text-[32px] font-semibold text-[var(--text-primary)]">
                    {s.title}
                  </h3>
                </div>
                <ServiceIcon index={i} />
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[1.55] text-[var(--text-secondary)]">
                {s.body}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[14px] text-[var(--text-primary)]"
                  >
                    <svg
                      className="mt-1 flex-shrink-0 text-[var(--brand-blue)]"
                      width="14"
                      height="14"
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
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--brand-blue)] hover:gap-2.5 transition-all"
              >
                Learn more
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // book
    <svg key="book" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    // shield
    <svg key="shield" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // chart
    <svg key="chart" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    // calendar
    <svg key="cal" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
  ];
  return (
    <div
      className="flex-shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center"
      style={{
        background: "var(--surface-soft)",
        color: "var(--brand-navy)",
      }}
    >
      {icons[index]}
    </div>
  );
}
