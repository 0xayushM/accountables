import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { InnerCTA } from "../../components/InnerCTA";
import { SERVICES, getService } from "../../data/services";

export function generateStaticParams() {
  return SERVICES.filter((s) => !s.externalHref).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service — Accountables" };
  return {
    title: `${s.name} — Accountables`,
    description: s.summary,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return notFound();
  if (s.externalHref) redirect(s.externalHref);

  const idx = SERVICES.findIndex((x) => x.slug === slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-20">
        <div aria-hidden className="absolute inset-0 jersey-stripes opacity-[0.7]" />
        <div aria-hidden className="absolute inset-0 jersey-fade" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href="/services"
            className="mono inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 normal-case tracking-normal"
          >
            ← All services
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
            <div>
              <span className="eyebrow">
                Service · 0{idx + 1} · {s.tag}
              </span>
              <h1 className="display mt-5 text-[44px] sm:text-[60px] md:text-[80px] font-semibold leading-[1.02] text-[var(--text-primary)]">
                {s.hero.title}
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-accent) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <span className="accent">{s.hero.highlight.split(" ")[0]}</span>
                  {s.hero.highlight.slice(s.hero.highlight.split(" ")[0].length)}
                </span>
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-[var(--text-secondary)] max-w-xl">
                {s.hero.body}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/#contact" className="btn-primary">
                  Schedule a call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="/pricing" className="btn-ghost">
                  See pricing
                </a>
              </div>
            </div>

            {/* Side card — icon glyph + tag */}
            <div className="card p-8 md:p-10 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-1/3 -right-1/3 h-[120%] w-[80%] rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(29, 78, 216, 0.18) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <span className="mono uppercase text-[var(--text-muted)]">
                    / 0{idx + 1}
                  </span>
                  <span className="mono uppercase text-[var(--brand-blue)] px-2.5 py-1 rounded-full border border-[var(--border)]">
                    {s.tag}
                  </span>
                </div>
                <div
                  className="display font-semibold mt-8 text-[var(--brand-blue)] leading-none"
                  style={{ fontSize: "clamp(96px, 14vw, 160px)" }}
                >
                  {s.icon}
                </div>
                <h3 className="display mt-8 text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)]">
                  {s.name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--text-secondary)]">
                  {s.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables grid */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl mb-12 md:mb-14">
            <span className="pill">Deliverables</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              What you actually <span className="accent">get</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {s.deliverables.map((d, i) => (
              <div key={d.title} className="card p-7">
                <div className="mono uppercase text-[var(--brand-blue)]">
                  / 0{i + 1}
                </div>
                <h3 className="display mt-4 text-[18px] md:text-[20px] font-semibold text-[var(--text-primary)]">
                  {d.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--text-secondary)]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-28 bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl mb-12 md:mb-14">
            <span className="pill">Process</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              How it <span className="accent">runs</span>.
            </h2>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white grid sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <div
                key={p.title}
                className={`p-7 md:p-8 ${
                  i !== s.process.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-[var(--border)] sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:lg:border-r sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-child(even)]:lg:border-r"
                    : ""
                }`}
              >
                <div className="mono uppercase text-[var(--brand-blue)]">
                  {p.day}
                </div>
                <h3 className="display mt-4 text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[var(--text-secondary)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <span className="pill">FAQs</span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              Common questions.
            </h2>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white">
            {s.faqs.map(([q, a], i) => (
              <div
                key={q}
                className={`grid grid-cols-[44px_1fr] md:grid-cols-[60px_1fr] gap-3 md:gap-4 px-6 md:px-8 py-6 ${
                  i < s.faqs.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <span className="mono text-[var(--text-muted)]">/ 0{i + 1}</span>
                <div>
                  <div className="text-[16px] md:text-[17px] font-medium text-[var(--text-primary)]">
                    {q}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--text-secondary)] max-w-2xl">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="py-14 md:py-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <div className="mono uppercase text-[var(--text-muted)] mb-2">
                Next service
              </div>
              <div className="display text-[28px] md:text-[40px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                {next.name}
              </div>
              <div className="mono mt-1 normal-case tracking-normal text-[var(--text-muted)]">
                {next.tag}
              </div>
            </div>
            <span className="text-[28px] md:text-[40px] text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>
      </section>

      <InnerCTA
        eyebrow="Get started"
        title="Ready to hand this off?"
        body="Tell us what you need. We'll quote a plan and price within 24 hours."
      />
    </PageShell>
  );
}
