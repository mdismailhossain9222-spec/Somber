import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "127.0.0.1";
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

export function middleware(request: NextRequest) {
  const ip = getClientIp(request);
  const now = Date.now();

  if (hits.size > 5000) {
    for (const [key, value] of hits) {
      if (now > value.resetAt) hits.delete(key);
    }
  }

  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", String(MAX_REQUESTS));
    response.headers.set("X-RateLimit-Remaining", String(MAX_REQUESTS - 1));
    return response;
  }

  if (entry.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a moment." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(MAX_REQUESTS),
          "X-RateLimit-Remaining": "0",
          "Retry-After": String(Math.ceil((entry.resetAt - now) / 1000)),
        },
      },
    );
  }

  entry.count += 1;
  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", String(MAX_REQUESTS));
  response.headers.set(
    "X-RateLimit-Remaining",
    String(Math.max(0, MAX_REQUESTS - entry.count)),
  );
  return response;
}

export const config = {
  matcher: ["/api/checkout"],
};
