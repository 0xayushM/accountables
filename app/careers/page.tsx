"use client";

import { useState } from "react";
import {
  LuClipboardList, LuBriefcase, LuChartBar, LuTrendingUp,
  LuAward, LuUsers, LuRocket, LuBookOpen, LuBanknote,
  LuMapPin, LuZap, LuUserCheck,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealBlock } from "../components/RevealBlock";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const JOB = {
  title: "Financial Reporting",
  level: "Senior",
  department: "Finance & Accounting · RouteOne",
  location: "New Delhi, India",
  type: "Full-time",
  joining: "Immediate Joining",
  experience: "0–5 Yrs Experience",
  urgent: true,
  about: [
    "Accountables partners with founders, CFOs, and accounting firms in the UK and US to deliver disciplined financial operations, clean books, and strong reporting foundations. As part of our strategic partner brand RouteOne, this senior role sits at the heart of our client delivery - supporting high-growth global businesses with accounting, reporting, and financial insights.",
    "You will own end-to-end accounting delivery for a portfolio of international clients, lead a team of accountants, and directly interface with CFOs, boards, and investors. If you're energised by fast-paced environments and take pride in keeping numbers clean and accurate, this role is for you.",
  ],
  responsibilities: [
    "Own full accounting delivery for a portfolio of global clients - GL oversight, month-end close, reconciliations, accruals, and workpaper readiness.",
    "Review and finalise financial statements and management reporting packages suitable for CFOs, boards, and investors.",
    "Strengthen financial controls, accounting policies, and documentation to maintain audit-ready books year-round.",
    "Lead a team of accountants - allocate work, perform reviews, coach skill development, and ensure high-quality, timely delivery.",
    "Evaluate and improve accounting workflows; implement automation, cleaner processes, and scalable systems.",
    "Support FP&A: budgeting, forecasting, cash flow management, and variance analysis - translate numbers into actionable insights.",
    "Partner directly with US/International clients on accounting treatments, operational improvements, and risk mitigation.",
    "Assist with due diligence/M&A readiness - data room prep, transaction support, financial clean-ups, QoE alignment.",
    "Work cross-functionally with RouteOne's strategic finance teams on dashboards and financial analytics.",
    "Ensure proper revenue recognition, expense allocation, and compliance with US GAAP / IFRS or client-specific frameworks.",
    "Monitor cash, working capital, and runway to support clients' financial visibility and decision-making.",
    "Handle communication with external stakeholders like auditors, CPAs, and system implementers.",
  ],
  required: [
    "Semi-qualified CA / CA with 0–5 years of experience",
    "Strong experience in accounting and cloud-based accounting systems",
    "Advanced proficiency in Excel",
    "Strong analytical and documentation skills",
    "Experience leading delivery teams in accounting / outsourced finance",
    "Excellent written and verbal communication for US client interaction",
    "Ability to multitask and manage priorities in a fast-growth environment",
    "Ownership mindset - numbers under your watch stay clean",
  ],
  niceToHave: [
    "Experience with QuickBooks Online, Bill.com, Dext/Hubdoc, Gusto",
    "Exposure to SaaS revenue, e-commerce accounting, or project-based billing",
  ],
  offer: [
    { Icon: LuRocket,      title: "Rapid Growth",    body: "Fast-track career progression in a high-performance, high-trust environment." },
    { Icon: LuUserCheck,   title: "CFO Exposure",     body: "Direct access to CFOs and accounting leaders from day one." },
    { Icon: LuBookOpen,    title: "Learning Culture", body: "Built on clarity, accountability, and continuous learning - not just checklists." },
    { Icon: LuBanknote,    title: "Competitive Pay",  body: "Competitive compensation package with performance-based rewards." },
  ] as { Icon: IconType; title: string; body: string }[],
};

