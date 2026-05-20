"use client";

/**
 * Animated SVG hero illustrations - one per service slug.
 * Each component is self-contained: CSS keyframes live inside a <style>
 * tag within the SVG, with slug-specific class prefixes to avoid conflicts.
 */

import React from "react";

// ─── Bookkeeping ──────────────────────────────────────────────────────────────

export function IllustrationBookkeeping() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes bk-row   { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
        @keyframes bk-check { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
        @keyframes bk-bar   { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes bk-live  { 0%,100%{r:3.5} 50%{r:6} }

        .bk-r1{animation:bk-row .5s .2s ease-out both}
        .bk-r2{animation:bk-row .5s .5s ease-out both}
        .bk-r3{animation:bk-row .5s .8s ease-out both}
        .bk-r4{animation:bk-row .5s 1.1s ease-out both}
        .bk-r5{animation:bk-row .5s 1.4s ease-out both}
        .bk-c1{stroke-dasharray:20;stroke-dashoffset:20;animation:bk-check .4s .7s ease-out both}
        .bk-c2{stroke-dasharray:20;stroke-dashoffset:20;animation:bk-check .4s 1.0s ease-out both}
        .bk-c3{stroke-dasharray:20;stroke-dashoffset:20;animation:bk-check .4s 1.3s ease-out both}
        .bk-b1{transform-origin:44px 214px;animation:bk-bar .7s .3s ease-out both}
        .bk-b2{transform-origin:72px 214px;animation:bk-bar .7s .5s ease-out both}
        .bk-b3{transform-origin:100px 214px;animation:bk-bar .7s .7s ease-out both}
        .bk-b4{transform-origin:128px 214px;animation:bk-bar .7s .9s ease-out both}
        .bk-b5{transform-origin:156px 214px;animation:bk-bar .7s 1.1s ease-out both}
        .bk-b6{transform-origin:184px 214px;animation:bk-bar .7s 1.3s ease-out both}
        .bk-live{animation:bk-live 1.5s ease-in-out infinite}
      `}</style>

      {/* Left page */}
      <rect x="10" y="18" width="156" height="188" rx="4" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      {/* Spine */}
      <rect x="164" y="14" width="8" height="196" rx="3" fill="#1d4ed8"/>
      {/* Right page */}
      <rect x="170" y="18" width="156" height="188" rx="4" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>

      {/* Left headers */}
      <text x="18" y="34" fontSize="6.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">DATE</text>
      <text x="76" y="34" fontSize="6.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">DESCRIPTION</text>
      <line x1="12" y1="39" x2="162" y2="39" stroke="#bfdbfe" strokeWidth="0.8"/>

      {/* Ledger rows - left */}
      {([
        {cls:"bk-r1",ck:"bk-c1",y:54,date:"Apr 01",label:"Rent Expense",done:true},
        {cls:"bk-r2",ck:"bk-c2",y:76,date:"Apr 03",label:"Payroll Run",done:true},
        {cls:"bk-r3",ck:"bk-c3",y:98,date:"Apr 07",label:"Cost of Goods",done:true},
        {cls:"bk-r4",y:120,date:"Apr 12",label:"Marketing Exp.",done:false},
        {cls:"bk-r5",y:142,date:"Apr 14",label:"Utilities",done:false},
      ] as {cls:string;ck?:string;y:number;date:string;label:string;done:boolean}[]).map((r) => (
        <g key={r.y} className={r.cls}>
          <line x1="12" y1={r.y+14} x2="162" y2={r.y+14} stroke="#e0eaff" strokeWidth="0.7"/>
          <circle cx="22" cy={r.y+3} r="5.5"
            fill={r.done?"#1d4ed8":"white"}
            stroke={r.done?"#1d4ed8":"#bfdbfe"} strokeWidth="1.2"/>
          {r.done && (
            <path d={`M${19} ${r.y+3}l2.5 2.5 4.5-4.5`}
              className={r.ck||""}
              stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          )}
          <text x="34" y={r.y+7} fontSize="7.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">{r.date}</text>
          <text x="78" y={r.y+7} fontSize="8.5" fill={r.done?"#6b7280":"#374151"} fontFamily="system-ui,sans-serif">{r.label}</text>
        </g>
      ))}

      {/* LIVE badge */}
      <g>
        <circle className="bk-live" cx="24" cy="176" r="3.5" fill="#22c55e"/>
        <text x="32" y="179.5" fontSize="8" fontWeight="600" fill="#22c55e" fontFamily="system-ui,sans-serif">LIVE · syncing now</text>
      </g>

      {/* Right page headers */}
      <text x="178" y="34" fontSize="6.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">AMOUNT</text>
      <text x="246" y="34" fontSize="6.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">BALANCE</text>
      <line x1="172" y1="39" x2="318" y2="39" stroke="#bfdbfe" strokeWidth="0.8"/>

      {/* Ledger rows - right */}
      {([
        {cls:"bk-r1",y:54,amt:"$4,200",bal:"$142K"},
        {cls:"bk-r2",y:76,amt:"$18,400",bal:"$124K"},
        {cls:"bk-r3",y:98,amt:"$32,100",bal:"$92K"},
        {cls:"bk-r4",y:120,amt:"$6,800",bal:"$85K"},
        {cls:"bk-r5",y:142,amt:"$1,200",bal:"$83K"},
      ] as {cls:string;y:number;amt:string;bal:string}[]).map((r) => (
        <g key={r.y} className={r.cls}>
          <line x1="172" y1={r.y+14} x2="318" y2={r.y+14} stroke="#e0eaff" strokeWidth="0.7"/>
          <text x="178" y={r.y+7} fontSize="8.5" fill="#374151" fontFamily="system-ui,sans-serif">{r.amt}</text>
          <text x="246" y={r.y+7} fontSize="8.5" fontWeight="600" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{r.bal}</text>
        </g>
      ))}

      {/* Bar chart */}
      {([
        {cls:"bk-b1",x:30,h:28},{cls:"bk-b2",x:58,h:40},{cls:"bk-b3",x:86,h:34},
        {cls:"bk-b4",x:114,h:52},{cls:"bk-b5",x:142,h:44},{cls:"bk-b6",x:170,h:60,hi:true},
      ] as {cls:string;x:number;h:number;hi?:boolean}[]).map((b) => (
        <rect key={b.x} className={b.cls} x={b.x} y={214-b.h} width="20" height={b.h} rx="3"
          fill={b.hi?"#1d4ed8":"#bfdbfe"}/>
      ))}
      <line x1="14" y1="214" x2="280" y2="214" stroke="#bfdbfe" strokeWidth="0.8"/>

      {/* Month End badge */}
      <rect x="236" y="170" width="96" height="16" rx="8" fill="#1d4ed8"/>
      <text x="284" y="181.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">Month End Close ✓</text>

      {/* Decorative */}
      <circle cx="344" cy="38" r="5" fill="#bfdbfe" opacity="0.5"/>
      <circle cx="360" cy="62" r="3" fill="#93c5fd" opacity="0.4"/>
    </svg>
  );
}

// ─── Accounting & Tax ─────────────────────────────────────────────────────────

export function IllustrationAccountingTax() {
  const weeks = [
    [null,null,1,2,3,4,5],
    [6,7,8,9,10,11,12],
    [13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26],
    [27,28,29,30,null,null,null],
  ];
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes at-appear { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes at-check  { 0%{stroke-dashoffset:36} 100%{stroke-dashoffset:0} }
        @keyframes at-stamp  { 0%{opacity:0;transform:scale(1.4) rotate(-8deg)} 70%{transform:scale(0.96) rotate(2deg)} 100%{opacity:1;transform:scale(1) rotate(0deg)} }
        @keyframes at-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }

        .at-shield{animation:at-appear .6s .3s ease-out both}
        .at-checkline{stroke-dasharray:36;stroke-dashoffset:36;animation:at-check .8s .9s ease-out both}
        .at-stamp{animation:at-stamp .55s 1.9s ease-out both;opacity:0}
        .at-doc{animation:at-float 4s 1.5s ease-in-out infinite}
        .at-day14{animation:at-appear .4s .6s ease-out both}
        .at-day25{animation:at-appear .4s .9s ease-out both}
        .at-day30{animation:at-appear .4s 1.2s ease-out both}
      `}</style>

      {/* Calendar */}
      <rect x="10" y="12" width="200" height="228" rx="12" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      <rect x="10" y="12" width="200" height="34" rx="12" fill="#1d4ed8"/>
      <rect x="10" y="32" width="200" height="14" fill="#1d4ed8"/>
      <text x="110" y="33" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">APRIL 2026</text>
      {["M","T","W","T","F","S","S"].map((d,i) => (
        <text key={i} x={32+i*24} y="58" textAnchor="middle" fontSize="8" fontWeight="600" fill="#9ca3af" fontFamily="system-ui,sans-serif">{d}</text>
      ))}
      {weeks.map((row,ri) => row.map((day,di) => {
        if (!day) return null;
        const cx = 32+di*24, cy = 76+ri*22;
        const isTax = day===14||day===30, isPay = day===25;
        const dayClass = day===14?"at-day14":day===25?"at-day25":day===30?"at-day30":"";
        return (
          <g key={`${ri}-${di}`} className={dayClass}>
            {isTax && <circle cx={cx} cy={cy} r="9" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2"/>}
            {isPay && <circle cx={cx} cy={cy} r="9" fill="#1d4ed8"/>}
            <text x={cx} y={cy+3.5} textAnchor="middle" fontSize="8.5"
              fill={isPay?"white":isTax?"#92400e":"#374151"}
              fontWeight={isTax||isPay?"700":"400"}
              fontFamily="system-ui,sans-serif">{day}</text>
          </g>
        );
      }))}
      {/* Legend */}
      <circle cx="18" cy="248" r="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.8"/>
      <text x="28" y="251.5" fontSize="8" fill="#6b7280" fontFamily="system-ui,sans-serif">Tax deadline</text>
      <circle cx="100" cy="248" r="6" fill="#1d4ed8"/>
      <text x="110" y="251.5" fontSize="8" fill="#6b7280" fontFamily="system-ui,sans-serif">Payroll</text>

      {/* Shield */}
      <g className="at-shield" transform="translate(224,14)">
        <path d="M 64 12 L 38 22 L 38 52 C 38 72 50 84 64 92 C 78 84 90 72 90 52 L 90 22 Z"
          fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.8"/>
        <path className="at-checkline" d="M 50 55 l 10 10 20-20"
          stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Document stack */}
      <g className="at-doc">
        <rect x="228" y="134" width="136" height="96" rx="8" fill="#f0f7ff" stroke="#bfdbfe" strokeWidth="1" transform="rotate(-6,296,182)"/>
        <rect x="228" y="132" width="136" height="96" rx="8" fill="#f8faff" stroke="#bfdbfe" strokeWidth="1" transform="rotate(-2,296,180)"/>
        <rect x="230" y="130" width="136" height="96" rx="8" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
        <rect x="242" y="144" width="80" height="6" rx="3" fill="#bfdbfe"/>
        <rect x="242" y="156" width="64" height="5" rx="2.5" fill="#e0eaff"/>
        <rect x="242" y="167" width="72" height="5" rx="2.5" fill="#e0eaff" opacity="0.7"/>
        <rect x="242" y="178" width="56" height="5" rx="2.5" fill="#e0eaff" opacity="0.5"/>
        <g className="at-stamp">
          <rect x="238" y="196" width="80" height="22" rx="4" fill="none" stroke="#22c55e" strokeWidth="2.2" transform="rotate(-5,278,207)"/>
          <text x="278" y="211" textAnchor="middle" fontSize="11" fontWeight="800" fill="#22c55e" fontFamily="system-ui,sans-serif" transform="rotate(-5,278,207)">FILED</text>
        </g>
      </g>
    </svg>
  );
}

