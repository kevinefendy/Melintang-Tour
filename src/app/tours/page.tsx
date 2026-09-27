import type { Metadata } from "next";
import { Suspense } from "react";
import ToursClient from "./tours-client";

export const metadata: Metadata = {
  title: "Tours",
  description: "Browse curated tour packages — domestic, international, private, group, family & honeymoon.",
};

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="container-shell py-16 text-slate-500">Loading tours…</div>}>
      <ToursClient />
    </Suspense>
  );
}
