import SlideLayout from "../SlideLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import topdownAsset from "@/assets/slides/atrium-experience-layout-v2.png.asset.json";


import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bg from "@/assets/slides/vr-experience.jpg";

const hololabsLogo = hololabsLogoAsset.url;

const pillars = [
  {
    title: "Touch the virtual world",
    desc: "Important digital interactions are matched with physical props, controls, and surfaces.",
  },
  {
    title: "Impossible but real environments",
    desc: "Premium themed sets ground the experience in physical reality, while mixed reality headsets expand into impossible spaces and transformations that could not be built physically.",
  },
  {
    title: "Built for rotating content",
    desc: "Operators install the core infrastructure once. New stories arrive as digital content plus a package of physical props designed for that story.",
  },
  {
    title: "Fit for many venues",
    desc: "A relatively small footprint (176 m²) makes the format suitable for many different venues.",
  },
];

export default function XrFormat() {
  return (
    <SlideLayout backgroundImage={bg} overlay="left">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex h-full pt-[150px] pb-[100px] pl-12 pr-4 gap-6">
        <div className="w-[600px] shrink-0 flex flex-col min-h-0">
          <div className="text-primary text-base font-semibold tracking-widest uppercase mb-3 animate-fade-up">
            ATRIUM — A HYBRID REALITY ATTRACTION
          </div>
          <h2 className="text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-up animate-fade-up-delay-1">
            Atrium: An industry-leading&nbsp;
            <span className="text-primary">walk-through dark ride </span>
          </h2>

          <div className="mt-2 space-y-3.5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex items-start gap-4 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="text-lg text-muted-foreground text-body leading-relaxed">
                  <span className="text-foreground font-semibold">{p.title}: </span>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <Button asChild variant="link" className="self-start mt-4 px-0 text-lg">
            <a href="https://sketchfab.com/3d-models/atrium-a1814eb52f65441fbf058cc5e3b31cf7" target="_blank" rel="noopener noreferrer">
              Click here to open interactive model -&gt;
            </a>
          </Button>
          <Button asChild className="self-start mt-4 h-auto px-6 py-3 text-2xl font-semibold">
            <a href="https://blooloop.com/hololabs-studio-atrium/" target="_blank" rel="noopener noreferrer">
              Read about Atrium on blooloop
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="flex-1 min-w-0 flex items-center justify-center animate-fade-up animate-fade-up-delay-3">
          <img src={topdownAsset.url} alt="Atrium top-down layout render" className="w-full h-full object-contain rounded-2xl" />
        </div>



      </div>
    </SlideLayout>
  );
}
