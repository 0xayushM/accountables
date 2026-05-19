"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

type DropItem = { label: string; desc: string; href: string; icon?: string };
type ActiveDrop = "services" | "ai" | "about" | null;

// ─── Dropdown data ──────────────────────────────────────────────────────────

const AI_FEATURES: DropItem[] = [
  { label: "Autonomous Close", desc: "Month-end in minutes, not weeks", href: "/ai", icon: "◐" },
  { label: "Transaction Classification", desc: "99.2% AI accuracy on every line", href: "/ai", icon: "∑" },
  { label: "Real-time Reconciliation", desc: "Six accounts balanced in parallel", href: "/ai", icon: "⊞" },
  { label: "Anomaly Detection", desc: "Drift caught the day it happens", href: "/ai", icon: "△" },
  { label: "Financial Reporting", desc: "P&L, BS, CF drafted automatically", href: "/ai", icon: "╱" },
  { label: "Human Review Queue", desc: "Your accountant reviews in hours", href: "/ai", icon: "◇" },
];

const ABOUT_ITEMS: DropItem[] = [
  { label: "About Accountables", desc: "Our mission and the team behind it", href: "/about" },
  { label: "Customer Stories", desc: "Hear from 100+ businesses we've served", href: "/customers" },
  { label: "Insights", desc: "Frameworks, checklists and playbooks from the Accountables team", href: "/insights" },
  { label: "Frequently Asked Questions", desc: "Answers to common questions", href: "/#faqs" },
  { label: "Press", desc: "Latest news and updates", href: "/press" },
  { label: "Partner Marketplace", desc: "Businesses we work with to help you scale", href: "/partners" },
];

const SERVICE_ITEMS: DropItem[] = [
  {
    label: "Bookkeeping & Reporting",
    desc: "Bookkeeping, reconciliations, ledger maintenance and month-end close",
    href: "/services/bookkeeping",
    icon: "∑",
  },
  {
    label: "Accounts Payable & Receivable",
    desc: "Vendor payments, receivables tracking and cash flow visibility",
    href: "/services/accounts-payable-receivable",
    icon: "⊟",
  },
  {
    label: "Payroll & Compliance",
    desc: "Payroll, tax coordination, year-end and regulatory workflows",
    href: "/services/accounting-tax",
    icon: "⊞",
  },
  {
    label: "Planning & Finance Support",
    desc: "Forecasting, KPI reporting and cash flow visibility",
    href: "/services/financial-analysis",
    icon: "╱",
  },
  {
    label: "Fractional CFO Support",
    desc: "Strategic finance oversight for growing businesses",
    href: "/services/cfo-advisory",
    icon: "◇",
  },
];

// ─── Chevron ────────────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Dropdown panels ─────────────────────────────────────────────────────────

