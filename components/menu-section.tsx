"use client"

import { CategoryIcon } from "@/components/category-icon"
import { formatPrice, type Lang, type MenuCategory, type MenuItem } from "@/lib/menu-data"

type Props = {
  category: MenuCategory
  items: MenuItem[]
  lang: Lang
}

export function MenuSection({ category, items, lang }: Props) {
  return (
    <section id={category.id} className="scroll-mt-32">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-10 rounded-full bg-olive/10 text-olive-dark flex items-center justify-center shrink-0">
          <CategoryIcon id={category.id} className="w-5 h-5" />
        </span>
        <div>
          <h2 className="font-display font-bold text-2xl text-charcoal">
            {lang === "ar" ? category.ar : category.en}
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-1" />
        </div>
      </div>

      <div className="bg-card/70 rounded-2xl border border-charcoal/10 p-3 sm:p-5">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
          {items.map((item) => (
            <div
              key={item.en}
              className="scale-in flex items-baseline py-3 border-b border-charcoal/10 last:border-none sm:[&:nth-last-child(-n+2)]:border-none"
            >
              <span className="font-medium text-charcoal">
                {lang === "ar" ? item.ar : item.en}
              </span>
              <span className="leader" aria-hidden />
              <span className="font-display font-semibold text-terracotta whitespace-nowrap">
                {formatPrice(item, lang)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
