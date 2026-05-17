"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav: { label: string; href: string; badge?: string }[] = [
    { label: "AI Close", href: "/ai", badge: "NEW" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case studies", href: "/customers" },
    { label: "About", href: "/why" },
  ];

  return (
    <header
      className={`site-nav sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "scrolled backdrop-blur-xl bg-white/75 border-b border-black/[0.06]"
          : "unscrolled bg-[var(--background)]/0 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Accountables home">
            <Image
              src="/logo.png"
              alt="Accountables"
              className="nav-logo h-7 md:h-8 w-auto"
              width={320}
              height={320}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
                {item.badge && (
                  <span
                    className="inline-block text-[9.5px] tracking-[0.12em] font-semibold px-1.5 py-0.5 rounded text-white"
                    style={{
                      background: "var(--brand-blue)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Sign in
            </a>
            <a href="/#contact" className="btn-primary !py-2 !px-4 !text-[13px]">
              Schedule a call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10"
          >
            <span className="relative block w-4 h-3">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[5px] h-[1.5px] w-4 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-current transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav-mobile-drawer md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white/95 backdrop-blur-xl border-t border-black/[0.06] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-3">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-[15px] text-[var(--text-primary)] py-1"
            >
              {item.label}
              {item.badge && (
                <span
                  className="inline-block text-[9.5px] tracking-[0.12em] font-semibold px-1.5 py-0.5 rounded text-white"
                  style={{
                    background: "var(--brand-blue)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 !w-full"
          >
            Schedule a call
          </a>
        </nav>
      </div>
    </header>
  );
}
