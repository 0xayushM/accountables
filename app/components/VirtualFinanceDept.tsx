import Link from "next/link";
import { RevealBlock } from "./RevealBlock";
import ScrollRevealText from "./ScrollRevealText";

// ─── Scene Illustrations ──────────────────────────────────────────────────────

/** Operational Accounting — bank reconciliation transaction list */
const SceneAccounting = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* Card */}
    <rect x="12" y="8" width="276" height="152" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
    {/* Header */}
    <rect x="12" y="8" width="276" height="26" rx="8" fill="#eff6ff"/>
    <rect x="12" y="22" width="276" height="12" fill="#eff6ff"/>
    <text x="20" y="25" fontSize="9" fill="#1d4ed8" fontWeight="700" fontFamily="system-ui,sans-serif">Bank Reconciliation · Apr 2026</text>
    <rect x="226" y="12" width="56" height="14" rx="7" fill="#dbeafe"/>
    <text x="254" y="22" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontWeight="600" fontFamily="system-ui,sans-serif">1 unmatched</text>
    <line x1="12" y1="36" x2="288" y2="36" stroke="#e2e8f0" strokeWidth="1"/>
    {/* Col labels */}
    <text x="20" y="48" fontSize="6.5" fill="#94a3b8" fontWeight="600" fontFamily="system-ui,sans-serif">DESCRIPTION</text>
    <text x="280" y="48" textAnchor="end" fontSize="6.5" fill="#94a3b8" fontWeight="600" fontFamily="system-ui,sans-serif">AMOUNT</text>
    <line x1="12" y1="52" x2="288" y2="52" stroke="#f1f5f9" strokeWidth="1"/>
    {/* Row 1 — matched */}
    <circle cx="24" cy="66" r="5" fill="#22c55e"/>
    <path d="M21.2 66l2.3 2.3 4.5-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="34" y="63" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Stripe Payment</text>
    <text x="34" y="73" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">INV-0142 · Client receipt · 15 Apr</text>
    <text x="280" y="67" textAnchor="end" fontSize="9" fill="#16a34a" fontWeight="700" fontFamily="ui-monospace,monospace">+£2,400</text>
    <line x1="16" y1="83" x2="284" y2="83" stroke="#f8fafc" strokeWidth="1"/>
    {/* Row 2 — matched */}
    <circle cx="24" cy="97" r="5" fill="#22c55e"/>
    <path d="M21.2 97l2.3 2.3 4.5-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="34" y="94" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">HMRC VAT Q1</text>
    <text x="34" y="104" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">Direct debit · 19 Apr 2026</text>
    <text x="280" y="98" textAnchor="end" fontSize="9" fill="#dc2626" fontWeight="700" fontFamily="ui-monospace,monospace">−£3,800</text>
    <line x1="16" y1="114" x2="284" y2="114" stroke="#f8fafc" strokeWidth="1"/>
    {/* Row 3 — needs review */}
    <circle cx="24" cy="128" r="5" fill="#f59e0b"/>
    <text x="24" y="132" textAnchor="middle" fontSize="9" fill="white" fontWeight="800" fontFamily="system-ui,sans-serif">!</text>
    <text x="34" y="125" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Supplier Invoice</text>
    <text x="34" y="135" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">Unmatched · needs categorisation</text>
    <text x="280" y="129" textAnchor="end" fontSize="9" fill="#64748b" fontWeight="700" fontFamily="ui-monospace,monospace">−£560</text>
    <line x1="16" y1="145" x2="284" y2="145" stroke="#f1f5f9" strokeWidth="1"/>
    {/* Row 4 — pending */}
    <circle cx="24" cy="157" r="5" fill="#e2e8f0"/>
    <text x="34" y="154" fontSize="8.5" fill="#94a3b8" fontFamily="system-ui,sans-serif">Office Expenses</text>
    <text x="34" y="162" fontSize="7" fill="#cbd5e1" fontFamily="system-ui,sans-serif">Pending import</text>
    <text x="280" y="157" textAnchor="end" fontSize="9" fill="#94a3b8" fontWeight="600" fontFamily="ui-monospace,monospace">−£245</text>
  </svg>
);

