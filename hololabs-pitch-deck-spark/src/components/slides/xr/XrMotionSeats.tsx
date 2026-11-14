import { Check, CornerDownRight } from "lucide-react";
import SlideLayout from "../SlideLayout";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import motionSeatsAsset from "@/assets/slides/motion-seats.png.asset.json";

export default function XrMotionSeats() {
  return (
    <SlideLayout overlay="none">
      <img src={hololabsLogoAsset.url} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />
      <div className="flex flex-col h-full pt-[150px] pb-[110px] px-12">
        <h2 className="text-5xl font-bold text-foreground leading-tight animate-fade-up">
          Why <span className="text-primary">Motion Seats?</span>
        </h2>
        <div className="flex flex-1 min-h-0 items-center gap-16">
          <div className="w-[760px] shrink-0 h-full flex items-center animate-fade-up animate-fade-up-delay-1">
            <img src={motionSeatsAsset.url} alt="Three motion seats with arrows showing their movement" className="w-full max-h-full object-contain rounded-2xl" />
          </div>
          <ul className="flex-1 space-y-12 text-4xl text-foreground leading-snug animate-fade-up animate-fade-up-delay-2">
            <li className="flex items-start gap-5">
              <Check className="w-10 h-10 shrink-0 mt-1 text-primary" aria-hidden="true" />
              <span>Increased thrill &amp; immersion</span>
            </li>
            <li className="flex items-start gap-5">
              <Check className="w-10 h-10 shrink-0 mt-1 text-primary" aria-hidden="true" />
              <div>
                Easier marketing
                <div className="flex items-start gap-4 mt-4 text-3xl text-muted-foreground">
                  <CornerDownRight className="w-8 h-8 shrink-0 mt-1 text-primary" aria-hidden="true" />
                  <span>Call it an “attraction” or “ride”</span>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <Check className="w-10 h-10 shrink-0 mt-1 text-primary" aria-hidden="true" />
              <span>Higher ticket prices</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}