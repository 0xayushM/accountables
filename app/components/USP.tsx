import Link from "next/link";

// ─── Mock illustrations ───────────────────────────────────────────────────────

function BookkeeperIllustration() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-navy)] to-[#1d4ed8] p-6 md:p-8 aspect-[4/3] flex flex-col justify-between">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 40px, transparent 40px, transparent 80px)",
        }}
      />

      {/* Conversation thread */}
      <div className="relative flex flex-col gap-3">
        {/* Bookkeeper message */}
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">JH</div>
          <div className="bg-white/15 backdrop-blur rounded-2xl rounded-tl-sm px-4 py-3 max-w-[200px]">
            <p className="text-white text-[12px] leading-[1.5]">Alex, I&apos;ve reviewed your March P&L. Looks great - up 18% MoM 📈</p>
          </div>
        </div>
        {/* Client reply */}
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[180px]">
            <p className="text-[var(--brand-navy)] text-[12px] leading-[1.5]">That&apos;s great! What&apos;s driving it?</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">AC</div>
        </div>
        {/* Follow-up */}
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">JH</div>
          <div className="bg-white/15 backdrop-blur rounded-2xl rounded-tl-sm px-4 py-3 max-w-[200px]">
            <p className="text-white text-[12px] leading-[1.5]">Your e-commerce channel - up 31%. I&apos;ve flagged it in your report.</p>
          </div>
        </div>
      </div>

      {/* Status badges */}
      <div className="relative flex gap-2 flex-wrap mt-2">
        <span className="inline-flex items-center gap-1.5 bg-green-400/20 text-green-300 border border-green-400/30 text-[11px] font-medium px-3 py-1 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Books current
        </span>
        <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/70 text-[11px] font-medium px-3 py-1 rounded-full">
          Response in &lt;2h
        </span>
      </div>
    </div>
  );
}

function ReportingIllustration() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const values = [48, 62, 55, 72, 68, 88];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white border border-[var(--border)] p-6 md:p-8 aspect-[4/3] flex flex-col gap-4 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Revenue Trend</p>
          <p className="display text-[28px] font-semibold text-[var(--text-primary)] mt-0.5">£142,840</p>
          <p className="text-[12px] text-green-600 font-medium mt-0.5">↑ 29.3% vs last month</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)]">Apr 2026</span>
          <div className="h-8 w-8 rounded-lg bg-[var(--brand-blue)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 3v18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 16l4-4 4 4 4-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex-1 flex items-end gap-2">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${values[i]}%`,
                background: i === 5
                  ? "linear-gradient(180deg, #1d4ed8, #60a5fa)"
                  : i === 4
                  ? "#bfdbfe"
                  : "#e2e8f0",
              }}
            />
            <span className="text-[10px] text-[var(--text-muted)]">{m}</span>
          </div>
        ))}
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[var(--border)]">
        {[
          { label: "Gross Margin", val: "68%" },
          { label: "Burn Rate", val: "£12k" },
          { label: "Runway", val: "14mo" },
        ].map((k) => (
          <div key={k.label} className="text-center">
            <div className="text-[15px] font-semibold text-[var(--text-primary)]">{k.val}</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsIllustration() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[var(--surface-soft)] border border-[var(--border)] p-6 md:p-8 aspect-[4/3] flex flex-col gap-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Live Dashboard</p>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-green-600 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Live
        </span>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Cash Position", val: "£84,200", delta: "+£6.2k", up: true },
          { label: "Monthly Revenue", val: "£142,840", delta: "+29.3%", up: true },
          { label: "Outstanding Invoices", val: "£18,400", delta: "3 overdue", up: false },
          { label: "Tax Liability", val: "£22,100", delta: "Due in 47 days", up: true },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-3 border border-[var(--border)]">
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">{card.label}</p>
            <p className="display text-[18px] font-semibold text-[var(--text-primary)] mt-1">{card.val}</p>
            <p className={`text-[11px] font-medium mt-0.5 ${card.up ? "text-green-600" : "text-amber-600"}`}>
              {card.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Anomaly alert */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-[14px] mt-0.5">⚠</span>
        <div>
          <p className="text-[12px] font-semibold text-amber-800">Anomaly detected</p>
          <p className="text-[11px] text-amber-700 mt-0.5">Marketing spend +218% vs 90-day avg. Review recommended.</p>
        </div>
      </div>
    </div>
  );
}

// ─── Row component ────────────────────────────────────────────────────────────

type USPRowProps = {
  tag: string;
  title: string;
  body: string;
  features: string[];
  cta: { label: string; href: string };
  illustration: React.ReactNode;
  reverse?: boolean;
};

function USPRow({ tag, title, body, features, cta, illustration, reverse }: USPRowProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      {/* Text */}
      <div className="flex flex-col gap-5">
        <span className="pill self-start">{tag}</span>
        <h3
          className="display text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[var(--text-primary)] leading-[1.06]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[16px] leading-[1.65] text-[var(--text-secondary)]">{body}</p>
        <ul className="flex flex-col gap-2.5 mt-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[14.5px] text-[var(--text-secondary)]">
              <span className="mt-1 h-4.5 w-4.5 flex-shrink-0 rounded-full bg-[var(--brand-blue)] flex items-center justify-center">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
        <Link
          href={cta.href}
          className="self-start mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--brand-blue)] hover:underline underline-offset-4"
        >
          {cta.label}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Illustration */}
      <div>{illustration}</div>
    </div>
  );
}

// ─── USP Section ──────────────────────────────────────────────────────────────

export function USP() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="pill">Why Accountables</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[var(--text-primary)]">
            Small business finance,{" "}
            <span className="accent">year-round</span>.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            Think of it like having a CFO in your corner - someone who can answer any question and spot opportunities you&apos;d never see alone.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          <USPRow
            tag="Expert support"
            title="One-on-one expert support on your books"
            body="We give you a dedicated bookkeeper who connects to your accounts, keeps your books updated and sends you a summary every month. Get extra help from our extended team of tax and advisory professionals."
            features={[
              "Named, senior ACA-qualified bookkeeper",
              "Unlimited messaging - ask anything, any time",
              "Monthly close summary delivered automatically",
              "Escalation to tax and CFO advisors when needed",
            ]}
            cta={{ label: "Learn More", href: "/services/bookkeeping" }}
            illustration={<BookkeeperIllustration />}
          />

          <USPRow
            tag="Financial reporting"
            title='Powerful financial <span class="accent">reporting</span>'
            body="Your financial data is transformed into easy-to-understand visual reports that give you a clear picture of where your business stands and where it&apos;s heading."
            features={[
              "Real-time P&L, balance sheet and cashflow",
              "Monthly management accounts by day 3",
              "KPI dashboards: MRR, burn, CAC, LTV",
              "Board-ready packs with variance analysis",
            ]}
            cta={{ label: "Learn More", href: "/services/financial-analysis" }}
            illustration={<ReportingIllustration />}
            reverse
          />

          <USPRow
            tag="Real-time insights"
            title="Real-time insights at your <span class='accent'>fingertips</span>"
            body="With real-time insights, you'll always know where your money is going and when to act. Our AI monitors your books continuously and alerts you to anything unusual the day it happens."
            features={[
              "Live cash position and runway tracking",
              "AI-powered anomaly detection",
              "13-week rolling cashflow forecasts",
              "Scenario planning - 'what if' in seconds",
            ]}
            cta={{ label: "Learn More", href: "/ai" }}
            illustration={<InsightsIllustration />}
          />
        </div>
      </div>
    </section>
  );
}
