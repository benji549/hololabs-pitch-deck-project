interface RoomDiagramProps {
  scale?: "sm" | "lg";
}

export default function RoomDiagram({ scale = "lg" }: RoomDiagramProps) {
  const isLg = scale === "lg";
  const width = isLg ? 1080 : 620;
  const height = isLg ? 400 : 230;

  const labelSize = isLg ? "text-3xl" : "text-xl";
  const timeSize = isLg ? "text-lg" : "text-xs";
  const outerDimSize = isLg ? "text-xl" : "text-sm";

  const zone =
    "relative flex flex-col items-center justify-center border border-primary/40 rounded-xl";

  return (
    <div className="flex flex-col items-center" style={{ width }}>
      <div className="flex items-stretch gap-4 w-full">
        {/* 8 m vertical label */}
        <div
          className={`flex items-center justify-center text-muted-foreground text-body ${outerDimSize}`}
          style={{ width: isLg ? 52 : 34 }}
        >
          <span style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>8 m</span>
        </div>

        <div
          className="relative flex-1 flex gap-3 p-4 rounded-2xl bg-slide-dark/70 border border-border"
          style={{ height }}
        >
          {/* VR left */}
          <div className={`${zone} bg-primary/10`} style={{ flex: 7.75 }}>
            <span className={`${labelSize} font-bold text-primary`}>VR</span>
            <span className={`${timeSize} text-muted-foreground text-body mt-1`}>20 min</span>
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-3" style={{ flex: 6.5 }}>
            <div className={`${zone} bg-secondary/60`} style={{ flex: 3.25 }}>
              <span
                className={`${labelSize} font-bold text-primary leading-tight text-center px-2`}
              >
                Motion Seats
              </span>
              <span className={`${timeSize} text-muted-foreground text-body mt-1`}>10 min</span>
            </div>
            <div className={`${zone} bg-primary/20`} style={{ flex: 4.75 }}>
              <span className={`${labelSize} font-bold text-primary`}>MR</span>
              <span className={`${timeSize} text-muted-foreground text-body mt-1`}>10 min</span>
            </div>
          </div>

          {/* VR right */}
          <div className={`${zone} bg-primary/10`} style={{ flex: 7.75 }}>
            <span className={`${labelSize} font-bold text-primary`}>VR</span>
            <span className={`${timeSize} text-muted-foreground text-body mt-1`}>20 min</span>
          </div>
        </div>
      </div>

      {/* 22 m horizontal label */}
      <div
        className={`text-muted-foreground text-body ${outerDimSize} mt-3`}
        style={{ marginLeft: isLg ? 52 : 34 }}
      >
        22 m
      </div>
    </div>
  );
}
