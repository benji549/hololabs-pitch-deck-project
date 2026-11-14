import SlideLayout from "../SlideLayout";
import { ExternalLink } from "lucide-react";
import hololabsLogoAsset from "@/assets/hololabs-logo-studio-gradient-v2.png.asset.json";
import bg from "@/assets/slides/themed-attractions.png.asset.json";

const hololabsLogo = hololabsLogoAsset.url;

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/11MschAfO-aVDKLuMbfPEaun9AFzHX435pH9fYb5ZGwM/edit?gid=799752264#gid=799752264";

export default function XrFinancials() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="dark">
      <img src={hololabsLogo} alt="Hololabs" className="absolute top-[20px] left-[10px] w-72 z-20" />

      <div className="flex flex-col justify-center h-full px-24 pt-[170px] pb-[140px]">
        <div className="text-primary text-lg font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          Appendix
        </div>
        <h2 className="text-7xl font-bold text-foreground leading-tight mb-8 animate-fade-up animate-fade-up-delay-1">
          Financial <span className="text-primary">estimations</span>
        </h2>
        <p className="text-2xl text-muted-foreground text-body leading-relaxed max-w-[1100px] mb-12 animate-fade-up animate-fade-up-delay-2">
          Detailed CapEx, operating cost, throughput and revenue modelling for the Atrium format
          lives in the working spreadsheet.
        </p>

        <a
          href={SHEET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 self-start rounded-2xl border border-primary/40 bg-primary/10 px-8 py-5 text-2xl font-medium text-primary hover:bg-primary/20 transition-colors animate-fade-up animate-fade-up-delay-3"
        >
          <ExternalLink className="w-7 h-7" />
          Open the financial model spreadsheet
        </a>
      </div>
    </SlideLayout>
  );
}
