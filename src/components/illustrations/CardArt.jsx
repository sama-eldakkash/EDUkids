import { Lion } from "./Characters"
import { ObjectArt } from "./Objects"

export function LettersArt() {
  return (
    <div className="relative mx-auto h-24 w-28" aria-hidden="true">
      <span className="absolute start-0 top-1 font-sans text-5xl font-bold leading-none text-[#E25B4A]">A</span>
      <ObjectArt name="apple" decorative className="absolute end-0 bottom-0 h-16 w-16" />
    </div>
  )
}

export function NumbersArt() {
  return (
    <svg viewBox="0 0 160 90" className="h-20 w-full" aria-hidden="true">
      <text x="8" y="72" fontSize="68" fontFamily="Fredoka, Tajawal, sans-serif" fontWeight="700" fill="#FF8DA1">
        1
      </text>
      <text x="52" y="72" fontSize="68" fontFamily="Fredoka, Tajawal, sans-serif" fontWeight="700" fill="#2F7653">
        2
      </text>
      <text x="100" y="72" fontSize="68" fontFamily="Fredoka, Tajawal, sans-serif" fontWeight="700" fill="#49A3C4">
        3
      </text>
    </svg>
  )
}

export function ColorsArt() {
  return (
    <svg viewBox="0 0 140 90" className="h-20 w-full" aria-hidden="true">
      <path
        d="M28 62c0-24 16-40 40-40 18 0 26 10 26 20 0 8-6 12-14 12h-8c-6 0-8 4-8 8 0 12-10 18-22 18-8 0-14-8-14-18z"
        fill="#fff"
        stroke="#244A3A"
        strokeWidth="3"
      />
      <circle cx="46" cy="36" r="6" fill="#FF8DA1" />
      <circle cx="62" cy="32" r="6" fill="#FFD45C" />
      <circle cx="76" cy="40" r="6" fill="#83D4EF" />
      <circle cx="58" cy="48" r="6" fill="#2F7653" />
      <circle cx="78" cy="62" r="7" fill="#FFF9EF" stroke="#244A3A" strokeWidth="3" />
    </svg>
  )
}

export function AnimalsArt() {
  return <Lion decorative className="mx-auto h-24 w-24" />
}

export function GamesArt() {
  return (
    <svg viewBox="0 0 140 90" className="h-20 w-full" aria-hidden="true">
      <circle cx="36" cy="46" r="22" fill="#FF8DA1" />
      <circle cx="70" cy="40" r="22" fill="#FFD45C" />
      <circle cx="104" cy="46" r="22" fill="#83D4EF" />
      <path d="M70 28l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#fff" />
    </svg>
  )
}
