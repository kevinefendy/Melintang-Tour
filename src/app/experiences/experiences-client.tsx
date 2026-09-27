"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { ExperienceCard } from "@/components/cards";
import { SectionHeading } from "@/components/ui";
import { experiences } from "@/data/mock";

export default function ExperiencesClient() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") ?? "");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(experiences.map((e) => e.category)))];

  const list = useMemo(
    () =>
      experiences.filter((e) => {
        const mQ = !q || `${e.title} ${e.location}`.toLowerCase().includes(q.toLowerCase());
        const mC = cat === "All" || e.category === cat;
        return mQ && mC;
      }),
    [q, cat]
  );

  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Experiences"
        title="Aktivitas seru di destinasi"
        desc="Snorkeling, cooking class, city tour, theme park — lengkapi trip kamu."
      />
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <label className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari experience…" className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
        </label>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-navy text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => <ExperienceCard key={e.slug} e={e} />)}
      </div>
    </main>
  );
}