const ROLES: { id: string; Icon: IconType; title: string; tags: string[]; about: string; doList: string[]; fitList: string[]; hiring: boolean }[] = [
  {
    id: "article",
    Icon: LuClipboardList,
    title: "Article",
    tags: ["Entry Level", "Pursuing CA Inter", "0 yrs"],
    about: "This is where your Accountables journey begins. As an Article, you work hands-on across real client accounts - learning the craft of accounting from the ground up. You're not a shadow here; you're part of the delivery team from day one.",
    doList: [
      "Assist in day-to-day bookkeeping and data entry across client accounts",
      "Support month-end close processes under senior guidance",
      "Prepare basic reconciliations, schedules, and supporting workpapers",
      "Learn cloud accounting tools like QuickBooks Online and Dext",
      "Develop an understanding of US/UK client accounting standards",
    ],
    fitList: ["Currently pursuing CA Inter / registered for Articleship", "Detail-obsessed and take pride in clean, accurate work", "Eager to learn in a fast-paced, client-facing environment"],
    hiring: false,
  },
  {
    id: "exec",
    Icon: LuBriefcase,
    title: "Accounts Executive",
    tags: ["Junior", "B.Com / Semi-qualified CA", "0–2 yrs"],
    about: "As an Accounts Executive, you take ownership of defined accounting tasks across a set of client accounts. You work closely with seniors and managers, building speed, accuracy, and client understanding. This is where strong habits are formed.",
    doList: [
      "Handle bookkeeping, bank reconciliations, and ledger maintenance",
      "Process accounts payable/receivable and support month-end close",
      "Prepare basic financial reports and supporting schedules",
      "Work across tools like QuickBooks Online, Bill.com, and Hubdoc",
      "Communicate clearly with internal team leads on task updates",
    ],
    fitList: ["B.Com / M.Com or semi-qualified CA", "0–2 years of accounting or bookkeeping experience", "Reliable, organised, and take ownership of your work"],
    hiring: false,
  },
  {
    id: "sexec",
    Icon: LuChartBar,
    title: "Senior Accounts Executive",
    tags: ["Mid Level", "Semi-qualified CA / M.Com", "2–4 yrs"],
    about: "At this level, you're no longer just executing - you're reviewing, improving, and leading sections of client delivery. Senior Accounts Executives are trusted to spot issues before they become problems and to guide junior team members in their work.",
    doList: [
      "Manage month-end close independently for assigned client accounts",
      "Review work prepared by Accounts Executives and Articles",
      "Prepare and review reconciliations, accruals, and workpapers",
      "Support financial statement preparation and basic reporting packages",
      "Flag accounting issues and propose treatments to the Manager",
    ],
    fitList: ["2–4 years of experience in a firm or outsourced finance setup", "Have started mentoring or reviewing others' work", "Comfortable handling client queries directly"],
    hiring: false,
  },
  {
    id: "frs",
    Icon: LuTrendingUp,
    title: "Financial Reporting Senior",
    tags: ["Senior Level", "Semi-qualified / Qualified CA", "0–5 yrs"],
    about: "This is a high-ownership role at the core of our client delivery. Financial Reporting Seniors own the accounting for a portfolio of global clients - from GL oversight to management reporting packages ready for CFOs, boards, and investors.",
    doList: [
      "Own end-to-end accounting delivery for a portfolio of global clients",
      "Review and finalise financial statements and management reporting packages",
      "Lead and coach a team of accountants on quality and timeliness",
      "Support FP&A - budgeting, forecasting, variance analysis",
      "Partner directly with US/international clients on accounting and financial clarity",
      "Ensure compliance with US GAAP / IFRS or client-specific frameworks",
    ],
    fitList: ["Semi-qualified or qualified CA with up to 5 years experience", "Led delivery in accounting or outsourced finance", "Communicate confidently with senior stakeholders"],
    hiring: true,
  },
  {
    id: "mgr",
    Icon: LuAward,
    title: "Manager",
    tags: ["Leadership", "Qualified CA", "5+ yrs"],
    about: "Managers at Accountables are the backbone of client relationships and team performance. You oversee multiple client portfolios, set the standard for delivery quality, and build the systems and culture that let the team scale.",
    doList: [
      "Oversee accounting delivery across a portfolio of clients at the highest quality standard",
      "Lead, mentor, and grow a team of senior and junior accountants",
      "Own client relationships - serve as the primary point of contact for complex queries",
      "Drive process improvements, automation, and workflow scalability",
      "Support M&A readiness, due diligence, and strategic finance projects",
      "Work closely with RouteOne leadership on firm-wide initiatives and growth",
    ],
    fitList: ["Qualified CA with 5+ years of experience", "Managed teams and client relationships at a senior level", "Think in systems, not just tasks - and build for scale"],
    hiring: false,
  },
  {
    id: "hr",
    Icon: LuUsers,
    title: "HR & Admin",
    tags: ["Operations", "Any Graduate", "Open"],
    about: "Behind every great finance team is a strong operations backbone. Our HR & Admin team keeps Accountables running - from hiring the right people to ensuring the team has everything it needs to do its best work.",
    doList: [
      "Support hiring, onboarding, and HR operations",
      "Manage office administration, vendor coordination, and internal processes",
      "Assist with team engagement, culture initiatives, and communication",
      "Maintain HR records, documentation, and compliance",
    ],
    fitList: ["Graduate with a people-first mindset", "Highly organised in a fast-paced environment", "Exposure to HR operations or office administration"],
    hiring: false,
  },
];

