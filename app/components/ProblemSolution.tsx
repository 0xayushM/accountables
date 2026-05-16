const before = [
  "Bookkeeper sends invoices once a month, in batches",
  "Reconciliations live in someone's inbox",
  "Reports arrive 3 weeks after the period closes",
  "Tax is a once-a-year scramble of receipts",
  "You learn about cash issues after they happen",
];

const after = [
  "Transactions classified continuously, in real time",
  "Reconciliation is a dashboard, not a workflow",
  "Management accounts ready by day 3 of every month",
  "Tax position visible always, filed without drama",
  "Anomalies flagged the day they happen",
];

export function ProblemSolution() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="pill">The shift</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-[var(--text-primary)]">
            From scattered spreadsheets
            <br />
            to a single <span className="accent">finance system</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] md:text-[18px] leading-[1.55] text-[var(--text-secondary)]">
            The way most growing businesses run finance is broken: too many tools,
            too many handoffs, too many surprises at year-end. We rebuilt it.
          </p>
        </div>

        <div className="psplit">
          <div className="pleft">
            <div className="mono uppercase" style={{ color: "#c2410c" }}>
              Before
            </div>
            <h3 className="display mt-3 text-[22px] md:text-[26px] font-semibold text-[var(--text-primary)]">
              The old way
            </h3>
            <ul className="mt-6 space-y-3.5">
              {before.map((b, i) => (
                <li
                  key={b}
                  className="flex gap-4 text-[15px] leading-[1.5] text-[var(--text-secondary)]"
                >
                  <span className="mono text-[var(--text-muted)] flex-shrink-0 w-7">
                    0{i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pright">
            <div className="mono uppercase text-emerald-600">
              With Accountables
            </div>
            <h3 className="display mt-3 text-[22px] md:text-[26px] font-semibold text-[var(--text-primary)]">
              The new way
            </h3>
            <ul className="mt-6 space-y-3.5">
              {after.map((a, i) => (
                <li
                  key={a}
                  className="flex gap-4 text-[15px] leading-[1.5] text-[var(--text-primary)]"
                >
                  <span className="mono text-[var(--brand-blue)] flex-shrink-0 w-7">
                    0{i + 1}
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
