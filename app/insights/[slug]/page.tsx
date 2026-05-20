import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { InnerCTA } from "../../components/InnerCTA";
import { INSIGHTS, getInsight } from "../../data/insights";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return { title: "Insight - Accountables" };
  return {
    title: `${insight.title} - Accountables`,
    description: insight.subtitle,
  };
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return notFound();

  const idx = INSIGHTS.findIndex((x) => x.slug === slug);
  const next = INSIGHTS[(idx + 1) % INSIGHTS.length];

  return (
    <PageShell>
      {/* Header */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
        <div aria-hidden className="absolute inset-0 jersey-stripes opacity-[0.6]" />
        <div aria-hidden className="absolute inset-0 jersey-fade" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href="/insights"
            className="mono inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 normal-case tracking-normal"
          >
            ← All insights
          </Link>

          {/* Cover card */}
          <div
            className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-8 md:p-14 border border-[var(--border)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(29, 78, 216, 0.08) 0%, rgba(10, 132, 255, 0.02) 100%)",
            }}
          >
            <span className="eyebrow">
              Insight · 0{idx + 1} · {insight.category}
            </span>
            <h1 className="display mt-5 text-[44px] sm:text-[60px] md:text-[76px] font-semibold leading-[1.02] text-[var(--text-primary)]">
              {insight.title}
            </h1>
            <p className="mt-4 text-[18px] md:text-[22px] leading-[1.45] text-[var(--text-secondary)] max-w-2xl">
              {insight.subtitle}
            </p>
          </div>

          {/* Why this framework exists */}
          <div className="mt-16 md:mt-20 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div className="mono uppercase text-[var(--text-muted)]">
              Why it exists
            </div>
            <div className="max-w-2xl">
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--text-secondary)]">
                {insight.intro}
              </p>
              <p className="mt-4 text-[15px] md:text-[16px] text-[var(--text-muted)]">
                {insight.problemsIntro}
              </p>
              <ul className="mt-3 space-y-2">
                {insight.problems.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--brand-blue)] shrink-0 mt-0.5">—</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                {insight.structureIntro}
              </p>
              <p className="mt-4 text-[13px] mono uppercase text-[var(--text-muted)]">
                Each phase has:
              </p>
              <ul className="mt-2 space-y-1.5">
                {insight.structurePoints.map((s) => (
                  <li
                    key={s}
                    className="flex gap-2.5 text-[14px] md:text-[15px] text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--brand-blue)] shrink-0">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phases */}
          <div className="mt-16 md:mt-20 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div className="mono uppercase text-[var(--text-muted)]">
              The close
            </div>
            <div className="max-w-2xl space-y-6">
              {insight.phases.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-[20px] border border-[var(--border)] p-6 md:p-8 bg-[var(--surface-soft)]"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="h-9 w-9 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #1d4ed8, #0a84ff)",
                      }}
                    >
                      <span className="mono text-[13px] font-semibold">
                        {String(phase.phase).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="display text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)] pt-1">
                      {phase.title}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">
                        Checklist
                      </p>
                      <ul className="space-y-2">
                        {phase.checklist.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-[13.5px] md:text-[14px] leading-[1.55] text-[var(--text-secondary)]"
                          >
                            <span className="text-[var(--brand-blue)] shrink-0 mt-0.5">
                              ☐
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:border-l sm:border-[var(--border)] sm:pl-6">
                      <p className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">
                        Outcome
                      </p>
                      <ul className="space-y-2">
                        {phase.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex gap-2.5 text-[13.5px] md:text-[14px] leading-[1.55] text-[var(--text-secondary)]"
                          >
                            <span className="text-emerald-500 shrink-0 mt-0.5">
                              ✓
                            </span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why this approach works */}
          <div className="mt-12 md:mt-16 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div className="mono uppercase text-[var(--text-muted)]">
              Why it works
            </div>
            <div className="max-w-2xl">
              <ul className="space-y-3">
                {insight.whyItWorksPoints.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--brand-blue)] shrink-0 mt-0.5">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Takeaway */}
          <div className="mt-12 md:mt-16 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div className="mono uppercase text-[var(--text-muted)]">
              Takeaway
            </div>
            <blockquote className="max-w-2xl">
              <p className="text-[18px] md:text-[21px] leading-[1.55] text-[var(--text-primary)] font-medium">
                &ldquo;{insight.takeaway}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Next insight */}
      {INSIGHTS.length > 1 && (
        <section className="py-14 md:py-20 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Link
              href={`/insights/${next.slug}`}
              className="group flex items-center justify-between gap-6 py-2"
            >
              <div>
                <div className="mono uppercase text-[var(--text-muted)] mb-2">
                  Next insight
                </div>
                <div className="display text-[28px] md:text-[40px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                  {next.title}
                </div>
                <div className="mono mt-1 normal-case tracking-normal text-[var(--text-muted)]">
                  {next.category}
                </div>
              </div>
              <span className="text-[28px] md:text-[40px] text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      <InnerCTA
        eyebrow="Put it into practice"
        title="We run this process for 240+ businesses."
        body="Tell us where your close is breaking down. We'll show you what a structured, reliable close looks like in practice."
      />
    </PageShell>
  );
}
