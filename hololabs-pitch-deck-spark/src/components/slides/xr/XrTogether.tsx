import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bg from "@/assets/slides/hero-bg.jpg";

const hololabsLogo = hololabsLogoAsset.url;

const outcomes = [
  "Become an industry leader in mixed reality LBEs with cutting-edge technology.",
  "Bring world-class premium experiences to small private spaces.",
  "Reach markets and real estate that current high-throughput free-roam LBEs cannot.",
];

const contacts = [
  { label: "General Inquiries", value: "info@hololabs.studio", href: "mailto:info@hololabs.studio" },
  { label: "Business Development", value: "bizdev@hololabs.studio", href: "mailto:bizdev@hololabs.studio" },
  { label: "Website", value: "www.hololabs.studio", href: "https://www.hololabs.studio/" },
  { label: "Phone", value: "+1 (250) 880-6837", href: "tel:+12508806837" },
];

export default function XrTogether() {
  return (
    <SlideLayout backgroundImage={bg} overlay="dark">
      <div className="flex flex-col h-full px-24 pt-14 pb-28">
        <div className="flex items-center justify-between gap-12 animate-fade-up">
          <img src={hololabsLogo} alt="Hololabs Studio" className="w-[420px] shrink-0" />

          <div className="flex items-center gap-8">
            {contacts.map((c, i) => (
              <div key={c.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-14 bg-border" />}
                <div className="flex flex-col">
                  <div className="text-muted-foreground text-base text-body mb-1 whitespace-nowrap">{c.label}</div>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-primary text-2xl font-medium hover:underline whitespace-nowrap"
                  >
                    {c.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border/60 my-12" />

        <div className="flex flex-col justify-center flex-1">
          <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
            The Opportunity
          </div>
          <h2 className="text-7xl font-bold text-foreground leading-tight mb-14 animate-fade-up animate-fade-up-delay-1">
            Together, we can<span className="text-primary">...</span>
          </h2>

          <div className="space-y-8 max-w-[1400px]">
            {outcomes.map((o, i) => (
              <div
                key={o}
                className="flex items-center gap-8 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 2)}s` }}
              >
                <span className="text-5xl font-bold text-primary/30 font-heading leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-4xl font-semibold text-foreground leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between animate-fade-up animate-fade-up-delay-5">
          <div className="text-xl text-muted-foreground text-body">Suite 401 · 31 Bastion Square · Victoria, BC</div>
          <a
            href="mailto:mike@hololabs.studio"
            className="text-xl font-semibold text-primary hover:underline"
          >
            Contact Mike Wozniewski - mike@hololabs.studio
          </a>
        </div>
      </div>
    </SlideLayout>
  );
}
