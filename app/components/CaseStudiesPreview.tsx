import Link from "next/link";
import { CASES } from "../data/cases";
import { RevealBlock } from "./RevealBlock";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function CaseStudiesPreview() {
  const featured = CASES.slice(0, 3);

  return (
    <section id="customers" className="py-24 md:py-32 bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
          <div className="max-w-xl">
            <RevealBlock delay={0}>
              <span className="pill">Customer case studies</span>
            </RevealBlock>
            <RevealBlock delay={80}>
              <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[var(--text-primary)]">
                Real numbers from{" "}
                <span className="accent">real teams</span>.
              </h2>
            </RevealBlock>
            <RevealBlock delay={160}>
              <p className="mt-4 text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                Every case study is published with the client&apos;s permission. Numbers are real, names are real.
              </p>
            </RevealBlock>
          </div>
          <RevealBlock delay={160}>
            <Link
              href="/case-studies"
              className="self-start md:self-end inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--brand-blue)] hover:underline underline-offset-4 flex-shrink-0"
            >
              All case studies
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </RevealBlock>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((c, i) => (
            <RevealBlock key={c.slug} delay={i * 80}>
            <Link
              href={`/case-studies/${c.slug}`}
              className={`card p-8 md:p-9 flex flex-col gap-5 group hover:-translate-y-0.5 transition-transform duration-200 h-full ${
                i === 0 ? "md:col-span-1" : ""
              }`}
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-between">
                <span className="mono text-[var(--text-muted)] text-[11px] uppercase tracking-widest">
                  / 0{i + 1}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] bg-[var(--surface-soft)] px-2 py-1 rounded-full">
                  {c.industry.split("·")[0].trim()}
                </span>
              </div>

              {/* Company + summary */}
              <div>
                <h3 className="text-[18px] font-semibold text-[var(--text-primary)] leading-tight">{c.name}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--text-secondary)]">{c.summary}</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-[var(--border)]">
                {c.stats.slice(0, 2).map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="display text-[24px] font-semibold text-[var(--brand-blue)] leading-none">{val}</div>
                    <div className="mono text-[var(--text-muted)] text-[10px] mt-1 uppercase">{lbl}</div>
                  </div>
                ))}
              </div>

              {/* CTA arrow */}
              <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] transition-colors">
                Read case study
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </Link>
            </RevealBlock>
          ))}
        </div>

        {/* Coming soon */}
        {/* <RevealBlock delay={280}>
          <div className="mt-5 md:mt-6 rounded-2xl border border-dashed border-[var(--border)] px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[var(--surface-soft)]">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl border border-dashed border-[var(--border)] flex items-center justify-center flex-shrink-0 text-[var(--text-muted)] text-[18px]">
                ✎
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[var(--text-primary)]">More case studies in progress</p>
                <p className="text-[13px] text-[var(--text-secondary)] mt-0.5">Additional client stories being documented - check back soon.</p>
              </div>
            </div>
            <span className="pill flex-shrink-0 inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--brand-accent)' }} />
              Publishing soon
            </span>
          </div>
        </RevealBlock> */}

        {/* Pull quote carousel */}
        <RevealBlock delay={0}>
          <TestimonialCarousel />
        </RevealBlock>
      </div>
    </section>
  );
}
