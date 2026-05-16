const testimonials = [
  {
    quote:
      "Their experience and knowledge came in handy when I had to present to Shark Tank. I recommend — and would, without a doubt — Accountables.",
    name: "Juls Bindi",
    role: "Founder, ZicoPet",
  },
  {
    quote:
      "They helped me with my annual VAT return. Good stuff. They got the job done quickly and were very responsive.",
    name: "Dimitar Tsonev",
    role: "Founder, Pushrl Video",
  },
  {
    quote:
      "I would have no hesitation in recommending their team to work with new clients to provide a best-in-class solution.",
    name: "Deborah Walker",
    role: "Director, The Black HCT Ltd",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="pill">Customer stories</span>
          <h2 className="display mt-5 text-[36px] sm:text-[48px] md:text-[60px] font-semibold text-[var(--text-primary)]">
            Numbers that
            <br />
            stood up to <span className="accent">scrutiny</span>.
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`card p-8 md:p-9 flex flex-col ${
                i === 0 ? "md:col-span-1" : ""
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[var(--brand-blue)] opacity-70"
              >
                <path
                  d="M7 11H4l3-7h3l-3 7zm10 0h-3l3-7h3l-3 7zM4 13h6v7H4v-7zm10 0h6v7h-6v-7z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-5 text-[17px] md:text-[18px] leading-[1.55] text-[var(--text-primary)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-7 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-white text-[14px] font-semibold"
                  style={{
                    background: `linear-gradient(135deg, var(--brand-navy), var(--brand-blue))`,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--text-primary)]">
                    {t.name}
                  </div>
                  <div className="text-[12.5px] text-[var(--text-muted)]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
