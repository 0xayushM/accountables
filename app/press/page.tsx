import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";

export const metadata: Metadata = {
  title: "Press — Accountables",
  description: "The latest news, updates, and happenings from Accountables.",
};

const pressItems = [
  {
    date: "April 2026",
    outlet: "Entrepreneur",
    title: "How Accountables is Making Professional Bookkeeping Accessible to Every Small Business",
    href: "#",
    tag: "Feature",
  },
  {
    date: "March 2026",
    outlet: "Forbes",
    title: "AI Close: The Tool That Could End Manual Month-End Closing For Good",
    href: "#",
    tag: "Coverage",
  },
  {
    date: "February 2026",
    outlet: "The Times",
    title: "Meet the Startup Giving Small Businesses a CFO Without the Price Tag",
    href: "#",
    tag: "Profile",
  },
  {
    date: "January 2026",
    outlet: "City A.M.",
    title: "Accountables Secures £4M to Expand AI-Powered Finance Offering",
    href: "#",
    tag: "Funding",
  },
  {
    date: "December 2025",
    outlet: "TechCrunch",
    title: "Accountables Launches Private Beta of AI Close, Its Autonomous Month-End Platform",
    href: "#",
    tag: "Launch",
  },
  {
    date: "October 2025",
    outlet: "The Guardian",
    title: "The Bookkeeping Revolution: How AI Is Giving Small Businesses Their Time Back",
    href: "#",
    tag: "Feature",
  },
];

export default function PressPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Press"
        title="Accountables in"
        highlight="the news."
        description="The latest coverage, features, and announcements from Accountables and our team."
        serif={{ inHighlight: "the" }}
      />

      {/* Press kit */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="card p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-[16px] font-semibold text-[var(--text-primary)]">Press kit</h3>
              <p className="mt-1 text-[14px] text-[var(--text-secondary)]">
                Logos, brand assets, executive headshots and fact sheet — all in one download.
              </p>
            </div>
            <a
              href="#"
              className="btn-primary !py-2.5 !px-5 !text-[13px] flex-shrink-0"
            >
              Download kit
            </a>
          </div>
        </div>
      </section>

      {/* Press articles */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white">
            {pressItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 md:px-8 py-5 md:py-6 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface-soft)] transition-colors group"
              >
                <div className="flex-shrink-0">
                  <span className="mono text-[var(--text-muted)] text-[11px]">{item.date}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[12px] font-semibold text-[var(--brand-blue)]">{item.outlet}</span>
                    <span className="text-[10px] text-[var(--text-muted)] bg-[var(--surface-soft)] border border-[var(--border)] px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="text-[15px] md:text-[16px] font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] group-hover:translate-x-0.5 transition-all flex-shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Press enquiries"
        title="Get in touch with our press team."
        body="For media enquiries, interviews, or brand assets, please reach out at press@accountables.com."
      />
    </PageShell>
  );
}
