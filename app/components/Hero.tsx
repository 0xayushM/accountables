'use client';

import Image from "next/image";
import Link from "next/link";
import { ScaledFit } from "./ScaledFit";

// ─── Person avatar (SVG silhouette) ──────────────────────────────────────────

function Avatar({ bg, src, size = 36 }: { bg: string; src?: string; size?: number }) {
  return (
    <div
      className="rounded-full flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size, background: bg }}
    >
      {src ? (
        <Image src={src} alt="" width={size} height={size} className="object-cover w-full h-full" />
      ) : (
        <svg viewBox="0 0 36 36" width={size} height={size} fill="none">
          <circle cx="18" cy="14" r="7" fill="rgba(255,255,255,0.90)" />
          <ellipse cx="18" cy="32" rx="13" ry="9" fill="rgba(255,255,255,0.90)" />
        </svg>
      )}
    </div>
  );
}

// ─── Dashboard Mockup ────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="relative select-none" aria-hidden>

      {/* ── Main card - window with header + content ── */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-black/[0.06] overflow-hidden">

        {/* Window header - always visible across breakpoints */}
        <div className="flex items-center justify-between border-b border-gray-100 px-3.5 py-2.5 bg-gray-50/50">
          {/* macOS window dots (close, minimize, fullscreen) */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Bell + avatar with online dot */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-7 w-7 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500 text-white text-[6px] font-bold flex items-center justify-center">3</span>
            </div>
            <div className="relative flex-shrink-0">
              <div className="h-7 w-7 rounded-full overflow-hidden border-2 border-gray-100">
                <img src="/avatar2.png" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 border-[1.5px] border-white" />
            </div>
          </div>
        </div>

        {/* Body: two-column layout */}
        <div className="flex">
          {/* Left: balance content */}
          <div className="flex-1 px-5 sm:px-6 pt-4 pb-5">
            <div className="mb-1">
              <img src="/prod_icon.svg" alt="" style={{ height: 18, width: 'auto', marginBottom: 10 }} />
              <p className="text-[14.5px] font-bold text-gray-900 leading-snug mt-2">Business account</p>
              <p className="text-[12px] text-gray-400 mt-0.5" style={{ filter: 'blur(2px)', userSelect: 'none' }}>123456</p>
            </div>

            <div className="border-t border-gray-100 my-4" />

            <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-4">
              <div>
                <p className="text-[10px] font-medium text-gray-400 mb-1 tracking-wide">GBP</p>
                <p className="text-[22px] sm:text-[28px] font-semibold text-gray-900 leading-none tabular-nums">360,000</p>
                <p className="text-[11.5px] text-[#1d4ed8] mt-2 leading-snug">Statement balance (Apr 30)</p>
              </div>
              <div className="border-l border-gray-100 pl-3 sm:pl-5">
                <p className="text-[10px] font-medium text-gray-400 mb-1 tracking-wide">GBP</p>
                <p className="text-[22px] sm:text-[28px] font-semibold text-gray-900 leading-none tabular-nums">360,000</p>
                <p className="text-[11.5px] text-[#1d4ed8] mt-2 leading-snug flex items-center gap-1">Balance in <img src="/prod_icon.svg" alt="" style={{ height: 12, width: 'auto', marginBottom: 0 }} /></p>
              </div>
            </div>

            <div className="border-t border-gray-100 mb-4" />

            <div className="flex items-center gap-2.5">
              <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] flex-shrink-0">✓</span>
              <p className="text-[13px] font-medium text-green-700">Your bank is fully reconciled</p>
            </div>
          </div>

          {/* Right: permanent notification panel - hidden on mobile */}
          <div className="flex w-[210px] flex-shrink-0 border-l border-gray-100 px-3.5 pt-3 pb-3.5 flex-col gap-2.5">
            {/* Permanent notification card */}
            <div className="bg-white rounded-md border border-gray-100 shadow-sm p-2.5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-[9.5px] font-semibold text-gray-900">New Update</p>
                </div>
                <span className="text-[8px] text-gray-400">2m ago</span>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14 2 14 8 20 8" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[8.5px] leading-[1.55] text-gray-500">
                  Your accountable manager uploaded new files to your Accountables One dashboard.
                </p>
              </div>
              <a href="/ai" className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-[#1d4ed8]">
                Open Dashboard
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-12 lg:py-0">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="jersey-stripes stripe-slide-in opacity-[0.85]" />
      </div>
      <div aria-hidden className="absolute inset-0 jersey-fade fade-in-soft" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* ── Left: copy ── */}
          <div className="min-w-0 max-lg:text-center">
            {/* Headline */}
            <h1 className="rise rise-2 display text-[52px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-semibold text-[var(--text-primary)] leading-[1.02]">
              Modern<br/>
              <span style={{ background: "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-accent) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="accent">Finance</span>
              <br />
              Function.
            </h1>

            {/* Sub-copy */}
            <p className="rise rise-3 mt-5 sm:mt-6 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[var(--text-secondary)] max-w-md max-lg:mx-auto">
              Designed around connected finance operations.
            </p>

            {/* CTAs */}
            <div className="rise rise-4 mt-7 sm:mt-8 flex flex-wrap items-center gap-2 max-lg:justify-center">
              <Link
                href="/#contact"
                className="btn-primary !px-6 sm:!px-7 !py-3 !text-[14px] sm:!text-[14.5px]"
              >
                Book a Consultation
              </Link>
              <Link href="/ai" className="waitlist-chip group inline-flex">
                <span className="inline-flex items-center gap-2">
                  <span className="dot-pulse" />
                </span>
                <span>Go to Accountables <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em', marginRight: '0.15em', filter: 'brightness(0) invert(1)' }} /></span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Powered by */}
            {/* <p className="rise rise-5 mt-2 ml-1 text-[12.5px] text-[var(--text-muted)]">
              Powered by{" "}
              <a
                href="/ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand-blue)] hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                Accountables
                <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />
              </a>
              .
            </p> */}
          </div>

          {/* ── Right: dashboard mockup ── */}
          <div className="rise rise-4 mt-6 lg:mt-0 relative w-full min-w-0 max-w-full lg:overflow-visible">
            {/* Ambient glow */}
            <div
              className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-40"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(29,78,216,0.22) 0%, transparent 70%)",
              }}
            />

            {/* ── Mobile / tablet stacked layout (hidden on lg+) ── */}
            <div className="flex flex-col gap-3 lg:hidden">

              {/* Swati bubble - compact */}
              <div className="self-start bg-white rounded-2xl rounded-tl-sm shadow-xl border border-black/[0.06] p-3 max-w-[92%]">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex-shrink-0">
                    <div className="h-11 w-11 rounded-full overflow-hidden border border-black/[0.06]" style={{ background: 'linear-gradient(150deg, #3b82f6 0%, #1d4ed8 100%)' }}>
                      <img src="/avatar1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-[1.5px] border-white" />
                  </div>
                  <div>
                    <p className="text-[10.5px] font-semibold text-[#1d4ed8] mb-0.5">Swati · Accountable Manager</p>
                    <p className="text-[11.5px] leading-[1.5] text-gray-800">
                      Your Accountables{' '}
                      <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />{' '}
                      dashboard has been updated with this month's numbers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dashboard */}
              <ScaledFit naturalWidth={560} naturalHeight={300}>
                <div style={{ width: 560, height: 300 }} className="">
                  <DashboardMockup />
                </div>
              </ScaledFit>

              {/* Bottom row: pill + client reply */}
              <div className="flex items-center justify-center gap-2">
                {/* Client reply bubble */}
                <div className="bg-white rounded-2xl rounded-br-sm shadow-xl border border-black/[0.06] p-3 flex items-center gap-2 shrink-0">
                  <p className="text-[11px] leading-[1.45] text-gray-800 max-w-[120px]">
                    Perfect. Thanks for the quick turnaround.
                  </p>
                  <div className="relative flex-shrink-0">
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-black/[0.06]" style={{ background: 'linear-gradient(150deg, #14305f 0%, #1d4ed8 100%)' }}>
                      <img src="/avatar2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-[1.5px] border-white" />
                  </div>
                </div>
              </div>

            </div>

            {/* ── Desktop floating layout (lg+) ── */}

            {/* Chat bubble - Swati (top-left, absolute) */}
            <div className="hidden lg:block absolute -top-28 -left-12 z-10 bg-white rounded-2xl rounded-tl-sm shadow-xl border border-black/[0.06] p-4 max-w-[400px]">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <Avatar bg="linear-gradient(150deg, #3b82f6 0%, #1d4ed8 100%)" src="/avatar1.png" size={80} />
                  <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-green-400 border-2 border-white" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#1d4ed8] mb-0.5">Swati · Accountable Manager</p>
                  <p className="text-[12px] leading-[1.55] text-gray-800">
                    Your Accountables <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} /> dashboard has been updated with this month's numbers. Happy to connect whenever you're ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard (lg+) */}
            <div className="hidden lg:block">
              <ScaledFit naturalWidth={560} naturalHeight={300}>
                <div style={{ width: 560, height: 300 }}>
                  <DashboardMockup />
                </div>
              </ScaledFit>
            </div>

            {/* Chat bubble - client (bottom-right, absolute) */}
            <div className="hidden lg:grid absolute -bottom-24 -right-24 z-10 bg-white rounded-2xl rounded-br-sm shadow-xl border grid-cols-2 items-center border-black/[0.06] p-4 w-full max-w-[250px]">
              <p className="text-[12px] leading-[1.55] text-gray-800">
                Perfect. Thanks for the quick turnaround.
              </p>
              <div className="flex items-center justify-end gap-2">
                <div className="relative flex-shrink-0">
                  <Avatar bg="linear-gradient(150deg, #14305f 0%, #1d4ed8 100%)" src="/avatar2.png" size={80} />
                  <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-green-400 border-2 border-white" />
                </div>
              </div>
            </div>

            {/* Floating pill - bottom-left (absolute) */}
            <div className="hidden lg:flex absolute -bottom-6 left-4 z-20 bg-white rounded-full shadow-lg border border-black/[0.06] px-4 py-2 items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px]">✓</span>
              <span className="text-[11.5px] font-semibold text-gray-700">Books up-to-date</span>
              <span className="text-[11px] text-gray-400">· Apr 2026</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
