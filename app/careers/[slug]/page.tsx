import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuMapPin, LuClock, LuGraduationCap, LuGlobe, LuArrowLeft } from "react-icons/lu";
import { PageShell } from "../../components/PageShell";
import { OPENINGS, getOpening } from "../../data/openings";

export function generateStaticParams() {
  return OPENINGS.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getOpening(slug);
  if (!job) return { title: "Careers - Accountables" };
  return {
    title: `${job.title} - Careers at Accountables`,
    description: job.summary,
  };
}

export default async function JobDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getOpening(slug);
  if (!job) return notFound();

  const meta = [
    { Icon: LuMapPin, label: job.location },
    { Icon: LuClock, label: job.type },
    { Icon: LuGraduationCap, label: job.qualification },
    { Icon: LuGlobe, label: job.exposure },
  ];

  return (
    <PageShell>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 md:pt-36 pb-12 border-b border-[var(--border)] bg-[var(--background)]">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="jersey-stripes stripe-slide-in opacity-50" />
        </div>
        <div aria-hidden className="absolute inset-0 jersey-fade fade-in-soft" />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10">
          <Link href="/careers" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors mb-6">
            <LuArrowLeft size={15} /> Back to Careers
          </Link>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--brand-blue)] mb-3 block">Open Position</span>
          <h1 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
            {meta.map((m) => (
              <span key={m.label} className="flex items-center gap-1.5 text-[13.5px] text-[var(--text-secondary)]">
                <m.Icon size={15} className="text-[var(--brand-blue)]" />{m.label}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <a href={job.applyUrl || undefined} target="_blank" rel="noopener noreferrer" className="btn-primary !h-11 inline-flex items-center">Apply Now →</a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10">

          {/* Intro */}
          <div className="mb-14">
            {job.intro.map((p, i) => (
              <p key={i} className={`text-[var(--text-secondary)] leading-[1.8] ${i === 0 ? "text-[18px] md:text-[20px] font-medium text-[var(--text-primary)] mb-4" : "text-[15px] md:text-[16px] mb-4"}`}>
                {p}
              </p>
            ))}
          </div>

          {/* What you'll be working on */}
          <div className="mb-14">
            <h2 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)] mb-6">What You&apos;ll Be Working On</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {job.workingOn.map((sec) => (
                <div key={sec.heading} className="card p-6">
                  <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[var(--brand-navy)] mb-4">{sec.heading}</p>
                  <ul className="flex flex-col gap-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 items-start">
                        <span className="flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center text-white mt-0.5" style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}>
                          <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-[13.5px] leading-[1.6] text-[var(--text-primary)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* What we're looking for */}
          <div className="mb-14">
            <h2 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)] mb-6">What We&apos;re Looking For</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {job.lookingFor.map((sec) => (
                <div key={sec.heading} className="rounded-2xl p-6 bg-blue-50/50 border border-blue-100">
                  <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[var(--brand-navy)] mb-4">{sec.heading}</p>
                  <ul className="flex flex-col gap-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 items-start">
                        <span className="flex-shrink-0 h-4 w-4 rounded-full bg-[var(--brand-blue)] flex items-center justify-center text-white mt-0.5">
                          <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-[13px] leading-[1.55] text-[var(--text-primary)] font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* You'll thrive here if you */}
          <div className="mb-14">
            <h2 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)] mb-6">You&apos;ll Thrive Here If You</h2>
            <div className="flex flex-col gap-2.5">
              {job.thriveList.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-soft)] border border-[var(--border)]">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[var(--brand-blue)] flex items-center justify-center text-white mt-px">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="text-[14px] leading-[1.55] text-[var(--text-primary)]">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why join */}
          <div className="mb-16">
            <h2 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)] mb-6">Why Join Accountables</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {job.whyJoin.map((w) => (
                <div key={w.title} className="card p-6">
                  <p className="text-[15px] font-semibold text-[var(--brand-blue)] mb-2">{w.title}</p>
                  <p className="text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">{w.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apply */}
          <div id="apply" className="card overflow-hidden scroll-mt-24">
            <div className="flex flex-col items-center text-center p-8 md:p-14">
              <span className="pill mb-4 block w-fit">Apply</span>
              <h3 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)] leading-snug mb-4">
                Apply for this Position
              </h3>
              <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)] max-w-xl">
                Interested in joining Accountables? Complete the application form and upload your latest CV. If your experience aligns with the role, a member of our team will contact you regarding the next steps.
              </p>
              <a href={job.applyUrl || undefined} target="_blank" rel="noopener noreferrer" className="btn-primary !h-11 mt-7 inline-flex items-center">
                Apply Now →
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
