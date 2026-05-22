import Link from "next/link";
import { RevealBlock } from "./RevealBlock";
import ScrollRevealText from "./ScrollRevealText";
import { ScaledFit } from "./ScaledFit";

// ─── Accountables One full dashboard mockup ──────────────────────────────────
// Matches the product screenshot: dark sidebar + main content area.

const checklistItems = [
  { label: "Reconcile all bank and credit card accounts", done: true,  due: null,     assignee: "/avatar1.png", name: "Swati" },
  { label: "Review and categorize all transactions",      done: true,  due: null,     assignee: "/avatar1.png", name: "Swati" },
  { label: "Payroll processing for the year",             done: true,  due: null,     assignee: "/avatar1.png", name: "Swati" },
  { label: "Process year-end adjustments",               done: true,  due: null,     assignee: "/avatar1.png", name: "Swati" },
  { label: "Review and approve year-end adjustments",    done: false, due: "30 May", assignee: "/avatar2.png", name: "Charlie" },
  { label: "Prepare financial statements",               done: false, due: "10 Jun", assignee: "/avatar1.png", name: "Swati" },
  { label: "Corporation tax computation",                done: false, due: "15 Jun", assignee: "/avatar1.png", name: "Swati" },
  { label: "Submit year-end reports",                    done: false, due: "30 Jun", assignee: "/avatar1.png", name: "Swati" },
];

function NavIcon({ id }: { id: string }) {
  if (id === "dashboard") return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/></svg>;
  if (id === "reports")   return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
  if (id === "documents") return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (id === "tasks")     return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><polyline points="9 11 12 14 22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (id === "team")      return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (id === "settings")  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg>;
  return null;
}

