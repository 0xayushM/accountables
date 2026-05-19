import type { ComponentType } from "react";

export function SceneSvcBookkeeping() {
  return (
    <svg viewBox="0 0 220 160" width="100%" height="160" fill="none">
      <rect x="12" y="20" width="88" height="120" rx="4" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      <rect x="100" y="20" width="88" height="120" rx="4" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      <rect x="96" y="16" width="8" height="128" rx="3" fill="#1d4ed8"/>
      <text x="18" y="37" fontSize="6.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1" fontFamily="system-ui,sans-serif">DATE / DESC</text>
      <line x1="14" y1="41" x2="92" y2="41" stroke="#bfdbfe" strokeWidth="0.8"/>
      {[{y:54,label:"Rent Exp.",done:true},{y:68,label:"Payroll",done:true},{y:82,label:"COGS",done:true},{y:96,label:"Marketing",done:false},{y:110,label:"Utilities",done:false}].map((e) => (
        <g key={e.y}>
          <line x1="14" y1={e.y+8} x2="92" y2={e.y+8} stroke="#e0eaff" strokeWidth="0.7" opacity="0.8"/>
          <circle cx="22" cy={e.y} r="5.5" fill={e.done?"#1d4ed8":"white"} stroke={e.done?"#1d4ed8":"#bfdbfe"} strokeWidth="1.2"/>
          {e.done && <path d={`M${19} ${e.y}l2.5 2.5 4.5-4.5`} stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>}
          <text x="33" y={e.y+3.5} fontSize="8.5" fill={e.done?"#6b7280":"#374151"} fontFamily="system-ui,sans-serif">{e.label}</text>
        </g>
      ))}
      <text x="106" y="37" fontSize="6.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1" fontFamily="system-ui,sans-serif">AMOUNT / BAL.</text>
      <line x1="102" y1="41" x2="180" y2="41" stroke="#bfdbfe" strokeWidth="0.8"/>
      {[{y:54,a:"$4,200",b:"$142K"},{y:68,a:"$18,400",b:"$124K"},{y:82,a:"$32,100",b:"$92K"},{y:96,a:"$6,800",b:"$85K"},{y:110,a:"$1,200",b:"$83K"}].map((e) => (
        <g key={e.y}>
          <line x1="102" y1={e.y+8} x2="180" y2={e.y+8} stroke="#e0eaff" strokeWidth="0.7" opacity="0.8"/>
          <text x="106" y={e.y+3.5} fontSize="8.5" fill="#374151" fontFamily="system-ui,sans-serif">{e.a}</text>
          <text x="150" y={e.y+3.5} fontSize="8.5" fontWeight="600" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{e.b}</text>
        </g>
      ))}
      <rect x="104" y="126" width="70" height="14" rx="7" fill="#1d4ed8"/>
      <text x="139" y="135.5" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">Month End ✓</text>
    </svg>
  );
}

export function SceneSvcAPAR() {
  return (
    <svg viewBox="0 0 220 160" width="100%" height="160" fill="none">
      <rect x="8" y="24" width="66" height="88" rx="8" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      <text x="18" y="38" fontSize="7" fontWeight="700" fill="#1d4ed8" fontFamily="system-ui,sans-serif">INVOICE</text>
      <rect x="16" y="42" width="50" height="6" rx="3" fill="#bfdbfe"/>
      <line x1="16" y1="54" x2="68" y2="54" stroke="#e0eaff" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
      <line x1="16" y1="64" x2="60" y2="64" stroke="#e0eaff" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
      <line x1="16" y1="74" x2="64" y2="74" stroke="#e0eaff" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
      <rect x="16" y="86" width="50" height="14" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8"/>
      <text x="22" y="96" fontSize="7.5" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Total: $4,200</text>
      <path d="M 76 68 L 100 68" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 96 63 L 102 68 L 96 73" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="124" cy="68" r="18" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5"/>
      <circle cx="124" cy="68" r="12" fill="white"/>
      <text x="124" y="72.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1d4ed8" fontFamily="system-ui,sans-serif">$</text>
      <path d="M 144 68 L 164 68" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 160 63 L 166 68 L 160 73" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="168" y="44" width="44" height="48" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.3"/>
      <circle cx="190" cy="62" r="10" fill="#22c55e"/>
      <path d="M 186 62 l 3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="190" y="84" textAnchor="middle" fontSize="8" fontWeight="700" fill="#16a34a" fontFamily="system-ui,sans-serif">PAID</text>
      <text x="41" y="122" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="system-ui,sans-serif">Invoice</text>
      <text x="124" y="94" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="system-ui,sans-serif">Payment</text>
      <text x="190" y="100" textAnchor="middle" fontSize="8" fill="#16a34a" fontFamily="system-ui,sans-serif">Confirmed</text>
      <rect x="50" y="136" width="120" height="14" rx="7" fill="#1d4ed8"/>
      <text x="110" y="146.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">AP / AR Tracking</text>
    </svg>
  );
}

