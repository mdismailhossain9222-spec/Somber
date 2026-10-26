"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export function Featured() {
  const featured = getFeaturedProducts();

  return (
    <section id="featured" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
                Featured Collection
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                The AW26 edit.
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[11px] uppercase tracking-[0.32em] text-muted transition-colors hover:text-foreground"
            >
              View all pieces →
            </Link>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.08}>
              <ProductCard product={product} priority={index < 2} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
