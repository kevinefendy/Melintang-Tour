import type { Metadata } from "next";
import DestinationsClient from "./destinations-client";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore destinations by region — Indonesia, Asia, Europe, Middle East & more.",
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}
