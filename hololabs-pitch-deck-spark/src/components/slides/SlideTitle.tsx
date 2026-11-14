import SlideLayout from "./SlideLayout";
import logoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const logo = logoAsset.url;
import heroBg from "@/assets/slides/hero-bg.jpg";
import marioKartAsset from "@/assets/slides/themed-attractions.png.asset.json";
const marioKart = marioKartAsset.url;
import immersiveJamAsset from "@/assets/slides/mixed-reality-attractions-v2.png.asset.json";
const immersiveJam = immersiveJamAsset.url;
import vrExperienceAsset from "@/assets/slides/free-roam-lbvr.jpg.asset.json";
const vrExperience = vrExperienceAsset.url;
import jellyBloomsAsset from "@/assets/slides/interactive-walls.jpg.asset.json";
const jellyBlooms = jellyBloomsAsset.url;
import abyssAsset from "@/assets/slides/afroquatics.jpg.asset.json";
const abyss = abyssAsset.url;
import mocapAsset from "@/assets/slides/custom-concepts.jpg.asset.json";
const mocap = mocapAsset.url;

const cards = [
  { title: "Themed Entertainment", image: marioKart },
  { title: "Free-Roam Multiplayer VR", image: vrExperience },
  { title: "Interactive Walls & Projection", image: jellyBlooms },
  { title: "Gallery & Museum Installs", image: abyss },
  { title: "Mixed-Reality Attractions", image: immersiveJam },
  { title: "Custom Concepts & Prototypes", image: mocap },
];

// Approximate card image centers in slide (1920x1080) coordinates.
const TARGET_CENTER = { x: 960, y: 790 };
const SOURCE_CENTERS = [
  { x: 352, y: 208 },   // Themed Entertainment
  { x: 960, y: 193 },   // Free-Roam Multiplayer VR
  { x: 1568, y: 208 },  // Interactive Walls & Projection
  { x: 352, y: 760 },   // Gallery & Museum Installs
  { x: 1568, y: 760 },  // Custom Concepts & Prototypes
];
const CARD_HW = 239;
const CARD_HH = 188;
const SMALL_HW = 191;
const SMALL_HH = 150;

function edgePoint(c: { x: number; y: number }, toward: { x: number; y: number }, hw = CARD_HW, hh = CARD_HH) {
  const dx = toward.x - c.x;
  const dy = toward.y - c.y;
  const tx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
  const ty = dy !== 0 ? hh / Math.abs(dy) : Infinity;
  const t = Math.min(tx, ty);
  return { x: c.x + dx * t, y: c.y + dy * t };
}

function buildOrganicPath(s: { x: number; y: number }, t: { x: number; y: number }) {
  const dx = t.x - s.x;
  const dy = t.y - s.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const taperLen = Math.min(70, len * 0.22);
  const px = s.x + ux * taperLen;
  const py = s.y + uy * taperLen;
  const wStart = 6.5; // 13px wide at source
  const wLine = 4;    // 8px wide connecting line
  const p1 = [s.x + nx * wStart, s.y + ny * wStart];
  const p2 = [px + nx * wLine, py + ny * wLine];
  const p3 = [t.x + nx * wLine, t.y + ny * wLine];
  const p4 = [t.x - nx * wLine, t.y - ny * wLine];
  const p5 = [px - nx * wLine, py - ny * wLine];
  const p6 = [s.x - nx * wStart, s.y - ny * wStart];
  return `M${p1[0]},${p1[1]} L${p2[0]},${p2[1]} L${p3[0]},${p3[1]} L${p4[0]},${p4[1]} L${p5[0]},${p5[1]} L${p6[0]},${p6[1]} Z`;
}

export default function SlideTitle() {
  return (
    <SlideLayout backgroundImage={heroBg} overlay="dark">
      <div className="relative w-full h-full">

        <div className="absolute top-[8px] left-[30px] flex items-center gap-[45px] z-10">
          <img
            src={logo}
            alt="Hololabs"
            className="w-[315px] h-auto animate-fade-up relative top-[12px]"
          />
          <div className="font-bold leading-tight text-foreground tracking-tight animate-fade-up mt-[7px]" style={{ fontSize: '40.8px' }}>
            Uniquely positioned for the emergence of <span className="text-primary">Mixed-Reality Attractions</span>
          </div>
        </div>
        <div className="absolute left-0 right-0 px-16 flex flex-col items-center justify-end z-10" style={{ top: 220, bottom: 50 }}>
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full">
            {cards.map((card, idx) => (
              <div
                key={card.title}
                className="flex flex-col items-center animate-fade-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div style={{ transform: idx === 1 ? 'translateY(-40px)' : card.title === 'Themed Entertainment' ? 'translate(55px, -10px)' : card.title === 'Interactive Walls & Projection' ? 'translate(-55px, -10px)' : idx < 3 ? 'translateY(-10px)' : card.title === 'Mixed-Reality Attractions' ? 'translateY(-25px)' : card.title === 'Custom Concepts & Prototypes' ? 'translate(6px, 40px)' : 'translateY(40px)' }}>
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{
                      width: card.title === 'Mixed-Reality Attractions' ? '526px' : '382px',
                      height: card.title === 'Mixed-Reality Attractions' ? '414px' : '301px',
                      boxShadow: card.title === 'Mixed-Reality Attractions'
                        ? '0 0 5px 5px hsl(185 85% 70% / 0.9), 0 0 30px 10px hsl(185 85% 70% / 0.45)'
                        : undefined,
                      outline: card.title === 'Mixed-Reality Attractions' ? undefined : '2px solid hsl(0 0% 100% / 0.5)',
                      outlineOffset: '-2px',
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3
                    className={`mt-4 text-center text-3xl ${card.title === 'Mixed-Reality Attractions' ? 'font-bold text-primary' : 'font-normal text-foreground'}`}
                    style={{
                      marginTop: '6px',
                      width: card.title === 'Mixed-Reality Attractions' ? '526px' : '382px',
                      fontSize: card.title === 'Mixed-Reality Attractions' ? undefined : '1.40625rem',
                      textShadow: card.title === 'Mixed-Reality Attractions' ? [
                        '-2px -2px 0 #000', '2px -2px 0 #000', '-2px 2px 0 #000', '2px 2px 0 #000',
                        '-2px 0 0 #000', '2px 0 0 #000', '0 -2px 0 #000', '0 2px 0 #000',
                      ].join(', ') : undefined,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