/** Compliance & Reporting — filing status tracker */
const SceneCompliance = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* Card */}
    <rect x="12" y="8" width="276" height="152" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
    {/* Header — dark blue */}
    <rect x="12" y="8" width="276" height="26" rx="8" fill="#1d4ed8"/>
    <rect x="12" y="22" width="276" height="12" fill="#1d4ed8"/>
    <text x="20" y="25" fontSize="9" fill="white" fontWeight="700" fontFamily="system-ui,sans-serif">Compliance Tracker · FY 2026</text>
    <text x="280" y="25" textAnchor="end" fontSize="8" fill="rgba(255,255,255,0.65)" fontFamily="system-ui,sans-serif">3 of 6 filed</text>
    {/* Progress bar */}
    <rect x="12" y="34" width="276" height="5" fill="rgba(29,78,216,0.25)"/>
    <rect x="12" y="34" width="138" height="5" fill="#22c55e"/>
    {/* Col headers */}
    <text x="40" y="52" fontSize="6.5" fill="#94a3b8" fontWeight="600" fontFamily="system-ui,sans-serif">OBLIGATION</text>
    <text x="200" y="52" textAnchor="middle" fontSize="6.5" fill="#94a3b8" fontWeight="600" fontFamily="system-ui,sans-serif">DUE DATE</text>
    <text x="280" y="52" textAnchor="end" fontSize="6.5" fill="#94a3b8" fontWeight="600" fontFamily="system-ui,sans-serif">STATUS</text>
    <line x1="12" y1="56" x2="288" y2="56" stroke="#e2e8f0" strokeWidth="1"/>
    {/* Row 1 — Filed */}
    <circle cx="24" cy="70" r="5" fill="#22c55e"/>
    <path d="M21.2 70l2.3 2.3 4.5-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="34" y="67" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">VAT Return Q1</text>
    <text x="34" y="77" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">HMRC · Quarterly</text>
    <text x="200" y="71" textAnchor="middle" fontSize="7.5" fill="#64748b" fontFamily="system-ui,sans-serif">30 Apr 2026</text>
    <rect x="242" y="63" width="40" height="14" rx="7" fill="#dcfce7"/>
    <text x="262" y="73" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="600" fontFamily="system-ui,sans-serif">Filed ✓</text>
    <line x1="16" y1="88" x2="284" y2="88" stroke="#f1f5f9" strokeWidth="1"/>
    {/* Row 2 — Filed */}
    <circle cx="24" cy="102" r="5" fill="#22c55e"/>
    <path d="M21.2 102l2.3 2.3 4.5-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="34" y="99" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Payroll RTI Submission</text>
    <text x="34" y="109" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">HMRC · Monthly</text>
    <text x="200" y="103" textAnchor="middle" fontSize="7.5" fill="#64748b" fontFamily="system-ui,sans-serif">19 Apr 2026</text>
    <rect x="242" y="95" width="40" height="14" rx="7" fill="#dcfce7"/>
    <text x="262" y="105" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="600" fontFamily="system-ui,sans-serif">Filed ✓</text>
    <line x1="16" y1="120" x2="284" y2="120" stroke="#f1f5f9" strokeWidth="1"/>
    {/* Row 3 — Due Soon */}
    <circle cx="24" cy="134" r="5" fill="#f59e0b"/>
    <text x="24" y="138" textAnchor="middle" fontSize="9" fill="white" fontWeight="800" fontFamily="system-ui,sans-serif">!</text>
    <text x="34" y="131" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Corporation Tax</text>
    <text x="34" y="141" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">HMRC · Annual · 41 days</text>
    <text x="200" y="135" textAnchor="middle" fontSize="7.5" fill="#64748b" fontFamily="system-ui,sans-serif">30 Jun 2026</text>
    <rect x="232" y="127" width="50" height="14" rx="7" fill="#fef3c7"/>
    <text x="257" y="137" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="600" fontFamily="system-ui,sans-serif">Due Soon</text>
    <line x1="16" y1="152" x2="284" y2="152" stroke="#f1f5f9" strokeWidth="1"/>
    {/* Footer note */}
    <text x="20" y="161" fontSize="7" fill="#1d4ed8" fontWeight="600" fontFamily="system-ui,sans-serif">Next: Corporation Tax in 41 days</text>
    <text x="280" y="161" textAnchor="end" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">3 more upcoming</text>
  </svg>
);

