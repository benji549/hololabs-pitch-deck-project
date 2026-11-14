import SlideLayout from "../SlideLayout";
import bg from "@/assets/slides/themed-attractions.png.asset.json";
import designAsset from "@/assets/slides/design-spectrum.png.asset.json";
import conceptAsset from "@/assets/slides/concept-spectrum.png.asset.json";

export default function XrDesignConcept() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="dark">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-10 py-10">
        <img
          src={designAsset.url}
          alt="Design: augmented, mixed and virtual reality illustrated across the reality spectrum"
          className="w-full min-h-0 flex-1 object-contain rounded-2xl"
        />
        <img
          src={conceptAsset.url}
          alt="Concept sketch: augmented reality, mixed reality with props, and virtual reality"
          className="w-full min-h-0 flex-1 object-contain rounded-2xl"
        />
      </div>
    </SlideLayout>
  );
}
