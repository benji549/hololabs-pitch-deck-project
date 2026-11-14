import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

export default function XrWalkThruMusic() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="grid grid-cols-[40%_60%] gap-8 h-full items-center px-16 pt-[110px] pb-10 min-h-0">
        <div className="min-h-0">
          <div className="text-primary text-base font-semibold tracking-widest uppercase mb-3 animate-fade-up">
            In Development
          </div>
          <h2 className="text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-up animate-fade-up-delay-1">
            <span className="text-foreground">Iron Maiden – Futureality</span>
          </h2>
          <p className="text-xl text-muted-foreground text-body leading-relaxed animate-fade-up animate-fade-up-delay-2">
            An interactive rock opera experience inside the universe of Iron Maiden.


            Players move through stories inspired by mythology, history, the future, and Iron Maiden's music, experiencing them as parts of a single rock opera-like narrative. Multiple songs and stories are connected into one journey that allows players to look beyond the individual tracks and into the larger history, mythology, and humanity behind them. Instruments, vocals, musical fragments, and entire songs can exist as spatial elements that players discover, approach, activate, manipulate, and move through throughout the experience.
          </p>
        </div>

        <div className="animate-fade-up animate-fade-up-delay-2 h-full flex items-start justify-center min-h-0 pb-24">
          <div className="w-full h-[88%] rounded-2xl overflow-hidden border border-border">
            <iframe
              title="MR LBE Iron Maiden"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/ecdf4002df1f4691bec49999512b5c10/embed?ui_watermark_link=0&ui_watermark=0&ui_theme=dark"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
