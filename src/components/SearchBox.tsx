"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin, CalendarDays, Users, Route, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "tour", label: "Tour", icon: Route, placeholder: "Mau ke mana? cth. Japan, Bali, Europe…" },
  { id: "destination", label: "Destinasi", icon: MapPin, placeholder: "Cari destinasi… cth. Korea, Türkiye…" },
  { id: "experience", label: "Experience", icon: Sparkles, placeholder: "Cari aktivitas… cth. snorkeling, food tour…" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function SearchBox() {
  const router = useRouter();
  const [tab, setTab] = useState<TabId>("tour");
  const [q, setQ] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const active = tabs.find((t) => t.id === tab)!;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === "tour") {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (date) params.set("date", date);
      if (travelers) params.set("travelers", travelers);
      router.push(`/tours?${params.toString()}`);
    } else if (tab === "destination") {
      router.push(q ? `/destinations?q=${encodeURIComponent(q)}` : "/destinations");
    } else {
      router.push(q ? `/experiences?q=${encodeURIComponent(q)}` : "/experiences");
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white text-left shadow-2xl shadow-navy/30">
      {/* TABS */}
      <div className="flex border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold transition-colors",
              tab === t.id
                ? "bg-white text-ocean shadow-[inset_0_-3px_0_0_#0284c7]"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-navy"
            )}
          >
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {/* FIELDS */}
      <form onSubmit={submit} className="grid gap-0 p-4 md:grid-cols-[1.5fr_1fr_0.9fr_auto] md:items-stretch md:gap-3 md:p-4">
        <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-ocean">
          <Compass className="h-5 w-5 shrink-0 text-ocean" />
          <span className="flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {tab === "tour" ? "Tujuan Tour" : tab === "destination" ? "Nama Destinasi" : "Aktivitas"}
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={active.placeholder}
              className="w-full bg-transparent text-sm font-semibold text-navy outline-none placeholder:font-normal placeholder:text-slate-400"
            />
          </span>
        </label>
        <label className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-ocean md:mt-0">
          <CalendarDays className="h-5 w-5 shrink-0 text-ocean" />
          <span className="flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Tanggal Berangkat</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-navy outline-none"
            />
          </span>
        </label>
        <label className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-ocean md:mt-0">
          <Users className="h-5 w-5 shrink-0 text-ocean" />
          <span className="flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Penumpang</span>
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
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ocean px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-ocean-dark md:mt-0 md:h-full"
        >
          <Search className="h-4 w-4" /> Cari
        </button>
      </form>
    </div>
  );
}
