import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import auraStripAsset from "@/assets/slides/btm-aura-strip.png.asset.json";
import auraVisionAsset from "@/assets/slides/btm-jungle-auravision.png.asset.json";
import jungleBattleAsset from "@/assets/slides/btm-jungle-battle.webp.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

const rooms = [
  {
    room: "MR Room — Escape & Power Up",
    desc: "Break out of the dungeon, choose your magic, and battle together.",
    calloutLabel: "Key Prop: Jail Cell",
    calloutDesc: "A physical breakout space players can see, touch, and escape together.",
  },
  {
    room: "VR Room — Explore & Survive",
    desc: "Ride, dodge, fight, climb, and navigate a dangerous supernatural world.",
    calloutLabel: "Key Setpieces: River + Dracula's Cave",
    calloutDesc:
      "Room-scale movement turns the space into a journey of combat, traps, and traversal.",
  },
  {
    room: "D-BOX Room — Fly & Attack",
    desc: "Ride dragons and storm Dracula's tower.",
    calloutLabel: "Key Ride: Dragon Seats",
    calloutDesc: "Motion-enabled dragon seats turn the finale into a high-speed aerial battle.",
  },
];

export default function XrBecomeTheMonster() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="grid grid-cols-2 gap-12 h-full items-center px-20 pt-[110px] pb-10 min-h-0">
        <div className="min-h-0">
          <div className="text-primary text-base font-semibold tracking-widest uppercase mb-3 animate-fade-up">
            In Development
          </div>
          <h2 className="text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-up animate-fade-up-delay-1">
            Become the <span className="text-primary">Monster</span>
          </h2>
          <p className="text-xl text-muted-foreground text-body leading-relaxed mb-6 animate-fade-up animate-fade-up-delay-2">
            Players awaken as Dracula's newly created elemental monsters, escape his laboratory,
            master their powers, and pursue him across a supernatural world before he can complete a
            ritual that traps the world in eternal darkness.
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

        <div className="animate-fade-up animate-fade-up-delay-2 h-full flex flex-col justify-center gap-5 min-h-0">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={jungleBattleAsset.url}
              alt="Jungle dragon battle concept art"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={auraVisionAsset.url}
              alt="Jungle aura vision concept art"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={auraStripAsset.url}
              alt="Aura magic sequence concept art"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
