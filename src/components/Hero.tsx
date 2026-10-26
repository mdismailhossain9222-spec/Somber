"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LightBloom from "@/components/LightBloom";

const TITLE = "SØNDER";

const letterEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightBloom
          variant="shafts"
          direction="bottom"
          background="#000000"
          baseColor="#6B2BF5"
          accentColor="#EFE6FF"
          speed={100}
          hover={114}
          light={{ rise: 79, spread: 72 }}
          shafts={{ count: 20, amount: 85, drift: 79 }}
          finish={{ grain: 12, vignette: 25 }}
        />
      </div>

      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: letterEase }}
          className="mb-8 text-[11px] uppercase tracking-[0.48em] text-muted"
        >
          AW26 Atelier
        </motion.p>

        <h1 className="font-serif text-[22vw] leading-[0.82] tracking-[-0.04em] text-foreground sm:text-[18vw] md:text-[14vw] lg:text-[11rem]">
          {TITLE.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="inline-block"
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.28 + index * 0.08,
                ease: letterEase,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: letterEase }}
          className="mt-8 max-w-xl text-sm leading-relaxed tracking-[0.08em] text-muted sm:text-base"
        >
          Redefining the boundaries of modern fashion.
        </motion.p>

        <motion.a
          href="#featured"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="pointer-events-auto mt-16 inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted"
        >
          Explore
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