// ─── Financial Analysis ───────────────────────────────────────────────────────

export function IllustrationFinancialAnalysis() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes fa-kpi  { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fa-bar  { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes fa-line { from{stroke-dashoffset:440} to{stroke-dashoffset:0} }
        @keyframes fa-dot  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.7);opacity:0.5} }

        .fa-k1{animation:fa-kpi .5s .1s ease-out both}
        .fa-k2{animation:fa-kpi .5s .3s ease-out both}
        .fa-k3{animation:fa-kpi .5s .5s ease-out both}
        .fa-b1{transform-origin:36px 198px;animation:fa-bar .7s .3s ease-out both}
        .fa-b2{transform-origin:64px 198px;animation:fa-bar .7s .45s ease-out both}
        .fa-b3{transform-origin:92px 198px;animation:fa-bar .7s .6s ease-out both}
        .fa-b4{transform-origin:120px 198px;animation:fa-bar .7s .75s ease-out both}
        .fa-b5{transform-origin:148px 198px;animation:fa-bar .7s .9s ease-out both}
        .fa-b6{transform-origin:176px 198px;animation:fa-bar .7s 1.05s ease-out both}
        .fa-b7{transform-origin:204px 198px;animation:fa-bar .7s 1.2s ease-out both}
        .fa-trend{stroke-dasharray:440;stroke-dashoffset:440;animation:fa-line 2s .4s ease-in-out both}
        .fa-dot{animation:fa-dot 2s 2.2s ease-in-out infinite}
      `}</style>

      {/* Card */}
      <rect x="10" y="10" width="360" height="240" rx="16" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="10" y="10" width="360" height="34" rx="16" fill="#eff6ff"/>
      <rect x="10" y="30" width="360" height="14" fill="#eff6ff"/>
      <text x="28" y="31" fontSize="8.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1.3" fontFamily="system-ui,sans-serif">FINANCIAL ANALYSIS</text>
      <rect x="306" y="18" width="52" height="14" rx="7" fill="#dcfce7"/>
      <circle cx="316" cy="25" r="3.5" fill="#22c55e"/>
      <text x="323" y="29" fontSize="7.5" fontWeight="600" fill="#16a34a" fontFamily="system-ui,sans-serif">Live</text>

      {/* KPI row */}
      {([
        {x:22,cls:"fa-k1",label:"Revenue",val:"$142K",delta:"+14%",up:true},
        {x:142,cls:"fa-k2",label:"COGS",val:"$89K",delta:"-3%",up:false},
        {x:262,cls:"fa-k3",label:"Net Margin",val:"37%",delta:"+5pp",up:true},
      ] as {x:number;cls:string;label:string;val:string;delta:string;up:boolean}[]).map((k) => (
        <g key={k.label} className={k.cls}>
          <rect x={k.x} y="52" width="106" height="46" rx="10" fill="#f8faff" stroke="#e0eaff" strokeWidth="1"/>
          <text x={k.x+10} y="66" fontSize="7.5" fill="#6b7280" fontFamily="system-ui,sans-serif">{k.label}</text>
          <text x={k.x+10} y="82" fontSize="14" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{k.val}</text>
          <rect x={k.x+76} y="58" width="24" height="13" rx="6.5" fill={k.up?"#dcfce7":"#fee2e2"}/>
          <text x={k.x+88} y="68" textAnchor="middle" fontSize="7.5" fontWeight="700" fill={k.up?"#16a34a":"#ef4444"} fontFamily="system-ui,sans-serif">{k.delta}</text>
        </g>
      ))}

      {/* Chart */}
      <rect x="18" y="106" width="344" height="110" rx="8" fill="#f8faff"/>
      {[126,148,170,192].map(y => (
        <line key={y} x1="26" y1={y} x2="354" y2={y} stroke="#e0eaff" strokeWidth="0.7"/>
      ))}
      {([
        {cls:"fa-b1",x:22,h:28},{cls:"fa-b2",x:50,h:44},{cls:"fa-b3",x:78,h:36},
        {cls:"fa-b4",x:106,h:60},{cls:"fa-b5",x:134,h:50},{cls:"fa-b6",x:162,h:74,hi:true},{cls:"fa-b7",x:190,h:62,hi:true},
      ] as {cls:string;x:number;h:number;hi?:boolean}[]).map((b) => (
        <rect key={b.x} className={b.cls} x={b.x} y={198-b.h} width="22" height={b.h} rx="3.5"
          fill={b.hi?"#1d4ed8":"#bfdbfe"}/>
      ))}
      <polyline className="fa-trend"
        points="33,170 61,154 89,162 117,138 145,148 173,120 201,132"
        stroke="#0a84ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="201,132 246,114 291,102"
        stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" fill="none" opacity="0.6"/>
      <circle className="fa-dot" cx="291" cy="102" r="5" fill="#0a84ff" stroke="white" strokeWidth="2"/>
      <rect x="254" y="88" width="70" height="14" rx="7" fill="#eff6ff" stroke="#0a84ff" strokeWidth="1"/>
      <text x="289" y="97.5" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#0a84ff" fontFamily="system-ui,sans-serif">Forecast →</text>
      {["Oct","Nov","Dec","Jan","Feb","Mar","Apr"].map((m,i) => (
        <text key={m} x={33+i*28} y="220" textAnchor="middle" fontSize="7.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">{m}</text>
      ))}
    </svg>
  );
}

// ─── CFO Advisory ─────────────────────────────────────────────────────────────

export function IllustrationCFOAdvisory() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes cfo-bar    { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes cfo-line   { from{stroke-dashoffset:520} to{stroke-dashoffset:0} }
        @keyframes cfo-appear { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes cfo-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes cfo-dot    { 0%,100%{r:4.5} 50%{r:7.5} }

        .cfo-person{animation:cfo-float 4s 1s ease-in-out infinite}
        .cfo-badge{animation:cfo-appear .5s .2s ease-out both}
        .cfo-b1{transform-origin:268px 124px;animation:cfo-bar .8s .4s ease-out both}
        .cfo-b2{transform-origin:296px 124px;animation:cfo-bar .8s .55s ease-out both}
        .cfo-b3{transform-origin:324px 124px;animation:cfo-bar .8s .7s ease-out both}
        .cfo-b4{transform-origin:352px 124px;animation:cfo-bar .8s .85s ease-out both}
        .cfo-growline{stroke-dasharray:520;stroke-dashoffset:520;animation:cfo-line 2s .3s ease-in-out both}
        .cfo-s1{animation:cfo-appear .5s .6s ease-out both}
        .cfo-s2{animation:cfo-appear .5s .9s ease-out both}
        .cfo-s3{animation:cfo-appear .5s 1.2s ease-out both}
        .cfo-org1{animation:cfo-appear .4s 1.5s ease-out both}
        .cfo-org2{animation:cfo-appear .4s 1.8s ease-out both}
        .cfo-org3{animation:cfo-appear .4s 2.1s ease-out both}
        .cfo-dot{animation:cfo-dot 2s 2.1s ease-in-out infinite}
      `}</style>

      {/* Person silhouette */}
      <g className="cfo-person">
        <circle cx="84" cy="86" r="52" fill="#dbeafe" opacity="0.35"/>
        <circle cx="84" cy="70" r="32" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5"/>
        <circle cx="84" cy="60" r="18" fill="rgba(255,255,255,0.92)"/>
        <ellipse cx="84" cy="88" rx="26" ry="16" fill="rgba(255,255,255,0.92)"/>
      </g>
      <g className="cfo-badge">
        <rect x="56" y="46" width="56" height="20" rx="10" fill="#1d4ed8"/>
        <text x="84" y="60" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">CFO</text>
      </g>

      {/* Desk */}
      <rect x="18" y="140" width="344" height="6" rx="3" fill="#e0eaff" opacity="0.6"/>

      {/* Left stat cards */}
      <g className="cfo-s1">
        <rect x="18" y="158" width="96" height="36" rx="8" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
        <text x="28" y="172" fontSize="7" fill="#6b7280" fontFamily="system-ui,sans-serif">Revenue</text>
        <text x="28" y="186" fontSize="13" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">$142K</text>
        <text x="82" y="186" fontSize="9" fontWeight="700" fill="#22c55e" fontFamily="system-ui,sans-serif">↑14%</text>
      </g>
      <g className="cfo-s2">
        <rect x="122" y="158" width="96" height="36" rx="8" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
        <text x="132" y="172" fontSize="7" fill="#6b7280" fontFamily="system-ui,sans-serif">Runway</text>
        <text x="132" y="186" fontSize="13" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">14 mo</text>
      </g>
      <g className="cfo-s3">
        <rect x="18" y="202" width="200" height="36" rx="8" fill="#1d4ed8"/>
        <text x="118" y="224" textAnchor="middle" fontSize="9" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">Strategic Finance · Enabled</text>
      </g>

      {/* Growth chart */}
      <rect x="240" y="12" width="132" height="122" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
      <rect x="240" y="12" width="132" height="24" rx="12" fill="#eff6ff"/>
      <rect x="240" y="24" width="132" height="12" fill="#eff6ff"/>
      <text x="256" y="27" fontSize="7.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1" fontFamily="system-ui,sans-serif">GROWTH</text>
      <rect x="248" y="44" width="116" height="78" rx="4" fill="#f8faff"/>
      {([
        {cls:"cfo-b1",x:256,h:18},{cls:"cfo-b2",x:284,h:34},{cls:"cfo-b3",x:312,h:52},{cls:"cfo-b4",x:340,h:68},
      ] as {cls:string;x:number;h:number}[]).map((b) => (
        <rect key={b.x} className={b.cls} x={b.x} y={120-b.h} width="18" height={b.h} rx="2.5" fill="#1d4ed8" opacity="0.75"/>
      ))}
      <polyline className="cfo-growline" points="265,110 293,94 321,76 349,54"
        stroke="#0a84ff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle className="cfo-dot" cx="349" cy="54" r="4.5" fill="#0a84ff" stroke="white" strokeWidth="2"/>

      {/* Org chart */}
      <rect x="240" y="144" width="132" height="56" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
      <text x="306" y="160" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1d4ed8" letterSpacing="1" fontFamily="system-ui,sans-serif">TEAM STRUCTURE</text>
      <g className="cfo-org1"><rect x="278" y="164" width="56" height="14" rx="4" fill="#1d4ed8" opacity="0.85"/><text x="306" y="174" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">CFO Oversight</text></g>
      <line x1="292" y1="178" x2="272" y2="186" stroke="#bfdbfe" strokeWidth="1.2"/>
      <line x1="320" y1="178" x2="340" y2="186" stroke="#bfdbfe" strokeWidth="1.2"/>
      <g className="cfo-org2"><rect x="250" y="186" width="42" height="10" rx="3" fill="#1d4ed8" opacity="0.5"/><text x="271" y="194" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="system-ui,sans-serif">Finance</text></g>
      <g className="cfo-org3"><rect x="320" y="186" width="42" height="10" rx="3" fill="#1d4ed8" opacity="0.5"/><text x="341" y="194" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="system-ui,sans-serif">Strategy</text></g>
    </svg>
  );
}

