export function Footer() {
  const cols = [
    {
      title: "Services",
      links: [
        { label: "Bookkeeping", href: "/services/bookkeeping" },
        { label: "AI Close", href: "/ai" },
        { label: "Accounting & Tax", href: "/services/accounting-tax" },
        { label: "Financial Analysis", href: "/services/financial-analysis" },
        { label: "Year-end Accounts", href: "/services/year-end-accounts" },
        { label: "All services", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why us", href: "/why" },
        { label: "Customers", href: "/customers" },
        { label: "Pricing", href: "/pricing" },
        { label: "Join the waitlist", href: "/ai" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Guides", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Help center", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "Modern slavery", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-2">
            <a href="/" className="inline-flex items-center" aria-label="Accountables home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Accountables" className="nav-logo h-7 w-auto" />
            </a>
            <p className="mt-4 text-[14px] leading-[1.55] text-[var(--text-secondary)] max-w-xs">
              Your virtual finance department. Bookkeeping, tax, and CFO
              services for ambitious businesses.
            </p>
            <div className="mt-6 space-y-1.5 text-[13px] text-[var(--text-muted)]">
              <div className="font-medium text-[var(--text-primary)]">United Kingdom</div>
              <div>Level 6, Graham Hills Building</div>
              <div>50 Richmond Street, Glasgow G1 1XP</div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] tracking-[0.16em] uppercase text-[var(--text-muted)]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px] text-[var(--text-muted)]">
          <div>© {new Date().getFullYear()} Accountables Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@accountables.com"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
