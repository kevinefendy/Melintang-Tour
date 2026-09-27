"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="flex items-center gap-2 rounded-lg bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-300">
        <CheckCircle2 className="h-5 w-5" /> Berhasil! Cek email untuk konfirmasi.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
      className="flex overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/15 focus-within:ring-sky"
    >
      <input
        required
        type="email"
        placeholder="Alamat email kamu"
        className="w-full bg-transparent px-4 py-3 text-sm font-medium text-white outline-none placeholder:text-slate-400"
      />
      <button type="submit" aria-label="Subscribe" className="flex items-center gap-2 bg-ocean px-5 text-sm font-bold text-white hover:bg-ocean-dark">
        <Send className="h-4 w-4" />
        <span className="hidden sm:inline">Subscribe</span>
      </button>
    </form>
  );
}
