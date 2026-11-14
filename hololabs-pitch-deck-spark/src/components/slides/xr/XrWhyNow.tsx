import SlideLayout from "../SlideLayout";
import SourceNote from "./SourceNote";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bgAsset from "@/assets/slides/vr-03-glare.png.asset.json";

const bg = bgAsset.url;

const hololabsLogo = hololabsLogoAsset.url;

const signals = [
  {
    num: "01",
    title: "The sector is growing",
    desc: "Persistence Market Research indicates that the global location-based entertainment (LBE) market is set to grow from $3.97 billion in 2025 to approximately $20.47 billion by 2032 — a 26.4% CAGR.",
  },
  {
    num: "02",
    title: "The technology is at an inflection point",
    desc: "New processors provide greater standalone power than ever. Our partner Pico is soon releasing Swan, with high-resolution Micro-OLED displays and low-latency mixed reality at an affordable price point.",
  },
  {
    num: "03",
    title: "Audiences are responding",
    desc: "Sandbox VR passed $300 million in lifetime sales across 80+ locations in March 2026, up from $200 million a year earlier. Univrse VR LBE experiences have been viewed 3 million times.",
  },
];

export default function XrWhyNow() {
  return (
    <SlideLayout backgroundImage={bg} overlay="dark">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[190px] px-24">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          Market Opportunity
        </div>
        <h2 className="text-6xl font-bold text-foreground leading-tight mb-14 max-w-[1500px] animate-fade-up animate-fade-up-delay-1">
          There has never been a better time to make{" "}
          <span className="text-primary">virtual and mixed reality attractions</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {signals.map((s, i) => (
            <div
              key={s.num}
              className="bg-card/60 border border-border rounded-2xl p-9 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 2)}s`, minHeight: 340 }}
            >
              <div className="text-5xl font-bold text-primary/30 font-heading mb-4">{s.num}</div>
              <div className="text-3xl font-semibold text-foreground mb-4 leading-snug">{s.title}</div>
              <p className="text-xl text-muted-foreground text-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <SourceNote
        sources={[
          {
            label: "Fortune Business Insights",
            url: "https://www.fortunebusinessinsights.com/location-based-entertainment-market-110163",
          },
          {
            label: "Qualcomm",
            url: "https://www.qualcomm.com/news/releases/2023/09/qualcomm-launches-its-next-generation-xr-and-ar-platforms--enabl",
          },
          {
            label: "UploadVR",
            url: "https://www.uploadvr.com/pico-project-swan-official-display-compute-specs-announcement/",
          },
          { label: "Fever", url: "https://feverup.com/m/558113" },
          {
            label: "PR Newswire",
            url: "https://www.prnewswire.com/news-releases/sandbox-vr-accelerates-growth-hitting-300m-in-lifetime-sales-and-scaling-to-more-than-80-global-locations-continued-expansion-underway-through-2026-302726552.html",
          },
        ]}
      />


    </SlideLayout>
  );
}
