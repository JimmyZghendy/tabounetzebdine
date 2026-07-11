type Props = {
  id: string
  className?: string
}

export function CategoryIcon({ id, className = "w-4 h-4" }: Props) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    className,
    "aria-hidden": true,
  } as const

  switch (id) {
    case "manaqish":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="9" cy="10" r=".6" fill="currentColor" stroke="none" />
          <circle cx="13" cy="9" r=".6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13" r=".6" fill="currentColor" stroke="none" />
          <circle cx="10" cy="14" r=".6" fill="currentColor" stroke="none" />
        </svg>
      )
    case "desserts":
      return (
        <svg {...common}>
          <path d="M4 12l8-7 8 7" />
          <path d="M5 12v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6" />
          <path d="M4 12h16" />
        </svg>
      )
    case "appetizers":
      return (
        <svg {...common}>
          <path d="M3 11a9 9 0 0 0 18 0Z" />
          <path d="M3 11h18" />
          <path d="M12 11V4" />
          <path d="M9 6l3-2 3 2" />
        </svg>
      )
    case "fekhara":
      return (
        <svg {...common}>
          <path d="M7 8c-1 2-1 8 1 10.5A3 3 0 0 0 10.5 20h3a3 3 0 0 0 2.5-1.5C18 16 18 10 17 8" />
          <path d="M6 8h12" />
          <path d="M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      )
    case "drinks":
      return (
        <svg {...common}>
          <path d="M6 3h12l-1.2 13.5A3 3 0 0 1 13.8 19h-3.6a3 3 0 0 1-3-2.5L6 3Z" />
          <path d="M5 3h14" />
          <path d="M9 21h6" />
          <path d="M12 19v2" />
        </svg>
      )
    default:
      return null
  }
}
