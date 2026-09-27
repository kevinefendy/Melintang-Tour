import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a travel consultant via WhatsApp, phone, email or contact form.",
};

export default function ContactPage() {
  return <ContactClient />;
}
