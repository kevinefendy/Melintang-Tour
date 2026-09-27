import type { Metadata } from "next";
import DealsClient from "./deals-client";

export const metadata: Metadata = {
  title: "Deals",
  description: "Flash sale, early bird & seasonal travel promos with transparent pricing.",
};

export default function DealsPage() {
  return <DealsClient />;
}
