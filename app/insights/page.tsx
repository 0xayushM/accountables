import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { INSIGHTS } from "../data/insights";

export const metadata: Metadata = {
  title: "Insights - Accountables",
  description:
    "Practical frameworks, checklists, and playbooks from the Accountables team.",
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={`Insights · ${String(INSIGHTS.length).padStart(2, "0")} published`}
        title="Finance frameworks that"
        highlight="actually work."
        description="Practical playbooks, checklists, and thinking from the Accountables team - built from real engagements, not theory."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white">
            {INSIGHTS.map((insight, i) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="grid grid-cols-[44px_1.2fr_1fr_28px] md:grid-cols-[60px_1.2fr_1fr_28px] gap-4 md:gap-6 items-center px-6 md:px-8 py-5 md:py-6 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface-soft)] transition-colors group"
              >
                <span className="mono text-[var(--text-muted)] hidden sm:block">
                  / 0{i + 1}
                </span>
                <div>
                  <div className="text-[15px] md:text-[17px] font-medium text-[var(--text-primary)]">
                    {insight.title}
                  </div>
                  <div className="mono text-[var(--text-muted)] mt-1 normal-case tracking-normal">
                    {insight.category}
                  </div>
                </div>
                <div className="hidden md:block text-[14px] text-[var(--text-secondary)] leading-[1.5]">
                  {insight.subtitle}
                </div>
                <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* ── Coming soon teaser ── */}
          <div className="mt-3 rounded-[24px] border border-dashed border-[var(--border)] overflow-hidden">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="grid grid-cols-[44px_1.2fr_1fr_28px] md:grid-cols-[60px_1.2fr_1fr_28px] gap-4 md:gap-6 items-center px-6 md:px-8 py-5 border-b border-dashed border-[var(--border)] last:border-b-0 select-none pointer-events-none"
                style={{ filter: 'blur(3px)', opacity: 0.35 }}
              >
                <span className="mono text-[var(--text-muted)] hidden sm:block">/ 0{INSIGHTS.length + i + 1}</span>
                <div>
                  <div className="h-4 rounded-md bg-[var(--border)]" style={{ width: i === 0 ? 180 : 220 }} />
                  <div className="h-3 rounded-md bg-[var(--border)] mt-2" style={{ width: 80 }} />
                </div>
                <div className="hidden md:block h-4 rounded-md bg-[var(--border)]" style={{ width: 260 }} />
                <span className="text-[var(--text-muted)]">→</span>
              </div>
            ))}
            <div className="px-6 md:px-8 py-4 flex items-center justify-center gap-2 bg-[var(--surface-soft)]">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--brand-accent)', animation: 'pulse 2s infinite' }} />
                More frameworks in progress
              </span>
            </div>
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Stay sharp"
        title="Finance thinking, delivered."
        body="We publish frameworks and playbooks from live client work. No recycled takes - just what's actually working."
      />
    </PageShell>
  );
}