const CAREER_PATH: { Icon: IconType; title: string; exp: string }[] = [
  { Icon: LuClipboardList, title: "Article",                    exp: "0 yrs" },
  { Icon: LuBriefcase,     title: "Accounts Executive",         exp: "0–2 yrs" },
  { Icon: LuChartBar,     title: "Sr. Accounts Executive",     exp: "2–4 yrs" },
  { Icon: LuTrendingUp,    title: "Financial Reporting Senior", exp: "0–5 yrs" },
  { Icon: LuAward,         title: "Manager",                   exp: "5+ yrs" },
];

// ─── Apply Modal ───────────────────────────────────────────────────────────────

function ApplyModal({ role, onClose }: { role: string; onClose: () => void }) {
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[20px] p-10 w-full max-w-[520px] mx-4 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button onClick={onClose} className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xl leading-none">✕</button>
        <h2 className="display text-[26px] font-semibold text-[var(--text-primary)] mb-1">Apply Now</h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-7">{role} · New Delhi</p>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Full Name *" type="text" placeholder="Your full name" />
            <FormField label="Email Address *" type="email" placeholder="you@example.com" />
          </div>
          <FormField label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" />
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[var(--text-primary)]">CA Status *</label>
            <select className="w-full h-10 px-3 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors">
              <option value="">Select your qualification</option>
              <option>Qualified CA</option>
              <option>Semi-qualified CA (Inter / IPCC cleared)</option>
              <option>CA Final Appearing</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[var(--text-primary)]">Resume / CV *</label>
            <label className="border-2 border-dashed border-[var(--border)] rounded-xl p-4 text-center cursor-pointer hover:border-[var(--brand-blue)] transition-colors">
              <input type="file" accept=".pdf,.doc,.docx" className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
              {fileName
                ? <p className="text-[13px] text-[var(--brand-blue)] font-medium">✓ {fileName}</p>
                : <p className="text-[12.5px] text-[var(--text-muted)]"><span className="font-semibold text-[var(--brand-blue)]">Click to upload</span> or drag & drop<br />PDF or DOCX, max 5 MB</p>
              }
            </label>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[var(--text-primary)]">Why Accountables? (optional)</label>
            <textarea rows={3} placeholder="Tell us what excites you about this role..."
              className="w-full px-3 py-2.5 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors resize-none" />
          </div>
          <button
            onClick={() => { alert("Thank you for applying! Our team will review your application and reach out within 3 business days."); onClose(); }}
            className="btn-primary w-full justify-center !h-11"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold text-[var(--text-primary)]">{label}</label>
      <input type={type} placeholder={placeholder}
        className="h-10 px-3 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors" />
    </div>
  );
}

// ─── Current Openings tab ─────────────────────────────────────────────────────

