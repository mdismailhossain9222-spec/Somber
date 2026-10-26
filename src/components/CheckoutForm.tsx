"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatBdt } from "@/lib/products";
import { validateCheckout, type FieldErrors } from "@/lib/validation";
import Link from "next/link";
import Image from "next/image";

export function CheckoutForm() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"bkash" | "nagad" | "">("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{
    orderId: number;
    paymentMethod: string;
    total: number;
  } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const result = validateCheckout({
      name,
      phone,
      address,
      paymentMethod,
      items: items.map((item) => ({ id: item.id, quantity: item.quantity })),
    });

    if (!result.ok) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
        orderId?: number;
        total?: number;
        paymentMethod?: string;
      };

      if (response.status === 429) {
        setServerError("Too many attempts. Please wait a minute and try again.");
        return;
      }

      if (!response.ok || !payload.ok) {
        if (payload.errors) setErrors(payload.errors);
        setServerError(payload.error ?? "Unable to place your order.");
        return;
      }

      setSuccess({
        orderId: payload.orderId ?? 0,
        paymentMethod: payload.paymentMethod ?? result.data.paymentMethod,
        total: payload.total ?? total,
      });
      clearCart();
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (items.length === 0 && !success) {
    return (
      <div className="mx-auto max-w-xl px-6 py-40 text-center">
        <h1 className="font-serif text-5xl">Your cart is empty</h1>
        <p className="mt-4 text-sm text-muted">
          Return to the collection to begin.
        </p>
        <Link
          href="/#collection"
          className="mt-10 inline-flex border border-white/20 px-8 py-3 text-[11px] uppercase tracking-[0.32em]"
        >
          View Collection
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-32 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            Checkout
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Place order</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            Delivery across Bangladesh. Pay securely with bKash or Nagad upon
            confirmation.
          </p>

          <form onSubmit={onSubmit} className="mt-12 space-y-8" noValidate>
            <Field
              label="Full name"
              error={errors.name}
              htmlFor="name"
            >
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="w-full border-b border-white/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
                placeholder="Your name"
              />
            </Field>

            <Field label="Phone" error={errors.phone} htmlFor="phone">
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                inputMode="tel"
                className="w-full border-b border-white/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
                placeholder="01XXXXXXXXX"
              />
            </Field>

            <Field label="Address" error={errors.address} htmlFor="address">
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
                placeholder="House, road, city"
              />
            </Field>

            <fieldset>
              <legend className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Payment method
              </legend>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <PaymentCard
                  selected={paymentMethod === "bkash"}
                  onSelect={() => setPaymentMethod("bkash")}
                  title="bKash"
                  subtitle="Mobile financial service"
                  accent="#E2136E"
                />
                <PaymentCard
                  selected={paymentMethod === "nagad"}
                  onSelect={() => setPaymentMethod("nagad")}
                  title="Nagad"
                  subtitle="Digital payment"
                  accent="#F6921E"
                />
              </div>
              {errors.paymentMethod && (
                <p className="mt-3 text-xs text-bkash">{errors.paymentMethod}</p>
              )}
            </fieldset>

            {errors.items && (
              <p className="text-xs text-bkash">{errors.items}</p>
            )}
            {serverError && <p className="text-xs text-bkash">{serverError}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 bg-foreground py-4 text-[11px] uppercase tracking-[0.32em] text-background disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Place Order
            </button>
          </form>
        </div>

        <aside className="h-fit border border-white/10 p-8">
          <h2 className="font-serif text-2xl">Summary</h2>
          <ul className="mt-8 space-y-5">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4">
                <div className="relative h-20 w-14 overflow-hidden bg-[#111113]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between">
                  <div>
                    <p className="font-serif">{item.title}</p>
                    <p className="mt-1 text-xs text-muted">
                      Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm text-muted">
                    {formatBdt(item.price * item.quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
              Total
            </span>
            <span className="font-serif text-3xl">{formatBdt(total)}</span>
          </div>
        </aside>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md border border-white/10 bg-[#09090b] p-10 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-serif text-3xl">Order confirmed</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Thank you. Order #{success.orderId} totaling{" "}
                {formatBdt(success.total)} will be processed via{" "}
                {success.paymentMethod === "nagad" ? "Nagad" : "bKash"}.
              </p>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="mt-8 w-full bg-foreground py-3 text-[11px] uppercase tracking-[0.32em] text-background"
              >
                Return home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-[11px] uppercase tracking-[0.28em] text-muted"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-xs text-bkash">{error}</p>}
    </div>
  );
}

function PaymentCard({
  selected,
  onSelect,
  title,
  subtitle,
  accent,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="relative border px-5 py-5 text-left transition-colors"
      style={{
        borderColor: selected ? accent : "rgba(255,255,255,0.15)",
        background: selected ? `${accent}14` : "transparent",
      }}
    >
      <span
        className="absolute right-4 top-4 h-3 w-3 rounded-full"
        style={{ background: selected ? accent : "transparent", outline: `1px solid ${accent}` }}
      />
      <p className="font-serif text-2xl" style={{ color: accent }}>
        {title}
      </p>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
    </button>
  );
}
