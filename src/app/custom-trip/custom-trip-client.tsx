"use client";

import { useState } from "react";
import { CheckCircle2, Compass } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";

const styles = ["Adventure", "Family", "Luxury", "Culture", "Honeymoon", "Relaxation"];

export default function CustomTripClient() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>(["Culture"]);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  if (sent) {
    return (
      <main className="container-shell py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy">Request terkirim!</h1>
          <p className="mt-2 text-slate-600">
            Travel consultant kami akan menghubungimu maks. 1×24 jam dengan itinerary awal + estimasi harga.
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">Request ID: CT-2026-004821</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Custom Trip"
        title="Bangun trip versimu sendiri"
        desc="Isi form di bawah — request dikirim ke travel consultant, bukan sekadar chatbot."
      />
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-2 md:p-10"
      >
        <label className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Destination *</span>
          <input required placeholder="cth. Japan, Bali, Europe…" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Travel Date *</span>
          <input required type="date" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Duration (days) *</span>
          <input required type="number" min={2} max={30} defaultValue={7} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Travelers *</span>
          <input required type="number" min={1} defaultValue={2} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        </label>
        <div className="md:col-span-2">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Travel Style</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {styles.map((s) => (
              <button type="button" key={s} onClick={() => toggle(s)} className={`rounded-full px-4 py-2 text-sm font-bold ${picked.includes(s) ? "bg-navy text-white" : "bg-slate-100 text-slate-600"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Estimated Budget (IDR / person)</span>
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none">
            <option>&lt; Rp 5 jt</option>
            <option>Rp 5 – 15 jt</option>
            <option selected>Rp 15 – 30 jt</option>
            <option>&gt; Rp 30 jt</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Contact (WhatsApp)</span>
          <input required placeholder="08xx…" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        </label>
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Special Request</span>
          <textarea rows={4} placeholder="Alergi makanan, butuh kursi roda, honeymoon surprise…" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        </label>
        <div className="md:col-span-2">
          <Button type="submit" size="lg" className="w-full md:w-auto"><Compass className="h-5 w-5" /> Build My Trip</Button>
          <p className="mt-3 text-xs text-slate-400">Dengan submit, kamu setuju dihubungi travel consultant via WhatsApp.</p>
        </div>
      </form>
    </main>
  );
}