// ─── Year-End Accounts ────────────────────────────────────────────────────────

export function IllustrationYearEnd() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes ye-check  { from{stroke-dashoffset:90} to{stroke-dashoffset:0} }
        @keyframes ye-stamp  { 0%{opacity:0;transform:scale(1.5) rotate(-10deg)} 70%{transform:scale(0.95) rotate(2deg)} 100%{opacity:1;transform:scale(1) rotate(0deg)} }
        @keyframes ye-appear { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ye-glow   { 0%,100%{opacity:0.25} 50%{opacity:0.7} }
        @keyframes ye-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }

        .ye-glow{animation:ye-glow 3s ease-in-out infinite}
        .ye-check{stroke-dasharray:90;stroke-dashoffset:90;animation:ye-check 1.2s .5s ease-out both}
        .ye-stamp{animation:ye-stamp .6s 2s ease-out both;opacity:0}
        .ye-doc1{animation:ye-appear .5s .2s ease-out both}
        .ye-doc2{animation:ye-appear .5s .5s ease-out both}
        .ye-doc3{animation:ye-appear .5s .8s ease-out both}
        .ye-cal{animation:ye-float 4s ease-in-out infinite}
      `}</style>

      <circle className="ye-glow" cx="190" cy="122" r="92" fill="#bfdbfe"/>
      <circle cx="190" cy="122" r="82" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2"/>
      <circle cx="190" cy="122" r="70" fill="white" stroke="#bfdbfe" strokeWidth="1"/>
      <path className="ye-check" d="M 148 124 l 28 28 58-58"
        stroke="#1d4ed8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="190" y="178" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9ca3af" fontFamily="system-ui,sans-serif">Year-end 2025</text>

      {/* Calendar top-left */}
      <g className="ye-cal">
        <rect x="12" y="18" width="100" height="86" rx="10" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
        <rect x="12" y="18" width="100" height="26" rx="10" fill="#1d4ed8"/>
        <rect x="12" y="32" width="100" height="12" fill="#1d4ed8"/>
        <text x="62" y="34" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">DEC 2025</text>
        {["29","30","31"].map((d,i) => (
          <g key={d}>
            <circle cx={30+i*30} cy={76} r={d==="31"?12:9} fill={d==="31"?"#1d4ed8":"#eff6ff"} stroke={d==="31"?"#1d4ed8":"#bfdbfe"} strokeWidth="1"/>
            <text x={30+i*30} y={79.5} textAnchor="middle" fontSize={d==="31"?"9":"8"} fontWeight="700" fill={d==="31"?"white":"#374151"} fontFamily="system-ui,sans-serif">{d}</text>
          </g>
        ))}
        <text x="62" y="99" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Year-End</text>
      </g>

      {/* Document stack bottom-right */}
      <g className="ye-doc1"><rect x="274" y="166" width="98" height="74" rx="8" fill="#f0f7ff" stroke="#bfdbfe" strokeWidth="1" transform="rotate(-6,323,203)"/></g>
      <g className="ye-doc2"><rect x="274" y="164" width="98" height="74" rx="8" fill="#f8faff" stroke="#bfdbfe" strokeWidth="1" transform="rotate(-2,323,201)"/></g>
      <g className="ye-doc3">
        <rect x="276" y="162" width="98" height="74" rx="8" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
        <rect x="286" y="174" width="62" height="5" rx="2.5" fill="#bfdbfe"/>
        <rect x="286" y="184" width="50" height="4" rx="2" fill="#e0eaff"/>
        <rect x="286" y="193" width="56" height="4" rx="2" fill="#e0eaff" opacity="0.7"/>
        <g className="ye-stamp">
          <rect x="278" y="208" width="88" height="20" rx="4" fill="none" stroke="#22c55e" strokeWidth="2.5" transform="rotate(-5,322,218)"/>
          <text x="322" y="221" textAnchor="middle" fontSize="9" fontWeight="800" fill="#22c55e" fontFamily="system-ui,sans-serif" transform="rotate(-5,322,218)">ACCOUNTS FILED</text>
        </g>
      </g>
    </svg>
  );
}

// ─── Ecommerce Finance ────────────────────────────────────────────────────────

export function IllustrationEcommerce() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes ec-bar   { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes ec-line  { from{stroke-dashoffset:620} to{stroke-dashoffset:0} }
        @keyframes ec-order { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
        @keyframes ec-dot   { 0%,100%{r:4} 50%{r:7} }

        .ec-b1{transform-origin:36px 200px;animation:ec-bar .7s .3s ease-out both}
        .ec-b2{transform-origin:62px 200px;animation:ec-bar .7s .45s ease-out both}
        .ec-b3{transform-origin:88px 200px;animation:ec-bar .7s .6s ease-out both}
        .ec-b4{transform-origin:114px 200px;animation:ec-bar .7s .75s ease-out both}
        .ec-b5{transform-origin:140px 200px;animation:ec-bar .7s .9s ease-out both}
        .ec-b6{transform-origin:166px 200px;animation:ec-bar .7s 1.05s ease-out both}
        .ec-line{stroke-dasharray:620;stroke-dashoffset:620;animation:ec-line 2s .4s ease-in-out both}
        .ec-o1{animation:ec-order .5s .2s ease-out both}
        .ec-o2{animation:ec-order .5s .6s ease-out both}
        .ec-o3{animation:ec-order .5s 1.0s ease-out both}
        .ec-o4{animation:ec-order .5s 1.4s ease-out both}
        .ec-o5{animation:ec-order .5s 1.8s ease-out both}
        .ec-dot{animation:ec-dot 2s 2s ease-in-out infinite}
      `}</style>

      {/* Revenue chart */}
      <rect x="10" y="10" width="226" height="240" rx="14" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="10" y="10" width="226" height="30" rx="14" fill="#eff6ff"/>
      <rect x="10" y="28" width="226" height="12" fill="#eff6ff"/>
      <text x="26" y="29" fontSize="8" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">REVENUE</text>
      <rect x="188" y="17" width="38" height="13" rx="6.5" fill="#dcfce7"/>
      <text x="207" y="27" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#16a34a" fontFamily="system-ui,sans-serif">↑ 32%</text>
      <text x="26" y="78" fontSize="30" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">$142K</text>
      <text x="26" y="94" fontSize="10" fill="#6b7280" fontFamily="system-ui,sans-serif">this month · Apr 2026</text>

      <rect x="18" y="106" width="210" height="88" rx="6" fill="#f8faff"/>
      <line x1="26" y1="192" x2="220" y2="192" stroke="#bfdbfe" strokeWidth="0.8"/>
      {([
        {cls:"ec-b1",x:22,h:30},{cls:"ec-b2",x:48,h:46},{cls:"ec-b3",x:74,h:38},
        {cls:"ec-b4",x:100,h:58},{cls:"ec-b5",x:126,h:50},{cls:"ec-b6",x:152,h:72,hi:true},
      ] as {cls:string;x:number;h:number;hi?:boolean}[]).map((b) => (
        <rect key={b.x} className={b.cls} x={b.x} y={192-b.h} width="20" height={b.h} rx="3" fill={b.hi?"#1d4ed8":"#bfdbfe"}/>
      ))}
      <polyline className="ec-line" points="32,162 58,146 84,154 110,132 136,142 162,118"
        stroke="#0a84ff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle className="ec-dot" cx="162" cy="118" r="4" fill="#0a84ff" stroke="white" strokeWidth="2"/>
      {["Oct","Nov","Dec","Jan","Feb","Mar"].map((m,i) => (
        <text key={m} x={32+i*26} y="205" textAnchor="middle" fontSize="7" fill="#9ca3af" fontFamily="system-ui,sans-serif">{m}</text>
      ))}

      {/* Platform split */}
      {[{x:20,l:"Shopify",v:"$94K"},{x:90,l:"Amazon",v:"$31K"},{x:160,l:"Etsy",v:"$17K"}].map((p) => (
        <g key={p.l}>
          <text x={p.x} y="226" fontSize="7.5" fill="#6b7280" fontFamily="system-ui,sans-serif">{p.l}</text>
          <text x={p.x} y="242" fontSize="10" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{p.v}</text>
        </g>
      ))}

      {/* Order feed */}
      <rect x="248" y="10" width="124" height="240" rx="14" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="248" y="10" width="124" height="30" rx="14" fill="#eff6ff"/>
      <rect x="248" y="28" width="124" height="12" fill="#eff6ff"/>
      <text x="262" y="29" fontSize="7.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1" fontFamily="system-ui,sans-serif">ORDERS</text>
      {([
        {cls:"ec-o1",y:50,label:"Order #4821",amt:"$249",status:"Paid",sc:"#22c55e",bg:"#dcfce7"},
        {cls:"ec-o2",y:92,label:"Order #4820",amt:"$189",status:"Shipped",sc:"#0a84ff",bg:"#eff6ff"},
        {cls:"ec-o3",y:134,label:"Order #4819",amt:"$415",status:"Fulfilled",sc:"#22c55e",bg:"#dcfce7"},
        {cls:"ec-o4",y:176,label:"Order #4818",amt:"$88",status:"Paid",sc:"#22c55e",bg:"#dcfce7"},
        {cls:"ec-o5",y:218,label:"Order #4817",amt:"$302",status:"Shipped",sc:"#0a84ff",bg:"#eff6ff"},
      ] as {cls:string;y:number;label:string;amt:string;status:string;sc:string;bg:string}[]).map((o) => (
        <g key={o.y} className={o.cls}>
          <rect x="256" y={o.y} width="108" height="34" rx="8" fill="#f8faff"/>
          <text x="264" y={o.y+13} fontSize="8.5" fontWeight="600" fill="#374151" fontFamily="system-ui,sans-serif">{o.label}</text>
          <text x="264" y={o.y+27} fontSize="10" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{o.amt}</text>
          <rect x="300" y={o.y+17} width="56" height="12" rx="6" fill={o.bg}/>
          <text x="328" y={o.y+26.5} textAnchor="middle" fontSize="7" fontWeight="600" fill={o.sc} fontFamily="system-ui,sans-serif">{o.status}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Startup Finance ──────────────────────────────────────────────────────────

export function IllustrationStartupFinance() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes sf-curve  { from{stroke-dashoffset:720} to{stroke-dashoffset:0} }
        @keyframes sf-appear { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes sf-pulse  { 0%,100%{r:5} 50%{r:8.5} }

        .sf-curve{stroke-dasharray:720;stroke-dashoffset:720;animation:sf-curve 2.2s .3s ease-in-out both}
        .sf-m1{animation:sf-appear .4s .6s ease-out both}
        .sf-m2{animation:sf-appear .4s 1.0s ease-out both}
        .sf-m3{animation:sf-appear .4s 1.4s ease-out both}
        .sf-c1{animation:sf-appear .5s .4s ease-out both}
        .sf-c2{animation:sf-appear .5s .7s ease-out both}
        .sf-c3{animation:sf-appear .5s 1.0s ease-out both}
        .sf-dot{animation:sf-pulse 2s 2.2s ease-in-out infinite}
      `}</style>

      {/* Growth chart */}
      <rect x="10" y="10" width="250" height="196" rx="14" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="10" y="10" width="250" height="30" rx="14" fill="#eff6ff"/>
      <rect x="10" y="28" width="250" height="12" fill="#eff6ff"/>
      <text x="28" y="30" fontSize="8" fontWeight="700" fill="#1d4ed8" letterSpacing="1.2" fontFamily="system-ui,sans-serif">GROWTH TRAJECTORY</text>
      <rect x="18" y="48" width="234" height="146" rx="6" fill="#f8faff"/>
      {[82,116,152].map(y => (
        <line key={y} x1="28" y1={y} x2="244" y2={y} stroke="#e0eaff" strokeWidth="0.7"/>
      ))}
      <path className="sf-curve"
        d="M 32 184 C 52 181 82 176 104 174 C 134 171 154 166 174 156 C 194 144 214 122 234 92 C 242 78 246 64 248 54"
        stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M 248 54 C 252 44 256 32 260 22"
        stroke="#0a84ff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 3" fill="none" opacity="0.6"/>
      <circle className="sf-dot" cx="248" cy="54" r="5" fill="#1d4ed8" stroke="white" strokeWidth="2"/>
      {/* Milestones */}
      <g className="sf-m1">
        <circle cx="82" cy="174" r="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.3"/>
        <line x1="82" y1="166" x2="82" y2="174" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 1"/>
        <text x="82" y="162" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#92400e" fontFamily="system-ui,sans-serif">Seed</text>
      </g>
      <g className="sf-m2">
        <circle cx="164" cy="156" r="6" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.3"/>
        <line x1="164" y1="148" x2="164" y2="156" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="2 1"/>
        <text x="164" y="144" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Series A</text>
      </g>
      <g className="sf-m3">
        <circle cx="232" cy="92" r="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.3"/>
        <line x1="232" y1="84" x2="232" y2="92" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 1"/>
        <text x="232" y="80" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#16a34a" fontFamily="system-ui,sans-serif">Series B</text>
      </g>
      {["Q1","Q2","Q3","Q4","Q1","Q2","Q3"].map((q,i) => (
        <text key={i} x={38+i*30} y="202" textAnchor="middle" fontSize="7.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">{q}</text>
      ))}

      {/* Right metric cards */}
      <g className="sf-c1">
        <rect x="272" y="10" width="100" height="76" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
        <text x="285" y="30" fontSize="7" fill="#6b7280" fontFamily="system-ui,sans-serif">Runway</text>
        <text x="285" y="52" fontSize="22" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">14mo</text>
        <rect x="285" y="58" width="74" height="14" rx="4" fill="#eff6ff"/>
        <rect x="285" y="58" width="54" height="14" rx="4" fill="#1d4ed8" opacity="0.7"/>
        <text x="322" y="68" textAnchor="middle" fontSize="7" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">14 / 18 mo</text>
      </g>
      <g className="sf-c2">
        <rect x="272" y="96" width="100" height="56" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
        <text x="285" y="114" fontSize="7" fill="#6b7280" fontFamily="system-ui,sans-serif">Burn rate</text>
        <text x="285" y="136" fontSize="20" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">$42K</text>
        <text x="346" y="136" fontSize="9" fontWeight="600" fill="#22c55e" fontFamily="system-ui,sans-serif">↓8%</text>
      </g>
      <g className="sf-c3">
        <rect x="272" y="162" width="100" height="56" rx="12" fill="#1d4ed8"/>
        <text x="285" y="180" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="system-ui,sans-serif">ARR</text>
        <text x="285" y="202" fontSize="20" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">$1.7M</text>
        <text x="346" y="202" fontSize="9" fontWeight="600" fill="#93c5fd" fontFamily="system-ui,sans-serif">↑42%</text>
      </g>

      {/* Bottom KPI strip */}
      <rect x="10" y="216" width="250" height="40" rx="10" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
      {[{x:28,l:"MoM Growth",v:"+14%"},{x:112,l:"Gross Margin",v:"68%"},{x:196,l:"LTV:CAC",v:"4.2×"}].map((k) => (
        <g key={k.l}>
          <text x={k.x} y="230" fontSize="6.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">{k.l}</text>
          <text x={k.x} y="246" fontSize="11" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{k.v}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Payroll ──────────────────────────────────────────────────────────────────

export function IllustrationPayroll() {
  return (
    <svg viewBox="0 0 380 260" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pr-row     { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
        @keyframes pr-check   { 0%{stroke-dashoffset:22} 100%{stroke-dashoffset:0} }
        @keyframes pr-confirm { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes pr-dot     { 0%,100%{r:4} 50%{r:7.5} }
        @keyframes pr-float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }

        .pr-r1{animation:pr-row .4s .3s ease-out both}
        .pr-r2{animation:pr-row .4s .55s ease-out both}
        .pr-r3{animation:pr-row .4s .8s ease-out both}
        .pr-r4{animation:pr-row .4s 1.05s ease-out both}
        .pr-r5{animation:pr-row .4s 1.3s ease-out both}
        .pr-c1{stroke-dasharray:22;stroke-dashoffset:22;animation:pr-check .4s .7s ease-out both}
        .pr-c2{stroke-dasharray:22;stroke-dashoffset:22;animation:pr-check .4s .95s ease-out both}
        .pr-c3{stroke-dasharray:22;stroke-dashoffset:22;animation:pr-check .4s 1.2s ease-out both}
        .pr-confirm{animation:pr-confirm .6s 1.9s ease-out both;opacity:0}
        .pr-dot{animation:pr-dot 1.5s ease-in-out infinite}
        .pr-cal{animation:pr-float 4s ease-in-out infinite}
      `}</style>

      {/* Payroll list */}
      <rect x="10" y="10" width="218" height="240" rx="14" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
      <rect x="10" y="10" width="218" height="32" rx="14" fill="#1d4ed8"/>
      <rect x="10" y="30" width="218" height="12" fill="#1d4ed8"/>
      <text x="24" y="30" fontSize="8.5" fontWeight="700" fill="white" letterSpacing="1" fontFamily="system-ui,sans-serif">PAYROLL RUN · APR 25</text>
      <text x="24" y="52" fontSize="7" fontWeight="700" fill="#9ca3af" letterSpacing="1" fontFamily="system-ui,sans-serif">EMPLOYEE</text>
      <text x="156" y="52" fontSize="7" fontWeight="700" fill="#9ca3af" letterSpacing="1" fontFamily="system-ui,sans-serif">AMOUNT</text>
      <line x1="14" y1="57" x2="224" y2="57" stroke="#e0eaff" strokeWidth="0.8"/>

      {([
        {cls:"pr-r1",ck:"pr-c1",y:70,name:"Sarah K.",amt:"$4,800",paid:true},
        {cls:"pr-r2",ck:"pr-c2",y:100,name:"James O.",amt:"$6,200",paid:true},
        {cls:"pr-r3",ck:"pr-c3",y:130,name:"Priya M.",amt:"$5,400",paid:true},
        {cls:"pr-r4",y:160,name:"Tom R.",amt:"$7,100",paid:false},
        {cls:"pr-r5",y:190,name:"Aisha B.",amt:"$4,600",paid:false},
      ] as {cls:string;ck?:string;y:number;name:string;amt:string;paid:boolean}[]).map((r) => (
        <g key={r.y} className={r.cls}>
          <line x1="14" y1={r.y+20} x2="224" y2={r.y+20} stroke="#e0eaff" strokeWidth="0.7" opacity="0.7"/>
          <circle cx="30" cy={r.y+8} r="10" fill={r.paid?"#dbeafe":"#f1f5f9"} stroke={r.paid?"#1d4ed8":"#e5e7eb"} strokeWidth="1.2"/>
          <circle cx="30" cy={r.y+5} r="4.5" fill={r.paid?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.7)"}/>
          <ellipse cx="30" cy={r.y+13} rx="7" ry="4.5" fill={r.paid?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.7)"}/>
          <text x="46" y={r.y+12} fontSize="9.5" fontWeight="600" fill={r.paid?"#374151":"#9ca3af"} fontFamily="system-ui,sans-serif">{r.name}</text>
          <text x="154" y={r.y+12} fontSize="10" fontWeight="700" fill={r.paid?"#0b1e3f":"#9ca3af"} fontFamily="system-ui,sans-serif">{r.amt}</text>
          <circle cx="206" cy={r.y+8} r="6.5"
            fill={r.paid?"#1d4ed8":"white"}
            stroke={r.paid?"#1d4ed8":"#bfdbfe"} strokeWidth="1.3"/>
          {r.paid && (
            <path d={`M${203} ${r.y+8}l2.5 2.5 4.5-4.5`}
              className={r.ck||""}
              stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </g>
      ))}

      <rect x="14" y="218" width="210" height="26" rx="7" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
      <text x="26" y="234" fontSize="9" fontWeight="600" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Total payroll</text>
      <text x="154" y="234" fontSize="11" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">$28,100</text>

      {/* Calendar */}
      <g className="pr-cal">
        <rect x="242" y="10" width="130" height="106" rx="12" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
        <rect x="242" y="10" width="130" height="28" rx="12" fill="#1d4ed8"/>
        <rect x="242" y="28" width="130" height="10" fill="#1d4ed8"/>
        <text x="307" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">APRIL 2026</text>
        {["M","T","W","T","F"].map((d,i) => (
          <text key={i} x={260+i*22} y="50" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#9ca3af" fontFamily="system-ui,sans-serif">{d}</text>
        ))}
        {[21,22,23,24,25].map((d,i) => {
          const isPay = d===25;
          return (
            <g key={d}>
              {isPay && <circle cx={260+i*22} cy={72} r="11" fill="#1d4ed8"/>}
              <text x={260+i*22} y={75.5} textAnchor="middle" fontSize="8.5" fill={isPay?"white":"#374151"} fontWeight={isPay?"700":"400"} fontFamily="system-ui,sans-serif">{d}</text>
            </g>
          );
        })}
        <text x="307" y="104" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Payroll Date</text>
      </g>

      {/* Transfer confirmation */}
      <g className="pr-confirm">
        <rect x="242" y="126" width="130" height="124" rx="12" fill="white" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="307" cy="162" r="22" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M 295 162 l 9 9 18-18" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="307" y="198" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">Payroll Sent!</text>
        <text x="307" y="214" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="system-ui,sans-serif">$28,100 processed</text>
        <text x="307" y="230" textAnchor="middle" fontSize="7.5" fill="#22c55e" fontFamily="system-ui,sans-serif">All transfers confirmed ✓</text>
        <circle className="pr-dot" cx="254" cy="140" r="4" fill="#22c55e"/>
      </g>
    </svg>
  );
}

// ─── Slug → Component map ─────────────────────────────────────────────────────

export const SERVICE_ILLUSTRATIONS: Record<string, React.ComponentType> = {
  "bookkeeping":        IllustrationBookkeeping,
  "accounting-tax":     IllustrationAccountingTax,
  "financial-analysis": IllustrationFinancialAnalysis,
  "cfo-advisory":       IllustrationCFOAdvisory,
  "year-end-accounts":  IllustrationYearEnd,
  "ecommerce":          IllustrationEcommerce,
  "startup-finance":    IllustrationStartupFinance,
  "payroll":            IllustrationPayroll,
};
