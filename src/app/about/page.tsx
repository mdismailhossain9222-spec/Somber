import type { Metadata } from "next";
import { AboutStory } from "@/components/AboutStory";

export const metadata: Metadata = {
  title: "About — SØNDER",
  description:
    "The story of SØNDER: genesis, craftsmanship, and a slower idea of luxury.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutStory />
    </main>
  );
}
