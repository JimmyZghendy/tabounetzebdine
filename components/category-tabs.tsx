"use client"

import { cn } from "@/lib/utils"
import { CategoryIcon } from "@/components/category-icon"
import { menuData, type Lang } from "@/lib/menu-data"

type Props = {
  lang: Lang
  activeId: string
  onSelect: (id: string) => void
}

export function CategoryTabs({ lang, activeId, onSelect }: Props) {
  return (
    <nav className="sticky top-[63px] z-30 bg-cream/95 backdrop-blur border-b border-charcoal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        {menuData.map((cat) => {
          const active = cat.id === activeId
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={(e) => {
                e.preventDefault()
                onSelect(cat.id)
              }}
              className={cn(
                "shrink-0 whitespace-nowrap flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition",
                active
                  ? "bg-charcoal text-cream border-charcoal"
                  : "border-charcoal/15 text-charcoal/70 hover:border-olive/60 hover:text-charcoal",
              )}
            >
              <CategoryIcon id={cat.id} />
              <span>{lang === "ar" ? cat.ar : cat.en}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
