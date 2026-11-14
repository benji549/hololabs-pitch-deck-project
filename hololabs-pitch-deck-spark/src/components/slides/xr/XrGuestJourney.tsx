import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bgAsset from "@/assets/xr-vr-space-room.png.asset.json";

const bg = bgAsset.url;

const hololabsLogo = hololabsLogoAsset.url;

const stages = [
  {
    kicker: "Pre-Experience",
    items: ["Guests create their avatars, receive briefing, and get fitted for the experience."],
  },
  {
    kicker: "Experience",
    items: [
      "Guests enter a themed set where real props and virtual elements interact in MR.",
      "A 6 m x 6 m free-roam VR stage expands the story into impossible spaces.",
      "D-BOX seating and physical effects sync with the virtual journey.",
    ],
  },
  {
    kicker: "Post-Experience",
    items: [
      "A photo moment captures the group's achievement and encourages social sharing.",
      "Themed retail and F&B extend the story — a keepsake to take home, or a drink while reliving the adventure.",
    ],
  },
];

export default function XrGuestJourney() {
  return (
    <SlideLayout backgroundImage={bg} overlay="dark">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[190px] px-24">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          Guest Journey
        </div>
        <h2 className="text-6xl font-bold text-foreground leading-tight mb-14 max-w-[1400px] animate-fade-up animate-fade-up-delay-1">
          A 40 minute format with <span className="text-primary">two MR rooms</span> and{" "}
          <span className="text-primary">two VR rooms</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {stages.map((s, i) => (
            <div
              key={s.kicker}
              className="bg-card/60 border border-border rounded-2xl p-9 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 2)}s`, minHeight: 380 }}
            >
              <div className="text-primary text-base font-semibold tracking-widest uppercase mb-6">
                {s.kicker}
              </div>
              <div className="space-y-5">
                {s.items.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-3 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-xl text-muted-foreground text-body leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
