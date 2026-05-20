export function Platform() {
  return (
    <section id="platform" className="py-24 md:py-32 bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill">The platform</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[64px] font-semibold text-[var(--text-primary)]">
            <span className="accent">Smart</span> tools.
            <br />
            <span className="accent">Smarter</span> people.
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)]">
            Live dashboards, automated reconciliation, and a real team behind
            every number. See where you stand without waiting for month-end.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Large card */}
          <div className="lg:col-span-2 card p-8 md:p-12 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="pill">Live insights</span>
                <h3 className="display mt-4 text-[26px] md:text-[34px] font-semibold text-[var(--text-primary)]">
                  Track every expense in real time
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-[var(--text-secondary)]">
                  Books update as transactions happen. No more waiting weeks for
                  yesterday&apos;s numbers.
                </p>
              </div>
              <MockDashboard />
            </div>
          </div>

          {/* Side cards */}
          <div className="card p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden relative">
            <div>
              <span className="pill">Cash flow</span>
              <h3 className="display mt-4 text-[22px] md:text-[26px] font-semibold text-[var(--text-primary)]">
                Model scenarios with confidence
              </h3>
            </div>
            <MockBars />
          </div>

          <div className="card p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden relative">
            <div>
              <span className="pill">Tax</span>
              <h3 className="display mt-4 text-[22px] md:text-[26px] font-semibold text-[var(--text-primary)]">
                Compliance without the scramble
              </h3>
            </div>
            <MockChecklist />
          </div>

          <div className="lg:col-span-2 card p-8 md:p-12 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="pill">Reporting</span>
                <h3 className="display mt-4 text-[26px] md:text-[34px] font-semibold text-[var(--text-primary)]">
                  Stakeholder-ready financial reports
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-[var(--text-secondary)]">
                  P&amp;L, balance sheet, cash flow - generated continuously,
                  not at month-end.
                </p>
              </div>
              <MockReport />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockDashboard() {
  return (
    <div className="relative rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[13px] font-medium">Cash overview</div>
        <div className="text-[11px] text-[var(--text-muted)]">Last 6 months</div>
      </div>
      <div className="flex items-end gap-2 h-24">
        {[40, 65, 50, 75, 60, 85].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col gap-1 justify-end">
            <div
              className="rounded-t-md"
              style={{
                height: `${h}%`,
                background:
                  "linear-gradient(180deg, var(--brand-blue), var(--brand-accent))",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <div>
          <div className="text-[11px] text-[var(--text-muted)]">Cash in</div>
          <div className="display text-[18px] font-semibold">£148.2k</div>
        </div>
        <div className="text-[12px] text-emerald-600 font-medium">+12.4%</div>
      </div>
    </div>
  );
}

function MockBars() {
  return (
    <div className="mt-6 rounded-xl border border-[var(--border)] bg-white p-4">
      <div className="flex items-end justify-between h-20 gap-1.5">
        {[30, 50, 35, 65, 45, 75, 55].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background:
                i % 2 === 0 ? "var(--brand-navy)" : "rgba(29, 78, 216, 0.25)",
            }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
        <span>Runway</span>
        <span className="font-medium text-[var(--text-primary)]">14.2 months</span>
      </div>
    </div>
  );
}

function MockChecklist() {
  const items = ["VAT return", "Corporation tax", "PAYE filed", "Self-assessment"];
  return (
    <div className="mt-6 rounded-xl border border-[var(--border)] bg-white p-4 space-y-2">
      {items.map((label, i) => (
        <div
          key={label}
          className="flex items-center gap-2.5 text-[12.5px]"
        >
          <span
            className={`h-4 w-4 rounded-full flex items-center justify-center ${
              i < 3 ? "bg-emerald-500" : "border border-[var(--border-strong)]"
            }`}
          >
            {i < 3 && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l4 4L19 6"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          <span
            className={
              i < 3
                ? "text-[var(--text-muted)] line-through"
                : "text-[var(--text-primary)] font-medium"
            }
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockReport() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[13px] font-medium">Profit &amp; Loss</div>
        <div className="text-[11px] text-[var(--text-muted)]">May 2026</div>
      </div>
      <div className="space-y-2.5 text-[12.5px]">
        {[
          ["Revenue", "£284,120", "text-[var(--text-primary)]"],
          ["Cost of sales", "£98,440", "text-[var(--text-secondary)]"],
          ["Gross profit", "£185,680", "text-[var(--text-primary)] font-medium"],
          ["Operating exp.", "£72,210", "text-[var(--text-secondary)]"],
        ].map(([k, v, c]) => (
          <div key={k} className="flex justify-between border-b border-[var(--border)] pb-2 last:border-b-0">
            <span className="text-[var(--text-secondary)]">{k}</span>
            <span className={c as string}>{v}</span>
          </div>
        ))}
        <div className="flex justify-between pt-1">
          <span className="font-medium">Net profit</span>
          <span className="display font-semibold text-emerald-600">£113,470</span>
        </div>
      </div>
    </div>
  );
}
