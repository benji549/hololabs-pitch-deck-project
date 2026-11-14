import { ComponentType } from "react";
import SlideTitle from "./SlideTitle";
import SlideShowreel from "./SlideShowreel";
import SlideServices from "./SlideServices";
import SlideMarioKart from "./SlideMarioKart";
import SlideVR from "./SlideVR";
import SlideInteractiveWalls from "./SlideInteractiveWalls";
import SlideHoloCommand from "./SlideHoloCommand";
import SlideArtDesign from "./SlideArtDesign";
import SlidePartnership from "./SlidePartnership";
import SlideContact from "./SlideContact";

export interface SlideData {
  title: string;
  component: ComponentType;
}

export const slides: SlideData[] = [
  { title: "Showreel", component: SlideShowreel },
  { title: "Introduction", component: SlideTitle },
  { title: "Mario Kart: Koopa's Challenge", component: SlideMarioKart },
  { title: "Free-Roam VR", component: SlideVR },
  { title: "Interactive Walls", component: SlideInteractiveWalls },
  { title: "Art & Design", component: SlideArtDesign },
  { title: "HoloCommand OS", component: SlideHoloCommand },
  
  { title: "Why Partner With Us", component: SlidePartnership },
  { title: "Contact", component: SlideContact },
];
