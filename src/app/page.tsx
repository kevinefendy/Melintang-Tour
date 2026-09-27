import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Explore Beyond Boundaries",
  description:
    "Discover destinations, curated tours, and unforgettable travel experiences with Melintang Tour.",
};

export default function Home() {
  return <HomeClient />;
}
