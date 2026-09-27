"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  return (
    <main className="container-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Contact & Travel Consultant"
        title="Need Help Planning Your Trip?"
        desc="Hubungi via WhatsApp, phone, email — atau kirim form, consultant balas maks. 1×24 jam."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+62 812 555 0134", note: "Fastest — online 08.00–21.00 WIB" },
            { icon: Phone, label: "Phone", value: "+62 21 555 0134", note: "Mon–Sat, 09.00–18.00 WIB" },
            { icon: Mail, label: "Email", value: "hello@melintangtour.id", note: "Reply maks. 1×24 jam" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-white"><c.icon className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">{c.label}</p>
                <p className="font-heading font-extrabold text-navy">{c.value}</p>
                <p className="text-xs text-slate-500">{c.note}</p>
              </div>
            </div>
          ))}
          <div className="rounded-3xl bg-navy p-6 text-white">
            <p className="font-heading font-extrabold">Talk to a Travel Consultant</p>
            <p className="mt-1 text-sm text-slate-300">Gratis, tanpa komitmen. Cocok untuk private / group / honeymoon.</p>
            <Button variant="light" className="mt-4 w-full">Chat WhatsApp</Button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          {sent ? (
            <p className="flex items-center gap-2 rounded-2xl bg-emerald-50 p-5 text-sm font-semibold text-emerald-800">
              <CheckCircle2 className="h-5 w-5" /> Pesan terkirim! Consultant kami segera menghubungimu.
            </p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-3 md:grid-cols-2">
              <input required placeholder="Full name *" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
              <input required type="email" placeholder="Email *" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
              <input placeholder="Phone / WhatsApp" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean md:col-span-2" />
              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none md:col-span-2">
                <option>General inquiry</option>
                <option>Private trip</option>
                <option>Group booking</option>
                <option>Honeymoon</option>
                <option>Existing booking help</option>
              </select>
              <textarea required rows={5} placeholder="Ceritakan kebutuhan trip kamu… *" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean md:col-span-2" />
              <Button size="lg" className="md:col-span-2"><Send className="h-4 w-4" /> Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
