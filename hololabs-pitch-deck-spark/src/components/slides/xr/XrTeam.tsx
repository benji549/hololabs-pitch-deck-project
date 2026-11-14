import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import mikeAsset from "@/assets/team/mike2.jpg.asset.json";
import jamieAsset from "@/assets/team/jamie.jpg.asset.json";
import brettPhoto from "@/assets/team/brett-full.jpg";
import robAsset from "@/assets/team/rob.jpg.asset.json";
import bg from "@/assets/slides/mk1.jpg";

const hololabsLogo = hololabsLogoAsset.url;

const leadership = [
  {
    name: "Mike Wozniewski",
    initials: "MW",
    photo: mikeAsset.url,
    role: "Founder and President",
    bio: "Mike has 25 years of experience developing interactive software and holds a master's degree from the Centre for Intelligent Machines at McGill University. He founded Hololabs in 2011 and has delivered projects for the National Film Board of Canada, the Society for Arts and Technology, Kid Koala and the Vancouver Olympics.",
  },
  {
    name: "Brett Gaylor, Ph.D.",
    initials: "BG",
    photo: brettPhoto,
    role: "VP Creative",
    bio: "Brett has worked in interactive, immersive, and broadcast media for 25 years and holds a PhD in Interactive Art and Technology from Simon Fraser University. He is a recipient of a Peabody Award for Do Not Track, an interactive documentary series with the National Film Board of Canada. He has also received the International Documentary Association award, the Prix Gémeaux, three Webbys, and is a Vanier Canada Graduate Scholar.",
  },
  {
    name: "Jamie Toghill",
    initials: "JT",
    photo: jamieAsset.url,
    role: "VP Operations",
    bio: "Jamie brings over 30 years of leadership across games, technology and themed entertainment, spanning some of the industry's most recognized companies, including MicroProse, Interplay, Hasbro Interactive, Electronic Arts and Disney Interactive. Credited with more than 40 titles, his portfolio includes Transport Tycoon, RollerCoaster Tycoon, X-COM: Terror from the Deep & Apocalypse, Street Fighter Alpha, FIFA Soccer and TRON.",
  },
  {
    name: "Rob Roe",
    initials: "RR",
    photo: robAsset.url,
    role: "VP, Technology",
    bio: "Rob has built 3D development and analysis tools for the industrial and aerospace sectors as well as world-renowned games and interactive installations. His background includes Altitude Aerospace, SkyBox Labs and DreamCraft Attractions, and he founded Virtex Edge Design in 2015, which developed and released several games and tools across Steam, web and mobile app stores.",
  },
];



export default function XrTeam() {
  return (
    <SlideLayout backgroundImage={bg} overlay="dark">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col h-full pt-[120px] pb-[130px] px-20">
        <div className="text-primary text-base font-semibold tracking-widest uppercase mb-2 animate-fade-up">
          The Team
        </div>
        <h2 className="text-4xl font-bold text-foreground leading-tight mb-3 max-w-[1500px] animate-fade-up animate-fade-up-delay-1">
          Hololabs is uniquely positioned for this{" "}
          <span className="text-primary">Mixed Reality format</span>
        </h2>

        <p className="text-base text-muted-foreground text-body leading-relaxed max-w-[1550px] mb-5 animate-fade-up animate-fade-up-delay-2">
          Our founder, Mike Wozniewski, built the intelligent systems which powered{" "}
          <span className="text-foreground font-semibold">Mario Kart: Bowser's Challenge</span>. We
          have had a front-row seat to the world's most highly trafficked mixed reality attraction
          (1,920 guests per hour), and we continue to offer these services to Universal across a
          broad spectrum of attractions under NDA. In 2026, we took those lessons into the
          production of one of the most innovative free-roam VR titles on the market,{" "}
          <span className="text-foreground font-semibold">Abyss Vault</span>. Now we want to bring
          those experiences together into a format — and we're looking for partners.
        </p>

        <div className="text-primary text-xl font-semibold tracking-widest uppercase mb-3 animate-fade-up animate-fade-up-delay-2">
          Our Leadership
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5 flex-1 min-h-0">
          {leadership.map((p, i) => (
            <div
              key={p.name}
              className="bg-card/60 border border-border rounded-2xl p-5 flex items-start gap-5 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 3)}s` }}
            >
              {p.photo ? (
                <img
                  src={p.photo}
                  alt={`${p.name}, ${p.role} at Hololabs`}
                  className="w-[128px] h-[128px] rounded-full object-cover object-[center_32%] border-2 border-primary/30 shrink-0"
                />
              ) : (
                <div className="w-[128px] h-[128px] rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-4xl font-bold text-primary/70 font-heading">{p.initials}</span>
                </div>
              )}

              <div>
                <div className="text-2xl font-semibold text-foreground leading-snug">{p.name}</div>
                <div className="text-primary text-lg font-semibold mb-1.5">{p.role}</div>
                <p className="text-base text-muted-foreground text-body leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
