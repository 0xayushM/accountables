"use client";

import Link from "next/link";
import { useState } from "react";
import { RevealBlock } from "../components/RevealBlock";
import ScrollRevealText from "../components/ScrollRevealText";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  SceneSvcBookkeeping,
  SceneSvcAPAR,
  SceneSvcPayroll,
  SceneSvcPlanning,
  SceneSvcCFO,
} from "./ServiceIllustrations";

// ─── Hero Dashboard Mockup ────────────────────────────────────────────────────

function HeroDashboard() {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden border border-[var(--border)] shadow-[0_24px_64px_-16px_rgba(11,30,63,0.14)] bg-white"
      aria-hidden
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {["bg-red-300", "bg-yellow-300", "bg-green-300"].map((c, i) => (
              <div key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
            ))}
          </div>
          <span className="flex items-center gap-1">
            <img src="/prod_icon.svg" alt="" style={{ display: "inline-block", height: "1.5em", width: "auto", verticalAlign: "-0.05em" }} />
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Live Environment
        </span>
      </div>

      {/* Header row */}
      <div className="px-5 pt-4 pb-3 border-b border-[var(--border)]">
        <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[var(--text-muted)] mb-1">
          Finance Coordination
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[16px] font-semibold text-[var(--text-primary)]">Month-End Reporting in Review</p>
            <p className="text-[11px] text-[var(--text-muted)] mt-0.5">April 2026 Reporting Cycle</p>
          </div>
          <span className="text-[10.5px] font-medium text-[var(--brand-blue)] bg-blue-50 px-2.5 py-1 rounded-full flex-shrink-0">
            82% Complete
          </span>
        </div>
      </div>

      {/* Two-column body */}
      <div className="grid grid-cols-2 gap-0 divide-x divide-[var(--border)]">

        {/* Compliance Timeline */}
        <div className="p-4">
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-3">
            Compliance Timeline
          </p>
          <div className="flex flex-col gap-3">
            {[
              { icon: "📋", label: "VAT Return",        sub: "Quarter 1 FY26",       status: "Upcoming",   color: "text-amber-600 bg-amber-50" },
              { icon: "👥", label: "Payroll Summary",   sub: "April 2026",           status: "In Review",  color: "text-green-600 bg-green-50" },
              { icon: "📅", label: "Year-End Checklist",sub: "FY26 Preparation",     status: "Scheduled",  color: "text-[var(--text-muted)] bg-[var(--surface-soft)]" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-[13px] flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-[var(--text-primary)] leading-tight">{item.label}</p>
                  <p className="text-[9.5px] text-[var(--text-muted)] leading-tight">{item.sub}</p>
                </div>
                <span className={`text-[9.5px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Communication */}
        <div className="p-4">
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold text-[var(--text-muted)] mb-3">
            Team Communication
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { avatar: "/avatar1.png", name: "Swati",        role: "Accountable Manager", msg: "Month-end reporting has been updated and shared for review.", time: "2h ago" },
              { avatar: "/avatar1.png", name: "Finance Team", role: "",                    msg: "Payroll summaries and reconciliations are ready for review.",  time: "4h ago" },
              { avatar: "/avatar1.png", name: "Finance Team", role: "",                    msg: "VAT working files prepared for this quarter's filing.",         time: "Yesterday" },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full overflow-hidden border border-[var(--border)] flex-shrink-0 mt-0.5">
                  <img src={m.avatar} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-[9.5px] font-semibold text-[var(--text-primary)]">{m.name}</p>
                    {m.role && <p className="text-[8.5px] text-[var(--text-muted)]">· {m.role}</p>}
                  </div>
                  <p className="text-[10.5px] leading-[1.45] text-[var(--text-secondary)]">{m.msg}</p>
                  <p className="text-[8.5px] text-[var(--text-muted)] mt-0.5">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Finance Support row */}
      <div className="px-5 py-3.5 border-t border-[var(--border)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-[var(--border)] flex-shrink-0">
              <img src="/avatar1.png" alt="Swati" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <p className="text-[10.5px] tracking-[0.04em] font-semibold text-[var(--text-muted)] uppercase text-[9px]">Finance Support</p>
              <p className="text-[12px] font-semibold text-[var(--text-primary)] leading-tight">Your finance team is here to help.</p>
              <p className="text-[10px] text-[var(--text-muted)]">Reach out to your Accountable Manager anytime.</p>
            </div>
          </div>
          <button className="flex-shrink-0 text-[10.5px] font-semibold text-[var(--brand-blue)] border border-[var(--border)] bg-white rounded-full px-3 py-1.5 hover:bg-[var(--surface-soft)] transition-colors">
            Message Team
          </button>
        </div>
        {/* Feature tags */}
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {["Reporting", "Compliance", "Payroll", "Coordination"].map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-[9px] font-medium text-[var(--text-muted)]">
              <span className="h-3.5 w-3.5 rounded-full bg-[var(--brand-blue)]/10 flex items-center justify-center">
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--brand-blue)]"/></svg>
              </span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Finance Support Scene Illustrations ─────────────────────────────────────

function SceneTimeOps() {
  const minorDegs = [30,60,120,150,210,240,300,330];
  return (
    <svg viewBox="0 0 300 160" width="100%" height="160" fill="none">
      <circle cx="104" cy="80" r="60" fill="#dbeafe" opacity="0.3"/>
      <circle cx="104" cy="80" r="50" fill="#f0f7ff" stroke="#1d4ed8" strokeWidth="1.5"/>
      {/* Major ticks */}
      <line x1="104" y1="32" x2="104" y2="38" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="154" y1="80" x2="148" y2="80" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="104" y1="128" x2="104" y2="122" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="54" y1="80" x2="60" y2="80" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
      {/* Minor ticks */}
      {minorDegs.map((deg) => {
        const rad = (deg - 90) * Math.PI / 180;
        return <line key={deg} x1={104 + 43*Math.cos(rad)} y1={80 + 43*Math.sin(rad)} x2={104 + 48*Math.cos(rad)} y2={80 + 48*Math.sin(rad)} stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>;
      })}
      {/* Hour hand ~10, minute ~2 */}
      <line x1="104" y1="80" x2="80" y2="58" stroke="#0b1e3f" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="104" y1="80" x2="125" y2="50" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="104" y1="80" x2="104" y2="46" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
      <circle cx="104" cy="80" r="4.5" fill="#1d4ed8"/><circle cx="104" cy="80" r="2.5" fill="white"/>
      {/* Task panel */}
      <rect x="178" y="18" width="106" height="130" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="178" y="18" width="106" height="26" rx="12" fill="#eff6ff"/>
      <rect x="178" y="32" width="106" height="12" fill="#eff6ff"/>
      <text x="194" y="34" fontSize="7.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.5" fontFamily="system-ui,sans-serif">YOUR TASKS</text>
      {[{y:58,done:true,label:"Monthly close"},{y:77,done:true,label:"VAT filing"},{y:96,done:true,label:"Reconciliation"},{y:115,done:false,label:"Payroll review"},{y:133,done:false,label:"Forecast"}].map((t) => (
        <g key={t.y}>
          <circle cx="194" cy={t.y} r="5.5" fill={t.done?"#1d4ed8":"white"} stroke={t.done?"#1d4ed8":"#bfdbfe"} strokeWidth="1.3"/>
          {t.done && <path d={`M${191} ${t.y}l2.5 2.5 4.5-4.5`} stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>}
          <text x="206" y={t.y+3.5} fontSize="9" fill={t.done?"#9ca3af":"#374151"} fontFamily="system-ui,sans-serif">{t.label}</text>
        </g>
      ))}
      {/* Bottom pill */}
      <rect x="44" y="143" width="120" height="14" rx="7" fill="#1d4ed8"/>
      <text x="104" y="153.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">Focus on strategy</text>
      <circle cx="28" cy="34" r="4" fill="#bfdbfe" opacity="0.6"/>
      <circle cx="16" cy="54" r="2.5" fill="#93c5fd" opacity="0.5"/>
    </svg>
  );
}

function SceneVisibility() {
  return (
    <svg viewBox="0 0 300 160" width="100%" height="160" fill="none">
      <rect x="12" y="10" width="276" height="140" rx="14" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="12" y="10" width="276" height="28" rx="14" fill="#eff6ff"/>
      <rect x="12" y="26" width="276" height="12" fill="#eff6ff"/>
      <text x="28" y="29" fontSize="8" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">FINANCE OVERVIEW</text>
      <rect x="242" y="17" width="34" height="13" rx="6.5" fill="#dcfce7"/>
      <circle cx="250" cy="23.5" r="3" fill="#22c55e"/>
      <text x="257" y="27.5" fontSize="7.5" fontWeight="600" fill="#16a34a" fontFamily="system-ui,sans-serif">Live</text>
      {[{x:22,label:"Revenue",val:"$142K"},{x:110,label:"Expenses",val:"$89K"},{x:198,label:"Net Cash",val:"$53K"}].map((k) => (
        <g key={k.label}>
          <rect x={k.x} y="46" width="80" height="36" rx="8" fill="#f8faff" stroke="#e0eaff" strokeWidth="1"/>
          <text x={k.x+8} y="59" fontSize="7" fill="#6b7280" fontFamily="system-ui,sans-serif">{k.label}</text>
          <text x={k.x+8} y="74" fontSize="13" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{k.val}</text>
        </g>
      ))}
      <rect x="22" y="90" width="256" height="50" rx="8" fill="#f8faff"/>
      <line x1="22" y1="108" x2="278" y2="108" stroke="#e0eaff" strokeWidth="0.7"/>
      <line x1="22" y1="124" x2="278" y2="124" stroke="#e0eaff" strokeWidth="0.7"/>
      {[{x:30,h:18},{x:62,h:28},{x:94,h:22},{x:126,h:36},{x:158,h:28},{x:190,h:40,hi:true},{x:222,h:32,hi:true}].map((b,i) => (
        <rect key={i} x={b.x} y={136-b.h} width="20" height={b.h} rx="3" fill={b.hi?"#1d4ed8":"#bfdbfe"}/>
      ))}
      <polyline points="40,118 72,108 104,114 136,102 168,108 200,98 232,104" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="232" cy="104" r="3.5" fill="#0a84ff" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function SceneEmbedded() {
  return (
    <svg viewBox="0 0 300 160" width="100%" height="160" fill="none">
      <line x1="90" y1="80" x2="210" y2="80" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="5 3"/>
      <circle cx="62" cy="62" r="28" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5"/>
      <circle cx="62" cy="56" r="12" fill="rgba(255,255,255,0.92)"/>
      <ellipse cx="62" cy="76" rx="18" ry="10" fill="rgba(255,255,255,0.92)"/>
      <circle cx="238" cy="62" r="28" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1.5"/>
      <circle cx="238" cy="56" r="12" fill="rgba(255,255,255,0.92)"/>
      <ellipse cx="238" cy="76" rx="18" ry="10" fill="rgba(255,255,255,0.92)"/>
      <rect x="246" y="44" width="18" height="14" rx="3" fill="#1d4ed8"/>
      <text x="255" y="54" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">A</text>
      {/* Center doc */}
      <rect x="120" y="38" width="60" height="78" rx="8" fill="white" stroke="#1d4ed8" strokeWidth="1.5"/>
      <rect x="128" y="50" width="44" height="5" rx="2.5" fill="#bfdbfe"/>
      <rect x="128" y="60" width="36" height="4" rx="2" fill="#bfdbfe" opacity="0.6"/>
      <rect x="128" y="69" width="40" height="4" rx="2" fill="#bfdbfe" opacity="0.4"/>
      <rect x="128" y="80" width="8" height="10" rx="1.5" fill="#1d4ed8" opacity="0.25"/>
      <rect x="139" y="76" width="8" height="14" rx="1.5" fill="#1d4ed8" opacity="0.5"/>
      <rect x="150" y="72" width="8" height="18" rx="1.5" fill="#1d4ed8" opacity="0.85"/>
      <rect x="161" y="78" width="8" height="12" rx="1.5" fill="#1d4ed8" opacity="0.4"/>
      {/* Chat bubble */}
      <rect x="166" y="8" width="100" height="22" rx="10" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
      <text x="216" y="22.5" textAnchor="middle" fontSize="9" fill="#374151" fontFamily="system-ui,sans-serif">Books updated ✓</text>
      <path d="M 190 30 L 188 30 L 191 36 Z" fill="white" stroke="#bfdbfe" strokeWidth="1.2"/>
      {/* Labels */}
      <rect x="32" y="98" width="60" height="14" rx="7" fill="#1d4ed8"/>
      <text x="62" y="108.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">Your Business</text>
      <rect x="208" y="98" width="60" height="14" rx="7" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1"/>
      <text x="238" y="108.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Accountables</text>
      <circle cx="150" cy="130" r="10" fill="#1d4ed8"/>
      <path d="M 146 130 l 3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SceneExecution() {
  return (
    <svg viewBox="0 0 300 160" width="100%" height="160" fill="none">
      <rect x="16" y="10" width="268" height="140" rx="14" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="16" y="10" width="268" height="28" rx="14" fill="#eff6ff"/>
      <rect x="16" y="26" width="268" height="12" fill="#eff6ff"/>
      <text x="32" y="29" fontSize="7.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">EXECUTION PLAN</text>
      <rect x="228" y="17" width="48" height="14" rx="7" fill="#dcfce7"/>
      <text x="252" y="27.5" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#16a34a" fontFamily="system-ui,sans-serif">On Track</text>
      {[
        {y:52,done:true,pct:100,label:"Onboarding & Setup",tag:"Complete"},
        {y:78,done:true,pct:100,label:"Bookkeeping & Reconciliation",tag:"Complete"},
        {y:104,done:false,pct:72,label:"Compliance Filing",tag:"In Progress",active:true},
        {y:130,done:false,pct:0,label:"Management Reporting",tag:"Scheduled"},
      ].map((t) => (
        <g key={t.y}>
          <circle cx="36" cy={t.y} r="8" fill={t.done?"#1d4ed8":t.active?"#eff6ff":"white"} stroke={t.done?"#1d4ed8":t.active?"#0a84ff":"#bfdbfe"} strokeWidth={t.active?2:1.5}/>
          {t.done && <path d={`M${32} ${t.y}l3 3 6-6`} stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>}
          {t.active && <circle cx="36" cy={t.y} r="4" fill="#0a84ff" opacity="0.7"/>}
          <text x="52" y={t.y-3} fontSize="9.5" fontWeight={t.active?"700":"600"} fill={t.done?"#9ca3af":t.active?"#0b1e3f":"#d1d5db"} fontFamily="system-ui,sans-serif">{t.label}</text>
          <rect x="52" y={t.y+5} width="168" height="5" rx="2.5" fill="#f1f5f9"/>
          <rect x="52" y={t.y+5} width={168*t.pct/100} height="5" rx="2.5" fill={t.done?"#1d4ed8":t.active?"#0a84ff":"#e5e7eb"}/>
          <rect x="228" y={t.y-7} width="46" height="13" rx="6.5" fill={t.done?"#eff6ff":t.active?"#eff6ff":"#f9fafb"}/>
          <text x="251" y={t.y+2.5} textAnchor="middle" fontSize="7.5" fontWeight="600" fill={t.done?"#1d4ed8":t.active?"#0a84ff":"#9ca3af"} fontFamily="system-ui,sans-serif">{t.tag}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Region Toggle ─────────────────────────────────────────────────────────────

const regions = {
  "United Kingdom": {
    flag: "🇬🇧",
    accent: "#1d4ed8",
    bg: "#eff6ff",
    label: "Finance Operations",
    description: undefined as string | undefined,
    logo: undefined as string | undefined,
    contact: undefined as string | undefined,
    items: [
      "Year-end accounts",
      "Monthly management accounting",
      "VAT support & filing workflows",
      "Payroll management & pension coordination",
      "Financial planning & analysis",
      "Budgeting & forecasting",
      "Accounts receivable & payable support",
      "Financial modeling",
      "Self-assessment support",
      "Cross-border transaction coordination",
      "Corporation tax workflows",
    ],
    footer: "Designed around ongoing finance visibility, reporting coordination and embedded operational support.",
    footerIcon: "people" as const,
  },
  "United States": {
    flag: "🇺🇸",
    accent: "#AABDB5",
    bg: "#f0f4f3",
    label: "Finance Operations",
    description: "Accountables supports businesses in the United States under the aegis of Route One Advisory." as string | undefined,
    logo: "/logos/ROUTE ONE LLC.png" as string | undefined,
    contact: "sidharth@routeone.com" as string | undefined,
    items: [
      "Bookkeeping & financial reporting",
      "Management accounting",
      "Sales tax filing support",
      "Payroll coordination",
      "Accounts payable & receivable support",
      "Financial planning & analysis",
      "Budgeting & forecasting",
      "Cash flow reporting",
      "Multi-state finance support",
      "Financial modeling & reporting workflows",
      "Business finance coordination",
    ],
    footer: "Connected finance operations designed around reporting visibility and operational coordination.",
    footerIcon: "chart" as const,
  },
  India: {
    flag: "🇮🇳",
    accent: "#16a34a",
    bg: "#f0fdf4",
    label: "Strategic Finance & Advisory",
    description: undefined as string | undefined,
    logo: undefined as string | undefined,
    contact: undefined as string | undefined,
    items: [
      "Fundraising support",
      "Startup consulting",
      "Virtual CFO services",
      "Financial modeling & investor reporting",
      "Transaction advisory",
      "Mergers & acquisitions support",
      "Indian auditing & assurance",
      "Management accounting",
      "Business structuring support",
      "Forecasting & strategic planning",
    ],
    footer: "Strategic finance support designed for founder-led and growth-stage businesses.",
    footerIcon: "rocket" as const,
  },
};

// ─── FAQ Accordion (Bench two-column style) ────────────────────────────────────

const faqs = [
  {
    q: "How does Accountables function as a virtual finance department?",
    a: "Accountables operates as an extension of your business - supporting bookkeeping, reporting, compliance, finance coordination and operational visibility through a connected finance environment designed around ongoing support and structured execution.",
  },
  {
    q: "Do I need to change my existing accounting setup?",
    a: "No. Accountables works alongside existing accounting environments including Xero and QuickBooks, while integrating workflow coordination and communication through Accountables One.",
  },
  {
    q: "How does communication with the Accountables team work?",
    a: "Clients communicate directly with their Accountable Manager through structured communication workflows designed around visibility, coordination and ongoing operational support.",
  },
  {
    q: "Can Accountables work alongside our internal finance team?",
    a: "Yes. Accountables can operate as a fully outsourced finance function or work alongside internal finance teams by supporting reporting, operational coordination, compliance workflows and finance execution.",
  },
  {
    q: "What regions does Accountables support?",
    a: "Accountables supports businesses operating across the United Kingdom, United States and India - including businesses managing international and cross-border finance operations.",
  },
  {
    q: "What services are included within ongoing finance support?",
    a: "Depending on operational requirements, support may include bookkeeping, management accounting, payroll coordination, VAT workflows, reporting visibility, AR/AP support, financial planning & analysis, budgeting, forecasting and ongoing finance coordination.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeRegion, setActiveRegion] = useState<keyof typeof regions>("United Kingdom");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>

        {/* ════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 bg-[var(--background)]">
          {/* Background stripes */}
          <div aria-hidden className="absolute inset-0 overflow-hidden">
            <div className="jersey-stripes stripe-slide-in opacity-[0.6]" />
          </div>
          <div aria-hidden className="absolute inset-0 jersey-fade fade-in-soft" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left: copy */}
              <div>
                <div className="rise rise-1">
                  <span className="pill mb-6 block w-fit">Services</span>
                </div>

                <h1 className="rise rise-2 display text-[40px] sm:text-[52px] md:text-[60px] font-semibold text-[var(--text-primary)] leading-[1.02]">
                  Your Virtual<br />
                  <span style={{ background: "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-accent) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="accent">Finance</span> Department.
                </h1>

                <p className="rise rise-3 mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[var(--text-secondary)] max-w-[460px]">
                  Built for businesses looking for structured finance support without building a large in-house finance team.
                </p>

                <p className="rise rise-3 mt-3 text-[16px] md:text-[17px] leading-[1.7] text-[var(--text-secondary)] max-w-[460px]">
                  Accountables combines accounting, reporting, compliance and finance coordination within a connected operating environment designed around ongoing visibility, organised execution and embedded support.
                </p>

                <div className="rise rise-4 mt-8 flex flex-col sm:flex-row items-start gap-3">
                  <Link href="/#contact" className="btn-primary !px-7 !py-3 !text-[14.5px]">
                    Schedule a Consultation
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="/ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-1.5 !px-6 !py-3 !text-[14.5px]"
                    >
                      Go to Accountables{" "}
                      <img src="/prod_icon.svg" alt="One" style={{ display: "inline-block", height: "1em", width: "auto", verticalAlign: "-0.1em" }} />
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <p className="text-[11.5px] text-[var(--text-muted)] flex items-center gap-1.5 px-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Limited dashboard access available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: dashboard */}
              <div className="rise rise-4 hidden lg:block">
                <HeroDashboard />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINANCE SUPPORT VALUE PROPS
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* Centered header */}
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <RevealBlock delay={0}>
                <span className="pill">Finance Support</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  Finance support designed around{" "}
                  <span className="accent">growing businesses</span>.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  Accountables combines structured finance support, operational coordination and ongoing visibility - allowing businesses to operate with a more organised finance function.
                </p>
              </RevealBlock>
            </div>

            {/* 4-column value blocks */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                {
                  Scene: SceneTimeOps,
                  title: "More Time for Operations",
                  body: "Reduce time spent coordinating accounting, reporting, compliance and finance follow-ups internally.",
                },
                {
                  Scene: SceneVisibility,
                  title: "Ongoing Financial Visibility",
                  body: "Structured reporting environments designed around business visibility and informed decision-making.",
                },
                {
                  Scene: SceneEmbedded,
                  title: "Embedded Finance Support",
                  body: "Work with a finance team designed to operate alongside your business and internal workflows.",
                },
                {
                  Scene: SceneExecution,
                  title: "Organised Execution",
                  body: "Defined processes, coordinated timelines and ongoing operational support designed around consistency and clarity.",
                },
              ].map((item, idx) => (
                <RevealBlock key={item.title} delay={idx * 70}>
                  <div className="group flex flex-col h-full rounded-2xl overflow-hidden border border-[var(--border)] bg-white hover:shadow-[0_8px_32px_rgba(11,30,63,0.09)] transition-shadow duration-300">
                    <div
                      className="relative flex-shrink-0 overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)", height: 160 }}
                    >
                      <item.Scene />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 p-6">
                      <h3 className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">{item.body}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINANCE OPERATIONS - SERVICE BREAKDOWN
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* Header */}
            <div className="max-w-2xl mb-14 md:mb-16">
              <RevealBlock delay={0}>
                <span className="pill">Finance Operations</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  End-to-End Finance Support,{" "}
                  <span className="accent">Delivered</span> as One Connected Function.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  A structured finance function designed around ongoing operational support, reporting visibility and coordinated execution.
                </p>
              </RevealBlock>
            </div>

            {/* Service cards */}
            <div className="flex flex-col gap-5">
              {[
                {
                  number: "01",
                  Scene: SceneSvcBookkeeping,
                  title: "Bookkeeping & Reporting",
                  body: "Monthly bookkeeping, reconciliations, reporting workflows and structured month-end close designed to maintain organised and up-to-date financial records.",
                  tags: ["Bookkeeping", "Reconciliations", "Ledger maintenance", "Reporting workflows", "Month-end close"],
                  href: "/services/bookkeeping",
                },
                {
                  number: "02",
                  Scene: SceneSvcAPAR,
                  title: "Accounts Payable & Receivable",
                  body: "Vendor payments, receivables tracking, invoicing coordination and ongoing visibility into incoming and outgoing cash movement.",
                  tags: ["AP management", "AR tracking", "Invoicing", "Collections coordination", "Payment workflows"],
                  href: "/services/accounts-payable-receivable",
                },
                {
                  number: "03",
                  Scene: SceneSvcPayroll,
                  title: "Payroll & Compliance",
                  body: "Payroll processing, tax coordination, year-end support and ongoing compliance workflows across operating regions.",
                  tags: ["Payroll processing", "VAT / Sales Tax / GST", "Compliance workflows", "Year-end coordination", "Tax support"],
                  href: "/services/accounting-tax",
                },
                {
                  number: "04",
                  Scene: SceneSvcPlanning,
                  title: "CFO & FP&A",
                  body: "Finance leadership, reporting visibility, forecasting and operational coordination for growing businesses that need structured finance support without a full in-house finance department.",
                  tags: ["CFO support", "FP&A", "Management reporting", "Forecasting", "Controller oversight", "Finance leadership"],
                  href: "/services/cfo-advisory",
                },
              ].map((s, idx) => (
                <RevealBlock key={s.number} delay={idx * 50}>
                  <div className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-white hover:shadow-[0_8px_32px_rgba(11,30,63,0.09)] transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row">
                      {/* Illustration panel */}
                      <div
                        className="relative flex-shrink-0 lg:w-[240px] overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)", minHeight: 160 }}
                      >
                        <s.Scene />
                        <span
                          className="absolute bottom-3 left-4 text-[10px] tracking-[0.18em] font-semibold"
                          style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", color: "rgba(29,78,216,0.55)" }}
                        >
                          / {s.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col lg:flex-row lg:flex-1 gap-6 lg:gap-10 p-6 lg:p-8 items-start">
                        {/* Title + body */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--text-primary)] leading-snug">
                            {s.title}
                          </h3>
                          <p className="mt-2.5 text-[14px] leading-[1.65] text-[var(--text-secondary)] max-w-md">
                            {s.body}
                          </p>
                        </div>

                        {/* Tags + link */}
                        <div className="flex flex-col gap-4 lg:w-64 flex-shrink-0">
                          <div className="flex flex-wrap gap-1.5">
                            {s.tags.map((tag) => (
                              <span key={tag} className="pill text-[11px] !py-1 !px-2.5">{tag}</span>
                            ))}
                          </div>
                          <Link
                            href={s.href}
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[var(--brand-blue)] hover:underline underline-offset-4 w-fit"
                          >
                            Learn more
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            ACCOUNTABLES ONE - dark section
        ════════════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
        >
          {/* Stripe overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 60px, transparent 60px, transparent 120px)",
            }}
          />
          {/* Glow */}
          <div
            aria-hidden
            className="absolute -top-1/4 -right-1/4 h-[70%] w-[60%] rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)" }}
          />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

              {/* Left */}
              <div>
                <RevealBlock delay={0}>
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 border border-white/20 rounded-full px-3 py-1 mb-6">Accountables 
                    <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 1 }} />
                  </span>
                </RevealBlock>
                <RevealBlock delay={80}>
                  <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-white leading-[1.04]">
                    Finance Support, Connected Through{" "}
                    <span className="accent">One Environment</span>.
                  </h2>
                </RevealBlock>
                <RevealBlock delay={160}>
                  <p className="mt-5 text-[16px] leading-[1.7] text-white/65 max-w-md">
                    Accountables One supports reporting visibility, workflow coordination, task tracking and ongoing finance communication across the Accountables operating environment.
                  </p>
                </RevealBlock>
                <RevealBlock delay={240}>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href="/ai"
                      className="inline-flex h-11 items-center gap-2 px-6 rounded-full bg-white text-[var(--brand-navy)] text-[14px] font-medium hover:bg-white/90 transition-colors"
                    >
                      Join Early Access
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </RevealBlock>
                <RevealBlock delay={300}>
                  <p className="mt-5 text-[11.5px] text-white/40">
                    Expanded workflow capabilities coming soon.
                  </p>
                </RevealBlock>
              </div>

              {/* Right: feature pills grid */}
              <RevealBlock delay={120}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Reporting Visibility", body: "Structured reporting environments designed around ongoing business visibility and financial clarity." },
                    { title: "Workflow Coordination", body: "Task tracking, finance timelines and operational workflow visibility." },
                    { title: "Finance Communication", body: "Centralized communication, approvals and ongoing coordination with the Accountables team." },
                    { title: "Operational Visibility", body: "A connected environment designed around finance coordination and structured execution." },
                    { title: "Task Tracking", body: "Finance timelines, deliverable management and structured execution across all operating areas." },
                    {
                      title: "Coming Soon",
                      body: "Expanded workflow capabilities, integrated operational tools and enhanced reporting environments.",
                      soon: true,
                    },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className={`rounded-2xl border p-5 flex flex-col gap-2 ${
                        f.soon
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-white/10 bg-white/[0.08] backdrop-blur-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-[13px] font-semibold ${f.soon ? "text-white/40" : "text-white"}`}>
                          {f.title}
                        </h3>
                        {f.soon && (
                          <span className="text-[9px] tracking-[0.14em] uppercase font-semibold text-white/30 border border-white/15 rounded-full px-1.5 py-0.5 flex-shrink-0">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className={`text-[11.5px] leading-[1.6] ${f.soon ? "text-white/30" : "text-white/55"}`}>
                        {f.body}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealBlock>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            REGIONAL EXPERIENCE
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* Header */}
            <div className="max-w-3xl mb-10">
              <RevealBlock delay={0}>
                <h2 className="display text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  Multi-region finance support.
                </h2>
              </RevealBlock>
              <RevealBlock delay={80}>
                <p className="mt-4 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  Accountables supports businesses operating across the United Kingdom, United States and India - with experience across regional finance operations, reporting environments and compliance coordination.
                </p>
              </RevealBlock>
              <RevealBlock delay={120}>
                <div className="mt-4 inline-flex items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--brand-blue)] flex-shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Structured around connected finance operations and ongoing operational visibility.
                </div>
              </RevealBlock>
            </div>

            {/* 3-column region cards */}
            <RevealBlock delay={200}>
              <div className="grid lg:grid-cols-3 gap-5">
                {(Object.keys(regions) as (keyof typeof regions)[]).map((region) => {
                  const r = regions[region];
                  const isActive = activeRegion === region;
                  return (
                    <div
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`rounded-2xl border bg-white flex flex-col cursor-pointer transition-all ${
                        isActive
                          ? "border-[var(--brand-blue)]/30 shadow-[0_12px_40px_-12px_rgba(11,30,63,0.18)]"
                          : "border-[var(--border)] hover:border-[var(--border)] hover:shadow-sm"
                      }`}
                    >
                      {/* Card header */}
                      <div className="p-6 pb-0">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="h-11 w-11 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] flex items-center justify-center text-[24px] leading-none">
                            {r.flag}
                          </span>
                          <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">{region}</h3>
                        </div>
                        <p className="text-[13px] font-semibold mb-3" style={{ color: r.accent }}>
                          {r.label}
                        </p>
                        {r.description && (
                          <div className="mb-4">
                            {r.logo && (
                              <div className="flex items-center gap-2 mb-2">
                                <img
                                  src={r.logo}
                                  alt="Route One"
                                  className="h-5 w-auto object-contain"
                                />
                              </div>
                            )}
                            <p className="text-[12.5px] leading-[1.65] text-[var(--text-secondary)]">
                              Accountables supports businesses in the United States under the aegis of{" "}
                              <span className="font-semibold" style={{ color: r.accent }}>Route One Advisory</span>.
                            </p>
                            {r.contact && (
                              <a
                                href={`mailto:${r.contact}`}
                                className="inline-flex items-center gap-1.5 mt-2 text-[11.5px] font-medium"
                                style={{ color: r.accent }}
                              >
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8"/>
                                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                                </svg>
                                {r.contact}
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Items list */}
                      <ul className="px-6 pb-6 flex flex-col gap-2.5 mt-3 flex-1">
                        {r.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" style={{ color: r.accent }}>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 00-1.414 0L10 14.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"/>
                            </svg>
                            <span className="text-[13px] text-[var(--text-secondary)] leading-[1.5]">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div
                        className="mx-4 mb-4 rounded-xl p-4 flex items-start gap-3"
                        style={{ background: r.bg }}
                      >
                        <span className="flex-shrink-0 mt-0.5" style={{ color: r.accent }}>
                          {r.footerIcon === "people" && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
                              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                          )}
                          {r.footerIcon === "chart" && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                              <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                              <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                          )}
                          {r.footerIcon === "rocket" && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C12 2 7 6 7 12v1l-2 3h14l-2-3v-1c0-6-5-10-5-10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                              <path d="M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                          )}
                        </span>
                        <p className="text-[12px] leading-[1.65] text-[var(--text-secondary)]">{r.footer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INDUSTRIES
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--surface-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center max-w-xl mx-auto mb-12 md:mb-14">
              <RevealBlock delay={0}>
                <span className="pill">Industries</span>
              </RevealBlock>
              <RevealBlock delay={80}>
                <h2 className="display mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[var(--text-primary)] leading-[1.04]">
                  Built for{" "}
                  <span className="accent">Growing Businesses</span>.
                </h2>
              </RevealBlock>
              <RevealBlock delay={160}>
                <p className="mt-5 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                  Supporting founder-led and growth-stage businesses across multiple industries and operating environments.
                </p>
              </RevealBlock>
            </div>

            <RevealBlock delay={200}>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Ecommerce & Shopify Brands",
                  "Consumer Brands",
                  "Agencies & Service Businesses",
                  "Technology & SaaS Companies",
                  "Founder-Led SMEs",
                  "Cross-Border Businesses",
                  "Multi-Entity Businesses",
                  "DTC & Online Retail",
                  "Subscription-Based Businesses",
                  "Operationally Growing Companies",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="card px-6 py-4 text-[14px] font-medium text-[var(--text-primary)]"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FAQ - Bench two-column style
        ════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.8fr] gap-14 md:gap-20">

              {/* Left: sticky heading */}
              <div className="md:sticky md:top-28 self-start">
                <RevealBlock delay={0}>
                  <h2 className="display text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[var(--text-primary)] leading-[1.1]">
                    Frequently Asked Questions
                  </h2>
                  <Link
                    href="/#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--brand-blue)] hover:underline underline-offset-4"
                  >
                    Ask us directly →
                  </Link>
                </RevealBlock>
              </div>

              {/* Right: accordion */}
              <div className="divide-y divide-[var(--border)]">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <button
                      key={faq.q}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left py-6 flex flex-col gap-3 group"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <span className="text-[15px] md:text-[16px] font-medium text-[var(--text-primary)] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className={`flex-shrink-0 mt-0.5 h-6 w-6 rounded-full border border-[var(--border-strong)] flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </span>
                      </div>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-400 ${
                          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[14.5px] md:text-[15px] leading-[1.65] text-[var(--text-secondary)] pr-10">
                          {faq.a}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINAL CTA
        ════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[var(--surface-soft)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div
              className="relative overflow-hidden rounded-[28px] md:rounded-[40px] p-10 md:p-20"
              style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
            >
              {/* Stripe overlay */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 80px, transparent 80px, transparent 160px)",
                }}
              />
              {/* Glow */}
              <div
                aria-hidden
                className="absolute -top-1/2 -right-1/4 h-[120%] w-[60%] rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, rgba(10,132,255,0.6) 0%, transparent 70%)" }}
              />

              <div className="relative text-center max-w-2xl mx-auto">
                <RevealBlock delay={0}>
                  <h2 className="display text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-white leading-[1.04]">
                    A More <span className="accent">Organised </span> Finance Function.
                  </h2>
                </RevealBlock>
                <RevealBlock delay={80}>
                  <p className="mt-5 text-[16px] md:text-[17px] leading-[1.65] text-white/65 max-w-lg mx-auto">
                    Accountables helps businesses build structured finance operations designed around visibility, coordination and scalable growth.
                  </p>
                </RevealBlock>
                <RevealBlock delay={160}>
                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="inline-flex h-12 items-center gap-2 px-8 rounded-full bg-white text-[var(--brand-navy)] text-[14.5px] font-medium hover:bg-white/90 transition-colors"
                    >
                      Book a Consultation
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </RevealBlock>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
