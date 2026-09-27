import type { Metadata } from "next";
import { Suspense } from "react";
import DestinationsClient from "./destinations-client";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore destinations by region — Indonesia, Asia, Europe, Middle East & more.",
};

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div className="container-shell py-16 text-slate-500">Loading destinations…</div>}>
      <DestinationsClient />
    </Suspense>
  );
}
