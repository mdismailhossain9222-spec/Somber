"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { philosophyImage } from "@/lib/images";

export function Philosophy() {
  return (
    <section className="border-t border-white/10 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#111113]">
            <Image
              src={philosophyImage}
              alt="SØNDER brand philosophy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            Brand Philosophy
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            We cut until only truth remains.
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-8 text-muted md:text-base">
            SØNDER is a study in absence. We remove ornament, noise, and
            seasonal theatrics until the garment is only form, fabric, and
            light. Quiet luxury, engineered for the future — a uniform for
            those who move with precision.
          </p>
          <p className="mt-5 max-w-lg text-sm leading-8 text-muted md:text-base">
            From void-black wool to chalk poplin, AW26 is monochrome by
            intention. Copenhagen drafts. Dhaka finishes. Limited quantities,
            never diluted.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
