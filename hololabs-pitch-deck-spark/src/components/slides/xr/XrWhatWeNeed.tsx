import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import { partnerModel } from "./partnerModel";
import bgAsset from "@/assets/slides/partner-model-background.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

export default function XrWhatWeNeed() {
  return (
    <SlideLayout backgroundImage={bgAsset.url} overlay="dark">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[150px] pb-[110px] px-12">
        <div className="text-primary text-lg font-semibold uppercase mb-4 animate-fade-up">
          Partner model
        </div>
        <h2 className="text-5xl font-bold text-foreground leading-tight mb-12 animate-fade-up animate-fade-up-delay-1">
          Several parties split the risk.<br />
          Fair contributions and returns.
        </h2>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0 content-center items-stretch">
          {partnerModel.map((partner, i) => (
            <section
              key={partner.role}
              className="flex flex-col justify-center bg-card/80 border border-border rounded-2xl px-10 py-8 animate-fade-up"
              style={{ animationDelay: `${0.3 + i * 0.15}s` }}
            >
              <div className="text-2xl font-semibold uppercase tracking-widest text-primary mb-3">{partner.role}</div>
              <h3 className="text-4xl font-semibold text-foreground mb-6">{partner.title}</h3>
              <div className="border-l-2 border-primary bg-primary/15 rounded-r-xl px-6 py-5">
                <div className="text-lg text-muted-foreground font-semibold uppercase tracking-wider mb-2">Contribution</div>
                <p className="text-3xl font-semibold text-foreground mb-2">{partner.contribution}</p>
                <p className="text-2xl text-muted-foreground leading-snug">{partner.details}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
