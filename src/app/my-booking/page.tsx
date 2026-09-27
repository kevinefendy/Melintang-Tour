import type { Metadata } from "next";
import MyBookingClient from "./my-booking-client";

export const metadata: Metadata = {
  title: "My Booking",
  description: "View your booked trips — traveler, tour, itinerary, payment & consultant.",
};

export default function MyBookingPage() {
  return <MyBookingClient />;
}
