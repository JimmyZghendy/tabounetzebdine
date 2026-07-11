"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { MenuHeader } from "@/components/menu-header"
import { MenuHero } from "@/components/menu-hero"
import { CategoryTabs } from "@/components/category-tabs"
import { MenuSection } from "@/components/menu-section"
import { menuData, translations, type Lang } from "@/lib/menu-data"

export function MenuApp() {
  const [lang, setLang] = useState<Lang>("en")
  const [search, setSearch] = useState("")
  const [activeId, setActiveId] = useState(menuData[0].id)
  const isClickScrolling = useRef(false)

  // Keep <html> lang/dir in sync with the selected language.
  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  const query = search.trim().toLowerCase()

  const visibleCategories = useMemo(() => {
    return menuData
      .map((cat) => ({
        category: cat,
        items: cat.items.filter((it) => {
          if (!query) return true
          const name = (lang === "ar" ? it.ar : it.en).toLowerCase()
          return name.includes(query)
        }),
      }))
      .filter((entry) => entry.items.length > 0)
  }, [query, lang])

  const hasResults = visibleCategories.length > 0

  // Scroll-spy: highlight the tab of the section currently in view.
  useEffect(() => {
    if (!hasResults) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-160px 0px -60% 0px", threshold: 0 },
    )
    const sections = document.querySelectorAll("main section[id]")
    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [hasResults, visibleCategories])

  function handleSelectTab(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    setActiveId(id)
    isClickScrolling.current = true
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 700)
  }

  const t = translations[lang]

  return (
    <>
      <MenuHeader
        lang={lang}
        search={search}
        onSearch={setSearch}
        onToggleLang={() => setLang((prev) => (prev === "en" ? "ar" : "en"))}
      />
      <MenuHero lang={lang} />
      <CategoryTabs lang={lang} activeId={activeId} onSelect={handleSelectTab} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {!hasResults ? (
          <div className="text-center py-16">
            <p className="font-display text-xl font-semibold text-charcoal/70">
              {t.noResults}
            </p>
            <p className="text-charcoal/50 text-sm mt-1">{t.noResultsHint}</p>
          </div>
        ) : (
          <div className="space-y-16">
            {visibleCategories.map(({ category, items }) => (
              <MenuSection
                key={category.id}
                category={category}
                items={items}
                lang={lang}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-charcoal text-cream/80">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-card overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Tabounet Zebdine logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-display font-semibold text-cream">{t.brand}</p>
          </div>
          <p className="text-sm text-cream/50 text-center">{t.footerTag}</p>
        </div>
      </footer>
    </>
  )
}