export function SceneSvcPayroll() {
  const weeks = [
    [null,null,1,2,3,4,5],
    [6,7,8,9,10,11,12],
    [13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26],
    [27,28,29,30,null,null,null],
  ];
  return (
    <svg viewBox="0 0 220 160" width="100%" height="160" fill="none">
      <rect x="8" y="12" width="132" height="122" rx="10" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      <rect x="8" y="12" width="132" height="28" rx="10" fill="#1d4ed8"/>
      <rect x="8" y="26" width="132" height="14" fill="#1d4ed8"/>
      <text x="74" y="30" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">APRIL 2026</text>
      {["M","T","W","T","F","S","S"].map((d,i) => (
        <text key={i} x={24+i*16} y="50" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#9ca3af" fontFamily="system-ui,sans-serif">{d}</text>
      ))}
      {weeks.map((row, ri) => row.map((day, di) => {
        if (!day) return null;
        const cx = 24+di*16, cy = 62+ri*14;
        const isDeadline = day===14||day===30, isPayroll = day===25;
        return (
          <g key={`${ri}-${di}`}>
            {isDeadline && <circle cx={cx} cy={cy} r="7" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>}
            {isPayroll && <circle cx={cx} cy={cy} r="7" fill="#1d4ed8"/>}
            <text x={cx} y={cy+3.5} textAnchor="middle" fontSize="7.5" fill={isPayroll?"white":isDeadline?"#92400e":"#374151"} fontWeight={isDeadline||isPayroll?"700":"400"} fontFamily="system-ui,sans-serif">{day}</text>
          </g>
        );
      }))}
      <path d="M 172 22 L 152 30 L 152 52 C 152 70 162 82 172 88 C 182 82 192 70 192 52 L 192 30 Z" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5"/>
      <path d="M 165 54 l 5 5 10-10" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="154" y="96" width="36" height="14" rx="7" fill="#1d4ed8"/>
      <text x="172" y="105.5" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">FILED</text>
      <circle cx="16" cy="144" r="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.8"/>
      <text x="25" y="147.5" fontSize="7.5" fill="#6b7280" fontFamily="system-ui,sans-serif">Tax deadline</text>
      <circle cx="88" cy="144" r="5" fill="#1d4ed8"/>
      <text x="97" y="147.5" fontSize="7.5" fill="#6b7280" fontFamily="system-ui,sans-serif">Payroll</text>
    </svg>
  );
}

