"use client";

import Image from "next/image";
import { aboutImages } from "@/lib/images";
import { FadeIn } from "@/components/FadeIn";

const chapters = [
  {
    id: "genesis",
    kicker: "Our Genesis",
    title: "Founded in the pause between seasons.",
    copy: [
      "SØNDER began in a rented loft above Nyhavn, where two pattern-cutters refused the calendar of fashion. They waited until a garment felt inevitable — then cut it once.",
      "The name is a northern word for the space that remains after something is taken away. That space is the collection.",
    ],
    image: aboutImages[0],
    alt: "Atelier interior",
    reverse: false,
  },
  {
    id: "craft",
    kicker: "The Craftsmanship",
    title: "Hands, light, and a single needle.",
    copy: [
      "Every SØNDER piece is drafted in Copenhagen and finished in small rooms in Dhaka, where the stitch density is counted, not estimated.",
      "We work with mills that still speak in grams per metre. Horn, mother-of-pearl, undyed wool. Hardware that does not shine unless asked.",
    ],
    image: aboutImages[2],
    alt: "Tailoring craftsmanship",
    reverse: true,
  },
  {
    id: "sustain",
    kicker: "Sustainability",
    title: "Make less. Make it last a decade.",
    copy: [
      "We do not produce for the sake of a drop. AW26 is twelve silhouettes, numbered, and then closed. Deadstock is recut into samples, never landfill.",
      "Fibres are traceable. Dyes are low-impact. Packaging is paper, unbleached, and meant to be kept. Luxury, to us, is the refusal to hurry.",
    ],
    image: aboutImages[3],
    alt: "Natural fibres and cloth",
    reverse: false,
  },
];

export function AboutStory() {
  return (
    <div className="pb-28 pt-32">
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={aboutImages[0]}
          alt="SØNDER cinematic editorial"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-[#09090b]/30" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 pb-20">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
              The House
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
              A quieter kind of ambition.
            </h1>
          </FadeIn>
        </div>
      </section>

      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className="border-t border-white/10 px-6 py-24 md:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <FadeIn className={chapter.reverse ? "lg:order-2" : undefined}>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111113]">
                <Image
                  src={chapter.image}
                  alt={chapter.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.12} className={chapter.reverse ? "lg:order-1" : undefined}>
              <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
                {chapter.kicker}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                {chapter.title}
              </h2>
              {chapter.copy.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 max-w-lg text-sm leading-8 text-muted md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>
          </div>
        </section>
      ))}
    </div>
  );
}
