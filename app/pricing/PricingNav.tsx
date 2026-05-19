"use client";

import { useState, useEffect, useRef } from "react";

type TierLink = { id: string; name: string; price: string };

const LINE_H = 88; // px — gap between tier dots

export function PricingNav({ tiers, sectionId }: { tiers: TierLink[]; sectionId: string }) {
  const [active, setActive] = useState(tiers[0]?.id ?? "");
  const [inView, setInView] = useState(false);
  const [leftPx, setLeftPx] = useState(-9999);
  const anchorRef = useRef<HTMLDivElement>(null);

  const activeIndex = tiers.findIndex((t) => t.id === active);

  // Left offset from anchor div
  useEffect(() => {
    const update = () => {
      if (anchorRef.current) {
        setLeftPx(anchorRef.current.getBoundingClientRect().left);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Single scroll handler: visibility + active tier (symmetric on both directions)
  useEffect(() => {
    const check = () => {
      const first = document.getElementById(tiers[0]?.id ?? "");
      const last = document.getElementById(tiers[tiers.length - 1]?.id ?? "");
      if (!first || !last) return;

      // Visibility
      const fr = first.getBoundingClientRect();
      const lr = last.getBoundingClientRect();
      setInView(fr.top < window.innerHeight * 0.5 && lr.bottom > 0);

      // Active = card whose vertical center is closest to viewport center
      const vCenter = window.innerHeight / 2;
      let closestId = tiers[0]?.id ?? "";
      let minDist = Infinity;
      tiers.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - vCenter);
        if (dist < minDist) {
          minDist = dist;
          closestId = id;
        }
      });
      setActive(closestId);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [tiers]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      {/* Anchor div — holds the 148px layout column */}
      <div ref={anchorRef} className="hidden lg:block w-[148px] flex-shrink-0" aria-hidden="true" />

      {/* Fixed overlay — true full-viewport-height sidebar */}
      <div
        className="hidden lg:flex fixed top-0 h-screen z-30 flex-col transition-opacity duration-300"
        style={{ left: leftPx, width: 148, opacity: inView ? 1 : 0, pointerEvents: inView ? "auto" : "none" }}
      >
        <div className="flex flex-col justify-center flex-1 pt-20 pb-8">
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-6">
            Plans
          </p>

          <div className="flex flex-col">
            {tiers.map((tier, i) => {
              const isActive = active === tier.id;
              const lineFilled = activeIndex > i;

              return (
                <div key={tier.id} className="flex gap-3">
                  {/* Dot + animated line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <button
                      onClick={() => scrollTo(tier.id)}
                      className={`h-2.5 w-2.5 rounded-full mt-[3px] flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--brand-navy)] scale-[1.35] shadow-[0_0_0_3px_rgba(11,30,63,0.14)]"
                          : "bg-[var(--border)] hover:bg-[var(--text-muted)]"
                      }`}
                    />
                    {i < tiers.length - 1 && (
                      /* Track: grey background, blue fill grows from top */
                      <div
                        className="w-px mt-2 relative overflow-hidden flex-shrink-0"
                        style={{ height: LINE_H, background: "var(--border)" }}
                      >
                        <div
                          className="absolute inset-x-0 top-0 transition-all ease-in-out"
                          style={{
                            height: lineFilled ? "100%" : "0%",
                            transitionDuration: "600ms",
                            background: "linear-gradient(to bottom, var(--brand-navy), var(--brand-blue))",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Label — pb matches line height to align dots */}
                  <div style={{ paddingBottom: i < tiers.length - 1 ? LINE_H + 12 : 0 }}>
                    <button
                      onClick={() => scrollTo(tier.id)}
                      className={`text-left leading-snug transition-colors duration-200 ${
                        isActive
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      <span className="block text-[12px] font-semibold">{tier.name}</span>
                      <span className="block text-[10.5px] mt-0.5 text-[var(--text-muted)]">{tier.price}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
