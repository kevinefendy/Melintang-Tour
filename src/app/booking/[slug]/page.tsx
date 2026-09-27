import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingClient from "./booking-client";
import { tours } from "@/data/mock";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Booking", description: "Select departure, fill traveler info, review & pay." };
}

export default async function BookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();
  return <BookingClient tour={tour} />;
}
