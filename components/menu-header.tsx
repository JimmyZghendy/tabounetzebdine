"use client"

import Image from "next/image"
import { Search, Globe } from "lucide-react"
import { translations, type Lang } from "@/lib/menu-data"

type Props = {
  lang: Lang
  search: string
  onSearch: (value: string) => void
  onToggleLang: () => void
}

export function MenuHeader({ lang, search, onSearch, onToggleLang }: Props) {
  const t = translations[lang]

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-charcoal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-card flex items-center justify-center stamp shrink-0 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Tabounet Zebdine logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-lg sm:text-xl text-charcoal">
              {t.brand}
            </p>
            <p className="text-[11px] sm:text-xs tracking-wide text-charcoal/60">
              {t.digitalMenu}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3 text-charcoal/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="w-40 sm:w-56 md:w-64 ps-9 pe-3 py-2 rounded-full bg-card/80 border border-charcoal/15 text-sm focus:outline-none focus:ring-2 focus:ring-olive/50 placeholder:text-charcoal/40"
              placeholder={t.searchPh}
              aria-label={t.searchPh}
            />
          </div>

          <button
            type="button"
            onClick={onToggleLang}
            className="font-bilingual flex items-center gap-1.5 bg-charcoal text-cream text-sm font-semibold rounded-full px-3 py-2 hover:bg-charcoal-2 transition"
          >
            <Globe className="w-4 h-4" />
            <span>{t.langToggleLabel}</span>
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3 text-charcoal/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full ps-9 pe-3 py-2 rounded-full bg-card/80 border border-charcoal/15 text-sm focus:outline-none focus:ring-2 focus:ring-olive/50 placeholder:text-charcoal/40"
            placeholder={t.searchPh}
            aria-label={t.searchPh}
          />
        </div>
      </div>
    </header>
  )
}