function CurrentOpenings({ onApply }: { onApply: () => void }) {
  return (
    <div className="grid lg:grid-cols-[320px_1fr] min-h-[70vh] divide-x divide-[var(--border)]">

      {/* Sidebar */}
      <aside className="p-6 lg:sticky lg:top-[66px] self-start max-h-[calc(100vh-66px)] overflow-y-auto">
        <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-4">1 open position</p>
        <div className="card p-5 border-l-2 border-[var(--brand-blue)] cursor-pointer">
          <p className="text-[15px] font-semibold text-[var(--text-primary)] mb-1.5">{JOB.title} - {JOB.level}</p>
          <p className="text-[12px] text-[var(--text-muted)]">{JOB.location} · {JOB.type}</p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="pill text-[11px] !py-0.5 !px-2">Finance & Accounting</span>
            <span className="text-[10.5px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">⚡ Urgent</span>
          </div>
        </div>
      </aside>

      {/* Detail */}
      <div className="p-8 md:p-12 max-w-3xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[var(--border)] mb-8">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[var(--brand-blue)] mb-2">{JOB.department}</p>
            <h2 className="display text-[32px] md:text-[40px] font-semibold text-[var(--text-primary)] leading-[1.05]">
              {JOB.title}<br />
              <span className="accent text-[var(--text-muted)] text-[0.65em]">{JOB.level}</span>
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {([
                { Icon: LuMapPin,    label: JOB.location },
                { Icon: LuBriefcase, label: JOB.type },
                { Icon: LuZap,       label: JOB.joining },
                { Icon: LuChartBar, label: JOB.experience },
              ] as { Icon: IconType; label: string }[]).map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1.5 text-[12px] text-[var(--text-muted)] border border-[var(--border)] rounded-full px-3 py-1.5 bg-white">
                  <c.Icon size={12} />{c.label}
                </span>
              ))}
            </div>
          </div>
          <button onClick={onApply} className="btn-primary flex-shrink-0 self-start">
            Apply Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* About */}
        <SectionBlock title="About the Role">
          {JOB.about.map((p, i) => <p key={i} className="text-[14px] leading-[1.75] text-[var(--text-secondary)] mb-3 last:mb-0">{p}</p>)}
        </SectionBlock>

        {/* Responsibilities */}
        <SectionBlock title="Responsibilities">
          <ol className="flex flex-col gap-3">
            {JOB.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5"
                  style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13.5px] leading-[1.65] text-[var(--text-primary)]">{r}</span>
              </li>
            ))}
          </ol>
        </SectionBlock>

        {/* Required skills */}
        <SectionBlock title="Required Skills & Experience">
          <div className="grid sm:grid-cols-2 gap-2.5">
            {JOB.required.map((s) => (
              <div key={s} className="flex items-start gap-2.5 p-3.5 bg-white border border-[var(--border)] rounded-xl text-[13px] text-[var(--text-primary)] leading-snug">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0 mt-1.5" />
                {s}
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Nice to have */}
        <SectionBlock title="Nice to Have">
          <div className="grid sm:grid-cols-2 gap-2.5">
            {JOB.niceToHave.map((s) => (
              <div key={s} className="flex items-start gap-2.5 p-3.5 bg-white border border-[var(--border)] rounded-xl text-[13px] text-[var(--text-primary)] leading-snug">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-muted)] flex-shrink-0 mt-1.5" />
                {s}
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* What we offer */}
        <SectionBlock title="What We Offer">
          <div className="grid sm:grid-cols-2 gap-3">
            {JOB.offer.map((o) => (
              <div key={o.title} className="card p-5">
                <div className="mb-3 text-[var(--brand-blue)]"><o.Icon size={24} /></div>
                <p className="text-[14px] font-semibold text-[var(--text-primary)] mb-1">{o.title}</p>
                <p className="text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">{o.body}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Bottom CTA strip */}
        <div
          className="relative overflow-hidden rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
        >
          <div aria-hidden className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "repeating-linear-gradient(90deg,rgba(255,255,255,1) 0px,rgba(255,255,255,1) 60px,transparent 60px,transparent 120px)" }} />
          <div className="relative">
            <p className="text-[16px] font-semibold text-white mb-1">Ready to join Accountables?</p>
            <p className="text-[13px] text-white/65">We're hiring immediately. Our team will reach out within 3 business days.</p>
            <a
              href="mailto:support@accountables.com"
              className="inline-block mt-2 text-[12.5px] text-white/50 hover:text-white/80 transition-colors"
            >
              support@accountables.com
            </a>
          </div>
          <button onClick={onApply}
            className="relative flex-shrink-0 inline-flex items-center gap-2 h-10 px-5 rounded-full border border-white/40 text-white text-[13px] font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
            Apply for This Role →
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-3 mb-5">
        <h3 className="display text-[16px] font-semibold text-[var(--text-primary)] whitespace-nowrap">{title}</h3>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>
      {children}
    </div>
  );
}

