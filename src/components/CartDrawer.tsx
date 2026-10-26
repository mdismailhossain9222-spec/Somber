"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatBdt } from "@/lib/products";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    total,
    updateQuantity,
    removeItem,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-white/10 bg-[#09090b]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <h2 className="font-serif text-2xl tracking-wide">Cart</h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center text-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <p className="text-sm tracking-wide text-muted">
                  Your collection is empty.
                </p>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-[#111113]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-serif text-lg">{item.title}</p>
                            <p className="mt-1 text-sm text-muted">
                              {formatBdt(item.price)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-foreground"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-auto flex items-center gap-3 pt-3">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center border border-white/15 text-muted"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center border border-white/15 text-muted"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-white/10 px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.24em] text-muted">
                  Total
                </span>
                <span className="font-serif text-2xl">{formatBdt(total)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={closeCart}
                className={`mt-5 flex w-full items-center justify-center py-4 text-[11px] uppercase tracking-[0.32em] ${
                  items.length === 0
                    ? "pointer-events-none bg-white/10 text-muted"
                    : "bg-foreground text-background hover:bg-white"
                }`}
              >
                Checkout
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
