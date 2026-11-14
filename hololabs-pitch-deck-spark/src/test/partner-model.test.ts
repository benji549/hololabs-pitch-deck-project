import { describe, expect, it } from "vitest";
import { partnerModel } from "../components/slides/xr/partnerModel";

describe("Partner model from PDF page 11", () => {
  it("gives the licensor 12% and $20,218 monthly per venue", () => {
    expect(partnerModel.find(p => p.role === "licensor")).toMatchObject({ ticketShare: 12, monthlyReturn: 20218, net: false });
  });
  it("gives the host 70% and $58,867 net monthly per venue", () => {
    expect(partnerModel.find(p => p.role === "host")).toMatchObject({ ticketShare: 70, monthlyReturn: 58867, net: true });
  });
  it("gives the platform 18% and $30,326 monthly per venue", () => {
    expect(partnerModel.find(p => p.role === "platform")).toMatchObject({ ticketShare: 18, monthlyReturn: 30326, net: false });
  });
});