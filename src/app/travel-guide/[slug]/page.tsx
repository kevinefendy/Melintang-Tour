import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from "lucide-react";
import { ArticleCard, TourCard } from "@/components/cards";
import { Badge, Button } from "@/components/ui";
import { articles, tours } from "@/data/mock";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return { title: "Article not found" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  return (
    <main className="container-shell py-12">
      <Link href="/travel-guide" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy ring-1 ring-slate-200">
        <ArrowLeft className="h-4 w-4" /> All Articles
      </Link>
      <div className="mx-auto mt-6 max-w-3xl">
        <Badge tone="blue">{a.category}</Badge>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy md:text-5xl">{a.title}</h1>
        <p className="mt-3 flex items-center gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {a.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {a.readTime} read</span>
        </p>
      </div>
      <div className="img-zoom mx-auto mt-6 max-w-4xl overflow-hidden rounded-3xl">
        <img src={a.image} alt={a.title} className="h-72 w-full object-cover md:h-[420px]" />
      </div>
      <article className="mx-auto mt-8 max-w-3xl space-y-4 leading-relaxed text-slate-700">
        <p>{a.excerpt}</p>
        <p>
          Perjalanan yang baik selalu dimulai dari riset yang baik. Artikel ini merangkum hal-hal
          paling penting yang perlu kamu tahu — dari waktu terbaik berkunjung, estimasi budget,
          sampai jebakan yang sering dialami first-timer.
        </p>
        <h2 className="font-heading text-xl font-extrabold text-navy">1. Rencanakan waktu terbaik</h2>
        <p>Musim menentukan harga dan pengalaman. Cek bagian “Best Time to Visit” di halaman destinasi sebelum booking tiket.</p>
        <h2 className="font-heading text-xl font-extrabold text-navy">2. Siapkan dokumen lebih awal</h2>
        <p>Visa, paspor (min. 6 bulan), asuransi perjalanan, dan itinerary cetak — siapkan minimal 30 hari sebelum berangkat.</p>
        <h2 className="font-heading text-xl font-extrabold text-navy">3. Pilih tour yang transparan</h2>
        <p>Pastikan harga, hotel, meals, dan itinerary tertulis jelas — seperti semua paket di Melintang Tour.</p>
      </article>

      <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-navy p-8 text-center text-white">
        <h2 className="font-heading text-2xl font-extrabold">Suka artikel ini? Wujudkan trip-nya.</h2>
        <p className="mt-2 text-sm text-slate-300">Tour terkait sudah dikurasi — tinggal pilih tanggal & booking.</p>
        <Link href="/tours"><Button className="mt-5">Lihat Tour Terkait <ArrowRight className="h-4 w-4" /></Button></Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tours.slice(0, 3).map((t) => <TourCard key={t.slug} t={t} />)}
      </div>
      <h2 className="mt-12 font-heading text-2xl font-extrabold text-navy">Artikel lainnya</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.filter((x) => x.slug !== a.slug).slice(0, 3).map((x) => <ArticleCard key={x.slug} a={x} />)}
      </div>
    </main>
  );
}