export function SceneSvcPlanning() {
  return (
    <svg viewBox="0 0 220 160" width="100%" height="160" fill="none">
      <rect x="8" y="8" width="204" height="144" rx="12" fill="white" stroke="#bfdbfe" strokeWidth="1.3"/>
      <rect x="8" y="8" width="204" height="26" rx="12" fill="#eff6ff"/>
      <rect x="8" y="22" width="204" height="12" fill="#eff6ff"/>
      <text x="22" y="25" fontSize="7.5" fontWeight="700" fill="#1d4ed8" letterSpacing="1" fontFamily="system-ui,sans-serif">FINANCIAL PLANNING</text>
      {[{x:16,label:"Revenue",val:"$142K"},{x:80,label:"Cash",val:"$53K"},{x:144,label:"Runway",val:"14mo"}].map((k) => (
        <g key={k.label}>
          <rect x={k.x} y="42" width="56" height="30" rx="7" fill="#f8faff" stroke="#e0eaff" strokeWidth="1"/>
          <text x={k.x+6} y="54" fontSize="6.5" fill="#6b7280" fontFamily="system-ui,sans-serif">{k.label}</text>
          <text x={k.x+6} y="66" fontSize="11" fontWeight="700" fill="#0b1e3f" fontFamily="system-ui,sans-serif">{k.val}</text>
        </g>
      ))}
      <rect x="16" y="80" width="188" height="58" rx="6" fill="#f8faff"/>
      <line x1="24" y1="132" x2="196" y2="132" stroke="#bfdbfe" strokeWidth="0.8"/>
      {[{x:28,h:22},{x:52,h:32},{x:76,h:26},{x:100,h:40},{x:124,h:34}].map((b,i) => (
        <rect key={i} x={b.x} y={132-b.h} width="18" height={b.h} rx="2.5" fill="#1d4ed8" opacity="0.65"/>
      ))}
      {[{x:148,h:44},{x:172,h:50}].map((b,i) => (
        <rect key={i} x={b.x} y={132-b.h} width="18" height={b.h} rx="2.5" fill="#dbeafe" stroke="#0a84ff" strokeWidth="1" strokeDasharray="3 2"/>
      ))}
      <polyline points="37,110 61,100 85,106 109,92 133,98 157,88 181,82" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <polyline points="133,98 157,88 181,82" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 2"/>
      <circle cx="181" cy="82" r="3.5" fill="#0a84ff" stroke="white" strokeWidth="1.5"/>
      <rect x="158" y="68" width="44" height="12" rx="6" fill="#eff6ff" stroke="#0a84ff" strokeWidth="1"/>
      <text x="180" y="77.5" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0a84ff" fontFamily="system-ui,sans-serif">Forecast →</text>
    </svg>
  );
}

export function SceneSvcCFO() {
  return (
    <svg viewBox="0 0 220 160" width="100%" height="160" fill="none">
      <rect x="8" y="116" width="204" height="6" rx="3" fill="#e0eaff" opacity="0.6"/>
      <circle cx="66" cy="60" r="28" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5"/>
      <circle cx="66" cy="54" r="13" fill="rgba(255,255,255,0.92)"/>
      <ellipse cx="66" cy="74" rx="19" ry="11" fill="rgba(255,255,255,0.92)"/>
      <rect x="50" y="40" width="32" height="14" rx="7" fill="#1d4ed8"/>
      <text x="66" y="50" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">CFO</text>
      <rect x="110" y="18" width="100" height="92" rx="8" fill="white" stroke="#1d4ed8" strokeWidth="1.3"/>
      <rect x="116" y="26" width="88" height="54" rx="4" fill="#f8faff"/>
      {[{x:120,h:16},{x:134,h:26},{x:148,h:20},{x:162,h:34},{x:176,h:42}].map((b,i) => (
        <rect key={i} x={b.x} y={78-b.h} width="10" height={b.h} rx="2" fill="#1d4ed8" opacity={0.35+i*0.12}/>
      ))}
      <polyline points="125,62 139,52 153,58 167,44 181,36" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="181" cy="36" r="3.5" fill="#0a84ff" stroke="white" strokeWidth="1.5"/>
      <text x="160" y="94" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Business Growth</text>
      <line x1="140" y1="104" x2="128" y2="114" stroke="#bfdbfe" strokeWidth="1.3"/>
      <line x1="140" y1="104" x2="152" y2="114" stroke="#bfdbfe" strokeWidth="1.3"/>
      <line x1="168" y1="104" x2="180" y2="114" stroke="#bfdbfe" strokeWidth="1.3"/>
      <rect x="124" y="114" width="16" height="8" rx="3" fill="#1d4ed8" opacity="0.6"/>
      <rect x="144" y="114" width="16" height="8" rx="3" fill="#1d4ed8" opacity="0.6"/>
      <rect x="172" y="114" width="16" height="8" rx="3" fill="#1d4ed8" opacity="0.4"/>
      <rect x="18" y="98" width="72" height="14" rx="7" fill="#1d4ed8"/>
      <text x="54" y="107.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">Strategic Finance</text>
    </svg>
  );
}

export const SERVICE_ILLUSTRATIONS: Record<string, ComponentType> = {
  "bookkeeping":                  SceneSvcBookkeeping,
  "accounts-payable-receivable":  SceneSvcAPAR,
  "accounting-tax":               SceneSvcPayroll,
  "financial-analysis":           SceneSvcPlanning,
  "cfo-advisory":                 SceneSvcCFO,
};
