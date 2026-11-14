import SlideLayout from "../SlideLayout";
import bg from "@/assets/slides/themed-attractions.png.asset.json";
import execAsset from "@/assets/slides/execution-spectrum-v2.png.asset.json";

export default function XrExecution() {
  return (
    <SlideLayout backgroundImage={bg.url} overlay="dark">
      <div className="w-full h-full flex items-center justify-center p-10">
        <img
          src={execAsset.url}
          alt="Execution: AR, MR and VR project examples across the reality spectrum"
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
    </SlideLayout>
  );
}
