export function TrustedBy() {
  const logos = [
    "Flutterwave",
    "Rainforest",
    "Domino's",
    "Door Studio",
    "Lactors",
    "Opencorporates",
    "Alexandrian",
    "West",
  ];

  return (
    <section className="py-14 md:py-20 border-y border-black/[0.06] bg-[var(--surface-soft)]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-[12px] tracking-[0.18em] uppercase text-[var(--text-muted)] mb-8">
          Trusted by 100+ businesses worldwide
        </p>
        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10"
          />
          <div className="flex gap-14 md:gap-20 marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="display text-[20px] md:text-[24px] font-semibold tracking-tight text-[var(--text-muted)] whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
