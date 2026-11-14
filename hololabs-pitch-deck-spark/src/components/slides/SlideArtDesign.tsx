import artImg from "@/assets/slides/art-design.jpg";
import abyss01 from "@/assets/slides/abyss01.png";
import mocap from "@/assets/slides/mocap.jpg";
import abyssConcept from "@/assets/slides/chase-nysm.png";
import immersiveJam from "@/assets/slides/skyhaven.jpg";
import phantasms from "@/assets/slides/phantasms-new.png";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;
import marioKartBg from "@/assets/slides/mario-kart.jpg";

export default function SlideArtDesign() {
  return (
    <div className="slide-content relative w-full h-full bg-slide-dark">
      <img src={marioKartBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-slide-dark/70" />
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[10px] left-[10px] w-72 z-20" />
      {/* Background image – main character highlighted */}
      <img
        src={artImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(1.35) contrast(1.05)" }}
      />
      {/* Gradient: transparent left (character) → dark right (text + images) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, transparent 20%, hsl(210 20% 8% / 0.55) 40%, hsl(210 20% 8% / 0.94) 55%, hsl(210 20% 8% / 0.98) 70%)",
        }}
      />

      <div className="relative z-10 flex h-full justify-end">
        <div className="w-[900px] flex flex-col justify-center px-16">
          {/* Header */}
          <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
            Creative Studio
          </div>
          <h2 className="text-7xl font-bold text-foreground mb-4 leading-tight animate-fade-up animate-fade-up-delay-1">
            Art & Content
          </h2>
          <p className="text-2xl text-muted-foreground text-body mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Full creative services from concept through production — your worlds brought to life with artistry and technical excellence.
          </p>

          {/* Image gallery – 3 top, 2 bottom */}
          <div className="flex flex-col gap-3 mb-8 animate-fade-up animate-fade-up-delay-3">
            <div className="flex gap-3">
              <div className="flex-1 h-[175px] rounded-xl overflow-hidden border border-border/40">
                <img src={abyss01} alt="Abyss Vault concept" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[175px] rounded-xl overflow-hidden border border-border/40">
                <img src={mocap} alt="Motion capture session" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[175px] rounded-xl overflow-hidden border border-border/40">
                <img src={immersiveJam} alt="Immersive experience UI" className="w-full h-full object-cover scale-125" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 h-[175px] rounded-xl overflow-hidden border border-border/40">
                <img src={phantasms} alt="3D character modeling" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 h-[175px] rounded-xl overflow-hidden border border-border/40">
                <img src={abyssConcept} alt="High-speed chase scene" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Compact service list – two columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 animate-fade-up animate-fade-up-delay-4">
            {[
              "Concept Development",
              "Art Direction",
              "3D Modeling & Animation",
              "Experience Design",
              "Sound Design & Music",
              "Motion Capture",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-foreground text-body text-xl">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
