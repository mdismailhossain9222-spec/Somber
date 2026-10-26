import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
        Atelier
      </p>
      <h1 className="mt-4 font-serif text-5xl">This piece has left the house.</h1>
      <Link
        href="/shop"
        className="mt-10 border border-white/20 px-8 py-3 text-[11px] uppercase tracking-[0.32em]"
      >
        Return to shop
      </Link>
    </main>
  );
}
