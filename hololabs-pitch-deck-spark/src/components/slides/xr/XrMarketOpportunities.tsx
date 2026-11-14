import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import marketOpportunitiesAsset from "@/assets/slides/market-opportunities.png.asset.json";
import { ArrowUpRight } from "lucide-react";

export default function XrMarketOpportunities() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogoAsset.url} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />
      <div className="flex flex-col h-full pt-[150px] pb-[110px] px-12 gap-6">
        <h2 className="text-5xl font-bold text-foreground leading-tight animate-fade-up">
          Market &amp; <span className="text-primary">Opportunities</span>
        </h2>
        <div className="grid grid-cols-[1.15fr_1fr] gap-10 flex-1 min-h-0 items-center animate-fade-up animate-fade-up-delay-1">
          <div className="h-full min-h-0 flex flex-col items-center justify-center gap-4">
            <div className="flex-1 min-h-0 w-full flex items-center justify-center">
              <img
                src={marketOpportunitiesAsset.url}
                alt="Market positioning chart comparing physical and virtual attractions, and large bespoke versus compact modular formats, with Atrium in the physical, compact and modular quadrant"
                className="h-full max-w-full object-contain rounded-2xl"
              />
            </div>
            <h3 className="text-3xl font-semibold text-foreground shrink-0">Competition and Positioning</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-semibold text-foreground">Market Size &amp; Growth</h3>
              <p className="mt-2 text-xl text-muted-foreground">Location-based virtual reality</p>
            </div>
            <dl className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-border bg-card/80 p-4">
                <dd className="text-3xl font-bold text-primary mb-2">US$2.76B</dd>
                <dt className="text-lg text-muted-foreground">Global market, 2026</dt>
              </div>
              <div className="rounded-lg border border-border bg-card/80 p-4">
                <dd className="text-3xl font-bold text-primary mb-2">US$10.69B</dd>
                <dt className="text-lg text-muted-foreground">Forecast for 2031</dt>
              </div>
              <div className="rounded-lg border border-border bg-card/80 p-4">
                <dd className="text-3xl font-bold text-primary mb-2">~31%</dd>
                <dt className="text-lg text-muted-foreground">Annual growth, 2026–31</dt>
              </div>
            </dl>
            <div className="space-y-4 text-xl leading-relaxed text-foreground">
              <p><strong className="text-primary">Strong consumer interest:</strong> In a 2026 survey of 2,386 consumers across five countries, 93% expressed interest in VR entertainment, while 78% preferred venues offering VR alongside other attractions</p>
              <p><strong className="text-primary">Technological advancement:</strong> More affordable VR hardware, mixed reality, motion tracking, and multisensory effects are expanding creative possibilities.</p>
              <p><strong className="text-primary">Operator demand:</strong> Entertainment venues, shopping malls, resorts, and cultural institutions are seeking flexible attractions that increase foot traffic, dwell time, and revenue opportunities.</p>
            </div>
            <div className="border-t border-border pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-lg">
              <span className="text-muted-foreground">Sources:</span>
              {[
                { label: "Mordor Intelligence", url: "https://www.mordorintelligence.com/industry-reports/location-based-virtual-reality-vr-market" },
                { label: "Zero Latency VR", url: "https://invest.zerolatencyvr.com/news-and-events/the-state-of-location-based-vr-2026-is-here" },
                { label: "Grand View Research", url: "https://www.grandviewresearch.com/industry-analysis/immersive-location-based-entertainment-market-report" },
              ].map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
                  {source.label} <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}