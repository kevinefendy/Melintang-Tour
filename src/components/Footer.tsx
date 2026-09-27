import Link from "next/link";
import { Compass, Phone, Mail, MapPin, Clock } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const layanan = [
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Experiences", href: "/experiences" },
  { label: "Deals & Promo", href: "/deals" },
  { label: "Custom Trip", href: "/custom-trip" },
];

const bantuan = [
  { label: "My Booking / Cek Pesanan", href: "/my-booking" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "Hubungi Consultant", href: "/contact" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Masuk / Daftar", href: "/login" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      {/* CONTACT STRIP */}
      <div className="border-b border-white/10">
        <div className="container-shell grid gap-4 py-8 sm:grid-cols-3">
          {[
            { icon: Phone, title: "Call Us", value: "+62 21 555 0134" },
            { icon: Mail, title: "Mail Us", value: "hello@melintangtour.id" },
            { icon: Clock, title: "Jam Operasional", value: "Senin–Sabtu, 09.00–21.00 WIB" },
          ].map((c) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ocean text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-400">{c.title}</span>
                <span className="block text-sm font-bold text-white">{c.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN COLUMNS */}
      <div className="container-shell grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean text-white">
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-heading text-xl font-extrabold text-white">
              Melintang<span className="text-sky"> Tour</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Explore Beyond Boundaries. Destinasi, curated tour, experience,
            promo & travel guide dalam satu platform.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-slate-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
            Jl. Wisata No. 88, Jakarta Selatan, Indonesia
          </p>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">Layanan</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {layanan.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">Bantuan</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {bantuan.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">Dapatkan Promo Terbaru</p>
          <p className="mt-4 text-sm text-slate-400">
            Daftarkan email untuk flash sale & early bird setiap minggu.
          </p>
          <div className="mt-3">
            <NewsletterForm />
          </div>
          <Link href="/contact" className="mt-4 inline-block rounded-lg bg-ocean px-5 py-2.5 text-sm font-bold text-white hover:bg-ocean-dark">
            Talk to a Travel Consultant
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 md:flex-row">
          <span>© 2026 Melintang Tour. All rights reserved.</span>
          <span>Pembayaran: Transfer Bank • Virtual Account • QRIS • E-Wallet • Kartu Kredit</span>
        </div>
      </div>
    </footer>
  );
}
