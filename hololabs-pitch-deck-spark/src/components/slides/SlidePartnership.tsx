import SlideLayout from "./SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;
import holocommand from "@/assets/slides/holocommand.jpg";
import devImg from "@/assets/slides/development.jpg";
import opsImg from "@/assets/slides/operations.jpg";
import rndImg from "@/assets/slides/randd.jpg";
import artImg from "@/assets/slides/art-design-service.png";

const serviceThumbs = [
  { title: "Game Engine Software Development", image: devImg },
  { title: "Operations and Commissioning", image: opsImg },
  { title: "Research and Development", image: rndImg },
  { title: "Content and Experience Design", image: artImg },
];

export default function SlidePartnership() {
  return (
    <SlideLayout backgroundImage={holocommand} overlay="left">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[65px] left-[10px] w-72 z-20" />
      <div className="flex h-[760px] -mt-[20px]">
        {/* Left */}
        <div className="w-1/2 flex flex-col justify-center px-20 border-r border-border mt-[120px]">
          <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-5 animate-fade-up">
            Partnership Opportunity
          </div>
          <h2 className="text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up animate-fade-up-delay-1">
            Why Partner With <span className="text-primary">Hololabs</span>?
          </h2>
          <p className="text-2xl text-muted-foreground text-body leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Clients, design houses, master planners, and creative agencies gain deep technical capability and a proven execution partner for the world's most demanding LBE projects.
          </p>

          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl px-6 py-5 animate-fade-up animate-fade-up-delay-3">
            <div className="text-primary font-semibold text-2xl mb-2">Your Technical and Creative Services Studio</div>
            <p className="text-muted-foreground text-body text-lg leading-relaxed">
              Whether building operational resilience or powering your creative requirements, Hololabs is your premier partner across the attractions pipeline.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 flex flex-col justify-center px-16">
          <div className="space-y-7 mt-[110px]">
            {[
              { num: "01", title: "Proven Track Record", desc: "Universal Studios, THEA Award-winning AR dark rides, and installations worldwide" },
              { num: "02", title: "Full-Stack Systems", desc: "From embedded systems to cloud platforms — your entire technology stack" },
              { num: "03", title: "Creative + Technical", desc: "Rare combination of art direction, experience design, and engineering excellence" },
              { num: "04", title: "R&D, Prototyping and Evaluation", desc: "Engage Hololabs to audit your project ideations and concepts for technical viability" },
              { num: "05", title: "Creative Innovation", desc: "Transforming emerging technologies into unique creative expierence designs" },
              
            ].map((item, i) => (
              <div
                key={item.num}
                className="flex items-start gap-6 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <span className="text-4xl font-bold text-primary/30 font-heading">{item.num}</span>
                <div>
                  <div className="text-foreground font-semibold text-2xl">{item.title}</div>
                  <div className="text-muted-foreground text-body text-lg">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: service image strip */}
      <div className="absolute bottom-[69px] left-0 right-0 px-16">
        <div className="grid grid-cols-4 gap-6">
          {serviceThumbs.map((s, i) => (
            <div
              key={s.title}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="h-[225px] rounded-2xl overflow-hidden border border-border/40">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 text-foreground font-semibold text-xl text-center">
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
