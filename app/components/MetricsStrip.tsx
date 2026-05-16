const metrics = [
  { value: "240", suffix: "+", label: "Active clients", delta: "↑ 38 this quarter" },
  { value: "2.4", unit: "days", label: "Avg. close time", delta: "↓ from industry 14" },
  { value: "99.2", suffix: "%", label: "AI classification accuracy" },
  { value: "47", suffix: "m", label: "Transactions processed", delta: "↑ YTD" },
];

export function MetricsStrip() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="strip grid-cols-2 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="cell">
              <div className="display text-[40px] md:text-[52px] font-semibold leading-none text-[var(--text-primary)] tracking-tight">
                {m.value}
                {m.suffix && (
                  <span className="text-[0.5em] text-[var(--text-muted)] font-medium ml-1 align-super">
                    {m.suffix}
                  </span>
                )}
                {m.unit && (
                  <span className="text-[0.34em] text-[var(--text-muted)] font-normal ml-2 align-baseline">
                    {m.unit}
                  </span>
                )}
              </div>
              <div className="mono mt-3 uppercase text-[var(--text-muted)]">
                {m.label}
              </div>
              {m.delta && (
                <div className="mono mt-1 text-emerald-600 normal-case tracking-normal">
                  {m.delta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
