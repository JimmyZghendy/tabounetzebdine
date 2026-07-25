"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { translations, type Lang } from "@/lib/menu-data";

export function MenuHero({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a15a 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center flex flex-col items-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-card p-1.5 stamp overflow-hidden mb-6">
          <Image
            src="/logo.jpeg"
            alt="Tabounet Zebdine logo"
            width={160}
            height={160}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-balance">
          {t.heroTitle}
        </h1>
        <div className="w-16 h-px bg-gold/60 my-5" />
        <p className="max-w-xl text-cream/80 text-base sm:text-lg text-pretty">
          {t.heroBody}
        </p>

        <a
          href="#manaqish"
          className="mt-8 inline-flex items-center gap-2 bg-gold text-charcoal font-display font-semibold px-6 py-3 rounded-full hover:bg-gold/90 transition"
        >
          <span>{t.viewMenu}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </a>
      </div>

      <div className="torn-top bg-cream" />
    </section>
  );
}
