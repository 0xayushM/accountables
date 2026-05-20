type SerifWord = {
  /** Word in `title` (case-insensitive) that should render in Playfair italic. */
  inTitle?: string;
  /** Word in `highlight` that should render in Playfair italic. */
  inHighlight?: string;
};

function withAccent(text: string, word?: string) {
  if (!word) return text;
  const idx = text.toLowerCase().indexOf(word.toLowerCase());
  if (idx < 0) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + word.length);
  const after = text.slice(idx + word.length);
  return (
    <>
      {before}
      <span className="accent">{match}</span>
      {after}
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  serif,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  serif?: SerifWord;
}) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="jersey-stripes stripe-slide-in opacity-[0.7]" />
      </div>
      <div aria-hidden className="absolute inset-0 jersey-fade fade-in-soft" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="pill">{eyebrow}</span>
          <h1 className="display mt-5 text-[44px] sm:text-[60px] md:text-[80px] font-semibold tracking-tight leading-[1.02] text-[var(--text-primary)]">
            {withAccent(title, serif?.inTitle)}
            {highlight && (
              <>
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-accent) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {withAccent(highlight, serif?.inHighlight)}
                </span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] md:text-[19px] leading-[1.55] text-[var(--text-secondary)]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
