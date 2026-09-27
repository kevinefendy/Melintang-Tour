"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, X, Phone, Mail, ChevronDown, ReceiptText, CircleUserRound } from "lucide-react";
import { navLinks, regions } from "@/data/mock";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_0_#e2e8f0]">
      {/* TOP UTILITY STRIP */}
      <div className="bg-navy text-slate-200">
        <div className="container-shell flex h-9 items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-4">
            <a href="tel:+62215550134" className="hidden items-center gap-1.5 hover:text-white sm:inline-flex">
              <Phone className="h-3.5 w-3.5 text-sky" /> +62 21 555 0134
            </a>
            <a href="mailto:hello@melintangtour.id" className="hidden items-center gap-1.5 hover:text-white md:inline-flex">
              <Mail className="h-3.5 w-3.5 text-sky" /> hello@melintangtour.id
            </a>
            <span className="inline-flex items-center gap-1.5 text-slate-400 sm:hidden">
              <Phone className="h-3.5 w-3.5 text-sky" /> +62 21 555 0134
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/my-booking" className="inline-flex items-center gap-1.5 hover:text-white">
              <ReceiptText className="h-3.5 w-3.5 text-sky" /> Cek Pesanan
            </Link>
            <span className="h-3 w-px bg-white/20" />
            <Link href="/login" className="inline-flex items-center gap-1.5 hover:text-white">
              <CircleUserRound className="h-3.5 w-3.5 text-sky" /> Masuk / Daftar
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="container-shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean text-white">
            <Compass className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-xl font-extrabold tracking-tight text-navy">
              Melintang<span className="text-ocean"> Tour</span>
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
              Explore Beyond Boundaries
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) =>
            l.label === "Destinations" ? (
              <div key={l.href} className="group relative">
                <Link
                  href={l.href}
                  className={cn(
                    "inline-flex items-center gap-1 border-b-[3px] py-2 text-sm font-bold transition-colors",
                    isActive(l.href)
                      ? "border-ocean text-ocean"
                      : "border-transparent text-navy hover:border-ocean hover:text-ocean"
                  )}
                >
                  {l.label} <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {regions.map((r) => (
                    <Link
                      key={r}
                      href={`/destinations?region=${encodeURIComponent(r)}`}
                      className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-sky-50 hover:text-ocean"
                    >
                      {r}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "border-b-[3px] py-2 text-sm font-bold transition-colors",
                  isActive(l.href)
                    ? "border-ocean text-ocean"
                    : "border-transparent text-navy hover:border-ocean hover:text-ocean"
                )}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/custom-trip"
            className="rounded-lg bg-ocean px-5 py-2.5 text-sm font-bold text-white hover:bg-ocean-dark"
          >
            Plan My Trip
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-slate-100 px-2 py-3 text-sm font-bold",
                  isActive(l.href) ? "text-ocean" : "text-navy"
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/my-booking" onClick={() => setOpen(false)} className="rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-bold text-navy">
                Cek Pesanan
              </Link>
              <Link href="/custom-trip" onClick={() => setOpen(false)} className="rounded-lg bg-ocean px-4 py-2.5 text-center text-sm font-bold text-white">
                Plan My Trip
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
