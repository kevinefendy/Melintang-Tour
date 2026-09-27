import type { Metadata } from "next";
import { Suspense } from "react";
import ExperiencesClient from "./experiences-client";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Book travel experiences — snorkeling, cooking class, city tours & more.",
};

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="container-shell py-16 text-slate-500">Loading experiences…</div>}>
      <ExperiencesClient />
    </Suspense>
  );
}
