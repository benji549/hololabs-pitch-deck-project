import SlideLayout from "../SlideLayout";
import bg from "@/assets/slides/themed-attractions.png.asset.json";

export default function XrAppendix() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="dark">
      <div className="flex flex-col items-center justify-center h-full px-24">
        <div className="text-primary text-2xl font-semibold tracking-[0.3em] uppercase mb-8 animate-fade-up">
          Hololabs
        </div>
        <h2 className="text-[12rem] font-bold text-foreground leading-none animate-fade-up animate-fade-up-delay-1">
          Appendix
        </h2>
      </div>
    </SlideLayout>
  );
}
