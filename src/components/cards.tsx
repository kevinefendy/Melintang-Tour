import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { formatIDR } from "@/lib/format";
import type { Article, Deal, Destination, Experience, Tour } from "@/data/mock";
import { Badge, Rating } from "./ui";

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="img-zoom group relative block overflow-hidden rounded-3xl bg-navy">
      <div className="relative h-80">
        <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-navy/55" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <Badge tone="white" className="mb-3">{d.region}</Badge>
        <h3 className="font-heading text-2xl font-extrabold text-white">{d.name}</h3>
        <p className="mt-1 text-sm text-slate-200">{d.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
          Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function TourCard({ t }: { t: Tour }) {
  const discount = t.originalPrice ? Math.round((1 - t.price / t.originalPrice) * 100) : 0;
  return (
    <Link href={`/tours/${t.slug}`} className="img-zoom group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-shadow hover:shadow-xl hover:shadow-navy/10">
      <div className="relative h-56">
        <Image src={t.image} alt={t.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute left-4 top-4 flex gap-2">
          {discount > 0 && <Badge tone="amber">-{discount}%</Badge>}
          <Badge tone="white">{t.duration}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Rating value={t.rating} count={t.reviews} />
        <h3 className="mt-2 font-heading text-lg font-extrabold leading-snug text-navy group-hover:text-ocean">{t.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin className="h-3.5 w-3.5" /> {t.route.join(" • ")}
        </p>
        <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">From</p>
            {t.originalPrice && <p className="text-xs text-slate-400 line-through">{formatIDR(t.originalPrice)}</p>}
            <p className="font-heading text-lg font-extrabold text-ocean">{formatIDR(t.price)}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-bold text-white">
            View Tour <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ExperienceCard({ e }: { e: Experience }) {
  return (
    <Link href="/experiences" className="img-zoom group overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-shadow hover:shadow-xl hover:shadow-navy/10">
      <div className="relative h-48">
        <Image src={e.image} alt={e.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
        <div className="absolute left-4 top-4"><Badge tone="white">{e.category}</Badge></div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-extrabold text-navy group-hover:text-ocean">{e.title}</h3>
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
    <Link href="/deals" className="img-zoom group relative block overflow-hidden rounded-3xl">
      <div className="relative h-72">
        <Image src={deal.image} alt={deal.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-navy/65" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center p-8">
        <Badge tone="amber" className="w-fit">Special Offer — {deal.category}</Badge>
        <h3 className="mt-3 max-w-sm font-heading text-2xl font-extrabold text-white md:text-3xl">{deal.title}</h3>
        <p className="mt-2 text-sm text-slate-200">
          <span className="line-through opacity-70">{formatIDR(deal.originalPrice)}</span>
          {" → "}<span className="font-heading text-xl font-extrabold text-sky">{formatIDR(deal.finalPrice)}</span>
        </p>
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy">
          View Deal <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link href="/travel-guide" className="img-zoom group overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-shadow hover:shadow-xl hover:shadow-navy/10">
      <div className="relative h-48">
        <Image src={a.image} alt={a.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute left-4 top-4"><Badge tone="white">{a.category}</Badge></div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-extrabold leading-snug text-navy line-clamp-2 group-hover:text-ocean">{a.title}</h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{a.excerpt}</p>
        <p className="mt-3 text-xs font-semibold text-slate-400">{a.date} • {a.readTime} read</p>
      </div>
    </Link>
  );
}
