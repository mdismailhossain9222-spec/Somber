import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata = {
  title: "Checkout — SØNDER",
  description: "Complete your SØNDER order with bKash or Nagad.",
};

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutForm />
    </main>
  );
}
