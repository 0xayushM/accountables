import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { InnerCTA } from "../../components/InnerCTA";
import { CASES, getCase, type ScopeItem } from "../../data/cases";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case study - Accountables" };
  return {
    title: `${c.name} - Accountables case study`,
    description: c.summary,
  };
}

export default async function CaseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return notFound();

  const idx = CASES.findIndex((x) => x.slug === slug);
  const next = CASES[(idx + 1) % CASES.length];

  return (
    <PageShell>
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
        <div aria-hidden className="absolute inset-0 jersey-stripes opacity-[0.6]" />
        <div aria-hidden className="absolute inset-0 jersey-fade" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href="/case-studies"
            className="mono inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 normal-case tracking-normal"
          >
            ← All case studies
          </Link>

          {/* Cover card */}
          <div
            className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-8 md:p-14 border border-[var(--border)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(29, 78, 216, 0.08) 0%, rgba(10, 132, 255, 0.02) 100%)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <span className="eyebrow">
                  Case · 0{idx + 1} · {c.industry}
                </span>
                <h1 className="display mt-5 text-[44px] sm:text-[60px] md:text-[80px] font-semibold leading-[1.02] text-[var(--text-primary)]">
                  {c.name}
                </h1>
                <p className="mt-5 text-[18px] md:text-[22px] leading-[1.45] text-[var(--text-secondary)] max-w-xl">
                  {c.summary}
                </p>
              </div>
              <div className="display text-[64px] md:text-[96px] leading-none font-semibold text-[var(--brand-blue)] tracking-tight">
                {c.stat}
              </div>
            </div>

            {/* Stats strip */}
            <div className="strip grid-cols-2 md:grid-cols-4 mt-10 md:mt-14 !border-t-[var(--border)] !border-b-0">
              {c.stats.map(([v, l]) => (
                <div key={l} className="cell !px-0 md:!px-6 !py-6 !border-r-[var(--border)]">
                  <div className="display text-[28px] md:text-[34px] font-semibold leading-none text-[var(--text-primary)]">
                    {v}
                  </div>
                  <div className="mono mt-2 uppercase text-[var(--text-muted)]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story / Context */}
          <div className="mt-16 md:mt-20 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
            <div className="mono uppercase text-[var(--text-muted)]">
              {c.context ? "Context" : "The story"}
            </div>
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--text-secondary)] max-w-2xl">
              {c.context ?? c.body}
            </p>
          </div>

          {/* Role */}
          {c.role && (
            <div className="mt-12 md:mt-16 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div className="mono uppercase text-[var(--text-muted)]">
                Our role
              </div>
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--text-secondary)] max-w-2xl">
                {c.role}
              </p>
            </div>
          )}

          {/* Scope */}
          {c.scopeItems && c.scopeItems.length > 0 && (
            <div className="mt-12 md:mt-16 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div className="mono uppercase text-[var(--text-muted)]">
                Scope of work
              </div>
              <div className="max-w-2xl space-y-8">
                {c.scopeItems.map((item: ScopeItem, i: number) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="mono text-[var(--text-muted)] shrink-0 pt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="text-[16px] md:text-[17px] font-semibold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </div>
                      {item.body && (
                        <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                          {item.body}
                        </p>
                      )}
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="mt-2 space-y-1.5">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-2.5 text-[14px] md:text-[15px] leading-[1.6] text-[var(--text-secondary)]"
                            >
                              <span className="text-[var(--brand-blue)] shrink-0 mt-0.5">
                                -
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {c.resultBullets && c.resultBullets.length > 0 && (
            <div className="mt-12 md:mt-16 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div className="mono uppercase text-[var(--text-muted)]">
                Results
              </div>
              <ul className="max-w-2xl space-y-4">
                {c.resultBullets.map((b) => {
                  const colon = b.indexOf(":");
                  const title = colon > -1 ? b.slice(0, colon) : null;
                  const body = colon > -1 ? b.slice(colon + 1).trim() : b;
                  return (
                    <li key={b} className="flex gap-3">
                      <span className="text-[var(--brand-blue)] shrink-0 mt-1 text-[16px]">
                        ✓
                      </span>
                      <span className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                        {title && (
                          <span className="font-semibold text-[var(--text-primary)]">
                            {title}:{" "}
                          </span>
                        )}
                        {body}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Next case */}
      <section className="py-14 md:py-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href={`/case-studies/${next.slug}`}
            className="group flex items-center justify-between gap-6 py-2"
          >
            <div>
              <div className="mono uppercase text-[var(--text-muted)] mb-2">
                Next case study
              </div>
              <div className="display text-[28px] md:text-[40px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                {next.name}
              </div>
              <div className="mono mt-1 normal-case tracking-normal text-[var(--text-muted)]">
                {next.industry}
              </div>
            </div>
            <span className="text-[28px] md:text-[40px] text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>
      </section>

      <InnerCTA
        eyebrow="Could be you"
        title="Pages like this start with a call."
        body="Tell us what's hard. We'll come back as soon as possible. with a plan and a price."
      />
    </PageShell>
  );
}
