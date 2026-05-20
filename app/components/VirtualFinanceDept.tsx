import Link from "next/link";
import { RevealBlock } from "./RevealBlock";
import ScrollRevealText from "./ScrollRevealText";

// ─── Scene Illustrations ──────────────────────────────────────────────────────

/** Operational Accounting - open ledger with entries being reconciled */
const SceneAccounting = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="168" preserveAspectRatio="xMidYMid meet">
    {/* ── shadow book behind ── */}
    <rect x="44" y="48" width="148" height="102" rx="6" fill="#bfdbfe" opacity="0.4" transform="rotate(4 118 99)"/>

    {/* ── open book left page ── */}
    <rect x="34" y="26" width="108" height="118" rx="5" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1.6"/>
    {/* spine */}
    <rect x="140" y="26" width="5" height="118" fill="#1d4ed8" opacity="0.18"/>
    {/* right page */}
    <rect x="143" y="26" width="108" height="118" rx="5" fill="white" stroke="#1d4ed8" strokeWidth="1.6"/>

    {/* left page - header bar */}
    <rect x="43" y="35" width="90" height="11" rx="2.5" fill="#dbeafe"/>
    <text x="49" y="44" fontSize="7" fill="#1d4ed8" fontWeight="700" fontFamily="ui-monospace,monospace">DATE</text>
    <text x="89" y="44" fontSize="7" fill="#1d4ed8" fontWeight="700" fontFamily="ui-monospace,monospace">DEBIT</text>

    {/* left page - ledger rows */}
    <line x1="43" y1="58"  x2="130" y2="58"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.35"/>
    <line x1="43" y1="71"  x2="130" y2="71"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.28"/>
    <line x1="43" y1="84"  x2="130" y2="84"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.22"/>
    <line x1="43" y1="97"  x2="120" y2="97"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.17"/>
    <line x1="43" y1="110" x2="125" y2="110" stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.13"/>
    {/* small amount boxes */}
    <rect x="102" y="52" width="22" height="8" rx="1.5" fill="#dbeafe"/>
    <rect x="102" y="65" width="22" height="8" rx="1.5" fill="#dbeafe" opacity="0.7"/>
    <rect x="102" y="78" width="22" height="8" rx="1.5" fill="#dbeafe" opacity="0.5"/>

    {/* right page - entries */}
    <line x1="152" y1="58"  x2="240" y2="58"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.35"/>
    <line x1="152" y1="71"  x2="240" y2="71"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.28"/>
    <line x1="152" y1="84"  x2="240" y2="84"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.22"/>
    <line x1="152" y1="97"  x2="230" y2="97"  stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round" opacity="0.17"/>
    {/* check badges - matched entries */}
    <circle cx="246" cy="58"  r="5.5" fill="#22c55e"/>
    <path d="M243 58l2 2 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="246" cy="71"  r="5.5" fill="#22c55e"/>
    <path d="M243 71l2 2 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="246" cy="84"  r="5.5" fill="#fbbf24" opacity="0.9"/>
    <line x1="246" y1="81" x2="246" y2="87" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="246" cy="97"  r="5.5" stroke="#1d4ed8" strokeWidth="1.2" fill="none" opacity="0.3"/>

    {/* ── month-end close pill ── */}
    <rect x="152" y="115" width="90" height="19" rx="9.5" fill="#1d4ed8"/>
    <text x="197" y="128" textAnchor="middle" fontSize="8.5" fill="white" fontWeight="600">Month-End Close ✓</text>

    {/* ── pencil top-right ── */}
    <g transform="translate(262,24) rotate(30)">
      <rect x="-4" y="0"  width="8" height="40" rx="2"   fill="#fbbf24" stroke="#d97706" strokeWidth="0.8"/>
      <rect x="-4" y="0"  width="8" height="7"  rx="1.5" fill="#fca5a5" stroke="#f87171" strokeWidth="0.8"/>
      <polygon points="-4,40 4,40 0,50"              fill="#1d4ed8"/>
      <polygon points="-1.5,44 1.5,44 0,50"          fill="white"/>
    </g>
  </svg>
);

