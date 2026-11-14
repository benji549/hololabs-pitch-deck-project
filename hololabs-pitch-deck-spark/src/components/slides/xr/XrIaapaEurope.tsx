import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import videoAsset from "@/assets/slides/atrium-iaapa-europe.mp4.asset.json";

export default function XrIaapaEurope() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogoAsset.url} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />
      <div className="flex flex-col h-full pt-[150px] pb-[110px] px-12 gap-8">
        <h2 className="text-5xl font-bold text-foreground leading-tight shrink-0 animate-fade-up">
          Atrium at <span className="text-primary">IAAPA Europe</span> (London, Sept 2026)
        </h2>
        <div className="flex-1 min-h-0 flex items-center justify-center animate-fade-up animate-fade-up-delay-1">
          <video
            src={videoAsset.url}
            aria-label="Atrium at IAAPA Europe"
            controls
            playsInline
            preload="metadata"
            className="h-full max-w-full aspect-video object-contain rounded-2xl"
          />
        </div>
      </div>
    </SlideLayout>
  );
}