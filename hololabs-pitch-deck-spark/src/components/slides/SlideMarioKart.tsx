import SlideLayout from "./SlideLayout";
import marioKart from "@/assets/slides/mario-kart.jpg";
import universalLogo from "@/assets/slides/universal-creative-logo.png";
import mk1 from "@/assets/slides/mk1.jpg";
import mk2 from "@/assets/slides/mk2.jpg";
import theaAward from "@/assets/slides/thea-award.jpg";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;

export default function SlideMarioKart() {
  return (
    <SlideLayout backgroundImage={marioKart} overlay="left">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[10px] left-[10px] w-72 z-20" />
      <div className="flex h-full relative">
        {/* Left text column */}
        <div className="w-[880px] flex flex-col justify-center px-20">
          <div className="flex items-center gap-6 mb-5 animate-fade-up">
            <div className="text-primary text-6xl font-semibold tracking-widest uppercase">
              Feature Project
            </div>
            <img src={universalLogo} alt="Universal Creative" className="h-36 object-contain" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-up animate-fade-up-delay-1">
            Mario Kart: Koopa's Challenge
          </h2>
          <div className="text-3xl text-primary font-medium mb-6 animate-fade-up animate-fade-up-delay-2">
            Universal Studios — Osaka, Hollywood, Orlando
          </div>
          <p className="text-2xl text-muted-foreground text-body mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Hololabs developed interactive gameplay and audiovisual systems for the world's first major AR dark ride featuring real-time interaction.
          </p>

          {/* Invisible spacer preserves the original vertical centering of the text block (matches THEA banner footprint) */}
          <div className="invisible rounded-xl overflow-hidden" aria-hidden="true">
            <img src={theaAward} alt="" className="w-full h-auto rounded-xl" style={{ border: "3px solid transparent" }} />
          </div>
        </div>

        {/* THEA Award banner - aligned to bottom of right images */}
        <div
          className="absolute animate-fade-up animate-fade-up-delay-4 rounded-xl overflow-hidden"
          style={{ left: '80px', width: '720px', bottom: '124px' }}
        >
          <img src={theaAward} alt="THEA Award: Outstanding Achievement in Technical Innovation 2022" className="w-full h-auto rounded-xl" style={{ border: "3px solid hsl(var(--primary))" }} />
        </div>


        {/* Right image column */}
        <div className="flex-1 flex flex-col gap-4 justify-center pr-16 animate-fade-up animate-fade-up-delay-3">
          {/* Quote above images */}
          <div className="px-1 -translate-y-5">
            <blockquote className="text-2xl text-foreground text-body italic leading-snug">
              <span className="text-primary text-3xl mr-1">“</span>
              Hololabs is one of our go-to teams for both creative and technical challenges.
              <span className="text-primary text-3xl ml-1">”</span>
            </blockquote>
            <div className="mt-2 text-base text-muted-foreground text-body">
              <span className="font-semibold text-primary">Tim Tryzbiak</span> — Senior Director, Immersive Experiences, Universal Destinations &amp; Experiences
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "2px solid hsl(var(--primary))" }}>
            <img src={mk1} alt="AR headset" className="w-full h-[360px] object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "2px solid hsl(var(--primary))" }}>
            <img src={mk2} alt="Mario Kart ride" className="w-full h-[360px] object-cover" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
