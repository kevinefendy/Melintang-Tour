"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, Wallet, Headset, Globe2 } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import { ArticleCard, DestinationCard, PromoCard, TourCard } from "@/components/cards";
import { Badge, Button, SectionHeading } from "@/components/ui";
import ConsultantCTA from "@/components/sections";
import { articles, deals, destinations, tours } from "@/data/mock";

const filters = ["All", "Domestic", "International", "Family", "Honeymoon", "Private", "Group"] as const;

const why = [
  { icon: Sparkles, title: "01 — Curated Journey", desc: "Paket perjalanan disusun untuk pengalaman yang lebih terarah." },
  { icon: Wallet, title: "02 — Transparent Information", desc: "Harga, itinerary, fasilitas, dan ketentuan tampil jelas." },
  { icon: ShieldCheck, title: "03 — Easy Booking", desc: "Dari pilih tour sampai pembayaran, dibuat sederhana." },
  { icon: Headset, title: "04 — Travel Support", desc: "Butuh bantuan? Travel consultant siap dihubungi." },
  { icon: Globe2, title: "05 — One Travel Platform", desc: "Destinasi, tour, experience, promo & guide dalam satu tempat." },
];

export default function HomeClient() {
  const [tab, setTab] = useState<(typeof filters)[number]>("All");
  const filtered = tab === "All" ? tours.slice(0, 4) : tours.filter((t) => t.type.includes(tab as never)).slice(0, 4);
  const list = filtered.length > 0 ? filtered : tours.slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Tropical beach"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy" />
        </div>
        <div className="container-shell relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge tone="white" className="mb-5">One-stop travel platform</Badge>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Explore Beyond Boundaries.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-200 md:text-lg">
              Discover destinations, curated tours, and unforgettable travel experiences with Melintang Tour.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <SearchBox />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <span className="opacity-70">Popular:</span>
            {["Bali", "Japan", "Korea", "Europe"].map((p) => (
              <Link key={p} href={`/tours?q=${p}`} className="rounded-full border border-white/25 px-3 py-1 hover:bg-white hover:text-navy">
                {p}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="container-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Ke mana mimpimu membawamu?"
          desc="Destinasi paling dicari traveler Indonesia — dari staycation Bali sampai golden route Jepang."
          action={<Link href="/destinations"><Button variant="outline">Explore All Destinations <ArrowRight className="h-4 w-4" /></Button></Link>}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.filter((d) => d.popular).slice(0, 4).map((d) => (
            <DestinationCard key={d.slug} d={d} />
          ))}
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="border-y border-slate-200/70 bg-white">
        <div className="container-shell py-16 md:py-20">
          <SectionHeading
            eyebrow="Featured Tours"
            title="Paket tour pilihan minggu ini"
            desc="Harga transparan, itinerary jelas, berangkat bareng grup atau private."
          />
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setTab(f)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${tab === f ? "bg-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((t) => (
              <TourCard key={t.slug} t={t} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/tours"><Button variant="secondary">Lihat Semua Tour <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="container-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="Special Offers"
          title="Promo yang bikin koper duluan yang berangkat"
          action={<Link href="/deals"><Button variant="outline">All Deals <ArrowRight className="h-4 w-4" /></Button></Link>}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {deals.slice(0, 2).map((d) => (
            <PromoCard key={d.slug} deal={d} />
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-navy">
        <div className="container-shell py-16 md:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky">Why Melintang Tour</p>
          <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold text-white md:text-4xl">
            Bukan sekadar katalog. Ini cara baru merencanakan perjalanan.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {why.map((w) => (
              <div key={w.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <w.icon className="h-7 w-7 text-sky" />
                <h3 className="mt-4 font-heading font-extrabold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section className="container-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="Travel Guide"
          title="Baca dulu, biar traveling makin mantap"
          action={<Link href="/travel-guide"><Button variant="outline">All Articles <ArrowRight className="h-4 w-4" /></Button></Link>}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </div>
      </section>

      <ConsultantCTA />
    </main>
  );
}
