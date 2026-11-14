import framestore from "@/assets/slides/framestore.png";
import dcal from "@/assets/slides/dcal.png";
import universalCreative from "@/assets/slides/universal-creative.png";
import holovis from "@/assets/slides/holovis.png";
import go2 from "@/assets/slides/go2.png";
import merj from "@/assets/slides/merj.png";
import sat from "@/assets/slides/sat.png";
import onenet from "@/assets/slides/onenet.png";
import logoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import showreelAsset from "@/assets/hololabs-showreel-2026.mp4.asset.json";
const logo = logoAsset.url;

export default function SlideShowreel() {
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
        <source src={showreelAsset.url} type="video/mp4" />
      </video>

      {/* Bottom gradient overlay for logos */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, hsl(210 20% 8% / 0.6) 75%, hsl(210 20% 8% / 0.92) 90%)",
        }}
      />

      {/* Hololabs logo top-left */}
      <img
        src={logo}
        alt="Hololabs"
        className="absolute z-10"
        style={{ top: 20, left: 40, height: 173, filter: 'drop-shadow(3.6px 1.8px 3px rgba(0,0,0,0.75))' }}
      />

      {/* Headline top-right, vertically centered with logo */}
      <div
        className="absolute z-10 flex items-center"
        style={{ top: 8, right: 40, height: 144 }}
      >
        <h1 className="text-[50px] font-bold text-foreground text-right leading-none">
          Serious Engineering for Serious <span className="text-primary">Play</span>
        </h1>
      </div>



      {/* Logo bar at bottom */}
      <div className="absolute bottom-[70px] left-0 right-0 z-10 flex flex-col items-center gap-6">

        <div className="flex items-center justify-center gap-12">
          <img src={universalCreative} alt="Universal Creative" className="h-[120px] opacity-70" />
          <img src={framestore} alt="Framestore" className="h-[70px] opacity-70" />
          <img src={dcal} alt="DreamCraft Attractions" className="h-[100px] opacity-70" />
          <img src={holovis} alt="Holovis" className="h-[70px] opacity-70" />
          <img src={go2} alt="Go2" className="h-[53px] opacity-70" />
          <img src={merj} alt="Merj" className="h-[70px] opacity-70" />
          <img src={sat} alt="SAT" className="h-[70px] opacity-70" />
          <img src={onenet} alt="OneNet" className="h-[88px] opacity-70" />
        </div>
      </div>

    </div>
  );
}
