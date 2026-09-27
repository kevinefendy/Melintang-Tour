import type { Metadata } from "next";
import AdminClient from "./admin-client";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage tours, destinations, bookings, customers & articles (frontend mock).",
};

export default function AdminPage() {
  return <AdminClient />;
}
