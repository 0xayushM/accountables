export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-28">
      {/* Football jersey stripe background */}
      <div
        aria-hidden
        className="absolute inset-0 jersey-stripes opacity-[0.85]"
      />
      {/* Soft fade overlay so it feels Apple-minimal */}
      <div aria-hidden className="absolute inset-0 jersey-fade" />
      {/* Subtle top gradient line */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <a href="/ai" className="rise rise-1 waitlist-chip mb-7 group">
            <span className="inline-flex items-center gap-2">
              <span className="dot-pulse" />
              <span className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-white/80">
                New
              </span>
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>
              Accountables AI · <span className="font-semibold">Join the waitlist</span>
            </span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <h1 className="rise rise-2 display text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px] font-semibold text-[var(--text-primary)]">
            Numbers, <span className="accent">handled</span>.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business, <span className="accent">accelerated</span>.
            </span>
          </h1>

          <p className="rise rise-3 mt-6 md:mt-8 mx-auto max-w-2xl text-[17px] md:text-[19px] leading-[1.5] text-[var(--text-secondary)]">
            Real-time bookkeeping, tax, and CFO services for ambitious
            businesses. A dedicated finance team — without the overhead.
          </p>

          <div className="rise rise-4 mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/ai" className="btn-primary">
              Start free trial
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/services" className="btn-ghost">
              Explore services
            </a>
          </div>

          <p className="rise rise-5 mt-6 text-[13px] text-[var(--text-muted)]">
            From £20/hour · No long contracts · Trusted by 100+ businesses
          </p>
        </div>

        {/* Hero visual — minimalist stat card */}
        <div className="rise rise-5 relative mt-14 md:mt-20 max-w-5xl mx-auto">
          <div
            className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-[40px] blur-2xl opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(29, 78, 216, 0.18) 0%, rgba(255,255,255,0) 70%)",
            }}
          />
          {/* <div className="card overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { k: "Live", v: "Books, in real time" },
                { k: "100+", v: "Businesses served" },
                { k: "£20/hr", v: "Starting rate" },
                { k: "24h", v: "Avg. response" },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className={`p-6 md:p-8 ${
                    i !== 0 ? "md:border-l border-[var(--border)]" : ""
                  } ${i % 2 !== 0 ? "border-l border-[var(--border)] md:border-l" : ""} ${
                    i > 1 ? "border-t border-[var(--border)] md:border-t-0" : ""
                  }`}
                >
                  <div className="display text-[28px] md:text-[36px] font-semibold tracking-tight text-[var(--text-primary)]">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[13px] md:text-[14px] text-[var(--text-secondary)]">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
