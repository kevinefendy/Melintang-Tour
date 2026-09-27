"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CreditCard, QrCode, Wallet, Landmark } from "lucide-react";
import { Button } from "@/components/ui";
import { formatIDR, formatDateID } from "@/lib/format";
import type { Tour } from "@/data/mock";

const steps = ["Departure", "Travelers", "Information", "Review", "Payment"];

const payMethods = [
  { id: "va", label: "Virtual Account", desc: "BCA • BRI • Mandiri • BNI", icon: Landmark },
  { id: "qris", label: "QRIS", desc: "Scan sekali, semua e-wallet", icon: QrCode },
  { id: "ewallet", label: "E-Wallet", desc: "OVO • GoPay • DANA • ShopeePay", icon: Wallet },
  { id: "card", label: "Credit / Debit Card", desc: "Visa • Mastercard • JCB", icon: CreditCard },
];

export default function BookingClient({ tour }: { tour: Tour }) {
  const [step, setStep] = useState(0);
  const [depIdx, setDepIdx] = useState(0);
  const [count, setCount] = useState(2);
  const [pay, setPay] = useState("qris");
  const [done, setDone] = useState(false);

  const dep = tour.departures[depIdx];
  const total = useMemo(() => dep.price * count, [dep, count]);
  const fee = Math.round(total * 0.02);
  const grand = total + fee;

  if (done) {
    return (
      <main className="container-shell py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white"><Check className="h-7 w-7" /></span>
          <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy">Booking Confirmed!</h1>
          <p className="mt-2 text-slate-600">E-ticket & itinerary dikirim ke email kamu. Sampai jumpa di {tour.route[0]}!</p>
          <div className="mt-5 rounded-2xl bg-white p-5 text-left text-sm">
            <p className="flex justify-between"><span className="text-slate-500">Booking ID</span><span className="font-bold">MT-2027-000123</span></p>
            <p className="mt-1 flex justify-between"><span className="text-slate-500">Tour</span><span className="font-bold">{tour.title}</span></p>
            <p className="mt-1 flex justify-between"><span className="text-slate-500">Departure</span><span className="font-bold">{formatDateID(dep.date)}</span></p>
            <p className="mt-1 flex justify-between"><span className="text-slate-500">Travelers</span><span className="font-bold">{count} orang</span></p>
            <p className="mt-1 flex justify-between"><span className="text-slate-500">Total paid</span><span className="font-bold text-ocean">{formatIDR(grand)}</span></p>
          </div>
          <div className="mt-5 flex gap-2">
            <a href="/my-booking" className="flex-1"><Button className="w-full">View My Booking</Button></a>
            <a href="/" className="flex-1"><Button variant="outline" className="w-full">Back Home</Button></a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container-shell py-12">
      <h1 className="font-heading text-3xl font-extrabold text-navy">Booking — {tour.title}</h1>
      <p className="mt-1 text-sm text-slate-500">{tour.duration} • {tour.route.join(" • ")}</p>

      {/* STEPPER */}
      <ol className="mt-6 flex flex-wrap gap-2">
        {steps.map((s, i) => (
          <li key={s} className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${i === step ? "bg-navy text-white" : i < step ? "bg-emerald-100 text-emerald-800" : "bg-white text-slate-500 ring-1 ring-slate-200"}`}>
            {i < step ? <Check className="h-3.5 w-3.5" /> : <span>{i + 1}</span>} {s}
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          {step === 0 && (
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Select Departure</h2>
              <div className="mt-4 grid gap-3">
                {tour.departures.map((d, i) => (
                  <button key={d.date} onClick={() => setDepIdx(i)} className={`flex items-center justify-between rounded-2xl border-2 p-4 text-left ${i === depIdx ? "border-ocean bg-sky/5" : "border-slate-200"}`}>
                    <div>
                      <p className="font-heading font-extrabold text-navy">{formatDateID(d.date)}</p>
                      <p className="text-xs font-bold text-slate-500">{d.seatsLeft} seats left</p>
                    </div>
                    <p className="font-heading font-extrabold text-ocean">{formatIDR(d.price)}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Select Travelers</h2>
              <div className="mt-4 flex items-center gap-4">
                <button onClick={() => setCount(Math.max(1, count - 1))} className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl font-bold">−</button>
                <p className="font-heading text-3xl font-extrabold">{count} <span className="text-base font-normal text-slate-500">orang</span></p>
                <button onClick={() => setCount(Math.min(10, count + 1))} className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">+</button>
              </div>
              <p className="mt-3 text-sm text-slate-500">Anak &lt; 2 tahun gratis (infant, tanpa seat). Grup 10+ hubungi consultant untuk harga khusus.</p>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Traveler Information</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">Primary traveler</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {["Full Name", "Email", "Phone", "Date of Birth", "Nationality", "Passport Number"].map((f) => (
                  <label key={f} className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-slate-500">{f} *</span>
                    <input required placeholder={f} type={f === "Date of Birth" ? "date" : f === "Email" ? "email" : "text"} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none focus:border-ocean" />
                  </label>
                ))}
              </div>
              {count > 1 && (
                <>
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-400">Additional travelers ({count - 1})</p>
                  {Array.from({ length: count - 1 }).map((_, i) => (
                    <div key={i} className="mt-3 grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-3">
                      {(["Full Name", "Passport Number", "Date of Birth"] as const).map((f) => (
                        <input key={f} placeholder={`${f} #${i + 2}`} type={f === "Date of Birth" ? "date" : "text"} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-ocean" />
                      ))}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Review Booking</h2>
              <dl className="mt-4 space-y-2 rounded-2xl bg-slate-50 p-5 text-sm">
                <div className="flex justify-between"><dt className="text-slate-500">Tour</dt><dd className="font-bold">{tour.title}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Departure</dt><dd className="font-bold">{formatDateID(dep.date)} dari {tour.departure}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Travelers</dt><dd className="font-bold">{count} orang</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Subtotal</dt><dd className="font-bold">{formatIDR(total)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Service fee (2%)</dt><dd className="font-bold">{formatIDR(fee)}</dd></div>
                <div className="flex justify-between border-t border-slate-200 pt-2"><dt className="font-bold">Total</dt><dd className="font-heading text-lg font-extrabold text-ocean">{formatIDR(grand)}</dd></div>
              </dl>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">Payment</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {payMethods.map((m) => (
                  <button key={m.id} onClick={() => setPay(m.id)} className={`flex items-start gap-3 rounded-2xl border-2 p-4 text-left ${pay === m.id ? "border-ocean bg-sky/5" : "border-slate-200"}`}>
                    <m.icon className="h-5 w-5 text-ocean" />
                    <span><span className="block text-sm font-extrabold text-navy">{m.label}</span><span className="block text-xs text-slate-500">{m.desc}</span></span>
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm text-amber-800 ring-1 ring-amber-200">
                Selesaikan pembayaran <span className="font-extrabold">{formatIDR(grand)}</span> dalam 60 menit. Status: <span className="font-extrabold">Pending</span> → Paid / Expired / Cancelled / Refunded.
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            {step < 4 ? (
              <Button onClick={() => setStep(step + 1)}>Continue <ArrowRight className="h-4 w-4" /></Button>
            ) : (
              <Button onClick={() => setDone(true)}>Pay {formatIDR(grand)}</Button>
            )}
          </div>
        </div>

        {/* SUMMARY */}
        <aside className="h-fit rounded-3xl bg-navy p-6 text-white lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Booking summary</p>
          <h3 className="mt-2 font-heading text-lg font-extrabold">{tour.title}</h3>
          <p className="text-sm text-slate-300">{formatDateID(dep.date)} • {count} travelers</p>
          <div className="mt-4 space-y-1.5 text-sm">
            <p className="flex justify-between text-slate-300"><span>Subtotal</span><span>{formatIDR(total)}</span></p>
            <p className="flex justify-between text-slate-300"><span>Service fee</span><span>{formatIDR(fee)}</span></p>
            <p className="flex justify-between border-t border-white/10 pt-2 font-heading text-lg font-extrabold"><span>Total</span><span className="text-sky">{formatIDR(grand)}</span></p>
          </div>
        </aside>
      </div>
    </main>
  );
}
