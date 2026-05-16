import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { SERVICES } from "../data/services";

export const metadata: Metadata = {
  title: "Services — Accountables",
  description:
    "Bookkeeping, AI Close, tax, financial analysis, year-end accounts, e-commerce, payroll and more — one partner for the whole finance stack.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={`Services · ${String(SERVICES.length).padStart(2, "0")} capabilities`}
        title="The whole finance stack,"
        highlight="one partner."
        description="Pick what you need. Add what you need next. Every service shares the same data, the same dashboard, and the same senior partner who actually knows your business."
        serif={{ inHighlight: "partner" }}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={s.externalHref ?? `/services/${s.slug}`}
                className={`p-7 md:p-9 group relative hover:bg-[var(--surface-soft)] transition-colors
                  ${i % 3 !== 2 ? "lg:border-r" : ""}
                  ${i % 2 !== 1 ? "md:border-r lg:border-r-0" : ""}
                  ${i < SERVICES.length - 1 ? "border-b" : ""}
                  ${i === SERVICES.length - 1 ? "" : ""}
                  border-[var(--border)]
                  ${
                    Math.floor(i / 3) === Math.floor((SERVICES.length - 1) / 3)
                      ? "lg:border-b-0"
                      : "lg:border-b"
                  }
                `}
              >
                <div className="flex items-baseline justify-between">
                  <div className="mono uppercase text-[var(--text-muted)]">
                    / 0{i + 1}
                  </div>
                  <div className="mono uppercase text-[var(--brand-blue)] px-2.5 py-1 rounded-full border border-[var(--border)]">
                    {s.tag}
                  </div>
                </div>
                <div
                  className="display font-semibold mt-6 text-[var(--brand-blue)] leading-none"
                  style={{ fontSize: "56px" }}
                >
                  {s.icon}
                </div>
                <h3 className="display mt-6 text-[22px] font-semibold text-[var(--text-primary)]">
                  {s.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.55] text-[var(--text-secondary)]">
                  {s.summary}
                </p>
                <div className="mt-6 mono text-[var(--brand-blue)] inline-flex items-center gap-1 group-hover:gap-2 transition-all normal-case tracking-normal">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Get started"
        title="Ready to hand off the back office?"
        body="Tell us what you need help with. We'll come back with a plan and a price within 24 hours."
      />
    </PageShell>
  );
}
