import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;
import bgAsset from "@/assets/slides/mixed-reality-floorplan.png.asset.json";
const bgImage = bgAsset.url;

export default function SlideInteractiveWalls() {
  return (
    <div className="slide-content relative w-full h-full bg-slide-dark overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}videos/flythrough-01.mp4`} type="video/mp4" />
      </video>
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[10px] left-[10px] w-72 z-40" style={{ filter: 'drop-shadow(3.6px 1.8px 3px rgba(0,0,0,0.75))' }} />

      <div className="relative z-10 flex h-full justify-end">
        <div className="w-[900px] flex flex-col justify-center px-16 mt-[480px] relative">
          <div
            className="absolute pointer-events-none"
            style={{
              top: -25,
              bottom: -25,
              left: -25,
              right: -25,
              background: "rgba(0,0,0,0.40)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 50px, black calc(100% - 50px), transparent 100%), linear-gradient(to bottom, transparent 0, black 50px, black calc(100% - 50px), transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent 0, black 50px, black calc(100% - 50px), transparent 100%), linear-gradient(to bottom, transparent 0, black 50px, black calc(100% - 50px), transparent 100%)",
              maskComposite: "intersect",
            }}
          />
          <div className="relative">
            <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
              Creative Studio
            </div>
            <h2 className="text-7xl font-bold text-foreground mb-4 leading-tight animate-fade-up animate-fade-up-delay-1">
              Mixed Reality Experience <span className="text-primary">Design</span>
            </h2>
            <p className="text-2xl text-muted-foreground text-body mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-2">
              <span className="text-primary font-semibold">Your brand</span> transformed into immersive multi-room worlds full of unique moments for your guests to interact with and experience your IP in unique and memorable ways. Interactive portals, transformative physical objects, motion and haptics — your new experience will be as unique as your IP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
