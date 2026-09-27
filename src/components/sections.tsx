import Link from "next/link";
import { Headset, Check } from "lucide-react";
import { Button } from "./ui";

export default function ConsultantCTA({
  title = "Need Help Planning Your Trip?",
  desc = "Cerita aja maunya ke mana, berapa budget, berapa orang — travel consultant kami bantu susun itinerary terbaik.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="container-shell pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-14 text-center md:py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ocean/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky">
            <Headset className="h-7 w-7" />
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-slate-300">{desc}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact"><Button size="lg">Talk to a Travel Consultant</Button></Link>
            <Link href="/custom-trip"><Button size="lg" variant="light">Build My Trip</Button></Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> Fast response</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> WhatsApp / Phone / Email</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> Free consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ItineraryTimeline({
  items,
}: {
  items: { day: string; title: string; desc: string; meals: string; hotel: string }[];
}) {
  return (
    <ol className="relative space-y-0 border-l-2 border-slate-200 pl-0">
      {items.map((it, i) => (
        <li key={i} className="relative pb-8 pl-10 last:pb-0">
          <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-ocean text-[10px] font-extrabold text-white ring-4 ring-sky/20">
            {i + 1}
          </span>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ocean">{it.day}</p>
          <h4 className="mt-1 font-heading text-lg font-extrabold text-navy">{it.title}</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{it.desc}</p>
          <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">Meals: {it.meals}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">Hotel: {it.hotel}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
