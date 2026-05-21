'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

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
  const [notifOpen, setNotifOpen] = useState(false);
  return (
    <div className="relative select-none" aria-hidden>

      {/* ── Chat bubble - Jess (top-left) ── */}
      <div className="absolute -top-28 -left-12 z-10 bg-white rounded-2xl rounded-tl-sm shadow-xl border border-black/[0.06] p-4 max-w-[400px]">
        <div className="flex items-center gap-3">
          <Avatar bg="linear-gradient(150deg, #3b82f6 0%, #1d4ed8 100%)" src="/avatar1.png" size={80} />
          <div>
            <p className="text-[11px] font-semibold text-[#1d4ed8] mb-0.5">Swati · Accountable Manager</p>
            <p className="text-[12px] leading-[1.55] text-gray-800">
              Your Accountables <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} /> dashboard has been updated with this month's numbers. Happy to connect whenever you're ready.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main card - bank reconciliation ── */}
      <div className="relative mt-10 bg-white rounded-2xl shadow-2xl border border-black/[0.06] px-6 pt-5 pb-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <img src="/prod_icon.svg" alt="" style={{ height: 18, width: 'auto', marginBottom: 10 }} />
            <p className="text-[14.5px] font-bold text-gray-900 leading-snug mt-2">Business account</p>
            <p className="text-[12px] text-gray-400 mt-0.5" style={{ filter: 'blur(2px)', userSelect: 'none' }}>123456</p>
          </div>
          <div className="relative flex items-center gap-2">
            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setNotifOpen(v => !v); }}
                className="relative block"
                aria-label="Toggle notifications"
              >
                <div className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-red-500 text-white text-[7px] font-bold flex items-center justify-center">1</span>
              </button>

              {/* Notification popup */}
              {notifOpen && (
                <div
                  className="absolute bottom-full left-0 mb-2 z-40 bg-white rounded-2xl shadow-2xl border border-black/[0.07] p-4"
                  style={{ width: 280 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polyline points="16 16 12 12 8 16" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="12" x2="12" y2="21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-900 leading-snug">Month-End Reporting Ready</p>
                        <p className="text-[9.5px] text-gray-400 mt-0.5">2m ago</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotifOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 mt-0.5"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
                    </button>
                  </div>

                  {/* Body */}
                  <p className="text-[10.5px] text-gray-600 leading-snug mb-3">
                    Your Accountable Manager uploaded updated reporting files to your Accountable{" "}
                    <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '0.9em', width: 'auto', verticalAlign: '-0.05em' }} />{" "}
                    dashboard.
                  </p>

                  {/* CTA link */}
                  <a
                    href="/ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1d4ed8] hover:underline underline-offset-2"
                  >
                    Open Dashboard
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              )}
            </div>
            {/* Avatar */}
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
              <img src="/avatar2.png" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Balance columns */}
        <div className="grid grid-cols-2 gap-5 mb-4" >
          <div>
            <p className="text-[10px] font-medium text-gray-400 mb-1 tracking-wide">GBP</p>
            <p className="text-[28px] font-semibold text-gray-900 leading-none tabular-nums">360,000</p>
            <p className="text-[11.5px] text-[#1d4ed8] mt-2 leading-snug">Statement balance (Apr 30)</p>
          </div>
          <div className="border-l border-gray-100 pl-5">
            <p className="text-[10px] font-medium text-gray-400 mb-1 tracking-wide">GBP</p>
            <p className="text-[28px] font-semibold text-gray-900 leading-none tabular-nums">360,000</p>
            <p className="text-[11.5px] text-[#1d4ed8] mt-2 leading-snug flex items-center gap-1">Balance in <img src="/prod_icon.svg" alt="" style={{ height: 12, width: 'auto', marginBottom: 0 }} /></p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-4" />

        {/* Fully reconciled row */}
        <div className="flex items-center gap-2.5">
          <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] flex-shrink-0">✓</span>
          <p className="text-[13px] font-medium text-green-700">Your bank is fully reconciled</p>
        </div>
      </div>

      {/* ── Chat bubble - client (bottom-right) ── */}
      <div className="absolute -bottom-24 -right-24 z-10 bg-white rounded-2xl rounded-br-sm shadow-xl border grid grid-cols-2 items-center border-black/[0.06] p-4 w-full max-w-[250px]">
        <p className="text-[12px] leading-[1.55] text-gray-800">
          Perfect. Thanks for the quick turnaround.
        </p>
        <div className="flex items-center justify-end gap-2">
          <Avatar bg="linear-gradient(150deg, #14305f 0%, #1d4ed8 100%)" src="/avatar2.png" size={80} />
        </div>
      </div>

      {/* ── Floating pill - bottom-left ── */}
      <div className="absolute -bottom-6 left-4 z-20 bg-white rounded-full shadow-lg border border-black/[0.06] px-4 py-2 flex items-center gap-2">
        <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px]">✓</span>
        <span className="text-[11.5px] font-semibold text-gray-700">Books up-to-date</span>
        <span className="text-[11px] text-gray-400">· Apr 2026</span>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="jersey-stripes stripe-slide-in opacity-[0.85]" />
      </div>
      <div aria-hidden className="absolute inset-0 jersey-fade fade-in-soft" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ── Left: copy ── */}
          <div>
            {/* Headline */}
            <h1 className="rise rise-2 display text-[52px] sm:text-[64px] md:text-[76px] lg:text-[84px] font-semibold text-[var(--text-primary)] leading-[1.02]">
              Modern<br/>
              <span style={{ background: "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-accent) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="accent">Finance</span>
              <br />
              Function.
            </h1>

            {/* Sub-copy */}
            <p className="rise rise-3 mt-6 text-[16px] md:text-[18px] leading-[1.6] text-[var(--text-secondary)] max-w-md">
              Designed around connected finance operations.
            </p>

            {/* CTAs */}
            <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="btn-primary !px-7 !py-3 !text-[14.5px]"
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
            <p className="rise rise-5 mt-2 ml-1 text-[12.5px] text-[var(--text-muted)]">
              Powered by{" "}
              <a
                href="https://one.accountables.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand-blue)] hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                Accountables
                <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em' }} />
              </a>
              .
            </p>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <div className="rise rise-4 hidden lg:block relative">
            <div
              className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-40"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(29,78,216,0.22) 0%, transparent 70%)",
              }}
            />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