function ServicesPanel({ close }: { close: () => void }) {
  return (
    <div className="grid grid-cols-[210px_1fr_270px] divide-x divide-gray-100 min-h-[320px]">
      {/* Left */}
      <div className="p-6 flex flex-col gap-2">
        <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">Your Virtual Finance Department</p>
        <p className="text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">
          Accounting, reporting, compliance and finance coordination within one connected operating environment.
        </p>
        <Link href="/services" onClick={close} className="mt-auto text-[12.5px] text-[var(--brand-blue)] font-medium hover:underline">
          All services →
        </Link>
      </div>

      {/* Middle: 2-col grid */}
      <div className="p-3 grid grid-cols-2 content-start gap-0.5">
        {SERVICE_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            className="flex gap-2.5 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <span className="text-[14px] text-[var(--text-muted)] mt-px leading-none flex-shrink-0 w-4 text-center">{item.icon}</span>
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors leading-snug">
                {item.label}
              </div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-[1.3] truncate">{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right: CTA */}
      <div className="p-6 bg-[#f5f5f7] flex flex-col">
        <div className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-2">Book a consultation</div>
        <p className="text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">
          Structured finance support designed around visibility, coordination and scalable growth.
        </p>
        <Link
          href="/#contact"
          onClick={close}
          className="mt-auto inline-flex items-center justify-center h-9 px-5 rounded-full bg-[var(--brand-navy)] text-white text-[12px] font-semibold hover:bg-[var(--brand-navy-soft)] transition-colors"
        >
          Book a Consultation →
        </Link>
      </div>
    </div>
  );
}

function AiPanel({ close }: { close: () => void }) {
  return (
    <div className="grid grid-cols-[210px_1fr_270px] divide-x divide-gray-100 min-h-[280px]">
      {/* Left */}
      <div className="p-6 flex flex-col gap-2">
        <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">Easy-To-Use AI</p>
        <p className="text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">
          Our intelligent platform automates the busywork with powerful tools to simplify your financial management.
        </p>
        <Link href="/ai" onClick={close} className="mt-auto text-[12.5px] text-[var(--brand-blue)] font-medium hover:underline">
          Explore AI Close →
        </Link>
      </div>

      {/* Middle: 2-col features */}
      <div className="p-3 grid grid-cols-2 content-start gap-0.5">
        {AI_FEATURES.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            className="flex gap-2.5 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <span className="text-[14px] text-[var(--text-muted)] mt-px leading-none flex-shrink-0 w-4 text-center">{item.icon}</span>
            <div>
              <div className="text-[13px] font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors leading-snug">
                {item.label}
              </div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-[1.3]">{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right: CTA */}
      <div className="p-6 bg-[#f5f5f7] flex flex-col">
        <div className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-2">See AI Close in action</div>
        <p className="text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">
          The magic happens when our intelligent software and real human support come together. Book a demo today to see what running your business is like with Accountables AI.
        </p>
        <Link
          href="/ai"
          onClick={close}
          className="mt-auto inline-flex items-center justify-center h-9 px-5 rounded-full bg-[var(--brand-navy)] text-white text-[12px] font-semibold hover:bg-[var(--brand-navy-soft)] transition-colors"
        >
          Join the waitlist →
        </Link>
      </div>
    </div>
  );
}

function AboutPanel({ close }: { close: () => void }) {
  return (
    <div className="grid grid-cols-[210px_1fr_270px] divide-x divide-gray-100 min-h-[240px]">
      {/* Left */}
      <div className="p-6 flex flex-col gap-2">
        <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">About us</p>
        <p className="text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">
          Learn more about Accountables, our mission, and the dedicated team behind your financial success.
        </p>
      </div>

      {/* Middle: list */}
      <div className="p-3 grid grid-cols-2 content-start gap-0.5">
        {ABOUT_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <div className="text-[13px] font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors leading-snug">
              {item.label}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] leading-[1.3]">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* Right: featured story */}
      <div className="p-6 bg-[#f5f5f7] flex flex-col">
        <div className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-3">Featured story</div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
          >
            JB
          </div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Juls Bindi</div>
        </div>
        <p className="text-[12px] leading-[1.6] text-[var(--text-secondary)] italic flex-1">
          &ldquo;Working with Accountables has saved me so many times. I could have made decisions for my business that would not have turned out well, had they not been made based on the numbers.&rdquo;
        </p>
        <Link
          href="/customers/furniture-manufacturing-group"
          onClick={close}
          className="mt-4 text-[12.5px] text-[var(--brand-blue)] font-medium hover:underline"
        >
          Read story →
        </Link>
      </div>
    </div>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<ActiveDrop>(null);
  const [activeDrop, setActiveDrop] = useState<ActiveDrop>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };
  const scheduleHide = () => {
    clearHide();
    hideTimer.current = setTimeout(() => setActiveDrop(null), 150);
  };
  const show = (d: ActiveDrop) => {
    clearHide();
    setActiveDrop(d);
  };
  const closeAll = () => {
    setActiveDrop(null);
    setMobileOpen(false);
  };

  const bgIsWhite = scrolled || !!activeDrop || mobileOpen;

  const headerStateClass = scrolled
    ? "scrolled bg-white border-b border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
    : activeDrop || mobileOpen
    ? "nav-drop-open bg-white border-b border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
    : "unscrolled bg-transparent backdrop-blur-sm";

  const linkBase = `inline-flex items-center gap-1 text-[13.5px] font-medium transition-colors h-10 px-3.5 rounded-lg select-none`;
  const linkColor = "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.04]";

  return (
    <header
      className={`site-nav sticky top-0 left-0 right-0 z-50 transition-all duration-200 ${headerStateClass}`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex h-16 md:h-[66px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Accountables home">
            <Image
              src="/logo.svg"
              alt="Accountables"
              className="nav-logo h-7 md:h-8 w-auto"
              width={320}
              height={320}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" onMouseLeave={scheduleHide}>
            <button className={`${linkBase} ${linkColor}`} onMouseEnter={() => show("services")}>
              Services <Chevron open={activeDrop === "services"} />
            </button>
            <button className={`${linkBase} ${linkColor}`} onMouseEnter={() => show("ai")}>
              AI <Chevron open={activeDrop === "ai"} />
            </button>
            <Link
              href="/pricing"
              className={`${linkBase} ${linkColor}`}
              onMouseEnter={() => { clearHide(); setActiveDrop(null); }}
            >
              Pricing
            </Link>
            <Link
              href="/careers"
              className={`${linkBase} ${linkColor}`}
              onMouseEnter={() => { clearHide(); setActiveDrop(null); }}
            >
              Careers
            </Link>
            <button className={`${linkBase} ${linkColor}`} onMouseEnter={() => show("about")}>
              About <Chevron open={activeDrop === "about"} />
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/ai"
              className="h-9 px-4 rounded-full text-[12.5px] font-semibold transition-colors inline-flex items-center bg-[var(--nav-cta-bg)] text-[var(--nav-cta-text)] hover:bg-[var(--nav-cta-bg-hover)]"
            >
              Free Trial
            </Link>
            <Link
              href="/#contact"
              className="h-9 px-4 rounded-full text-[12.5px] font-semibold border transition-colors inline-flex items-center border-[var(--nav-ghost-border)] text-[var(--nav-ghost-text)] hover:bg-[var(--nav-ghost-hover-bg)]"
            >
              Schedule Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              bgIsWhite ? "border-black/10 text-[#0a0e1a]" : "border-[var(--border-strong)] text-[var(--text-primary)]"
            }`}
          >
            <span className="relative block w-[18px] h-3">
              <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[5px] h-[1.5px] w-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-current transition-transform ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* ── Dropdown overlay ── */}
      {activeDrop && (
        <div
          className="absolute left-0 right-0 top-full z-50 bg-white border-b border-black/[0.07] shadow-lg"
          onMouseEnter={clearHide}
          onMouseLeave={scheduleHide}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-10 py-3">
            {activeDrop === "services" && <ServicesPanel close={closeAll} />}
            {activeDrop === "ai" && <AiPanel close={closeAll} />}
            {activeDrop === "about" && <AboutPanel close={closeAll} />}
          </div>
        </div>
      )}

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white border-t border-black/[0.06] ${
          mobileOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-0.5">
          {/* Services */}
          <button
            className="flex items-center justify-between w-full py-3 text-[15px] text-[var(--text-primary)] font-medium"
            onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
          >
            Services <Chevron open={mobileExpanded === "services"} />
          </button>
          {mobileExpanded === "services" && (
            <div className="pl-3 pb-2 flex flex-col">
              {SERVICE_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll}
                  className="py-2 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
                  <span className="text-[13px] text-[var(--text-muted)] w-4 text-center">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* AI */}
          <button
            className="flex items-center justify-between w-full py-3 text-[15px] text-[var(--text-primary)] font-medium"
            onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
          >
            AI <Chevron open={mobileExpanded === "ai"} />
          </button>
          {mobileExpanded === "ai" && (
            <div className="pl-3 pb-2 flex flex-col">
              {AI_FEATURES.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll}
                  className="py-2 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
                  <span className="text-[13px] text-[var(--text-muted)] w-4 text-center">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/pricing" onClick={closeAll}
            className="py-3 text-[15px] text-[var(--text-primary)] font-medium">
            Pricing
          </Link>

          <Link href="/careers" onClick={closeAll}
            className="py-3 text-[15px] text-[var(--text-primary)] font-medium">
            Careers
          </Link>

          {/* About */}
          <button
            className="flex items-center justify-between w-full py-3 text-[15px] text-[var(--text-primary)] font-medium"
            onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
          >
            About <Chevron open={mobileExpanded === "about"} />
          </button>
          {mobileExpanded === "about" && (
            <div className="pl-3 pb-2 flex flex-col">
              {ABOUT_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll}
                  className="py-2 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-2.5">
            <Link href="/#contact" onClick={closeAll} className="text-[14px] text-[var(--text-secondary)] py-1">Log in</Link>
            <Link href="/ai" onClick={closeAll}
              className="inline-flex items-center justify-center w-full h-11 rounded-full bg-[var(--brand-navy)] text-white text-[13px] font-semibold">
              Free Trial
            </Link>
            <Link href="/#contact" onClick={closeAll}
              className="inline-flex items-center justify-center w-full h-11 rounded-full border border-[var(--border-strong)] text-[var(--text-primary)] text-[13px] font-semibold hover:bg-[var(--surface-soft)] transition-colors">
              Schedule Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
