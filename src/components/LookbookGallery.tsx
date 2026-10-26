"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { lookbook } from "@/lib/lookbook";

export function LookbookGallery() {
  return (
    <section className="px-6 pb-28 pt-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            AW26 Lookbook
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Light, cloth, and the space between.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
            Photographed in Copenhagen and Dhaka. No retouching of silhouette.
            Only grain, weather, and the garments as they fall.
          </p>
        </FadeIn>

        <div className="mt-20 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {lookbook.map((frame, index) => (
            <motion.figure
              key={frame.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group mb-5 break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden bg-[#111113] ${
                  frame.tall ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={frame.image}
                    alt={frame.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                    {frame.chapter}
                  </p>
                  <p className="mt-1 font-serif text-xl text-white">
                    {frame.title}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
