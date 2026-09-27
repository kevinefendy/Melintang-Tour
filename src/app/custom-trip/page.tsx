import type { Metadata } from "next";
import CustomTripClient from "./custom-trip-client";

export const metadata: Metadata = {
  title: "Custom Trip",
  description: "Request custom itinerary by destination, budget, duration & travel style.",
};

export default function CustomTripPage() {
  return <CustomTripClient />;
}
