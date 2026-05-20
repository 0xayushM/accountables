import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "About - Accountables",
  description: "Accountables was built around a simple belief - growing businesses deserve a more structured finance function.",
};

const STATS = [
  { val: "100+",        label: "Businesses supported" },
  { val: "Multi-region", label: "Operational experience across the UK, US & India" },
  { val: "End-to-end",  label: "Finance operations support" },
  { val: "Ongoing",     label: "Reporting, compliance & finance coordination" },
];

const VALUES = [
  {
    icon: "∑",
    title: "Accuracy Above All",
    body: "Every report, reconciliation and financial workflow is built around consistency, traceability and operational reliability.",
  },
  {
    icon: "◐",
    title: "Human-Led, Technology-Enabled",
    body: "We believe finance works best when experienced finance professionals and intelligent operational systems work together. Accountables One is designed to reduce operational friction, improve visibility and create more connected finance workflows - allowing our team to focus on the areas that require judgment, coordination and business understanding.",
  },
  {
    icon: "⊞",
    title: "Structured Communication",
    body: "Finance support should not feel fragmented. We believe businesses deserve organized communication, workflow visibility and coordinated execution across ongoing finance activities.",
  },
  {
    icon: "△",
    title: "Built Around Growing Businesses",
    body: "As businesses grow, finance operations become more complex. Our goal is to help businesses build finance structure early - creating systems, reporting visibility and operational coordination designed to scale over time.",
  },
];

const ONE_FEATURES = [
  "Reporting visibility",
  "Workflow coordination",
  "Task management",
  "Finance communication",
  "AI-assisted categorization",
  "Connected operational support",
];

export default function AboutPage() {
  return (
    <PageShell>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        eyebrow="About Accountables"
        title="Finance,"
        highlight="organized."
        description="Accountables was built around a simple belief - growing businesses deserve a more structured finance function."
      />

      {/* ── Our Approach ─────────────────────────────────────── */}
      <section className="pb-24 md:pb-32 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left: copy */}
            <div>
              <span className="pill mb-6 block w-fit">Our Approach</span>
              <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                Your virtual{" "}
                <span className="accent">finance department</span>.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                Accountables is designed to operate as an extension of your business.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                Too often, founders are left coordinating fragmented accountants, chasing reports, managing compliance timelines and spending valuable time inside operational finance instead of building their business.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                From bookkeeping and reporting to compliance, management accounting and strategic finance support, we help businesses build a more structured finance function without building large internal teams.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                Through <span className="font-semibold text-[var(--brand-blue)] inline-flex items-center gap-1"><img src="/icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />Accountables One</span>, our connected operational environment, clients gain visibility across finance workflows, communication, reporting and ongoing operational coordination.
              </p>
            </div>

            {/* Right: result pillars */}
            <div className="lg:pt-2">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-5">
                The result is a finance function designed around:
              </p>
              <div className="flex flex-col gap-3">
                {["Visibility", "Structure", "Coordination", "Consistency", "Scalable growth"].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-[var(--border)] bg-white"
                  >
                    <span
                      className="h-7 w-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-semibold text-[var(--text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── By The Numbers ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="pill">By The Numbers</span>
            <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[44px] font-semibold text-[var(--text-primary)] leading-[1.06]">
              Built around{" "}
              <span className="accent">real results</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="card p-7 flex flex-col gap-3 text-center items-center">
                <div className="display text-[28px] md:text-[32px] font-semibold text-[var(--brand-blue)] leading-none">
                  {s.val}
                </div>
                <div className="text-[13px] leading-[1.5] text-[var(--text-secondary)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Believe In ───────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <span className="pill">What We Believe In</span>
            <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
              Principles that guide{" "}
              <span className="accent">how we work</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-7 md:p-8 flex flex-col gap-4">
                <span
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-[18px] text-[var(--brand-blue)]"
                  style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)" }}
                >
                  {v.icon}
                </span>
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">{v.title}</h3>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Photo */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[32px] blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, var(--brand-blue) 0%, transparent 70%)" }}
                aria-hidden
              />
              <div className="relative rounded-[24px] overflow-hidden border border-[var(--border)] shadow-[0_24px_64px_-16px_rgba(11,30,63,0.12)] aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/founder.png"
                  alt="Sidharth Dugar - Founder & CEO of Accountables"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                />
              </div>
            </div>

            {/* Copy */}
            <div>
              <span className="pill mb-6 block w-fit">Founder</span>
              <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                Sidharth{" "}
                <span className="accent">Dugar</span>
              </h2>
              <p className="mt-1 text-[15px] font-medium text-[var(--brand-blue)]">Founder & CEO</p>

              <p className="mt-6 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
                Building the future of modern finance operations for growing businesses.
              </p>
              <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
                Chartered Accountant and MBA with experience across finance operations, reporting and compliance environments supporting businesses across the UK, US and India.
              </p>
              <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
                Focused on combining finance expertise, operational systems and technology through{" "}
                <span className="font-semibold text-[var(--text-primary)] inline-flex items-center gap-1"><img src="/icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />Accountables One</span>{" "}
                - with the belief that modern finance functions need to evolve alongside connected workflows and AI-enabled operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Chartered Accountant", "MBA", "UK · US · India", "Outsourced Finance"].map((tag) => (
                  <span key={tag} className="pill text-[12px]">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Accountables One ─────────────────────────────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 60px, transparent 60px, transparent 120px)" }}
        />
        <div
          aria-hidden
          className="absolute -top-1/4 -right-1/4 h-[70%] w-[60%] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 border border-white/20 rounded-full px-3 py-1 mb-6">
                <img src="/icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em', filter: 'brightness(0) invert(1)', opacity: 0.5 }} />Accountables One
              </span>
              <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-white leading-[1.04]">
                Connected{" "}
                <span className="accent">finance operations</span>.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-white/65 max-w-md">
                Accountables One is our connected operational environment designed around finance visibility, workflow coordination and ongoing communication.
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-white/50">
                Expanded platform capabilities coming soon.
              </p>
              <div className="mt-8">
                <Link
                  href="/ai"
                  className="inline-flex h-11 items-center gap-2 px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14px] font-medium hover:bg-white/90 transition-colors"
                >
                  Join Early Access
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: feature pills */}
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-white/40 mb-5">
                Built to support:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ONE_FEATURES.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--brand-accent)" }}
                    />
                    <span className="text-[13.5px] text-white/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--surface-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-10 md:p-20 text-center"
            style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 80px, transparent 80px, transparent 160px)" }}
            />
            <div
              aria-hidden
              className="absolute -top-1/2 -right-1/4 h-[120%] w-[60%] rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, rgba(10,132,255,0.6) 0%, transparent 70%)" }}
            />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="display text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-white leading-[1.04]">
                A More <span className="accent">Organized</span> Finance Function.
              </h2>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.65] text-white/65 max-w-lg mx-auto">
                Accountables helps businesses build structured finance operations designed around visibility, coordination and scalable growth.
              </p>
              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="inline-flex h-12 items-center gap-2 px-8 rounded-full bg-white text-[var(--brand-navy)] text-[14.5px] font-medium hover:bg-white/90 transition-colors"
                >
                  Book a Consultation
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
