const items = [
  {
    title: "AI-native operations",
    body: "We didn't bolt AI onto a 1990s practice. Every workflow - from invoice ingestion to anomaly review - was rebuilt around autonomous agents.",
  },
  {
    title: "A senior partner on every account",
    body: "No junior hand-offs, no off-shore mystery teams. You get a named ACA-qualified lead who actually knows your business.",
  },
  {
    title: "Transparent, fixed pricing",
    body: "No surprise invoices, no hourly billing arguments. One monthly fee, scoped to your stage and scale.",
  },
  {
    title: "Modern finance stack",
    body: "Native integrations with QuickBooks, Xero, Stripe, Brex, Mercury - wherever your money lives, we read it.",
  },
  {
    title: "E-commerce expertise",
    body: "Multi-channel, multi-currency, Shopify + Amazon + Stripe revenue reconciled correctly. Cost of goods, properly accrued.",
  },
  {
    title: "Startup-friendly systems",
    body: "EIS, SEIS, R&D credits, equity reporting, investor packs - set up right the first time, scaled with your raises.",
  },
];

export function Differentiators() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="pill">Why Accountables</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-[var(--text-primary)]">
            Six reasons growing
            <br />
            businesses make the <span className="accent">switch</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)]">
            Our clients tell us we feel less like an accountancy firm and more
            like an extension of their team. We take that as the highest
            compliment.
          </p>
        </div>

        <div className="rounded-[24px] border border-[var(--border)] overflow-hidden bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`p-8 md:p-9 border-[var(--border)]
                ${i % 3 !== 2 ? "lg:border-r" : ""}
                ${i % 2 !== 1 ? "md:border-r lg:border-r-0" : ""}
                ${i < items.length - 1 ? "border-b" : ""}
                ${
                  Math.floor(i / 3) === Math.floor((items.length - 1) / 3)
                    ? "lg:border-b-0"
                    : "lg:border-b"
                }
                ${
                  Math.floor(i / 2) === Math.floor((items.length - 1) / 2)
                    ? "md:border-b-0"
                    : "md:border-b"
                }
              `}
            >
              <span className="mono uppercase text-[var(--text-muted)]">
                / 0{i + 1}
              </span>
              <h3 className="display mt-5 text-[20px] md:text-[22px] font-semibold text-[var(--text-primary)]">
                {it.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--text-secondary)]">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
