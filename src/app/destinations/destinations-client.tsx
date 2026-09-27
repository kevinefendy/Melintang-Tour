"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { DestinationCard } from "@/components/cards";
import { SectionHeading } from "@/components/ui";
import { destinations, regions } from "@/data/mock";

export default function DestinationsClient() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") ?? "");
  const [region, setRegion] = useState<string>(sp.get("region") ?? "All");

  const list = useMemo(() => {
    return destinations.filter((d) => {
      const matchQ = !q || d.name.toLowerCase().includes(q.toLowerCase()) || d.tagline.toLowerCase().includes(q.toLowerCase());
      const matchR = region === "All" || d.region === region;
      return matchQ && matchR;
    });
  }, [q, region]);

  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Destinations"
        title="Jelajahi destinasi impianmu"
        desc="Filter berdasarkan region, cari kota favorit, lalu lanjut ke tour yang tersedia."
      />

      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
        <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search destinations… (mis. Japan, Bali)"
            className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400"
          />
        </label>
      </div>
      <div className="mb-10 flex flex-wrap gap-2">
        {["All", ...regions].map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${region === r ? "bg-navy text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-ocean"}`}
          >
            {r}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center text-slate-500">
          Tidak ada destinasi yang cocok. Coba kata kunci lain.
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => (
            <DestinationCard key={d.slug} d={d} />
          ))}
        </div>
      )}
    </main>
  );
}
