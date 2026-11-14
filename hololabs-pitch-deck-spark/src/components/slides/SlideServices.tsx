import SlideLayout from "./SlideLayout";
import marioKartBg from "@/assets/slides/mario-kart.jpg";
import logoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const logo = logoAsset.url;
import devImg from "@/assets/slides/development.jpg";
import opsImg from "@/assets/slides/operations.jpg";
import rndImg from "@/assets/slides/randd.jpg";
import artImg from "@/assets/slides/art-design-service.png";

export default function SlideServices() {
  const services = [
    {
      title: "Real-time Software Development",
      image: devImg,
      items: [
        "Scale and Performance: Transforming your complex creative concepts into stable, high-performance real-time interactive software architectures built specifically for high-throughput attractions.",
      ],
    },
    {
      title: "Operations and Commissioning",
      image: opsImg,
      items: [
        "Total Operational Readiness: Ensuring your guest experience never falters through on-site commissioning, real-time backend monitoring, custom analytics dashboards, and show-control systems designed for 24/7 reliability.",
      ],
    },
    {
      title: "Research and Development",
      image: rndImg,
      items: [
        "De-Risking Innovation: Bridging the gap between \"bleeding-edge\" concepts and production-ready reality, giving your team a validated technical roadmap BEFORE you build, from prototype to production.",
      ],
    },
    {
      title: "Content and Experience Design",
      image: artImg,
      items: [
        "Narrative-Driven Design: Providing cohesive visual direction and sensory storytelling through Experience Design, Concept Development, Art Direction, Modeling & Animation, and Sound Design that deepens connection and strengthens audience engagement.",
      ],
    },
  ];

  return (
    <SlideLayout backgroundImage={marioKartBg} overlay="dark">
      {/* Logo top-left */}
      <img src={logo} alt="Hololabs" className="absolute top-[10px] left-[10px] w-72 z-20 animate-fade-up" />
      <div className="flex h-full">
        {/* Left header */}
        <div className="w-[440px] flex flex-col justify-center px-14 border-r border-border">
          <h2 className="text-6xl font-bold text-foreground mb-6 animate-fade-up animate-fade-up-delay-1">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-2xl text-muted-foreground text-body animate-fade-up animate-fade-up-delay-2 leading-relaxed">
            End-to-end technical and creative capabilities for world-class LBE experiences.
          </p>
        </div>

        {/* Services grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative flex flex-col justify-end px-10 py-7 animate-fade-up overflow-hidden rounded-2xl"
              style={{ animationDelay: `${0.15 * (idx + 1)}s` }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.8)" }}
              />
              {/* Gradient overlay: light top, dark bottom for text contrast */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, hsl(210 20% 8% / 0.05) 20%, hsl(210 20% 8% / 0.4) 50%, hsl(210 20% 8% / 0.75) 65%, hsl(210 20% 8% / 0.92) 80%)",
                }}
              />
              <div className="relative z-10 min-h-[230px] flex flex-col justify-end">
                <div className="w-12 h-1.5 bg-primary rounded mb-4" />
                <h3 className="text-3xl font-semibold text-foreground mb-3">{service.title}</h3>
                <ul className="space-y-1.5">
                  {service.items.map((item) => {
                    const colonIdx = item.indexOf(":");
                    const hasLabel = colonIdx > -1 && colonIdx < 40;
                    return (
                      <li key={item} className="text-lg text-muted-foreground text-body flex items-start gap-2.5">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span>
                          {hasLabel ? (
                            <>
                              <span className="font-bold text-foreground">{item.slice(0, colonIdx)}:</span>
                              {item.slice(colonIdx + 1)}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
