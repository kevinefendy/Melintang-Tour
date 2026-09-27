"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/cards";
import { SectionHeading } from "@/components/ui";
import { Button } from "@/components/ui";
import { articles, tours } from "@/data/mock";
import { TourCard } from "@/components/cards";

export default function GuideClient() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const list = useMemo(
    () =>
      articles.filter((a) => {
        const mQ = !q || `${a.title} ${a.excerpt}`.toLowerCase().includes(q.toLowerCase());
        const mC = cat === "All" || a.category === cat;
        return mQ && mC;
      }),
    [q, cat]
  );
  const featured = list[0];

  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Travel Guide"
        title="Content → Commerce: baca, terinspirasi, booking"
        desc="Destination guide, travel tips, food, culture, visa & checklist."
      />
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <label className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari artikel…" className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
        </label>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-navy text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <Link href={`/travel-guide/${featured.slug}`} className="img-zoom group relative mb-8 block overflow-hidden rounded-3xl">
          <img src={featured.image} alt={featured.title} className="h-80 w-full object-cover md:h-96" />
          <div className="absolute inset-0 bg-navy/60" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <h2 className="mt-3 max-w-2xl font-heading text-2xl font-extrabold text-white md:text-4xl">{featured.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-200">{featured.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy">Read Article <ArrowRight className="h-4 w-4" /></span>
          </div>
        </Link>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(featured ? 1 : 0).map((a) => <ArticleCard key={a.slug} a={a} />)}
      </div>

      <div className="mt-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-extrabold text-navy">Recommended Tours dari artikel</h2>
          <Link href="/tours"><Button variant="outline">All Tours</Button></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tours.slice(0, 3).map((t) => <TourCard key={t.slug} t={t} />)}
        </div>
      </div>
    </main>
  );
}