function DashboardMockup() {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden border border-[var(--border)] shadow-[0_32px_80px_-16px_rgba(11,30,63,0.18)] flex bg-white"
      style={{ minHeight: 560 }}
      aria-hidden
    >
      {/* ════════════ SIDEBAR ════════════ */}
      <div className="w-[148px] flex-shrink-0 flex flex-col" style={{ background: "var(--brand-navy)" }}>

        {/* Brand */}
        <div className="px-4 py-3.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.18)" }}>
              <img src="/prod_icon.svg" alt="" style={{ height: 12, width: "auto", filter: "brightness(0) invert(1)" }} />
            </div>
            {/* <span className="text-[11px] font-semibold text-white leading-tight">
              Accountables <span className="text-blue-300">One</span>
            </span> */}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2.5 py-3 space-y-0.5">
          {[
            { id: "dashboard", label: "Dashboard", active: true },
            { id: "reports",   label: "Reports" },
            { id: "documents", label: "Documents" },
            { id: "tasks",     label: "Tasks" },
            { id: "team",      label: "Team" },
          ].map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-md text-[11px] font-medium cursor-default ${
                item.active ? "bg-white/15 text-white" : "text-white/45"
              }`}
            >
              <NavIcon id={item.id} />
              {item.label}
            </div>
          ))}

          <div className="pt-2 mt-1 border-t border-white/10">
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-md text-[11px] font-medium text-white/45 cursor-default">
              <NavIcon id="settings" />
              Settings
            </div>
          </div>
        </nav>

        {/* Need help */}
        <div className="px-2.5 py-3 border-t border-white/10">
          <div className="bg-white/[0.06] rounded-md p-2.5">
            <div className="flex items-center gap-1.5 mb-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/><path d="M12 17h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/></svg>
              <p className="text-[9.5px] font-semibold text-white/60">Need help?</p>
            </div>
            <p className="text-[8.5px] text-white/35 mb-1.5">We&apos;re here to help</p>
            <p className="text-[8.5px] font-medium text-blue-400 cursor-pointer">Contact support →</p>
          </div>
        </div>
      </div>

      {/* ════════════ MAIN CONTENT ════════════ */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">

        {/* Top header */}
        <div className="flex items-center justify-end px-4 py-2.5 border-b border-[var(--border)] bg-white gap-3">
          <div className="relative">
            <div className="h-6 w-6 rounded-lg bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-lg bg-red-500 text-white text-[6px] font-bold flex items-center justify-center">3</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-shrink-0">
              <div className="h-7 w-7 rounded-lg overflow-hidden border-2 border-[var(--border)]">
                <img src="/avatar2.png" alt="Charlie" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-400 border-[1.5px] border-white" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[var(--text-primary)] leading-tight">Charlie <span style={{ filter: 'blur(2px)', userSelect: 'none' }}>Centa</span></p>
              <p className="text-[8.5px] text-[var(--text-muted)] leading-tight" style={{ filter: 'blur(2px)', userSelect: 'none' }}>Rainforest Collective Ltd</p>
            </div>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {/* Greeting + KPIs + New Update */}
        <div className="px-4 pt-3.5 pb-3.5 border-b border-[var(--border)]">
          <div className="flex items-start gap-3">

            {/* Left: greeting + KPI cards */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] font-semibold text-[var(--text-primary)]">Good morning, Charlie 👋</h3>
              <p className="text-[9.5px] text-[var(--text-muted)] mt-0.5 mb-3">Here&apos;s what&apos;s happening with your business today.</p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Cash in Bank",     value: "£48,230", note: "↑ 12% vs last month", nc: "text-green-600", icon: "🏛" },
                  { label: "Invoices Owed",    value: "£18,450", note: "£3,200 overdue",       nc: "text-red-500",  icon: "📋", dot: true },
                  { label: "Bills to Pay",     value: "£6,340",  note: "2 due this week",      nc: "text-amber-600",icon: "💳" },
                  { label: "Net Profit (MTD)", value: "£12,980", note: "↑ 8% vs last month",  nc: "text-green-600",icon: "📈" },
                ].map((k) => (
                  <div key={k.label} className="bg-[var(--surface-soft)] rounded-md p-2.5 border border-[var(--border)]">
                    <div className="flex items-center gap-1 mb-1.5">
                      <span className="text-[12px]">{k.icon}</span>
                      <p className="text-[7.5px] text-[var(--text-muted)] leading-tight">{k.label}</p>
                    </div>
                    <p className="text-[13px] font-semibold text-[var(--text-primary)] tabular-nums leading-none">{k.value}</p>
                    <p className={`text-[8px] mt-1.5 leading-tight ${k.nc}`}>
                      {k.dot && <span className="inline-block h-1.5 w-1.5 rounded-lg bg-red-400 mr-0.5 translate-y-px" />}
                      {k.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* New Update card */}
            <div className="w-[175px] flex-shrink-0 bg-white border border-[var(--border)] rounded-2xl p-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-[9.5px] font-semibold text-[var(--text-primary)]">New Update</p>
                </div>
                <span className="text-[8px] text-[var(--text-muted)]">2m ago</span>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14 2 14 8 20 8" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[8.5px] leading-[1.55] text-[var(--text-secondary)]">Your Accountable Manager uploaded updated reporting files to your Accountables One dashboard.</p>
              </div>
              <p className="text-[8.5px] font-medium text-[var(--brand-blue)] flex items-center gap-1 cursor-pointer">
                Open Dashboard
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </p>
            </div>
          </div>
        </div>

        {/* Body: Checklist + Activity/Manager */}
        <div className="grid grid-cols-[1fr_220px] divide-x divide-[var(--border)] flex-1">

          {/* Year-End Checklist */}
          <div className="p-3.5">
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden h-full flex flex-col">

              {/* Checklist header */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[var(--surface-soft)] border-b border-[var(--border)] flex-shrink-0">
                <div className="h-7 w-7 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1d4ed8" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-[var(--text-primary)] leading-tight">Year-End Checklist</p>
                  <p className="text-[8.5px] text-[var(--text-muted)]">Track your year-end tasks and stay on top of what&apos;s next.</p>
                </div>
                <div className="flex items-center gap-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] rounded-lg px-2 py-1 flex-shrink-0">
                  <span className="text-[9px] font-semibold whitespace-nowrap">4 of 8 completed</span>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              {/* Task rows */}
              <div className="divide-y divide-[var(--border)] flex-1">
                {checklistItems.map((t, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-3.5 py-2">
                    <div
                      className="flex items-center justify-center flex-shrink-0 rounded-lg border-2"
                      style={{ width: 16, height: 16, borderColor: t.done ? "#22c55e" : "#e5e7eb", background: t.done ? "#22c55e" : "white" }}
                    >
                      {t.done && <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <p className={`flex-1 text-[10px] leading-tight ${t.done ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}`}>{t.label}</p>
                    {t.done ? (
                      <span className="text-[8.5px] font-medium text-green-600 bg-green-50 rounded-lg px-2 py-0.5 flex-shrink-0">Completed</span>
                    ) : (
                      <span className="flex items-center gap-1 text-[8.5px] text-[var(--text-muted)] flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        Due {t.due}
                      </span>
                    )}
                    <div className="h-5 w-5 rounded-lg overflow-hidden border border-[var(--border)] flex-shrink-0">
                      <img src={t.assignee} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* View all tasks footer */}
              <div className="px-3.5 py-2 border-t border-[var(--border)] bg-[var(--surface-soft)] flex-shrink-0">
                <span className="text-[9px] font-medium text-[var(--brand-blue)] cursor-pointer flex items-center gap-1">
                  View all tasks
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </div>
          </div>

          {/* Recent Activity + Manager */}
          <div className="p-3.5 flex flex-col gap-4 overflow-hidden">

            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[8.5px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)]">Recent Activity</p>
                <span className="text-[8px] font-medium text-[var(--brand-blue)] cursor-pointer">View all</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  { avatar: "/avatar1.png", title: "Swati uploaded",          sub: "Management Report – May 2026", time: "2m ago" },
                  { avatar: "/avatar1.png", title: "Payroll for May 2026",    sub: "processed",                   time: "1h ago" },
                  { avatar: "/avatar1.png", title: "VAT return scheduled",    sub: "for review",                  time: "3h ago" },
                  { avatar: "/avatar2.png", title: "Invoice INV-0421",        sub: "reconciled",                  time: "Yesterday" },
                  { avatar: "/avatar1.png", title: "Bank transaction £1,250", sub: "from Stripe",                 time: "Yesterday" },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-lg overflow-hidden border border-[var(--border)] flex-shrink-0 mt-0.5">
                      <img src={a.avatar} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-medium text-[var(--text-primary)] leading-tight truncate">{a.title}</p>
                      <p className="text-[8px] text-[var(--text-muted)] leading-tight">{a.sub}</p>
                    </div>
                    <span className="text-[7.5px] text-[var(--text-muted)] flex-shrink-0 whitespace-nowrap">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--border)]" />

            {/* Accountable Manager */}
            <div>
              <p className="text-[8.5px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-2.5">Your Accountable Manager</p>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="relative flex-shrink-0">
                <div className="h-9 w-9 rounded-lg overflow-hidden border-2 border-white shadow-md">
                  <img src="/avatar1.png" alt="Swati" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white" />
              </div>
                <div>
                  <p className="text-[10.5px] font-semibold text-[var(--text-primary)] leading-tight">Swati</p>
                  <p className="text-[8.5px] text-[var(--text-muted)] leading-tight">Accountable Manager</p>
                </div>
              </div>
              <div className="bg-[var(--surface-soft)] rounded-md p-2.5 border border-[var(--border)] mb-2.5">
                <p className="text-[8.5px] leading-[1.6] text-[var(--text-secondary)]">We&apos;ve updated your reporting files and reconciled your accounts for May.</p>
                <p className="text-[8.5px] leading-[1.6] text-[var(--text-secondary)] mt-0.5">Happy to connect whenever you&apos;re ready.</p>
              </div>
              <div className="flex gap-1.5">
                <button className="flex-1 flex items-center justify-center gap-1 text-[8.5px] font-semibold text-white rounded-lg py-1.5 leading-none" style={{ background: "var(--brand-blue)" }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Message
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 text-[8.5px] font-medium text-[var(--text-primary)] rounded-lg py-1.5 border border-[var(--border)] bg-white leading-none">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  Schedule Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Feature Icons ────────────────────────────────────────────────────────────

const FeatureIcon = ({ id }: { id: string }) => {
  const stroke = "var(--brand-blue)";
  if (id === "visibility") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15l4-6 4 3 5-7" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="5" r="1.6" fill={stroke}/>
      </svg>
    );
  }
  if (id === "execution") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke={stroke} strokeWidth="2"/>
        <path d="M7 10l3 3 7-7" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16h10" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "support") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 12a8 8 0 1 1-3.2-6.4L21 4v5h-5" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2.4" fill={stroke}/>
      </svg>
    );
  }
  return null;
};

// ─── Feature data ─────────────────────────────────────────────────────────────

const features = [
  {
    number: "01",
    icon: "visibility",
    title: "Reporting Visibility",
    body: "Access reporting environments designed around financial clarity, operational visibility and ongoing business performance tracking.",
    tags: ["KPI dashboards", "Reporting visibility", "Financial snapshots"],
  },
  {
    number: "02",
    icon: "execution",
    title: "Coordinated Execution",
    body: "Accounting, compliance and reporting workflows managed within one connected operating environment.",
    tags: ["Task tracking", "Compliance timelines", "Workflow status visibility"],
  },
  {
    number: "03",
    icon: "support",
    title: "Ongoing Finance Support",
    body: "Communicate, coordinate and manage ongoing finance activities with the Accountables team through a centralized operational environment.",
    tags: ["Team communication", "Approvals", "Queries and ongoing coordination"],
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function FinanceOrganized() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-t border-[var(--border)] relative overflow-hidden">

      {/* Subtle decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(29, 78, 216, 0.06) 0%, rgba(29, 78, 216, 0) 70%), radial-gradient(40% 30% at 100% 100%, rgba(10, 132, 255, 0.05) 0%, rgba(10, 132, 255, 0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* ── HEADER : centered, immediately clear ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">

          <RevealBlock delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[var(--border)] shadow-sm mb-6">
              <img src="/prod_icon.svg" alt="" style={{ height: 12, width: "auto" }} />
              <span className="mono text-[var(--text-secondary)]" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Operating Environment
              </span>
            </div>
          </RevealBlock>

          <RevealBlock delay={60}>
            <h2 className="display text-[40px] sm:text-[52px] md:text-[60px] font-semibold text-[var(--text-primary)] leading-[1.02]">
              Finance, <span className="accent">Organised </span>.
            </h2>
          </RevealBlock>

          <RevealBlock delay={120} className="mt-5 max-w-2xl mx-auto">
            <ScrollRevealText
              text="A more structured approach to accounting, reporting and finance coordination - designed to bring clarity and consistency to day-to-day finance operations."
              className="text-[16px] md:text-[18px] leading-[1.7]"
            />
          </RevealBlock>

          <RevealBlock delay={180}>
            <p className="mt-4 text-[12.5px] text-[var(--text-muted)]">
              Powered by{" "}
              <a
                href="/ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand-blue)] hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                Accountables
                <img src="/prod_icon.svg" alt="" style={{ display: "inline-block", height: "1em", width: "auto", verticalAlign: "-0.1em" }} />
              </a>
              .
            </p>
          </RevealBlock>
        </div>

        {/* ── DASHBOARD : centerpiece ── */}
        <RevealBlock delay={220} className="relative">
          {/* Browser chrome frame around the mockup */}
          <div className="relative mx-auto max-w-[1180px]">

            {/* Soft floating shadow / glow */}
            <div
              aria-hidden
              className="absolute -inset-x-6 -bottom-10 h-24 rounded-lg blur-3xl"
              style={{ background: "rgba(11, 30, 63, 0.18)" }}
            />

            <ScaledFit naturalWidth={1100} naturalHeight={600}>
              <div className="relative rounded-[24px] border border-[var(--border)] bg-white overflow-hidden shadow-[0_40px_90px_-30px_rgba(11,30,63,0.28)]" style={{ width: 1100, height: 600 }}>
                {/* Browser top bar */}
                {/* <div className="flex items-center gap-2 px-4 py-2.5 bg-[var(--surface-soft)] border-b border-[var(--border)]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-lg bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-lg bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-lg bg-[#28c840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[var(--border)] text-[10.5px] text-[var(--text-muted)]">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      one.accountables.com
                    </div>
                  </div>
                  <div className="w-[60px]" />
                </div> */}

                {/* Live indicator */}
                {/* <div className="absolute top-3 right-4 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-[var(--border)] shadow-sm z-10">
                  <span className="dot-pulse" style={{ height: 6, width: 6 }} />
                  <span className="text-[9px] font-semibold text-[var(--text-secondary)] tracking-wide">LIVE PREVIEW</span>
                </div> */}

                <DashboardMockup />
              </div>
            </ScaledFit>
          </div>
        </RevealBlock>

        {/* ── FEATURE CARDS : 3-column grid ── */}
        <div className="mt-20 md:mt-24">

          <RevealBlock delay={0} className="text-center mb-10">
            <span className="eyebrow">What you get</span>
            <h3 className="display text-[24px] md:text-[28px] font-semibold text-[var(--text-primary)] mt-3 leading-tight">
              Three operating principles, one connected workspace.
            </h3>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <RevealBlock key={f.title} delay={i * 90}>
                <div className="group relative h-full flex flex-col gap-4 p-7 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--border-strong)] hover:shadow-[0_18px_50px_-22px_rgba(11,30,63,0.22)] hover:-translate-y-0.5 transition-all duration-300">

                  {/* Top row: icon + number */}
                  <div className="flex items-start justify-between">
                    <div
                      className="h-12 w-12 rounded-md flex items-center justify-center border border-[var(--border)]"
                      style={{
                        background: "linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)",
                      }}
                    >
                      <FeatureIcon id={f.icon} />
                    </div>
                    <span
                      className="text-[11px] font-semibold tracking-[0.18em]"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        color: "var(--brand-blue)",
                        opacity: 0.45,
                      }}
                    >
                      {f.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-[18px] md:text-[19px] font-semibold text-[var(--text-primary)] leading-snug">
                    {f.title}
                  </h4>

                  {/* Body */}
                  <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                    {f.body}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-[var(--border)] my-1" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--surface-soft)] border border-[var(--border)] text-[11.5px] font-medium text-[var(--text-secondary)]"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-lg"
                          style={{ background: "var(--brand-blue)", opacity: 0.6 }}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>

        {/* ── CTA : centered ── */}
        <RevealBlock delay={120} className="mt-14 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/services" className="btn-primary">
              Explore services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Book a consultation
            </Link>
          </div>
        </RevealBlock>

      </div>
    </section>
  );
}
