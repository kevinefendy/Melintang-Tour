"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { TourCard } from "@/components/cards";
import { SectionHeading } from "@/components/ui";
import { tours } from "@/data/mock";

type Sort = "recommended" | "lowest" | "highest" | "shortest";

const typeOptions = ["All", "Domestic", "International", "Private", "Group", "Family", "Honeymoon"] as const;

export default function ToursClient() {
  const sp = useSearchParams();
  const initialQ = sp.get("q") ?? "";
  const [q, setQ] = useState(initialQ);
  const [type, setType] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("recommended");
  const [maxPrice, setMaxPrice] = useState<number>(55000000);

  const list = useMemo(() => {
    let r = tours.filter((t) => {
      const hay = `${t.title} ${t.route.join(" ")}`.toLowerCase();
      const matchQ = !q || hay.includes(q.toLowerCase());
      const matchT = type === "All" || t.type.includes(type as never);
      const matchP = t.price <= maxPrice;
      return matchQ && matchT && matchP;
    });
    if (sort === "lowest") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "highest") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "shortest") r = [...r].sort((a, b) => a.days - b.days);
    return r;
  }, [q, type, sort, maxPrice]);

  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Tours"
        title="Pilih paket tour favoritmu"
        desc="Bandingkan harga, durasi, itinerary & fasilitas. Semua transparan."
      />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* FILTER SIDEBAR */}
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
          <p className="flex items-center gap-2 font-heading font-extrabold text-navy">
            <SlidersHorizontal className="h-4 w-4" /> Filter & Sort
          </p>

          <label className="mt-4 flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2.5">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari tour…"
              className="w-full bg-transparent text-sm font-semibold outline-none"
            />
          </label>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-400">Tour Type</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {typeOptions.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${type === t ? "bg-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-400">Max Price</p>
          <input
            type="range"
            min={4000000}
            max={55000000}
            step={1000000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 w-full accent-sky-600"
          />
          <p className="text-sm font-bold text-ocean">≤ Rp {maxPrice.toLocaleString("id-ID")}</p>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-400">Sort by</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold"
          >
            <option value="recommended">Recommended</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
            <option value="shortest">Shortest Duration</option>
          </select>
        </aside>

        {/* GRID */}
        <div>
          <p className="mb-4 text-sm text-slate-500">
            Menampilkan <span className="font-bold text-navy">{list.length}</span> tour
          </p>
          {list.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center text-slate-500">
              Tidak ada tour yang cocok dengan filter kamu.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {list.map((t) => (
                <TourCard key={t.slug} t={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
