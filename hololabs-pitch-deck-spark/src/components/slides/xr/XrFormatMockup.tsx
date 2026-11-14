import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";


const hololabsLogo = hololabsLogoAsset.url;

export default function XrFormatMockup() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[150px] pb-[60px] px-24">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          ATRIUM — A HYBRID REALITY ATTRACTION
        </div>
        <h2 className="text-5xl font-bold text-foreground leading-tight mb-6 animate-fade-up animate-fade-up-delay-1">
          Two VR play zones, one{"\u00a0"}
          <span className="text-primary">mixed reality space</span>, one motion seat room
        </h2>

        <div className="flex-1 min-h-0 flex items-start justify-center pb-24 animate-fade-up animate-fade-up-delay-2">
          <div className="w-[88%] h-[88%] rounded-2xl overflow-hidden border border-border">

            <iframe
              title="MR LBE"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/a1814eb52f65441fbf058cc5e3b31cf7/embed?ui_theme=dark"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
