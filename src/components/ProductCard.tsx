"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatBdt, type Product } from "@/lib/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#111113]">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-muted">
            {product.category}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-foreground">
            {product.title}
          </h3>
        </div>
        <p className="pt-5 text-sm text-muted">{formatBdt(product.price)}</p>
      </div>
    </Link>
  );
}
