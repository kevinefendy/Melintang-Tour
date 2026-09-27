"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, X, ChevronDown } from "lucide-react";
import { navLinks, regions } from "@/data/mock";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (active: boolean) =>
    cn(
      "py-1 text-[13px] transition-colors",
      active ? "font-semibold text-ocean" : "font-medium text-slate-700 hover:text-ocean"
    );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container-shell flex h-14 items-center justify-between gap-6 md:h-16">
        <div className="flex shrink-0 items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ocean text-white">
              <Compass className="h-4 w-4" />
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tight text-navy">
              Melintang<span className="text-ocean"> Tour</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            <Link href="/" className={linkCls(pathname === "/")}>Home</Link>
            {navLinks.map((l) =>
              l.label === "Destinations" ? (
                <div key={l.href} className="group relative">
                  <Link href={l.href} className={cn(linkCls(isActive(l.href)), "inline-flex items-center gap-0.5")}>
                    {l.label} <ChevronDown className="h-3 w-3" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-lg border border-slate-200 bg-white p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {regions.map((r) => (
                      <Link
                        key={r}
                        href={`/destinations?region=${encodeURIComponent(r)}`}
                        className="block rounded-md px-3 py-2 text-[13px] font-medium text-slate-600 hover:bg-sky-50 hover:text-ocean"
                      >
                        {r}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href} className={linkCls(isActive(l.href))}>
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="hidden shrink-0 items-center lg:flex">
          <Link href="/login" className="py-1 text-[13px] font-medium text-slate-700 hover:text-ocean">
            Masuk
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden">
          <nav className="flex flex-col">
            <Link href="/" onClick={() => setOpen(false)} className={cn("border-b border-slate-100 px-2 py-2.5 text-sm", pathname === "/" ? "font-semibold text-ocean" : "font-medium text-slate-700")}>
              Home
            </Link>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-slate-100 px-2 py-2.5 text-sm",
                  isActive(l.href) ? "font-semibold text-ocean" : "font-medium text-slate-700"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="px-2 py-2.5 text-sm font-medium text-slate-700">
              Masuk / Daftar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
