"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TicketPercent, CalendarClock, FileText, ArrowRight } from "lucide-react";
import { Badge, Button, SectionHeading } from "@/components/ui";
import { formatIDR, formatDateID } from "@/lib/format";
import { deals, tours } from "@/data/mock";

const cats = ["All", "Flash Sale", "Early Bird", "Seasonal", "Family", "Honeymoon", "Group"] as const;

export default function DealsClient() {
  const [cat, setCat] = useState<string>("All");
  const list = useMemo(() => deals.filter((d) => cat === "All" || d.category === cat), [cat]);

  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Deals"
        title="Promo perjalanan terbaik"
        desc="Flash sale, early bird, seasonal — semua dengan terms yang jelas."
      />
      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-navy text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {list.map((d) => {
          const tour = tours.find((t) => t.slug === d.tourSlug);
          return (
            <article key={d.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="bg-navy p-6 text-white">
                <div className="flex items-center justify-between">
                  <Badge tone="amber"><TicketPercent className="h-3 w-3" /> {d.category}</Badge>
                  <span className="font-heading text-2xl font-extrabold">-{d.discount}</span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-extrabold">{d.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  <span className="line-through opacity-60">{formatIDR(d.originalPrice)}</span>
                  {" → "}<span className="font-heading text-lg font-extrabold text-sky">{formatIDR(d.finalPrice)}</span>
                </p>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <CalendarClock className="h-4 w-4 text-ocean" /> Valid until {formatDateID(d.validUntil)}
                </p>
                <div className="mt-3 rounded-2xl bg-slate-50 p-4">
                  <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">
                    <FileText className="h-3.5 w-3.5" /> Terms & Conditions
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {d.terms.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
                <div className="mt-4 flex gap-2">
                  {tour && <Link href={`/tours/${tour.slug}`} className="flex-1"><Button className="w-full">View Deal <ArrowRight className="h-4 w-4" /></Button></Link>}
                  <Link href="/contact"><Button variant="outline">Ask Consultant</Button></Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
