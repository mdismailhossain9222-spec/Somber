"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import {
  formatUsd,
  getRelatedProducts,
  type Product,
} from "@/lib/products";

export function ProductView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(product.gallery[0] ?? product.image);
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const related = getRelatedProducts(product.id, 3);

  return (
    <article className="px-6 pb-28 pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#111113]">
            <Image
              src={activeImage}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.gallery.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(src)}
                className={`relative aspect-[4/5] overflow-hidden border ${
                  activeImage === src ? "border-foreground" : "border-transparent"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:pt-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            {product.category}
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">{product.title}</h1>
          <p className="mt-5 font-serif text-3xl">{formatUsd(product.price)}</p>
          <p className="mt-8 max-w-md text-sm leading-8 text-muted">
            {product.description}
          </p>
          <p className="mt-5 max-w-md text-sm leading-8 text-muted">
            {product.story}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
            {product.fabric}
          </p>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Size
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  className={`min-w-12 border px-4 py-2 text-xs tracking-[0.16em] ${
                    size === option
                      ? "border-foreground bg-foreground text-background"
                      : "border-white/20 text-muted"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Color
            </p>
            <p className="mt-3 text-sm text-foreground">
              {product.colors.join(" · ")}
            </p>
          </div>

          <button
            type="button"
            onClick={() => addItem(product)}
            className="mt-12 w-full bg-foreground py-4 text-[11px] uppercase tracking-[0.32em] text-background"
          >
            Add to Cart — {size}
          </button>
        </FadeIn>
      </div>

      <section className="mx-auto mt-28 max-w-7xl">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            Continue the line
          </p>
          <h2 className="mt-3 font-serif text-4xl">You may also like</h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <ProductCard product={item} />
            </FadeIn>
          ))}
        </div>
      </section>
    </article>
  );
}
