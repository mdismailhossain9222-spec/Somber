"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export function Toast() {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 border border-white/15 bg-[#09090b]/90 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
