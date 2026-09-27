import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, BedDouble, Bus, CalendarDays, Check, Clock,
  MapPin, Plane, UtensilsCrossed, UserCheck, X,
} from "lucide-react";
import { TourCard } from "@/components/cards";
import { Badge, Button, Rating } from "@/components/ui";
import { ItineraryTimeline } from "@/components/sections";
import ConsultantCTA from "@/components/sections";
import { formatIDR, formatDateID } from "@/lib/format";
import { tours } from "@/data/mock";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = tours.find((x) => x.slug === slug);
  if (!t) return { title: "Tour not found" };
  return { title: t.title, description: `${t.title} — ${t.duration}, from ${formatIDR(t.price)}` };
}

export default async function TourDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tours.find((x) => x.slug === slug);
  if (!t) notFound();

  const others = tours.filter((x) => x.slug !== t.slug).slice(0, 3);

  const info = [
    { icon: Clock, label: "Duration", value: t.duration },
    { icon: MapPin, label: "Route", value: t.route.join(" • ") },
    { icon: Plane, label: "Departure", value: t.departure },
    { icon: CalendarDays, label: "Next departure", value: formatDateID(t.departures[0].date) },
    { icon: BedDouble, label: "Hotel", value: "4-star equivalent" },
    { icon: Bus, label: "Transport", value: "Private coach + flights" },
    { icon: UtensilsCrossed, label: "Meals", value: "As per itinerary" },
    { icon: UserCheck, label: "Guide", value: "Tour leader + local guide" },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image src={t.image} alt={t.title} fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/30" />
        </div>
        <div className="container-shell relative py-14 md:py-20">
          <Link href="/tours" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" /> All Tours
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.type.map((x) => <Badge key={x} tone="white">{x}</Badge>)}
          </div>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold text-white md:text-5xl">{t.title}</h1>
          <p className="mt-3 text-lg text-slate-200">{t.duration} • {t.route.join(" • ")}</p>
          <div className="mt-3"><Rating value={t.rating} count={t.reviews} className="text-white" /></div>
        </div>
      </section>

      <section className="container-shell grid gap-8 py-12 md:grid-cols-[1.6fr_1fr]">
        <div>
          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {info.map((i) => (
              <div key={i.label} className="rounded-2xl border border-slate-200/80 bg-white p-4">
                <i.icon className="h-5 w-5 text-ocean" />
                <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">{i.label}</p>
                <p className="mt-0.5 text-sm font-bold text-navy">{i.value}</p>
              </div>
            ))}
          </div>

          {/* ITINERARY */}
          <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">Itinerary</h2>
          <div className="mt-5 rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8">
            <ItineraryTimeline items={t.itinerary} />
          </div>

          {/* FACILITIES */}
          <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">Facilities</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6">
              <p className="font-heading font-extrabold text-emerald-800">Included</p>
              <ul className="mt-3 space-y-2 text-sm text-emerald-900">
                {t.included.map((x) => <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4" /> {x}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50/60 p-6">
              <p className="font-heading font-extrabold text-rose-800">Excluded</p>
              <ul className="mt-3 space-y-2 text-sm text-rose-900">
                {t.excluded.map((x) => <li key={x} className="flex items-center gap-2"><X className="h-4 w-4" /> {x}</li>)}
              </ul>
            </div>
          </div>

          {/* DEPARTURES */}
          <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">Available Departures</h2>
          <div className="mt-4 grid gap-3">
            {t.departures.map((d) => (
              <div key={d.date} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="font-heading font-extrabold text-navy">{formatDateID(d.date)}</p>
                  <p className={`text-xs font-bold ${d.seatsLeft <= 5 ? "text-rose-600" : "text-emerald-600"}`}>
                    {d.seatsLeft} seats left
                  </p>
                </div>
                <p className="font-heading font-extrabold text-ocean">{formatIDR(d.price)}<span className="text-xs font-normal text-slate-400"> /pax</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* STICKY PRICE CARD */}
        <aside>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-navy/5 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Starting from</p>
            {t.originalPrice && <p className="text-sm text-slate-400 line-through">{formatIDR(t.originalPrice)}</p>}
            <p className="font-heading text-3xl font-extrabold text-navy">{formatIDR(t.price)}<span className="text-sm font-normal text-slate-400"> /person</span></p>
            <Link href={`/booking/${t.slug}`}><Button className="mt-5 w-full" size="lg">Book Now</Button></Link>
            <Link href="/contact"><Button variant="outline" className="mt-2 w-full">Ask Consultant</Button></Link>
            <p className="mt-4 text-center text-xs text-slate-400">Free consultation • No hidden fees • Secure payment</p>
          </div>
        </aside>
      </section>

      <section className="container-shell pb-16">
        <h2 className="font-heading text-2xl font-extrabold text-navy">You may also like</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((x) => <TourCard key={x.slug} t={x} />)}
        </div>
      </section>

      <ConsultantCTA />
    </main>
  );
}
