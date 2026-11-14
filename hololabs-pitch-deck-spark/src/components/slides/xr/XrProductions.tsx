import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import abyssAsset from "@/assets/slides/abyss-vault-flythrough.mp4.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

export default function XrProductions() {
  return (
    <SlideLayout overlay="none">
      <video
        src={abyssAsset.url}
        aria-label="Abyss Vault MR"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="relative z-10 flex flex-col h-full pt-[110px] pb-24 px-12">
        <div className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 animate-fade-up">
          In Development
        </div>
        <h2 className="text-4xl font-bold text-foreground leading-tight mb-6 animate-fade-up animate-fade-up-delay-1">
          One format, <span className="text-primary">many experiences</span>
        </h2>

        <div className="text-2xl font-semibold text-foreground mt-auto animate-fade-up animate-fade-up-delay-2">Abyss Vault MR</div>
      </div>
    </SlideLayout>
  );
}
