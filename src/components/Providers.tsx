"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.15, smoothWheel: true }}>
      <CartProvider>{children}</CartProvider>
    </ReactLenis>
  );
}
