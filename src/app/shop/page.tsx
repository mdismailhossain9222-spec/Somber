import type { Metadata } from "next";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop — SØNDER",
  description:
    "The AW26 collection. Twelve silhouettes in wool, silk, and merino. Quiet luxury from SØNDER.",
};

export default function ShopPage() {
  return (
    <main>
      <ShopClient />
    </main>
  );
}
