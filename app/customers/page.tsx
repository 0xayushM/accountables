import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { CASES } from "../data/cases";

export const metadata: Metadata = {
  title: "Case studies - Accountables",
  description: "Founders and finance leaders who stopped doing their bookkeeper's job.",
};

const testimonials = [
  {
    quote:
      "Their experience and knowledge came in handy when I had to present to Shark Tank. I'd recommend Accountables - without a doubt.",
    name: "Juls Bindi",
    role: "Founder, ZicoPet",
  },
  {
    quote:
      "Pilot-level rigour at a fraction of the cost. They've quietly become the most reliable part of our ops stack.",
    name: "Maya Sharma",
    role: "COO, Northwind Goods",
  },
  {
    quote:
      "We grew from £200k to £4.2M ARR in two years and our books never wobbled.",
    name: "Tom Reeves",
    role: "Founder, Loomly Labs",
  },
];

export default function CustomersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={`Case studies · ${String(CASES.length).padStart(2, "0")} featured`}
        title="Real numbers from"
        highlight="real teams."
        description="Every case study is published with the client's written permission. Numbers are real, names are real, and the operators behind them will gladly take your call."
        serif={{ inHighlight: "real" }}
      />

      {/* Case list - bordered, hover-row pattern from the design */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white">
            {CASES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/customers/${c.slug}`}
                className="grid grid-cols-[44px_1.2fr_1fr_auto_28px] md:grid-cols-[60px_1.2fr_1fr_120px_28px] gap-4 md:gap-6 items-center px-6 md:px-8 py-5 md:py-6 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface-soft)] transition-colors group"
              >
                <span className="mono text-[var(--text-muted)] hidden sm:block">
                  / 0{i + 1}
                </span>
                <div>
                  <div className="text-[15px] md:text-[17px] font-medium text-[var(--text-primary)]">
                    {c.name}
                  </div>
                  <div className="mono text-[var(--text-muted)] mt-1 normal-case tracking-normal">
                    {c.industry}
                  </div>
                </div>
                <div className="hidden md:block text-[14px] text-[var(--text-secondary)] leading-[1.5]">
                  {c.summary}
                </div>
                <div className="text-right md:text-left">
                  <div className="display text-[22px] md:text-[26px] font-semibold text-[var(--brand-blue)] leading-none">
                    {c.stat}
                  </div>
                  <div className="mono text-[var(--text-muted)] mt-1 uppercase">
                    {c.statLabel}
                  </div>
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
                className="grid grid-cols-[44px_1.2fr_1fr_auto_28px] md:grid-cols-[60px_1.2fr_1fr_120px_28px] gap-4 md:gap-6 items-center px-6 md:px-8 py-5 border-b border-dashed border-[var(--border)] last:border-b-0 select-none pointer-events-none"
                style={{ filter: 'blur(3px)', opacity: 0.35 }}
              >
                <span className="mono text-[var(--text-muted)] hidden sm:block">/ 0{CASES.length + i + 1}</span>
                <div>
                  <div className="h-4 rounded-md bg-[var(--border)]" style={{ width: i === 0 ? 160 : 200 }} />
                  <div className="h-3 rounded-md bg-[var(--border)] mt-2" style={{ width: 90 }} />
                </div>
                <div className="hidden md:block h-4 rounded-md bg-[var(--border)]" style={{ width: 240 }} />
                <div>
                  <div className="h-5 rounded-md bg-[var(--border)]" style={{ width: 56 }} />
                  <div className="h-3 rounded-md bg-[var(--border)] mt-1.5" style={{ width: 70 }} />
                </div>
                <span className="text-[var(--text-muted)]">→</span>
              </div>
            ))}
            <div className="px-6 md:px-8 py-4 flex items-center justify-center gap-2 bg-[var(--surface-soft)]">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--brand-accent)', animation: 'pulse 2s infinite' }} />
                More client stories in progress
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl mb-14 md:mb-16">
            <span className="pill">In their words</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-[var(--text-primary)]">
              240+ businesses trust us
              <br />
              with their <span className="accent">books</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="card p-8 md:p-9 flex flex-col">
                <blockquote className="text-[17px] md:text-[18px] leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-8 flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white text-[14px] font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))",
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-primary)]">
                      {t.name}
                    </div>
                    <div className="mono text-[var(--text-muted)] normal-case tracking-normal">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Be next"
        title="Your story, on this page."
        body="Tell us where the books are stuck. We'll show you what done looks like - and how fast we can get you there."
      />
    </PageShell>
  );
}
