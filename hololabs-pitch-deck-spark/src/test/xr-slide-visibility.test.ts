import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync("src/components/slides/xrSlideData.ts", "utf8");
const visible = source.split("export const xrSlides: SlideData[] = [")[1]?.split("];", 1)[0] ?? "";
const hidden = source.split("export const hiddenXrSlides: SlideData[] = [")[1]?.split("];", 1)[0] ?? "";
const components = (value: string) => Array.from(value.matchAll(/component: (\w+)/g), (match) => match[1]);

describe("XR slide visibility", () => {
  it("hides original slide 10 while preserving it", () => {
    expect(components(visible)).not.toContain("XrFinancialProjections");
    expect(components(hidden)).toContain("XrFinancialProjections");
  });

  it.each(["XrWhyNow", "XrWhyProps", "XrCompetitorPositioning", "XrDesignConcept", "XrExecution"])(
    "hides original slides 14–18 while preserving %s",
    (component) => {
      expect(components(visible)).not.toContain(component);
      expect(components(hidden)).toContain(component);
    },
  );

  it("removes slide 3, the format mockup, from navigation", () => {
    expect(components(visible)).not.toContain("XrFormatMockup");
    expect(components(visible)[3]).toBe("XrRoomFlow");
  });

  it("inserts motion seats immediately after slide 2", () => {
    expect(components(visible)[1]).toBe("XrFormat");
    expect(components(visible)[2]).toBe("XrMotionSeats");
  });

  it("inserts IAAPA Europe immediately after slide 4", () => {
    expect(components(visible)[3]).toBe("XrRoomFlow");
    expect(components(visible)[4]).toBe("XrIaapaEurope");
  });

  it("inserts market opportunities before the former slide 8", () => {
    expect(components(visible)[7]).toBe("XrMarketOpportunities");
    expect(components(visible)[8]).toBe("XrTeam");
  });

  it("keeps 13 visible slides ending with the trailer", () => {
    expect(components(visible)).toHaveLength(13);
    expect(components(visible).at(-1)).toBe("XrAbyssTrailer");
  });
});