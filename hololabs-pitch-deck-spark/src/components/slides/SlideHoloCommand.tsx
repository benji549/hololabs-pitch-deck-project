import SlideLayout from "./SlideLayout";
import holocommand from "@/assets/slides/holocommand.jpg";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
const hololabsLogo = hololabsLogoAsset.url;
import analyticsImg from "@/assets/slides/holocommand-analytics.png";

import operator1Img from "@/assets/slides/holocommand-operator1.png";
import buttonsImg from "@/assets/slides/holocommand-buttons.jpg";
import codeImg from "@/assets/slides/holocommand-code.jpg";
import mkImg from "@/assets/slides/holocommand-mk.jpg";



export default function SlideHoloCommand() {
  return (
    <SlideLayout backgroundImage={holocommand} overlay="left">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[10px] left-[10px] w-72 z-20" />
      <div className="flex h-full">
        <div className="w-[960px] flex flex-col justify-center px-20">
          <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-5 animate-fade-up mt-[15px]">
            Proprietary Technology
          </div>
          <h2 className="text-7xl font-bold text-foreground mb-3 leading-tight animate-fade-up animate-fade-up-delay-1">
            HoloCommand <span className="text-primary">OS</span>
          </h2>
          <p className="text-2xl text-muted-foreground text-body mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Powering and coordinating your unique guest experience is our proprietary tech stack HoloCommand, a bespoke customizable operating system driving performance, timing, analytics, distribution and storage.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-up animate-fade-up-delay-3">
            {["Operators", "Developers", "Publishers"].map((role) => (
              <div key={role} className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-5 text-center">
                <div className="text-primary font-semibold text-2xl">{role}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 animate-fade-up animate-fade-up-delay-4">
            {[
              "Stores & manages builds",
              "Optimizes deployments",
              "Manages computers & groups",
              "Launches and monitors status",
              "Assigns content versions",
              "Custom dashboards",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-foreground text-body text-xl">
                <span className="text-primary text-xl">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 animate-fade-up animate-fade-up-delay-5">
            <div className="text-lg text-muted-foreground text-body font-medium mb-3">Supports:</div>
            <div className="flex flex-wrap gap-3">
              {["Theme Park Attractions", "Gallery Exhibits", "VR Arcades", "Motion Simulators"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-lg text-body">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl px-6 py-5 animate-fade-up animate-fade-up-delay-5">
              <div className="text-primary font-semibold text-2xl mb-2">Future-Proofing Your Projects</div>
              <p className="text-muted-foreground text-body text-lg leading-relaxed">
                HoloCommand is operations-ready for protoyping and deploying emerging technoloy in the entertainment space for your specific venue, upgrade, or validation requirements.
              </p>
          </div>
        </div>

        {/* Right side images */}
        <div className="w-[960px] flex flex-col justify-center px-10 animate-fade-up animate-fade-up-delay-3">
          <div className="relative w-[800px] mx-auto">
            {/* Main analytics image */}
            <img src={analyticsImg} alt="Custom Dashboards & Analytics" className="w-[756px] rounded-xl shadow-2xl border border-primary/20 relative z-10" />

            {/* Operator image */}
            <img src={operator1Img} alt="VR Operator" className="w-[560px] h-[300px] object-cover rounded-xl shadow-2xl border border-primary/20 mt-6 ml-auto relative z-20" />

            {/* Buttons - overlapping top-left of operator */}
            <img src={buttonsImg} alt="Interactive interface" className="absolute w-[280px] h-[200px] object-cover rounded-xl shadow-2xl border border-primary/30 z-30" style={{ top: '460px', left: '-20px' }} />

            {/* Mario Kart - now on left, aligned with buttons' left edge above */}
            <img src={mkImg} alt="Mario Kart VR experience" className="w-[560px] h-[300px] object-cover rounded-xl shadow-2xl border border-primary/20 mt-6 relative z-20 block ml-[-20px]" />

            {/* Code snippet - now on right, aligned with operator's right edge above */}
            <img src={codeImg} alt="Development code" className="absolute w-[280px] h-[200px] object-cover rounded-xl shadow-2xl border border-primary/30 z-30" style={{ top: '784px', right: '0px' }} />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