/** Compliance & Reporting - shield + calendar + documents */
const SceneCompliance = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="168" preserveAspectRatio="xMidYMid meet">
    {/* ── calendar left ── */}
    <rect x="18" y="28" width="88" height="96" rx="6" fill="white" stroke="#1d4ed8" strokeWidth="1.5"/>
    {/* header bar */}
    <rect x="18" y="28" width="88" height="24" rx="6" fill="#1d4ed8"/>
    <rect x="18" y="40" width="88" height="12" fill="#1d4ed8"/>
    <text x="62" y="45" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">APRIL 2026</text>
    {/* day grid */}
    {["M","T","W","T","F","S","S"].map((d, i) => (
      <text key={i} x={24 + i * 12} y="64" fontSize="6.5" fill="#1d4ed8" opacity="0.6" fontWeight="600" textAnchor="middle">{d}</text>
    ))}
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((n, i) => {
      const x = 24 + (i % 7) * 12;
      const y = 76 + Math.floor(i / 7) * 12;
      const isDeadline = n === 15 || n === 21;
      const isPast = n <= 10;
      return (
        <g key={n}>
          {isDeadline && <circle cx={x} cy={y - 3} r="6.5" fill="#1d4ed8" opacity="0.15"/>}
          <text x={x} y={y} textAnchor="middle" fontSize="7.5"
            fill={isDeadline ? "#1d4ed8" : isPast ? "#94a3b8" : "#334155"}
            fontWeight={isDeadline ? "700" : "400"}>
            {n}
          </text>
          {isPast && <line x1={x-3} y1={y-4} x2={x+3} y2={y-4} stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>}
        </g>
      );
    })}
    {/* deadline labels */}
    <rect x="20" y="116" width="84" height="7" rx="3.5" fill="#fef3c7"/>
    <text x="62" y="122" textAnchor="middle" fontSize="6.5" fill="#92400e" fontWeight="600">VAT Filing - Apr 15</text>

    {/* ── central shield ── */}
    <path d="M180 18 L148 30 v24 c0 26 16 44 32 52 16-8 32-26 32-52 V30 Z" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.6"/>
    {/* shield inner glow */}
    <path d="M180 26 L155 36 v20 c0 21 13 36 25 42 12-6 25-21 25-42 V36 Z" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="0.8" opacity="0.7"/>
    {/* checkmark on shield */}
    <path d="M169 58 l8 8 16-16" stroke="#1d4ed8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>

    {/* ── document stack right ── */}
    <rect x="212" y="44" width="66" height="84" rx="4" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.3" transform="rotate(6 245 86)"/>
    <rect x="215" y="36" width="66" height="84" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.3" transform="rotate(2 248 78)"/>
    <rect x="218" y="28" width="66" height="84" rx="4" fill="white" stroke="#1d4ed8" strokeWidth="1.5"/>
    {/* doc lines */}
    <line x1="227" y1="42" x2="275" y2="42" stroke="#1d4ed8" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
    <line x1="227" y1="52" x2="275" y2="52" stroke="#1d4ed8" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
    <line x1="227" y1="62" x2="266" y2="62" stroke="#1d4ed8" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
    <line x1="227" y1="72" x2="270" y2="72" stroke="#1d4ed8" strokeWidth="1.1" strokeLinecap="round" opacity="0.3"/>
    <line x1="227" y1="82" x2="260" y2="82" stroke="#1d4ed8" strokeWidth="1.1" strokeLinecap="round" opacity="0.25"/>
    {/* "FILED" stamp */}
    <rect x="230" y="88" width="46" height="17" rx="3" stroke="#22c55e" strokeWidth="1.5" fill="none" transform="rotate(-8 253 96)"/>
    <text x="253" y="100" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="700" transform="rotate(-8 253 96)">FILED</text>
  </svg>
);

