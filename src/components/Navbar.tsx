"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, User, X, CalendarClock } from "lucide-react";
import { navLinks } from "@/data/mock";
import { cn } from "@/lib/utils";
import { Button } from "./ui";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-white">
            <Compass className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-lg font-extrabold tracking-tight text-navy">
              Melintang<span className="text-ocean"> Tour</span>
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
              Explore Beyond Boundaries
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                pathname === l.href || pathname.startsWith(l.href + "/")
                  ? "bg-navy text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-navy"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/my-booking" className={cn("rounded-full px-4 py-2 text-sm font-semibold", pathname.startsWith("/my-booking") ? "bg-slate-100 text-navy" : "text-slate-600 hover:text-navy")}>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-4 w-4" /> My Booking
            </span>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" /> Login
            </Button>
          </Link>
          <Link href="/custom-trip">
            <Button size="sm">Plan My Trip</Button>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link href="/my-booking" onClick={() => setOpen(false)} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">My Booking</Button>
              </Link>
              <Link href="/custom-trip" onClick={() => setOpen(false)} className="flex-1">
                <Button size="sm" className="w-full">Plan My Trip</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
