import Link from "next/link";

// ─── Dashboard Mockup ────────────────────────────────────────────────────────

function DashboardMockup() {
  const expenses = [
    { label: "Rent Expense", pct: 30, color: "#1d4ed8" },
    { label: "Cost of Goods Sold", pct: 25, color: "#2563eb" },
    { label: "Marketing Expense", pct: 20, color: "#3b82f6" },
    { label: "Shipping Expense", pct: 12, color: "#60a5fa" },
    { label: "Payroll Expense", pct: 8, color: "#93c5fd" },
  ];

  return (
    <div className="relative select-none" aria-hidden>
      {/* Chat bubble — bookkeeper (top left) */}
      <div className="absolute -top-10 -left-4 z-10 bg-white rounded-2xl rounded-tl-sm shadow-xl border border-black/[0.06] p-4 max-w-[260px]">
        <div className="flex items-start gap-3">
          <div
            className="h-9 w-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[11px] font-bold"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #0a84ff)" }}
          >
            JH
          </div>
          <div>
            <p className="text-[12.5px] leading-[1.5] text-gray-800">
              Hey! Jess here. Your books are up-to-date — ready to unlock tax credits too?
            </p>
          </div>
        </div>
      </div>

      {/* Main dashboard card */}
      <div className="relative mt-8 bg-white rounded-2xl shadow-2xl border border-black/[0.06] overflow-hidden">
        {/* Mini chart header */}
        <div className="px-5 pt-4 pb-3 border-b border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold tracking-wide text-gray-400 uppercase">Top Expenses</span>
            <div className="flex gap-1.5">
              <span className="h-5 w-5 rounded bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-medium">≡</span>
              <span className="h-5 w-5 rounded bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-medium">⋯</span>
            </div>
          </div>
        </div>

        {/* Bar chart */}
        <div className="px-5 py-4 space-y-2.5">
          {expenses.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-[11px] text-gray-500 w-36 text-right leading-tight truncate flex-shrink-0">
                {item.label}
              </span>
              <div className="flex-1 bg-gray-100 rounded-full h-[7px] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${item.pct * 3}%`, background: item.color }}
                />
              </div>
              <span
                className="text-[11px] font-semibold w-7 text-right"
                style={{ color: item.color }}
              >
                {item.pct}%
              </span>
            </div>
          ))}
        </div>

        {/* Mini bar chart visual */}
        <div className="px-5 pb-4 pt-2 flex items-end gap-2 h-24 border-t border-gray-50">
          {[40, 65, 55, 80, 70, 95, 82].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md transition-all"
                style={{
                  height: `${h}%`,
                  background: i === 6
                    ? "linear-gradient(180deg, #1d4ed8, #60a5fa)"
                    : i === 5
                    ? "linear-gradient(180deg, #2563eb, #93c5fd)"
                    : "#e2e8f0",
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between px-5 pb-3 text-[10px] text-gray-400">
          <span>OCT</span><span>NOV</span><span>DEC</span><span>JAN</span><span>FEB</span><span>MAR</span><span className="text-[var(--brand-blue)] font-medium">APR</span>
        </div>
      </div>

      {/* Chat bubble — client response (bottom right) */}
      <div className="absolute -bottom-10 -right-2 z-10 bg-white rounded-2xl rounded-br-sm shadow-xl border border-black/[0.06] p-4 max-w-[220px]">
        <p className="text-[12.5px] leading-[1.5] text-gray-800">
          Absolutely! Unlocking tax credits would be a game-changer!
        </p>
        <div className="flex items-center justify-end gap-2 mt-2">
          <div
            className="h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
            style={{ background: "linear-gradient(135deg, #0b1e3f, #1d4ed8)" }}
          >
            AM
          </div>
        </div>
      </div>

      {/* Metrics pill floating bottom-left */}
      <div className="absolute -bottom-6 left-4 z-20 bg-white rounded-full shadow-lg border border-black/[0.06] px-4 py-2 flex items-center gap-2">
        <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px]">✓</span>
        <span className="text-[11.5px] font-semibold text-gray-700">Books up-to-date</span>
        <span className="text-[11px] text-gray-400">· Apr 2026</span>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 jersey-stripes opacity-[0.85]" />
      <div aria-hidden className="absolute inset-0 jersey-fade" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ── Left: copy ── */}
          <div>
            {/* AI chip */}
            <Link href="/ai" className="rise rise-1 waitlist-chip mb-7 group inline-flex">
              <span className="inline-flex items-center gap-2">
                <span className="dot-pulse" />
                <span className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-white/80">New</span>
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span>Accountables AI · <span className="font-semibold">Join the waitlist</span></span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Headline */}
            <h1 className="rise rise-2 display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[var(--text-primary)] leading-[1.02]">
              Modern{" "}
              <span className="accent">Finance</span>
              <br />
              Function.
            </h1>

            {/* Sub-copy */}
            <p className="rise rise-3 mt-6 text-[16px] md:text-[18px] leading-[1.6] text-[var(--text-secondary)] max-w-md">
              Designed around connected finance operations.
            </p>

            {/* CTA */}
            <div className="rise rise-4 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/#contact"
                className="btn-primary !px-7 !py-3 !text-[14.5px]"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Powered by */}
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

          {/* ── Right: dashboard mockup ── */}
          <div className="rise rise-4 hidden lg:block relative">
            <div
              className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-40"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(29,78,216,0.22) 0%, transparent 70%)",
              }}
            />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
