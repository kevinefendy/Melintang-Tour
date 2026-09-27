import type { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui";

function Shell({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <main className="container-shell flex justify-center py-14">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white"><Compass className="h-6 w-6" /></span>
        <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{desc}</p>
        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <Shell title="Welcome back" desc="Login untuk booking, My Booking, review & custom trip.">
      <form className="space-y-3" action="/profile">
        <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        <input required type="password" placeholder="Password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-xs font-bold text-ocean">Forgot password?</Link>
        </div>
        <Button className="w-full" size="lg">Login</Button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-500">
        Belum punya akun? <Link href="/register" className="font-bold text-ocean">Register</Link>
      </p>
    </Shell>
  );
}
