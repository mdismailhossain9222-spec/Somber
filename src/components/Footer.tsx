import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl tracking-[0.18em]">SØNDER</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Redefining the boundaries of modern fashion. Scandinavian
            minimalism, finished with precision. Copenhagen / Dhaka.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
            House
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <Link href="/shop" className="hover:text-foreground">
              Shop
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/lookbook" className="hover:text-foreground">
              Lookbook
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
            Atelier
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <Link href="/#contact" className="hover:text-foreground">
              Contact
            </Link>
            <Link href="/checkout" className="hover:text-foreground">
              Checkout
            </Link>
            <p>atelier@sonder.studio</p>
            <p>+880 1711 000 260</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl text-[11px] uppercase tracking-[0.24em] text-muted/70">
        © {new Date().getFullYear()} SØNDER. All rights reserved.
      </p>
    </footer>
  );
}