/** Planning & Finance Support - bar chart with forecast + KPI pills */
const ScenePlanning = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="168" preserveAspectRatio="xMidYMid meet">
    {/* ── dashboard card ── */}
    <rect x="18" y="20" width="264" height="120" rx="8" fill="white" stroke="#1d4ed8" strokeWidth="1.4" opacity="0.9"/>
    {/* header */}
    <rect x="18" y="20" width="264" height="22" rx="8" fill="#eff6ff"/>
    <rect x="18" y="32" width="264" height="10" fill="#eff6ff"/>
    <circle cx="30" cy="31" r="4" fill="#fca5a5"/>
    <circle cx="42" cy="31" r="4" fill="#fbbf24"/>
    <circle cx="54" cy="31" r="4" fill="#86efac"/>
    <text x="140" y="35" textAnchor="middle" fontSize="8" fill="#1d4ed8" fontWeight="600" opacity="0.7">Finance Overview · Q1 2026</text>

    {/* ── KPI row ── */}
    <rect x="28"  y="48" width="58" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
    <text x="57"  y="60" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Revenue</text>
    <text x="57"  y="71" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="700">£48k</text>

    <rect x="92"  y="48" width="58" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
    <text x="121" y="60" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Cash Flow</text>
    <text x="121" y="71" textAnchor="middle" fontSize="11" fill="#22c55e" fontWeight="700">+12%</text>

    <rect x="156" y="48" width="58" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
    <text x="185" y="60" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Expenses</text>
    <text x="185" y="71" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="700">£31k</text>

    <rect x="220" y="48" width="54" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
    <text x="247" y="60" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Runway</text>
    <text x="247" y="71" textAnchor="middle" fontSize="11" fill="#0a84ff" fontWeight="700">8 mo</text>

    {/* ── bar chart ── */}
    {/* y-axis */}
    <line x1="38" y1="82" x2="38" y2="132" stroke="#1d4ed8" strokeWidth="1" opacity="0.25"/>
    {/* x-axis */}
    <line x1="38" y1="132" x2="278" y2="132" stroke="#1d4ed8" strokeWidth="1" opacity="0.25"/>

    {/* bars (6 months) */}
    {[
      { x: 48,  h: 32, month: "OCT", hi: false },
      { x: 88,  h: 44, month: "NOV", hi: false },
      { x: 128, h: 38, month: "DEC", hi: false },
      { x: 168, h: 52, month: "JAN", hi: false },
      { x: 208, h: 46, month: "FEB", hi: false },
      { x: 248, h: 60, month: "MAR", hi: true  },
    ].map((b) => (
      <g key={b.month}>
        <rect
          x={b.x - 14} y={132 - b.h} width="28" height={b.h} rx="3"
          fill={b.hi ? "#1d4ed8" : "#bfdbfe"}
        />
        <text x={b.x} y="142" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.6">{b.month}</text>
      </g>
    ))}

    {/* trend line */}
    <polyline
      points="48,100 88,88 128,94 168,80 208,86 248,72"
      stroke="#0a84ff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="5 3"
    />
    {/* dot on last point */}
    <circle cx="248" cy="72" r="4" fill="#0a84ff" stroke="white" strokeWidth="1.5"/>

    {/* forecast arrow */}
    <path d="M262 68 L274 58 L274 78 Z" fill="#0a84ff" opacity="0.7"/>
  </svg>
);

