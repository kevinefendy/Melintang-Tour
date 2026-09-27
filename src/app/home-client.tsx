"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, Wallet, Headset, Globe2 } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import { ArticleCard, DestinationCard, PromoCard, TourCard } from "@/components/cards";
import { Button, SectionHeading } from "@/components/ui";
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
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop"
            alt="Japan temple and mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/55" />
        </div>
        <div className="container-shell relative pb-24 pt-12 text-center md:pb-28 md:pt-16">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 text-center shadow-xl md:p-8">
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-ocean md:text-4xl">
              Berhenti Scroll. Mulai Packing.
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-slate-600">
              48.000+ traveler sudah berangkat bareng Melintang Tour. Destinasi,
              tour, dan itinerary beres dalam satu platform — giliranmu kapan?
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-8 text-white md:gap-12">
            {[
              ["48K+", "Traveler berangkat"],
              ["120+", "Tour terkurasi"],
              ["4.9/5", "Rating traveler"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-heading text-xl font-extrabold md:text-2xl">{n}</p>
                <p className="mt-0.5 text-xs font-semibold text-slate-200 md:text-[13px]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container-shell">
        <div className="relative z-10 mx-auto -mt-20 max-w-5xl md:-mt-24">
          <SearchBox />
        </div>
      </div>

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
              <div key={w.title} className="rounded-3xl bg-navy-light p-6">
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
