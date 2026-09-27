import Link from "next/link";
import { Compass, Phone, Mail, MapPin } from "lucide-react";
import { navLinks } from "@/data/mock";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-extrabold text-white">
              Melintang<span className="text-sky"> Tour</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Explore Beyond Boundaries. Destinasi, curated tour, experience & travel
            guide dalam satu platform.
          </p>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/my-booking" className="hover:text-white">My Booking</Link></li>
            <li><Link href="/login" className="hover:text-white">Login / Register</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">Talk to Consultant</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky" /> +62 21 555 0134</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky" /> hello@melintangtour.id</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky" /> Jakarta, Indonesia</li>
          </ul>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-bold text-white hover:bg-ocean-dark">
            Talk to a Travel Consultant
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 md:flex-row">
          <span>© 2026 Melintang Tour. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