/** Planning & Finance Support — financial dashboard with KPIs + trend chart */
const ScenePlanning = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* Card */}
    <rect x="12" y="8" width="276" height="152" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
    {/* Header */}
    <rect x="12" y="8" width="276" height="26" rx="8" fill="#eff6ff"/>
    <rect x="12" y="22" width="276" height="12" fill="#eff6ff"/>
    <text x="20" y="25" fontSize="9" fill="#1d4ed8" fontWeight="700" fontFamily="system-ui,sans-serif">Financial Overview · Q1 2026</text>
    <rect x="238" y="12" width="44" height="14" rx="7" fill="#dcfce7"/>
    <circle cx="245" cy="19" r="2.5" fill="#22c55e"/>
    <text x="268" y="22" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="600" fontFamily="system-ui,sans-serif">On Track</text>
    {/* KPI tiles */}
    <rect x="14" y="36" width="60" height="28" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="44" y="48" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="system-ui,sans-serif">Revenue</text>
    <text x="44" y="59" textAnchor="middle" fontSize="12" fill="#1d4ed8" fontWeight="700" fontFamily="system-ui,sans-serif">£48k</text>
    <rect x="80" y="36" width="60" height="28" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="110" y="48" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="system-ui,sans-serif">Cash Flow</text>
    <text x="110" y="59" textAnchor="middle" fontSize="12" fill="#22c55e" fontWeight="700" fontFamily="system-ui,sans-serif">+12%</text>
    <rect x="146" y="36" width="60" height="28" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="176" y="48" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="system-ui,sans-serif">Expenses</text>
    <text x="176" y="59" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="700" fontFamily="system-ui,sans-serif">£31k</text>
    <rect x="212" y="36" width="66" height="28" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="245" y="48" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="system-ui,sans-serif">Runway</text>
    <text x="245" y="59" textAnchor="middle" fontSize="12" fill="#0a84ff" fontWeight="700" fontFamily="system-ui,sans-serif">8 mo</text>
    {/* Chart axes */}
    <line x1="30" y1="72" x2="30" y2="140" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="30" y1="140" x2="284" y2="140" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="30" y1="95"  x2="284" y2="95"  stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="30" y1="118" x2="284" y2="118" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3"/>
    <text x="26" y="98"  textAnchor="end" fontSize="6" fill="#cbd5e1" fontFamily="system-ui,sans-serif">50k</text>
    <text x="26" y="121" textAnchor="end" fontSize="6" fill="#cbd5e1" fontFamily="system-ui,sans-serif">25k</text>
    {/* Revenue bars */}
    {([
      { x: 57,  h: 38 },
      { x: 98,  h: 48 },
      { x: 139, h: 42 },
      { x: 180, h: 54 },
      { x: 221, h: 48 },
      { x: 262, h: 60, hi: true },
    ] as Array<{ x: number; h: number; hi?: boolean }>).map((b, i) => (
      <rect key={i} x={b.x - 14} y={140 - b.h} width="28" height={b.h} rx="3"
        fill={b.hi ? "#1d4ed8" : "#bfdbfe"} />
    ))}
    {/* Month labels */}
    {(["Oct","Nov","Dec","Jan","Feb","Mar"] as string[]).map((m, i) => (
      <text key={m} x={57 + i * 41} y="152" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui,sans-serif">{m}</text>
    ))}
    {/* Trend line */}
    <polyline points="57,102 98,90 139,96 180,82 221,88 262,76"
      stroke="#0a84ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3"/>
    <circle cx="262" cy="76" r="3.5" fill="#0a84ff" stroke="white" strokeWidth="1.5"/>
    <text x="260" y="72" textAnchor="end" fontSize="7" fill="#0a84ff" fontWeight="600" fontFamily="system-ui,sans-serif">↑ Trend</text>
  </svg>
);

