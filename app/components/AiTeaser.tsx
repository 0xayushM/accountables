const features = [
  { l: "Auto-classify", s: "99.2% confidence" },
  { l: "Reconcile", s: "6 accounts in parallel" },
  { l: "Report", s: "P&L · BS · CF · KPIs" },
  { l: "Flag", s: "Anomalies in real time" },
  { l: "Forecast", s: "Cash runway, weekly" },
  { l: "Audit", s: "Every entry traceable" },
];

export function AiTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-8 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(29, 78, 216, 0.06) 0%, rgba(10, 132, 255, 0.04) 100%)",
            border: "1px solid rgba(29, 78, 216, 0.18)",
          }}
        >
          {/* Faint jersey stripes overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.5] jersey-stripes pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -top-1/3 -right-1/4 h-[120%] w-[60%] rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(10, 132, 255, 0.35) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="eyebrow">Now in private beta</span>
              <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[64px] font-semibold text-[var(--text-primary)] leading-[1.02]">
                Meet <span className="accent">AI Close</span>.
              </h2>
              <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)] max-w-md">
                Our autonomous month-end engine. Classifies transactions, runs
                reconciliations, drafts your P&amp;L and flags anomalies - all
                before you&apos;ve poured your second coffee.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="/ai" className="btn-primary">
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
                <a href="/ai" className="btn-ghost">
                  How it works
                </a>
              </div>
              <div className="mono mt-6 uppercase text-[var(--text-muted)]">
                47 seats remaining · Beta ships Q3 &apos;26
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((f, i) => (
                <div
                  key={f.l}
                  className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--border)]"
                >
                  <div className="mono text-[var(--brand-blue)] uppercase">
                    0{i + 1}
                  </div>
                  <div className="mt-2 text-[15px] font-medium text-[var(--text-primary)]">
                    {f.l}
                  </div>
                  <div className="mono mt-1 text-[var(--text-muted)] normal-case tracking-normal">
                    {f.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
