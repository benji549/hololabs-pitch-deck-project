import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;
import abyssLogo from "@/assets/slides/abyss-logo.png";
import spawnpointLogo from "@/assets/slides/spawnpoint-logo.png";
import synthesisLogoAsset from "@/assets/slides/synthesis-logo.png.asset.json";
const synthesisLogo = synthesisLogoAsset.url;
import vexLogo from "@/assets/slides/vex-logo.png";
import theParkLogo from "@/assets/slides/thepark-logo.png";

export default function SlideVR() {
  return (
    <div className="slide-content relative w-full h-full bg-slide-dark overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}videos/sizzle-reel.mp4`} type="video/mp4" />
      </video>

      {/* Left gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(210 20% 8% / 0.92) 0%, hsl(210 20% 8% / 0.7) 30%, transparent 55%)",
        }}
      />

      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[10px] left-[10px] w-72 z-20" />
      <div className="relative z-10 flex h-full">
        <div className="w-[920px] flex flex-col justify-center px-20">
          <h2 className="text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up animate-fade-up-delay-1">
            Free-Roam LBE VR
          </h2>
          <p className="text-2xl text-muted-foreground text-body mb-10 leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Multiplayer, interactive, spatially-scaled LBE VR experiences that bring groups together in shared virtual worlds.
          </p>
          <div className="grid grid-cols-2 gap-5 animate-fade-up animate-fade-up-delay-3">
            {[
              { label: "Multiplayer", desc: "Synchronized group experiences" },
              { label: "Spatial Tracking", desc: "Full room-scale freedom" },
              { label: "Interactive", desc: "Real-time player agency" },
              { label: "Scalable", desc: "Flexible venue configurations" },
            ].map((item) => (
              <div key={item.label} className="bg-secondary/60 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="text-primary font-semibold text-2xl mb-2">{item.label}</div>
                <div className="text-muted-foreground text-lg text-body">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 mt-8 animate-fade-up animate-fade-up-delay-4">
            <div className="flex justify-center items-center mt-[30px]">
              <img src={abyssLogo} alt="Abyss Vault" className="h-[300px]" />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col items-center">
                <span className="text-primary text-lg font-semibold tracking-wide mb-1">Distributed by</span>
                <img src={synthesisLogo} alt="Synthesis" className="h-[80px]" />
                <img src={spawnpointLogo} alt="Spawnpoint" className="h-[57px] mt-2" />
              </div>
              <img src={vexLogo} alt="VEX" className="h-[60px] w-auto object-contain" />
              <img src={theParkLogo} alt="The Park" className="h-[88px] w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
