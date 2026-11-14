import { SlideData } from "./slideData";
import SlideShowreel from "./SlideShowreel";
import XrFormat from "./xr/XrFormat";
import XrMotionSeats from "./xr/XrMotionSeats";
import XrIaapaEurope from "./xr/XrIaapaEurope";
import XrWhyNow from "./xr/XrWhyNow";
import XrChallenges from "./xr/XrChallenges";
import XrRoomFlow from "./xr/XrRoomFlow";
import XrWhatWeNeed from "./xr/XrWhatWeNeed";

import XrAbyssVault from "./xr/XrAbyssVault";
import XrTeam from "./xr/XrTeam";
import XrMarketOpportunities from "./xr/XrMarketOpportunities";
import XrTogether from "./xr/XrTogether";
import XrWhyProps from "./xr/XrWhyProps";
import XrAppendix from "./xr/XrAppendix";
import XrExecution from "./xr/XrExecution";
import XrDesignConcept from "./xr/XrDesignConcept";
import XrWalkThruMusic from "./xr/XrWalkThruMusic";
import XrCompetitorPositioning from "./xr/XrCompetitorPositioning";
import XrFinancialProjections from "./xr/XrFinancialProjections";
import XrAbyssTrailer from "./xr/XrAbyssTrailer";

export const xrSlides: SlideData[] = [
  { title: "Showreel", component: SlideShowreel },
  { title: "The Format", component: XrFormat },
  { title: "Why Motion Seats?", component: XrMotionSeats },
  { title: "Room Flow", component: XrRoomFlow },
  { title: "Atrium at IAAPA Europe (London, Sept 2026)", component: XrIaapaEurope },
  { title: "The Challenges", component: XrChallenges },
  { title: "Abyss Vault", component: XrAbyssVault },
  { title: "Market & Opportunities", component: XrMarketOpportunities },
  { title: "Team", component: XrTeam },
  { title: "Partner model", component: XrWhatWeNeed },
  { title: "Together, We Can", component: XrTogether },
  { title: "Appendix", component: XrAppendix },
  { title: "Abyss: Vault trailer", component: XrAbyssTrailer },
];

// Hidden slides: saved separately and not reachable by navigation.
export const hiddenXrSlides: SlideData[] = [
  { title: "Financial Projections", component: XrFinancialProjections },
  { title: "Why Now", component: XrWhyNow },
  { title: "Why Mixed Reality with Props?", component: XrWhyProps },
  { title: "Competitor Positioning", component: XrCompetitorPositioning },
  { title: "Design & Concept", component: XrDesignConcept },
  { title: "Execution", component: XrExecution },
  { title: "Iron Maiden – Futureality", component: XrWalkThruMusic },
];
