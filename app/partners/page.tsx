import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";

export const metadata: Metadata = {
  title: "Partner Marketplace - Accountables",
  description: "We partner with businesses that help other small businesses scale - see who's on the list.",
};

const partnerCategories = [
  {
    category: "Payroll & HR",
    partners: [
      { name: "Gusto", desc: "Full-service payroll, benefits and compliance for small businesses.", href: "#" },
      { name: "Deel", desc: "Global payroll and compliance for distributed teams in 150+ countries.", href: "#" },
      { name: "Remote", desc: "Employ people globally without setting up entities.", href: "#" },
    ],
  },
  {
    category: "Banking & Payments",
    partners: [
      { name: "Stripe", desc: "Payments infrastructure for internet businesses.", href: "#" },
      { name: "Mercury", desc: "Banking built for startups. No fees, real support.", href: "#" },
      { name: "Brex", desc: "Corporate cards and spend management for modern businesses.", href: "#" },
    ],
  },
  {
    category: "E-commerce & Retail",
    partners: [
      { name: "Shopify", desc: "The commerce platform built for independent brands.", href: "#" },
      { name: "Amazon", desc: "The world&apos;s largest marketplace - we reconcile every fee.", href: "#" },
      { name: "Square", desc: "Point-of-sale and online payment processing.", href: "#" },
    ],
  },
  {
    category: "Accounting Software",
    partners: [
      { name: "Xero", desc: "Beautiful online accounting software for small business.", href: "#" },
      { name: "QuickBooks", desc: "Accounting software and tools for growing businesses.", href: "#" },
      { name: "FreeAgent", desc: "Award-winning accounting software for freelancers and micro-businesses.", href: "#" },
    ],
  },
  {
    category: "Legal & Compliance",
    partners: [
      { name: "Companies House", desc: "Official UK register of company filings - we handle all submissions.", href: "#" },
      { name: "HMRC Connect", desc: "Seamless HMRC submissions for VAT, PAYE, CT and self-assessment.", href: "#" },
    ],
  },
];

export default function PartnersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Partner marketplace"
        title="We partner with"
        highlight="the world's best."
        description="Accountables integrates with the tools your business already uses - so your financial data is always where you need it."
        serif={{ inHighlight: "world's" }}
      />

      {/* Partner grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-14 md:gap-18">
            {partnerCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--text-muted)] mb-5">
                  {cat.category}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.partners.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className="card p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform group"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-[16px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                          {p.name}
                        </h3>
                        <span className="text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] group-hover:translate-x-0.5 transition-all">→</span>
                      </div>
                      <p
                        className="text-[13.5px] leading-[1.55] text-[var(--text-secondary)]"
                        dangerouslySetInnerHTML={{ __html: p.desc }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-24 md:py-32 bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <span className="pill">Become a partner</span>
          <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)]">
            Work with us to help{" "}
            <span className="accent">small businesses thrive</span>.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-[var(--text-secondary)]">
            We partner with businesses, tools and platforms that align with our mission to make world-class finance accessible to every business. If that sounds like you, let&apos;s talk.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:partners@accountables.com" className="btn-primary">
              Apply to partner
            </a>
            <a href="/about" className="btn-ghost">
              Learn about us
            </a>
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Ready to connect your tools?"
        title="All integrations, set up for you."
        body="No CSV exports. No manual imports. We connect to your tools and keep your books running - automatically."
      />
    </PageShell>
  );
}
