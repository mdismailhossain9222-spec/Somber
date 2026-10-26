"use client";

import { useMemo, useState, type ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import {
  allColors,
  allSizes,
  categories,
  products,
  type ProductCategory,
} from "@/lib/products";

export function ShopClient() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [size, setSize] = useState<string>("All");
  const [color, setColor] = useState<string>("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (category !== "All" && product.category !== category) return false;
      if (size !== "All" && !product.sizes.includes(size)) return false;
      if (color !== "All" && !product.colors.includes(color)) return false;
      return true;
    });
  }, [category, size, color]);

  return (
    <section className="px-6 pb-28 pt-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            AW26 Collection
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">The Shop</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
            Twelve silhouettes. Limited quantities. Each piece is numbered in
            the atelier ledger before it leaves the house.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit space-y-10 border border-white/10 p-6 lg:sticky lg:top-28">
            <FilterGroup label="Category">
              {categories.map((item) => (
                <FilterChip
                  key={item}
                  active={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </FilterChip>
              ))}
            </FilterGroup>
            <FilterGroup label="Size">
              {["All", ...allSizes].map((item) => (
                <FilterChip
                  key={item}
                  active={size === item}
                  onClick={() => setSize(item)}
                >
                  {item}
                </FilterChip>
              ))}
            </FilterGroup>
            <FilterGroup label="Color">
              {["All", ...allColors].map((item) => (
                <FilterChip
                  key={item}
                  active={color === item}
                  onClick={() => setColor(item)}
                >
                  {item}
                </FilterChip>
              ))}
            </FilterGroup>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <p className="py-24 text-center text-sm text-muted">
                No pieces match this edit. Reset the filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product, index) => (
                  <FadeIn key={product.id} delay={(index % 3) * 0.05}>
                    <ProductCard product={product} />
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
        {label}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-colors ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-white/15 text-muted hover:border-white/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
