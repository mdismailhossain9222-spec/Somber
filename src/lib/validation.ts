export type CheckoutPayload = {
  name: string;
  phone: string;
  address: string;
  paymentMethod: "bkash" | "nagad";
  items: { id: string; quantity: number }[];
};

export type FieldErrors = Partial<
  Record<"name" | "phone" | "address" | "paymentMethod" | "items", string>
>;

const BD_PHONE = /^(?:\+8801|01)[3-9]\d{8}$/;

export function normalizePhone(phone: string): string {
  return phone.replace(/[\s-]/g, "");
}

export function validateCheckout(input: {
  name: string;
  phone: string;
  address: string;
  paymentMethod: string;
  items: { id: string; quantity: number }[];
}): { ok: true; data: CheckoutPayload } | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const phone = normalizePhone(input.phone);
  const address = input.address.trim();
  const paymentMethod = input.paymentMethod;

  if (name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!BD_PHONE.test(phone)) {
    errors.phone = "Enter a valid Bangladeshi number (01XXXXXXXXX).";
  }

  if (address.length < 10) {
    errors.address = "Please enter a complete delivery address.";
  }

  if (paymentMethod !== "bkash" && paymentMethod !== "nagad") {
    errors.paymentMethod = "Select bKash or Nagad to continue.";
  }

  if (!Array.isArray(input.items) || input.items.length === 0) {
    errors.items = "Your cart is empty.";
  } else if (
    input.items.some(
      (item) =>
        !item?.id ||
        typeof item.quantity !== "number" ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 20,
    )
  ) {
    errors.items = "Cart quantities are invalid.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      address,
      paymentMethod: paymentMethod as "bkash" | "nagad",
      items: input.items,
    },
  };
}
