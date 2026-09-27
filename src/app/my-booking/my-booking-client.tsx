"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, FileText, Headset, Receipt, TicketCheck } from "lucide-react";
import { Button } from "@/components/ui";
import { formatIDR } from "@/lib/format";
import { tours } from "@/data/mock";

const bookings = [
  { id: "MT-2027-000123", tourSlug: "japan-golden-route", date: "12 March 2027", status: "Confirmed" as const, paid: 50498000, travelers: 2 },
  { id: "MT-2027-000098", tourSlug: "bali-escape", date: "06 March 2027", status: "Pending Payment" as const, paid: 8159800, travelers: 2 },
];

export default function MyBookingClient() {
  const [active, setActive] = useState(bookings[0]);
  const tour = tours.find((t) => t.slug === active.tourSlug)!;

  return (
    <main className="container-shell py-12">
      <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ocean">My Booking</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-navy">Perjalanan yang telah dipesan</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="space-y-3">
          {bookings.map((b) => {
            const t = tours.find((x) => x.slug === b.tourSlug)!;
            return (
              <button key={b.id} onClick={() => setActive(b)} className={`w-full rounded-3xl border-2 p-4 text-left ${active.id === b.id ? "border-ocean bg-sky/5" : "border-slate-200 bg-white"}`}>
                <div className="flex items-center gap-3">
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
                    <Image src={t.image} alt={t.title} fill className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-extrabold text-navy">{t.title}</span>
                    <span className="block text-xs text-slate-500">{b.date} • {b.id}</span>
                    <span className={`mt-1 block text-xs font-bold ${b.status === "Confirmed" ? "text-emerald-700" : "text-amber-700"}`}>{b.status}</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy">{tour.title}</h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-500"><CalendarDays className="h-4 w-4" /> {active.date} • {active.travelers} travelers</p>
            </div>
            <span className={`text-sm font-bold ${active.status === "Confirmed" ? "text-emerald-700" : "text-amber-700"}`}>{active.status}</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { icon: TicketCheck, title: "Tour", desc: `${tour.duration} • ${tour.route.join(" • ")}` },
              { icon: Receipt, title: "Payment", desc: `${formatIDR(active.paid)} • Lunas via QRIS` },
              { icon: FileText, title: "Documents", desc: "E-ticket • Itinerary PDF • Voucher hotel" },
              { icon: Headset, title: "Consultant", desc: "Sinta — +62 812 000 111 (WhatsApp)" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-slate-50 p-5">
                <c.icon className="h-5 w-5 text-ocean" />
                <p className="mt-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">{c.title}</p>
                <p className="mt-1 text-sm font-semibold text-navy">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button>View Booking</Button>
            <Button variant="outline">Download Itinerary</Button>
            <Button variant="outline">Contact Consultant</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
