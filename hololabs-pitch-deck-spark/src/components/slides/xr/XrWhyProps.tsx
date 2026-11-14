import SlideLayout from "../SlideLayout";
import SourceNote from "./SourceNote";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bg from "@/assets/mr-01-2.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

const points = [
  {
    num: "01",
    title: "Increase perceived value",
    desc: "Physical environments make the experience feel more authentic, immersive, and premium, strengthening guest satisfaction, willingness to pay, recommendations, and repeat visits.",
  },
  {
    num: "02",
    title: "Create reusable infrastructure",
    desc: "A prop set does not have to support only one experience. The same laboratory, spaceship, mansion, or challenge environment can host new stories, missions, characters, and interactions over time.",
  },
  {
    num: "03",
    title: "Make the experience harder to copy",
    desc: "Combining custom physical elements with proprietary technology creates a more defensible product. Competitors must reproduce not only the concept, but the physical environment, hardware, software, and interactions between them.",
  },
  {
    num: "04",
    title: "Turn the experience into marketing",
    desc: "Highly visual, tactile environments naturally create photo and video moments guests want to share, extending the experience into organic promotional content.",
  },
];

export default function XrWhyProps() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="dark">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[170px] px-24">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          Q: Why Mixed Reality with props?
        </div>
        <h2 className="text-5xl font-bold text-foreground leading-tight mb-12 max-w-[1600px] animate-fade-up animate-fade-up-delay-1">
          A: Because the props are not just decor. They increase the{" "}
          <span className="text-primary">value, defensibility, and marketability</span> of the experience.
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {points.map((p, i) => (
            <div
              key={p.num}
              className="bg-card/60 border border-border rounded-2xl p-8 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 2)}s`, minHeight: 230 }}
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-4xl font-bold text-primary/30 font-heading">{p.num}</span>
                <span className="text-3xl font-semibold text-foreground leading-snug">{p.title}</span>
              </div>
              <p className="text-xl text-muted-foreground text-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <SourceNote
        sources={[
          { label: "Building & Environment", url: "https://www.sciencedirect.com/science/article/abs/pii/S0360132305001460" },
          { label: "Journal of Retailing & Consumer Services", url: "https://www.sciencedirect.com/science/article/abs/pii/S0969698919312986" },
          { label: "Journal of Business Research", url: "https://www.sciencedirect.com/science/article/abs/pii/S026151770400127X" },
          { label: "PubMed 37217536", url: "https://pubmed.ncbi.nlm.nih.gov/37217536/" },
          { label: "Gensler Immersive Industry Report 2025", url: "https://www.gensler.com/gri/immersive-industry-report-2025" },
        ]}
      />
    </SlideLayout>
  );
}
