import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";

import abyssVideo from "@/assets/slides/abyss-vault-flythrough-v2.mp4.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

const rooms = [
  {
    room: "MR Room — Crew the Sub",
    desc: "Operate the submarine, track robotic sea life, and survive a violent crash.",
    calloutLabel: "Key Prop: Submarine",
    calloutDesc:
      "Control the submarine via physical driving wheel and harpoon props.",
  },
  {
    room: "VR Room — Infiltrate & Survive",
    desc: "Explore artificial caves, flooded lounges, maintenance platforms, and hidden storage labs.",
    calloutLabel: "Key Setpieces: Flooded Base + AI Crab",
    calloutDesc:
      "Traversal, zipline moments, rushing water, and a boss encounter reveal the base's dark purpose.",
  },
  {
    room: "MOTION SEAT ROOM — ESCAPE & ATTACK",
    desc: "Reactivate an autonomous submersible and fight through NOVA's defenses.",
    calloutLabel: "Key Ride: Autonomous Submersible",
    calloutDesc:
      "Motion-enabled escape ride with light-lock puzzles, enemy attacks, and a synchronized final strike.",
  },
];

export default function XrAbyssVault() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="grid grid-cols-[40%_60%] gap-8 h-full items-center px-16 pt-[110px] pb-10 min-h-0">
        <div className="min-h-0">
          <div className="text-primary text-base font-semibold tracking-widest uppercase mb-3 animate-fade-up">
            In Development
          </div>
          <h2 className="text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-up animate-fade-up-delay-1">
            Abyss <span className="text-primary">Vault</span>
          </h2>
          <p className="text-xl text-muted-foreground text-body leading-relaxed mb-6 animate-fade-up animate-fade-up-delay-2">
            Players are rebels sent beneath a ruined Earth to investigate an elite underwater base,
            where NOVA, a rogue AI, has turned humanity's survival plan into an extinction threat.
          </p>

          <div className="flex flex-col gap-3">
            {rooms.map((r, i) => (
              <div
                key={r.room}
                className="bg-card/60 border border-border rounded-2xl p-4 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 3)}s` }}
              >
                <div className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                  {r.room}
                </div>
                <p className="text-lg text-muted-foreground text-body leading-snug">{r.desc}</p>
                <div className="mt-2 border-l-2 border-primary bg-primary/10 rounded-r-xl px-4 py-2">
                  <div className="text-base font-semibold text-foreground mb-0.5">
                    {r.calloutLabel}
                  </div>
                  <p className="text-base text-muted-foreground text-body leading-snug">
                    {r.calloutDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animate-fade-up-delay-2 h-full flex items-center justify-center min-h-0">
          <div className="w-full flex flex-col gap-4">
            <video
              src={abyssVideo.url}
              className="w-full aspect-video object-cover bg-black/40 rounded-2xl border border-border"
              controls
              autoPlay
              muted
              playsInline
            />
            <a
              href="https://sketchfab.com/3d-models/mr-lbe-abyss-2f8b6ea548804c39b346aa0bc8eb0341"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-xl font-semibold hover:underline self-start"
            >
              Click here to open interactive model -&gt;
            </a>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