/** Fractional Finance Leadership — executive KPI dashboard + strategic roadmap */
const SceneLeadership = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* Card */}
    <rect x="12" y="8" width="276" height="152" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
    {/* Header — dark navy */}
    <rect x="12" y="8" width="276" height="26" rx="8" fill="#0b1e3f"/>
    <rect x="12" y="22" width="276" height="12" fill="#0b1e3f"/>
    <text x="20" y="25" fontSize="9" fill="white" fontWeight="700" fontFamily="system-ui,sans-serif">Finance Leadership · FY 2026</text>
    <circle cx="272" cy="19" r="3" fill="#22c55e"/>
    <text x="267" y="23" textAnchor="end" fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="system-ui,sans-serif">Live</text>
    {/* 3 KPI tiles */}
    <rect x="14" y="38" width="82" height="36" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="55" y="51" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="system-ui,sans-serif">Month-on-Month</text>
    <text x="55" y="65" textAnchor="middle" fontSize="15" fill="#22c55e" fontWeight="700" fontFamily="system-ui,sans-serif">+12%</text>
    <rect x="102" y="38" width="84" height="36" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="144" y="51" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="system-ui,sans-serif">YTD Revenue</text>
    <text x="144" y="65" textAnchor="middle" fontSize="15" fill="#1d4ed8" fontWeight="700" fontFamily="system-ui,sans-serif">£480k</text>
    <rect x="192" y="38" width="84" height="36" rx="5" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
    <text x="234" y="51" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="system-ui,sans-serif">Gross Margin</text>
    <text x="234" y="65" textAnchor="middle" fontSize="15" fill="#0a84ff" fontWeight="700" fontFamily="system-ui,sans-serif">34.5%</text>
    {/* Section label */}
    <text x="20" y="90" fontSize="7" fill="#94a3b8" fontWeight="600" fontFamily="system-ui,sans-serif">STRATEGIC ROADMAP · Q2 2026</text>
    {/* Milestone 1 — 100% */}
    <text x="20" y="105" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Financial Model Review</text>
    <text x="280" y="105" textAnchor="end" fontSize="7.5" fill="#22c55e" fontWeight="600" fontFamily="system-ui,sans-serif">Complete</text>
    <rect x="20" y="109" width="260" height="5" rx="2.5" fill="#e2e8f0"/>
    <rect x="20" y="109" width="260" height="5" rx="2.5" fill="#22c55e"/>
    {/* Milestone 2 — 75% */}
    <text x="20" y="127" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Board Reporting Pack</text>
    <text x="280" y="127" textAnchor="end" fontSize="7.5" fill="#1d4ed8" fontWeight="600" fontFamily="system-ui,sans-serif">In Progress</text>
    <rect x="20" y="131" width="260" height="5" rx="2.5" fill="#e2e8f0"/>
    <rect x="20" y="131" width="195" height="5" rx="2.5" fill="#1d4ed8"/>
    {/* Milestone 3 — 40% */}
    <text x="20" y="149" fontSize="8.5" fill="#0f172a" fontWeight="600" fontFamily="system-ui,sans-serif">Cash Flow Forecast Model</text>
    <text x="280" y="149" textAnchor="end" fontSize="7.5" fill="#f59e0b" fontWeight="600" fontFamily="system-ui,sans-serif">In Progress</text>
    <rect x="20" y="153" width="260" height="5" rx="2.5" fill="#e2e8f0"/>
    <rect x="20" y="153" width="104" height="5" rx="2.5" fill="#f59e0b"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: "01",
    Scene: SceneAccounting,
    title: "Operational Accounting",
    bullets: [
      "Bookkeeping & bank reconciliation",
      "Accounts payable & receivable",
      "Month-end close workflow",
      "Management reporting",
    ],
    href: "/services",
  },
  {
    number: "02",
    Scene: SceneCompliance,
    title: "Compliance & Reporting",
    bullets: [
      "Payroll & RTI submissions",
      "VAT returns & tax filing",
      "Year-end accounts & audit support",
      "Regulatory compliance tracking",
    ],
    href: "/services",
  },
  {
    number: "03",
    Scene: ScenePlanning,
    title: "Planning & Finance Support",
    bullets: [
      "Cash flow forecasting",
      "KPI & management dashboards",
      "Budget vs actual reporting",
      "Strategic finance advisory",
    ],
    href: "/services",
  },
  {
    number: "04",
    Scene: SceneLeadership,
    title: "Fractional Finance Leadership",
    bullets: [
      "Virtual CFO oversight",
      "Board & investor reporting",
      "Finance function structuring",
      "Growth-stage finance strategy",
    ],
    href: "/services",
  },
];

export function VirtualFinanceDept() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 mb-14 md:mb-16 items-end">
          <div>
            <RevealBlock delay={0}>
              <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                Your Virtual <span className="accent">Finance</span> Department.
              </h2>
            </RevealBlock>
          </div>
          <RevealBlock delay={80} className="md:pb-1">
            <ScrollRevealText
              text="Accountables combines operational accounting, reporting, compliance and finance coordination within a connected operating environment designed for growing businesses."
              className="text-[16px] md:text-[17px] leading-[1.7]"
            />
          </RevealBlock>
        </div>

        {/* Pillar grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {pillars.map((p, idx) => (
            <RevealBlock key={p.number} delay={idx * 70}>
              <Link
                href={p.href}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-[var(--border)] bg-white hover:shadow-[0_8px_32px_rgba(11,30,63,0.10)] transition-shadow duration-300"
              >
                {/* Illustration panel — 30% of card */}
                <div
                  className="relative flex-shrink-0 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)", height: 110 }}
                >
                  <p.Scene />
                  <span
                    className="absolute top-3 right-3.5 text-[10px] tracking-[0.18em] font-semibold"
                    style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", color: "var(--brand-blue)", opacity: 0.45 }}
                  >
                    {p.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1 p-6">
                  <h3 className="text-[15.5px] font-semibold text-[var(--text-primary)] leading-snug">
                    {p.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5 flex-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13px] leading-[1.55] text-[var(--text-secondary)]">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brand-blue)", opacity: 0.5 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
