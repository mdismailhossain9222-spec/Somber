import type { Metadata } from "next";
import { LookbookGallery } from "@/components/LookbookGallery";

export const metadata: Metadata = {
  title: "Lookbook — SØNDER",
  description:
    "The AW26 lookbook. Cinematic studies in cloth, light, and silhouette.",
};

export default function LookbookPage() {
  return (
    <main>
      <LookbookGallery />
    </main>
  );
}
