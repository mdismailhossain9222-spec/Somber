import { db } from "@/db";
import { orderItems, orders } from "@/db/schema";
import { getProductById } from "@/lib/products";
import { validateCheckout } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const raw = body as {
    name?: string;
    phone?: string;
    address?: string;
    paymentMethod?: string;
    items?: { id?: string; quantity?: number }[];
  };

  const result = validateCheckout({
    name: typeof raw.name === "string" ? raw.name : "",
    phone: typeof raw.phone === "string" ? raw.phone : "",
    address: typeof raw.address === "string" ? raw.address : "",
    paymentMethod: typeof raw.paymentMethod === "string" ? raw.paymentMethod : "",
    items: Array.isArray(raw.items)
      ? raw.items.map((item) => ({
          id: typeof item?.id === "string" ? item.id : "",
          quantity: typeof item?.quantity === "number" ? item.quantity : 0,
        }))
      : [],
  });

  if (!result.ok) {
    return Response.json(
      { ok: false, errors: result.errors, error: "Please correct the form." },
      { status: 400 },
    );
  }

  const lineItems = [];
  for (const item of result.data.items) {
    const product = getProductById(item.id);
    if (!product) {
      return Response.json(
        { ok: false, error: "One or more products are no longer available." },
        { status: 400 },
      );
    }
    lineItems.push({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: item.quantity,
    });
  }

  const total = lineItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  try {
    const inserted = await db
      .insert(orders)
      .values({
        name: result.data.name,
        phone: result.data.phone,
        address: result.data.address,
        paymentMethod: result.data.paymentMethod,
        total,
      })
      .returning({ id: orders.id });

    const orderId = inserted[0]?.id;
    if (!orderId) {
      return Response.json(
        { ok: false, error: "Could not create order." },
        { status: 500 },
      );
    }

    await db.insert(orderItems).values(
      lineItems.map((item) => ({
        orderId,
        productId: item.productId,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
    );

    return Response.json({
      ok: true,
      orderId,
      total,
      paymentMethod: result.data.paymentMethod,
    });
  } catch {
    return Response.json(
      { ok: false, error: "Unable to save your order. Please try again." },
      { status: 500 },
    );
  }
}
