import type { Metadata } from "next";
import ExperiencesClient from "./experiences-client";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Book travel experiences — snorkeling, cooking class, city tours & more.",
};

export default function ExperiencesPage() {
  return <ExperiencesClient />;
}
