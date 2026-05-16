const integrations = [
  { name: "QuickBooks", live: true },
  { name: "Xero", live: true },
  { name: "NetSuite", live: true },
  { name: "Sage", live: false },
  { name: "Stripe", live: true },
  { name: "Plaid", live: true },
  { name: "Brex", live: true },
  { name: "Mercury", live: true },
  { name: "Ramp", live: false },
  { name: "Gusto", live: true },
  { name: "Shopify", live: true },
  { name: "Square", live: false },
  { name: "Amazon", live: true },
  { name: "Wise", live: true },
];

export function IntegrationsMarquee() {
  return (
    <section className="py-16 md:py-20 border-y border-[var(--border)] bg-[var(--surface-soft)]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 text-center mb-8">
        <span className="eyebrow !mx-auto">Plays nicely with your stack</span>
        <p className="mt-5 mx-auto max-w-2xl text-[15px] md:text-[17px] leading-[1.5] text-[var(--text-secondary)]">
          Native, two-way integrations with the tools you already use. No CSV
          exports, no manual reconciliation.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10"
        />
        <div className="flex gap-3 md:gap-4 marquee w-max py-2">
          {[...integrations, ...integrations].map((i, idx) => (
            <span
              key={`${i.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[var(--border)] bg-white text-[13px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i.live ? "bg-emerald-500" : "bg-[var(--text-muted)]"
                }`}
                style={
                  i.live
                    ? {
                        boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.18)",
                      }
                    : undefined
                }
              />
              <span className="text-[var(--text-primary)]">{i.name}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <span className="mono text-[var(--text-muted)]">
          + 40 more · Open API · Webhooks · SOC 2 Type II
        </span>
      </div>
    </section>
  );
}
