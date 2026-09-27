import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Plane } from "lucide-react";
import { formatIDR } from "@/lib/format";
import type { Article, Deal, Destination, Experience, Tour } from "@/data/mock";
import { tours as allTours } from "@/data/mock";
import { Badge, Rating } from "./ui";

export function DestinationCard({ d }: { d: Destination }) {
  const count = allTours.filter((t) => t.destinationSlug === d.slug).length;
  return (
    <Link href={`/destinations/${d.slug}`} className="img-zoom group block overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative h-40">
        <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute left-3 top-3"><Badge tone="white">{d.region}</Badge></div>
      </div>
      <div className="flex items-center justify-between gap-3 p-3.5">
        <div>
          <h3 className="font-heading text-base font-extrabold text-navy group-hover:text-ocean">{d.name}</h3>
          <p className="mt-0.5 text-xs font-semibold text-slate-500">
            {count > 0 ? `${count} Tour tersedia` : "Jelajahi destinasi"} • {d.tagline}
          </p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-ocean transition-colors group-hover:bg-ocean group-hover:text-white">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function TourCard({ t }: { t: Tour }) {
  const discount = t.originalPrice ? Math.round((1 - t.price / t.originalPrice) * 100) : 0;
  return (
    <div className="img-zoom group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative h-40">
        <Image src={t.image} alt={t.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute left-3 top-3 flex gap-2">
          {discount > 0 && <Badge tone="amber">Hemat {discount}%</Badge>}
          {t.type.slice(0, 1).map((x) => <Badge key={x} tone="white">{x}</Badge>)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <Rating value={t.rating} count={t.reviews} />
        <h3 className="mt-1.5 font-heading text-[15px] font-extrabold leading-snug text-navy">{t.title}</h3>
        <ul className="mt-2.5 space-y-1.5 border-t border-slate-100 pt-2.5 text-[13px] font-medium text-slate-600">
          <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-ocean" /> {t.duration}</li>
          <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-ocean" /> {t.route.join(" - ")}</li>
          <li className="flex items-center gap-2"><Plane className="h-3.5 w-3.5 text-ocean" /> Berangkat dari {t.departure}</li>
        </ul>
        <div className="mt-3 border-t border-slate-100 pt-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Mulai dari</p>
          {t.originalPrice && <p className="text-xs text-slate-400 line-through">{formatIDR(t.originalPrice)}</p>}
          <p className="font-heading text-lg font-extrabold text-ocean">{formatIDR(t.price)}<span className="text-xs font-normal text-slate-400"> /orang</span></p>
          <Link href={`/tours/${t.slug}`} className="mt-2.5 block rounded-lg bg-ocean py-2 text-center text-sm font-bold text-white hover:bg-ocean-dark">
            Lihat Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ExperienceCard({ e }: { e: Experience }) {
  return (
    <Link href="/experiences" className="img-zoom group overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative h-36">
        <Image src={e.image} alt={e.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
        <div className="absolute left-4 top-4"><Badge tone="white">{e.category}</Badge></div>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-[15px] font-extrabold text-navy group-hover:text-ocean">{e.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin className="h-3.5 w-3.5" /> {e.location}
        </p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-1.5 text-slate-500"><Clock className="h-4 w-4" /> {e.duration}</span>
          <span className="font-heading font-extrabold text-ocean">{formatIDR(e.price)}<span className="text-xs font-normal text-slate-400"> /pax</span></span>
        </div>
      </div>
    </Link>
  );
}

export function PromoCard({ deal }: { deal: Deal }) {
  return (
    <Link href="/deals" className="img-zoom group relative block overflow-hidden rounded-xl">
      <div className="relative h-56">
        <Image src={deal.image} alt={deal.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-navy/65" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center p-6">
        <Badge tone="amber" className="w-fit">Special Offer — {deal.category}</Badge>
        <h3 className="mt-2.5 max-w-sm font-heading text-xl font-extrabold text-white md:text-2xl">{deal.title}</h3>
        <p className="mt-1.5 text-sm text-slate-200">
          <span className="line-through opacity-70">{formatIDR(deal.originalPrice)}</span>
          {" → "}<span className="font-heading text-lg font-extrabold text-sky">{formatIDR(deal.finalPrice)}</span>
        </p>
        <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-navy">
          View Deal <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link href="/travel-guide" className="img-zoom group overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative h-36">
        <Image src={a.image} alt={a.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute left-4 top-4"><Badge tone="white">{a.category}</Badge></div>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-[15px] font-extrabold leading-snug text-navy line-clamp-2 group-hover:text-ocean">{a.title}</h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{a.excerpt}</p>
        <p className="mt-3 text-xs font-semibold text-slate-400">{a.date} • {a.readTime} read</p>
      </div>
    </Link>
  );
}
