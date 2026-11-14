import SlideLayout from "../SlideLayout";
import bg from "@/assets/slides/themed-attractions.png.asset.json";
import chartAsset from "@/assets/slides/competitor-positioning-v3.png.asset.json";

const resources = [
  { label: "Zero Latency", url: "https://zerolatencyvr.com/en" },
  { label: "Sandbox VR", url: "https://sandboxvr.com/" },
  { label: "Excurio", url: "https://www.excurio.com/en/" },
  { label: "Interstellar Arc", url: "https://www.interstellararc.com/" },
  { label: "The Void VR", url: "https://www.instagram.com/voidvr/?hl=en" },
  {
    label: "War of the Worlds",
    url: "https://www.tripadvisor.ca/AttractionProductReview-g186338-d17807965-War_of_the_Worlds_The_Immersive_Experience-London_England.html",
  },
  {
    label: "Mario Kart: Bowser's Challenge",
    url: "https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/mario-kart-bowsers-challenge",
  },
  { label: "PortAventura – Ulum", url: "https://www.portaventuraworld.com/en/rides/ulum" },
];

export default function XrCompetitorPositioning() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="dark">
      <div className="w-full h-full flex flex-col px-16 pt-12 pb-24">
        <div className="text-primary text-xl font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Competitor Positioning
        </div>
        <div className="flex-1 min-h-0 flex items-center justify-center animate-fade-up animate-fade-up-delay-1">
          <img
            src={chartAsset.url}
            alt="Competitor positioning chart plotting attractions across physical to virtual and large and bespoke to compact and modular"
            className="max-w-full max-h-full object-contain rounded-2xl bg-background p-6"
          />
        </div>
        <div className="mt-4 animate-fade-up animate-fade-up-delay-2">
          <p className="text-muted-foreground/70 text-base tracking-wide">
            Resources:{" "}
            {resources.map((r, i) => (
              <span key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {r.label}
                </a>
                {i < resources.length - 1 && <span className="mx-1">·</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
