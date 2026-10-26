import { Contact } from "@/components/Contact";
import { Featured } from "@/components/Featured";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Philosophy } from "@/components/Philosophy";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Featured />
      <Philosophy />
      <Contact />
    </main>
  );
}
