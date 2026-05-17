import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";

export const metadata: Metadata = {
  title: "About — Accountables",
  description: "Learn about Accountables, our mission, and the team behind your financial success.",
};

const values = [
  {
    icon: "∑",
    title: "Accuracy above all",
    body: "We never cut corners. Every number we produce is reconciled, traceable, and audit-ready — because your business decisions depend on it.",
  },
  {
    icon: "◐",
    title: "AI + human, together",
    body: "Our AI handles the mechanical 80% so your dedicated bookkeeper can spend their hours on the judgment, advice, and edge cases that actually matter.",
  },
  {
    icon: "◇",
    title: "Radical transparency",
    body: "No black boxes. You see every transaction, every classification, every note. Your books are yours — and we make sure you understand them.",
  },
  {
    icon: "△",
    title: "Growth-minded",
    body: "We're not just here to file your VAT. We're here to make sure your numbers accelerate your ambitions, from seed to Series C and beyond.",
  },
];

const team = [
  { initials: "AR", name: "Aryan Reeves", role: "Co-founder & CEO", bio: "Former Big 4 auditor. Obsessed with making finance radically simpler for founders." },
  { initials: "PM", name: "Priya Mehta", role: "Co-founder & CTO", bio: "Built ML pipelines at a FTSE 100. Now applies the same rigour to bookkeeping automation." },
  { initials: "TC", name: "Thomas Chen", role: "Head of Accounting", bio: "ACA-qualified with 12 years in practice. Leads our team of senior bookkeepers." },
  { initials: "SB", name: "Sophia Blake", role: "Head of Tax", bio: "Tax advisory specialist. R&D credits, EIS, and complex structuring are her playground." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Accountables"
        title="Finance as it"
        highlight="should be."
        description="We started Accountables because we were tired of watching brilliant founders spend their weekends doing their bookkeeper's job. There had to be a better way."
        serif={{ inHighlight: "should" }}
      />

      {/* Mission */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="pill">Our mission</span>
              <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)]">
                Your virtual finance department,{" "}
                <span className="accent">without the overhead</span>.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                We believe every business deserves access to world-class finance — not just the ones big enough to afford a full-time CFO. Our combination of senior accountants and intelligent software means you get clarity when you need it and stay focused on running your business.
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                From £20/hour, with no long contracts and no surprise fees. Just the numbers you need to make great decisions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "100+", label: "Businesses served" },
                { val: "£200M+", label: "Tax credits secured" },
                { val: "1M+", label: "Months of books completed" },
                { val: "24h", label: "Average response time" },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <div className="display text-[32px] md:text-[36px] font-semibold text-[var(--brand-blue)]">{s.val}</div>
                  <div className="mt-1.5 text-[13px] text-[var(--text-secondary)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill">Our values</span>
            <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)]">
              What we believe in
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 md:p-7 flex flex-col gap-4">
                <span className="text-[24px] text-[var(--brand-blue)]">{v.icon}</span>
                <h3 className="text-[16px] font-semibold text-[var(--text-primary)]">{v.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[var(--text-secondary)]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill">The team</span>
            <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)]">
              Real people,{" "}
              <span className="accent">behind every number</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {team.map((person) => (
              <div key={person.name} className="card p-6 md:p-7 flex flex-col gap-4">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center text-white text-[16px] font-semibold"
                  style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
                >
                  {person.initials}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[var(--text-primary)]">{person.name}</div>
                  <div className="text-[12.5px] text-[var(--brand-blue)] mt-0.5">{person.role}</div>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-[var(--text-secondary)]">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Ready to get started?"
        title="Join 100+ businesses who trust Accountables with their books."
        body="No long contracts. From £20/hour, with a dedicated senior bookkeeper in your corner from day one."
      />
    </PageShell>
  );
}
