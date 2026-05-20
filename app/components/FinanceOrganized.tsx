import Link from "next/link";
import { RevealBlock } from "./RevealBlock";
import ScrollRevealText from "./ScrollRevealText";

// ─── Finance Operations Environment dashboard mockup ─────────────────────────
// Layout mirrors the screenshot; colours use the site's brand tokens.

function DashboardMockup() {
  return (
    <div
      className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_32px_80px_-20px_rgba(11,30,63,0.55)]"
      style={{
        background: "linear-gradient(160deg, var(--brand-navy) 0%, #14305f 55%, #1d4ed8 100%)",
      }}
      aria-hidden
    >
      {/* Subtle jersey stripe overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 48px, transparent 48px, transparent 96px)",
        }}
      />
      {/* Glow orb */}
      <div
        className="absolute -top-1/4 -right-1/4 h-[60%] w-[60%] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)" }}
      />

      {/* Window chrome */}
      <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <p className="text-[9px] tracking-[0.2em] uppercase font-semibold text-white/40 mb-0.5 flex items-center gap-1">
            <img src="/icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.4 }} />Accountables One
          </p>
          <p className="text-[15px] font-semibold text-white leading-none">
            Finance Operations Environment
          </p>
        </div>
        <div className="flex gap-1.5">
          {["bg-white/20", "bg-white/20", "bg-white/20"].map((c, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="relative p-4 space-y-3">

        {/* Row 1: Accounts Payable + Reporting Visibility */}
        <div className="grid grid-cols-[1fr_1.1fr] gap-3">

          {/* Accounts Payable */}
          <div className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-4">
            <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-white/40 mb-3">
              Accounts Payable
            </p>
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-[12.5px] font-medium text-white/70">Invoices</span>
              <span className="display text-[20px] font-semibold text-white">24</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
              <div
                className="h-full rounded-full"
                style={{ width: "68%", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-accent))" }}
              />
            </div>
            <p className="text-[10.5px] text-white/40 mt-2">Reconciliation in progress</p>
          </div>

          {/* Reporting Visibility */}
          <div className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-4">
            <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-white/40 mb-3">
              Reporting Visibility
            </p>
            {/* Month-end close */}
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-white/70">Month-End Close</span>
                <span className="text-[11px] font-semibold text-white">82%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: "82%", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-accent))" }}
                />
              </div>
            </div>
            {/* Payroll review */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-white/70">Payroll Review</span>
                <span className="text-[11px] font-semibold text-green-400">Complete</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
                <div className="h-full rounded-full bg-green-400" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Connected Workflow */}
        <div className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-white/40 mb-1">
                Connected Workflow
              </p>
              <p className="text-[15px] font-semibold text-white leading-tight">
                Operational Coordination
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-green-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Environment
            </span>
          </div>

          {/* Step pipeline */}
          <div className="grid grid-cols-4 gap-1">
            {[
              { label: "Bookkeeping", done: true },
              { label: "Compliance", done: true },
              { label: "Reporting", done: false },
              { label: "Planning", done: false },
            ].map((step, i) => (
              <div key={step.label} className="flex flex-col items-center gap-2">
                <div className="relative w-full flex items-center justify-center">
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center z-10 ${
                      step.done
                        ? "border-[var(--brand-accent)] bg-[var(--brand-accent)]"
                        : "border-white/20 bg-transparent"
                    }`}
                  >
                    {step.done && (
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  {/* Connector */}
                  {i < 3 && (
                    <div
                      className="absolute left-[calc(50%+10px)] right-[-50%] top-1/2 -translate-y-1/2 h-px"
                      style={{
                        background: step.done ? "var(--brand-accent)" : "rgba(255,255,255,0.15)",
                      }}
                    />
                  )}
                </div>
                <span className="text-[9.5px] text-white/50 text-center leading-tight">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Stats strip */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Open Tasks", val: "12" },
            { label: "Pending Reviews", val: "4" },
            { label: "Next Deadline", val: "6d" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-center"
            >
              <p className="display text-[20px] font-semibold text-white">{s.val}</p>
              <p className="text-[9.5px] text-white/40 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Row 4: Recent Activity */}
        <div className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-white/40">
              Recent Activity
            </p>
            <span className="text-[9px] text-white/30">Finance Team</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { initials: "AC", msg: "Month-end reporting pack shared for review.", time: "2h ago", color: "from-[var(--brand-navy)] to-[var(--brand-blue)]" },
              { initials: "JH", msg: "VAT submission confirmed - Q1 filing complete.", time: "5h ago", color: "from-[var(--brand-blue)] to-[var(--brand-accent)]" },
              { initials: "AC", msg: "Payroll coordination underway for April cycle.", time: "1d ago", color: "from-[var(--brand-navy)] to-[var(--brand-blue)]" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div
                  className="h-6 w-6 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-white mt-0.5"
                  style={{ background: `linear-gradient(135deg, var(--brand-navy), var(--brand-blue))` }}
                >
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] leading-[1.45] text-white/65">{item.msg}</p>
                  <p className="text-[9px] text-white/30 mt-0.5">{item.time}</p>
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
                  >
                    <img src="/icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />Accountables One
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
