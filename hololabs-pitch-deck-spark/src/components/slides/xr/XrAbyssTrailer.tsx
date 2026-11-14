import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

export default function XrAbyssTrailer() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />
      <div className="flex flex-col h-full pt-[110px] pb-24 px-16">
        <h2 className="text-5xl font-bold text-foreground leading-tight mb-6 animate-fade-up">
          Abyss: <span className="text-primary">Vault trailer</span>
        </h2>
        <div className="flex-1 min-h-0 flex items-start justify-center animate-fade-up animate-fade-up-delay-1">
          <div className="h-full aspect-video max-w-full rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Abyss: Vault trailer"
              src="https://player.vimeo.com/video/1183185152?title=0&byline=0&portrait=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
