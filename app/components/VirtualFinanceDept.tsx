import Link from "next/link";
import { RevealBlock } from "./RevealBlock";
import ScrollRevealText from "./ScrollRevealText";

const pillars = [
  {
    number: "01",
    icon: "∑",
    title: "Operational Accounting",
    body: "Bookkeeping, reconciliations, accounts payable and receivable management, reporting workflows and month-end close.",
    href: "/services/bookkeeping",
  },
  {
    number: "02",
    icon: "⊞",
    title: "Compliance & Reporting",
    body: "Payroll, tax coordination, year-end support, management reporting and regulatory compliance workflows.",
    href: "/services/accounting-tax",
  },
  {
    number: "03",
    icon: "╱",
    title: "Planning & Finance Support",
    body: "Forecasting, cash flow visibility, KPI reporting and strategic finance support.",
    href: "/services/financial-analysis",
  },
  {
    number: "04",
    icon: "◇",
    title: "Fractional Finance Leadership",
    body: "Structured finance oversight designed to evolve alongside growing businesses.",
    href: "/services/cfo-advisory",
  },
];

export function VirtualFinanceDept() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 mb-14 md:mb-16 items-end">
          <div>
            {/* Pill */}
            <RevealBlock delay={0}>
              <span className="pill mb-5 block w-fit">Your virtual finance department</span>
            </RevealBlock>

            {/* Heading — RevealBlock preserves accent styling */}
            <RevealBlock delay={80}>
              <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                Finance that <span className="accent">scales</span>
                <br />with you.
              </h2>
            </RevealBlock>
          </div>

          {/* Description — ScrollRevealText color sweep */}
          <RevealBlock delay={160} className="md:pb-1">
            <ScrollRevealText
              text="Accountables combines operational accounting, reporting, compliance and finance coordination within a connected operating environment — designed for growing businesses."
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
                className="card p-7 md:p-8 flex flex-col gap-5 group h-full"
              >
                {/* Icon + number */}
                <div className="flex items-center justify-between">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-[18px]"
                    style={{
                      background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))",
                      color: "#fff",
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="text-[11px] tracking-[0.16em] font-semibold"
                    style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", color: "var(--text-muted)" }}
                  >
                    {p.number}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-[16px] md:text-[17px] font-semibold text-[var(--text-primary)] leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">{p.body}</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-[var(--brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
