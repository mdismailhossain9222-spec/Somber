export function Marquee() {
  const phrase =
    "NEW COLLECTION OUT NOW • FREE SHIPPING WORLDWIDE • SØNDER AW26 • ";

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#09090b] py-5">
      <div className="marquee-track flex w-max whitespace-nowrap">
        <span className="px-4 font-serif text-3xl tracking-[0.18em] text-foreground/90 md:text-5xl">
          {phrase}
          {phrase}
        </span>
        <span className="px-4 font-serif text-3xl tracking-[0.18em] text-foreground/90 md:text-5xl">
          {phrase}
          {phrase}
        </span>
      </div>
    </section>
  );
}
