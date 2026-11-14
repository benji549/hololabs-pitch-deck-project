import SlideLayout from "../SlideLayout";
import roomFlowAsset from "@/assets/slides/room-flow.gif.asset.json";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

const notes = [
  "Guests enter in mixed reality every 10 minutes.",
  "They alternate into one of two virtual reality rooms, each lasting 20 minutes.",
  "They complete the experience back in mixed reality.",
];

export default function XrRoomFlow() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[190px] px-24">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          Room Flow
        </div>
        <h2 className="text-6xl font-bold text-foreground leading-tight mb-12 animate-fade-up animate-fade-up-delay-1">
          A  <span className="text-primary">176 m²  / 1895 ft²</span>  footprint, running four rooms at once
        </h2>

        <div className="flex items-center gap-20">
          <div className="animate-fade-up animate-fade-up-delay-2">
            <img
              src={roomFlowAsset.url}
              alt="Animated floor plan showing guest flow through the VR, MR, and motion seat rooms"
              className="w-[1080px] max-w-full object-contain rounded-2xl"
            />
          </div>

          <div className="flex-1 space-y-8">
            {notes.map((n, i) => (
              <div
                key={n}
                className="flex items-start gap-6 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 3)}s` }}
              >
                <span className="text-4xl font-bold text-primary/30 font-heading leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-2xl text-muted-foreground text-body leading-relaxed">{n}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 animate-fade-up animate-fade-up-delay-3 space-y-2">
              <p className="text-2xl text-muted-foreground text-body leading-relaxed">
                <span className="font-semibold text-primary">Theoretical Hourly Ride Capacity:</span> 36 people per hour
              </p>
              <p className="text-2xl text-muted-foreground text-body leading-relaxed">
                <span className="font-semibold text-primary">Capacity:</span> 24 people
              </p>
              <p className="text-2xl text-muted-foreground text-body leading-relaxed">
                <span className="font-semibold text-primary">Experience length:</span> 40 minutes
              </p>
              <p className="text-2xl text-muted-foreground text-body leading-relaxed">
                <span className="font-semibold text-primary">Minimum required area:</span> 176 m² / 1895 ft²
              </p>

            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
