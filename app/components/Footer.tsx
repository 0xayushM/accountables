import Image from "next/image";

export function Footer() {
  const cols = [
    {
      title: "Services",
      links: [
        { label: "Bookkeeping", href: "/services/bookkeeping" },
        { label: "Accounts Payable & Receivable", href: "/services/accounts-payable-receivable" },
        { label: "Accounting & Tax", href: "/services/accounting-tax" },
        { label: "Financial Analysis", href: "/services/financial-analysis" },
        { label: "CFO Advisory", href: "/services/cfo-advisory" },
        // { label: "All services", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Why us", href: "/why" },
        { label: "Careers", href: "/careers" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Insights", href: "/insights" },
        { label: "Accountables One (AI)", href: "/ai" },
        { label: "Join the waitlist", href: "/waitlist" },
        // { label: "Press", href: "/press" },
        // { label: "Partners", href: "/partners" },
      ],
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { label: "Privacy", href: "#" },
    //     { label: "Terms", href: "#" },
    //     { label: "Cookies", href: "#" },
    //     { label: "Modern slavery", href: "#" },
    //   ],
    // },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-2">
            <a href="/" className="inline-flex items-center" aria-label="Accountables home">
              <Image src="/icon.svg" alt="Accountables" className="nav-logo h-24 w-24" width={96} height={96} />
            </a>
            <p className="mt-4 text-[14px] leading-[1.55] text-[var(--text-secondary)] max-w-xs">
              Your virtual finance department. Bookkeeping, tax, and CFO
              services for ambitious businesses.
            </p>
            <div className="mt-6 space-y-3 text-[13px] text-[var(--text-muted)]">
              <div>
                <a href="mailto:support@accountables.com" className="text-[var(--text-primary)] hover:underline underline-offset-2">
                  support@accountables.com
                </a>
              </div>
              <div className="text-[var(--text-secondary)]">
                Call us:{" "}
                <a href="tel:00447467348253" className="hover:text-[var(--text-primary)] transition-colors">00447467348253</a>
                ,{" "}
                <a href="tel:00918882384958" className="hover:text-[var(--text-primary)] transition-colors">00918882384958</a>
              </div>
              <div className="pt-1 space-y-2.5 flex flex-wrap gap-4">
                <div className="min-w-[150px]">
                  <div className="font-semibold text-[var(--text-primary)] mb-0.5">United Kingdom</div>
                  <div>Level 6,<br/> Graham Hills Building,</div>
                  <div>50 Richmond Street,</div>
                  <div>Glasgow, G1 1XP</div>
                </div>
                <div className="min-w-[150px]">
                  <div className="font-semibold text-[var(--text-primary)] mb-0.5">India</div>
                  <div>810, Arunachal Building,</div>
                  <div>19 Barakhamba Road,</div>
                  <div>New Delhi – 110001</div>
                  <div><br/></div>
                  <div>W10-C/1, Sainik Farms,</div>
                  <div>New Delhi – 110062</div>
                </div>
              </div>
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
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Twitter
            </a> */}
            <a
              href="https://www.linkedin.com/company/accountables-com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:support@accountables.com"
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
