import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Lightbulb, MapPin } from "lucide-react";
import { ArticleCard, TourCard } from "@/components/cards";
import { Badge, Button, Rating } from "@/components/ui";
import ConsultantCTA from "@/components/sections";
import { articles, destinations, tours } from "@/data/mock";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) return { title: "Destination not found" };
  return {
    title: d.name,
    description: `Discover ${d.name} — ${d.tagline}`,
  };
}

export default async function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) notFound();

  const relatedTours = tours.filter((t) => t.destinationSlug === d.slug);
  const relatedArticles = articles.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image src={d.image} alt={d.name} fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/20" />
        </div>
        <div className="container-shell relative py-16 md:py-24">
          <Link href="/destinations" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" /> All Destinations
          </Link>
          <div className="mt-6 max-w-2xl">
            <Badge tone="white">{d.region}</Badge>
            <h1 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-6xl">Discover {d.name}</h1>
            <p className="mt-3 text-lg text-slate-200">{d.tagline}</p>
            <div className="mt-4 flex items-center gap-3">
              <Rating value={d.rating} className="text-white" />
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-300"><CalendarDays className="h-4 w-4" /> {d.bestTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-10 py-12 md:grid-cols-[1.6fr_1fr] md:py-16">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy">Overview</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{d.description}</p>

          <h3 className="mt-10 font-heading text-xl font-extrabold text-navy">Popular Cities</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {d.cities.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy ring-1 ring-slate-200">
                <MapPin className="h-3.5 w-3.5 text-ocean" /> {c}
              </span>
            ))}
          </div>

          <h3 className="mt-10 font-heading text-xl font-extrabold text-navy">Things To Do</h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {d.thingsToDo.map((t) => (
              <li key={t} className="flex items-start gap-2.5 rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 ring-1 ring-slate-200/70">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" /> {t}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-heading text-xl font-extrabold text-navy">Best Time to Visit</h3>
          <p className="mt-2 rounded-2xl bg-sky/10 p-4 text-sm font-semibold text-ocean-dark">{d.bestTime}</p>

          {relatedTours.length > 0 && (
            <>
              <div className="mt-10 flex items-end justify-between">
                <h3 className="font-heading text-xl font-extrabold text-navy">Popular Tours in {d.name}</h3>
                <Link href="/tours" className="inline-flex items-center gap-1 text-sm font-bold text-ocean">View all <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {relatedTours.map((t) => (
                  <TourCard key={t.slug} t={t} />
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl bg-navy p-6 text-white">
            <h3 className="font-heading text-lg font-extrabold">Plan trip ke {d.name}?</h3>
            <p className="mt-2 text-sm text-slate-300">Minta itinerary custom sesuai budget & durasi kamu — gratis konsultasi.</p>
            <Link href="/custom-trip"><Button className="mt-4 w-full">Build My Trip</Button></Link>
            <Link href="/contact"><Button variant="light" className="mt-2 w-full">Ask Consultant</Button></Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="font-heading font-extrabold text-navy">Travel Guide terkait</h3>
            <div className="mt-4 grid gap-4">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </div>
        </aside>
      </section>

      <ConsultantCTA />
    </main>
  );
}
