"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="bg-navy text-white">
      <div className="container-shell flex h-10 items-center justify-center gap-2 text-center text-[13px] font-semibold">
        <p className="truncate">
          Flash Sale: Thailand Adventure hemat 10% — berakhir 10 Februari 2027.
          {" "}
          <Link href="/deals" className="inline-flex items-center gap-0.5 font-bold text-sky hover:underline">
            Lihat Deals <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </p>
        <button
          onClick={() => setShow(false)}
          aria-label="Tutup pengumuman"
          className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
