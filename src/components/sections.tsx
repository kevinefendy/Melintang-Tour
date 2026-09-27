import Link from "next/link";
import { Button } from "./ui";

export default function ConsultantCTA({
  title = "Need Help Planning Your Trip?",
  desc = "Cerita aja maunya ke mana, berapa budget, berapa orang — travel consultant kami bantu susun itinerary terbaik.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="container-shell pb-14">
      <div className="rounded-2xl bg-white px-6 py-10 text-center ring-1 ring-slate-200 md:py-12">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ocean">Travel Consultant</p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-navy md:text-3xl">{title}</h2>
          <p className="mt-2 text-[15px] text-slate-600">{desc}</p>
          <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
            <Link href="/contact"><Button>Talk to a Travel Consultant</Button></Link>
            <Link href="/custom-trip"><Button variant="outline">Build My Trip</Button></Link>
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
