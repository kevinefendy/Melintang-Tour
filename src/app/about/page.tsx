import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Sparkles, Wallet, ShieldCheck, Headset } from "lucide-react";
import { Button } from "@/components/ui";
import ConsultantCTA from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description: "About Melintang Tour — one travel platform for destinations, tours & experiences.",
};

const values = [
  { icon: Sparkles, title: "Curated Journey", desc: "Setiap paket disusun dengan itinerary yang jelas & terarah." },
  { icon: Wallet, title: "Transparent", desc: "Harga, fasilitas, dan ketentuan tampil apa adanya." },
  { icon: ShieldCheck, title: "Trustworthy", desc: "Pembayaran aman, dokumen lengkap, consultant real." },
  { icon: Headset, title: "Human Support", desc: "Digital yang cepat + manusia yang peduli." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy">
        <div className="container-shell py-16 text-center md:py-24">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky"><Compass className="h-7 w-7" /></span>
          <h1 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-extrabold text-white md:text-5xl">
            Satu platform untuk seluruh perjalananmu.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Melintang Tour menggabungkan destination discovery, curated tour, travel booking,
            experience & consultation — dari inspirasi sampai boarding.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/tours"><Button>Explore Tours</Button></Link>
            <Link href="/contact"><Button variant="light">Contact Us</Button></Link>
          </div>
        </div>
      </section>
      <section className="container-shell grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="rounded-3xl border border-slate-200 bg-white p-6">
            <v.icon className="h-7 w-7 text-ocean" />
            <h2 className="mt-3 font-heading font-extrabold text-navy">{v.title}</h2>
            <p className="mt-1.5 text-sm text-slate-600">{v.desc}</p>
          </div>
        ))}
      </section>
      <section className="container-shell pb-6">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 text-center md:grid-cols-3">
          {[["120+", "Curated tours"], ["48K", "Happy travelers"], ["4.9/5", "Average rating"]].map(([n, l]) => (
            <div key={l}>
              <p className="font-heading text-4xl font-extrabold text-navy">{n}</p>
              <p className="text-sm text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="pt-10"><ConsultantCTA /></div>
    </main>
  );
}
