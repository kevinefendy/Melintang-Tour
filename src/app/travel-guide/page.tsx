import type { Metadata } from "next";
import GuideClient from "./guide-client";

export const metadata: Metadata = {
  title: "Travel Guide",
  description: "Destination guides, travel tips, food, culture, visa & checklists.",
};

export default function TravelGuidePage() {
  return <GuideClient />;
}
