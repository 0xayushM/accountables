"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 700);
  };

  return (
    <div
      id="waitlist-form"
      className="relative rounded-[28px] overflow-hidden p-8 md:p-10"
      style={{
        background:
          "linear-gradient(165deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 110%)",
      }}
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute -top-1/3 -right-1/3 h-[90%] w-[90%] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(10, 132, 255, 0.7) 0%, transparent 70%)",
        }}
      />
      {/* Jersey stripes overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 60px, transparent 60px, transparent 120px)",
        }}
      />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[11px] tracking-[0.14em] uppercase font-medium">
          <span className="dot-pulse" />
          Limited spots
        </div>
        <h2 className="display mt-4 text-[28px] md:text-[32px] font-semibold text-white">
          Join the waitlist
        </h2>
        <p className="mt-2 text-[14.5px] leading-[1.55] text-white/70">
          Get early access. We&apos;ll reach out when your spot opens up.
        </p>

        {status === "done" ? (
          <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-6 text-center">
            <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l4 4L19 6"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mt-3 text-white font-medium text-[15.5px]">
              You&apos;re on the list.
            </div>
            <div className="text-white/70 text-[13.5px] mt-1">
              We&apos;ll be in touch shortly.
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="First name"
                className="h-11 px-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/45 outline-none focus:bg-white/15 focus:border-white/40 transition-colors text-[14px]"
              />
              <input
                required
                placeholder="Last name"
                className="h-11 px-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/45 outline-none focus:bg-white/15 focus:border-white/40 transition-colors text-[14px]"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Work email"
              className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/45 outline-none focus:bg-white/15 focus:border-white/40 transition-colors text-[14px]"
            />
            <input
              placeholder="Company"
              className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/45 outline-none focus:bg-white/15 focus:border-white/40 transition-colors text-[14px]"
            />
            <select
              defaultValue=""
              className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/15 text-white outline-none focus:bg-white/15 focus:border-white/40 transition-colors text-[14px] appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 14px center",
                paddingRight: "36px",
              }}
            >
              <option value="" disabled style={{ color: "#000" }}>
                Company size
              </option>
              <option style={{ color: "#000" }}>1–10</option>
              <option style={{ color: "#000" }}>11–50</option>
              <option style={{ color: "#000" }}>51–200</option>
              <option style={{ color: "#000" }}>200+</option>
            </select>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[var(--brand-navy)] text-[14.5px] font-semibold hover:bg-white/90 transition-colors disabled:opacity-70"
            >
              {status === "submitting" ? (
                "Joining…"
              ) : (
                <>
                  Reserve my spot
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>

            <p className="text-[11.5px] text-white/55 text-center pt-1">
              We&apos;ll only email you about the beta. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
