export function InnerCTA({
  eyebrow = "Get started",
  title = "Talk to us today.",
  body = "We'll get back to you as soon as possible.. No long contracts - just clarity over your numbers.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-10 md:p-20"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 80px, transparent 80px, transparent 160px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-1/2 -right-1/4 h-[120%] w-[60%] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(10, 132, 255, 0.6) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[11px] tracking-[0.14em] uppercase font-medium">
              {eyebrow}
            </span>
            <h2 className="display mt-5 text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-white">
              {title}
            </h2>
            <p className="mt-5 text-[15px] md:text-[17px] leading-[1.55] text-white/70 max-w-lg">
              {body}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/accountables"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14px] font-semibold hover:bg-white/90 transition-colors"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
