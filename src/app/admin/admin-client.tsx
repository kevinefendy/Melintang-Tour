"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Map, Route, CalendarCheck, Users, Newspaper,
  Plus, Pencil, Trash2, Eye, Search,
} from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { formatIDR } from "@/lib/format";
import { articles, destinations, tours } from "@/data/mock";

type Tab = "overview" | "tours" | "destinations" | "bookings" | "customers" | "articles";

const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "tours", label: "Tours", icon: Route },
  { id: "destinations", label: "Destinations", icon: Map },
  { id: "bookings", label: "Bookings", icon: CalendarCheck },
  { id: "customers", label: "Customers", icon: Users },
  { id: "articles", label: "Articles", icon: Newspaper },
];

const metrics = [
  { label: "Total Bookings", value: "1,284" },
  { label: "Revenue", value: "Rp 8,2 M" },
  { label: "Active Tours", value: "24" },
  { label: "Customers", value: "9,410" },
  { label: "Pending Payments", value: "37" },
  { label: "Upcoming Departures", value: "12" },
];

const bookingRows = [
  { id: "MT-2027-000123", customer: "Kevin E.", tour: "Japan Golden Route", dep: "12 Mar 2027", travelers: 2, total: 50498000, pay: "Paid", book: "Confirmed" },
  { id: "MT-2027-000098", customer: "Sinta P.", tour: "Bali Escape", dep: "06 Mar 2027", travelers: 2, total: 8159800, pay: "Pending", book: "Waiting" },
  { id: "MT-2027-000087", customer: "Andre W.", tour: "Europe Highlights", dep: "10 Jun 2027", travelers: 4, total: 203580000, pay: "Paid", book: "Confirmed" },
];

export default function AdminClient() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <main className="container-shell py-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ocean">Admin • MVP</p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-navy">Dashboard</h1>
        </div>
        <Badge tone="dark">Role: Admin (frontend mock)</Badge>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${tab === t.id ? "bg-navy text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">{m.label}</p>
              <p className="mt-1 font-heading text-3xl font-extrabold text-navy">{m.value}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "tours" && (
        <AdminTable
          title="Tour Management"
          action="Create Tour"
          head={["Tour", "Type", "Price", "Status", "Actions"]}
          rows={tours.map((t) => [
            t.title,
            t.type.join(", "),
            formatIDR(t.price),
            <Badge key="s" tone="green">Published</Badge>,
            <RowActions key="a" />,
          ])}
        />
      )}

      {tab === "destinations" && (
        <AdminTable
          title="Destination Management"
          action="Create Destination"
          head={["Destination", "Region", "Tours", "Status", "Actions"]}
          rows={destinations.slice(0, 6).map((d) => [
            d.name,
            d.region,
            String(tours.filter((t) => t.destinationSlug === d.slug).length),
            <Badge key="s" tone="blue">Active</Badge>,
            <RowActions key="a" />,
          ])}
        />
      )}

      {tab === "bookings" && (
        <AdminTable
          title="Booking Management"
          action="Export"
          head={["Booking ID", "Customer", "Tour", "Total", "Payment", "Booking", "Actions"]}
          rows={bookingRows.map((b) => [
            b.id, b.customer, `${b.tour} • ${b.dep} • ${b.travelers}pax`, formatIDR(b.total),
            <Badge key="p" tone={b.pay === "Paid" ? "green" : "amber"}>{b.pay}</Badge>,
            <Badge key="b" tone={b.book === "Confirmed" ? "green" : "amber"}>{b.book}</Badge>,
            <span key="a" className="flex gap-1">
              <IconBtn label="View"><Eye className="h-4 w-4" /></IconBtn>
              <IconBtn label="Confirm"><Plus className="h-4 w-4" /></IconBtn>
            </span>,
          ])}
        />
      )}

      {tab === "customers" && (
        <AdminTable
          title="Customer Management"
          action="Export"
          head={["Customer", "Email", "Bookings", "Upcoming", "Actions"]}
          rows={[
            ["Kevin Efendy", "kevin@mail.id", "4", "Japan Golden Route • 12 Mar 2027", <RowActions key="a" />],
            ["Sinta Putri", "sinta@mail.id", "2", "Bali Escape • 06 Mar 2027", <RowActions key="a2" />],
            ["Andre Wijaya", "andre@mail.id", "6", "Europe Highlights • 10 Jun 2027", <RowActions key="a3" />],
          ]}
        />
      )}

      {tab === "articles" && (
        <AdminTable
          title="Article Management"
          action="Create Article"
          head={["Title", "Category", "Date", "Status", "Actions"]}
          rows={articles.map((a) => [
            a.title, a.category, a.date,
            <Badge key="s" tone="blue">Published</Badge>,
            <RowActions key="a" />,
          ])}
        />
      )}

      <p className="mt-6 text-xs text-slate-400">
        Frontend-only mock: create/edit/delete/publish/confirm/cancel/refund adalah UI. Data sensitif customer dibatasi role & kebutuhan akses (PRD §37).
      </p>
    </main>
  );
}

function AdminTable({ title, action, head, rows }: { title: string; action: string; head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
        <h2 className="font-heading text-lg font-extrabold text-navy">{title}</h2>
        <div className="flex gap-2">
          <label className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <input placeholder="Search…" className="w-28 bg-transparent outline-none" />
          </label>
          <Button size="sm"><Plus className="h-4 w-4" /> {action}</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-y border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wider text-slate-400">
              {head.map((h) => <th key={h} className="px-5 py-3 font-bold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                {r.map((c, j) => <td key={j} className="px-5 py-3.5 font-medium text-slate-700">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-5 py-3 text-xs text-slate-400">
        <Link href="/login" className="font-bold text-ocean">Admin login</Link> required in production (JWT + RBAC).
      </p>
    </div>
  );
}

function RowActions({ children }: { children?: React.ReactNode }) {
  if (children) return <>{children}</>;
  return (
    <span className="flex gap-1">
      <IconBtn label="View"><Eye className="h-4 w-4" /></IconBtn>
      <IconBtn label="Edit"><Pencil className="h-4 w-4" /></IconBtn>
      <IconBtn label="Delete"><Trash2 className="h-4 w-4" /></IconBtn>
    </span>
  );
}

function IconBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button title={label} className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-navy hover:text-white">
      {children}
    </button>
  );
}
