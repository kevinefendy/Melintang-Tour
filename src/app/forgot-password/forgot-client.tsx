"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";

export default function ForgotClient() {
  const [sent, setSent] = useState(false);
  return (
    <main className="container-shell flex justify-center py-14">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white"><KeyRound className="h-6 w-6" /></span>
        <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy">Reset password</h1>
        {sent ? (
          <p className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
            <CheckCircle2 className="h-5 w-5" /> Link reset terkirim! Cek inbox email kamu.
          </p>
        ) : (
          <>
            <p className="mt-1 text-sm text-slate-500">Masukkan email — link reset dikirim dalam 5 menit.</p>
            <form className="mt-6 space-y-3 text-left" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-ocean" />
              <Button className="w-full" size="lg">Send Reset Link</Button>
            </form>
          </>
        )}
        <p className="mt-4 text-sm text-slate-500"><Link href="/login" className="font-bold text-ocean">Back to login</Link></p>
      </div>
    </main>
  );
}