// ─── Be an Accountables tab ───────────────────────────────────────────────────

function BeAnAccountables({ onApply }: { onApply: () => void }) {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [expressFileName, setExpressFileName] = useState<string | null>(null);
  const [expressRole, setExpressRole] = useState("");

  const scrollToForm = (role: string) => {
    setExpressRole(role);
    document.getElementById("express-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Hero */}
        <RevealBlock delay={0}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start pb-16 border-b border-[var(--border)] mb-16">
            <div>
              <span className="pill mb-5 block w-fit">Join Our Team</span>
              <h2 className="display text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                Be an <span className="accent">Accountables</span>.
              </h2>
              <p className="mt-5 text-[15px] md:text-[16px] leading-[1.75] text-[var(--text-secondary)] max-w-lg">
                We're building a team of sharp, ownership-driven finance professionals who don't just process numbers - they understand them. Whether there's an opening today or not, we'd love to know you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2", label: "Global Offices", sub: "Glasgow & New Delhi" },
                { num: "UK+US", label: "Client Markets", sub: "We Serve" },
                { num: "5", label: "Career Tracks", sub: "in Finance" },
                { num: "↑", label: "Rapidly Growing", sub: "Team" },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <p className="display text-[28px] font-semibold text-[var(--brand-blue)] leading-none mb-2">{s.num}</p>
                  <p className="text-[12.5px] font-semibold text-[var(--text-primary)]">{s.label}</p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* Career Path - infographic style */}
        <RevealBlock delay={0}>
          {(() => {
            const nodeColors = ["#22c55e", "#0d9488", "#1d4ed8", "#0a84ff", "#6366f1"];
            return (
              <div className="mb-16">
                <span className="pill mb-4 block w-fit">How We Grow</span>
                <h3 className="display text-[26px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-2">Your Path at Accountables</h3>
                <p className="text-[14px] text-[var(--text-secondary)] mb-10 max-w-xl">Every great finance professional starts somewhere. Here&apos;s how careers typically progress within our team.</p>

                {/* ── Desktop infographic circles ── */}
                <div className="hidden md:block overflow-x-auto pb-4">
                  <div className="flex items-end justify-center min-w-[680px] px-4">
                    {CAREER_PATH.map((node, i) => {
                      const col = nodeColors[i];
                      const nextCol = nodeColors[i + 1];
                      const isActive = node.title === "Financial Reporting Senior";
                      const gradId = `cpg${i}`;
                      return (
                        <div key={node.title} className="flex items-end flex-shrink-0">
                          {/* Node column */}
                          <div className="flex flex-col items-center" style={{ position: "relative", zIndex: 10 }}>
                            {/* Hiring badge or spacer */}
                            {isActive ? (
                              <span
                                className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.14em] rounded-full px-3 py-1 whitespace-nowrap"
                                style={{ color: "#92400e", background: "#fef3c7", border: "1.5px solid #fbbf24" }}
                              >
                                ⚡ Hiring Now
                              </span>
                            ) : (
                              <div className="mb-2.5 h-[22px]" />
                            )}

                            {/* Circle */}
                            <div
                              className="h-[124px] w-[124px] rounded-full bg-white flex flex-col items-center justify-center"
                              style={{
                                border: `3px solid ${col}`,
                                boxShadow: `0 0 0 7px ${col}18, 0 10px 32px rgba(0,0,0,0.10)`,
                              }}
                            >
                              <div style={{ color: col }}><node.Icon size={24} /></div>
                              <p
                                className="text-[10.5px] font-semibold text-center px-3 mt-2 leading-snug"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {node.title}
                              </p>
                              <p className="text-[9.5px] mt-1 tabular-nums" style={{ color: "var(--text-muted)" }}>
                                {node.exp}
                              </p>
                            </div>

                            {/* Step pill below circle */}
                            <div
                              className="mt-4 h-[22px] w-[22px] rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                              style={{ background: col }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </div>
                          </div>

                          {/* Arc connector */}
                          {i < CAREER_PATH.length - 1 && (
                            <div
                              className="flex-shrink-0"
                              style={{ width: 80, marginLeft: -16, marginRight: -16, marginBottom: 44, position: "relative", zIndex: 0 }}
                            >
                              <svg width="80" height="76" viewBox="0 0 80 76" fill="none" overflow="visible">
                                <defs>
                                  <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor={col} />
                                    <stop offset="100%" stopColor={nextCol} />
                                  </linearGradient>
                                </defs>
                                {/* Upward arch */}
                                <path
                                  d="M 8 68 Q 40 6 72 68"
                                  stroke={`url(#${gradId})`}
                                  strokeWidth="5"
                                  strokeLinecap="round"
                                  fill="none"
                                />
                                {/* Small downward arrow at midpoint */}
                                <path
                                  d="M 36 65 L 40 73 L 44 65"
                                  stroke={`url(#${gradId})`}
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ── Mobile: vertical timeline ── */}
                <div className="flex md:hidden flex-col gap-0">
                  {CAREER_PATH.map((node, i) => {
                    const col = nodeColors[i];
                    const isActive = node.title === "Financial Reporting Senior";
                    return (
                      <div key={node.title} className="flex gap-4">
                        {/* Step dot + connector line */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div
                            className="h-9 w-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold mt-1 flex-shrink-0"
                            style={{ background: col }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          {i < CAREER_PATH.length - 1 && (
                            <div className="w-px flex-1 my-1" style={{ background: `${col}40` }} />
                          )}
                        </div>
                        {/* Card */}
                        <div
                          className="flex-1 rounded-2xl p-4 mb-3"
                          style={{ background: `${col}08`, border: `1.5px solid ${col}30` }}
                        >
                          {isActive && (
                            <span
                              className="inline-block mb-2 text-[9px] font-bold uppercase tracking-[0.12em] rounded-full px-2.5 py-0.5"
                              style={{ color: "#92400e", background: "#fef3c7", border: "1px solid #fbbf24" }}
                            >
                              ⚡ Hiring Now
                            </span>
                          )}
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${col}18` }}>
                              <node.Icon size={17} style={{ color: col }} />
                            </div>
                            <div>
                              <p className="text-[13.5px] font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>{node.title}</p>
                              <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>{node.exp}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-[12px] text-[var(--text-muted)] text-center mt-4">Progression is merit-based - not just time-based.</p>
              </div>
            );
          })()}
        </RevealBlock>

        {/* Role Accordions */}
        <RevealBlock delay={0}>
          <div className="mb-16">
            <span className="pill mb-4 block w-fit">Explore Roles</span>
            <h3 className="display text-[26px] md:text-[32px] font-semibold text-[var(--text-primary)] mb-2">What We Do</h3>
            <p className="text-[14px] text-[var(--text-secondary)] mb-8 max-w-xl">Every role at Accountables is built around ownership, craft, and client impact. Explore what each level looks like.</p>
            <div className="flex flex-col gap-2.5">
              {ROLES.map((role, idx) => {
                const isOpen = openRole === role.id;
                const gradients = [
                  "from-[#0b1e3f] to-[#1d4ed8]",
                  "from-[#1d4ed8] to-[#0a84ff]",
                  "from-[#0b1e3f] to-[#1d4ed8]",
                  "from-[#0a84ff] to-[#1d4ed8]",
                  "from-[#14305f] to-[#0b1e3f]",
                  "from-[#1d4ed8] to-[#14305f]",
                ];
                const grad = gradients[idx % gradients.length];
                return (
                  <div
                    key={role.id}
                    className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "shadow-[0_4px_24px_rgba(29,78,216,0.12)] border border-[var(--brand-blue)]/30"
                        : "border border-[var(--border)] hover:border-[var(--brand-blue)]/30 hover:shadow-[0_2px_12px_rgba(29,78,216,0.07)]"
                    } bg-white`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setOpenRole(isOpen ? null : role.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left group"
                    >
                      <div className="flex items-center gap-4">
                        {/* Gradient icon */}
                        <div
                          className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${grad} transition-transform group-hover:scale-105`}
                        >
                          <role.Icon size={20} color="#fff" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <p className={`text-[15px] font-semibold leading-snug transition-colors ${isOpen ? "text-[var(--brand-blue)]" : "text-[var(--text-primary)]"}`}>
                              {role.title}
                            </p>
                            {role.hiring && (
                              <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-amber-600 border border-amber-300 bg-amber-50 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                                ⚡ Hiring Now
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {role.tags.map((tag) => (
                              <span key={tag} className="text-[10.5px] font-medium text-[var(--text-muted)] bg-[var(--surface-soft)] rounded-full px-2.5 py-0.5 leading-none">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? "bg-[var(--brand-blue)] text-white rotate-180"
                            : "bg-[var(--surface-soft)] text-[var(--text-muted)] group-hover:bg-blue-50 group-hover:text-[var(--brand-blue)]"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </button>

                    {/* Expanded body */}
                    {isOpen && (
                      <div className="border-t border-[var(--border)]">
                        {/* About strip */}
                        <div
                          className="px-6 py-5"
                          style={{ background: "linear-gradient(135deg, rgba(11,30,63,0.03) 0%, rgba(29,78,216,0.04) 100%)" }}
                        >
                          <p className="text-[13.5px] leading-[1.8] text-[var(--text-secondary)]">{role.about}</p>
                        </div>

                        {/* Content grid */}
                        <div className="px-6 pt-5 pb-6 grid md:grid-cols-2 gap-6">
                          {/* What you'll do */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="h-5 w-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}>
                                <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </div>
                              <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[var(--brand-navy)]">What You'll Do</p>
                            </div>
                            <ul className="flex flex-col gap-2.5">
                              {role.doList.map((item, j) => (
                                <li key={j} className="flex gap-3 items-start">
                                  <span
                                    className="flex-shrink-0 h-5 w-5 rounded-full text-[9px] font-bold text-white flex items-center justify-center mt-px"
                                    style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
                                  >
                                    {j + 1}
                                  </span>
                                  <span className="text-[13px] leading-[1.65] text-[var(--text-primary)]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* You're a fit if */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="h-5 w-5 rounded-md flex items-center justify-center bg-[var(--brand-accent)]">
                                <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M6 2a4 4 0 100 8A4 4 0 006 2z" stroke="white" strokeWidth="1.5"/><path d="M6 5v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                              </div>
                              <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[var(--brand-navy)]">You're a Fit If</p>
                            </div>
                            <div className="flex flex-col gap-2.5">
                              {role.fitList.map((item) => (
                                <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[var(--brand-blue)] flex items-center justify-center text-white mt-px">
                                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                  </span>
                                  <span className="text-[12.5px] leading-[1.55] text-[var(--text-primary)] font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action bar */}
                        <div className="flex flex-wrap gap-2.5 px-6 pb-6 pt-0">
                          {role.hiring && (
                            <button onClick={onApply} className="btn-primary !h-10 !text-[13px]">
                              Apply Now →
                            </button>
                          )}
                          <button
                            onClick={() => scrollToForm(role.title)}
                            className={role.hiring ? "btn-ghost !h-10 !text-[13px]" : "btn-primary !h-10 !text-[13px]"}
                          >
                            Express Interest →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </RevealBlock>

        {/* Express Interest Form */}
        <RevealBlock delay={0}>
          <div id="express-form" className="card overflow-hidden scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col p-8 md:p-12">
                <span className="pill mb-4 block w-fit">Talent Pool</span>
                <h3 className="display text-[26px] md:text-[30px] font-semibold text-[var(--text-primary)] leading-snug mb-4">
                  Don't See a Current Opening?
                </h3>
                <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                  Tell us who you are and what role interests you. We maintain a talent pool and reach out when the right opportunity opens up. Great people don't wait - and neither do we.
                </p>
                <div className="relative flex-1 mt-8 min-h-[180px] rounded-2xl overflow-hidden">
                  <Image
                    src="/asset1.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 md:p-12 border-t border-[var(--border)] lg:border-t-0 lg:border-l">
                <div className="grid grid-cols-2 gap-3">
                  <FormField label="Full Name *" type="text" placeholder="Your full name" />
                  <FormField label="Email Address *" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <FormField label="Phone Number *" type="tel" placeholder="+91 XXXXX XXXXX" />
                  <FormField label="Years of Experience *" type="text" placeholder="e.g. 2 years" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[var(--text-primary)]">Role You're Interested In *</label>
                  <select
                    value={expressRole}
                    onChange={(e) => setExpressRole(e.target.value)}
                    className="h-10 px-3 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors"
                  >
                    <option value="">Select a role</option>
                    {ROLES.map((r) => <option key={r.id}>{r.title}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[var(--text-primary)]">Resume / CV *</label>
                  <label className="border-2 border-dashed border-[var(--border)] rounded-xl p-4 text-center cursor-pointer hover:border-[var(--brand-blue)] transition-colors">
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden"
                      onChange={(e) => setExpressFileName(e.target.files?.[0]?.name ?? null)} />
                    {expressFileName
                      ? <p className="text-[13px] text-[var(--brand-blue)] font-medium">✓ {expressFileName}</p>
                      : <p className="text-[12.5px] text-[var(--text-muted)]"><span className="font-semibold text-[var(--brand-blue)]">Click to upload</span> or drag & drop<br />PDF or DOCX, max 5 MB</p>
                    }
                  </label>
                </div>
                <FormField label="LinkedIn Profile (optional)" type="url" placeholder="https://linkedin.com/in/yourname" />
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[var(--text-primary)]">Anything else you'd like us to know? (optional)</label>
                  <textarea rows={3} placeholder="Tell us a bit about yourself and what draws you to Accountables..."
                    className="w-full px-3 py-2.5 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors resize-none" />
                </div>
                <button
                  onClick={() => alert("Thanks for reaching out! We've saved your profile and will be in touch when a matching opportunity comes up.")}
                  className="btn-primary w-full justify-center !h-11"
                >
                  Send My Profile
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>

      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<"openings" | "baa">("openings");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      {showModal && <ApplyModal role={`${JOB.title} - ${JOB.level}`} onClose={() => setShowModal(false)} />}

      <main>
        {/* Page header */}
        <div className="relative overflow-hidden pt-32 md:pt-36 pb-10 border-b border-[var(--border)] bg-[var(--background)]">
          <div aria-hidden className="absolute inset-0 jersey-stripes opacity-50" />
          <div aria-hidden className="absolute inset-0 jersey-fade" />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--brand-blue)] mb-3">Join Us</p>
              <h1 className="display text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[var(--text-primary)] leading-[1.02]">
                {activeTab === "openings" ? (
                  <>Current <span className="accent">Openings</span>.</>
                ) : (
                  <>Be an <span className="accent">Accountables</span>.</>
                )}
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex border border-[var(--border)] rounded-xl overflow-hidden bg-white self-start md:self-end flex-shrink-0">
              {(["openings", "baa"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 text-[12.5px] font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-[var(--brand-navy)] text-white"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  {tab === "openings" ? "Current Openings" : "Be an Accountables"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        {activeTab === "openings"
          ? <CurrentOpenings onApply={() => setShowModal(true)} />
          : <BeAnAccountables onApply={() => setShowModal(true)} />
        }
      </main>

      <Footer />
    </>
  );
}
