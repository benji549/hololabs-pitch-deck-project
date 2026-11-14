import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

// Linear ramp to the 24-month balances from the ROI model
const ANTICIPATED_END = 3_615_698;
const PESSIMISTIC_END = 1_389_237;
const START = -300_000;

// --- simple SVG line chart geometry ---
const W = 640;
const H = 340;
const PAD = { top: 12, right: 16, bottom: 28, left: 96 };
const MIN_Y = START;
const MAX_Y = ANTICIPATED_END;
const x = (m: number) => PAD.left + ((W - PAD.left - PAD.right) * m) / 24;
const y = (v: number) =>
  PAD.top + (H - PAD.top - PAD.bottom) * (1 - (v - MIN_Y) / (MAX_Y - MIN_Y));
const money = (v: number) =>
  v < 0 ? `$ (${Math.abs(v).toLocaleString()})` : `$ ${v.toLocaleString()}`;
const yTicks = [MIN_Y, 0, 1_000_000, 2_000_000, 3_000_000, MAX_Y];
const xTicks = [5, 10, 15, 20];

const rows: { label: string; note?: string; pct?: string; value: string }[] = [
  { label: "Atrium CapEx", value: "$ (196,400)" },
  { label: "Production CapEx", value: "$ (61,500)" },
  { label: "OpEx (2 years)", value: "$ (950,400)" },
  {
    label: "Anticipated Revenue",
    note: "based on utilization %, $40 USD ticket",
    pct: "65%",
    value: "$ 6,029,997",
  },
  { label: "Pessimistic Revenue", pct: "35%", value: "$ 3,246,921" },
  { label: "License fee (Anticipated)", pct: "20%", value: "$ (1,205,999)" },
  { label: "License fee (Pessimistic)", pct: "20%", value: "$ (649,384)" },
];

const assumptions = [
  "Operating hours per day: 10",
  "Operating days per week: 6",
  "Blended ticket price: $40",
  "Average ancillary revenue per guest: $2",
  "COGS: 35%",
];

export default function XrFinancialProjections() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="h-full px-16 pt-[110px] pb-24 flex flex-col min-h-0">
        <div className="text-primary text-base font-semibold tracking-widest uppercase mb-2 animate-fade-up">
          Financial Projections
        </div>
        <h2 className="text-4xl font-bold text-foreground leading-tight mb-6 animate-fade-up animate-fade-up-delay-1">
          ROI model for a <span className="text-primary">third-party venue</span>
        </h2>

        <div className="grid grid-cols-[55%_45%] gap-10 flex-1 min-h-0 animate-fade-up animate-fade-up-delay-2">
          {/* Chart */}
          <div className="flex flex-col min-h-0">
            <div className="flex items-center gap-8 mb-3 text-base text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" /> Anticipated
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive" /> Pessimistic
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                {yTicks.map((t) => (
                  <g key={t}>
                    <line
                      x1={PAD.left}
                      x2={W - PAD.right}
                      y1={y(t)}
                      y2={y(t)}
                      stroke="hsl(var(--border))"
                      strokeOpacity={t === 0 ? 0.8 : 0.3}
                    />
                    <text
                      x={PAD.left - 8}
                      y={y(t) + 4}
                      textAnchor="end"
                      fontSize="12"
                      fill="hsl(var(--muted-foreground))"
                    >
                      {money(t)}
                    </text>
                  </g>
                ))}
                {xTicks.map((m) => (
                  <text
                    key={m}
                    x={x(m)}
                    y={H - 8}
                    textAnchor="middle"
                    fontSize="12"
                    fill="hsl(var(--muted-foreground))"
                  >
                    {`M${m}`}
                  </text>
                ))}
                <line
                  x1={x(0)}
                  y1={y(START)}
                  x2={x(24)}
                  y2={y(ANTICIPATED_END)}
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                />
                <line
                  x1={x(0)}
                  y1={y(START)}
                  x2={x(24)}
                  y2={y(PESSIMISTIC_END)}
                  stroke="hsl(var(--destructive))"
                  strokeWidth={3}
                />
              </svg>
            </div>
          </div>

          {/* Table + assumptions */}
          <div className="flex flex-col min-h-0 gap-4">
            <div className="rounded-2xl border border-border overflow-hidden">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[1fr_60px_140px] items-center gap-2 px-4 py-2 border-b border-border last:border-b-0"
                >
                  <div className="text-foreground text-base font-semibold leading-tight">
                    {r.label}
                    {r.note && (
                      <div className="text-xs font-normal text-muted-foreground">{r.note}</div>
                    )}
                  </div>
                  <div className="text-primary text-sm text-center">{r.pct ?? ""}</div>
                  <div className="text-foreground text-base text-right">{r.value}</div>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_140px] items-center gap-2 px-4 py-3 bg-primary/10 border-t border-primary/30">
                <div className="text-foreground text-base font-semibold">
                  Balance after 2 years (anticipated) — 65%
                </div>
                <div className="text-primary text-lg font-bold text-right">$3,615,698</div>
              </div>
              <div className="grid grid-cols-[1fr_140px] items-center gap-2 px-4 py-3 bg-primary/10 border-t border-primary/20">
                <div className="text-foreground text-base font-semibold">
                  Balance after 2 years (pessimistic) — 35%
                </div>
                <div className="text-primary text-lg font-bold text-right">$1,389,237</div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-border px-4 py-3">
              <ul className="text-sm text-muted-foreground space-y-1">
                {assumptions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
