import type { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <main className="container-shell flex justify-center py-14">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white"><Compass className="h-6 w-6" /></span>
        <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy">Buat akun</h1>
        <p className="mt-1 text-sm text-slate-500">Satu akun untuk semua: booking, custom trip & review.</p>
        <form className="mt-6 space-y-3" action="/profile">
          <input required placeholder="Full name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
          <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
          <input required placeholder="Phone / WhatsApp" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
          <input required type="password" placeholder="Password (min. 8 karakter)" minLength={8} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
          <Button className="w-full" size="lg">Register</Button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-500">
          Sudah punya akun? <Link href="/login" className="font-bold text-ocean">Login</Link>
        </p>
      </div>
    </main>
  );
}
