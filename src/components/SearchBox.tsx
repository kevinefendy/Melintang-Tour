"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin, CalendarDays, Users } from "lucide-react";
import { Button } from "./ui";

export default function SearchBox({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (date) params.set("date", date);
    if (travelers) params.set("travelers", travelers);
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className="w-full rounded-3xl bg-white p-3 shadow-2xl shadow-navy/20 md:rounded-full md:py-2 md:pl-2"
    >
      <div className={`grid gap-2 ${compact ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-[1.4fr_1fr_0.8fr_auto]"}`}>
        <label className="flex items-center gap-3 rounded-2xl px-4 py-3 md:rounded-full md:py-2.5 hover:bg-slate-50">
          <MapPin className="h-5 w-5 shrink-0 text-ocean" />
          <span className="flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Where do you want to go?</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Bali, Japan, Europe…"
              className="w-full bg-transparent text-sm font-semibold text-navy outline-none placeholder:text-slate-400"
            />
          </span>
        </label>
        {!compact && (
          <>
            <label className="flex items-center gap-3 rounded-2xl px-4 py-3 md:rounded-full md:py-2.5 hover:bg-slate-50">
              <CalendarDays className="h-5 w-5 shrink-0 text-ocean" />
              <span className="flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Travel Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-navy outline-none"
                />
              </span>
            </label>
            <label className="flex items-center gap-3 rounded-2xl px-4 py-3 md:rounded-full md:py-2.5 hover:bg-slate-50">
              <Users className="h-5 w-5 shrink-0 text-ocean" />
              <span className="flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Travelers</span>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-navy outline-none"
                >
                  {["1", "2", "3", "4", "5+"].map((n) => (
                    <option key={n} value={n}>{n} orang</option>
                  ))}
                </select>
              </span>
            </label>
          </>
        )}
        <div className="flex items-center p-1">
          <Button type="submit" className="w-full md:w-auto">
            <Search className="h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </form>
  );
}
