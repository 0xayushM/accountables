import { RevealBlock } from "./RevealBlock";

export function CTA() {

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-10 md:p-20"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)",
          }}
        >
          {/* Subtle jersey stripe overlay */}
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
            <RevealBlock delay={0}>
              <h2 className="display text-[36px] sm:text-[48px] md:text-[64px] font-semibold text-white">
                Talk to us <span className="accent">today</span>.
              </h2>
            </RevealBlock>
            <RevealBlock delay={80}>
              <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-white/70 max-w-lg">
                We&apos;ll get back to you as soon as possible.. No long contracts -
                just clarity over your numbers.
              </p>
            </RevealBlock>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <a
                href="https://calendly.com/accountables"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14px] font-medium hover:bg-white/90 transition-colors"
              >
                Schedule a call
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/60">
              <a
                href="mailto:support@accountables.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                support@accountables.com
              </a>
              <a
                href="tel:+4447467348253"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                +44 7467 348253
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
