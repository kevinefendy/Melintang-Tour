import type { Metadata } from "next";
import { User, Mail, Phone, Globe2, Heart, LogOut, TicketCheck } from "lucide-react";
import { Button } from "@/components/ui";
import { tours } from "@/data/mock";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <main className="container-shell py-12">
      <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ocean">Profile</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-navy">Halo, Kevin 👋</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="h-fit rounded-3xl bg-navy p-6 text-white">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-extrabold">K</span>
          <p className="mt-3 font-heading text-lg font-extrabold">Kevin Efendy</p>
          <p className="text-sm text-slate-400">Member since 2025 • 4 trips</p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky" /> kevin@mail.id</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky" /> 0812 000 111</p>
            <p className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-sky" /> Indonesia</p>
          </div>
          <Button variant="light" className="mt-5 w-full"><LogOut className="h-4 w-4" /> Logout</Button>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="flex items-center gap-2 font-heading font-extrabold text-navy"><User className="h-5 w-5 text-ocean" /> Personal Information</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {["Full Name|Kevin Efendy", "Email|kevin@mail.id", "Phone|0812 000 111", "Nationality|Indonesia"].map((f) => {
                const [label, val] = f.split("|");
                return (
                  <label key={label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-slate-500">{label}</span>
                    <input defaultValue={val} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none focus:border-ocean" />
                  </label>
                );
              })}
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="flex items-center gap-2 font-heading font-extrabold text-navy"><Heart className="h-5 w-5 text-ocean" /> Travel Preferences</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Culture", "Food", "Beach", "Mountains"].map((p) => (
                <span key={p} className="rounded-full bg-sky/10 px-4 py-1.5 text-sm font-bold text-ocean-dark">{p}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="flex items-center gap-2 font-heading font-extrabold text-navy"><TicketCheck className="h-5 w-5 text-ocean" /> Booking History</h2>
            <div className="mt-3 space-y-2">
              {tours.slice(0, 3).map((t) => (
                <div key={t.slug} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-navy">{t.title}</span>
                  <span className="text-slate-500">{t.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
