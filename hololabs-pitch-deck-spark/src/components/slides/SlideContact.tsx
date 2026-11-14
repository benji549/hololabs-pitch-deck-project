import SlideLayout from "./SlideLayout";
import PdfExport from "./PdfExport";
import logo from "@/assets/hololabs-logo.png";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;
import heroBg from "@/assets/slides/hero-bg.jpg";

export default function SlideContact() {
  return (
    <SlideLayout backgroundImage={heroBg} overlay="dark">
      <div className="flex flex-col items-center justify-center h-full text-center px-32">
        <img src={hololabsLogo} alt="Hololabs" className="w-[864px] mb-12 animate-fade-up" />
        <h2 className="text-7xl font-bold text-foreground mb-6 animate-fade-up animate-fade-up-delay-1">
          Let's Build Something <span className="text-primary">Amazing</span>
        </h2>
        <p className="text-3xl text-muted-foreground text-body mb-14 max-w-6xl animate-fade-up animate-fade-up-delay-2">
          Ready to explore how Hololabs can bring your next location-based entertainment project or concept ideation to
          life? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center animate-fade-up animate-fade-up-delay-3 w-full max-w-[1400px]">
          <div className="text-center flex flex-col items-center">
            <div className="text-muted-foreground text-lg text-body mb-2">General Inquiries</div>
            <a href="mailto:info@hololabs.studio" className="text-primary text-3xl font-medium hover:underline">
              info@hololabs.studio
            </a>
          </div>
          <div className="w-px h-16 bg-border mx-4" />
          <div className="text-center flex flex-col items-center">
            <div className="text-muted-foreground text-lg text-body mb-2 whitespace-nowrap">Business Development</div>
            <a href="mailto:bizdev@hololabs.studio" className="text-primary text-3xl font-medium hover:underline">
              bizdev@hololabs.studio
            </a>
          </div>
          <div className="w-px h-16 bg-border mx-4" />
          <div className="text-center flex flex-col items-center">
            <div className="text-muted-foreground text-lg text-body mb-2">Website</div>
            <a
              href="https://www.hololabs.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-3xl font-medium hover:underline"
            >
              www.hololabs.studio
            </a>
          </div>
          <div className="w-px h-16 bg-border mx-4" />
          <div className="text-center flex flex-col items-center">
            <div className="text-muted-foreground text-lg text-body mb-2">Phone</div>
            <a href="tel:+12508806837" className="text-primary text-3xl font-medium hover:underline">
              +1 (250) 880-6837
            </a>
          </div>
        </div>

        <div className="mt-12 text-xl text-muted-foreground text-body animate-fade-up animate-fade-up-delay-4">
          Suite 401 · 31 Bastion Square · Victoria, BC
        </div>

        <div className="mt-20 animate-fade-up animate-fade-up-delay-5">
          <PdfExport />
        </div>
      </div>
    </SlideLayout>
  );
}
