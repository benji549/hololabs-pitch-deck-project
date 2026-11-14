import SlideLayout from "../SlideLayout";
import SourceNote from "./SourceNote";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bg from "@/assets/slides/free-roam-lbvr.jpg.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

const challenges = [
  {
    num: "01",
    title: "Throughput vs. footprint vs. interactivity",
    desc: "The challenge is not simply fitting more people into VR. It is increasing revenue per square metre without turning an interactive experience into a guided walkthrough.",
  },
  {
    num: "02",
    title: "Guests want multi-attraction visits",
    desc: "Rather than a single VR event, LBE consumers want a variety of experiences bundled together.",
  },
  {
    num: "03",
    title: "Poor VR impressions",
    desc: "Uneven quality of VR experiences harms guest perception. There are no set standards, and low-quality VR roams freely.",
  },
];

export default function XrChallenges() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="left">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full justify-center px-24 pt-[80px]">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          The Gap
        </div>
        <h2 className="text-6xl font-bold text-foreground leading-tight mb-12 max-w-[1200px] animate-fade-up animate-fade-up-delay-1">
          Challenges addressed by <span className="text-primary">Atrium</span>
        </h2>

        <div className="space-y-8 max-w-[1250px]">
          {challenges.map((c, i) => (
            <div
              key={c.num}
              className="flex items-start gap-8 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 2)}s` }}
            >
              <span className="text-5xl font-bold text-primary/30 font-heading leading-none pt-1">
                {c.num}
              </span>
              <div>
                <div className="text-3xl font-semibold text-foreground mb-2">{c.title}</div>
                <p className="text-xl text-muted-foreground text-body leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      <SourceNote
        inline
        sources={[
          {
            label: "Blooloop",
            url: "https://blooloop.com/technology/in-depth/lbe-vr-entertainment-market-issues/",
          },
          {
            label: "Zero Latency VR",
            url: "https://invest.zerolatencyvr.com/news-and-events/flexible-arena-sizes",
          },
          {
            label: "State of LBVR 2026 Report",
            url: "https://invest.zerolatencyvr.com/hubfs/THE%20STATE%20OF%20LBVR%202026%20REPORT.pdf",
          },
          { label: "ACM Digital Library", url: "https://dl.acm.org/doi/10.1145/3772318.3790724" },
          { label: "DBLP", url: "https://dblp.org/rec/conf/icict/PeinlW21.html" },
        ]}
      />
      </div>




    </SlideLayout>
  );
}
