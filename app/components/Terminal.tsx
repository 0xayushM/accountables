type Line = {
  prompt: string;
  text: string;
  kind?: "k" | "ok" | "w" | "d";
  tag?: string;
};

export function Terminal({
  title = "ai.close ~ april 2026",
  lines,
  minHeight = 360,
}: {
  title?: string;
  lines: Line[];
  minHeight?: number;
}) {
  const colorFor = (kind?: Line["kind"]) => {
    switch (kind) {
      case "ok":
        return "text-emerald-400";
      case "w":
        return "text-amber-300";
      case "k":
        return "text-white";
      case "d":
      default:
        return "text-white/55";
    }
  };
  const promptColor = (p: string) =>
    p === "✓" ? "text-emerald-400" : p === "⚠" ? "text-amber-300" : p === "$" ? "text-white" : "text-blue-300";

  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      style={{
        background: "#060a18",
        fontFamily: "var(--font-mono), 'JetBrains Mono', ui-monospace, monospace",
        minHeight,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="text-[11px] text-white/45 tracking-wide">{title}</div>
        <div className="w-12" />
      </div>

      {/* Body */}
      <div className="px-5 py-5 text-[12.5px] leading-[1.7]">
        {lines.map((l, i) => (
          <div key={i} className="flex items-start gap-3 py-[2px]">
            <span className={`${promptColor(l.prompt)} w-3 flex-shrink-0`}>
              {l.prompt}
            </span>
            <span className={colorFor(l.kind)}>{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
