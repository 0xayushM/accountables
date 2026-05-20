import Link from "next/link";
import { RevealBlock } from "./RevealBlock";
import ScrollRevealText from "./ScrollRevealText";

// ─── Finance Operations Environment dashboard mockup ─────────────────────────
// Layout mirrors the screenshot; colours use the site's brand tokens.

function DashboardMockup() {
  const cashBars = [
    { month: "Oct", income: 52, expenses: 38 },
    { month: "Nov", income: 61, expenses: 42 },
    { month: "Dec", income: 48, expenses: 36 },
    { month: "Jan", income: 70, expenses: 50 },
    { month: "Feb", income: 65, expenses: 44 },
    { month: "Mar", income: 78, expenses: 51 },
  ];
  const maxBar = 78;

  return (
    <div
      className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_32px_80px_-20px_rgba(11,30,63,0.55)]"
      style={{ background: "linear-gradient(160deg, var(--brand-navy) 0%, #14305f 55%, #1d4ed8 100%)" }}
      aria-hidden
    >
      {/* Subtle stripe overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 48px, transparent 48px, transparent 96px)" }}
      />
      {/* Glow orb */}
      <div
        className="absolute -top-1/4 -right-1/4 h-[60%] w-[60%] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)" }}
      />

      {/* ── Top bar ── */}
      <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        {/* Left: icon only */}
        <div
          className="h-8 w-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <img src="/prod_icon.svg" alt="Accountables" style={{ display: "block", height: "18px", width: "32px", filter: "brightness(0) invert(1)" }} />
        </div>
        {/* Right: signed-in avatar */}
        <div className="h-7 w-7 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
          <img src="/avatar2.png" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="relative p-4 space-y-3">

        {/* Row 1: 3 KPI snapshot cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Cash in bank */}
          <div className="col-span-1 bg-white/[0.08] border border-white/10 rounded-2xl p-3.5">
            <p className="text-[8.5px] tracking-[0.15em] uppercase font-semibold text-white/35 mb-2">Cash in bank</p>
            <p className="text-[18px] font-semibold text-white leading-none tabular-nums">£48,230</p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="text-green-400 text-[9px] font-semibold">↑ 12%</span>
              <span className="text-white/30 text-[9px]">vs last month</span>
            </div>
          </div>
          {/* Invoices owed */}
          <div className="col-span-1 bg-white/[0.08] border border-white/10 rounded-2xl p-3.5">
            <p className="text-[8.5px] tracking-[0.15em] uppercase font-semibold text-white/35 mb-2">Invoices owed</p>
            <p className="text-[18px] font-semibold text-white leading-none tabular-nums">£18,450</p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
              <span className="text-red-400 text-[9px] font-medium">£3,200 overdue</span>
            </div>
          </div>
          {/* Bills to pay */}
          <div className="col-span-1 bg-white/[0.08] border border-white/10 rounded-2xl p-3.5">
            <p className="text-[8.5px] tracking-[0.15em] uppercase font-semibold text-white/35 mb-2">Bills to pay</p>
            <p className="text-[18px] font-semibold text-white leading-none tabular-nums">£6,340</p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="text-amber-400 text-[9px] font-semibold">2 due this week</span>
            </div>
          </div>
        </div>

        {/* Row 2: Cash flow chart + Invoice breakdown */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-2.5">

          {/* Cash flow mini chart */}
          <div className="bg-white/[0.08] border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[8.5px] tracking-[0.15em] uppercase font-semibold text-white/35">Cash flow</p>
              <span className="text-[8.5px] text-white/30">Last 6 months</span>
            </div>
            {/* Legend */}
            <div className="flex gap-3 mb-3">
              <span className="flex items-center gap-1 text-[8.5px] text-white/50">
                <span className="h-1.5 w-3 rounded-full inline-block" style={{ background: "rgba(99,179,237,0.8)" }} />
                Income
              </span>
              <span className="flex items-center gap-1 text-[8.5px] text-white/50">
                <span className="h-1.5 w-3 rounded-full inline-block bg-white/20" />
                Expenses
              </span>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1.5" style={{ height: 56 }}>
              {cashBars.map((b) => (
                <div key={b.month} className="flex-1 flex flex-col items-center gap-px">
                  <div className="w-full flex items-end gap-0.5" style={{ height: 48 }}>
                    <div
                      className="flex-1 rounded-t-sm"
                      style={{ height: `${(b.income / maxBar) * 48}px`, background: "rgba(99,179,237,0.7)" }}
                    />
                    <div
                      className="flex-1 rounded-t-sm"
                      style={{ height: `${(b.expenses / maxBar) * 48}px`, background: "rgba(255,255,255,0.18)" }}
                    />
                  </div>
                  <span className="text-[7.5px] text-white/30">{b.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Invoice status */}
          <div className="bg-white/[0.08] border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
            <p className="text-[8.5px] tracking-[0.15em] uppercase font-semibold text-white/35 mb-3">Invoice status</p>
            <div className="flex flex-col gap-2.5 flex-1 justify-center">
              {[
                { label: "Draft", amount: "£2,100", pct: 11, color: "rgba(255,255,255,0.25)" },
                { label: "Awaiting", amount: "£13,150", pct: 71, color: "rgba(99,179,237,0.8)" },
                { label: "Overdue", amount: "£3,200", pct: 18, color: "rgba(252,129,74,0.9)" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-white/60">{row.label}</span>
                    <span className="text-[10px] font-semibold text-white tabular-nums">{row.amount}</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.10)" }}>
                    <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: row.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Recent Transactions */}
        <div className="bg-white/[0.08] border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[8.5px] tracking-[0.15em] uppercase font-semibold text-white/35">Recent transactions</p>
            <span className="text-[8.5px] text-[var(--brand-accent)] font-medium cursor-pointer">View all</span>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.07]">
            {[
              { name: "HMRC VAT Q1",     ref: "VAT-2026-Q1", amount: "-£3,800", status: "Reconciled", statusColor: "text-green-400",  icon: "🏛" },
              { name: "Client Invoice",  ref: "INV-0142",    amount: "+£2,400", status: "Awaiting",   statusColor: "text-amber-400",  icon: "📄" },
              { name: "Payroll - April", ref: "PAY-APR-26",  amount: "-£8,240", status: "Processed",  statusColor: "text-green-400",  icon: "👥" },
              { name: "Office Supplies", ref: "EXP-0087",    amount: "-£245",   status: "Unreconciled", statusColor: "text-red-400", icon: "🧾" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div
                  className="h-6 w-6 rounded-lg flex-shrink-0 flex items-center justify-center text-[11px]"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  {tx.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10.5px] font-medium text-white/80 truncate">{tx.name}</p>
                  <p className="text-[8.5px] text-white/30">{tx.ref}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`text-[10.5px] font-semibold tabular-nums ${tx.amount.startsWith("+") ? "text-green-400" : "text-white/80"}`}>{tx.amount}</p>
                  <p className={`text-[8.5px] ${tx.statusColor}`}>{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Feature rows ─────────────────────────────────────────────────────────────

const features = [
  {
    title: "Reporting Visibility",
    body: "Access reporting environments designed around financial clarity, operational visibility and ongoing business performance tracking.",
    tags: ["KPI dashboards", "Reporting visibility", "Financial snapshots"],
  },
  {
    title: "Coordinated Execution",
    body: "Accounting, compliance and reporting workflows managed within one connected operating environment.",
    tags: ["Task tracking", "Compliance timelines", "Workflow status visibility"],
  },
  {
    title: "Ongoing Finance Support",
    body: "Communicate, coordinate and manage ongoing finance activities with the Accountables team through a centralized operational environment.",
    tags: ["Team communication", "Approvals", "Queries and ongoing coordination"],
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function FinanceOrganized() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-8">

            {/* Headline */}
            <div>
              <RevealBlock delay={0}>
                <h2 className="display text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[var(--text-primary)] leading-[1.02]">
                  Finance,{" "}
                  <span className="accent">Organized</span>.
                </h2>
              </RevealBlock>
              <RevealBlock delay={80} className="mt-5 max-w-[440px]">
                <ScrollRevealText
                  text="A more structured approach to accounting, reporting and finance coordination - designed to bring clarity and consistency to day-to-day finance operations."
                  className="text-[16px] md:text-[17px] leading-[1.7]"
                />
              </RevealBlock>
              <RevealBlock delay={140}>
                <p className="mt-3 text-[12.5px] text-[var(--text-muted)]">
                  Powered by{" "}
                  <a
                    href="https://one.accountables.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--brand-blue)] hover:underline underline-offset-2 inline-flex items-center gap-1"
                  >Accountables
                    <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />
                  </a>
                  .
                </p>
              </RevealBlock>
            </div>

            {/* Feature rows */}
            <div className="flex flex-col divide-y divide-[var(--border)]">
              {features.map((f, i) => (
                <RevealBlock key={f.title} delay={200 + i * 80}>
                  <div className={`flex flex-col gap-3 ${i === 0 ? "pb-7" : "py-7"}`}>
                    <h3 className="text-[16px] md:text-[17px] font-semibold text-[var(--text-primary)]">
                      {f.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">{f.body}</p>
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {f.tags.map((tag) => (
                        <span key={tag} className="pill text-[11px] !py-1 !px-2.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>

            {/* CTA → Services */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/services" className="btn-primary">
                Explore services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/#contact" className="btn-ghost">
                Book a consultation
              </Link>
            </div>
          </div>

          {/* ── Right: dashboard ── */}
          <div className="lg:pt-4 lg:sticky lg:top-24 self-start">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