/** Fractional Finance Leadership - person + org structure + growth */
const SceneLeadership = () => (
  <svg viewBox="0 0 300 168" fill="none" width="100%" height="168" preserveAspectRatio="xMidYMid meet">
    {/* ── person at desk (left) ── */}
    {/* desk */}
    <rect x="14" y="114" width="110" height="10" rx="3" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.3"/>
    <rect x="24"  y="124" width="8" height="22" rx="2" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1"/>
    <rect x="100" y="124" width="8" height="22" rx="2" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1"/>
    {/* monitor */}
    <rect x="34" y="80" width="70" height="46" rx="4" fill="white" stroke="#1d4ed8" strokeWidth="1.4"/>
    <rect x="38" y="84" width="62" height="36" rx="2" fill="#eff6ff"/>
    {/* mini chart on monitor */}
    <polyline points="42,112 52,104 62,107 72,98 82,100 92,93" stroke="#0a84ff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <line x1="38" y1="120" x2="100" y2="120" stroke="#1d4ed8" strokeWidth="0.8" opacity="0.3"/>
    {/* monitor stand */}
    <rect x="62" y="124" width="14" height="8" rx="2" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1"/>
    {/* person body */}
    <circle cx="69" cy="58" r="14" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5"/>
    <path d="M47 84 q22-14 44 0" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round"/>
    {/* face detail */}
    <circle cx="63" cy="56" r="1.5" fill="#1d4ed8"/>
    <circle cx="75" cy="56" r="1.5" fill="#1d4ed8"/>
    <path d="M64 63 q5 3 10 0" stroke="#1d4ed8" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

    {/* ── connecting line ── */}
    <line x1="128" y1="84" x2="152" y2="84" stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4"/>

    {/* ── org chart / structure (right) ── */}
    {/* top node */}
    <rect x="152" y="24" width="64" height="30" rx="5" fill="#1d4ed8"/>
    <text x="184" y="36" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700">Finance</text>
    <text x="184" y="47" textAnchor="middle" fontSize="7.5" fill="white" opacity="0.8">Leadership</text>

    {/* connector lines */}
    <line x1="184" y1="54" x2="184" y2="66" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.4"/>
    <line x1="152" y1="66" x2="222" y2="66" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.4"/>
    <line x1="152" y1="66" x2="152" y2="76" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.4"/>
    <line x1="184" y1="66" x2="184" y2="76" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.4"/>
    <line x1="222" y1="66" x2="222" y2="76" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.4"/>

    {/* child nodes */}
    <rect x="124" y="76" width="56" height="22" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.2"/>
    <text x="152" y="85" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontWeight="600">Reporting</text>
    <text x="152" y="93" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Monthly</text>

    <rect x="158" y="76" width="56" height="22" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.2"/>
    <text x="186" y="85" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontWeight="600">Compliance</text>
    <text x="186" y="93" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Ongoing</text>

    <rect x="196" y="76" width="52" height="22" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.2"/>
    <text x="222" y="85" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontWeight="600">Planning</text>
    <text x="222" y="93" textAnchor="middle" fontSize="7" fill="#1d4ed8" opacity="0.7">Strategic</text>

    {/* ── growth arrow bottom right ── */}
    <rect x="152" y="112" width="130" height="40" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
    <polyline points="162,144 180,132 200,136 222,124 245,126 268,114" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="268" cy="114" r="4" fill="#22c55e" stroke="white" strokeWidth="1.5"/>
    <text x="162" y="152" fontSize="7.5" fill="#16a34a" fontWeight="600">↑ Business Growth</text>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: "01",
    Scene: SceneAccounting,
    title: "Operational Accounting",
    body: "Bookkeeping, reconciliations, accounts payable and receivable management, reporting workflows and month-end close.",
    href: "/services",
  },
  {
    number: "02",
    Scene: SceneCompliance,
    title: "Compliance & Reporting",
    body: "Payroll, tax coordination, year-end support, management reporting and regulatory compliance workflows.",
    href: "/services",
  },
  {
    number: "03",
    Scene: ScenePlanning,
    title: "Planning & Finance Support",
    body: "Forecasting, cash flow visibility, KPI reporting and strategic finance support.",
    href: "/services",
  },
  {
    number: "04",
    Scene: SceneLeadership,
    title: "Fractional Finance Leadership",
    body: "Structured finance oversight designed to evolve alongside growing businesses.",
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
                {/* Illustration panel */}
                <div
                  className="relative flex-shrink-0 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)", height: 168 }}
                >
                  <p.Scene />
                  <span
                    className="absolute top-3.5 right-4 text-[10.5px] tracking-[0.18em] font-semibold"
                    style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", color: "var(--brand-blue)", opacity: 0.5 }}
                  >
                    {p.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 flex-1 p-6">
                  <h3 className="text-[15.5px] font-semibold text-[var(--text-primary)] leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--text-secondary)] flex-1">{p.body}</p>
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
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
