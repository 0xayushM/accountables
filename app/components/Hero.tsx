import Image from "next/image";
import Link from "next/link";

// ─── Person avatar (SVG silhouette) ──────────────────────────────────────────

function Avatar({ bg, src, size = 36 }: { bg: string; src?: string; size?: number }) {
  return (
    <div
      className="rounded-full flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size, background: bg }}
    >
      {src ? (
        <Image src={src} alt="" width={size} height={size} className="object-cover w-full h-full" />
      ) : (
        <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
          <circle cx="18" cy="14" r="7" fill="rgba(255,255,255,0.90)" />
          <ellipse cx="18" cy="32" rx="13" ry="9" fill="rgba(255,255,255,0.90)" />
        </svg>
      )}
    </div>
  );
}

// ─── Dashboard Mockup ────────────────────────────────────────────────────────

function DashboardMockup() {
  const expenses = [
    { label: "Rent Expense",       pct: 30 },
    { label: "Cost of Goods Sold", pct: 25 },
    { label: "Marketing Expense",  pct: 20 },
    { label: "Shipping Expense",   pct: 12 },
    { label: "Payroll Expense",    pct: 8  },
  ];

  // Bar heights (%) for 7 months — last two are highlighted
  const months = [
    { label: "OCT", h: 42 },
    { label: "NOV", h: 60 },
    { label: "DEC", h: 52 },
    { label: "JAN", h: 78 },
    { label: "FEB", h: 68 },
    { label: "MAR", h: 90, hi: true },
    { label: "APR", h: 80, hi: true },
  ];

  // Polyline points for trend line (SVG space: 196 × 80)
  const svgW = 196;
  const svgH = 80;
  const bw = svgW / months.length;
  const pts = months
    .map((m, i) => `${i * bw + bw / 2},${svgH - (m.h / 100) * svgH}`)
    .join(" ");

  return (
    <div className="relative select-none" aria-hidden>

      {/* ── Chat bubble — Jess (top-left) ── */}
      <div className="absolute -top-12 -left-4 z-10 bg-white rounded-2xl rounded-tl-sm shadow-xl border border-black/[0.06] p-4 max-w-[260px]">
        <div className="flex items-start gap-3">
          <Avatar bg="linear-gradient(150deg, #3b82f6 0%, #1d4ed8 100%)" src="/avatar1.png" size={80} />
          <div>
            <p className="text-[11px] font-semibold text-[#1d4ed8] mb-0.5">Jess · Accountables</p>
            <p className="text-[12px] leading-[1.55] text-gray-800">
              Hey! Your books are up-to-date — ready to unlock tax credits too?
            </p>
          </div>
        </div>
      </div>

      {/* ── Main dashboard card ── */}
      <div className="relative mt-10 bg-white rounded-2xl shadow-2xl border border-black/[0.06] overflow-hidden">
        {/* Card header */}
        <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-gray-400">Finance Overview</p>
            <p className="text-[13px] font-semibold text-gray-800 leading-none mt-0.5">Apr 2026</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-6 w-6 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">≡</span>
            <span className="h-6 w-6 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">⋯</span>
          </div>
        </div>

        {/* Body: bar chart + expenses side by side */}
        <div className="grid grid-cols-[1.15fr_1fr] divide-x divide-gray-100">

          {/* Left: vertical bar chart with trend line */}
          <div className="px-4 pt-4 pb-3">
            <p className="text-[9px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">Revenue · 7mo</p>
            <div className="relative">
              {/* SVG bars */}
              <div className="flex items-end gap-[5px] h-[82px]">
                {months.map((m) => (
                  <div
                    key={m.label}
                    className="flex-1 rounded-t-[4px]"
                    style={{
                      height: `${m.h}%`,
                      background: m.hi
                        ? "linear-gradient(180deg, #1d4ed8 0%, #3b82f6 100%)"
                        : "#e2e8f0",
                    }}
                  />
                ))}
              </div>
              {/* Trend line overlay */}
              <svg
                viewBox={`0 0 ${svgW} ${svgH}`}
                width="100%"
                height="82"
                className="absolute inset-0 pointer-events-none"
                preserveAspectRatio="none"
              >
                <polyline
                  points={pts}
                  fill="none"
                  stroke="#0a84ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 2"
                />
                {/* Dot on last bar */}
                <circle
                  cx={`${6 * bw + bw / 2}`}
                  cy={`${svgH - (80 / 100) * svgH}`}
                  r="3.5"
                  fill="#0a84ff"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            {/* Month labels */}
            <div className="flex justify-between mt-2">
              {months.map((m) => (
                <span
                  key={m.label}
                  className="flex-1 text-center text-[8px]"
                  style={{ color: m.hi ? "#1d4ed8" : "#9ca3af" }}
                >
                  {m.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: top expenses with navy badges */}
          <div className="px-4 pt-4 pb-3">
            <p className="text-[9px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">Top Expenses</p>
            <div className="flex flex-col gap-[9px]">
              {expenses.map((e) => (
                <div key={e.label} className="flex items-center justify-between gap-2">
                  <span className="text-[10.5px] text-gray-600 leading-tight truncate">{e.label}</span>
                  <span
                    className="flex-shrink-0 text-[10px] font-bold text-white rounded-md px-2 py-0.5"
                    style={{ background: "var(--brand-navy)" }}
                  >
                    {e.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Chat bubble — client (bottom-right) ── */}
      <div className="absolute -bottom-12 -right-12 z-10 bg-white rounded-2xl rounded-br-sm shadow-xl border grid grid-cols-2 items-center border-black/[0.06] p-4 w-full max-w-[250px]">
        <p className="text-[12px] leading-[1.55] text-gray-800">
          Absolutely! Unlocking tax credits would be a game-changer!
        </p>
        <div className="flex items-center justify-end gap-2 mt-2.5">
          <Avatar bg="linear-gradient(150deg, #14305f 0%, #1d4ed8 100%)" src="/avatar2.png" size={80} />
        </div>
      </div>

      {/* ── Floating pill — bottom-left ── */}
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
              <span>Accountables One · <span className="font-semibold">Join the waitlist</span></span>
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
