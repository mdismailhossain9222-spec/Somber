"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-white/10 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted">
            Contact
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            Write to the atelier.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-8 text-muted">
            Private appointments, press, and made-to-measure enquiries are
            received at the house. We reply within two working days.
          </p>
          <div className="mt-10 space-y-4 text-sm text-muted">
            <p>Nyhavn 12, 1051 Copenhagen</p>
            <p>Gulshan Avenue, Dhaka 1212</p>
            <p>atelier@sonder.studio</p>
            <p>+880 1711 000 260</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          {sent ? (
            <p className="border border-white/15 px-8 py-16 text-center font-serif text-2xl">
              Received. The house will write back.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-sm outline-none focus:border-foreground"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-sm outline-none focus:border-foreground"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm outline-none focus:border-foreground"
                />
              </label>
              <button
                type="submit"
                className="bg-foreground px-10 py-4 text-[11px] uppercase tracking-[0.32em] text-background"
              >
                Send
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
